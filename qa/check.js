#!/usr/bin/env node
/*
 * Renders every mockup in a real headless browser and checks the two things
 * that kept silently breaking these pages:
 *
 *   1. Horizontal overflow at 320 / 768 / 1440. BRIEF.md's definition of done
 *      says "works at 320px", and six sites were failing it.
 *   2. WCAG AA contrast for text sitting on a flat background. Four sites had
 *      text at under 2:1 — effectively invisible — because a nav selector like
 *      `nav.site-nav a` (specificity 0,1,2) silently beat a later
 *      `.btn-call` (0,1,0) and repainted the button label in the nav's colour.
 *
 * Both classes of bug survived hand-checking by several people. Render, don't
 * reason.
 *
 *   node qa/check.js              # all sites
 *   node qa/check.js golds-roofing tt-plumbing
 *
 * Needs Playwright. It is not a dependency of this repo (there is no build
 * step here on purpose), so it is resolved from whichever local project has a
 * copy. Adjust PLAYWRIGHT_CANDIDATES or set PLAYWRIGHT_PATH if none match.
 */

const fs = require('fs');
const path = require('path');

const PLAYWRIGHT_CANDIDATES = [
  process.env.PLAYWRIGHT_PATH,
  '/Users/levimackay/Developer/rexburg-housing/node_modules/playwright',
  '/Users/levimackay/Developer/noble-jewelers/node_modules/playwright',
  'playwright',
].filter(Boolean);

let chromium;
for (const p of PLAYWRIGHT_CANDIDATES) {
  try { ({ chromium } = require(p)); break; } catch (_) { /* try next */ }
}
if (!chromium) {
  console.error('Could not resolve Playwright. Set PLAYWRIGHT_PATH to a checkout that has it.');
  console.error('Tried:\n  ' + PLAYWRIGHT_CANDIDATES.join('\n  '));
  process.exit(2);
}

const SITES_DIR = path.join(__dirname, '..', 'sites');
const WIDTHS = [320, 768, 1440];

// Skip-links are deliberately parked off-canvas at a large negative offset and
// do not create a scrollbar; anything else off-canvas is a real bug.
const OFFSCREEN_OK = -1000;

function contrastProbe() {
  const lum = (c) => {
    const [r, g, b] = c.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const parse = (s) => {
    const m = s && s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map(parseFloat);
    return { rgb: [p[0], p[1], p[2]], a: p.length > 3 ? p[3] : 1 };
  };

  // Walk to the nearest opaque background, but bail out if anything in between
  // paints a gradient or image, is semi-transparent, or blends. We cannot know
  // the real backdrop there, and guessing manufactures false failures.
  const bgOf = (el) => {
    let n = el;
    while (n && n !== document.documentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
      if (cs.opacity !== '1') return null;
      if (cs.mixBlendMode && cs.mixBlendMode !== 'normal') return null;
      const c = parse(cs.backgroundColor);
      if (c && c.a >= 0.999) return c.rgb;
      if (c && c.a > 0.02) return null;
      n = n.parentElement;
    }
    const bcs = getComputedStyle(document.body);
    if (bcs.backgroundImage && bcs.backgroundImage !== 'none') return null;
    const bb = parse(bcs.backgroundColor);
    return bb && bb.a >= 0.999 ? bb.rgb : [255, 255, 255];
  };

  const out = [];
  const sel = 'p, span, a, li, dt, dd, h1, h2, h3, h4, small, figcaption, label, button';
  document.querySelectorAll(sel).forEach((el) => {
    const text = (el.textContent || '').trim();
    if (text.length < 3) return;
    // Only elements that own a text node, so we attribute colour correctly.
    if (el.children.length && ![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return;

    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) < 0.3) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;

    const fg = parse(cs.color);
    if (!fg || fg.a < 0.999) return;
    const bg = bgOf(el);
    if (!bg) return;

    const L1 = lum(fg.rgb);
    const L2 = lum(bg);
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const isLarge = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = isLarge ? 3 : 4.5;

    if (ratio < need - 0.05) {
      out.push({
        text: text.slice(0, 46),
        ratio: +ratio.toFixed(2),
        need,
        size: Math.round(size),
        cls: typeof el.className === 'string' ? el.className.slice(0, 28) : '',
      });
    }
  });

  const seen = new Set();
  return out.filter((f) => {
    const k = f.text + f.ratio;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

(async () => {
  const requested = process.argv.slice(2);
  const sites = fs
    .readdirSync(SITES_DIR)
    .filter((s) => fs.existsSync(path.join(SITES_DIR, s, 'index.html')))
    .filter((s) => requested.length === 0 || requested.includes(s));

  if (!sites.length) {
    console.error('No matching sites.');
    process.exit(2);
  }

  const browser = await chromium.launch();
  let failed = 0;

  for (const site of sites) {
    const url = 'file://' + path.join(SITES_DIR, site, 'index.html');
    const problems = [];

    for (const width of WIDTHS) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 20000 });
        await page.waitForTimeout(400);

        const overflow = await page.evaluate((ok) => {
          const d = document.documentElement;
          if (d.scrollWidth <= d.clientWidth) return null;
          const guilty = [];
          document.querySelectorAll('*').forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.width > 0 && (r.right > d.clientWidth + 0.5 || r.left < ok)) {
              guilty.push(
                `${el.tagName.toLowerCase()}.${typeof el.className === 'string' ? el.className.slice(0, 30) : ''}` +
                ` (${Math.round(r.left)}→${Math.round(r.right)})`
              );
            }
          });
          return { sw: d.scrollWidth, cw: d.clientWidth, guilty: guilty.slice(0, 4) };
        }, OFFSCREEN_OK);

        if (overflow) {
          problems.push(`overflow @${width}px: scrollWidth ${overflow.sw} vs ${overflow.cw}`);
          overflow.guilty.forEach((g) => problems.push(`    ${g}`));
        }

        if (width === 1440) {
          const fails = await page.evaluate(contrastProbe);
          fails.slice(0, 6).forEach((f) =>
            problems.push(`contrast ${f.ratio}:1 (needs ${f.need}) ${f.size}px .${f.cls} "${f.text}"`)
          );
        }
      } catch (e) {
        problems.push(`error @${width}px: ${e.message}`);
      }
      await page.close();
    }

    if (problems.length) {
      failed++;
      console.log(`FAIL  ${site}`);
      problems.forEach((p) => console.log(`      ${p}`));
    } else {
      console.log(`ok    ${site}`);
    }
  }

  await browser.close();
  console.log(`\n${sites.length - failed}/${sites.length} clean.`);
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(2);
});

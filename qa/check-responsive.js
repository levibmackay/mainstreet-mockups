#!/usr/bin/env node
/*
 * Static-analysis mobile-layout checks. check.sh verifies the content
 * non-negotiables (noindex, concept note, viewport tag present, h1,
 * reduced-motion) and qa/check.js renders every page in a real browser to
 * catch overflow and contrast. Neither one ever asked "does this actually
 * work on a phone" at the markup/CSS level — a page could pass both and
 * still ship a 400px fixed sidebar or an input that makes iOS zoom on
 * focus. This script closes that gap with pure text/regex analysis: no
 * browser, no rendering, just the same HTML/CSS resolution check.sh
 * already does.
 *
 * Findings are split into FAIL (fails the run, near-zero false-positive
 * risk, name the file and say what to do) and WARN (printed for a human to
 * judge, never fails the run). Anything that requires knowing the real
 * cascade or the rendered box model to be sure about is a WARN — that is
 * what qa/check.js's browser render is for. A checker that cries wolf gets
 * ignored, so when in doubt this file stays quiet rather than failing.
 *
 *   node qa/check-responsive.js              # all sites
 *   node qa/check-responsive.js golds-roofing tt-plumbing
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITES_DIR = path.join(ROOT, 'sites');
const MOBILE_MAX = 768; // matches the breakpoint definition in the brief

// ---------------------------------------------------------------------------
// File resolution — mirrors check.sh's stylesheet/bundle resolution so a
// shared assets/site.css is picked up the same way for both scripts, and a
// future React-bundle site (see check.sh's comment on that) gets its bundle
// text searched for @media the same way check.sh searches it for
// prefers-reduced-motion.
// ---------------------------------------------------------------------------

function resolveLinked(file, html, tagRe, attr) {
  const dir = path.dirname(file);
  const out = [];
  let m;
  while ((m = tagRe.exec(html))) {
    const href = m[1];
    if (!href || /^https?:\/\//.test(href) || href.startsWith('//')) continue;
    let cand = path.join(dir, href);
    if (!fs.existsSync(cand)) cand = path.join(ROOT, href.replace(/^\//, ''));
    if (fs.existsSync(cand)) out.push(cand);
  }
  return out;
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

// ---------------------------------------------------------------------------
// Minimal CSS walker. Only needs to know, for each declaration block: its
// selector text, its declarations, and whether it sits outside any @media
// (condition === null) or inside one whose condition names a mobile
// breakpoint (max-width <= MOBILE_MAX, checked separately per rule).
// Keyframes/font-face/page/charset/import bodies are skipped outright since
// their contents are not element selectors.
// ---------------------------------------------------------------------------

function parseCss(css) {
  const rules = [];
  const mediaConditions = [];
  let i = 0;
  const n = css.length;

  function skipBlock() {
    let d = 1;
    while (i < n && d > 0) {
      if (css[i] === '{') d++;
      else if (css[i] === '}') d--;
      i++;
    }
  }

  function walk(condition) {
    while (i < n) {
      while (i < n && /\s/.test(css[i])) i++;
      if (i >= n) return;
      if (css[i] === '}') { i++; return; }
      const start = i;
      while (i < n && css[i] !== '{' && css[i] !== '}') i++;
      if (i >= n) return;
      const head = css.slice(start, i).trim();
      if (css[i] === '}') { i++; continue; }
      i++; // consume {
      if (/^@media/.test(head) || /^@container/.test(head)) {
        const cond = head.replace(/^@(media|container)/, '').trim();
        if (/^@media/.test(head)) mediaConditions.push(cond);
        walk(cond);
      } else if (/^@supports/.test(head) || /^@layer/.test(head)) {
        walk(condition); // passthrough, not a width condition
      } else if (head.startsWith('@')) {
        skipBlock(); // @font-face, @keyframes, @page, etc: not real selectors
      } else {
        const bodyStart = i;
        let d = 1;
        while (i < n && d > 0) {
          if (css[i] === '{') d++;
          else if (css[i] === '}') d--;
          i++;
        }
        const decls = css.slice(bodyStart, i - 1);
        rules.push({ condition, selector: head, decls });
      }
    }
  }

  walk(null);
  return { rules, mediaConditions };
}

// Used to decide whether a rule sitting inside a media query is worth
// inspecting for rules 5/7 (are its declarations even reachable at a phone
// width). A max-width query of ANY size still applies all the way down to
// 320px by definition, so it always counts. A min-width query only counts
// if the floor is small enough that a real phone can still hit it. This is
// deliberately permissive (false negatives here just mean a real browser
// render via qa/check.js has to catch it instead) to avoid the opposite,
// worse failure mode of a strict px cutoff flagging a working page.
function isMobileCondition(condition) {
  if (condition === null) return true;
  if (/max-width/.test(condition)) return true;
  const min = condition.match(/min-width\s*:\s*(\d+)/);
  if (min && parseInt(min[1], 10) <= 480) return true;
  return false;
}

const ICONY = /icon|logo|avatar|badge|swatch|thumb|spinner|loader|chip|\bmark\b|dot\b|glyph|blob|shape|orb\b|decor|ornament|noise|grain|texture/i;

// ---------------------------------------------------------------------------
// Rule checks. Each returns { fails: [...], warns: [...] } of message
// strings already formatted for output.
// ---------------------------------------------------------------------------

// 1. Viewport meta present and sane.
function checkViewport(html) {
  const fails = [];
  const m = html.match(/<meta[^>]+name=["']viewport["'][^>]*>/i);
  if (!m) {
    fails.push('MISSING viewport meta -> add <meta name="viewport" content="width=device-width, initial-scale=1">');
    return { fails, warns: [] };
  }
  const tag = m[0];
  if (!/width=device-width/i.test(tag)) {
    fails.push('VIEWPORT missing width=device-width -> phones will render the page at desktop width and shrink it');
  }
  if (/user-scalable\s*=\s*["']?no["']?/i.test(tag)) {
    fails.push('VIEWPORT sets user-scalable=no -> remove it, blocking pinch-zoom is an accessibility failure');
  }
  const scaleMatch = tag.match(/maximum-scale\s*=\s*["']?([\d.]+)/i);
  if (scaleMatch && parseFloat(scaleMatch[1]) < 5) {
    fails.push(`VIEWPORT sets maximum-scale=${scaleMatch[1]} -> remove maximum-scale or raise it to 5+, low values block zoom for low-vision users`);
  }
  return { fails, warns: [] };
}

// 1b. Mobile nav reachability: a nav hidden below a breakpoint with no
// detected fallback control leaves the rest of the site completely
// unreachable on a phone. This caught a real bug (the whole primary nav
// went display:none under 860px with nothing replacing it). Kept
// deliberately narrow to avoid firing on the very common, harmless pattern
// of hiding a CTA's text label or a secondary link while keeping the nav
// itself (or a call button) visible.
const NAV_CONTAINER = /(^|[\s>+~,.#[])(nav(\.[\w-]+)?|\.[\w-]*nav-links?[\w-]*)(\s|$|[.:,[])/i;
const NAV_SUBPART = /nav-cta|cta-text|cta-label|\.long\b|brand-text|nav-toggle-text/i;
const FALLBACK = /toggle|hamburger|burger|menu-btn|nav-btn|mobile-nav|nav-open|menu-open|nav-panel|menu-panel|drawer/i;

function checkMobileNav(rules, html) {
  const fails = [];
  const hidden = rules.filter(
    (r) =>
      r.condition !== null &&
      /max-width/.test(r.condition) &&
      NAV_CONTAINER.test(r.selector) &&
      !NAV_SUBPART.test(r.selector) &&
      /display\s*:\s*none/.test(r.decls)
  );
  if (!hidden.length) return fails;

  const hasCssFallback = rules.some(
    (r) => FALLBACK.test(r.selector) && /display\s*:\s*(block|flex|grid|inline-block|inline-flex)/.test(r.decls)
  );
  const hasTransformPanel = rules.some((r) => NAV_CONTAINER.test(r.selector) && /transform\s*:/.test(r.decls));
  const hasAriaMenuControl = /<(button|a)\b[^>]*aria-label=["'][^"']*menu[^"']*["']/i.test(html);
  if (hasCssFallback || hasTransformPanel || hasAriaMenuControl) return fails;

  for (const r of hidden) {
    fails.push(
      `MOBILE NAV ${r.selector.trim().slice(0, 50)} { display:none } at ${r.condition} with no toggle/hamburger/mobile-menu fallback found -> add a visible control that reveals navigation on phones, otherwise every page below that breakpoint is unreachable from here`
    );
  }
  return fails;
}

// 2. Fixed pixel widths on layout containers, outside media queries.
function checkFixedWidths(rules) {
  const warns = [];
  for (const r of rules) {
    if (r.condition !== null) continue; // only outside media queries, per the rule
    if (ICONY.test(r.selector)) continue;
    if (/^(html|body|:root)\b/.test(r.selector.trim())) continue;
    const re = /(?<![-\w])(min-)?width\s*:\s*(\d+)px/g;
    let m;
    while ((m = re.exec(r.decls))) {
      const px = parseInt(m[2], 10);
      if (px > 320) {
        const prop = (m[1] || '') + 'width';
        warns.push(`WARN ${r.selector.trim().slice(0, 50)} { ${prop}:${px}px } outside a media query -> if this is a layout container, switch to max-width or a responsive unit so it can shrink below ${px}px; ignore if it is intentionally desktop-only`);
      }
    }
  }
  return warns;
}

// 3. Images: hardcoded width > 320 with no responsive covering rule.
function checkImages(html, cssText) {
  const fails = [];
  const hasGlobalImgRule = /\bimg\b[^{}]*\{[^{}]*\b(max-width|width)\s*:\s*(100%|[0-9]+%|none|auto)/i.test(cssText);
  if (hasGlobalImgRule) return { fails, warns: [] };

  const imgRe = /<img\b[^>]*>/gi;
  let m;
  let flagged = 0;
  while ((m = imgRe.exec(html))) {
    const tag = m[0];
    if (/\bsrcset\s*=/.test(tag)) continue; // already responsive
    if (/style\s*=\s*["'][^"']*(max-width|width\s*:\s*100%)/i.test(tag)) continue;
    const w = tag.match(/\bwidth\s*=\s*["']?(\d+)["']?/);
    if (w && parseInt(w[1], 10) > 320) {
      flagged++;
      if (flagged <= 3) {
        const src = (tag.match(/\bsrc\s*=\s*["']([^"']+)["']/) || [, '(no src)'])[1];
        fails.push(`IMG ${src} has width="${w[1]}" and no page/stylesheet rule sets img max-width -> add "img{max-width:100%}" (or scope it) so it shrinks on narrow screens`);
      }
    }
  }
  if (flagged > 3) fails.push(`IMG +${flagged - 3} more images with the same problem`);
  return { fails, warns: [] };
}

// 4. Media query coverage: at least one, and at least one mobile.
function checkMediaQueries(mediaConditions, bundleText) {
  const fails = [];
  const fromBundle = (bundleText.match(/@media[^{;]*/g) || []);
  const all = mediaConditions.concat(fromBundle);
  if (all.length === 0) {
    fails.push(`MISSING media query -> the effective stylesheet has no @media rule; add one at max-width:${MOBILE_MAX}px (or narrower) so layout actually adapts below desktop width`);
    return { fails, warns: [] };
  }
  // A max-width query, at whatever pixel value the author picked (768,
  // 800, 900 are all common in this codebase), still applies all the way
  // down to 320px by definition — it is "mobile-targeting" regardless of
  // the exact number. A min-width query signals mobile-first architecture
  // (the un-queried base styles ARE the mobile styles). Modern range
  // syntax (width>=40rem / width<=48rem), which the Vite/Tailwind bundled
  // sites emit, counts the same way. The only real failure is a
  // stylesheet with @media rules that never reference width at all
  // (e.g. only prefers-reduced-motion or hover) — that page has no
  // responsive breakpoints, full stop.
  const hasWidthQuery = all.some((c) => /(min-width|max-width|width\s*[<>]=?)/.test(c));
  if (!hasWidthQuery) {
    fails.push('MEDIA QUERIES found but none are width-based (max-width/min-width or width>=/width<=) -> add one, the existing queries never change layout by viewport width');
  }
  return { fails, warns: [] };
}

// 5. Form control font-size under 16px (iOS zoom-on-focus).
function checkFormFontSize(rules) {
  const fails = [];
  for (const r of rules) {
    if (r.condition !== null && !isMobileCondition(r.condition)) continue;
    if (/::?placeholder/i.test(r.selector)) continue;
    if (/\[type=["']?(checkbox|radio|range|submit|button|file|color)["']?\]/i.test(r.selector)) continue;
    if (!/(^|[\s,>+~.#[])(input|select|textarea)\b/i.test(r.selector)) continue;
    const m = r.decls.match(/font-size\s*:\s*([\d.]+)px/);
    if (m && parseFloat(m[1]) < 16) {
      fails.push(`FORM ${r.selector.trim().slice(0, 50)} { font-size:${m[1]}px } -> iOS Safari zooms the page in when a focused input is under 16px; raise it to at least 16px`);
    }
  }
  return fails;
}

// 6a. white-space:nowrap on selectors that look like real body copy, not
// utility classes (sr-only) or short UI labels (nav links, badges).
function checkNowrap(rules) {
  const warns = [];
  const textish = /^(p|\.lead|\.desc|\.description|\.bio|\.copy|\.paragraph|\.subtitle|\.tagline|blockquote)\b/i;
  for (const r of rules) {
    if (!/white-space\s*:\s*nowrap/.test(r.decls)) continue;
    if (/clip\s*:\s*rect/.test(r.decls)) continue; // sr-only utility pattern
    if (/sr-only|visually-hidden|visuallyhidden/i.test(r.selector)) continue;
    if (!textish.test(r.selector.trim())) continue;
    warns.push(`WARN ${r.selector.trim().slice(0, 50)} sets white-space:nowrap on what looks like body copy -> confirm the text is always short, otherwise it will force horizontal scroll on narrow screens`);
  }
  return warns;
}

// 6b. Tables without a detected scroll wrapper.
function checkTables(html, cssText) {
  const warns = [];
  const tableRe = /<table\b[^>]*>/gi;
  let m;
  while ((m = tableRe.exec(html))) {
    const before = html.slice(Math.max(0, m.index - 400), m.index);
    const wrapM = before.match(/<div\b[^>]*class="([^"]*)"[^>]*>\s*$/);
    let wrapped = false;
    if (wrapM) {
      const cls = wrapM[1];
      if (/scroll|table-wrap|overflow/i.test(cls)) wrapped = true;
      else {
        const clsFirst = cls.split(/\s+/)[0];
        const re = new RegExp(`\\.${clsFirst.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\{[^}]*overflow-x\\s*:\\s*(auto|scroll)`, 'i');
        if (re.test(cssText)) wrapped = true;
      }
    }
    if (/style\s*=\s*["'][^"']*overflow-x\s*:\s*(auto|scroll)/i.test(before.slice(-200))) wrapped = true;
    if (!wrapped) {
      const line = html.slice(0, m.index).split('\n').length;
      warns.push(`WARN <table> at line ${line} has no detected scroll wrapper -> wrap wide tables in a div styled overflow-x:auto so they scroll instead of blowing out 320px layouts`);
    }
  }
  return warns;
}

// 6c. position:fixed elements with a fixed pixel width over 320px.
function checkFixedPositionWidth(rules) {
  const fails = [];
  for (const r of rules) {
    if (r.condition !== null) continue;
    if (!/position\s*:\s*fixed/.test(r.decls)) continue;
    const m = r.decls.match(/(?<![-\w])width\s*:\s*(\d+)px/);
    if (m && parseInt(m[1], 10) > 320) {
      fails.push(`POSITION:FIXED ${r.selector.trim().slice(0, 50)} { width:${m[1]}px } -> a fixed-position element wider than 320px forces horizontal scroll on narrow phones; use max-width or a responsive unit like min(90vw, ${m[1]}px)`);
    }
  }
  return fails;
}

// 7. Tap targets: block-ish anchors/buttons with an explicit height under 44px.
function checkTapTargets(rules) {
  const warns = [];
  const tappable = /(^|[\s,>+~.#[])(a|button)\b|\.btn|\.button|\bcta\b/i;
  for (const r of rules) {
    if (r.condition !== null && !isMobileCondition(r.condition)) continue;
    if (!tappable.test(r.selector)) continue;
    if (!/display\s*:\s*(block|inline-block|flex|inline-flex)/.test(r.decls)) continue;
    const m = r.decls.match(/(?<!min-)(?:^|[\s;{])height\s*:\s*(\d+)px/) || r.decls.match(/min-height\s*:\s*(\d+)px/);
    if (m && parseInt(m[1], 10) < 44) {
      warns.push(`WARN ${r.selector.trim().slice(0, 50)} { height:${m[1]}px } -> under the 44px tap-target minimum, likely to cause mis-taps on phones`);
    }
  }
  return warns;
}

// ---------------------------------------------------------------------------

function checkPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  const linkRe = /<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"/g;
  const scriptRe = /<script[^>]*src="([^"]*)"/g;

  const sheetFiles = resolveLinked(file, html, linkRe);
  const bundleFiles = resolveLinked(file, html, scriptRe);

  const inlineStyles = (html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [])
    .map((s) => s.replace(/<style[^>]*>|<\/style>/gi, ''))
    .join('\n');
  const sheetText = sheetFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const bundleText = bundleFiles
    .filter((f) => f.endsWith('.js'))
    .map((f) => fs.readFileSync(f, 'utf8'))
    .join('\n');

  const cssText = stripComments(inlineStyles + '\n' + sheetText);
  const { rules, mediaConditions } = parseCss(cssText);

  const fails = [];
  const warns = [];

  const viewport = checkViewport(html);
  fails.push(...viewport.fails);

  fails.push(...checkMobileNav(rules, html));

  warns.push(...checkFixedWidths(rules));

  const img = checkImages(html, cssText);
  fails.push(...img.fails);

  const mq = checkMediaQueries(mediaConditions, bundleText);
  fails.push(...mq.fails);

  fails.push(...checkFormFontSize(rules));
  warns.push(...checkNowrap(rules));
  warns.push(...checkTables(html, cssText));
  fails.push(...checkFixedPositionWidth(rules));
  warns.push(...checkTapTargets(rules));

  return { fails, warns };
}

(function main() {
  const requested = process.argv.slice(2);
  const files = fs
    .readdirSync(SITES_DIR)
    .filter((s) => fs.statSync(path.join(SITES_DIR, s)).isDirectory())
    .filter((s) => requested.length === 0 || requested.includes(s))
    .flatMap((s) =>
      fs
        .readdirSync(path.join(SITES_DIR, s))
        .filter((f) => f.endsWith('.html'))
        .sort((a, b) => (a === 'index.html' ? -1 : b === 'index.html' ? 1 : a.localeCompare(b)))
        .map((f) => ({ slug: s, file: f, full: path.join(SITES_DIR, s, f) }))
    );

  if (!files.length) {
    console.error('No matching sites.');
    process.exit(2);
  }

  let failed = 0;
  let warned = 0;

  for (const { slug, file, full } of files) {
    const label = file === 'index.html' ? slug : `${slug}/${file}`;
    const { fails, warns } = checkPage(full);

    if (fails.length) {
      failed++;
      console.log(`FAIL  ${label}`);
      fails.forEach((p) => console.log(`      ${p}`));
      warns.forEach((p) => console.log(`      ${p}`));
    } else if (warns.length) {
      warned++;
      console.log(`WARN  ${label}`);
      warns.forEach((p) => console.log(`      ${p}`));
    } else {
      console.log(`PASS  ${label}`);
    }
  }

  console.log(`\n${files.length - failed}/${files.length} clean, ${warned} with warnings only.`);
  if (failed) console.log('Problems found above.');
  process.exit(failed ? 1 : 0);
})();

#!/usr/bin/env node
/*
 * Wires each site's index.html nav to whatever interior pages actually exist.
 *
 * The production build agents were forbidden from touching index.html so they
 * would not collide with the image/logo agents editing the same file. That
 * left every homepage nav still pointing at in-page anchors. This closes that.
 *
 * Two rules it enforces, both of which matter:
 *   - Link every interior page that exists.
 *   - Link NO page that does not. A nav link to a 404 is worse than a smaller
 *     site, and interior page sets are deliberately uneven: a site with no
 *     verified "about" content has no about.html on purpose.
 *
 * Every site has its own hand-built design, so this does not impose markup.
 * It clones the existing <li> in the nav and swaps href/text, inheriting
 * whatever classes and structure that site already uses.
 *
 *   node qa/wire-nav.js              # dry run, prints planned changes
 *   node qa/wire-nav.js --apply      # write
 *   node qa/wire-nav.js --apply golds-roofing
 */

const fs = require('fs');
const path = require('path');

const SITES_DIR = path.join(__dirname, '..', 'sites');
const APPLY = process.argv.includes('--apply');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// Order matters: this is the order they appear in the nav.
const PAGES = [
  ['services.html', 'Services'],
  ['about.html', 'About'],
  ['gallery.html', 'Gallery'],
  ['contact.html', 'Contact'],
];

let changed = 0;
let skipped = 0;

for (const slug of fs.readdirSync(SITES_DIR)) {
  const dir = path.join(SITES_DIR, slug);
  const index = path.join(dir, 'index.html');
  if (!fs.existsSync(index)) continue;
  if (only.length && !only.includes(slug)) continue;

  const present = PAGES.filter(([f]) => fs.existsSync(path.join(dir, f)));
  if (!present.length) {
    console.log(`--    ${slug}: no interior pages yet`);
    skipped++;
    continue;
  }

  let html = fs.readFileSync(index, 'utf8');

  const already = present.filter(([f]) => html.includes(`href="${f}"`));
  if (already.length === present.length) {
    console.log(`ok    ${slug}: nav already linked (${present.length} pages)`);
    skipped++;
    continue;
  }

  // Find the primary nav list. Prefer a <nav> containing <li><a>.
  const navMatch = html.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/i);
  if (!navMatch) {
    console.log(`WARN  ${slug}: no <nav> found, needs manual wiring`);
    skipped++;
    continue;
  }
  const nav = navMatch[0];

  // Each site has its own hand-built nav, so there is no single markup shape.
  // Try <li><a> first, then bare <a> as a direct child of <nav>. Clone
  // whichever exists so the new links inherit that site's own classes.
  let template = null;
  let closer = null;
  const liMatch = nav.match(/<li\b[^>]*>\s*<a\b[^>]*>[\s\S]*?<\/a>\s*<\/li>/i);
  if (liMatch) {
    template = liMatch[0];
    closer = '</li>';
  } else {
    // Skip anchors that are clearly the logo lockup or a call-to-action
    // button, since cloning those produces a wrong-looking nav item.
    const anchors = nav.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
    const plain = anchors.filter(
      (a) => !/logo|brand|skip-link|btn|cta|call/i.test(a) && !/<svg/i.test(a)
    );
    if (plain.length) {
      template = plain[plain.length - 1];
      closer = '</a>';
    }
  }

  if (!template) {
    console.log(`WARN  ${slug}: no clonable nav link found, needs manual wiring`);
    skipped++;
    continue;
  }

  const build = (href, label) =>
    template
      .replace(/href="[^"]*"/, `href="${href}"`)
      .replace(/(<a\b[^>]*>)[\s\S]*?(<\/a>)/, `$1${label}$2`);

  // Repoint before appending. These homepages were built as single pages, so
  // their navs are in-page anchors (#services, #contact). Blindly appending
  // page links leaves the nav showing "Services" twice pointing at two
  // different places, which reads as broken to the owner we are pitching.
  // Where an existing anchor already carries the same label, retarget it.
  let navOut = nav;
  const appended = [];

  for (const [file, label] of present) {
    if (html.includes(`href="${file}"`)) continue;

    const anchorRe = new RegExp(
      `(<a\\b[^>]*href=")#[^"]*("[^>]*>\\s*)${label}(\\s*</a>)`,
      'i'
    );
    if (anchorRe.test(navOut)) {
      navOut = navOut.replace(anchorRe, `$1${file}$2${label}$3`);
    } else {
      appended.push(build(file, label));
    }
  }

  const items = appended;
  const nav_ = navOut;

  // Insert INSIDE the links container when one exists.
  //
  // This matters more than it looks. Several sites hide their link list on
  // small screens (`.nav-links { display: none }` under a breakpoint) while
  // leaving the call button visible. Appending to the <nav> itself puts the
  // new links outside that container, so they never hide, and the header
  // overflows at 320px. That is exactly what happened on the first run.
  const container = nav_.match(/<(div|ul)\b[^>]*class="[^"]*(nav-links|nav-list|menu|links)[^"]*"[^>]*>[\s\S]*?<\/\1>/i);

  let newNav;
  if (container) {
    const block = container[0];
    const closeTag = block.slice(block.lastIndexOf('</'));
    const cut = block.lastIndexOf(closeTag);
    const newBlock = block.slice(0, cut) + '  ' + items.join('\n        ') + '\n      ' + block.slice(cut);
    newNav = nav_.replace(block, newBlock);
  } else {
    const lastIdx = nav_.lastIndexOf(closer);
    const cut = lastIdx + closer.length;
    newNav = nav_.slice(0, cut) + '\n        ' + items.join('\n        ') + nav_.slice(cut);
  }

  html = html.replace(nav, items.length ? newNav : nav_);

  console.log(
    `${APPLY ? 'WROTE' : 'plan '} ${slug}: ${items.length} added, ${present.length - items.length} repointed -> ${present.map(([f]) => f).join(', ')}`
  );
  if (APPLY) fs.writeFileSync(index, html);
  changed++;
}

console.log(`\n${changed} site(s) ${APPLY ? 'updated' : 'to update'}, ${skipped} skipped.`);
if (!APPLY && changed) console.log('Dry run. Re-run with --apply to write.');
if (APPLY && changed) console.log('Now run ./check.sh and node qa/check.js to verify.');

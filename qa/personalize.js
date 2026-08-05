#!/usr/bin/env node
/*
 * Personalization audit.
 *
 * check.sh catches rule violations. qa/check.js catches rendering defects.
 * Neither catches the thing that actually loses the sale: a page that is
 * technically perfect and could be any plumber in any town.
 *
 * This scores the proxies for "feels like THIS business" described in
 * docs/PERSONALIZATION.md, and ranks sites worst-first so effort goes where
 * the page is most generic.
 *
 * IT MEASURES PROXIES, NOT QUALITY. A high score is not proof a page feels
 * personal, and a low score on a business with genuinely nothing available
 * is not a defect. Read it as a worklist, not a grade.
 *
 *   node qa/personalize.js              # all sites, ranked
 *   node qa/personalize.js golds-roofing
 *   node qa/personalize.js --verbose    # show what matched
 */

const fs = require('fs');
const path = require('path');

const SITES_DIR = path.join(__dirname, '..', 'sites');

// Upper Valley place names. A page that names real towns reads as local.
const PLACES = [
  'Rexburg', 'Rigby', 'Idaho Falls', 'Sugar City', 'St. Anthony',
  'Saint Anthony', 'Ashton', 'Teton', 'Driggs', 'Menan', 'Ririe',
  'Shelley', 'Blackfoot', 'Salem', 'Newdale', 'Parker', 'Thornton',
  'Upper Valley', 'Madison County', 'Jefferson County', 'Fremont County',
];

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function auditPage(html) {
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const logoImgs = imgs.filter((t) => /logo|brand|wordmark|mark\b/i.test(t));

  // Inline SVG that carries meaning, not decoration. role="img"/<title> is
  // the accessible-meaningful marker BRIEF.md already requires.
  const svgs = html.match(/<svg\b[\s\S]*?<\/svg>/gi) || [];
  const meaningfulSvg = svgs.filter((s) => /<title\b/i.test(s) || /role="img"/i.test(s));

  const text = strip(html);
  const placeHits = {};
  for (const p of PLACES) {
    const n = (text.match(new RegExp(p.replace(/\./g, '\\.'), 'gi')) || []).length;
    if (n) placeHits[p] = n;
  }
  const placeTotal = Object.values(placeHits).reduce((a, b) => a + b, 0);

  return {
    images: imgs.length,
    logo: logoImgs.length > 0,
    svg: meaningfulSvg.length,
    places: placeTotal,
    placeNames: Object.keys(placeHits).length,
    placeHits,
    tel: /href="tel:\+?\d/.test(html),
    year: /\b(?:since|established|est\.?)\s*(?:in\s*)?(19|20)\d{2}\b/i.test(html),
    words: text.split(' ').length,
  };
}

// Deliberately blunt weights. This ranks, it does not grade.
function score(a) {
  let s = 0;
  if (a.logo) s += 30;                       // biggest identity signal available
  s += Math.min(a.images, 6) * 6;            // real photos, capped
  s += Math.min(a.svg, 8) * 2;               // drawn-from-their-reality work
  s += Math.min(a.placeNames, 5) * 4;        // breadth of real place names
  s += Math.min(a.places, 12);               // how often locality is stated
  if (a.tel) s += 5;
  if (a.year) s += 5;
  return Math.min(s, 100);
}

const verbose = process.argv.includes('--verbose');
const requested = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const rows = fs
  .readdirSync(SITES_DIR)
  .filter((s) => fs.existsSync(path.join(SITES_DIR, s, 'index.html')))
  .filter((s) => requested.length === 0 || requested.includes(s))
  .map((slug) => {
    const dir = path.join(SITES_DIR, slug);
    const pages = fs.readdirSync(dir).filter((f) => f.endsWith('.html'));
    // Audit the whole site, since a production build spreads content across
    // pages and judging it by index.html alone understates it.
    const merged = pages.map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
    const a = auditPage(merged);
    a.pages = pages.length;
    a.slug = slug;
    a.score = score(a);
    a.blocked = fs.existsSync(path.join(dir, 'DO-NOT-CONTACT.md'));
    return a;
  })
  .sort((x, y) => x.score - y.score);

if (!rows.length) {
  console.error('No matching sites.');
  process.exit(2);
}

console.log('Personalization audit — worst first. Proxies, not quality.\n');
console.log(
  'score  ' +
    'site'.padEnd(30) +
    'pg  img  logo  svg  places  tel  year'
);
console.log('-'.repeat(84));

for (const r of rows) {
  if (r.blocked) {
    console.log(
      String(r.score).padStart(5) +
        '  ' +
        (r.slug + ' (DO NOT CONTACT)').padEnd(30) +
        '  skipped from outreach'
    );
    continue;
  }
  console.log(
    String(r.score).padStart(5) +
      '  ' +
      r.slug.padEnd(30) +
      String(r.pages).padStart(2) +
      String(r.images).padStart(5) +
      (r.logo ? '   yes' : '    no') +
      String(r.svg).padStart(5) +
      String(r.places).padStart(8) +
      (r.tel ? '  yes' : '   no') +
      (r.year ? '   yes' : '    no')
  );
  if (verbose && Object.keys(r.placeHits).length) {
    console.log('       places: ' + JSON.stringify(r.placeHits));
  }
}

const active = rows.filter((r) => !r.blocked);
const noLogo = active.filter((r) => !r.logo);
const noImg = active.filter((r) => r.images === 0);
const thinPlace = active.filter((r) => r.placeNames < 2);

console.log('\nWorklist');
console.log(`  no real logo:        ${noLogo.length}/${active.length}  ${noLogo.map((r) => r.slug).join(', ') || '-'}`);
console.log(`  zero photos:         ${noImg.length}/${active.length}  ${noImg.map((r) => r.slug).join(', ') || '-'}`);
console.log(`  names <2 real towns: ${thinPlace.length}/${active.length}  ${thinPlace.map((r) => r.slug).join(', ') || '-'}`);
console.log('\nSee docs/PERSONALIZATION.md. Specificity is the cheapest lever;');
console.log('a logo and real town names beat a photo you are not allowed to use.');

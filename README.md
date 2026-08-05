# Main Street Sites — prospect mockups

Spec concept designs built for Rexburg-area businesses as sales collateral.
Each is a single self-contained `index.html` with no build step, no
dependencies, and no external requests, served straight from GitHub Pages.

Prospects and their verified details come from the lead lists in the private
`mainstreet-sites-sales` repo.

## Layout

```
sites/<slug>/index.html   one mockup per prospect
index.html                private contact sheet linking every mockup
robots.txt                disallows all crawlers
check.sh                  verifies every mockup against the rules below
build-index.sh            regenerates index.html
BRIEF.md                  the build brief every mockup was made against
```

## Rules every mockup follows

These are enforced by `check.sh` — run it before pushing.

- **`noindex, nofollow`** on every page, plus a site-wide `robots.txt`.
  These must never rank in search and compete with a prospect's real site.
- **A concept-disclosure footer** on every page stating the page is a design
  proposal and is not affiliated with or endorsed by the business. These
  pages carry real businesses' names, addresses, and phone numbers, so they
  must not read as the business's official site.
- **No fabricated facts.** No invented testimonials, star ratings, review
  counts, staff names, credentials, hours, prices, or claims. Every stated
  fact traces to a verified entry in the lead lists. Where review data was
  thin or unverified, the page shows no rating at all and builds trust from
  verified history instead.
- **Real photos only, or none at all.** *Revised 2026-08-03; this rule
  previously banned photographs outright.* Photos may come from exactly two
  sources: the business's own current website, or its Google Business Profile.
  No stock, no AI images, no photos of another business, and no identifiable
  faces — staff headshots are excluded even when they are genuine photos from
  the business's own site. Every image is logged per file in
  `sites/<slug>/IMAGE-SOURCES.md` with its exact source URL, so it can be
  pulled quickly if anyone questions it. **An image whose source cannot be
  stated does not go on the page.**
  Most prospects have no usable photography at all — no website, a builder
  template serving licensed stock, or a Google listing nobody ever uploaded to
  — so a photo-free page is the common outcome, not a failure. Those pages
  carry the design on CSS and inline SVG alone.
- Responsive to 320px, `prefers-reduced-motion` respected, semantic
  landmarks, one `<h1>`, AA contrast.

## Usage

```bash
./check.sh          # verify every mockup against the structural rules
node qa/check.js    # render every mockup and check overflow + contrast
./build-index.sh    # regenerate the contact sheet after adding a site
```

`check.sh` greps the markup. `qa/check.js` opens each page in a real headless
browser, which catches what grepping and hand-checking do not:

- **Horizontal overflow** at 320 / 768 / 1440. Six sites were silently failing
  the 320px requirement.
- **WCAG AA contrast** for text on flat backgrounds. Four sites had text under
  2:1 — effectively invisible — because a nav rule like `nav.site-nav a`
  (specificity 0,1,2) silently beat a later `.btn-call` (0,1,0) and repainted
  the button label in the nav's own colour.

Both classes of bug survived review by several people before a browser caught
them. Render, don't reason. It needs Playwright, which is not a dependency of
this repo (no build step here on purpose) — it resolves one from a sibling
project, or set `PLAYWRIGHT_PATH`.

## Before sending one to a prospect

Open it on a real phone first. Confirm the phone number dials the right
business, and re-check any figure on the page against the lead list — the
review counts in those lists came from aggregators, not Google directly,
and are directionally correct rather than exact.

**Last updated:** 2026-08-05 07:55 PDT

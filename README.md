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
- **No photographs.** Real photos of these businesses were not available,
  and stock photos of people who obviously don't work there is a
  bad-site signal in our own prospect rubric. Visuals are CSS and inline SVG.
- Responsive to 320px, `prefers-reduced-motion` respected, semantic
  landmarks, one `<h1>`, AA contrast.

## Usage

```bash
./check.sh          # verify every mockup
./build-index.sh    # regenerate the contact sheet after adding a site
```

## Before sending one to a prospect

Open it on a real phone first. Confirm the phone number dials the right
business, and re-check any figure on the page against the lead list — the
review counts in those lists came from aggregators, not Google directly,
and are directionally correct rather than exact.

**Last updated:** 2026-08-03

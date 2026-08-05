# Image sources — Styles & Smiles Family Salon mockup

Date: 2026-08-05

**Result: zero images added, and no sourcing pass was run.** This is the one
site in the project that was deliberately skipped rather than checked.

## Why it was skipped

Styles & Smiles opted out of outreach on 2026-07-30, the same day they were
first contacted. Since the page will not be sent to them, spending a full
crawl-and-vet pass on it was not worth the cost, and pulling photographs off
the website of a business that has explicitly asked not to be contacted is the
wrong instinct regardless of what BRIEF.md rule 4 technically permits.

So: no website crawl, no Google Business Profile check, no images downloaded,
no `img/` folder. `index.html` references no images and remains CSS and inline
SVG only.

## What that means if this is ever revisited

Nothing here is a finding about whether usable photography exists — nobody
looked. If this page is ever repurposed (as a portfolio piece, or if the owner
comes back), the sourcing pass still has to be done from scratch under the
normal rules: their own current website or their Google Business Profile only,
no stock, no AI images, no identifiable faces, and a per-file record of the
exact source URL in this file.

## The page itself

Still maintained to the same standard as the rest of the set — it is part of
the portfolio even though it will not be sent. It has had the full polish
pass, and it passes the repo's rendered QA check (`node qa/check.js`) for
320px overflow and WCAG AA contrast.

Two honest gaps are stated on the page on purpose and should not be "fixed"
by inventing values: there is no published price list, and no phone number is
listed — email is the only contact route confirmed for this business.

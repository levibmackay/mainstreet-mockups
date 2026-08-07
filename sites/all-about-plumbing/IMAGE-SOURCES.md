# Image sources — All About Plumbing Repair mockup

Date pulled: 2026-08-04

**Business verified:** All About Plumbing Repair, Rexburg/Idaho Falls/Rigby,
ID. Phone (208) 359-2247 matches exactly between the mockup, the business's
own site (allaboutplumbingrepair.com), and its Google Business Profile
(2437 W 4700 S, Rexburg, ID 83440).

**Result: 4 images added**, all real completed-work photography, no faces,
no stock, no manufacturer marketing graphics. `sites/all-about-plumbing/img/`
totals 848KB, well under the 2MB budget.

## Images used

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/vanity-install.jpg` | https://allaboutplumbingrepair.com/wp-content/uploads/2025/11/plumbers-idaho-falls-rexburg-rigby.jpg | Own site (homepage) | "Recent Work" section, card 1; also gallery.html | 2026-08-04 |
| `img/tankless-water-heater-install.jpg` | https://allaboutplumbingrepair.com/wp-content/uploads/2025/11/tankless-water-heather-installation.jpg | Own site (homepage) | "Recent Work" section, card 2; also gallery.html | 2026-08-04 |
| `img/pipe-repair-in-progress.jpg` | https://allaboutplumbingrepair.com/wp-content/uploads/2025/11/water-line-repair.jpg | Own site (homepage) | "Recent Work" section, card 3; also gallery.html | 2026-08-04 |
| `img/vanity-rough-in.jpg` | https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnGVyYmQvazXqw-b0YZddNGz0JKQGl_P9GQhHcHpRA187pq4bn4gjvH3NjJqgu9DD47NpkmtXxyGHGGWCBk2hdJXlhVjAqymrSJ-fJMf0W3suJexYMx222eua2A4qJMgEoH22J5BMfIWERv (Google-hosted photo ID, served at `=s1600`) | Google Maps / Google Business Profile listing (header photo, captioned "Photo - Oct 2025") | "Recent Work" section, card 4; also gallery.html | 2026-08-04 |

**2026-08-05 update:** all four images noted above are also reused on the new
`gallery.html` page (larger single/two-column treatment, fuller captions).
No new images were added; same 4 files, no swaps.

All four optimized with macOS `sips` (JPEG quality 80, 1600px long-edge cap).
Integrated into a new "Recent Work" section inserted between Services and
Why Us, styled as a 4-card grid reusing the existing `.service-card`-style
copper-bordered card treatment and flanked by the same pipe-run SVG dividers
used elsewhere on the page, so it sits inside the established visual system
rather than bolting on a generic gallery. Each `<img>` has descriptive alt
text, explicit `width`/`height` matching its optimized dimensions, and
`loading="lazy"` (none of these are above the fold, so none needed to be
eager).

## What was checked

**Own site (allaboutplumbingrepair.com), crawled via `curl`:** homepage,
`/about/`, `/contact/`, `/plumbing-services-in-rexburg-id/`,
`/rexburg-plumbing-services/`, `/request-a-service/`.

Accepted (homepage uploads, `2025/11/` — genuine job photos, no faces, no
stock tells in filename or content):
- `plumbers-idaho-falls-rexburg-rigby.jpg` — finished black soapstone
  bathroom vanity with supply lines visible underneath.
- `tankless-water-heather-installation.jpg` — two Navien tankless water
  heaters freshly installed on a wall. The manufacturer name is visible on
  the units themselves, but this is a genuine photo of their own completed
  installation work, not a manufacturer marketing/logo graphic being reused
  as content — kept per the "real completed work" allowance in BRIEF.md
  rule 4, distinguished from the rejected standalone brand-logo PNGs below.
- `water-line-repair.jpg` — technician mid-repair on ABS drain/vent pipe in
  an open wall stud bay. Face not visible (turned away, wearing a cap).

Rejected:
- `water-softners-and-conditioning.jpg` (homepage, 2024/09) — generic
  artistic close-up of a shower stream with stylized blue lighting. No
  identifiable location, no branding, staged studio look. Treated as stock
  and excluded.
- `all-about-home-repair-content-about-01/02/03-2880w.webp` (`/about/`
  page) — REJECTED. All three are obvious stock photography: 01 shows two
  child models drinking water with parents in a staged white kitchen; 02
  and 03 show a model "technician" in a kitchen with a homeowner model.
  None of these are this company's staff or premises. Excluded per both the
  no-stock rule and the no-identifiable-faces privacy rule (these show
  clearly posed models' faces).
- `image-19.png` through `image-23.png` (`/about/` page) — decorative
  icon/graphic assets, not photography, out of scope.
- `/plumbing-services-in-rexburg-id/` page images
  (`vecteezy_water-leakage-from-the-1.webp`,
  `electrician-builder-work-servici.webp`,
  `electrician-is-mounting-electric-scaled.webp`,
  `plumbing-professional-doing-his-.webp`,
  `prosthetist-man-making-prostheti.webp`,
  `technician-checking-heating-syst.webp`,
  `technologist-with-grey-tablet-hi.webp`,
  `worker-repairing-water-heater.webp`,
  `workers-standing-checking-beside.webp`, `Black-20.png`–`Black-24.png`) —
  REJECTED. The `vecteezy_` prefix is a stock-marketplace watermark/naming
  pattern. The rest are generic stock filler for unrelated trades (note
  `prosthetist-man-making-prostheti` — a prosthetics-fitting photo with zero
  connection to plumbing), confirming this page uses templated stock
  filler, not real company photography.
- `/rexburg-plumbing-services/` page images
  (`vecteezy_ai-generated-group-of-f.webp`,
  `vecteezy_ai-generated-group-of-f-1.webp`,
  `vecteezy_concrete-hole-in-the-gr-1.webp`,
  `vecteezy_man-is-installing-wall-1.webp`,
  `vecteezy_professional-plumber-wo-1.webp`,
  `vecteezy_water-leakage-from-the-1.webp`) — REJECTED. The filename
  literally says "ai-generated" — explicitly AI-generated imagery, banned
  outright by BRIEF.md rule 4, plus the same `vecteezy_` stock-marketplace
  pattern on the rest.
- `ALL-ABOUT-Plumbing-Repair-4.png`, `all-about-home-repair-logo-256w-1.png`,
  `All-about-Plumbing-repair-2-150x150.png` / `-300x300.png` — their own
  logo/wordmark files, not photographs, out of scope for this pass. The
  mockup's existing custom SVG pipe-joint brand mark already fills that
  role and matches the established copper/navy palette, so the bitmap logo
  was not substituted in.

**Google Maps / Google Business Profile ("All About Plumbing Repair",
2437 W 4700 S, Rexburg, ID 83440, (208) 359-2247 — confirmed correct
listing):**

Checked with a standalone Playwright/Chromium script (own browser instance,
not the shared MCP tool), at
`scratch/agent-trades/all-about-plumbing/maps-scrape.js`,
which searched "All About Plumbing Repair Rexburg, ID", opened the listing,
and inspected the header photo and photo gallery entry point.

Result: the listing has exactly **one** uploaded photo (captioned
"Photo - Oct 2025" in the gallery viewer) — a bathroom vanity with cabinet
doors open showing a fresh supply-line and shutoff-valve rough-in. No face,
no branding conflict, clearly genuine plumbing work. Captured via network
request interception at full resolution (`=s1600`) and used as the fourth
card in the Recent Work section (`img/vanity-rough-in.jpg`). No other
photos existed on the listing to check or reject.

Ratings/review counts seen on the Google listing (4.8 stars) were **not**
newly added from this pass — that figure already existed on the mockup's
stat panel and why-us section before this image work began, and per
BRIEF.md this pass did not touch or add any review/rating content.

## Net result

Four genuine, privacy-safe, non-stock photos of this business's actual
completed and in-progress plumbing work were found across the two permitted
sources and integrated into a new "Recent Work" section, styled to match
the page's existing copper-pipe-run visual system. Everything else
discovered on the business's own site was disqualified as stock,
AI-generated, or face-containing model photography and was left out.

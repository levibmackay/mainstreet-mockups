# Image sources — Searle Hart & Associates, PLLC mockup

Date pulled: 2026-08-04

## Images added: 2

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/office-sign.jpg` | https://searlehart.com/wp-content/uploads/2015/11/office-sign.jpg | Own site (searlehart.com homepage hero slider) | Hero section, `.hero-photo` — new photo panel added beside the hero headline (page was previously text-only in the hero) | 2026-08-04 |
| `img/office-front.jpg` | https://searlehart.com/wp-content/uploads/2021/06/412-Grand-Rexburg-ID-Front-LargeHighDefinition.jpeg | Own site (searlehart.com homepage hero slider, also linked from the `/rexburg-location/` page) | Location section, `.location-photo` — replaces the previous decorative SVG ledger-grid/pin motif | 2026-08-04 |

Both optimized with macOS `sips` (JPEG quality 80, capped to 1600px long edge).
`office-sign.jpg`: original 1920×1277 → 1600×1064, 603KB.
`office-front.jpg`: original 2048×1536 → 1600×1200, 763KB.
Total `img/` folder size: 1.3MB, under the 2MB budget.

(Both files were re-encoded at quality 80 a second time during the review
pass, which is why these sizes are marginally smaller than a first-pass
export; pixel dimensions are unchanged.)

## Verification

The business's real website was found and verified before anything was used:
searlehart.com (specifically `/rexburg-location/`) shows the exact address
"412 Grand Loop" and exact phone "(208) 356-3716" from the fact sheet,
confirming this is the correct business and not a same-named firm elsewhere.
Note the firm's public name on their own site is styled "Searle, Hart &
Associates, PLLC" (with a comma); the mockup keeps the fact sheet's given
name "Searle Hart & Associates" and does not alter it based on this.

## Sources checked and rejected — own site (searlehart.com)

Crawled: homepage (`/`), `/rexburg-location/`. (`/about/` 404s; team bios live
under individual attorney/CPA-style URLs, e.g. `/attorney/joshua-r-searle-cpa/`,
which were not separately crawled because the homepage and location page
already surfaced every distinct image asset the site uses — the theme reuses
the same media library across pages.)

- `DSC0662-e1481861201362-440x550.jpg`, `DSC0443-e1481861116577-440x550.jpg`,
  `DSC0409-2-e1481860864640-440x550.jpg`, `DSC0348-e1481755970119-440x550.jpg`,
  `DSC03331-e1481861284356-440x550.jpg`, `DSC0343-e1481755947350-440x550.jpg`,
  `DSC0338-e1481755920835-440x550.jpg` — REJECTED. Downloaded and opened
  `DSC0662` to verify: a studio portrait headshot of an identifiable man in a
  suit against a dark backdrop (partner/staff photo). The full set shares the
  same 440×550 portrait crop and dark-backdrop studio lighting, confirming
  they are all staff/partner headshots. Excluded outright per BRIEF's
  non-negotiable ban on identifiable faces, which applies even to genuine
  photos from the business's own site.
- `iStock_000057620732_XXXLarge-400x300.jpg`, `iStock_000076718485_Large-400x300.jpg`,
  `iStock_000001257998_Large-400x300.jpg`, `iStock_000058183246_Double-400x300.jpg`,
  `iStock_000061760842_Full-400x300.jpg`, `iStock_000065248331_XXXLarge-400x300.jpg`,
  `iStock_000019883126_Large-400x300.jpg`, `iStock_000049589412_XXXLarge-400x300.jpg`
  — REJECTED without downloading. Filenames are literal iStock asset IDs —
  licensed stock photography, not photos of this business. Excluded per
  BRIEF's "do not copy licensed stock off their site either" rule.
- `logo2.png` (site wordmark/logo) — not a photograph, out of scope for this
  image task. The mockup already has its own custom SVG "SH" mark matching
  the gold/pine palette, so the real bitmap logo was not pulled in anyway.
- `412-Grand-Rexburg-ID-Front-LargeHighDefinition-400x300.jpeg` — this is a
  smaller cropped derivative of the same front-of-building photo used above;
  the full-resolution original was used instead.

## Google Maps / Google Business Profile

Checked with a standalone Playwright/Chromium script (own browser instance,
not the shared MCP Playwright tool), run from
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-proservices/searle-hart-cpa/maps-scrape.js`.
The script searched "Searle Hart & Associates Rexburg, ID" on Google Maps,
opened the listing, and confirmed it is the correct business (phone
"356-3716" and "Grand Loop" address both matched the listing text). It then
scanned the DOM for any `googleusercontent.com` photo URLs.

Result: **zero** `googleusercontent.com` photo URLs found, and the listing
page contains an "Add a photo" prompt — Google Maps' own indicator that no
photos have been uploaded to this listing. Screenshot evidence saved at
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-proservices/searle-hart-cpa/maps-listing.png`
(scratch only, not used on the page). No images sourced from Maps.

## Net result

Two genuine, privacy-safe, non-stock photos exist across both allowed
sources — the exterior monument sign and the front-of-building shot, both
from the firm's own homepage. Both were downloaded, optimized, and
integrated: the sign photo into a new hero photo panel, and the building
photo replacing the location section's decorative SVG motif. No staff or
partner photos were used anywhere, per the non-negotiable privacy rule —
seven headshots were identified and rejected. No stock photography from the
site's homepage carousel (eight iStock-licensed images) was used. Google's
Business Profile for this listing currently has no uploaded photos at all.

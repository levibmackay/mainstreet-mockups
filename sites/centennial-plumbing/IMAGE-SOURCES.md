# Image sources — Centennial Plumbing LLC mockup

Date checked: 2026-08-03

**Result: zero images added.** Both permitted sources were checked and
neither yielded a usable, genuine photo of this business. No images were
downloaded into `sites/centennial-plumbing/img/` and none are referenced in
`index.html`. The page remains CSS/inline-SVG only, per BRIEF.md rule 4's
fallback ("if you cannot find real photos, build with CSS and inline SVG as
before").

## Source 1 — https://centennialplumbingllc.com (their own site, hibu-hosted)

Checked via `curl` fetch of the homepage HTML plus direct download and visual
inspection of every referenced photo:

| Filename on their CDN | alt text | Verdict |
|---|---|---|
| `home-0-1920w.jpg` (og:image / hero) | — | Rejected: generic stock flat-lay (pipe wrench, work gloves, rolled blueprints on dark wood) |
| `ho+(1)-1920w.jpg` | "Sump pump" | Rejected: generic stock, no business branding, staged |
| `ho+(2)-1920w.jpg` | "Hydro jet" | Rejected: generic stock |
| `ho+(3)-1920w.jpg` | "Gas line repair" | Rejected: generic stock, anonymous model |
| `ho+(4)-1920w.jpg` | "Water heater" | Rejected: generic stock, anonymous hand/model |
| `ho+(5)-1920w.jpg` | "Commercial plumbing service" | Rejected: generic stock, anonymous model |
| `ho+(6)-1920w.jpg` | "Residential plumbing service" | Rejected: generic stock (pipe wrench/gloves/blueprints — duplicate of the hero image) |
| `bran+(1)` through `bran+(8)-1920w.png` | manufacturer names (Rheem, Nuvo H2O, Bradford White, Nugen, KD Navien, North Star, Noritz, AO Smith) | Rejected: third-party manufacturer/brand logos, not photos of the business |
| `CP--Logo-138w.png` | "Centennial Plumbing LLC logo" | Not used — this is their brand logo, not a photograph, and out of scope for this photo task |

All seven photo candidates (`home-0` + `ho+(1..6)`) are stock photography
served through a hibu website-builder template (studio lighting, anonymous
hands/models, no identifiable location, no company branding/trucks — the
hero image and `ho+(6)` are in fact the exact same stock shot reused).
Per BRIEF.md rule 4, licensed stock served on a business's own site is
explicitly excluded ("Do not copy licensed stock off their site either").
None of these were downloaded into the final `img/` folder.

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script
(`maps-scrape.js`, run from the scratchpad, own browser instance — no
shared/MCP Playwright tool used) that searched "Centennial Plumbing LLC
Rexburg, ID", opened the business listing panel, and inspected it for a
header photo and a photo-gallery entry point.

Result: the listing (4.6★ rating shown on the panel itself — not used
anywhere on the page, per BRIEF's no-fabricated-ratings rule) has **no
uploaded photos at all**. The listing panel shows "Add missing information
→ Add a photo" immediately under the contact details, which is Google Maps'
own indicator that zero photos exist on this listing. There was no photo
carousel, thumbnail strip, or hero image to open or download.

Screenshots taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/83e5a8e8-a0c5-4dda-9e4e-f6b3e90e5a7c/scratchpad/centennial-plumbing/raw/maps-search-result.png`,
`maps-listing.png`, `maps-photos-gallery.png`.

## Conclusion

No genuine, usable photos of Centennial Plumbing LLC exist on either
permitted source as of 2026-08-03. `sites/centennial-plumbing/img/` was not
created. `index.html` was not changed for imagery — it continues to use the
CSS/inline-SVG visual system (hero schematic, service icons, timeline
diagram) that was already in place.

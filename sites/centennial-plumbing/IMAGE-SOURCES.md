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
`scratch/centennial-plumbing/raw/maps-search-result.png`,
`maps-listing.png`, `maps-photos-gallery.png`.

## Conclusion

No genuine, usable photos of Centennial Plumbing LLC exist on either
permitted source as of 2026-08-03. `sites/centennial-plumbing/img/` was not
created. `index.html` was not changed for imagery — it continues to use the
CSS/inline-SVG visual system (hero schematic, service icons, timeline
diagram) that was already in place.

---

# 2026-08-05 — Source 3 pass (Facebook / Instagram)

BRIEF.md rule 4 was revised on 2026-08-05 to permit a third source: the
business's own Facebook or Instagram page. This section records that pass.
The 2026-08-03 findings above stand unchanged — nothing from their website
or their Google listing was reused.

**Result: one image added.**

## Channel found and identity verification

**https://www.facebook.com/centennialplumbing/** — reachable logged-out via
`curl` with normal browser headers (a plain `curl` with a default UA gets
HTTP 400; a full browser header set returns the public page). No login was
used and no login wall was bypassed.

Identity confirmed on three independent points before anything was taken
from it:

- Page name: `Centennial Plumbing LLC | Rexburg ID`
- Phone in the page's contact tile: `(208) 317-8702` — exact match to the
  number verified in `mainstreet-sites-sales/verify/batch-d.md`
- Website link on the page: `centennialplumbingllc.com` — the same site
  audited in the 2026-08-03 pass above

Category "Plumbing Service", 85 followers, 0 reviews. This is the right
business, not a name collision.

No Instagram account was found. Their own website's only Instagram
reference is an empty `instagram.com/` link in the hibu template chrome,
and the only `facebook.com` links on their site are share widgets — the
Facebook page above was found by search, then verified as above.

## Images added

| Local file | Source URL | Source type | Where on the page | Date pulled |
|---|---|---|---|---|
| `img/technician-under-sink.jpg` | `https://www.facebook.com/centennialplumbing/` — the page's cover photo (CDN file `117909704_1651314438369063_1603984350859452647_n.jpg`, served from `scontent-den2-1.xx.fbcdn.net/v/t1.6435-9/`) | **facebook** | "Why Centennial" section, right column, above the timeline panel | 2026-08-05 |

Why it qualifies: it is the page's own cover photo, so it was posted by the
business itself, not tagged or shared. It is an unmistakably real phone
snapshot — a technician in a Centennial-branded orange work shirt kneeling
and reaching up into an open sink cabinet. **No identifiable face**: his head
is inside the cabinet and turned fully away from the camera, and there is
nobody else in the frame. Not stock, not AI, not a graphic.

Processing: the largest publicly served render is a 1512x1512 square crop of
the cover. Downloaded, resized to 1400x1400 and re-encoded at JPEG q82
(239 KB). Referenced with the relative path `img/technician-under-sink.jpg`,
with `loading="lazy"` and explicit `width`/`height`. No external requests.

## Candidates rejected on this channel

| Facebook item | What it is | Verdict |
|---|---|---|
| `497014256_1212612510649773_...jpg` (2048x1356), post "Company Retreat-Hawaii 2025 🌴", permalink `facebook.com/photo.php?fbid=1212612503983107` | Six men posed on a beach at sunset | **Rejected — identifiable faces.** Every face in the frame is clear and recognisable. Also not work-related. |
| `476847691_1141938291050529_...jpg` (1036x686) and `484617679_1167759025135122_...jpg` (720x476), permalinks `fbid=572234168020947` and `fbid=1096265882284437` | The same side-profile shot of a white cargo van carrying their eagle logo, wrap copy and phone number, cut out on a pure white background with a soft drop shadow | **Rejected — vehicle-wrap proof / promo graphic.** No location, no dirt, no reflections, a perfect cut-out: this is artwork laid over a manufacturer or stock van template by a sign shop, not a photograph Centennial took of their own van. Rule 4's source-3 constraint on promo graphics ("frequently licensed stock the business does not own") plus the ambiguous-is-a-no rule. Genuinely a shame — a real photo of this van parked on a Rexburg job would have been the best image on the page. |
| `153228746_1816517058515466_...jpg`, `481081580_1161080605802964_...jpg`, `482214168_1161822332395458_...jpg` (permalinks `fbid=1816517048515467`, `938972368013790`, `970742781503415`) | Three copies of the same 450x151 banner strip: an anonymous forearm and hand holding white PVC fittings against wood framing | **Rejected on three counts.** 450x151 is the full native size served, which is unusable on a page; the 3:1 crop is an ad-banner creative, not a photo post; and the shot itself has all the marks of licensed stock (anonymous model, no branding, no location). |
| `302095420_572234164687614_...jpg` and `156730567_1819885021512003_...jpg` | The circular "Centennial Plumbing LLC" eagle logo | Not used — a logo mark, not a photograph, and out of scope for this photo task (same treatment as the 2026-08-03 pass). |

## Conclusion

The Facebook channel was reachable and was worth checking: it produced the
one genuine, privacy-safe photograph of this business that exists anywhere
on the three permitted sources. Everything else on the page was either a
group photo full of faces, a sign-shop van rendering, or an ad banner.

# Image sources — Coppers Plumbing mockup

Date checked: 2026-08-04

## Business verification

Real site candidate: https://coppersplumbing.com/ — confirmed correct business
by exact match on both phone `(208) 270-9204` / `2082709204` and address
`338 W 2nd N`, `St Anthony` found directly in the homepage HTML (`curl`
fetch, verified with `grep`). Also confirmed via Google Maps listing
"Coppers Plumbing LLC" at 338 W 2nd N, St Anthony, ID 83445, phone
(208) 270-9204, website coppersplumbing.com — same business, same contact
details, listing panel matches the page's fact sheet exactly.

## Images added: 1

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/pipe-installation.jpg` | `https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlH9km0VoqepPT2aHsLltHuSVaGR42Q0X0PzwTh9NJ1WPBiLkpcaScq3dojoI2EFJyMkVvIafGjstU0i9HfizQ31Bc2gymyCihwNYBp9VtPlyfTilCgl09a5HJgelMrSCa106CZtSoZkyM=w1600` | Google Maps / Google Business Profile (the primary header photo on "Coppers Plumbing LLC"'s verified listing) | Services section (`#services`), in a new framed `<figure class="work-photo-frame">` between the section intro and the joint-row list | 2026-08-04 |

Optimized with macOS `sips` (JPEG quality 80, capped at 1600px long edge —
source was already 1600×1200). Final dimensions after crop (below):
1600×1145. File size 344KB. Total `img/` folder size: ~344KB, well under
the 2MB budget.

The photo shows a real rough-in pipe installation (waste/supply lines
connected under a ceiling, mid-project) taken from this business's own
Google Business Profile listing header photo. On closer inspection after
the initial pull, the original frame's bottom-left corner showed more than
"just a glove and cap top" — a worker's glasses and part of their jaw/cheek
were visible under the cap brim, which is a partial but real identifiable
facial feature. Per the non-negotiable no-identifiable-face rule, the image
was re-cropped (bottom ~16% and left ~12% removed) to eliminate the person
entirely before use — the published version shows only pipes, hose clamps,
and ceiling, no person visible at all. Caption and alt text describe only
what is directly visible; no claim of recency, location, or which job it
was is made since none of that is verifiable from the photo or listing
metadata.

## Sources checked and rejected

**Own site (coppersplumbing.com), all pages crawled via curl (home, about,
contact, services, emergency-plumbing, frozen-pipes, sewer-line,
water-heater, water-softeners, service-area):**

- `Asset-12-1-1.png`, `Group-9-1.png` — REJECTED (opened and viewed). This
  is the business's own logo/mascot (a border collie holding a wrench,
  "Coppers Plumbing" wordmark) — a brand asset, not a photograph, and out
  of scope for a photo pass. Not used.
- `Frame-37.png`, `Frame-37-1.png`, `Frame-37-2.png`, `Frame-37-3.png`,
  `Frame-42.png`, `Black-9.png`, `Black-10.png`, `Black-11.png`,
  `Black-12.png`, `Black-2.png`, `Stars.png` — REJECTED (opened and
  viewed). All are generic flat-line icon illustrations (plumber
  silhouette, water heater, drain snake, pipe union, star rating glyph),
  not photographs of the business, its people, or its work. Icon-style
  filenames (`Frame-`, `Black-`, `Asset-`) and file sizes under 10KB each
  confirmed this before opening.
- `Subtract.webp` (hero background image) — REJECTED (opened and viewed).
  A generic stock photo of an anonymous male model in a hard hat and
  safety glasses working on an electrical panel — unrelated trade
  (electrical, not plumbing), studio-lit, no company branding, and
  contains a clearly identifiable face. Fails both the no-stock-photography
  rule and the no-identifiable-face rule; excluded on both counts.

**Google Maps / Google Business Profile ("Coppers Plumbing LLC", St
Anthony, ID — confirmed correct listing, 338 W 2nd N, St Anthony, ID
83445, (208) 270-9204, coppersplumbing.com, 5.0★ rating not used anywhere
on the page per the no-fabricated-ratings rule):**

- Scraped with a dedicated headless Chromium instance launched via a local
  Node/Playwright script (not the shared MCP Playwright tool), at
  `/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-trades/coppers-plumbing/maps-scrape.js`
  through `maps-scrape4.js`. Searched "Coppers Plumbing St Anthony, ID",
  opened the listing, confirmed the match, then inspected the DOM for
  `<img>` `src` attributes and CSS `background-image` values pointing at
  `googleusercontent.com`.
- One listing header photo was found (the pipe installation photo, added
  above — see table).
- One additional photo was found attached to a "From the owner" business
  post captioned "Emergency Plumbing Services Available 24/7" — REJECTED
  (opened and viewed at 1495×800: `owner-post.jpg` in the scratch
  directory). It is a dramatic, professionally lit macro shot of a
  frost/steam-covered pipe elbow spraying water — clearly stock or
  heavily stock-styled editorial photography, not a documentary photo of
  this business's actual work. Excluded per the no-stock-photography rule.
- No photo gallery/carousel beyond these two images was found on the
  listing.

## Net result

One real, privacy-safe, non-stock photo was found and used: a rough-in
pipe installation photo from Coppers Plumbing's own Google Business
Profile listing, placed in the services section. Everything else
considered from both permitted sources was either a brand/icon asset, a
generic line-icon illustration, or stock/editorial photography with an
identifiable face, and was excluded. The rest of the page remains the
original copper-pipe illustration and CSS/SVG visual system.

---

## Logo pass — 2026-08-05

**Result: real logo found and used — both official variants.**

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-coppers-plumbing.png` | https://coppersplumbing.com/wp-content/uploads/2026/04/Asset-12-1-1.png | Their site (header logo — the `<img>` inside the `<a href="https://coppersplumbing.com">` in their nav; also their `og:image` and `twitter:image`) | Header brand lockup, on a deliberate paper plate (above the fold, not lazy-loaded). Replaces the drawn pipe-union SVG and the typed "Coppers Plumbing" wordmark. | 2026-08-05 |
| `img/logo-coppers-plumbing-stacked.png` | https://coppersplumbing.com/wp-content/uploads/2026/04/Group-9-1.png | Their site (stacked variant used further down their homepage) | Footer, replacing the "Coppers Plumbing — St Anthony, Idaho" text line (`loading="lazy"`) | 2026-08-05 |

**Verification.** `coppersplumbing.com` was already verified above by exact
match on phone `(208) 270-9204` and address `338 W 2nd N, St Anthony`. Both
files render the wordmark "COPPERS PLUMBING" over their Australian-shepherd-
with-a-pipe-wrench mark. Name match confirmed.

Note on the `og:image`: their meta tags point at
`tannerw27.sg-host.com/wp-content/uploads/2026/04/Asset-12-1-1.png`, a leftover
SiteGround staging host. The identical file is served from their live domain,
and that is the URL used and logged above.

**Why two files, and the plate.** The horizontal lockup sets "PLUMBING" in near-
black navy `#0B0B34`, which is effectively invisible on this page's
`--ground-950 #160f0a` header. Rather than recolour their logo, the header puts
it on a deliberate `--paper #f4ead9` plate (4px radius, 7px/11px padding) —
the ground it was drawn for. The footer instead uses their *own* dark-background
variant, which already sets "PLUMBING" in white and therefore needs no plate at
all. Both were alpha-trimmed only; the WebP the server sends under a `.png`
extension was transcoded to real PNG. No recolouring, no stretching, no cropping
of the wordmark.

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Orange | `#D05818` | "COPPERS", the dog's markings |
| Navy | `#0B0B34` | "PLUMBING", the dog's outline and shading |
| White | `#FFFFFF` | The wrench, the dog's blaze |

**Do their colours agree with this page?** Half. The page's `--copper-500
#b87333` is a plausible cousin of their orange `#D05818`, though theirs is far
more saturated and reads as safety-orange rather than metal-copper. The bigger
gap is that **navy is a primary brand colour they use and this page uses none
of it**, while the page's `--verdigris-500 #4e8577` teal appears nowhere in
their identity. Reported, not acted on.

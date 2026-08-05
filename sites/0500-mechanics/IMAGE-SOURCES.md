# Image sources — 0500 Mechanics mockup

Date checked: 2026-08-04

**Result: 2 images added.** Both come from the business's own website. Google
Maps was also checked and confirmed to be the correct listing, but yielded
nothing new (see below).

## Business verification

Real site: https://www.0500mechanics.com/ — confirmed correct business.
Homepage and footer show phone `(208) 356-0500` and address `390 S. 5th W,
Rexburg, ID` (multiple occurrences via curl fetch), matching the mockup's
`index.html` exactly. Google Business Profile independently confirmed the
same: name "0500 MECHANICS," address "390 S 5th W, Rexburg, ID 83440,"
phone "(208) 356-0500," website "0500mechanics.com."

## Images added

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/storefront.jpg` | https://www.0500mechanics.com/Files/Images/gallery/20170929_103020.jpg | Own site (`/gallery` page) | New "The Shop" section (between Why Us and Location), wide photo card, exterior shot | 2026-08-04 |
| `img/shop-interior.jpg` | https://www.0500mechanics.com/Files/Images/home-image.jpg | Own site (homepage hero background, same file also thumbnailed on `/gallery`) | New "The Shop" section, tall photo card, interior shot | 2026-08-04 |

Both optimized with macOS `sips` (JPEG quality 80). Neither exceeded the
1600px long-edge cap so dimensions were left as downloaded:
- `storefront.jpg`: 1512×850, 199KB
- `shop-interior.jpg`: 508×584, 82KB

Total `img/` folder: ~284KB, well under the 2MB budget.

## Sources checked and rejected

**Own site (0500mechanics.com), pages crawled: home, about-us, contact-us,
gallery, plus direct fetch of every image referenced in the homepage
`<img data-src>` lazy-load attributes:**

- `gallery/20170709_165726_001.jpg` — REJECTED. A personal family group photo
  (multiple adults, children, and a dog on a residential log-cabin porch, no
  visible business branding except a small "0500 MECHANICS gas/fuel" sign
  leaning against the porch). Contains many identifiable faces of what
  appear to be family members, not a photo of the shop. Excluded on both the
  faces rule and relevance (not a shop/vehicle/work photo).
- `gallery/20170929_102857.jpg` — REJECTED. Interior counter shot of one
  staff member, clearly identifiable face. Excluded per no-identifiable-
  faces rule.
- `gallery/20170929_103237.jpg` — REJECTED. Portrait of a technician
  ("Tylor" name tag) under a lift, clearly identifiable face. Excluded per
  no-identifiable-faces rule.
- `gallery/20170929_103632.jpg` — REJECTED. Two staff members ("Chris" and
  another) behind the front counter, both clearly identifiable faces.
  Excluded per no-identifiable-faces rule.
- `Files/Images/slideshow/Slideshow2.jpg` — REJECTED. Five staff members
  lined up behind the counter, all faces clearly identifiable. Excluded per
  no-identifiable-faces rule (this is the one photo that would have made the
  strongest "meet the team" case, but the privacy rule is non-negotiable).
- `Files/Images/slideshow/Slideshow1.jpg` — Same storefront exterior as
  `gallery/20170929_103020.jpg`, just cropped to a wider banner aspect ratio
  from the identical photo. Not used separately to avoid a near-duplicate
  image; the fuller-frame gallery version was kept instead.
- `Files/Images/slideshow/mygarage-banner.jpg` — REJECTED. Marketing/product
  banner for a third-party "My Garage" app (Kukui), showing an anonymous
  model's hand holding a phone in a generic garage doorway. Stock-style
  marketing collateral, not a photo of this shop. Excluded per no-stock-
  photography rule.
- `Files/Images/certificates/aaa.png`, `ase.png`, `napa.jpg`, `alldata.png`,
  `jasper.png`, `identyfix.png`, `car-care.png` — REJECTED. Third-party
  manufacturer/certification-program logos, not photographs of the business.
- `Files/Images/hd-hiring-icon.png`, `Files/Images/footer-logo.png`,
  `Files/Images/logo.svg` — Not photographs (icon/logo assets); out of scope
  for this photo pass.
- `gallery/20170929_103020.jpg` (kept) — verified by direct visual
  inspection: genuine exterior of the actual building, "0500 MECHANICS"
  signage clearly visible, real customer vehicles in the lot, no people, no
  faces. This is the one used.
- `home-image.jpg` (kept) — verified by direct visual inspection, including
  a 3x zoom crop of the only people visible in the frame: two technicians
  working under a raised vehicle at the far back of the bay, shown only as
  small, backlit silhouettes with no discernible facial features at any
  resolution the source file offers. Judged privacy-safe as a genuine,
  non-identifying shop-interior work shot; used instead of anything showing
  a recognizable face.

**Google Maps / Google Business Profile ("0500 MECHANICS," 390 S 5th W,
Rexburg, ID 83440, (208) 356-0500, website 0500mechanics.com — confirmed
correct listing by address, phone, and website against the mockup):**

Checked via a standalone Playwright/Chromium script (`maps-scrape.js`, run
from this agent's own scratchpad folder, own browser instance — no shared
MCP Playwright tool used) that searched "0500 Mechanics Rexburg, ID," opened
the listing, and inspected the photo panel. The listing has exactly **one**
photo on file, dated "Oct 2020," visually the same storefront exterior shot
already sourced from the business's own website (same building, same
signage, same angle). No photo carousel or additional gallery images were
present — Google Maps offered nothing beyond what the business's own site
already provided, so nothing was downloaded from Maps.

Screenshots taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-trades/0500-mechanics/raw/maps-listing.png`,
`maps-photos-gallery.png`, `maps-photo-detail2.png`.

## Conclusion

Two genuine, privacy-safe, non-stock photos of 0500 Mechanics were found on
the business's own website: a clean exterior/storefront shot and an interior
shop shot with no identifiable faces. Both were added to a new "The Shop"
section on `index.html`, placed between "Why Us" and "Location" so the real
photos reinforce the copy's "same building since 1990" claim right where
that claim is made. Five additional candidate photos on their site were
rejected solely for showing identifiable faces (staff and, in one case,
what appears to be a family gathering), and one marketing banner was
rejected as third-party stock content. Google Maps had only a duplicate of
a photo already secured from the business's own site.

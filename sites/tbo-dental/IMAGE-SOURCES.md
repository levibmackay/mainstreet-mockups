# Image Sources — Toenjes, Brizzee & Orme Dentistry mockup

Date: 2026-08-04

## Business identification

From `sites/tbo-dental/index.html`:
- Name: Toenjes, Brizzee & Orme Dentistry (Drs. Toenjes, Brizzee and Orme —
  Cosmetic and Family Dentistry)
- Saint Anthony location: 305 E 5th St N, Saint Anthony, Idaho — phone
  (208) 624-3757 / tel:+12086243757
- Ashton: "Serving Ashton, Idaho" (no street address given on the mockup) —
  phone (208) 652-7868 / tel:+12086527868

## Own website — found and verified

`https://www.tbodental.com/` — verified match: phone (208) 624-3757 listed
on `tbodental.com/contact-st-anthony-id`, consistent with the mockup.
Crawled with `curl` (homepage, `/about`, `/meet-our-team`,
`/contact-st-anthony-id`, `/contact-ashton-id`, `/dental-technology`,
`/reviews`, `/cosmetic-dentistry`, `/dental-implants`).

**Result: entirely a Hibu website-builder template, zero real photography.**
Every non-logo image found was one of:
- Licensed stock: `shutterstock_237584389-*.jpg`,
  `shutterstock_615255467-*.jpg`, `shutterstock_631959683.jpg` on the
  homepage — filenames identify them explicitly as Shutterstock stock,
  covered by both the "no stock photography" rule and the "don't republish
  licensed stock off their site" constraint.
- Generic template placeholders: `generic-profile-f-lg-1920w.png` and
  `generic-profile-m-lg-1920w.png` on `/meet-our-team` — literal Hibu
  builder placeholder avatars (filename says "generic"), not real staff
  photos, so not even a face-privacy judgment call, just unused template
  filler.
- Practice logo variants (`logo_new-*.png`, `logo1..4-1920w.png`) — brand
  marks, not content photography, not integrated (this mockup already has
  its own custom SVG brand mark matching its palette).
- `vid-splash-play-1920w.png` — a generic video-play button icon, not a
  photo.
- `dental+tech+image1-1920w.jpg` — not opened; homepage HTML shows it sits
  directly beside the three explicitly-Shutterstock-named images in the
  same promo block and follows the same `dms3rep/multi/opt/` stock-CDN
  path pattern used for all the licensed images on this site, consistent
  with being stock as well. Given the site otherwise has zero real
  photography, treated as stock and excluded rather than risk republishing
  a licensed image.

No exterior, interior, office, or team photos of the actual practice exist
anywhere on the site.

## Google Maps check

Scraped with a dedicated headless Chromium instance launched via a local
Node/Playwright script (not the shared MCP Playwright tool), at
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-med2/maps-tbo.js`
and `maps-tbo2.js` (used the Chromium build bundled with `rexburg-housing`'s
node_modules for browser-revision compatibility with the local Playwright
cache).

Searched Google Maps for "Toenjes Brizzee Orme Dentistry Saint Anthony
Idaho", opened the listing "Drs. Toenjes, Brizzee and Orme - Cosmetic and
Family Dentistry." **Confirmed correct business**: address `305 E 5th N, St
Anthony, ID 83445` and phone `(208) 624-3757` both match the mockup's Saint
Anthony location (mockup: "305 E 5th St N," "(208) 624-3757"), and the
listing's website link is `tbodental.com`, the same site crawled above.

The listing shows a "Photos" section with one thumbnail, but it carries a
360°-panorama icon, not a normal photo icon — Google Maps shows this for its
own Street View imagery even on listings with zero owner/customer-uploaded
photos. Clicking into it opened Google's Street View panorama viewer, not a
photo gallery. A `img[src*="googleusercontent"]` DOM query both before and
after interacting with the photo panel returned **0 matches** each time
(screenshots and raw text dump saved alongside the scripts above). Street
View panoramas are Google's own captured imagery, not a photo of the
business uploaded by the owner or a customer, so this was not treated as a
usable candidate. No actual uploaded photos exist on this Google Business
Profile.

## Images added: 0

No usable real photos exist across either allowed source. Own website: every
photo is either licensed Shutterstock stock or a generic unused template
placeholder, both excluded by BRIEF.md rule 4. Google Maps: confirmed
correct listing, no owner/customer-uploaded photos, only a Street View
panorama thumbnail which is not eligible under the rule. Per BRIEF.md rule 4
this is a normal, expected outcome — the page remains built with CSS/SVG
only, unchanged from its current state. No files were added to
`sites/tbo-dental/img/`, and `index.html` was not modified.

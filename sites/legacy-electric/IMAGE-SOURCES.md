# Image sources — Legacy Electric mockup

Date checked: 2026-08-04

**Result: zero images added.** Both permitted sources were checked. The
business's own site yielded eight image candidates, all rejected (four for
identifiable faces, two for being licensed/stock imagery, one a third-party
manufacturer logo, one a non-content header graphic). Their Google Business
Profile has no photos at all. No images were downloaded into
`sites/legacy-electric/img/` and none are referenced in `index.html`. The
page remains CSS/inline-SVG only, per BRIEF.md rule 4's fallback ("if you
cannot find real photos, build with CSS and inline SVG as before").

## Source 1 — https://legacyelectricidaho.com (their own site)

Verified as the correct business before using anything from it: the site
lists phone (208) 359-0672 and email ryanleishman@msn.com on every page
(home, about, contact) — an exact match to the fact sheet. Site has only
three pages total: home, about, contact — no gallery or projects page.
Fetched via `curl` (saved to scratchpad as `home.html`, `about.html`,
`contact.html`) and every referenced image downloaded and opened for visual
inspection.

| Filename on their CDN | Found on | Verdict |
|---|---|---|
| `HEADER-copy-1.png` (1920×300) | home, about, contact | Rejected: opened it — a near-invisible pale decorative header graphic (looks like a faint monogram flourish on white), not usable content and not a photograph of the business. |
| `LegacyElectricStock.png` (1426×976) | home | Rejected: filename explicitly says "Stock." Opened it — a polished, shallow-depth-of-field macro shot of a duplex outlet on a wall stud with a "LEGACY ELECTRIC" watermark stamped in the corner. The watermark suggests they licensed a stock photo and branded it themselves rather than shooting their own work. Per BRIEF.md rule 4 ("do not copy licensed stock off their site either"), this is exactly the case the rule anticipates — skip it even though it carries their name. |
| `images-300x154.png` (300×154) | about | Rejected: a Generac "Sales & Service Dealer" badge — a third-party manufacturer logo, not a photo of the business, and out of scope for this photo task. |
| `nick-1.jpg` (960×676) | about | Rejected: a group photo from what looks like a service/mission trip (multiple adults and children at an outdoor work site), several identifiable faces. Excluded per the non-negotiable privacy rule — covers everyone photographed, not just Ryan or Nick. Also not related to electrical work. |
| `nick-2.jpg` (720×540) | about | Rejected: a personal fishing-trip photo, three men on a boat, all faces clearly visible and identifiable. Excluded per privacy rule. |
| `nick-3.jpg` (720×540) | about | Rejected: a personal fishing photo, one man kneeling on a riverbank holding a trout, face clearly visible and identifiable. Excluded per privacy rule. |
| `nick-4.jpg` (720×540) | about | Rejected: a personal fishing photo, three men standing in a parking lot with a mountain backdrop, all faces clearly visible and identifiable. Excluded per privacy rule. |
| `electrician-new-construction.jpg` (425×282) | contact | Rejected: opened it — a generic photo of an anonymous man in a hard hat working on wiring in a framed-out house. EXIF data (`file` command) shows it was shot on a Canon EOS 5D and processed through PhotoScape with an original 2006 timestamp, with no company branding, truck, signage, or anything tying it to this specific business — consistent with licensed stock rather than the Leishmans' own work. Excluded per the same "no licensed stock off their site" rule and the general stock-photography ban (staged studio-style single-subject construction shot, no identifiable connection to Legacy Electric). |

None of these eight files were downloaded into the final `img/` folder
(the raw copies used only for inspection stayed in the scratchpad and were
never copied into the repo).

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script
(`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-proservices/legacy-electric/maps-scrape.js`,
run from the scratchpad with its own dedicated browser instance — not the
shared MCP Playwright tool) that searched "Legacy Electric Rexburg, ID" on
Google Maps and inspected the resulting listing panel.

The listing found is "Legacy Electric Idaho" — confirmed as the correct
business: it lists the website `legacyelectricidaho.com` (the same site
checked above) and phone `(208) 390-3306`, which matches Ryan Leishman's
direct cell number found alongside the office line during business-identity
research (the office line (208) 359-0672 is the one used on the mockup's
`tel:` links, per the fact sheet). A 4.9-star rating is shown on the panel
itself — not used anywhere on the page, per BRIEF's no-fabricated-ratings
rule.

Result: the listing has **no uploaded photos at all**. The panel shows
"Add missing information → Add a photo" directly under the contact block,
which is Google Maps' own indicator that zero photos exist on this listing.
There was no photo carousel, thumbnail strip, or header image to open or
download — confirmed both by DOM query (`$$eval` over every `<img>` on the
page, zero `googleusercontent.com` photo URLs found) and by visual
inspection of the panel screenshot.

Screenshot taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-proservices/legacy-electric/raw/maps-listing.png`

## Conclusion

No genuine, non-stock, privacy-safe photo of Legacy Electric exists on
either permitted source as of 2026-08-04. Electrical work was flagged as a
promising category for real completed-work/truck/signage photography, and
real effort went into checking both sources thoroughly, but this particular
small operation's web presence turned out to be a three-page brochure site
built around one licensed stock macro shot plus a handful of personal
photos from the owners' about page, and a Google listing with no photos
uploaded. `sites/legacy-electric/img/` was not created. `index.html` was
not changed for imagery — it continues to use the CSS/inline-SVG visual
system (circuit-trace backgrounds, bolt-mark icon set, schematic diagrams)
that was already in place.

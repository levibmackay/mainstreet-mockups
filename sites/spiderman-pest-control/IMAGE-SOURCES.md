# Image sources — A Spiderman Pest Control LLC mockup

Date checked: 2026-08-04

**Result: zero images added.** Both permitted sources were checked and
neither yielded a usable, genuine photo of this business. No images were
downloaded into `sites/spiderman-pest-control/img/` and none are referenced
in `index.html`. The page remains CSS/inline-SVG only, per BRIEF.md rule 4's
fallback ("if you cannot find real photos, build with CSS and inline SVG as
before").

## Business verification

The mockup page (`index.html`) names the business "Spiderman Pest Control,"
phone `(208) 709-7523`, serving Rigby, Idaho and the surrounding area.
Web search located a real business, legal name "A Spiderman Pest Control
LLC," website `spidermanpest.com`, phone `(208) 709-7523` — confirmed by
exact phone-number match on both the business's own website (`tel://
12087097523`) and its Google Business Profile listing. This is a real,
independent East Idaho pest-control company, unrelated to the Marvel
"Spider-Man" character — no Marvel/superhero-branded imagery was searched
for or considered, consistent with BRIEF.md's IP-avoidance instruction.

## Source 1 — https://www.spidermanpest.com (their own site)

Checked via `curl` fetch of the homepage plus the two linked interior pages
(`/services/`, `/lawn-care-rigby-weed-feed-rigby/` — the only content pages
linked from the site; no about/gallery/contact subpages exist beyond an
in-page contact anchor).

| Filename on their site | Verdict |
|---|---|
| `Depositphotos_10999999_m-2015-300x216.jpg` (home) | Rejected: licensed stock, Depositphotos filename |
| `Depositphotos_19401491_m-2015-300x226.jpg` (home) | Rejected: licensed stock |
| `Depositphotos_2325483_m-2015-300x225.jpg` (home) | Rejected: licensed stock |
| `Depositphotos_31725589_m-2015-300x209.jpg` (home) | Rejected: licensed stock |
| `Depositphotos_55825181_m-2015-300x200.jpg` (home) | Rejected: licensed stock |
| `Depositphotos_9456571_m-2015-300x199.jpg` (home) | Rejected: licensed stock |
| `Depositphotos_6812519_m-2015.jpg` (services) | Rejected: licensed stock |
| `Depositphotos_10343158_original-1024x683.jpg` (lawn care) | Rejected: licensed stock |
| `Depositphotos_10818060_m-2015.jpg` (lawn care) | Rejected: licensed stock |
| `Depositphotos_133458452_m-2015.jpg` (lawn care) | Rejected: licensed stock |
| `SpidermanPest-logo.png` / `SpidermanPest-logo-600px.png` | Not used — brand logo, not a photograph, and this mockup's existing SVG lattice logo mark already fills that role and matches the acid-green/dark palette |
| `marketable-media-footer-black.png` | Not used — third-party web-developer credit logo, not this business's content |

Every content image across all three pages on the entire site follows the
`Depositphotos_<id>_m-2015...` naming convention — a known stock-photo-agency
filename pattern (confirmed by opening several: generic staged spider/ant/
insect close-ups and generic lawn/yard shots with no identifiable location,
branding, vehicle, or storefront). Per BRIEF.md rule 4 ("Do not copy licensed
stock off their site either... those are images they licensed, not their own
photography"), none of these were downloaded.

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script
(`maps-scrape.js`, run from the scratchpad with `channel: 'chrome'` against
the locally installed Google Chrome — the shared MCP Playwright tool and
Chrome extension tools were deliberately not used) that searched "Spiderman
Pest Control Rigby, ID," opened the matching listing, and inspected its
photo panel.

The listing that came up is "A Spiderman Pest Control LLC" — confirmed as
the correct business by exact phone-number match (`(208) 709-7523`) and
matching website (`spidermanpest.com`).

The listing's "Photos & videos" panel showed exactly **one** photo (present
under both the "All" and "By owner" filters, meaning the business itself
uploaded it — Google's own "Add a photo" prompt appears directly beneath it,
confirming there is nothing else). That single photo was downloaded in full
resolution and opened for inspection: it is a promotional advertisement
graphic — a macro stock photograph of a spider on wood, overlaid with ad
copy reading "...you? Call today and save $50 on an... [pest control]
service" (the visible fragment of what is evidently "Something buggin' you?
Call today and save $50 on an ... service"). It shows no storefront, vehicle,
signage, staff, or any identifiable feature of this specific business —
it is a generic marketing creative built on stock wildlife macro photography,
not a genuine photo of the business itself. Rejected as functionally
equivalent to stock imagery/an ad banner, not a real photo of Spiderman Pest
Control's operations or location.

Screenshots taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-outdoor/spiderman-pest-control/raw/maps-listing.png`,
`maps-gallery.png`, and the downloaded full-resolution candidate
`gmaps-photo1-full.jpg`.

## Conclusion

No genuine, usable photo of A Spiderman Pest Control LLC (storefront, truck,
signage, or interior) exists on either permitted source as of 2026-08-04 —
the business's own site uses entirely licensed stock photography, and its
sole Google Business Profile photo is a stock-based ad graphic rather than a
real photo of the business. `sites/spiderman-pest-control/img/` was not
created. `index.html` was not changed for imagery — it continues to use the
CSS/inline-SVG visual system (radial web lattice hero graphic, service
icons, service-area diagram) that was already in place.

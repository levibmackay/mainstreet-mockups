# Image sources — T&T Plumbing mockup

Date checked: 2026-08-04

**Result: zero images added.** Both permitted sources were checked and
neither yielded a usable, genuine photo of this business. No images were
downloaded into `sites/tt-plumbing/img/` (the folder was not created) and
none are referenced in `index.html`. The page remains CSS/inline-SVG only,
per BRIEF.md rule 4's fallback ("if you cannot find real photos, build with
CSS and inline SVG as before").

## Source 1 — https://tntplumbingofashton.wixsite.com/tntplumbing (their own site, Wix)

Verified as the correct business first: the homepage rich-text contains
"Call: TnT Plumbing at 208-534-8983 or 208-652-7373 and mention this web
site" and "Call us now at 208-534-8983 or 208-652-7373 and mention this web
site" — the second number matches the phone already used throughout
`index.html` (tel:+12086527373). Page `<title>` is "T and T Plumbing".

Checked via `curl` fetch of the homepage plus the `/about`, `/contact`, and
`/services` subpages, then downloaded and visually inspected (with the Read
tool) every unique `static.wixstatic.com/media/...` image referenced across
all four pages:

| Filename on Wix CDN | Where referenced | Verdict |
|---|---|---|
| `41d000_177d8f66ee3bfc09bea7f331e4a98295.png` | all pages | Rejected: yellow speech-bubble UI graphic, no business content |
| `bdd213c264106d58468c92b64d9ef2fe.wix_mp` | all pages | Rejected: Google+ brand icon (third-party logo) |
| `c9d3494be883cc2bd520386fed30f296.png` | all pages | Rejected: Twitter bird brand icon (third-party logo) |
| `ed86bdfa6aecf88649d305e11d76ac33.wix_mp` | all pages | Rejected: Facebook brand icon (third-party logo) |
| `ca6611_381cf37345d7d484ebc7862b4b872894.jpg` | home | Rejected: stock 3D-rendered gold "plumber mascot" clipart figure holding a pipe wrench, studio background — not a real photo |
| `ca6611_88b3edb304fe8641b6dadc4721c04bad.jpg` | all pages | Rejected: black-and-white line-art clipart of a wrench, faucet, and water drop — illustration, not a photo |
| `ca6611_708bb85df03aa95acfdf1885a6b30351.jpg` | about | Rejected: studio stock photo — adjustable wrench and braided supply hose fitting posed on rolled architectural blueprints, professional studio lighting, no identifiable location, no company branding, no truck/signage |
| `41d000_a385e772e206999fbd3e2540db1023c5.png` | contact | Rejected: generic crossed-wrenches clipart icon |
| `41d000_7a28e3dfa085aff94dce8c12aa250d5c.png` | services | Rejected: generic single-wrench clipart icon |

All nine unique images across the site are either third-party social-media
brand logos, generic clipart/icon graphics, or staged studio stock
photography (blueprint + tools flat-lay) with no connection to this specific
business — no exterior shots, no trucks, no signage, no real completed work.
None were downloaded into the final `img/` folder.

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script run from the scratchpad
(`gmaps_check.js`, `scroll_photos.js`, `click_photos.js` in
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-trades/tt-plumbing/`,
own headless Chromium instance — no shared MCP Playwright tool used) that
searched "T&T Plumbing Ashton, ID" and opened the listing.

The only matching result is "T & T Plumbing, Inc." at Ashton, ID 83420, pin
located directly on Main St in Ashton — consistent with the address found
in earlier research (416 Main St) even though the listing itself does not
show a street number. The listing is **unclaimed** and has no phone number
attached to it (a direct Google Maps search for "(208) 652-7373" returned no
result), so the phone match used to verify Source 1 could not be
cross-verified the same way here. Given this is the only plumbing business
of this name in a town of roughly 1,200 people, sitting on Main St as
expected, it is treated as the same business with reasonable confidence —
but this identity is not phone-verified the way Source 1 was.

Regardless, the identity question is moot for imagery: the listing has
**zero uploaded photos**. The panel shows "Photos" followed directly by an
"Add photos & videos" prompt, which is Google Maps' own indicator of an
empty gallery, and a DOM check for `<img>` elements pointing at
`googleusercontent.com` (where Maps serves uploaded photos) returned zero
matches. There was no photo carousel or thumbnail strip to open or
download. A 5.0-star rating is shown on the listing panel — not used
anywhere on the page, per BRIEF's no-fabricated-ratings/reviews rule.

Screenshots taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-trades/tt-plumbing/01_search.png`,
`03_scrolled.png`.

## Conclusion

No genuine, usable photos of T&T Plumbing exist on either permitted source
as of 2026-08-04. `sites/tt-plumbing/img/` was not created.
`sites/tt-plumbing/index.html` was not changed for imagery — it continues
to use the CSS/inline-SVG visual system already in place (blueprint-line
hero background, circular seal/stamp motif, line-art service-area map).

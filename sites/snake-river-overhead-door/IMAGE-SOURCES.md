# Image sources — Snake River Overhead Door Service mockup

Date checked: 2026-08-04

**Result: zero images added.** Both permitted sources were checked and
neither yielded a usable, genuine photo of this business. No `img/` folder
was created under `sites/snake-river-overhead-door/` and `index.html` was
not changed for imagery. The page remains CSS/inline-SVG only, per
BRIEF.md rule 4's fallback ("if you cannot find real photos, build with
CSS and inline SVG as before").

## Business identity used for verification

Pulled directly from `sites/snake-river-overhead-door/index.html`:
- Name: Snake River Overhead Door Service
- Phone: (208) 356-3469
- Location stated on page: Rexburg, Idaho (no street address on the page)
- "Since 1981" / "45 years in the Upper Valley"

## Source 1 — Business's own current website

Searched for an official website via WebSearch (`Snake River Overhead Door
Service Rexburg Idaho`, `"Snake River Overhead Door" Rexburg official
website`, and domain guesses `snakeriverdoor.com` /
`snakeriveroverheaddoor.com` / `snakeriveroverheaddoorservice.com`).

Findings:
- No dedicated business website exists. Every result is a third-party
  directory/listing (Yelp, BBB, Yellow Pages, Nextdoor, Chamber of
  Commerce, ABLocal, MerchantCircle, garagedoorsupplier.com,
  getgaragedoorrepair.com, cmac.ws, Waze) or the business's Facebook page
  (`facebook.com/snakeriverdoor`). Facebook is not one of the two sources
  permitted by BRIEF.md rule 4, so it was not crawled for photos.
- One aggregator result surfaced `martindoor.com` as a "website" field.
  Checked via `curl` — the domain returns a Cloudflare "Attention
  Required" challenge page (no content reachable) and, independently,
  Martin Door is a national garage door manufacturer brand, not a website
  belonging to this small Rexburg service shop. Not treated as their site;
  no content was usable or attributable to this business even if it had
  loaded.
- Direct probes of the three most likely self-hosted domain guesses
  (`snakeriverdoor.com`, `snakeriveroverheaddoor.com`,
  `snakeriveroverheaddoorservice.com`) all failed to resolve/connect
  (curl exit code 6 / no DNS record for all three).
- Conclusion: this business has no independently confirmed, crawlable
  website. Source 1 yields nothing.

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script run from the
scratchpad (own browser instance — no shared/MCP Playwright tool used):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-outdoor/snake-river-overhead-door-retry/maps-scrape.js`
and a follow-up `maps-photos.js` that additionally tried clicking a "See
photos" link.

The script searched "Snake River Overhead Door Service Rexburg, ID",
opened the top result, and read the listing panel plus scanned all
`<img>` elements for `googleusercontent.com` photo URLs (full-res photo
CDN, not thumbnails/icons).

**Business match confirmed:** the listing panel shows phone
`(208) 356-3469` — an exact match to the phone number printed on the
mockup page — and the label "Confirmed by this business 8 weeks ago",
i.e. the business itself maintains this listing. (Listed address:
5676 S 2000 W, Rexburg, ID 83440; directory sites disagree with each
other on street address, but the phone-number match is the definitive
identity check per the task instructions, and it's exact.)

**Photos: none.** Both script runs returned zero `googleusercontent.com`
photo URLs. The panel's own UI confirms this independently — it shows
"Add missing information → Add website" and "Photos → Add photos &
videos", which is Google Maps' own indicator that no website and no
photos are on file for this listing. A "See photos" link is present in
the header area regardless of photo count; clicking it did not reveal any
photos (screenshot confirms it simply returned to the bare map view with
no gallery opening) and no additional `googleusercontent.com` URLs
appeared in the DOM afterward.

Screenshots taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-outdoor/snake-river-overhead-door-retry/maps-listing.png`,
`maps-photos.png`.

## Conclusion

No genuine, usable photos of Snake River Overhead Door Service exist on
either permitted source as of 2026-08-04: the business has no independent
website, and its Google Business Profile has zero uploaded photos.
`sites/snake-river-overhead-door/img/` was not created.
`index.html` was not changed for imagery — it continues to use the
CSS/inline-SVG visual system (animated door-panel hero mechanism, giant
numeral stat, icon cards) that was already in place.

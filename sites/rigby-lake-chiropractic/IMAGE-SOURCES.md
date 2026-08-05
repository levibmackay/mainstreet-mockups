# Image Sources — Rigby Lake Chiropractic mockup

Date: 2026-08-04

## Business identification

From `sites/rigby-lake-chiropractic/index.html`:
- Name: Rigby Lake Chiropractic
- Address: 711 Rigby Lake Dr, Suite 1102, Rigby, Idaho
- Phone: (208) 745-5165 / tel:+12087455165

## Own website search

WebSearch for "Rigby Lake Chiropractic Rigby Idaho website" found no dedicated
business website. Only found:
- Facebook page: https://www.facebook.com/rigbylakechiropractic/ (not a
  "current website" per BRIEF.md rule 4's two allowed sources — own website
  or Google Maps listing — so not used as a source even if photos exist there)
- Directory listings (npidb.org, orthopedic.io, healthgrades, providerwire,
  npino, WebMD) — not the business's own site, not used.

Conclusion: no dedicated business website found. Checking Google Business
Profile / Google Maps listing next.

## Google Maps check

Scraped with a dedicated headless Chromium instance launched via a local
Node/Playwright script (not the shared MCP Playwright tool), at
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-med2/maps-rigby.js`.
(Used the Chromium build bundled with `rexburg-housing`'s node_modules —
`noble-jewelers`'s Playwright package expected a different cached browser
revision than what was installed locally.)

Searched Google Maps for "Rigby Lake Chiropractic Rigby Idaho", opened the
listing. **Confirmed correct business**: address `711 Rigby Lake Dr Ste 1102,
Rigby, ID 83442` and phone `(208) 745-5165` both match the mockup exactly
(screenshot + DOM text extract, both saved in the scratchpad folder above).

Result: no photo carousel, no "See photos" thumbnail — the panel instead
shows an "Add a photo" prompt under "Add missing information," which Google
only shows when a listing has zero photos. Confirmed via
`img[src*="googleusercontent"]` DOM query across the page: **0 matches**.
This business's Google Business Profile currently has no uploaded photos.

The listing's only web link is `facebook.com` (their Facebook page). Facebook
is not one of the two sources this brief allows (own website or Google Maps
listing), so it was not crawled for images.

## Images added: 0

No usable real photos exist across either allowed source (own website: none
found at all; Google Maps: confirmed correct listing, zero photos uploaded).
Per BRIEF.md rule 4, this is a normal outcome — the page remains built with
CSS/SVG only. No `img/` folder was created and no `<img>` tag was added to
`index.html`. (The page has since had an unrelated design polish pass — custom
service iconography, hero texture, hover states — but nothing image-related
changed.)

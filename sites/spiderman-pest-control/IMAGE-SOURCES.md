# Image sources — A Spiderman Pest Control LLC mockup

Date checked: **2026-08-05** (supersedes the 2026-08-04 pass)

**Result: still zero images added.** This re-check was triggered by the
2026-08-05 revision to BRIEF.md rule 4, which added a business's own Facebook or
Instagram page as a permitted third source. Their social channel has now been
opened and every image on it inspected. Nothing on it qualifies.

No `img/` folder was created and `index.html` was not changed. The page remains
CSS/inline-SVG only, per rule 4's fallback.

## Source 3 — facebook.com/p/Spiderman-Pest-Control-100057026727280

**Reachable.** `curl` is hard-blocked by Facebook (HTTP 400), but a standalone
headless Chromium (Playwright, run from the scratchpad — not the shared MCP
tool) rendered the public page and its `/photo/?fbid=` permalinks without
logging in. No login was attempted and no login wall was circumvented.

**Business identity confirmed:** page name "Spiderman Pest Control", Rigby ID,
phone **208-709-7523** printed on the page's own door-hanger graphic — an exact
match to `leads/home-services.md`, to `spidermanpest.com`, and to the mockup.
`verify/batch-e.md` independently cites this exact Facebook URL for this
business.

### The problem: this page has no photographs at all

Every recoverable image is either brand artwork or a promotional flyer. There is
not one photograph of a truck, a technician at work, a treatment, an office, or
a job site.

| Asset | What it is | Verdict |
|---|---|---|
| Cover photo, fbid `575952320982320` (Sep 8 2022) | The "SPIDERMAN PEST" spider-and-wordmark logo on white | **Rejected** — logo artwork, not a photograph. (Also a stylised Spider-Man derivative; the mockup deliberately avoids that IP.) |
| fbid `560234030853443` (Jan 16 2017) | Door-hanger / flyer front: "$20 Off Any One-Time General Pest Treatment", "$50 Off One Of Our Seasonal Pest Control Plans", with a grid of clip-art pest silhouettes (spiders, mice/voles, silverfish, beetles, earwigs, ants, flies, wasps) | **Rejected — promo graphic** built on clip-art. Explicitly banned by rule 4. |
| fbid `560234007520112` (Jan 16 2017) | Door-hanger / flyer back: logo, "Call Today For A Free Estimate", 208-709-7523, "Pest, Lawn, Shrub Service" | **Rejected — promo graphic**, not a photograph. |
| fbid `929176258993256` (Apr 1 2024) and fbid `1190045422906337` (Apr 21 2025) — the "#ELDERMACKMONDAY" posts | A promotional giveaway graphic ("Giving away 9 FREE SPRAYS in honor of #9 Mack Chappell") built around **inset photographs of Elder Mack Chappell**, a young man who died while serving a mission | **Rejected on three independent grounds:** it is a promo graphic; it contains **identifiable faces**; and the person depicted is a deceased third party, not the business. Using a memorial image to sell a redesign would be indefensible even if the rules allowed it, which they do not. |

Four further photo permalinks were enumerated from the page
(fbid `1363782370498601`, `560227117520801`, `560223990854447`, and a duplicate
of `575952324315653`) but returned no image asset above the thumbnail
threshold — no additional candidates were recoverable, and none showed evidence
of being photographs.

**Instagram: none found.** No Instagram account surfaced for this business; a
targeted search returned only Alignable, ZoomInfo, Yelp, Nextdoor, BOTW and
their own Facebook page.

## Sources 1 and 2 — unchanged from 2026-08-04

Not re-run, because neither the business nor the rule changed:

- **Own website (`spidermanpest.com`):** every content image across all three
  pages of the site is named `Depositphotos_<id>_m-2015...` — licensed stock
  they bought, which rule 4's hard constraint forbids republishing even though
  it sits on their own domain. The only non-stock assets are their logo and a
  third-party web developer's credit logo.
- **Google Business Profile:** exactly one owner-uploaded photo, and it is a
  stock spider macro overlaid with "save $50" ad copy — a marketing creative,
  not a photograph of the business.

## Conclusion

All three permitted sources are now exhausted, and they fail in the same way for
the same reason: this business has never published an original photograph of
itself. Its website is wall-to-wall Depositphotos, its Google listing holds one
stock-based ad graphic, and its Facebook page holds a logo, two 2017 flyers, and
a memorial promo. Zero images added; the mockup stays CSS/SVG-only.

Worth noting for the pitch: "every photo on your site is stock" is a live,
verified observation about this prospect, and `verify/batch-e.md` already
records the safe wording for it. The absence of real photos is the story here,
not an obstacle to it.

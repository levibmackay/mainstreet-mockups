# Image sources — Rigby Lake Chiropractic mockup

Date checked: **2026-08-05** (supersedes the 2026-08-04 pass)

**Result: still zero images added.** This re-check was triggered by the
2026-08-05 revision to BRIEF.md rule 4, which added a business's own Facebook
or Instagram page as a permitted third source. The 2026-08-04 pass had declined
to crawl `facebook.com/rigbylakechiropractic` **on the source rule alone**. That
page has now been opened and every image on it inspected. Nothing on it
qualifies.

No `img/` folder was created and `index.html` was not changed. The page remains
CSS/inline-SVG only, per rule 4's fallback.

## Source 3 — facebook.com/rigbylakechiropractic

**Reachable.** `curl` is hard-blocked by Facebook (HTTP 400), but a standalone
headless Chromium (Playwright, run from the scratchpad — not the shared MCP
tool) rendered the public page and its individual `/photo/?fbid=` permalinks
without logging in. No login was attempted and no login wall was circumvented.
Eleven distinct images were recovered at full resolution — effectively the
page's entire public image history back to November 2023.

**Business identity confirmed:** page name "Rigby Lake Chiropractic", Rigby ID,
479 followers. `leads/professional-services.md` independently names
`facebook.com/rigbylakechiropractic` as this business's page, and lists the same
phone `(208) 745-5165` and address `711 Rigby Lake Dr Suite 1102` carried on the
mockup.

### The problem: this page posts announcements, not photographs

Every single post on this page is a **holiday or closure announcement**, and the
attached image is always a generic greeting graphic. There is not one photograph
of the office, the building, the treatment rooms, the equipment, or the practice
in the entire visible history.

| Asset | What it is | Verdict |
|---|---|---|
| Cover photo, fbid `570727394842429` | 3D-rendered blue human spine on a clinical gradient background | **Rejected — stock medical render.** Not a photograph and not of this business. |
| Profile photo, fbid `570727398175762` | "RIGBY LAKE CHIROPRACTIC" logo wordmark | **Rejected** — logo, not a photograph. |
| fbid `1563934325521726` (Jul 11 2026, "We will be closed 7/13–7/23") | A **still frame from the film *The Hobbit*** captioned "I'M GOING ON AN ADVENTURE!" | **Rejected — copyrighted film still used as a meme.** Identifiable actor's face. Explicitly banned by rule 4. |
| fbid `1375462594368901` (Nov 24 2025) | "HAPPY THANKSGIVING" cartoon clip-art of a family at a turkey dinner | **Rejected** — stock clip-art / promo graphic. |
| fbid `1219850983263397` (May 21 2025) | "Memorial Day — Remember and Honor" flag graphic | **Rejected** — stock graphic. |
| fbid `1107846971130466` (Dec 24 2024) | "MERRY CHRISTMAS" lettering with antlers and a Santa hat | **Rejected** — stock graphic. |
| fbid `1089270859654744` (Nov 27 2024) | "Happy Thanksgiving" hand-lettering with a pumpkin | **Rejected** — stock graphic. |
| fbid `986245956623902` (Jul 1 2024) | Sparkler and a small US flag held in a hand, dark background | **Rejected — stock photograph.** Studio-lit stock holiday imagery, nothing to do with this practice; a hand is in frame. |
| fbid `962595185655646` (May 24 2024) | Military cemetery headstones lined with US flags | **Rejected — stock photograph**, not of this business. |
| fbid `869757384939427` (Dec 22 2023) | "Happy Holidays" snowflake graphic | **Rejected** — stock graphic. |
| fbid `852239813357851` (Nov 21 2023) | "HAPPY THANKSGIVING" autumn-leaf graphic | **Rejected** — stock graphic. |

Two of these (the sparkler and the cemetery) are photographs rather than
clip-art, but both are plainly licensed stock used as holiday greetings, and
neither depicts the business. Rule 4's hard constraint against republishing
stock the business merely licensed applies to social posts exactly as it does
to their website.

**Instagram: none found.** No Instagram account surfaced for this business.

## Sources 1 and 2 — unchanged from 2026-08-04

Not re-run, because neither the business nor the rule changed:

- **Own website:** none exists. Only directory listings (NPI, Healthgrades,
  BBB, WebMD) and the Facebook page. The Facebook page is this practice's only
  real web presence.
- **Google Business Profile:** listing confirmed correct by exact address and
  phone match, but has **zero uploaded photos** — verified by an
  `img[src*="googleusercontent"]` DOM query returning 0 matches, with Google's
  own "Add a photo" prompt shown on the panel.

## Conclusion

All three permitted sources have now been exhausted. This practice has never
published a photograph of itself anywhere on the open web: no website, an empty
Google listing, and a Facebook page whose entire image history is holiday
clip-art and one *Hobbit* meme. Zero images added; the mockup stays
CSS/SVG-only.

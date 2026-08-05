# Image sources — Snake River Overhead Door Service mockup

Date checked: **2026-08-05** (supersedes the 2026-08-04 pass)

**Result: still zero images added.** This re-check was triggered by the
2026-08-05 revision to BRIEF.md rule 4, which added a business's own Facebook
or Instagram page as a permitted third source. The 2026-08-04 pass had rejected
this business's Facebook page **on the source rule alone**, without looking at
its contents. That page has now been opened and every image on it inspected.
Everything on it is disqualified on other grounds.

No `img/` folder was created and `index.html` was not changed. The page remains
CSS/inline-SVG only, per rule 4's fallback.

## Source 3 — facebook.com/snakeriverdoor

**Reachable.** `curl` is hard-blocked by Facebook (HTTP 400 on `www.`, `m.` and
`mbasic.`), but a standalone headless Chromium (Playwright, run from the
scratchpad — not the shared MCP tool) rendered the public page and its
individual `/photo/?fbid=` permalinks without logging in. No login was
attempted and no login wall was circumvented. The album grid behind
"See all photos" is login-walled and was not pursued; the post feed and the
per-photo permalinks were fully readable, and they are the whole of this page's
public content.

**Business identity confirmed.** Page title "Snake River Overhead Door Service
| Rexburg ID"; intro text "Snake River Overhead Door has been Serving East
Idaho and surrounding areas for over 40 years"; phone **(208) 356-3469** — an
exact match to the phone in `leads/home-services.md` and on the mockup page.
(The page also lists `Mikemort71@yahoo.com` and, in its website field,
`martindoor.com` — the Martin Door manufacturer site, consistent with the
2026-08-04 finding that this is a brand link, not their own site.)

This page has only **40 followers** and its most recent post is from **June 28,
2021**. It is close to dormant.

### Every image on the page, and its verdict

| Asset | What it is | Verdict |
|---|---|---|
| Profile photo, fbid `443982391082185` (Aug 29 2022) — also reused as the cover photo, fbid `3686772561376792` (Mar 2 2021); identical file | Their "SNAKE RIVER Overhead Door Service / 208-356-3469" sign artwork. **Photographed off a computer monitor** — visible moiré/screen-door pattern across the whole field, a rainbow backlight sheen in the top-right, and the monitor bezel down the left edge. | **Rejected.** It is their *logo artwork*, not a photograph of the business — there is no truck, shop, door, or signage in the world here, just a screen showing a graphic. Rule 4 permits real photographs of the business; a screen-grab of a logo is not one. It is also visibly low quality and would cheapen the page. |
| fbid `4163918023698301` (Jun 28 2021) | Rodeo arena: a family of four posed against a white pickup. | **Rejected — identifiable faces** (two adults and two children, all facing camera). |
| fbid `4163918043698299` (Jun 28 2021) | Rodeo clown in a green hat working the arena. | **Rejected — identifiable face**, plus a spectator crowd in the background. |
| fbid `4163918053698298` (Jun 28 2021) | White Ford F-250 driving the arena, crowd in the stands behind. | **Rejected.** The truck carries **"Woody Smith"** door branding — a *different business's* vehicle, not theirs — and a full grandstand of spectators is in frame. |
| fbid `4163918220364948` (Jun 28 2021) | Rodeo clown beside the same pickup's tailgate. | **Rejected — identifiable face**, crowd behind. |
| fbid `4163918253698278` (Jun 28 2021) | Rodeo clown close-up with a bucket. | **Rejected — identifiable face** (nearest and clearest of the set). |

Two further points about the rodeo set: the photo permalinks attribute those
five images to the location page **"Madison Fairgrounds • Rexburg"** rather
than to the business, so it is not even certain the business shot or owns them;
and regardless of authorship, a rodeo is not a photograph of a garage-door
company's work. Either objection alone is disqualifying.

**Instagram: none found.** No Instagram account surfaced for this business.

## Sources 1 and 2 — unchanged from 2026-08-04

Not re-run, because neither the business nor the rule changed:

- **Own website:** none exists. Every result is a third-party directory. Three
  likely domains (`snakeriverdoor.com`, `snakeriveroverheaddoor.com`,
  `snakeriveroverheaddoorservice.com`) do not resolve. `martindoor.com` is a
  national manufacturer, not their site.
- **Google Business Profile:** listing confirmed correct by exact phone match
  and "Confirmed by this business", but has **zero uploaded photos** — the
  panel shows Google's own "Add photos & videos" prompt.

## Conclusion

This business has a real Facebook page and it is now a permitted source, but
its entire public image inventory is five face-filled rodeo photos (one of them
featuring a competitor's truck) plus a monitor-photographed logo. Nothing on it
is a usable photograph of Snake River Overhead Door Service's work, shop,
vehicles, or signage.

Worth saying plainly, since this is the strongest never-contacted prospect in
the pipeline: the reason there are no photos is that the business has almost no
web presence at all — no website, an empty Google listing, and a Facebook page
with 40 followers that went quiet in 2021. That absence is itself the pitch.
The mockup stays CSS/SVG-only.

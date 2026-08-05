# Image sources — Let Us Clip Ya LLC mockup

Date: 2026-08-05

**Result: 3 images added.** All three are genuine project photographs from the
business's own website.

Business verified before anything was used: the mockup lists (208) 346-3846,
and `letusclipya.com` serves that same number (`346-3846`) on its homepage
along with the "Clip Ya" brand name. Correct business, confirmed by phone
match on their own domain.

## Images added: 3

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/firepit-patio-rexburg.jpg` | https://letusclipya.com/img/slides/rexburg-landscaping-firepit.jpg | Own site (homepage slider) | Completed-work / full-bleed band | 2026-08-05 |
| `img/boulder-wall-rexburg.jpg` | https://letusclipya.com/img/rock-landscaping-rexburg-idaho.jpg | Own site | Completed-work grid | 2026-08-05 |
| `img/church-grounds-swan-valley.jpg` | https://letusclipya.com/img/lds-church-landscape-swan-valley-idaho.jpg | Own site | Completed-work grid | 2026-08-05 |

Each was opened and visually verified in the main session:

- `firepit-patio-rexburg.jpg` (1728×488) — a curved flagstone patio with a
  round stone gas firepit and seat wall, bistro table and chairs, mulched
  beds with boulders and ornamental grasses, and a sharp lawn edge. No
  people. Easily the strongest image; its very wide crop suits a full-bleed
  band rather than a grid cell.
- `boulder-wall-rexburg.jpg` (500×500) — a boulder retaining wall above fresh
  sod, shot low against a cloudy sky. No people. Heavily HDR-processed.
- `church-grounds-swan-valley.jpg` (500×500) — a brick LDS meetinghouse with
  newly installed lawn, young trees and boulder beds, mountains behind. No
  people. Useful as the commercial/institutional example.

Optimized with `sips` at JPEG quality 80; native dimensions kept, since all
three are already at or under the 1600px long-edge cap. Total `img/` folder
size: 936KB, well under the 2MB budget.

**Resolution caveat, worth knowing before designing around these:** their site
simply does not host large images. The two grid photos are 500×500 natives and
the band is 1728×488. They must not be displayed larger than roughly their
native size or they will visibly soften. This is a real constraint on the
page, not an oversight.

## Sources checked and rejected

**Own site (letusclipya.com):**

- `img/bark-rexburg-idaho-delivered-thumb.jpg`,
  `custom-firepit-idaho-falls-thumb.jpg`,
  `firepit-landscape-in-idaho-falls-thumb.jpg`,
  `hardscapes-in-jackson-hole-thumb.jpg`, `lawn-care-rexburg-thumb.jpg`,
  `paver-installation-jackson-hole-thumb.jpg`,
  `pavers-in-jackson-hole-thumb.jpg`,
  `sprinkler-installation-in-rexburg-thumb.jpg` — not used. All are
  explicitly `-thumb` derivatives and too small to display at any meaningful
  size. They are genuine project photos, so if larger originals are ever
  obtained directly from the owner they would be good material.
- `img/afton-wyoming-landscaping-company.jpg` (500×500) — genuine and
  available, but not integrated: it was not opened and visually vetted in
  this pass, and nothing goes on the page unseen. A legitimate candidate for
  a future pass.
- `img/logo.png`, `img/skidsteer-website.png` — not used. Brand mark and a
  cut-out graphic, not photographs.

**Google Maps / Google Business Profile:** not checked in this pass. Their own
site supplied enough genuine, privacy-safe project photography. Earlier
attempts on this business did screenshot the Maps listing — the artifacts are
at `scratchpad/agent-outdoor/let-us-clip-ya/` — but no usable image was ever
recorded from them.

## History — why this file was rewritten

An earlier pass left six unsourced JPEGs in this directory and, after three
agents were killed mid-task by a stall watchdog, ended with `index.html`
referencing seven filenames while only four existed on disk — seven broken
images on a page meant to be emailed to the owner.

Because no agent had recorded where those files came from, their provenance
could not be stated, and BRIEF.md rule 4 requires a per-file source URL. They
were therefore deleted and `index.html` was reverted to its photo-free state
rather than shipping images we could not account for.

This pass redid the work properly: found and verified the real website by
phone match, pulled the images from URLs that are recorded above, and opened
each one before accepting it. The earlier files are gone; the three here are
new downloads with known sources.

---

## Logo pass — 2026-08-05

**Result: real logo found and used.**

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-let-us-clip-ya.png` | https://letusclipya.com/img/logo.png | Their site (header logo) | Header brand lockup (above the fold, not lazy-loaded) and footer brand lockup (`loading="lazy"`). Replaces the drawn stacked-stone SVG and the typed "Let Us Clip Ya" wordmark in both places. | 2026-08-05 |

**Verification.** `letusclipya.com` was already verified above by exact phone
match `(208) 346-3846` on their own homepage. The logo reads "LET US CLIP YA"
with "LANDSCAPING" beneath it, beside a green shield containing an ornamental
grass illustration. Exact name match.

Also checked: `img/apple-touch-icon.png` (180x180, the shield alone) and
`img/favicon.ico` — skipped, the full horizontal lockup carries the wordmark and
is the better header asset.

**Processing.** Alpha-trimmed and quantised only — 415x93, 3.2KB. Not
recoloured, not stretched, nothing cropped.

**Contrast.** Checked against both grounds it sits on. Their green `#33B14A`
clears AA against the `--sand #f2e9d8` header and against the `--umber-950
#241a12` footer, and the grey "LANDSCAPING" (`#B0B0B0`) clears comfortably on
the dark footer. No plate needed anywhere.

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Green | `#33B14A` (range `#30B048`–`#38B848`) | The shield and the "LET US CLIP YA" wordmark |
| Grey | `#B0B0B0` | "LANDSCAPING" |
| Pale green | `#D8E8D0` | The grass illustration inside the shield |

**Do their colours agree with this page?** **No.** Their identity is a single
bright landscaping green. This page is built on sand, umber and clay-orange
(`--clay-500 #c1622a`), a deliberately earthy hardscape palette with no green in
it at all. The logo reads fine on both grounds, but its green is the only green
on the page and currently sits as an outlier rather than as the accent colour.
Flagged for Levi.

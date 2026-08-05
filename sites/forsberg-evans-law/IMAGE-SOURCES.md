# Image sources — Forsberg & Evans Law Offices mockup

Date checked: 2026-08-04

**Result: zero images added.** Both permitted sources (their own site and
their Google Business Profile) were checked. Their own site has photographic
candidates, but every one of them is either generic stock photography or an
identifiable staff/attorney headshot, both of which are excluded by
BRIEF.md rule 4 (no stock photography, no identifiable faces — the privacy
ban applies even to genuine photos of real staff on their own site). Their
Google Business Profile has no photos uploaded at all. No images were
downloaded into `sites/forsberg-evans-law/img/` and `index.html` was not
changed for imagery. The page remains CSS/inline-SVG only, per BRIEF.md
rule 4's fallback ("if you cannot find real photos, build with CSS and
inline SVG as before").

## Business verification

Real website found and verified: **https://forsbergandevans.com/**. Fetched
with `curl` (homepage, `/about-us/`, `/areas-of-practice/`, `/contact-us/`,
`/staff/`). Confirmed match against the fact sheet: phone `(208) 356-7474`
appears in the homepage markup, and `/contact-us/` explicitly contains
"Professional Plaza" and "Rexburg." Treated as the confirmed correct
business site.

## Source 1 — https://forsbergandevans.com (their own site)

All `<img>`/`data-src` references across the five fetched pages (home,
about-us, areas-of-practice, contact-us, staff):

| Filename | What it is | Verdict |
|---|---|---|
| `Bill-Forsberg-final.jpg` | Attorney headshot | Rejected: identifiable face. Banned per privacy rule regardless of authenticity. |
| `Troy-Evans-Final.jpg` | Attorney headshot | Rejected: identifiable face. |
| `Julie-Ball-final.jpg` | Staff headshot | Rejected: identifiable face. |
| `Phil-Packer-final.jpg` | Staff/attorney headshot | Rejected: identifiable face. |
| `jordanne_schmitt.jpg` | Staff headshot | Rejected: identifiable face. |
| `kimberly_muench.jpg` | Staff headshot | Rejected: identifiable face. |
| `Shawn-Dorman.jpg` | Staff headshot | Rejected: identifiable face. |
| `banner-02.jpg` / `banner-02-300x85.jpg` | Law-book-spine close-up ("American International Law Cases 1783-1968") | Rejected: downloaded and opened the full-res version — it is a generic, widely-used stock photo of an anonymous law library shelf (the same title/spine text repeats identically down the row, a tell of stock/tiled imagery), not a photo of this office's actual library. No firm branding, no distinguishing feature tying it to this business. |
| `contact-us-img.jpg` | Woman wearing a headset, smiling, city skyline in the background | Rejected: downloaded and opened it — generic customer-service/call-center stock photo, not a photo of this firm's staff or office. Also happens to contain an identifiable face, which would independently disqualify it even if it weren't stock. |
| `welcome.jpg` | Four professionals in business attire, blonde woman in front | Rejected: downloaded and opened it — generic corporate stock photography (the classic "team of professionals" stock shot), not this firm's actual attorneys or staff. Also contains identifiable faces, independently disqualifying. |
| `forsberg_evans_logo_wht-300x118.png` | Firm's own wordmark logo | Not used — this is a logo, not a photograph, and out of scope for this photo task, same treatment as the back-to-health reference case. |
| `arrow-icon.png`, `Secure-Payment1-300x34.jpg` | UI icon and payment-badge icon | Skipped — decorative site chrome/icons, not content photography. |

Net: nothing on their own site is both genuine-to-this-business and free of
identifiable faces or stock provenance.

## Source 2 — Google Maps / Google Business Profile

Checked via a standalone Playwright/Chromium script
(`maps-scrape.js`, run from this task's own scratchpad directory, own
browser instance — no shared/MCP Playwright tool used) that navigated
directly to a Google Maps search URL for "Forsberg & Evans Law Offices
Rexburg, ID" and inspected the resulting listing panel.

Verification: listing panel text contains `49 Professional Plaza, Rexburg,
ID 83440`, `(208) 356-7474`, and `forsbergandevans.com` — confirms this is
the correct listing (4.3★ rating shown on the panel itself — not used
anywhere on the page, per BRIEF's no-fabricated-ratings rule).

Photo check: DOM query for every `<img>` on the page found 30 images total,
**zero** of which were `googleusercontent.com` photo URLs (all 30 were map
tiles/UI chrome). The panel's "Photos" section renders as an empty
placeholder block, and the only actionable control under it is "Add photos
& videos" — Google Maps' own indicator that no photos have been uploaded to
this listing.

Screenshot taken as evidence of this check (not used on the page, scratch
only):
`/private/tmp/claude-501/-Users-levimackay/8e893c70-2c83-4406-8d99-79ed9020a931/scratchpad/agent-proservices/forsberg-evans-law/raw/maps-listing.png`

## Conclusion

No genuine, privacy-safe, non-stock photo of Forsberg & Evans Law Offices
exists on either permitted source as of 2026-08-04.
`sites/forsberg-evans-law/img/` was not created. `index.html` was not
changed for imagery — it continues to use the CSS/inline-SVG visual system
(oxblood/gold engraved-line motif, map-pin illustration, geometric seal)
that was already in place.

---

# 2026-08-05 — Source 3 pass (Facebook / Instagram)

BRIEF.md rule 4 was revised on 2026-08-05 to permit a third source: the
business's own Facebook or Instagram page. This section records that pass.

**Result: still zero images.** No Facebook or Instagram page belonging to
this firm could be confirmed to exist. `sites/forsberg-evans-law/img/` was
not created and `index.html` was not changed.

## What was checked

**Their own site.** `forsbergandevans.com` homepage and `/contact-us/` were
re-fetched and grepped for any `facebook.com` or `instagram.com` link.
There are none anywhere on either page — no social icons, no footer social
row. For a firm that publishes a Square payment link in its top nav, the
absence of a social link is a reasonable signal they simply do not run one.

**Search.** Multiple searches for a Forsberg & Evans page tied to Rexburg.
The firm surfaces on directory aggregators (ZoomInfo, Lawyer.com, Yelp,
Lexinter, BBB) but no Facebook or Instagram profile for it appears. The
Rexburg law-firm pages that do exist on Facebook belong to **other** firms
— Shinault Law Firm and Dalling Law — and an "Evans Law Offices PLLC" that
turns out to be in Tucson, Arizona. None of these are this business.

**Direct slug probes**, all returning Facebook's "this content isn't
available right now" or an empty Instagram page:
`facebook.com/forsbergandevans`, `facebook.com/forsbergevans`,
`facebook.com/ForsbergEvansLaw`, and the same three on `instagram.com`.

## Conclusion

All three permitted sources have now been checked. Their own site has only
attorney and staff headshots plus corporate stock; their Google listing has
no photos at all; and there is no social channel. Nothing changed. The page
stays on its CSS/inline-SVG visual system (oxblood/gold engraved-line motif,
map-pin illustration, geometric seal).

Worth noting for anyone revisiting this: a law firm is close to the worst
possible category for this rule set. Almost all of a firm's genuine imagery
is people — attorneys, staff, clients — and the no-identifiable-faces rule
removes essentially all of it. A photo-free page is the expected outcome
here, not a gap to keep hunting for.

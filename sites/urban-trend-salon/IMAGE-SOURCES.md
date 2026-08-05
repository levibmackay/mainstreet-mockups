# Image sources — Urban Trend Salon mockup

Last pass: 2026-08-05 (Facebook/Instagram added as a permitted source by
BRIEF.md rule 4). Earlier passes: 2026-08-03 / 2026-08-04, zero images.

**Result: 3 images added, all from the salon's own Facebook page.**

## Identity verification

Facebook page `https://www.facebook.com/100063792330239/` ("Urban Trend
Salon"). Its own About tab, read live 2026-08-05:

- Name: **Urban Trend Salon**
- Address: **344 West 4th South Suite A, Rexburg, ID, United States, 83440**
- Mobile: **(208) 201-4649**
- Category: Hair Salon
- Website link: the Square booking page `squareup.com/appointments/book/4BT90H72B4B1V/urban-trend-salon`

Name, suite address, and phone all match `index.html` and
`mainstreet-sites-sales/verify/batch-e.md`. Name match, not just phone.

## Images used

| Local file | Source URL | Source | Where it appears | Date pulled |
|---|---|---|---|---|
| `img/blonde-balayage-long-layers.jpg` | `https://www.facebook.com/photo.php?fbid=1566619802141083` | facebook | "The Work" section, first tile | 2026-08-05 |
| `img/brunette-caramel-highlights.jpg` | `https://www.facebook.com/photo.php?fbid=1490156553120742` | facebook | "The Work" section, second tile | 2026-08-05 |
| `img/dark-brunette-waves.jpg` | `https://www.facebook.com/photo.php?fbid=1559195619550168` | facebook | "The Work" section, third tile | 2026-08-05 |

All three are from the page's **own Photos tab**
(`.../100063792330239/photos`, labelled "Urban Trend Salon's Photos" — not the
Tagged photos tab), posted by the salon:

- `blonde-balayage-long-layers.jpg` — posted 29 April 2026, caption "It's
  getting hot in here!". Shot from directly behind the client, hands raised into
  the hair. **No face visible, no other person in frame.**
- `brunette-caramel-highlights.jpg` — posted 6 February 2026, caption "These
  long luscious locks". Shot from behind. **No face visible; background is empty
  salon interior, out of focus.**
- `dark-brunette-waves.jpg` — posted 21 April 2026, caption "When hair looks
  this good, you feel good — in Rexburg, ID". Three-quarter rear view, hair
  fully covering the head and face. **No face visible, no other person in
  frame.**

Downscaled with `sips -Z 1600`. Combined 1.4 MB, under the 2 MB per-site budget.
Relative paths, `loading="lazy"`, explicit `width`/`height`.

## Rejected candidates — Facebook

The page has 88 photos in its own Photos tab. Every candidate examined and
rejected, with the reason:

| Photo | Why rejected |
|---|---|
| `fbid=1527867629349634` — "The cut and color" (19 Mar 2026) | **Identifiable client face**, sharp three-quarter portrait. |
| `fbid=1425128889623509` — "Bringing the blonde back" (25 Nov 2025) | **Identifiable client face**, front-facing portrait. |
| `fbid=1640129918123404` — "Girrrlllllll" (16 Jul 2026) | Facebook's own alt text reads "May be an image of one or more people and braids" — people in frame. |
| `fbid=1578346010968462` / `1578346007635129` (12 May 2026) | **A minor in a hospital bed, face clearly identifiable.** A personal family post, not salon content. Categorically excluded. |
| `fbid=1451087453694319` — "Merry Christmas from my family to yours! Photo credit: @heykaylabeard" (24 Dec 2025) | Family portrait — identifiable faces — **and the caption credits a different photographer**, so it is not the salon's image to republish. |
| `fbid=1629421669194229` — 4th of July post (4 Jul 2026) | Alt text "May be an image of one or more people and beard"; also credited to another poster ("Jonny Houlihan"). Not the salon's own content. |
| `fbid=1612281657574897` (16 Jun 2026) | **Promo graphic.** Alt text is the full marketing copy: "URBAN TREND SALON REXBURG / Hydrate / Exposure to the warmer temps, sun, + water can lead to dryness…". Branded template card, banned. |
| `fbid=1598113135658416` (2 Jun 2026) | **Promo graphic.** Alt text: "Results / Deep Hydration Treatment / Perfect for: Removing split ends…". Same template family. |
| `fbid=1412219814247750` — "Northern lights are stealing the show tonight" (11 Nov 2025) | Landscape snapshot, nothing to do with the business. |
| `fbid=1445817074221357` — Christmas shopping post (18 Dec 2025), `fbid=1506994044770326` — Olympics post (24 Feb 2026), `fbid=1483856627084068` — "Let's bring the early 2000's back!" (30 Jan 2026), `fbid=1462469362556128` — holiday-break post (6 Jan 2026) | Not opened / not used. Chit-chat posts whose images could not be confirmed face-free without opening each one, and the three selected photos already carry the section. Ambiguous is a no. |
| Remaining ~70 photos, including the batch albums `fbid=1612281654241564 … 1612281637574899`, `1598113132325083 … 1598113115658418`, and `1500542238748840 … 1500542212082176` | Not used. The two large 2026 albums are the promo-graphic template series above; the rest are older grid uploads. None downloaded. |

## Rejected candidates — Instagram

`https://www.instagram.com/urban_trend_salon/` (bio: "Urban Trend Salon / Salon
owner/stylist / Your #1 hype girl", 1,017 followers). **Partially reachable**
— the logged-out grid renders, but pagination past the first ~12 posts is behind
a login wall. No login was attempted.

Of what was visible, nine of twelve posts were Reels (video) with comedy
captions — video, and face-led. The three static photo posts were all rejected:

| Post | Why rejected |
|---|---|
| `520150510_18393808252139681` (23 Jul 2025 carousel) | **Identifiable face** — an outdoor headshot portrait of the owner. |
| `730260565_18447922885139681` | **Identifiable faces** — a personal two-person selfie at an outdoor event, plus more recognisable people in the background. |
| `724056224_18444585907139681` | **Promo graphic** — "REXBURG SUMMER GUIDE / sun is ruining your hair" text laid over a palm-tree-and-parasol stock template image. Palm trees are not Rexburg; this is a licensed template, not their photography. |

Instagram contributed nothing. Everything used came from Facebook.

## Source 1 — their own website

Still none. No owned domain exists — `urbantrendsalon.com`,
`urbantrendrexburg.com` and `theurbantrendsalon.com` were all NXDOMAIN on the
2026-08-03 check. Their only "site" is a bare Square booking widget with no
gallery.

## Source 2 — Google Maps / Google Business Profile

Checked 2026-08-04. The listing's photos are staff and client portraits with
identifiable faces. Nothing pulled from this channel.

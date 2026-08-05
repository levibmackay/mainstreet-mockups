# Image sources — Rexburg Vision Center mockup

Date: 2026-08-05

**Result: 1 image added.**

Business verified before anything was used: the mockup lists (208) 356-4444,
and `rexburgvision.com` serves that same number (`208-356-4444`) on its
homepage. The sign in the accepted photo also reads "356-4444" and
"rexburgvision.com" in the image itself, so the business identity is
self-confirming rather than inferred.

## Images added: 1

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/storefront-sign.jpg` | https://rexburgvision.com/images/banner-2.jpg | Own site (homepage banner) | Full-bleed storefront band, directly below the hero | 2026-08-05 |

Verified by opening it: the practice's blue-and-white monument sign reading
"REXBURG VISION CENTER" with their logo mark, mounted on a red brick base in
front of the building, framed by a tree and shrubs. No people in frame.

The sign also carries the four doctors' names and an insurance line. Those
are the practice's own public signage, photographed as-is — none of that text
was lifted into the page as copy, and no claim from it is repeated anywhere
in the markup.

Note: this file ships from their site with a dark overlay already baked in
(it was used as a banner background with text on top). That is fine, and in
fact suits a hero treatment, but it cannot be brightened back out — plan the
design around a dim image rather than a bright one.

Optimized with `sips` at JPEG quality 80. Native 1440×960, kept at that size
(already under the 1600px long-edge cap). 484KB, well under the 2MB budget.

## Sources checked and rejected

**Own site (rexburgvision.com):**

- `images/banner-3.jpg` (1920×1149) — REJECTED. An extreme close-up of a
  single green eye with hair falling across the frame: textbook optometry
  stock photography, not a photo of this practice, this location, or anyone
  connected to it. Excluded under the no-stock rule.
- `images/employee/Nathan-C.jpg`, `images/employee/Darren-W.jpg`,
  `images/employee/Damon-S.jpg` and the rest of the `images/employee/`
  directory — REJECTED. Staff headshots. Identifiable faces are banned by the
  privacy rule even when they are genuine photos from the business's own site.
- `images/a.jpg`, `images/b.jpg`, `images/c.jpg`, `images/aa.jpg` — REJECTED
  on quality. All four are 300×200 thumbnails, far too small to use at any
  meaningful size on the page.
- `images/rexlogo.png`, `images/rexlogo_white.png` — not used. Brand
  wordmark, not photography; the mockup carries its own visual identity.
- `images/pr.png`, `images/icon-2.png`, `images/icon-3.png`, `images/4.png` —
  skipped. Interface/decorative icons, not photographs.

**Google Maps / Google Business Profile:** not checked. Their own site
supplied a clean, unambiguously-owned exterior shot, which is the strongest
kind of image available for a practice whose remaining photography is staff
headshots and stock. A Maps pass would only have risked customer-uploaded
photos of lower provenance. If a future pass wants a second source, "Rexburg
Vision Center, Rexburg, ID" is the right query.

## Net result

One genuine, privacy-safe, non-stock photograph of the practice's own
storefront signage. Everything else on their site is either a staff headshot,
licensed-looking stock, a logo, or a thumbnail too small to use.

---

## Logo pass — 2026-08-05

**Result: real logo found and used.**

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-rexburg-vision-center-light.png` | https://rexburgvision.com/images/rexlogo.png | Their site (header logo — their light-ground variant, used over dark) | Header brand lockup, above the "Est. 1963 · Rexburg, ID" locale line (above the fold, not lazy-loaded), and footer brand lockup (`loading="lazy"`). Replaces the drawn concentric-rings SVG and the typed wordmark in both places. | 2026-08-05 |

**Verification.** `rexburgvision.com` was already verified above by exact phone
match `208-356-4444`, and the storefront photo already on this page shows the
same iris mark on their monument sign. The logo reads "REXBURG / Vision Center"
beside a concentric-iris mark. Exact name match, and self-confirming against the
sign in the photo.

**Two official variants exist and both were checked.** Their site ships
`rexlogo.png` (light artwork, for dark grounds) and `rexlogo_white.png`
(dark navy artwork, *for* white grounds — the filename is about the intended
background, not the ink). This page's header and footer are both midnight navy,
so only the light variant was pulled and shipped. If a light-ground placement is
ever needed, `rexburgvision.com/images/rexlogo_white.png` is the file. Their
`favicon.svg` (33x33, the iris mark alone) was also checked — skipped, no
wordmark. Alpha-trimmed and quantised only; 406x120, 7.6KB. Not recoloured,
not stretched, nothing cropped.

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Deep navy | `#0F3E56` | The dark variant's wordmark; the shading in the iris rings |
| Light cyan | `#68C8F0` | The iris highlight |
| Pale cyan | `#80D0F0` | The outer iris ring |
| White | `#FFFFFF` | The wordmark on the light variant |

**Do their colours agree with this page?** **Yes — near-exact.** The page's
`--midnight #0b1428` sits in the same deep-navy family as their `#0F3E56`, and
the page's `--cyan-2 #7fe0f2` is within a few points of their iris cyan
`#68C8F0`. Whoever built this page landed on their real palette without having
the logo. Nothing to change.

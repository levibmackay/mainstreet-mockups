# Image sources — Golds North Fork Roofing mockup

Date checked: 2026-08-04

**Result: 3 images added.** All three are genuine jobsite photographs from the
business's own website gallery.

Business facts pulled from the mockup page (`sites/golds-roofing/index.html`)
for identification: "Golds North Fork Roofing," St. Anthony, Idaho, GAF
Master Elite and CertainTeed Select Shingle Master certified roofing
contractor.

Identity note: the mockup's contact section currently uses **placeholder**
phone and address values ("Placeholder, real number to be added" /
"Placeholder, real address to be added"), so the usual phone/address
cross-check was not available. Identity was instead confirmed by the
combination of exact business name, exact service area (St. Anthony, Idaho /
Eastern Idaho / Teton Valley), and the specific dual manufacturer
certification (GAF Master Elite + CertainTeed Select Shingle Master) — a
match specific enough not to be coincidental. **The placeholder phone and
address still need to be replaced with real values before this page is sent
to anyone.**

## Images added: 3

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/roof-ridge-vents.jpg` | https://goldsnorthforkroofing.com/wp-content/gallery/gallery/picture-030.jpg | Own site (`/gallery`) | Completed-work section | 2026-08-04 |
| `img/roof-hip-and-ridge.jpg` | https://goldsnorthforkroofing.com/wp-content/gallery/gallery/picture-031.jpg | Own site (`/gallery`) | Completed-work section | 2026-08-04 |
| `img/finished-home-valley.jpg` | https://goldsnorthforkroofing.com/wp-content/gallery/gallery/picture-028.jpg | Own site (`/gallery`) | Completed-work section | 2026-08-04 |

All three source URLs were re-verified as live (HTTP 200) on 2026-08-04
before use. Each was opened and visually inspected in the main session.
Optimized with macOS `sips` to a 1600px long edge at JPEG quality 68 (a
quality-80 pass came in at 1.9MB, uncomfortably close to the cap). All three
are 1600×1200. Total `img/` folder size: 1.6MB, under the 2MB budget.

What each one actually shows, verified by looking at it:

- `roof-ridge-vents.jpg` — a completed architectural-shingle roof shot along
  the ridge, with four ridge vents and a hip line running to the foreground,
  under blue sky and cumulus. No people. The strongest image of the set.
- `roof-hip-and-ridge.jpg` — a similar completed roof from a different angle,
  showing ridge vents plus two pipe flashings. No people.
- `finished-home-valley.jpg` — a finished stone-and-shake home with its new
  roof, photographed from the front with the mountains behind it. No people.
  Useful as the "in context" shot rather than a texture study.

EXIF on the earliest gallery files shows genuine camera captures (HP
Photosmart M305, dated 2008), which independently confirms these are real
jobsite photos rather than stock. They are old, but they are authentically
this business's work.

## Sources checked and rejected

**Own site (goldsnorthforkroofing.com), `/gallery` — 20 photos downloaded to
`scratchpad/agent-golds/raw/` and reviewed:**

- `pictures-058.jpg` — REJECTED on quality. A genuine tear-off in progress
  with tarps and a plywood slide, but shot on a low-resolution phone camera,
  soft and poorly framed. A worker is visible on a ladder, small and turned
  away, so it is not a privacy problem — it simply is not good enough for a
  page whose whole purpose is to look premium.
- `picture-025.jpg` — genuine and privacy-safe (a completed low-slope roof on
  a multi-family/commercial building, parked cars too small for plates to be
  legible). Passed vetting but left out: the roof is a minor element in a
  busy frame of pink stucco and orange siding, and it would have weakened the
  set. A legitimate backup if a commercial-work example is ever wanted.
- `picture-023`, `picture-024`, `picture-026`, `picture-027`, `picture-029`,
  `pictures-003`, `pictures-004`, `pictures-018`, `pictures-027`,
  `pictures-039`, `pictures-042`, `pictures-043`, `pictures-044`,
  `pictures-056`, `pictures-057` — not selected. The three chosen images
  already cover the range worth showing (roof detail, roof detail from a
  second angle, finished home in context), and the remainder are either
  near-duplicates of those or lower-resolution phone captures from the same
  jobs. `pictures-043.jpg` in particular is only 32KB, far too small to use.
- `discounts.jpg` — REJECTED. A military-discount banner graphic, not a
  photograph of the business.
- `logo.png` — not used. Brand mark, not a photograph; the mockup has its own
  visual identity.

**Google Maps / Google Business Profile:** not checked. The business's own
gallery already yielded more genuine, privacy-safe jobsite photography than
the page needed, so a Maps pass was unnecessary. If a future pass wants a
second source, "Golds North Fork Roofing St. Anthony, ID" is the right query.

## Process note

The agent originally assigned to this site was killed by a stall watchdog
partway through vetting, leaving this log in a "Status: in progress" state
with zero images integrated. The download it had already completed survived
in the scratchpad, so the vetting, selection, optimization and this log were
finished in the main session rather than repeating the crawl.

---

## Logo pass — 2026-08-05

**Result: real logo found and used.**

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-golds-north-fork-roofing.png` | https://goldsnorthforkroofing.com/wp-content/themes/northfork/images/logo.png | Their site (theme header logo) | Header brand lockup (above the fold, not lazy-loaded). Replaces the typed "GOLDS / North Fork Roofing" text lockup. | 2026-08-05 |
| `img/logo-golds-north-fork-roofing-full.png` | same URL as above | Their site (theme header logo) | Footer brand lockup, at 140px tall (`loading="lazy"`). Same replacement. | 2026-08-05 |

**Verification.** The artwork reads "GOLDS" above a triangle containing an eagle
and a US flag, with "NORTH FORK" and "ROOFING, LLC." set along the triangle's
two edges. Exact name match to the business. It is served from
`goldsnorthforkroofing.com`, their own domain, from their own WordPress theme
directory. The identity caveat recorded further up this file still stands: the
mockup's phone and address are placeholders, so the usual phone/address cross-
check was not available for this site and identity rests on the exact name plus
the specific GAF Master Elite / CertainTeed Select Shingle Master pairing.
**The placeholder phone and address still need real values before this page is
sent to anyone.**

**Why two files.** The original lockup carries three lines of service-list
tagline baked into the image ("Specialized in all types of Roofing", etc.). At
the 48px header size that text is unreadable mush, so the header uses the crest
alone, cropped at 77.5% height — above the tagline block, so **no part of the
wordmark or the "ROOFING, LLC." lettering is cut**. The footer carries the
complete unmodified lockup at 140px, where the tagline is legible. Neither file
was recoloured or stretched; both are alpha-trimmed only.

**Contrast.** The artwork is gold and white on transparent with dark internals,
so it reads on this page's `--charcoal-700 #23272b` header and
`--charcoal-900 #16181a` footer with no plate needed.

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Gold | `#F5A81A` | "GOLDS", the triangle border, "NORTH FORK ROOFING, LLC." |
| Flag red | `#C82030` (shadow `#B02028`) | The flag stripes, the tagline bullets |
| White | `#FFFFFF` | Flag field, eagle head, tagline line 1 |
| Flag blue | `#2A3F6E` | The flag canton |

**Do their colours agree with this page?** **Yes, closest match of the nine on
the primary.** The page's `--gold-500 #d9a441` / `--gold-400 #e4b862` sit right
next to their `#F5A81A`, just a shade cooler and less saturated. The page has no
equivalent of their flag red `#C82030`, which is a real accent in their
identity; if Levi wants an exact brand fit, that red is the one thing to add.

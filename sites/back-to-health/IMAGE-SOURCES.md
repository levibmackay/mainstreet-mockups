# Image Sources — Back to Health Chiropractic mockup

Date: 2026-08-03

## Images added: 1

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/storefront-sign.jpg` | https://backtohealthchiroid.com/wp-content/uploads/2025/03/302196566_502172438578596_7405406601717128165_n.jpg | Own site (backtohealthchiroid.com homepage) | Hero section, replaces the previous SVG illustration in `.hero-figure` | 2026-08-03 |

Optimized with macOS `sips` (JPEG quality 80). Original 958×960, kept at 958×960 (already under the 1600px long-edge cap). File size 129KB. Total `img/` folder size: ~129KB, well under the 2MB budget.

## Sources checked and rejected

**Own site (backtohealthchiroid.com), all pages crawled (home, about-us, contact, services, mls-laser, patient-information):**
- `about-us` "unnamed.jpg" (2025/10 upload) — REJECTED. Circular headshot photo with a clearly identifiable face (presumably staff/doctor). Excluded per patient/staff privacy rule.
- `services.html` images (`service-1.jpg`, `service-1-1.jpg`, `service-2a.jpg`, `service-3a.jpg`, `service-4.jpg`, `service-5a.jpg`, `chiropractor-checking-spine-scaled.jpg`, `Corrective-Exercise-scaled.jpg`, `Nutritional-scaled.jpg`, `imgi_3_medical-massage-foot-physiotherapy-center_1139-1146.jpg`) — REJECTED. Verified by opening `service-1.jpg`: generic kinesio-taping stock photo of an unrelated model, not this business's staff, patients, or location. Filenames (esp. the `imgi_3_...` prefix, a known stock-scraper naming pattern) and generic content confirm these are theme/stock filler images, not real photos of this practice. Excluded per "no stock photography" rule.
- `mls-laser.html` images (`M6_Application_Knee1_LOW...`, `M6_Application_Shoulder...`, `M6_Application_Wrist_LOW...`, `M6-Hi-Res.png`) — REJECTED. These are manufacturer marketing/product photos for the Multi Radiance MR4 "M6" laser device (generic device-in-use shots), not photos of this specific office or specific to this business. Treated as stock/manufacturer imagery and excluded.
- `bthchiro-logo.png` (wordmark logo, 400×34 PNG) — found but not integrated. It's a plain text wordmark in a different typeface family than this mockup's serif/sans system; the existing custom SVG brand mark in the header/footer already fills that role and matches the forest/terracotta palette. Using the real bitmap wordmark would clash with the established type system, so it was left out (no privacy or authenticity concern, purely a design-consistency call).
- Various favicon/cropped-icon files (`cropped-Back-to-Health-Chiro-1-*.jpg`) — skipped, low-res site icons, not usable as content photography.

**Google Maps / Google Business Profile ("Back To Health Chiropractic", Rexburg, ID — confirmed correct listing, 60 S 2nd W, (208) 359-2264, 4.8★/reviews):**
- Scraped with a dedicated headless Chromium instance launched via a local Node/Playwright script (not the shared MCP Playwright tool), at `/private/tmp/claude-501/-Users-levimackay/83e5a8e8-a0c5-4dda-9e4e-f6b3e90e5a7c/scratchpad/back-to-health-images/maps-scrape.js` and `maps-check2.js`.
- The listing panel was inspected directly (screenshot) and via DOM query (`$$eval` over all `<img>` and `<button>` elements). Result: **no photo carousel, no "Photos" button, and zero `googleusercontent.com` photo image URLs** anywhere on the listing — only base map tile images. This business's Google Business Profile currently has no uploaded photos at all.
- Conclusion: nothing usable found on Google Maps. No images sourced from Maps.

## Net result

Only one real, privacy-safe, non-stock photo exists across both allowed sources: the exterior storefront sign photo from the business's own homepage. It was optimized and integrated into the hero section. No other real estate/interior/team photos exist on either the business's own site or its Google Business Profile that meet the privacy and authenticity constraints — the rest of the page remains CSS/SVG as before.

---

## Logo pass — 2026-08-05

**Result: real logo found and used.** The earlier note above recorded the plain
`bthchiro-logo.png` wordmark as "found but not integrated". That decision is
reversed here: the practice's actual B2H mark is now on the page, and the drawn
placeholder SVG is gone.

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-back-to-health-chiropractic.png` | https://backtohealthchiroid.com/wp-content/uploads/2023/02/Back-to-Health-Chiro-1.jpg | Their site (header logo — the `<img id="logo">` in their nav, `alt="Back to Health Chiropractic"`) | Header brand lockup beside the "Back to Health / Chiropractic · Rexburg" wordmark (above the fold, not lazy-loaded), and footer brand lockup on a bone plate (`loading="lazy"`). Replaces the drawn circle-and-arc SVG in both places. | 2026-08-05 |

**Verification.** `backtohealthchiroid.com` is the practice's own domain,
already verified above against the fact sheet (60 S 2nd W, (208) 359-2264).
The logo itself reads "B2H Chiropractic" — B2H being their own contraction of
Back to Health — and their own markup labels this exact file
`alt="Back to Health Chiropractic"`. Name match confirmed.

**Processing.** Their file is a JPEG with a hard white background, which would
show as a white box on this page's bone header. The white was unpremultiplied
back to an alpha channel (`alpha = 255 − min(R,G,B)`, colour reconstructed), so
the artwork now composites cleanly on light ground with no halo. Resized to
579x640 and quantised to 128 colours; 33KB. Nothing was recoloured, cropped, or
stretched. Because that technique reconstructs the art *as it looks on white*,
the logo is only ever placed on white or near-white here — hence the bone plate
in the footer.

**Also checked and rejected:** `bthchiro-logo.png` (400x34) — a plain
single-line text wordmark, too low-resolution and too weak next to the real
mark; skipped in favour of the B2H lockup.

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Royal blue | `#0030A8` | The dominant B and H strokes |
| Mid blue | `#4C7FE8` | Gradient midtone |
| Pale blue | `#A8C0FC` | Gradient highlight at the top of each letter |
| Black | `#000000` | The spine illustration |

**Do their colours agree with this page?** **No — this is the sharpest clash of
the nine.** Their real brand is unambiguously royal blue and black. This page is
built on forest green `--forest #2c4a3b` and terracotta `--terracotta #c1704f`,
which shares no hue with their identity at all. The logo still *reads* fine
because it sits on light bone ground in the header and on a bone plate in the
footer, but a business owner who knows their own colours will notice. Flagged
for Levi, not acted on: repainting this page blue is a whole-design decision,
not a logo-pass decision.

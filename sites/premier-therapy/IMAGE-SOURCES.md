# Image sources — Premier Therapy Associates mockup

Date: 2026-08-05

**Result: 1 image added.**

Business verified before anything was used: the mockup lists (208) 356-4633,
and `premiertherapyidaho.com` serves that same number on its homepage.
`idahotherapy.com` redirects to it. Correct business, confirmed by phone match
on their own domain. (They are multi-location — Rexburg and Idaho Falls — but
this mockup is the Rexburg page and the photo below is the Rexburg clinic.)

## Images added: 1

| Local file | Source URL | Source type | Used on page | Date |
|---|---|---|---|---|
| `img/clinic-exterior.jpg` | https://premiertherapyidaho.com/wp-content/uploads/2024/11/premier-therapy-1-1024x770.jpg | Own site (homepage) | Location section — replaces the decorative SVG map-pin illustration | 2026-08-05 |

Verified by opening it: the practice's own single-storey brick-and-stucco
building, with "Premier Therapy Associates" lettering on the front gable and
the street number beneath it, shot from the parking lot under a cloudy sky.
No people in frame. The signage in the photo independently confirms the
business, the same way the Searle Hart and Rexburg Vision monument signs do.

Optimized with `sips` at JPEG quality 80. Native 1024×770, kept at that size —
it is already well under the 1600px cap, and the page must not display it any
larger or it will soften. 160KB, far under the 2MB budget.

## Sources checked and rejected

**Own site (premiertherapyidaho.com), a WordPress install:**

- `2024/12/physical-1024x683.jpg` — REJECTED. Downloaded and opened to be
  sure: a studio-lit stock photograph of an older woman with a clearly
  identifiable face stretching over a blue exercise ball while a second person
  supports her. It fails twice over — stock photography, and an identifiable
  face — and it is plainly not this clinic's own room.
- `2026/06/leg_brace-1024x683.jpg`, `2026/06/occupational-1024x683.jpg`,
  `2026/06/occupational_2-scaled.jpg`, `2026/06/occupational3-1024x617.jpg`,
  `2026/06/physical_therapy-scaled.jpg`, `2026/06/speech_therapy-scaled.jpg` —
  REJECTED as a set. Same 2026/06 upload batch, same generic
  service-illustration naming pattern (`physical_therapy`, `speech_therapy`,
  `occupational`), consistent with the confirmed-stock `physical` image above.
  Therapy-session photography is the single riskiest category on a healthcare
  page: it is either licensed stock, or it is a real patient, and both are
  banned. Not used.
- `2024/11/logo-1.jpg` — not used. Brand mark, not a photograph; the mockup
  carries its own sage/clay visual identity.

**Google Maps / Google Business Profile:** not checked. Their own site
supplied a clean, unambiguously-owned exterior of the actual clinic, which is
the strongest image available for a practice whose remaining photography is
stock therapy scenes. A Maps pass would only have risked customer-uploaded
photos of lower provenance.

## Process note

The agent originally assigned this site was killed by a stall watchdog
immediately after identifying the real domain, leaving this file as a
"Status: IN PROGRESS" stub with nothing checked. The crawl, vetting,
optimization, integration and this log were completed in the main session.

---

## Logo pass — 2026-08-05

**Result: real logo found and used.**

| Local file | Source URL | Source | Used on page | Date |
|---|---|---|---|---|
| `img/logo-premier-therapy-associates.png` | https://premiertherapyidaho.com/wp-content/uploads/2024/11/logo-1.jpg | Their site (homepage logo) | Header brand lockup, above the "Rexburg, Idaho" locale line (above the fold, not lazy-loaded), and footer on a bone plate (`loading="lazy"`). Replaces the drawn leaf SVG and the typed wordmark. | 2026-08-05 |

**Verification.** `premiertherapyidaho.com` was already verified above by exact
phone match `(208) 356-4633` on their own homepage. The logo reads "PREMIER
THERAPY ASSOCIATES" in engraved serif capitals with a running-figure mark.
Exact name match.

**Processing and the crop.** Their file is a JPEG of a business-card-style
block: the wordmark on top, then three lines of small print
("SPEECH-LANGUAGE PATHOLOGY, OCCUPATIONAL AND PHYSICAL THERAPY", "A SERVICE
PROVIDER FOR MOUNTAIN VIEW HOSPITAL", "www.idahotherapy.com"), all inside a thin
card border with a drop shadow. The local copy keeps the **wordmark block only**
— cropped at 58.5% height, above the small print, then inset 1.8% to drop the
card border and shadow. Nothing in "PREMIER THERAPY ASSOCIATES" is cut. The
small print was dropped for two reasons: at header size it is illegible, and one
of those lines advertises `idahotherapy.com`, a domain that now redirects to
their current site, which would look stale on a pitch page. If Levi wants the
full card, re-pull the source URL above.

White background was unpremultiplied to an alpha channel the same way as the
Back to Health file, so it composites cleanly on the cream header. Quantised to
128 colours; 13.5KB. Not recoloured, not stretched.

**The plate.** The logo is black engraved type drawn for white stock. It is bare
on the `--cream #f4f1ea` header, but the footer is `--sage-deep #3f5942`, where
black type would disappear — so the footer logo sits on a deliberate
`--bone #fbfaf6` plate (6px radius, 8px/12px padding).

**Brand colours sampled from the logo.**

| Swatch | Hex | Where it appears |
|---|---|---|
| Black | `#0C0C0C` | The entire wordmark and the running figure |
| Dark green | `#305848` | The two accent squares flanking the wordmark |

**Do their colours agree with this page?** **Yes, this is the best fit of the
nine.** Their only hue is the dark green `#305848`, and this page's
`--sage-deep #3f5942` is almost the same colour — near enough that the accent
squares in the logo read as part of the page's own system. The page's clay
accent `--clay #c17a5a` is an addition with no counterpart in their identity,
but it does not fight anything. No change recommended.

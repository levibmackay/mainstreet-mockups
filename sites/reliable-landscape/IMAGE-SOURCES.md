# Image sources — Reliable Landscape and Irrigation mockup

Date pulled: **2026-08-05**
Supersedes the 2026-08-04 pass (zero images), which was run before BRIEF.md
rule 4 was revised on 2026-08-05 to permit a business's own Facebook or
Instagram page as a third source.

**Result: 7 images added.** All 7 come from the business's own Facebook page.

## Business identity verification

The previous pass flagged a near-miss: a GoHighLevel funnel page whose address
and phone matched this business but which carried **"Earthscapes Contracting"**
branding. That page is still rejected and was not revisited.

The Facebook page used here is verified by **name first**, then by three
independent contact matches:

| Check | Facebook page (`facebook.com/reliablelandscaperigby`) | Verified record |
|---|---|---|
| Business name | "Reliable Landscape and Irrigation" | Same — `leads/home-services.md`, `verify/batch-b.md` |
| Phone | (208) 709-4893 | Same — `verify/batch-b.md` (CONFIRMED) |
| Email | reliablelandscapepro@gmail.com | Same — `leads/home-services.md` |
| Services listed | "sprinkler installations and repair, seamless sod installation, landscape design and maintenance, tree pruning, and water features" | Matches the CONFIRMED service list in `verify/batch-b.md` |

`verify/batch-b.md` independently names `facebook.com/reliablelandscaperigby`
as this business's Facebook page. The name matches exactly, so the
Earthscapes-style coincidental-contact-match failure mode does not apply here.

## Images added

All files live in `sites/reliable-landscape/img/`. Source column is `facebook`
for every row, per rule 4. All were posted by the page itself (each photo
permalink shows "Reliable Landscape and Irrigation" as the poster, dated
March 7 2026). None contain an identifiable face.

| Local filename | Source URL | Source | Where it appears | Date pulled |
|---|---|---|---|---|
| `creek-canal-2.jpg` | https://www.facebook.com/photo/?fbid=1455966269649999&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` — full-width feature image; also `gallery.html` | 2026-08-05 |
| `bench-tree-bed.jpg` | https://www.facebook.com/photo/?fbid=1455929259653700&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 1; also `gallery.html` | 2026-08-05 |
| `rock-garden-feature.jpg` | https://www.facebook.com/photo/?fbid=1455929192987040&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 2; also `gallery.html` | 2026-08-05 |
| `new-sod-lawn.jpg` | https://www.facebook.com/photo/?fbid=1455928992987060&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 3; also `gallery.html` | 2026-08-05 |
| `flagstone-boulder-bed.jpg` | https://www.facebook.com/photo/?fbid=1455928872987072&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 4; also `gallery.html` | 2026-08-05 |
| `creek-canal-1.jpg` | https://www.facebook.com/photo/?fbid=1455966122983347&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 5; also `gallery.html` | 2026-08-05 |
| `patio-pond-view.jpg` | https://www.facebook.com/photo/?fbid=1455928779653748&set=pb.100057099204433.-2207520000 | facebook | `index.html` `#work` grid tile 6; also `gallery.html` | 2026-08-05 |

Two of these carry the business's own captions on Facebook: fbid
`1455966269649999` is captioned "Natural Creek Canal #2" and fbid
`1455966122983347` is captioned "Natural Creek Canal #1". Both sit in the
page's "Water Features" album.

**Note:** a concurrently-running agent expanded this mockup into a multi-page
site (`about.html`, `services.html`, `gallery.html`, `contact.html`) during this
pass and reused all seven of these files on `gallery.html`. Same seven files,
same sources — no additional images were downloaded for those pages.

Processing: downloaded at full resolution (1764–2048px long edge), resized to
1600px long edge for the feature image and 1100px for the six grid tiles
(they never render wider than ~600 CSS px), saved as progressive JPEG q70.
**Total: 1.55 MB**, under the ~2 MB per-site budget. All referenced with
relative `img/` paths; the page still makes zero external requests.

## Rejected candidates

| Candidate | Reason for rejection |
|---|---|
| Page cover photo — fbid `571701908076444` (posted Sept 8 2022) | Twilight architectural photograph of a Craftsman home, professionally lit and HDR-processed, in a completely different register from every other photo on the page (which are plainly phone-camera job-site shots). This is the house style of licensed landscape-industry stock. It cannot be confirmed as their own work or their own photography, and rule 4's second hard constraint forbids republishing stock they merely licensed. **Ambiguous is a no.** |
| Page profile photo — fbid `571701904743111` | Their logo wordmark ("RELIABLE LANDSCAPE & IRRIGATION"), not a photograph. |
| fbid `1455929439653682` | Genuine job-site photo (rock-lined swale under construction), but a **worker in a blue shirt is present** in the mid-ground. His head is down and no face is resolvable, but the no-identifiable-faces rule is strict and six clean alternatives existed, so it was dropped rather than argued. |

## Channel reachability

Facebook page **was reachable** without logging in. `curl` is hard-blocked
(HTTP 400 on `www.`, `m.` and `mbasic.`), but a standalone headless Chromium
(Playwright, launched from the scratchpad — not the shared MCP tool) rendered
the public page and the individual `/photo/?fbid=` permalinks fine, including
full-resolution image assets. No login was attempted and no login wall was
circumvented; the album grid behind "See all photos" *is* login-walled and was
not pursued.

**Instagram: none found.** No Instagram account surfaced for this business.

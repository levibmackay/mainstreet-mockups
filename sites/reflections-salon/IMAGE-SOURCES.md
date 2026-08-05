# Image sources — Reflections Salon mockup

Date checked: 2026-08-04. Confirmed during 2026-08-05 polish pass.

Business facts pulled from the mockup page for verification: "Reflections
Salon," 32 E Main St, Rexburg, Idaho, phone `(208) 356-5856`.

## Source 1 — their own current website

No usable current website was found for Reflections Salon at 32 E Main St,
Rexburg. No photography to source from this channel.

## Source 2 — Google Maps / Google Business Profile

The listing's photos are staff and client portraits with identifiable faces.
Per the project privacy rule, photos that identify private individuals
(customers, staff who haven't consented to marketing use) are not eligible
for use in a cold-outreach mockup. No photos were pulled from this channel.

## Conclusion

**Zero photographs used on this page.** The page is built entirely with CSS
(gradients, grain texture) and hand-drawn inline SVG (mirror frame motif,
storefront map illustration, iconography). No `<img>` tag exists in
`index.html`, so there is nothing to log per-file. This is a normal outcome
per `BRIEF.md`, not a shortfall: a strong photo-free page beats a page with
photos that can't be ethically sourced.

---

# 2026-08-05 — Source 3 pass (Facebook / Instagram)

BRIEF.md rule 4 was revised on 2026-08-05 to permit a third source: the
business's own Facebook or Instagram page. This section records that pass.
The findings above stand — nothing was taken from their website or their
Google listing.

**Result: three images added.**

## Channels checked and identity verification

**Facebook — dead.** Their own site's footer links to
`http://www.facebook.com/ReflectionsHairNailsTanning`. That URL now returns
Facebook's "this content isn't available right now" page. The page has been
removed, renamed or unpublished. Nothing to source.

**Instagram — https://www.instagram.com/reflectionsrx/ — reachable.**
Fetched logged-out with `curl` and normal browser headers. No login was
used and no login wall was bypassed.

Identity confirmed before anything was taken from it:

- Display name `Reflections Salon`, handle `@reflectionsrx`
- Bio: "Highlighting & Hair Coloring Specialists / Eyelashes. Nails. Pedis.
  Hair Extensions / Call Us! **208-356-5856** / Text Us! 208-268-6595" —
  the phone is an exact match to the number verified in
  `mainstreet-sites-sales/verify/batch-b.md`
- Profile link: `http://www.reflectionsrx.com/` — their real site
- 1,885 followers

`instagram.com/reflectionsrex` (the spelling used in their email address)
does **not** resolve to a page and was not used.

## Note on what Instagram serves logged out

Every one of the 12 most recent grid posts is a Reel, so the still available
for each one is Instagram's cover frame for that video, capped at **640 px on
the long edge** without an account. Two versions of each frame are served: the
`cmp1_` variant has a play triangle composited into the pixels, and the plain
grid variant does not. The clean grid variants were used. The images below are
therefore 360x640 native and were kept at native size — upscaling to the 1600 px
long edge in the brief would only have added blur. All three sit well under the
per-site budget (123 KB total).

## Images added

| Local file | Source URL | Source type | Where on the page | Date pulled |
|---|---|---|---|---|
| `img/storefront-main-street.jpg` | `https://www.instagram.com/p/DbawdBwBIaX/` (posted 2026-07-30; CDN file `758427453_18619814848029524_4705175176027715942_n.jpg`) | **instagram** | "Find us" / location section — replaces the hand-drawn SVG storefront illustration that previously sat there | 2026-08-05 |
| `img/copper-balayage-back.jpg` | `https://www.instagram.com/p/DCRqdjJRzRL/` (posted 2024-11-11; CDN file `499577088_472692395907699_535656702501472510_n.jpg`) | **instagram** | New "From the chair" section, left figure | 2026-08-05 |
| `img/nail-art-floral.jpg` | `https://www.instagram.com/p/DbgUp3upoDa/` (posted 2026-08-01; CDN file `759797665_18620639968029524_5097664499087939550_n.jpg`) | **instagram** | New "From the chair" section, right figure | 2026-08-05 |

Why each qualifies:

- **storefront-main-street** — the salon's own building on Main Street, its
  script sign and neon OPEN sign clearly legible, planters on the sidewalk.
  The only person in frame is walking away from the camera into the door,
  fully back-turned. No identifiable face.
- **copper-balayage-back** — a colour client photographed from directly
  behind, showing the finished copper-blonde waves against the salon's
  product shelving. Back of head only. No identifiable face, nobody else in
  frame.
- **nail-art-floral** — a close-up of one hand with hand-painted daisy and
  rainbow-swirl nail art. Hands only. No face, no background people.

All three were posted to the salon's own grid by the salon. None are shares,
reposts, tagged photos or customer submissions. None carry stock watermarks,
overlaid marketing text or brand-supplied artwork.

Processing: downloaded, re-encoded at JPEG q82, referenced with relative
paths, `loading="lazy"` and explicit `width`/`height`. No external requests.

## Candidates rejected on this channel

| Instagram post | What it is | Verdict |
|---|---|---|
| `/p/DG__ddjOwkl/` — `483869443_...` | "JOIN OUR TEAM / Hey Stylists!" hiring card with a photo embedded in a text layout | **Rejected — promo graphic**, plus a person visible inside it. |
| `/p/Da532O_hO05/` — `748939043_...` | Two people seated outside the shop, a caption-style reel | **Rejected — identifiable faces.** |
| `/p/DbGVjt3utPQ/` — `753471481_...` | Close-up of a woman's face with stickers on it, joke reel ("Everytime you complain you get a sticker") | **Rejected — identifiable face**, and a meme-format post. |
| `/p/Dbd4t_YB3Bb/` — `760973959_...` | A man after a cut, facing camera, with "New Look! Your Turn!" text burned in | **Rejected — identifiable face** and overlaid promo text. |
| `/p/DbdyCw5OLwo/` — `762466275_...` | Close-up of a young girl's face after a service | **Rejected — identifiable face, and a minor.** Not close to acceptable. |
| `/p/DbldNrYJ2bt/` — `763098596_...` | A woman working at a nail station, face toward camera | **Rejected — identifiable face.** |
| `/p/Dbq9TLSJLzt/` — `764619229_...` | "$29.95 Pedis / Grab a friend" price card with heavy text overlay | **Rejected — promo graphic.** Also carries a price, which the brief forbids putting on a mockup. |
| `/p/DOtLemvDjNX/` — `550339490_...` | A wider Main Street shot including the salon's awning, blue sky, sidewalk | **Rejected, narrowly.** A pedestrian stands mid-frame roughly 70 px tall. Her face is only a few pixels across and is not recognisable, but "recognisable customer in the background" is a judgment call and rule 4 says the ambiguous case is a no. `storefront-main-street.jpg` shows the same building with an unambiguously back-turned subject, so nothing was lost by dropping this one. |
| `/p/Da5kBgtO2cD/` — `748194599_...` | Hand with checkerboard and daisy nail art holding an amika polish bottle | Not used. It qualifies on every rule — hands only, their own post — but two nail close-ups in one small section was one too many, and this one leads with a supplier's product bottle. Kept in reserve rather than rejected. |

## Conclusion

Instagram was by far the most productive of the three permitted sources for
this business, and the page now carries three real photographs of the actual
salon, its actual storefront and its actual work. The Facebook page their own
site still links to is gone.

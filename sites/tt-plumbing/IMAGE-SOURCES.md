# Image sources — T&T Plumbing mockup

Last pass: 2026-08-05 (Facebook added as a permitted source by BRIEF.md rule 4).
Earlier pass: 2026-08-04 (website + Google Maps only, zero images).

**Result: 2 images added, both from the business's own Facebook page.**

## Identity verification

The Facebook page used is `https://www.facebook.com/100063656887630/`
("T&T Plumbing, Inc."). Its own About tab, read live on 2026-08-05, gives:

- Name: **T&T Plumbing, Inc.**
- Address: **416 Main Street, Ashton, ID, United States, 83420**
- Mobile: **(208) 652-7373**
- Email: ttplumb@yahoo.com
- Category: Plumbing Service

Name, town, and phone all match `index.html` (`tel:+12086527373`) and match
`mainstreet-sites-sales/verify/batch-d.md`. Name match is the deciding factor,
not just the phone.

**Not to be confused with** `facebook.com/ttplumbingandheating`
("T & T Plumbing Heating Air Conditioning & Geothermal") or
`facebook.com/ttplumbing` — different companies with similar names. Neither was
used.

## Images used

| Local file | Source URL | Source | Where it appears | Date pulled |
|---|---|---|---|---|
| `img/septic-tank-install.jpg` | `https://www.facebook.com/photo.php?fbid=1619190771441192` | facebook | "On The Job" section, first tile | 2026-08-05 |
| `img/copper-vessel-sink-install.jpg` | `https://www.facebook.com/photo.php?fbid=1619190254774577` | facebook | "On The Job" section, second tile | 2026-08-05 |

Both are from the page's **own Photos tab** (`.../100063656887630/photos`,
labelled "T&T Plumbing, Inc.'s Photos" — not the Tagged photos tab), uploaded by
the page on **21 December 2016** as part of one album the page posted about its
own work.

- `septic-tank-install.jpg` — the page's own caption on this photo reads
  verbatim: *"A 1500 Gallon Concrete Tank we installed."* No people in frame.
- `copper-vessel-sink-install.jpg` — same album, no individual caption; the
  companion photo in the album is captioned *"Finished Product of a poured to
  size shower pan we installed."* Shows an installed copper vessel basin and
  wall-mount faucet. No people in frame.

Both downscaled with `sips -Z 1600` to 1200×1600. Combined ~0.76 MB, well under
the 2 MB per-site budget. Referenced with relative paths, `loading="lazy"`, and
explicit `width`/`height`.

## Rejected candidates (Facebook)

The page has 33 photos in its own Photos tab. Every one considered and rejected:

| Photo | Why rejected |
|---|---|
| `fbid=1619189504774652` — "Meet the T&T Plumbing crew" era group shot in a log cabin | **Identifiable faces.** Nine staff members, all recognisable. |
| `fbid=1599650256728577` — captioned "Meet the T&T Plumbing crew. Christmas dinner 2016" | Same reason — crew photo. |
| `fbid=373409028124324` — "Amy's Cut Above Grand Reopening" flyer | Promo graphic, and it advertises **a different business** (a cosmetologist the page welcomed as an admin assistant). Banned twice over. |
| `fbid=1619190964774506` — "Finished Product of a poured to size shower pan we installed." | Eligible on the rules (their own work, no faces) but rejected on quality: a dark, grainy, near-featureless grey slab. Adding it would make the page worse, not better. |
| `fbid=1619190064774596` — copper basin sitting on an antique sideboard | Eligible on the rules but rejected on quality: a badly blown-out window behind the subject, and it is a pre-install staging shot, not finished work. |
| `fbid=1352202400244977` (18 Jul 2025) — a shop-made fire pit cut from a water heater tank with "T&T PLUMBING" punched into it | Their own photo, no faces, but it is a hunk of scrap in weeds. Not homepage material. |
| `fbid=2587824441244482` (20 Nov 2018) — "PEDESTAL SINK AND LAV FAUCET GIVE AWAY!" | Contest promo post; product shot, not their work. |
| `fbid=2381695258524069`, `2294720453888217`, `1728729743820627`, `1728729457153989`, `1728729377153997`, `1728728977154037`, `1728725703821031`, `1728725417154393`, `1696261440400791`, `1696260590400876`, `1696260110400924`, `1696259993734269`, `1696259990400936`, `1659140917446177`, `1659140884112847`, `1659140847446184`, `1658573964169539`, `1658573927502876`, `1658573894169546`, `1619189504774652`, `1547013671992236`, `1536780409682229`, `1535651979795072`, `259146586217236`, `259146582883903` | Remaining album/profile/cover images. Not used — the two selected photos already carry the section, and adding low-resolution 2016–2017 phone shots of unknown subject matter would dilute it. None were downloaded. |

Instagram: no Instagram account for T&T Plumbing surfaced in search. Not
checked further.

## Source 1 — their own website (checked 2026-08-04, unchanged)

`https://tntplumbingofashton.wixsite.com/tntplumbing` — a free Wix subdomain.
Verified as theirs (homepage text contains "Call: TnT Plumbing at 208-534-8983
or 208-652-7373"). All nine unique images on the site were inspected and all
were rejected: third-party social-media brand logos (Facebook, Twitter, Google+
icons), generic wrench/faucet clipart, a 3D-rendered "plumber mascot", and a
studio stock flat-lay of a wrench on blueprints. No exterior, truck, signage, or
real work photos anywhere on the site.

## Source 2 — Google Maps / Google Business Profile (checked 2026-08-04, unchanged)

Listing "T & T Plumbing, Inc." at Ashton, ID 83420, pin on Main St. **Unclaimed
listing with zero uploaded photos** — the panel shows "Photos" followed
immediately by an "Add photos & videos" prompt, and a DOM query for
`googleusercontent.com` images returned zero matches. Nothing to pull.

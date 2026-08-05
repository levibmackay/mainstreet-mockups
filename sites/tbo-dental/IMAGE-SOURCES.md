# Image Sources — Toenjes, Brizzee & Orme Dentistry mockup

Last pass: 2026-08-05 (Facebook/Instagram added as a permitted source by
BRIEF.md rule 4). Earlier pass: 2026-08-04 (website + Google Maps).

**Images used: 0.** No `<img>` element exists in `index.html`. All visual work is
CSS and inline SVG, which BRIEF.md rule 4 permits. Nothing was added to
`sites/tbo-dental/img/` (the folder does not exist).

## Business identification

- Name: Drs. Toenjes, Brizzee and Orme — Cosmetic and Family Dentistry
- St. Anthony: 305 E 5th St N, (208) 624-3757 / `tel:+12086243757`
- Ashton: 204 Main Street, (208) 652-7868 / `tel:+12086527868`

## Source 3 — Facebook (new this pass)

`https://www.facebook.com/StAnthonyDentists/` — **reachable** without login via
a real browser (the Photos tab renders; the plain HTTP fetcher gets a browser-
compatibility error page instead, which is why earlier passes could not see it).
504 followers.

**Identity confirmed from their own cover image**, which carries both office
addresses and both phone numbers as printed text: "305 East 5th North / St.
Anthony, ID 83445 / 208-624-3757" and "204 Main Street / Ashton, ID 83420 /
208-652-7868", under the wordmark "Drs. Toenjes, Brizzee and Orme". Name and
both phone numbers match the mockup exactly.

The page's own Photos tab (`/StAnthonyDentists/photos`, labelled "Drs. Toenjes,
Brizzee and Orme's Photos" — not the Tagged photos tab) holds **97 photos**.
Nothing in it qualifies. The page splits cleanly into three groups, all banned:

**1. Canned dental-marketing tip graphics (the large majority).** A long run of
identically sized 792×612 posts from 2018–2020, each a stock-photo-plus-caption
card produced by a marketing service, e.g.:

| Photo | Caption |
|---|---|
| `fbid=2186256518127967` (6 Mar 2019) | "Sugar-free gum can increase your saliva flow, help prevent cavities, and combat bad breath." |
| `fbid=2287152841371667` (8 May 2019) | "Fortunately, our dentist is a trained expert who uses advanced technology to keep you smiling bright." |
| `fbid=2403629863057297` (12 Jul 2019) | "We can help you take great care of it!" |
| `fbid=2498257053594577` (4 Sep 2019) | "Dentures can restore your smile!" |
| `fbid=2956481321105479` (10 Apr 2020) | "Leave your nails alone and your teeth and jaw will thank you!" |

Promo graphics built on licensed stock — banned by rule 4 twice over ("no memes,
promo graphics, or reposted marketing images" and "no stock photography"). This
is the same syndicated content their Hibu website serves.

**2. Holiday greeting cards.** `fbid=4741552985931628` (25 Dec 2021, "Merry
Christmas from all of us at Drs. Toenjes, Brizzee and Orme"), `fbid=3652788638141407`
(24 Dec 2020, same). Promo graphics.

**3. Staff, patient, and community photos.** All contain identifiable faces:

| Photo | Caption |
|---|---|
| `fbid=4687720961314831` (13 Dec 2021) | "A few of us had the privilege of wrapping presents on the big day of Shop with a cop." |
| `fbid=3625457710874500` (13 Dec 2020) | "Happy Birthday to Dr. John! He is always full of jokes and smiles." |
| `fbid=2819160771504202` (4 Feb 2020) | "We had Mrs. Clark's Preschool come by for a field trip today. A couple of our own from Mrs. Clark's with their parents." — **children and parents**, categorically excluded. |
| `fbid=3620310574722547` (11 Dec 2020) | Christmas give-back post thanking three named local businesses. |

**4. Cover images.** `fbid=886090577006948` (7 Dec 2024) and `fbid=414715124144498`
(4 Oct 2022) are 1702×630 branded banners: a mountain-lake landscape with the
practice wordmark, logo, and contact block laid over it. Rejected — a promo
graphic, and the landscape underneath has no confirmable provenance and is not a
photo of the practice. It was downloaded once purely to verify the addresses
above, then discarded; it was not added to the site.

**No exterior, interior, operatory, equipment, or office photograph of either
location exists anywhere on the page.**

## Instagram

No Instagram account for this practice surfaced in search. Not found, so not
checked further.

## Source 1 — their own current website (checked 2026-08-04, unchanged)

`https://www.tbodental.com/` — verified as theirs by phone match. Crawled
homepage, `/about`, `/meet-our-team`, `/contact-st-anthony-id`,
`/contact-ashton-id`, `/dental-technology`, `/reviews`, `/cosmetic-dentistry`,
`/dental-implants`.

**Entirely a Hibu website-builder template, zero real photography.** Every
non-logo image was one of:

- Licensed stock with self-identifying filenames: `shutterstock_237584389-*.jpg`,
  `shutterstock_615255467-*.jpg`, `shutterstock_631959683.jpg`. Excluded by both
  the no-stock rule and the don't-republish-licensed-stock-off-their-site rule.
- Hibu placeholder avatars: `generic-profile-f-lg-1920w.png`,
  `generic-profile-m-lg-1920w.png` on `/meet-our-team` — literal template
  filler, not real staff photos.
- Logo variants (`logo_new-*.png`, `logo1..4-1920w.png`) — brand marks, not
  photography.
- `vid-splash-play-1920w.png` — a video-play button icon.
- `dental+tech+image1-1920w.jpg` — sits in the same promo block as the three
  explicitly-Shutterstock-named images and follows the same `dms3rep/multi/opt/`
  stock-CDN path pattern. Treated as stock and excluded.

## Source 2 — Google Maps / Google Business Profile (checked 2026-08-04, unchanged)

Listing "Drs. Toenjes, Brizzee and Orme - Cosmetic and Family Dentistry"
confirmed as the right business: `305 E 5th N, St Anthony, ID 83445`, phone
`(208) 624-3757`, website link `tbodental.com`. The single "photo" thumbnail
carries a 360°-panorama icon and opens Google's own Street View viewer, not a
gallery; a DOM query for `googleusercontent` images returned **0 matches** both
before and after interacting with the photo panel. Street View is Google's
captured imagery, not something the owner uploaded, so it is not eligible.

## Conclusion

All three permitted sources were reached and exhausted. This practice has no
real photography of itself anywhere online — its website, its Facebook page, and
its Google listing are all template content, syndicated marketing graphics, or
face-bearing community photos. A photo-free page is the correct outcome here,
not a shortfall.

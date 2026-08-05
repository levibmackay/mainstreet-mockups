# Image sources — Let Us Clip Ya LLC mockup

Date: 2026-08-04

**Result: zero images added.** `sites/let-us-clip-ya/img/` does not exist and
`index.html` references no images. The page remains CSS/inline-SVG only, per
BRIEF.md rule 4's fallback.

This one needs explaining, because it did not start out that way.

## What happened

At some earlier point in this project, six JPEGs were downloaded into
`sites/let-us-clip-ya/img/` (`firepit-hardscape.jpg`, `paver-patio.jpg`,
`retaining-wall.jpg`, `sod-installation.jpg`, `stone-patio.jpg`,
`water-feature.jpg`). They were never referenced in `index.html` and no
sources log was ever written, so nothing recorded where they came from.

Three separate agents were subsequently assigned to resolve them. All three
were killed by a stall watchdog mid-task. The last one got furthest: it
curated the set down to four renamed files (`work-boulder-retaining-wall.jpg`,
`work-fresh-sod.jpg`, `work-paver-patio.jpg`, `work-sunken-firepit.jpg`) and
added seven `<img>` references to `index.html` — but it died before the two
halves matched. The page was left referencing seven filenames while only four
existed on disk: **seven broken images on a page intended to be emailed cold
to the business owner.**

## Why everything was removed rather than repaired

The four surviving files could not be given a provenance. The scratchpad for
that agent was never created, and the only working files that survived for
this business are two Google Maps screenshots
(`scratchpad/agent-outdoor/let-us-clip-ya/maps-Let_Us_Clip_Ya_Rigby_ID.png`
and `…_Rexburg_ID.png`) — no saved source HTML, no raw downloads, no URL list.

BRIEF.md rule 4 requires a per-file record of the exact source URL, precisely
so an image can be pulled quickly if anyone questions where it came from. An
image whose source cannot be stated fails that requirement no matter how
plausible its filename looks. A descriptive filename is not evidence — an
earlier agent on a sibling site (`reliable-landscape`) found a page whose
address and phone both matched the business but whose logo read a completely
different company name, which is exactly the trap a filename would hide.

There was also a quality signal pointing the same way: the surviving files
were reported at roughly 460–500px on the long edge, i.e. thumbnail-derived,
which is well below what this page needs.

So `index.html` was reverted to its last committed (photo-free) state and the
`img/` folder was deleted. Removing them is the conservative call: the cost is
a page with no photos, which several sites in this project legitimately have.
The cost of the alternative is publishing someone else's photograph, or a
competitor's, under this business's name.

## Still to do

This business has NOT had a proper sourcing pass. Nobody has yet verified
whether Let Us Clip Ya LLC has its own website, and its Google Business
Profile was only screenshotted, never assessed in a surviving log. Landscape
installation is one of the better categories for genuine completed-work
photography, so this is worth revisiting — it is an open task, not a
determination that no photos exist.

# Fact & Contact-Detail Audit — Main Street Sites mockups

Audited 2026-08-05. Scope: 22 of the 23 mockups in `sites/`. **`sites/let-us-clip-ya/`
was not opened, read, or touched**, per instructions — another agent owns it (it has
a known Rigby/Rexburg city error already logged in `verify/batch-b.md` and is being
rebuilt separately).

Method: every claim below was cross-checked against the sales repo's own verification
records (`leads/*.md`, `verify/batch-a.md` through `batch-e.md`, `08-corrections.md`,
`09-verification-protocol.md`), not re-derived from the open web, since those records
already represent same-day, adversarial, browser-rendered checks done on 2026-08-03
through 2026-08-05. Where the mockup's current `index.html` differs from what those
records recommended, that is called out explicitly — some findings below describe
fixes that already landed, and a few describe recommended fixes that still haven't.
`node qa/check.js <slug>` (headless-render overflow + WCAG-AA contrast probe at
320/768/1440px) was run against all 22 in scope on 2026-08-05: **22/22 clean**, no
overflow, no contrast failures. That resolves earlier hand-review findings of a
320px nav-overflow bug on Uptown Event Center and various contrast complaints — the
current files pass.

**No screenshots or bulk image viewing were performed** (per the watchdog
constraint). Image findings below come from `<img>`/CSS reads and the sites'
`IMAGE-SOURCES.md` logs.

---

## Consolidated defect list, ranked by severity

### 1. Wrong phone number — none found live on the page
No mockup in scope currently displays a `tel:` link that dials a different
business than the one named on the page, and no visible number disagrees with its
own `tel:` href. **Uptown Event Center** did carry a wrong number in an earlier
outreach *script* (`(208) 523-3722`, a misattributed Riverbend directory listing
for a different phone) — but the mockup itself (`sites/uptown-event-center/index.html`)
was already corrected to the venue's real number, `(208) 569-0049`, matching both
the visible text and the `tel:+12085690049` href. Confirmed by `verify/batch-e.md`
and re-confirmed by direct read of the current file (line ~695). No action needed,
flagged here only because it's the single highest-stakes category and deserves an
explicit "checked and clean."

### 2. A site that cannot be contacted at all — Golds North Fork Roofing
`sites/golds-roofing/index.html` has **zero `tel:` links**, and its contact section
explicitly reads "Placeholder, real number to be added" / "Placeholder, real
address to be added," with every field in the estimate form carrying a `disabled`
attribute. A real, working, easily-found phone number exists — `(208) 206-0317`,
published on the business's own site (`verify/batch-c.md`) — and was not used.
This has been flagged since the first QA pass (`qa/mockups-batch-1.md`, 2026-08-03)
and is still true as of this audit. **This is not a fabrication risk, it is the
opposite defect: the page is currently unsendable, because there is no way for the
recipient to see it and call.** Fix before send: add the real phone as a `tel:`
link and drop the disabled attributes, or re-enable the form.

### 3. Self-contradicting phone copy — Centennial Plumbing
`sites/centennial-plumbing/index.html` now has a real, correct phone number
wired in as a `tel:+12083178702` link in the header/hero (`(208) 317-8702`,
matching the business's own site per `leads/home-services.md`) — that part is
fixed and correct. But the dedicated contact section still reads, verbatim:
*"These fields are placeholders. No verified phone number, email, or address
currently exists for this build; they'll be filled in with the real business
details before launch."* That sentence is now false — a verified phone number
is on the same page, one section up. Low risk (nothing is dialed wrong), but it's
a page that argues with itself and should have that lede line corrected before
send.

### 4. Unbacked/contradicted numeric claim still live — Back to Health Chiropractic
`sites/back-to-health/index.html` still states **"76 / Patient reviews"** (hero
stat, line 591) and **"76 reviews" from patients** (Trust section, line 661).
`verify/batch-a.md` (2026-08-03, same-day adversarial check) found this number
has no defensible source: BestProsInTown — the only aggregator that ever showed
a number in that range — reads **78**, not 76, on the day it was checked; Yelp
shows 5; Facebook shows 13; the business's own site displays individual Google
review cards via a Trustindex widget with no total anywhere. The verify doc's
explicit recommendation was *"pull '76 reviews' ... out of the mockup before
that link is sent to anyone again."* That recommendation was not applied. This
is the one clear violation of Rule 1 (no invented numeric claims) still present
in the batch — not because 76 was invented from nothing, but because it's stale
and unverifiable and a corrected/removed version was explicitly asked for and
never landed. **Recommend removing the review count from this page before it is
sent**, per the task's fix-authorization only extending to unambiguous
tel:/city corrections — this one needs a judgment call from whoever owns page
copy, so it is reported rather than edited here.

### 5. Unverified relationship claim — Legacy Electric
`sites/legacy-electric/index.html` still reads *"Have an electrical problem?
Call the **brothers** who'll actually fix it."* `verify/batch-a.md` flagged this
explicitly: the business's own site says "Ryan Leishman and Nick Leishman" and
"Family Owned & Operated," but never states they are brothers (could be
father/son, cousins, or unrelated co-owners with the same last name by
coincidence). This is a specific factual assertion about the two named
individuals' relationship that is not sourced anywhere the audit could find.
Low real-world risk (they likely are brothers, sharing a surname and branding
the business as family-run), but it is exactly the shape of claim Rule 1 bans
— names/relationships not on the fact sheet — and should be confirmed with a
call or changed to "family" before send.

### 6. Incomplete IMAGE-SOURCES.md — Rexburg Chiropractic Center
`sites/rexburg-chiropractic-center/IMAGE-SOURCES.md` is a stub that reads
**"Status: NOT STARTED — placeholder written first per stall-safety protocol
... This file will be filled in once work on it begins."** The page itself
carries zero `<img>` tags (CSS/SVG only, consistent with "no photos found or
used"), so there's no risk of an unlogged live image — but the log itself does
not satisfy "verify IMAGE-SOURCES.md completeness," since it documents a task
that was never actually finished, only deferred. Needs a real sourcing pass (or
an explicit "checked both sources, nothing usable" conclusion like ten of the
other zero-image sites already have) before this counts as done.

### 7. `<script>` after `.concept-note` — spec-technicality on 11 of 22 sites
The brief requires the concept-note to be "Last element in `<body>`," literally.
On 11 sites, a `<script>` block follows it instead:

`0500-mechanics`, `all-about-plumbing`, `coppers-plumbing`, `golds-roofing`,
`legacy-electric`, `reliable-landscape`, `rexburg-chiropractic-center`,
`rexburg-vision-center`, `rigby-lake-chiropractic`, `searle-hart-cpa`,
`spiderman-pest-control`.

The other 11 (`back-to-health`, `centennial-plumbing`, `forsberg-evans-law`,
`premier-therapy`, `reflections-salon`, `snake-river-overhead-door`,
`styles-and-smiles`, `tbo-dental`, `tt-plumbing`, `uptown-event-center`,
`urban-trend-salon`) already have it correctly ordered. Scripts render nothing,
so this has zero visual effect and the note is legible and present on every
site regardless — it's a one-line move-the-tag fix, not a fabrication or
contact-detail issue, listed here only because the brief states it as a
"non-negotiable."

### 8. Cosmetic-only: dead CSS rule, Golds Roofing
`p.concept-note{ ... color:#9a9f a5; color:#9a9fa5; ... }` — the first `color`
value has a stray space and is invalid CSS, silently discarded by the browser;
the very next line supplies a correct, valid value that wins. Renders correctly.
No action needed, noted only for completeness.

### 9. Unverifiable "years in business" style claims that survived, correctly hedged or sourced — no action
Per the task's explicit instruction, claims that survived the 2026-08-03 fact
pass are treated as cleared unless something looks specifically wrong. The
following numeric/tenure claims are present and are backed by a source
document in this repo; none looked wrong on inspection:

- 0500 Mechanics: "since 1990," BBB A+, 29 Yelp reviews — backed, `leads/retail-and-services.md` + `qa/mockups-batch-1.md`.
- All About Plumbing: "4.8/175 reviews (Birdeye)" — backed, same sources.
- Rigby Lake Chiropractic: "4.9/5, 37 reviews on Birdeye, August 2026" — **this is the corrected number** (was 36, verify/batch-a.md found the live count had moved to 37); the page now shows 37 and dates it, exactly as recommended. Good example of a fix landing.
- Reflections Salon: "~4★, 52 reviews on Yelp" — Yelp blocks automated verification (403 to all tooling used in this repo), so this is technically UNVERIFIABLE-by-tool rather than confirmed, per `verify/batch-b.md`. It is presented hedged ("~4★," "around 4 stars") and cites its source (Yelp) rather than asserting a bare number, which is the correct posture for a claim that can't be re-checked programmatically. Not flagged as a defect, flagged as "the responsible way to present an unverifiable number," per the task's own worked example.
- Premier Therapy: "5.0 from 22 reviews (Birdeye)" — backed exactly, `qa/mockups-batch-2.md`.
- Urban Trend Salon: "5.0 stars, 72 reviews on Birdeye" — backed exactly as a Birdeye aggregate; note `verify/batch-e.md` separately found Google itself shows ~29 reviews, a different platform's count. The mockup correctly attributes the number to Birdeye rather than presenting it as a Google count, so this is sourced correctly, not fabricated — flagged only as a fact worth knowing if anyone asks where the number came from.
- Urban Trend Salon: "Suite A" address — a stale-suite-letter concern was raised in `qa/mockups-batch-3.md` against a single Birdeye listing showing "Suite C." A later, broader check (`verify/batch-e.md`, checked against Square, Yelp, and WellnessLiving together) confirms **Suite A is correct** and consistent across three independent sources. Treat the Birdeye "Suite C" as the stale one. No fix needed.
- Styles & Smiles: "4.2 rating on Google" and "Phone: coming soon — email for now" — both survived; both were called out for a same-day recheck in earlier passes but not refuted. Per item below, this site should not be sent regardless of fact-check status.
- T&T Plumbing: "237 permitted projects," "top 6% of Idaho contractors" — both confirmed directly against BuildZoom's live page, `qa/mockups-batch-3.md` and `verify/batch-d.md`. The earlier-flagged "10 years in business" claim is **no longer on the page** — grep of the current file finds no "10 year"/"decade" text at all, so that unverified claim was already removed.
- Rexburg Vision Center: the earlier "4.5★ / 124 patient reviews" claim (`qa/mockups-batch-2.md`, flagged as the single most serious finding in that batch, since the real Birdeye figure was 4.7★/19 reviews under one listing and a second listing showed 124 reviews under an unrelated "Laser Eye Surgery" category) **has been removed from the page entirely.** Grep of the current file finds zero review/rating text anywhere. This is the clearest example in the batch of a flagged defect actually getting fixed.

### 10. City names — no additional errors found among the 22 in scope
Checked every page's `<title>`, hero eyebrow, and footer/location text for city
name. All 22 correctly name Rexburg, St. Anthony, Ashton, or Rigby matching
their real business address in the sales repo's lead lists:

| Site | City on page | City in lead records | Match |
|---|---|---|---|
| 0500-mechanics | Rexburg | Rexburg | yes |
| all-about-plumbing | Rexburg (service area incl. Idaho Falls, Rigby) | Rexburg | yes |
| back-to-health | Rexburg | Rexburg | yes |
| centennial-plumbing | Rexburg | Rexburg | yes |
| coppers-plumbing | St Anthony | St Anthony | yes |
| forsberg-evans-law | Rexburg | Rexburg | yes |
| golds-roofing | St. Anthony | St. Anthony | yes |
| legacy-electric | Rexburg | Rexburg | yes |
| premier-therapy | Rexburg | Rexburg | yes |
| reflections-salon | Rexburg | Rexburg | yes |
| reliable-landscape | Rigby | Rigby | yes |
| rexburg-chiropractic-center | Rexburg | Rexburg | yes |
| rexburg-vision-center | Rexburg | Rexburg | yes |
| rigby-lake-chiropractic | Rigby | Rigby | yes |
| searle-hart-cpa | Rexburg | Rexburg | yes |
| snake-river-overhead-door | Rexburg | Rexburg (no address shown, correctly, since directories disagree — see `verify/batch-c.md`) | yes |
| spiderman-pest-control | Rigby | Rigby | yes |
| styles-and-smiles | Rexburg | Rexburg | yes |
| tbo-dental | Saint Anthony / Ashton | Saint Anthony / Ashton | yes |
| tt-plumbing | Ashton | Ashton | yes |
| uptown-event-center | Rexburg | Rexburg | yes |
| urban-trend-salon | Rexburg | Rexburg | yes |

`let-us-clip-ya` — the one known city error (titled for Rigby, business is
actually in Rexburg at 252 E 4th N) — was **not** touched, per instructions.

### 11. Images — clean
No filename matching stock-marketplace patterns (`Depositphotos_*`,
`shutterstock*`, `istock*`, `getty*`, `vecteezy*`) exists anywhere under any
site's `img/` directory. Every site has an `IMAGE-SOURCES.md`. For the 9 sites
that actually ship photographs (0500-mechanics, all-about-plumbing,
back-to-health, coppers-plumbing, golds-roofing, premier-therapy,
rexburg-vision-center, searle-hart-cpa, uptown-event-center), every `<img
src="img/...">` in `index.html` has a matching row in that site's
`IMAGE-SOURCES.md` giving source URL, source type (own site vs. Google Maps),
placement, and date — spot-checked all 9 directly. The logs consistently show
real rejection reasoning (identifiable faces, stock/AI filenames, low
resolution) rather than a rubber stamp. The 12 zero-image sites mostly have a
substantive "both sources checked, nothing usable, here's why" log; the
exception is `rexburg-chiropractic-center`, covered in item 6 above.
`styles-and-smiles` was deliberately never crawled (see item 12) and its log
says so honestly rather than fabricating a "nothing found" story.

### 12. Styles & Smiles — must never be sent, and isn't clearly marked as such in the repo
Confirmed: Jana Bake replied "Please don't contact me again" on 2026-07-30
(`08-corrections.md`), and `09-verification-protocol.md`'s permanent do-not-contact
table lists her. `sites/styles-and-smiles/IMAGE-SOURCES.md` correctly documents
that the image-sourcing pass was skipped on purpose for this reason — good
practice, and evidence the do-not-contact status is known and respected at the
working level. But **nothing inside `sites/styles-and-smiles/index.html` itself,
or a repo-level index/portfolio list (none was found in this pass), flags the
site as permanently withheld.** If anyone ever builds a portfolio page or a
"see our work" list from the `sites/` directory mechanically, this one would get
included by default. Per `09-verification-protocol.md`'s own instruction —
"Shelve the artifacts too... must never appear in the portfolio, a case study,
or any future pitch" — recommend adding a visible marker (e.g. a top-of-file
HTML comment, or an entry in a repo-level "excluded from portfolio" list) so
this can't be linked by accident. This is a process/repo-hygiene finding, not
a fact-accuracy one — flagged per the task's explicit instruction to do so.

---

## Safe to send / do not send, per site

| Site | Verdict | Why |
|---|---|---|
| 0500-mechanics | **Safe to send** | Phone/address verified, images logged, noindex + concept-note present (script follows note — item 7, cosmetic). |
| all-about-plumbing | **Safe to send** | Same. |
| back-to-health | **Fix first** | "76 reviews" claim (item 4) should be resolved before send — not a wrong-business-detail risk, but an unverifiable number sitting on the page. |
| centennial-plumbing | **Fix first** | Real phone now present and correct, but contact-section copy still claims no verified phone exists (item 3) — a quick copy fix. |
| coppers-plumbing | **Safe to send** | Phone/address verified, image logged. Script-after-note only. |
| forsberg-evans-law | **Safe to send** | Phone/address verified, structurally clean. |
| golds-roofing | **Do not send as-is** | No working `tel:` link anywhere and a disabled contact form (item 2) — currently uncontactable. |
| legacy-electric | **Fix first** | "Brothers" claim (item 5) is unsourced; confirm or soften before send. |
| premier-therapy | **Safe to send** | Phone/address/rating all verified, structurally clean (only site in the batch with a fully compliant last-element concept-note in this sub-check). |
| reflections-salon | **Safe to send** | Phone/address verified; review count hedged and sourced appropriately given Yelp is unverifiable by tooling. |
| reliable-landscape | **Safe to send** | Phone verified; "16+ years" matches the mockup's own correct framing (the overstated "sixteen years in business" was only ever a problem in an email draft, not on this page). |
| rexburg-chiropractic-center | **Safe to send, log incomplete** | Page content fine; fix the stale "NOT STARTED" IMAGE-SOURCES.md (item 6) as housekeeping. |
| rexburg-vision-center | **Safe to send** | The serious review-count fabrication risk flagged in the 2026-08-03 QA pass has been removed from the page entirely. |
| rigby-lake-chiropractic | **Safe to send** | Review count corrected to the current 37 and dated; veteran-owned status and address/phone verified. |
| searle-hart-cpa | **Safe to send** | Phone/address/founding year verified, images logged. |
| snake-river-overhead-door | **Safe to send** | Phone verified; page correctly omits an address given directories disagree on one. |
| spiderman-pest-control | **Safe to send** | Phone verified, no fabricated claims. |
| styles-and-smiles | **Do not send — ever** | Permanent do-not-contact (item 12). Technically clean otherwise; that is irrelevant to the verdict. |
| tbo-dental | **Fix first, then send with care** | Both office phone numbers verified. Ashton number renders as plain text (not a `tel:` link) on the real business's own site per `verify/batch-c.md`, but on *this mockup* both numbers are proper `tel:` links (confirmed by grep) — no fix needed there. No open issue found on this page; downgraded from earlier caution once corroborated. |
| tt-plumbing | **Safe to send** | 237-permit and top-6% claims confirmed against BuildZoom directly; the earlier unverified "10 years" claim has been removed from the page. |
| uptown-event-center | **Safe to send** | Phone corrected to the real number (569-0049) and matches on page and in the `tel:` href; 320px nav overflow bug from the earlier hand-audit no longer reproduces under the rendered `qa/check.js` pass. |
| urban-trend-salon | **Safe to send** | Phone/address verified across three sources; "Suite A" confirmed correct, not stale. |

`let-us-clip-ya`: not audited (excluded per instructions, owned by a concurrent
task). Do not send until that work is confirmed complete and the known
Rigby/Rexburg city error is resolved.

---

## Fixes made during this audit

**None.** Every finding above either required a judgment call (copy edits,
confirming a family relationship, deciding whether to pull a review count) or
was already fixed by prior work. Per the task's constraint — only unambiguous,
mechanical corrections were authorized, such as a `tel:` digit mismatch or a
wrong city name — and no such mismatch was found among the 22 sites in scope.
Nothing was edited.

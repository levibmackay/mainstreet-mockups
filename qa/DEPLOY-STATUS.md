# Deploy & Link Liveness Status

Generated 2026-08-05. Method: curled actual public URLs and inspected returned bytes
(not just CI status), per the "green CI is not evidence of a live site" lesson from the
mainstreet-sites freeze and the storage-bros-idaho-falls Pages-never-enabled incident.

## Bottom line

**Everything currently pointed at from cold emails is live and correct.** No dead links,
no stale deployments, no broken images found. One real bug was found and fixed locally
(not yet committed/pushed): `safe-t-stor-redesign` (actual live name: `safe-t-stor`, now
private) had no `robots` meta tag, so it could rank in search against the real business
it's a redesign of. See "Fix applied" below — it needs to be committed and pushed by the
main session.

---

## 1. mainstreet-mockups — all 23 mockup slugs (https://mockups.levimackay.com/sites/<slug>/)

Checked: HTTP status, HTTPS, `noindex` present in response body, `<title>` contains the
correct business name (proves it's not serving a wrong/cached page).

| slug | HTTP | noindex | title matches business | pass/fail |
|---|---|---|---|---|
| 0500-mechanics | 200 | present | 0500 Mechanics | PASS |
| all-about-plumbing | 200 | present | All About Plumbing Repair | PASS |
| back-to-health | 200 | present | Back to Health Chiropractic | PASS |
| centennial-plumbing | 200 | present | Centennial Plumbing LLC | PASS |
| coppers-plumbing | 200 | present | Coppers Plumbing | PASS |
| forsberg-evans-law | 200 | present | Forsberg & Evans Law Offices | PASS |
| golds-roofing | 200 | present | Golds North Fork Roofing | PASS |
| legacy-electric | 200 | present | Legacy Electric | PASS |
| let-us-clip-ya | 200 | present | Let Us Clip Ya LLC | PASS |
| premier-therapy | 200 | present | Premier Therapy Associates | PASS |
| reflections-salon | 200 | present | Reflections Salon | PASS |
| reliable-landscape | 200 | present | Reliable Landscape and Irrigation | PASS |
| rexburg-chiropractic-center | 200 | present | Rexburg Chiropractic Center | PASS |
| rexburg-vision-center | 200 | present | Rexburg Vision Center | PASS |
| rigby-lake-chiropractic | 200 | present | Rigby Lake Chiropractic | PASS |
| searle-hart-cpa | 200 | present | Searle Hart & Associates | PASS |
| snake-river-overhead-door | 200 | present | Snake River Overhead Door Service | PASS |
| spiderman-pest-control | 200 | present | Spiderman Pest Control | PASS |
| styles-and-smiles | 200 | present | Styles & Smiles Family Salon | PASS |
| tbo-dental | 200 | present | Toenjes, Brizzee & Orme Dentistry | PASS |
| tt-plumbing | 200 | present | T&T Plumbing | PASS |
| uptown-event-center | 200 | present | Uptown Event Center | PASS |
| urban-trend-salon | 200 | present | Urban Trend Salon | PASS |

**23/23 PASS.**

## 2. Live bytes vs local HEAD (staleness check)

`git status --short` in mainstreet-mockups showed a clean working tree (only this qa/
report is untracked). Spot-checked full-file SHA-256 of local `sites/<slug>/index.html`
vs the live response for `0500-mechanics`, `tbo-dental`, `urban-trend-salon` — all three
**byte-for-byte identical** between local HEAD and the live site. No staleness.

## 3. Image liveness

23 HTML files (one per site, no subpages) reference 24 relative image paths
(`src=`/`href=` to `.png/.jpg/.jpeg/.svg/.webp/.gif/.ico`) plus a check for CSS
`url(...)` background-image references (none found). Every one of the 24 relative image
URLs resolved to **HTTP 200** when requested against `https://mockups.levimackay.com/...`.
Zero broken images across all 23 mockups.

## 4. GitHub Pages configuration per repo

| repo | visibility | Pages enabled | build_type | last deploy-pages step | public URL |
|---|---|---|---|---|---|
| mainstreet-mockups | public | yes, status `built` | `legacy` (branch-based, no missing-workflow risk) | n/a (legacy) — workflow run `pages-build-deployment` success | 200, HTTPS cert approved, enforced |
| mainstreet-sites | public | yes | `workflow` | success (`Run actions/deploy-pages@v4`) on latest push | 200 |
| rori-lasting-jewelry | public | yes | `workflow` | success (`Deploy to GitHub Pages`) | 200 |
| red-spud-storage-redesign | public | yes | `workflow` | success (`Run actions/deploy-pages@v4`) | 200 |
| storage-bros-idaho-falls | public | yes | `workflow` | success (`Deploy to GitHub Pages`) — this is the repo that was previously dead; **confirmed fixed and currently live** | 200 |
| safe-t-stor-redesign | **repo renamed** | see below | | | |

Note on `safe-t-stor-redesign`: this repo no longer exists under that name. It was
renamed to `safe-t-stor` and is now **private**. Its Pages site is enabled
(`build_type: workflow`) and the public URL `https://levimackay.github.io/safe-t-stor/`
returns **200**. Local clone lives at `/Users/levimackay/Developer/safe-t-stor-redesign`
(directory name still has the old name; the git remote inside it points at
`github.com/levimackay/safe-t-stor.git`).

For every workflow-based repo I did not just check that the job was green — I pulled the
job's step list via `gh run view --json jobs` and confirmed the actual `Deploy to GitHub
Pages` / `deploy-pages@v4` step had `conclusion: success` on the most recent run, then
independently curled the public URL to confirm 200. Both signals agree for all 5 repos.
No repeat of the storage-bros-idaho-falls failure mode (Pages never enabled) or the
missing-publish-step failure mode.

## 5. mainstreet-sites asset-hash verification

This repo has a documented history of the live site freezing on a stale build while
pushes appeared to succeed, so I did a real hash comparison instead of trusting CI green.

- Local repo's `origin/main` ref was itself one commit stale (local hadn't fetched since
  the last README-timestamp-bot commit `85ee950`). Did a fresh `git clone` from
  `https://github.com/levimackay/mainstreet-sites.git` into scratch space (no mutation of
  the working repo) to get true HEAD.
- First build attempt (no env var) produced `index-spxE-GcP.js` / `index-D6ACXniY.css`,
  which did **not** match what the live site serves (`index-rJokuOl6.js` /
  `index-DBorMPvF.css`) — looked like a mismatch at first.
- Root cause: `vite.config.js` sets `base: process.env.GITHUB_PAGES ? '/mainstreet-sites/' : '/'`,
  and the `Deploy to GitHub Pages` workflow builds with `GITHUB_PAGES=1`. Rebuilding
  locally with `GITHUB_PAGES=1 npm run build` produced **exact hash matches**:
  `index-rJokuOl6.js` and `index-DBorMPvF.css`, identical to what
  `https://levimackay.github.io/mainstreet-sites/` actually serves.
- Confirmed both asset URLs return 200 and the JS bundle contains the expected copy
  (`$199/month. No contracts.`).

**Conclusion: mainstreet-sites is live and current. Not stale this time.** The apparent
mismatch on first build was a build-config gotcha (base path env var), not a deployment
bug — worth remembering next time this repo is checked, so it isn't misdiagnosed as the
old freeze bug.

## 6. Fix applied: safe-t-stor missing `noindex`

**File:** `/Users/levimackay/Developer/safe-t-stor-redesign/index.html` (repo:
`github.com/levimackay/safe-t-stor`, private)

Added to `<head>`, next to the existing `theme-color` meta tag:

```html
<meta name="robots" content="noindex, nofollow" />
```

This matches the convention already used on the newer mainstreet-mockups sites. Verified
the live page (`https://levimackay.github.io/safe-t-stor/`) currently has no robots tag
at all, and the fix is a single-file, single-line change with no other head variant to
patch (one `index.html`, no per-page templates).

**This change is local only — not committed, not pushed.** Per constraints, git
mutations are owned by the main session. To ship it: commit `index.html` in
`/Users/levimackay/Developer/safe-t-stor-redesign`, push to `main`, and the existing
`Deploy to GitHub Pages` workflow (already confirmed working, see section 4) will
publish it automatically — no other action needed. Rollback path if anything looks wrong:
revert that single commit, push; the previous deploy-pages run redeploys the prior state
on the next push, or `gh workflow run` the deploy workflow again at the prior commit.

## 7. mockups.levimackay.com domain / robots.txt

- CNAME resolves: `mockups.levimackay.com` → `levimackay.github.io` (4x A records for
  GitHub Pages), confirmed via `dig`.
- Pages API reports `https_certificate.state: approved`, `https_enforced: true`.
- `https://mockups.levimackay.com/robots.txt` returns **200** with:
  ```
  User-agent: *
  Disallow: /
  ```
  This blanket-disallows all crawlers site-wide, matching the local `robots.txt` in the
  repo root exactly (byte match).

---

## Prioritized human follow-ups

1. **Ship the safe-t-stor fix.** Local edit is done and verified; needs a commit + push
   from the main session so it actually deploys. Until pushed, the real business can
   still theoretically be outranked in search by this redesign page.
2. **Nothing else is broken.** All 23 mockups, both marketing sites, and all 5 Pages
   deployments are live, correctly configured, and serving current content. No action
   needed beyond #1.
3. Minor hygiene note, not urgent: the local `mainstreet-sites` clone's `origin/main` was
   one commit behind GitHub (a bot-committed README timestamp bump). Doesn't affect the
   live site since Pages deploys straight from GitHub, but worth a `git pull` next time
   that repo is worked on locally to avoid confusion.

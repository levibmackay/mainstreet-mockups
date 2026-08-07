# Production brief — take a spec mockup to a deliverable site

Repo: `/Users/levimackay/Developer/mainstreet-mockups`

`BRIEF.md` in the repo root is still the contract and still outranks this
document. `docs/POLISH-BRIEF.md` still governs craft. This file only adds
what changes when a single spec homepage becomes a multi-page site that
could actually be handed to a paying business.

Reference implementation: `sites/all-about-plumbing/`. Build every other
site against that pattern rather than inventing a new structure.

## The thing that must not get lost

These are still **unsolicited spec builds for businesses that have not hired
us**. Making them bigger does not make them ours to publish.

So until a business actually pays:

- **`<meta name="robots" content="noindex, nofollow">` stays on every page.**
  Not just the homepage. Every new page too.
- **The `.concept-note` disclosure stays as the last element in `<body>` on
  every page.** Same wording, same visibility rules.
- Nothing about the site may imply the business commissioned, approved, or
  is affiliated with it.

Both of those come off only at handoff, and only via the checklist at the
bottom of this file. A more complete site is a *more* convincing thing to
mistake for the real one, so the disclosure matters more here, not less.

## Page structure

Four pages per site. Add a fifth only when there is real content for it.

| File | Purpose |
|---|---|
| `index.html` | Homepage. Already built and polished. Do not redesign it. |
| `services.html` | Each service given real room, from the verified service list. |
| `about.html` | History, service area, how they work. Verified facts only. |
| `contact.html` | Phone, email, address, hours, service area, form. |
| `gallery.html` | **Only if the site has 4+ real sourced photos.** Otherwise omit; do not pad. |

If a business has no verified content for a page, **do not create that page**
and do not invent content to justify it. Three real pages beats four with one
padded. Rule 1 does not relax because there is more space to fill.

Navigation must include every page that exists and no page that does not. A
nav link to a 404 is worse than a smaller site.

## Assets and the no-build-step rule

The repo has no build step on purpose and GitHub Pages serves these files
directly. That does not change.

- Per site: `sites/<slug>/assets/site.css` and `sites/<slug>/assets/site.js`,
  linked with **relative** paths (`assets/site.css`). A relative local file
  is not an external request and is allowed.
- **Still zero external requests.** No CDN, no Google Fonts, no remote
  images, no fetch. System font stacks only.
- **Leave `index.html` self-contained.** Settled on the reference build: the
  homepage keeps its existing inline `<style>`/`<script>` untouched, and only
  the NEW pages share `assets/site.css`. Extracting a polished, already-
  passing homepage buys nothing and risks a page that took real work to get
  clean. Port the design tokens into the shared stylesheet instead.
- The one change to make to `index.html` is its nav, which must link the new
  pages.
- **Do not duplicate a `prefers-reduced-motion` block inline on every page**
  just to satisfy `check.sh`. That was a real workaround on the first build.
  `check.sh` now resolves locally-linked stylesheets and searches them too,
  so the rule can live once in `assets/site.css`. Verified by stripping a
  page's inline `<style>` entirely and confirming it still passes.
- Images stay in `sites/<slug>/img/` with relative paths, real alt text,
  `loading="lazy"`, and explicit `width`/`height`.

## The contact form

The form is the most dangerous element on a deliverable site, because a form
that silently does nothing loses the business real customers.

While the site is still spec:

- The form must be **visibly non-functional**. Inputs `disabled`, and a plain
  line saying it is a design concept that does not submit. Never leave a form
  that looks live and quietly drops submissions.
- Do not wire any access key, endpoint, or email address into a spec page.

At handoff the form goes live via Web3Forms (the same service the storefront
uses), with **the business's own access key**, sending to **their** inbox,
never to Levi's. That step is on the handoff checklist and requires Levi to
create the key.

## Verification

`./check.sh` and `node qa/check.js` now cover **every** `.html` page under
`sites/`, not just `index.html`. Both must pass for every page you add.

Reason this matters: `check.sh` previously globbed `sites/*/index.html` only.
Any sibling page added before that was fixed would have shipped with no
noindex check, no disclosure check, no external-request check, and no
contrast or 320px check. Do not add a page without running both scripts.

`check.sh` also runs `qa/check-responsive.js`, a static-analysis pass over
every page's markup and its resolved stylesheet (same local-stylesheet
resolution `check.sh` already does, so a shared `assets/site.css` counts).
No browser, no rendering — `node qa/check.js` still owns that. It checks:

- Viewport meta is present, has `width=device-width`, and doesn't disable
  zoom (`user-scalable=no` or `maximum-scale` under 5). **Fails the build.**
- A nav (`nav`, `.nav-links`, etc., not just a CTA label inside one) that
  goes `display:none` at a `max-width` breakpoint needs a detected fallback
  — a toggle/hamburger/mobile-menu selector that becomes visible, an
  off-canvas `transform` panel, or a `aria-label="menu"` control. With none
  of those, every page below that breakpoint is unreachable from a phone.
  **Fails the build.** This is checking for a real bug found in the wild:
  a site's entire primary nav going `display:none` under a breakpoint with
  nothing replacing it.
- At least one width-based media query exists (`max-width`/`min-width`, or
  the modern `width>=`/`width<=` range syntax the Vite-built sites emit).
  **Fails the build** if none exist.
- Form `input`/`select`/`textarea` aren't styled under 16px font-size —
  that's what makes iOS Safari zoom in on focus. **Fails the build.**
- An `<img>` with a hardcoded `width` over 320 needs a `max-width` rule (or
  `srcset`) somewhere on the page, or it can't shrink on a phone. **Fails.**
- A `position:fixed` element with a fixed pixel width over 320px forces
  horizontal scroll on narrow phones. **Fails the build.**
- Fixed pixel widths over 320px on layout containers outside a media query,
  `white-space:nowrap` on likely body copy, and `<table>` with no detected
  scroll wrapper are printed as **warnings** — real but not reliably
  distinguishable from decorative/short-label uses by static analysis, so
  they don't fail the build. Same for tap targets: an explicit
  `height`/`min-height` under 44px on a block-level link or button is a
  warning, not a failure, since the real box model needs a browser to
  confirm.

Everything in `POLISH-BRIEF.md` still applies to every new page: 320px with
no horizontal scroll, WCAG AA body contrast against the actual background,
one `<h1>` per page, no skipped heading levels, visible `:focus-visible`,
and a `prefers-reduced-motion: reduce` block that genuinely neutralises the
transforms and transitions you wrote.

## Handoff checklist

Run this only when a business has actually paid. Never before.

1. Remove `<meta name="robots" content="noindex, nofollow">` from every page.
2. Remove the `.concept-note` disclosure from every page.
3. Create a Web3Forms access key for the business, wire it into the contact
   form, enable the inputs, and remove the non-functional notice.
4. Send a real test submission and confirm it lands in the business's inbox.
   Do not skip this. An untested form is an assumption, not a feature.
5. Replace any remaining sourced photo with photography the business supplies
   if they have better. Photos pulled from their old site, Google listing, or
   social page were sourced for a pitch, not licensed for their new site.
6. Re-check every fact on every page with the owner directly. Facts good
   enough for a spec page are not good enough once the page is theirs.
7. Point the domain, confirm HTTPS, and confirm the live bytes changed. A
   green build does not mean it deployed. That has cost this project twice.
8. Delete `DO-NOT-CONTACT.md` handling concerns only if they never applied;
   a business on that list never reaches handoff at all.

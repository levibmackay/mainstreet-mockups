# Polish pass — take each mockup to a full, premium build

Repo: `/Users/levimackay/Developer/mainstreet-mockups`
Each mockup is ONE self-contained file: `sites/<slug>/index.html`.

Read `BRIEF.md` in the repo root first. It is the contract. Everything below
sits on top of it and never overrides it.

The goal: these are spec homepages sent cold to real business owners to win
paid redesign work. The bar is "this looks like something I would pay real
money for." Not "acceptable." Not "clean." Genuinely premium.

## The one rule that outranks everything

**Never fabricate anything about the business.** No invented testimonials,
review quotes, star ratings, customer names, staff names, certifications,
awards, years-in-business, prices, guarantees, service areas, or hours. If a
fact is not already on the page or in `IMAGE-SOURCES.md`, it does not go on
the page.

This constrains what "more" can mean. You are NOT adding content by inventing
facts. You are making the real, already-verified content land harder through
design, structure, hierarchy, motion, and craft. If a section feels thin, the
fix is a better treatment of what is true — never a fabricated detail to fill
it. Removing a weak invented-feeling line is a win, not a loss.

### Do not delete verified facts as "fabrications"

Several pages carry star ratings and review counts — e.g. "4.8 out of 5
across 175 reviews (Birdeye)", "5.0 from 22 reviews", "4.9 / 5, 37 reviews on
Birdeye, August 2026", "A Healthgrades likelihood-to-recommend score of 4.6".

**Leave these alone.** They look like exactly the thing rule 1 bans, but they
are not. The repo owner ran a fact-check pass against live sources on
2026-08-03 (commit `597a544`) that removed the claims which had no referent
and *corrected* the ones that did — adjusting one site's review count from 36
to 37 and date-stamping it. Anything still present survived that audit.

So the rule cuts both ways: do not ADD a rating, review count, testimonial,
award, or founding year — and do not REMOVE one either. Deleting a verified
fact is its own kind of damage, and you are not in a position to re-verify it
from inside this task. If a specific claim looks wrong to you, say so in your
report and leave the markup as it is.

Also untouchable:
- The `<meta name="robots" content="noindex, nofollow">` in `<head>`.
- The `.concept-note` disclosure paragraph as the last element in `<body>`.
- Any `<img>` already on the page, and its `src`. Real photos were sourced
  under strict rules and logged in `IMAGE-SOURCES.md`. You may restyle their
  container, crop, or placement. You may NOT swap, add, or remove images, and
  you may NOT add any new image from any source. If you change where a photo
  appears on the page, update that site's `IMAGE-SOURCES.md` "Used on page"
  column to stay accurate.

## Hard technical constraints (from BRIEF.md)

- ONE self-contained file. Inline `<style>` and `<script>`. **No external
  requests at all** — no CDN, no Google Fonts, no remote images, no fetch.
  GitHub Pages serves the file directly.
- **System font stacks only.** Personality comes from weight, size, spacing,
  case, and rhythm — not a font download.
- **Fully responsive 320px → ultrawide.** No horizontal scroll at 320px. Tap
  targets ≥44px. Readable line lengths.
- **`prefers-reduced-motion: reduce` must disable transforms and
  transitions.** Required, not optional.
- Accessible: semantic landmarks, exactly one `<h1>`, real heading hierarchy,
  `role="img"` + `<title>` on meaningful SVG, visible focus states, body text
  at WCAG AA contrast against its ACTUAL background.
- Real phone number as a tappable `tel:` link.

## What "premium" means here

Push hard on craft:

- **Typographic authority.** Deliberate scale, tight display leading, real
  hierarchy. Optical alignment. No default-looking type.
- **Spatial confidence.** Generous, intentional whitespace and a consistent
  spacing scale. Sections should breathe differently from each other so the
  page has rhythm rather than a stack of equal blocks.
- **A distinctive visual system per business.** Each site should look like it
  was designed for that specific business, not run through the same template.
  Palette, texture, and shape language should feel chosen.
- **Motion that feels expensive.** `IntersectionObserver` reveals with real
  staging, a scroll-aware sticky header, considered easing. Not
  fade-in-everything. Every animation should look deliberate.
- **Detail work.** Considered hover/focus states, edge treatments, layered
  depth, restrained gradients/grain, custom-drawn SVG iconography and
  diagrams that carry real meaning rather than decorative filler.
- **The 320px view should look designed**, not like a desktop layout that
  survived a squeeze.

Be bold. A page that takes a real stylistic position beats a safe one. But
taste over noise: if an effect fights legibility, it loses.

## Verify by reading, then by rendering

Do the reasoning pass first — most defects are visible in the CSS. Check by
reading:

- Every fixed/large `width`, `min-width`, `padding`, and negative margin: at
  320px, does the box plus its padding exceed the viewport? Prefer
  `max-width: 100%`, `clamp()`, `minmax(0, 1fr)`, and `overflow-wrap`.
- Grid/flex children that can't shrink: `minmax(0, 1fr)` rather than `1fr`
  where content might overflow.
- Long unbroken strings (phone numbers, emails, URLs) that can force
  horizontal scroll.
- Every colour pair used for body text against the background it actually
  sits on — reason about the contrast ratio rather than eyeballing it.
- That a `@media (prefers-reduced-motion: reduce)` block exists and actually
  neutralises the transforms/transitions you added.
- That `:focus-visible` styling exists and is visible against its background.
- Exactly one `<h1>`; heading levels don't skip.

Then verify for real with `node qa/check.js <slug>`, which renders the page
and measures 320px overflow and WCAG contrast. Hand-checking is not a
substitute: six sites passed review and still broke at 320px, and four had
text under 2:1 that nobody caught by reading.

Save your work to disk frequently as you go rather than holding a large
rewrite in your head. If you are interrupted, whatever is already written
survives.

## Definition of done

Opens standalone in a browser. Looks genuinely premium at every width. Zero
fabricated facts. `noindex` meta and concept-note footer intact. Every
existing photo still present and correctly referenced. Works at 320px.

## Process

- **Do the work yourself. Do not delegate, and do not stop to ask for
  approval.** You are the specialist for this task — there is nobody better to
  hand it to, and the session running you is unattended, so a question just
  stalls the work indefinitely. Two agents have already burned their entire
  run pausing to ask whether they should spawn a sub-agent. Make the ordinary
  judgment calls yourself and report what you decided at the end.
- **Do not run ANY git commands.** No add, commit, checkout, or stash. The
  main session owns git.
- Only touch files inside your assigned `sites/<slug>/` directories.
- Work one site to completion before starting the next.
- Report per site: what you changed, what you verified visually, and anything
  you found broken that you could not fix. Be blunt about shortfalls — an
  accurate report is worth more than a flattering one.

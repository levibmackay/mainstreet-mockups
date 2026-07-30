# Build brief — Main Street Sites spec mockups

You are building ONE spec mockup homepage for a real Rexburg-area business
that has not hired us. These are sent cold to the owner to win the job, so
they must be genuinely excellent — and scrupulously honest.

## Non-negotiable rules

**1. Never fabricate anything about the business.**
No invented testimonials, review quotes, star ratings, customer names, staff
names, certifications, awards, years-in-business, prices, guarantees,
service areas, or hours. You get a fact sheet in your task prompt. If a fact
is not on that sheet, it does not go on the page. This is the single most
important rule: a fabricated testimonial sent to the actual business owner
destroys the pitch and is dishonest to anyone who reads the page.

Where a real site would show content you do not have, design the section so
it works without it — or use clearly generic, non-factual copy ("Serving the
Upper Valley", "Call for a free estimate"). Never write "★★★★★ — Sarah M.,
Rexburg". Never write "Over 500 satisfied customers".

**2. Every page must be `noindex`.** Put this in `<head>`, exactly:
```html
<meta name="robots" content="noindex, nofollow">
```
These mockups must never rank in search and compete with the business's
own site.

**3. Every page must carry the concept disclosure footer.** Last element in
`<body>`, styled small and unobtrusive but legible (not hidden, not 4px, not
the same color as the background):
```html
<p class="concept-note">Concept design proposal — not affiliated with or
endorsed by this business. Prepared by Levi Mackay, Main Street Sites.</p>
```

**4. No photographs.** You cannot access real photos of these businesses,
and stock photos of people who obviously do not work there is an explicit
buy-signal of a *bad* site in our own playbook. Build the visual impact from
CSS and inline SVG only: gradients, mesh/grain textures, geometric pattern
systems, bold typography, line art, iconography you draw yourself, layered
shapes, blur, masks. A great site with zero photos beats a mediocre site
with fake ones. Treat this as the creative constraint that makes the design
distinctive.

## Technical requirements

- **One self-contained file:** `sites/<slug>/index.html`. Inline `<style>`
  and `<script>`. No build step, no external requests — no CDN, no Google
  Fonts, no external images. GitHub Pages serves this file directly.
- **Fonts:** system font stacks only (e.g. `ui-serif, Georgia, serif` /
  `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` /
  `ui-monospace, "SF Mono", Menlo, monospace`). Get typographic personality
  from weight, size, spacing, and case — not from a font download.
- **Fully responsive**, 320px through ultrawide. Test the narrow end
  mentally: no horizontal scroll, tap targets ≥44px, readable line lengths.
- **Scroll animations** via `IntersectionObserver` — reveal-on-scroll,
  staggered entrances, parallax or sticky sections where they earn their
  place. Also a scroll-aware sticky header. Animations should feel
  intentional and expensive, not like a template's fade-in-everything.
- **Respect `prefers-reduced-motion: reduce`** — disable transforms and
  transitions inside that media query. Required, not optional.
- **Accessible:** semantic landmarks, one `<h1>`, real heading hierarchy,
  `alt` on meaningful SVG (`role="img"` + `<title>`), visible focus states,
  and body text at WCAG AA contrast against its actual background.
- Include `<meta name="viewport" content="width=device-width, initial-scale=1">`
  and a `<title>` of the form `Business Name — short descriptor`.

## Content structure

Adapt to the business, but generally: a hero that states who they are and
what they do, a services/offering section, a "why them" section built from
the real differentiators on your fact sheet, a service-area or location
section, and a strong contact/CTA section with their real phone number as a
tappable `tel:` link. Write real, specific, human copy — not lorem ipsum and
not marketing mush. The copy should sound like the business, not like a
website template.

## Definition of done

The file exists at `sites/<slug>/index.html`, opens standalone in a browser,
looks genuinely premium, contains zero fabricated facts, has the noindex
meta and the concept-note footer, and works at 320px wide.

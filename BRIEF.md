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

**4. Real photos only, or none at all.** *Revised 2026-08-03, which lifted an
outright ban on photographs. Revised again 2026-08-05 to add source 3.*

You may use real photographs of the actual business, from exactly three
sources:

- **The business's own current website.** You are showing them their own
  content in a better design, which is the normal shape of a redesign pitch.
- **Their Google Maps / Google Business Profile listing.**
- **Their own Facebook or Instagram business page.** Same principle as their
  website: content the business posted about itself. In this market a
  Facebook page is often the *only* real web presence a business has, which
  is why this source was added.

Everything else is still banned. **No stock photography. No AI generated
images. No photos of a different business.** Stock photos of people who
obviously do not work there is an explicit buy-signal of a *bad* site in our
own playbook, and putting one on a page you send the owner is worse than
having no photo at all.

**Extra constraints that apply to source 3 specifically.** A social page
mixes the business's own content with other people's, so it needs more care
than a website does:

- **Only content the business itself posted.** Not customer photos, not
  tagged photos, not shares or reposts of someone else's image, not anything
  from the visitors' or community tab.
- **No identifiable faces**, same as everywhere else. Social pages are dense
  with staff and customer photos, and this is where that rule will bite most
  often. A recognisable customer in the background disqualifies the photo.
- **No memes, promo graphics, or reposted marketing images.** These are
  frequently licensed stock the business does not own.
- **If you cannot confirm the business posted it, do not use it.** The
  ambiguous case is a no, not a maybe.
- Log it as `facebook` or `instagram` in the source column, never as "their
  site", so it can be found and pulled fast if they object.

Two hard constraints on sourcing:

- **Do not copy licensed stock off their site either.** If their photos have
  filenames like `Depositphotos_*.jpg`, those are images *they* licensed, not
  their own photography, and republishing them is redistributing someone
  else's licensed work. Skip those and use their genuine photos instead.
- **Log every image.** Each site gets `sites/<slug>/IMAGE-SOURCES.md`
  recording, per file: the local filename, the exact source URL, which of the
  three sources it came from, where it appears on the page, and the
  date pulled. This is how a photo gets removed quickly if anyone questions
  where it came from. Google Maps photos in particular are often owned by the
  customers who uploaded them rather than by the business, so the log is not
  optional.

**If you cannot find real photos, build with CSS and inline SVG as before:**
gradients, mesh/grain textures, geometric pattern systems, bold typography,
line art, iconography you draw yourself, layered shapes, blur, masks. Several
of these businesses have no website at all, so a photo-free page is a normal
outcome, not a failure. A great site with zero photos still beats a mediocre
site with the wrong ones.

Images must be downloaded into `sites/<slug>/img/` and referenced with
relative paths. Never hotlink, since rule 5 forbids external requests.
Optimize to a 1600px long edge and keep each site's images under about 2MB.
Every image needs real `alt` text, `loading="lazy"`, and explicit
`width`/`height` so the layout does not shift.

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

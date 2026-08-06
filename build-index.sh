#!/usr/bin/env bash
# Regenerates the contact sheet listing every mockup.
# Run after adding or removing a site. Usage: ./build-index.sh
#
# The sheet is written to contact-sheet.local.html, which is gitignored and
# therefore never published. It used to be written to index.html, and because
# this repo is served directly by GitHub Pages that made it the front page of
# mockups.levimackay.com: a public list naming every prospect in the pipeline,
# reachable by deleting the path off any mockup URL that had been emailed to
# one of them. noindex kept it out of Google. It did not keep it away from a
# person who trimmed a URL. See index.html for what is published instead.
cd "$(dirname "$0")" || exit 1

out=contact-sheet.local.html

cat > "$out" <<'HEAD'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Main Street Sites — prospect mockups</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 3rem 1.25rem 5rem;
    font: 16px/1.6 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    background: #0f1115; color: #e7e9ee;
  }
  .wrap { max-width: 820px; margin: 0 auto; }
  h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); margin: 0 0 .4rem; letter-spacing: -.02em; }
  .sub { color: #99a1b3; margin: 0 0 2.5rem; }
  ul { list-style: none; margin: 0; padding: 0; display: grid; gap: .6rem; }
  .card {
    display: flex; justify-content: space-between; align-items: center; gap: 1rem;
    padding: .95rem 1.15rem; border: 1px solid #262b36; border-radius: 10px;
    background: #161a22; color: inherit; text-decoration: none;
    transition: border-color .15s ease, background .15s ease;
  }
  a.card:hover, a.card:focus-visible { border-color: #4a7fd4; background: #1b212b; }
  a.card:focus-visible { outline: 2px solid #4a7fd4; outline-offset: 2px; }
  .card.blocked { border-color: #5c2b2b; background: #1a1416; cursor: default; }
  .card.blocked .name { color: #b9a3a3; }
  .card.blocked .go { color: #d98a8a; font-weight: 600; }
  .name { font-weight: 600; }
  .go { color: #7d8798; font-size: .85rem; white-space: nowrap; }
  footer { margin-top: 3rem; color: #7d8798; font-size: .85rem; border-top: 1px solid #262b36; padding-top: 1.25rem; }
  @media (prefers-reduced-motion: reduce) { a.card { transition: none; } }
</style>
</head>
<body>
<div class="wrap">
<h1>Prospect mockups</h1>
<p class="sub">Spec concept designs for Rexburg-area businesses. Every page is noindex and carries a concept-disclosure footer. Not affiliated with the businesses shown.</p>
<ul>
HEAD

count=0
for d in sites/*/; do
  slug=$(basename "$d")
  # A DO-NOT-CONTACT directory still gets a row even with no index.html, so
  # the reminder stays visible. Styles & Smiles has had its page deleted
  # outright, because leaving it in the repo left it publicly reachable.
  if [ ! -f "$d/index.html" ] && [ ! -f "$d/DO-NOT-CONTACT.md" ]; then
    continue
  fi
  # Prefer the page's own <title>, minus our " — descriptor" suffix.
  if [ -f "$d/index.html" ]; then
    name=$(sed -n 's:.*<title>\([^<]*\)</title>.*:\1:p' "$d/index.html" | head -1 | sed 's/ [—-] .*//')
  else
    name=""
  fi
  [ -n "$name" ] || name="$slug"
  # A site with a DO-NOT-CONTACT.md is rendered unlinked, so nobody opens or
  # sends it by accident. See that file for why.
  if [ -f "$d/DO-NOT-CONTACT.md" ]; then
    printf '  <li><span class="card blocked"><span class="name">%s</span><span class="go">DO NOT CONTACT</span></span></li>\n' \
      "$name" >> "$out"
  else
    printf '  <li><a class="card" href="sites/%s/"><span class="name">%s</span><span class="go">%s &rarr;</span></a></li>\n' \
      "$slug" "$name" "$slug" >> "$out"
  fi
  count=$((count + 1))
done

cat >> "$out" <<FOOT
</ul>
<footer>$count mockups. Prepared by Levi Mackay, Main Street Sites.</footer>
</div>
</body>
</html>
FOOT

echo "Wrote $out with $count mockups."

#!/usr/bin/env bash
# Verifies every built mockup against the non-negotiables in BRIEF.md.
# Usage: ./check.sh
cd "$(dirname "$0")" || exit 1

fail=0

# Every page, not just index.html. Sibling pages added by the production
# build would otherwise ship with none of these checks applied.
for f in sites/*/*.html; do
  slug="$(basename "$(dirname "$f")")/$(basename "$f")"
  problems=()

  # Multi-page sites share a per-site stylesheet, so style-level rules can
  # legitimately live there rather than inline. Search the page plus any
  # stylesheet it links locally. Without this, every page needs a duplicate
  # inline reduced-motion block purely to satisfy the grep.
  sheets=()
  while IFS= read -r href; do
    [ -n "$href" ] || continue
    case "$href" in http*|//*) continue ;; esac
    cand="$(dirname "$f")/$href"
    [ -f "$cand" ] && sheets+=("$cand")
  done < <(sed -n 's/.*<link[^>]*rel="stylesheet"[^>]*href="\([^"]*\)".*/\1/p' "$f")

  # Some sites are built React apps rather than hand-written HTML. Their
  # shell is nearly empty and the markup lives in the bundle, so h1 and the
  # reduced-motion block have to be looked for there too. The rules below
  # that protect a prospect (noindex, the concept note, viewport) are NOT
  # relaxed for these — those must be in the shell, where they apply even
  # before JavaScript runs.
  bundles=()
  while IFS= read -r src; do
    [ -n "$src" ] || continue
    case "$src" in http*|//*) continue ;; esac
    cand="$(dirname "$f")/$(basename "$src")"
    [ -f "$cand" ] || cand="./${src#/}"
    [ -f "$cand" ] && bundles+=("$cand")
  done < <(sed -n 's/.*<script[^>]*src="\([^"]*\)".*/\1/p' "$f")

  grep -q 'name="robots" content="noindex, nofollow"' "$f" || problems+=("MISSING noindex")
  grep -q 'Concept design proposal' "$f"                   || problems+=("MISSING concept-note footer")
  grep -q 'width=device-width'      "$f"                   || problems+=("MISSING viewport meta")

  # Hand-written pages spell it "<h1". A bundled React app does not: the tag
  # survives minification either as a framer-motion property access (".h1")
  # or as a bare tag-name string (`h1`), depending on how it was authored.
  # Accept any of the three rather than let real h1s read as missing.
  grep -q '<h1' "$f" 2>/dev/null \
    || grep -qE '\.h1\b|[`"'"'"']h1[`"'"'"']' "${bundles[@]}" 2>/dev/null \
    || problems+=("MISSING h1")

  grep -q 'prefers-reduced-motion' "$f" "${sheets[@]}" "${bundles[@]}" 2>/dev/null \
    || problems+=("MISSING reduced-motion")

  # No external requests: Pages must serve this file standalone.
  if grep -Eq '(src|href)="https?://' "$f"; then
    # tel:/mailto: are fine; only flag real network fetches.
    if grep -Eq '<(script|link|img)[^>]*(src|href)="https?://' "$f"; then
      problems+=("EXTERNAL request")
    fi
  fi

  # Fabrication smells. Star glyphs and invented-quote patterns are the
  # highest-risk failure — a fake review sent to the real owner sinks the pitch.
  # One star run is a legitimate aggregate-rating display. Three or more
  # suggests a row of testimonial cards, which we never have real data for.
  stars=$(grep -c '★★★\|⭐⭐' "$f")
  [ "$stars" -ge 3 ] && problems+=("$stars STAR RUNS (likely fabricated testimonials)")
  grep -Eqi '"[^"]{25,}"[[:space:]]*(—|--|&mdash;)[[:space:]]*[A-Z][a-z]+ [A-Z]\.' "$f" \
    && problems+=("QUOTE+ATTRIBUTION (possible fabricated testimonial)")
  grep -Eqi 'satisfied customers|happy customers|[0-9,]+\+ (customers|clients|jobs|projects)' "$f" \
    && problems+=("UNVERIFIABLE VOLUME CLAIM")
  grep -Eqi 'lorem ipsum' "$f" && problems+=("LOREM IPSUM")

  size=$(wc -c < "$f" | tr -d ' ')

  if [ ${#problems[@]} -eq 0 ]; then
    printf 'PASS  %-44s %6s bytes\n' "$slug" "$size"
  else
    fail=1
    printf 'FAIL  %-44s %6s bytes  -> %s\n' "$slug" "$size" "${problems[*]}"
  fi
done

echo
if [ "$fail" -eq 0 ]; then echo "All built sites pass."; else echo "Problems found above."; fi

# Static-analysis mobile-layout rules (viewport sanity, fixed widths,
# responsive images, media-query coverage, 16px form inputs, overflow
# smells, tap targets). No browser: node qa/check.js still owns the real
# rendered 320/768/1440 overflow and contrast checks; this is the fast,
# no-Playwright-required layer that catches the same class of bug earlier.
echo
if command -v node >/dev/null 2>&1; then
  node qa/check-responsive.js || fail=1
else
  echo "node not found — skipping qa/check-responsive.js (mobile-layout static checks)"
fi

# qa/check-responsive.js prints its own "N/N clean" line, which only counts
# its own rule set. That line can read as "all clear" directly under a
# content-check FAIL above, which is confusing, not dishonest, but still
# worth a single honest bottom line for anyone skimming instead of reading
# every section.
echo
if [ "$fail" -eq 0 ]; then
  echo "OVERALL: all checks passed."
else
  echo "OVERALL: FAILED — see FAIL lines above."
fi

# The script previously never propagated $fail to its own exit code — every
# problem above printed but a caller checking `./check.sh; echo $?` (or a
# future CI hook) would still see 0. Fix it here rather than leave the new
# checks just as silently ignorable as the old ones were.
exit "$fail"

#!/usr/bin/env bash
# Verifies every built mockup against the non-negotiables in BRIEF.md.
# Usage: ./check.sh
cd "$(dirname "$0")" || exit 1

fail=0

for f in sites/*/index.html; do
  slug=$(basename "$(dirname "$f")")
  problems=()

  grep -q 'name="robots" content="noindex, nofollow"' "$f" || problems+=("MISSING noindex")
  grep -q 'Concept design proposal' "$f"                   || problems+=("MISSING concept-note footer")
  grep -q 'width=device-width'      "$f"                   || problems+=("MISSING viewport meta")
  grep -q 'prefers-reduced-motion'  "$f"                   || problems+=("MISSING reduced-motion")
  grep -q '<h1'                     "$f"                   || problems+=("MISSING h1")

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
    printf 'PASS  %-34s %6s bytes\n' "$slug" "$size"
  else
    fail=1
    printf 'FAIL  %-34s %6s bytes  -> %s\n' "$slug" "$size" "${problems[*]}"
  fi
done

echo
if [ "$fail" -eq 0 ]; then echo "All built sites pass."; else echo "Problems found above."; fi

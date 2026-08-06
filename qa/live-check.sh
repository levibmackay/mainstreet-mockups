#!/usr/bin/env bash
# Fetches every page under the mockups domain and records its HTTP status.
# Usage: ./qa/live-check.sh [base-url] > results.tsv
cd "$(dirname "$0")/.." || exit 1
BASE="${1:-https://mockups.levimackay.com}"

check() {
  local url="$1"
  local code
  code=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 25 "$url")
  printf '%s\t%s\n' "$code" "$url"
}

check "$BASE/"
for f in $(find sites -name '*.html' | sort); do
  # index.html is served at the directory path; keep the explicit path too
  check "$BASE/$f"
  sleep 0.15
done

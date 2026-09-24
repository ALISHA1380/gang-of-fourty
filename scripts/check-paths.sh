#!/bin/sh
# Reads changed file paths (one per line) on stdin.
# Rule: a PR that touches shops/ must stay inside exactly ONE shops/<slug>/ folder.
# PRs that don't touch shops/ at all (maintainer changes) pass.
files=$(grep -v '^$')
echo "$files" | grep -q '^shops/' || exit 0

slugs=$(echo "$files" | grep '^shops/[a-z0-9-]*/' | cut -d/ -f2 | sort -u)
outside=$(echo "$files" | grep -v '^shops/[a-z0-9-]*/')
count=$(echo "$slugs" | grep -c .)

if [ -n "$outside" ] || [ "$count" -ne 1 ]; then
  echo "❌ This PR must only change files inside ONE folder: shops/<your-slug>/"
  [ "$count" -gt 1 ] && echo "   Shops touched: $(echo $slugs)"
  [ -n "$outside" ] && echo "   Files outside your shop:" && echo "$outside" | sed 's/^/     /'
  exit 1
fi
echo "✅ Only shops/$slugs/ changed."

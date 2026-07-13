#!/bin/bash
# Local automation — author one safety category per run, every 30 min via launchd.
# User authorized headless --dangerously-skip-permissions run on 2026-07-12.
# Each invocation is a fresh `claude` process = cleared context between iterations.
# State is passed between runs through git (docs/STATUS.md + committed content).

REPO="/Users/niftymedia/Documents/Claude/submitdaily_safety"
DIR="$REPO/.automation"
LOCK="$DIR/author-loop.lock"
LOG="$DIR/author-loop.log"
CLAUDE="/Users/niftymedia/.local/bin/claude"

# Prevent overlapping runs — mkdir is atomic. If a prior category is still
# authoring (can exceed 30 min), skip this tick instead of racing on git.
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "[$(date '+%F %T')] previous run still active — skipping this tick" >> "$LOG"
  exit 0
fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

cd "$REPO" || { echo "[$(date '+%F %T')] repo not found" >> "$LOG"; exit 1; }

echo "[$(date '+%F %T')] === starting /author-next-category (opus 4.8) ===" >> "$LOG"
"$CLAUDE" -p "/author-next-category" \
  --model claude-opus-4-8 \
  --dangerously-skip-permissions >> "$LOG" 2>&1
code=$?
echo "[$(date '+%F %T')] === finished (exit $code) ===" >> "$LOG"

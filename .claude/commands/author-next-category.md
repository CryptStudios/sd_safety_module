---
description: Author one full category end-to-end (start-session → author → end-session); loop-safe
---

Run **one complete authoring cycle** for the next category of the SD Safety
Module — the full `/start-session` → author → `/end-session` loop in a single
pass. Designed to be run under `/loop` (one category per iteration).

## Do exactly one category per invocation

1. **Start-session** — follow the `/start-session` procedure in
   [CLAUDE.md](../../CLAUDE.md): read `docs/STATUS.md` for the next category and
   any blocker, read `docs/CONTENT_PLAN.md` for its primary source, ensure the dev
   server is running, and define the real ~11–16 topic titles. `/start-session`
   now **auto-proceeds**, so continue straight into research + authoring.
2. **Author** — write real, source-grounded toolbox-talk content per the
   **Article-writing methodology** in CLAUDE.md. Never invent safety facts.
3. **End-session** — follow the `/end-session` procedure in CLAUDE.md: `npx tsc
   --noEmit` + `npx next build` clean, spot-check routes 200 with real content
   (`plain site language` gone), update `docs/STATUS.md` (Completed block,
   Progress N/24, Current/next up, Session-log row, SME-review = pending), then
   commit (`feat(content): author <Category> articles`) and push.

## Loop-safety rules — read before starting

- **One category only, then stop this iteration.** The per-category commit is the
  save-point; never batch multiple categories into one pass.
- **Skip the jurisdiction-gated categories** until the US-vs-UK decision is made:
  `coshh-hazardous-substances` and `manual-handling`. Pick the next *unblocked*
  OSHA-based category instead.
- **Stop and ask on any real blocker or decision** — a missing source, an
  ambiguous scope, a fact you can't ground. Surface it; do **not** guess.
  Life-safety content.
- **Verify before you commit.** If tsc or build isn't clean, fix it or stop —
  never commit a broken tree.

## Loop termination — end the loop, don't spin

Before authoring, check `docs/STATUS.md`. **Stop the loop** (do not schedule
another iteration) and report a summary when either is true:

- **All 24 categories are authored** — the rollout is complete.
- **Every remaining category is blocked** (only the jurisdiction-gated ones are
  left, and the US-vs-UK decision is still open).

Otherwise, finish this category's commit + push, then the loop may continue to
the next unblocked category.

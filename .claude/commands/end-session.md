---
description: Close a content-authoring session — verify, update status, commit & push
---

End the current content-authoring session for the SD Safety Module.

Follow the **`/end-session`** procedure defined in [CLAUDE.md](../../CLAUDE.md):

1. Run `npx tsc --noEmit` and `npx next build` — fix anything that isn't clean.
2. Spot-check that a few authored topic routes return 200 with real content
   (the old generated phrase `plain site language` should be gone).
3. Update `docs/STATUS.md`: move the finished category to **Completed** (topic
   list, sources, verification results, SME-review = pending), bump
   **Progress: N / 24**, set **Current / next up**, add a **Session log** row.
4. Commit with a conventional message (e.g. `feat(content): author <Category> articles`)
   and push — this updates the open PR.
5. Summarize what was accomplished and the next category.

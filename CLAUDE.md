# SD Safety Module — Project Instructions

Static Next.js safety-training hub. Workers browse safety categories, read
article-style toolbox talks, and complete acknowledgments via external forms.

- **Stack:** Next.js App Router · TypeScript · Tailwind v4 · static export (`output: "export"`).
- **Design system:** [design-system/App Design System.md](design-system/App%20Design%20System.md) — Submit Daily brand (safety orange, slab-serif, grid texture). **Light-first UI** — the app is used outdoors in daylight, so keep surfaces light and high-contrast; only small non-critical bands (footer) may be dark.

## Key files

| File | Purpose |
|------|---------|
| `src/lib/training-data.ts` | Categories + topic generation. `createCategory`, `buildTopics`, and the placeholder `build*` generators. |
| `src/lib/topic-content.ts` | **Real authored content.** `authoredTopics` map overrides the generator per topic. |
| `src/lib/category-groups.ts` | Groups the 24 categories into 5 sections for the browse UI. |
| `src/app/training/[slug]/page.tsx` | Category page. |
| `src/app/training/[slug]/[topic]/page.tsx` | Article page + `ArticleBody` renderer. |

---

## Content mission

The generated `build*` text is **placeholder** — self-referential filler that
describes an article instead of being one. We are replacing it, one category at
a time, with **real toolbox-talk content** grounded in free public-domain
sources (OSHA / NIOSH / CPWR). Plan: [docs/CONTENT_PLAN.md](docs/CONTENT_PLAN.md).
Status: [docs/STATUS.md](docs/STATUS.md).

> ⚠️ Authored content is a **first draft**. A qualified safety professional must
> review and sign off before crews rely on it. Never present it as final.

### Data model

- `AuthoredTopic = { description: string; sections: TrainingArticleSection[] }`
- `TrainingArticleSection = { heading: string; body: ArticleBlock[] }`
- `ArticleBlock = string | { list: string[] }` — a string is a paragraph; a
  `{ list }` renders as a bullet list.
- `authoredTopics` is keyed **`"<categorySlug>/<topicSlug>"`** (topic slug is
  `slugify(title)`).
- `sections[0]` is the **lead**: its heading is NOT shown; its body renders
  directly under the topic title. Give it heading `"Overview"`.
- Add a category's slug to `realContentCategories` (in `training-data.ts`) to
  disable the synthetic 11× expansion once its real topics are set.

### Article-writing methodology (per category)

1. **Scope** — choose the real, distinct toolbox-talk topics for the category,
   grounded in its primary source (see the plan). They should map to real
   subtopics of the governing standard, not invented angles. **Flex the count to
   the standard: ~11 is the floor; go up to ~15–16 where the governing standard
   genuinely supports more distinct, non-overlapping talks.** Never pad with
   near-duplicate angles just to hit a number — distinctness beats count. (The
   `build*` generator's 11× expansion is placeholder filler, not a target.)
2. **Research** — pull facts from public-domain sources only (OSHA 29 CFR,
   NIOSH, CPWR). Capture the specifics: definitions, **numeric thresholds**,
   **standard citations**, required controls, roles, equipment.
3. **Author** each article:
   - **Structure:** lead (`sections[0]`, heading `"Overview"`, hidden) = 1–2
     short paragraphs under the title; then 3–4 sections with real headings.
   - **Voice:** plain, direct, job-site — like a foreman talking. Second person
     ("you"), contractions, short sentences. Not corporate, not academic.
   - **Bullets where there's a real list** (thresholds, checklists, steps,
     roles) via `{ list: [...] }`; prose for explanation. Don't over-bullet.
   - **Keep every hard fact** — thresholds, standard references, equipment specs.
   - **No self-referential language** — never "this article", "reading
     material", "a good article". Deliver the training directly.
4. **Wire it in:**
   - Add each topic to `authoredTopics` in `src/lib/topic-content.ts`.
   - Set the category's `topics: [...]` array in `src/lib/training-data.ts` to
     the real titles.
   - Add the category slug to `realContentCategories`.
5. **Verify:** `npx tsc --noEmit` (exit 0) → `npx next build` (all pages
   prerender) → every topic route 200 and rendering authored content (grep that
   the old generated phrase `plain site language` is gone).
6. **Flag** for qualified-safety-professional review in `docs/STATUS.md`.

---

## Session commands

### `/start-session`

1. Read `docs/STATUS.md` → identify the **next category** (respect any decision/blocker noted).
2. Read `docs/CONTENT_PLAN.md` → that category's primary source and scope.
3. Ensure the dev server is running (`npm run dev`, http://localhost:3000); start it if not.
4. Define/confirm the category's ~11 real topic titles (research if not set).
5. State the session goal: which category, how many topics, primary source.

### `/end-session`

1. `npx tsc --noEmit` and `npx next build` — fix anything that isn't clean.
2. Spot-check a few authored routes return 200 with real content.
3. Update `docs/STATUS.md`: move the finished category to Completed (topic list,
   sources, verification, SME-review = pending), bump **Progress: N / 24**, set
   **Current / next up**, add a Session-log row.
4. Commit (conventional message, e.g. `feat(content): author <Category> articles`)
   and push — this updates the open PR.
5. Summarize what was done and the next category.

---

## Working rules

- **One category per session.** Keep scope tight; author + verify + commit.
- **Never invent safety facts.** If a threshold or requirement isn't in a source,
  research it — don't guess. Life-safety content.
- **Preserve the generator fallback.** Categories not yet authored must keep
  rendering (they use the `build*` generators). Don't break untouched categories.
- **Commit at the end of each category** as a save-point; push to update the PR.
- **`/init` is forbidden** — this file is hand-curated. Edit it directly.

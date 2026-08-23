# Submit Daily Safety Module

Next.js app by Maxwell Jung for an internal construction safety training and
recordkeeping hub. It's two things in one: a public library of toolbox-talk
training content, and a multi-tenant internal system companies use to run
safety forms and keep the completed records.

## Stack

- Next.js App Router (server-rendered, not a static export)
- TypeScript
- Tailwind CSS v4
- Postgres via Supabase (`pg` driver, raw SQL — no ORM)
- Supabase Storage for uploaded hard-copy attachments
- `@react-pdf/renderer` for per-submission PDF export

## How it's organized

- **Public** — `/` and `/training/[category]/[topic]` browse safety
  categories and read the authored toolbox-talk articles. `/contact` and
  `/acknowledgment` are static info pages.
- **Auth-gated forms** — `/toolbox-talk-attendance` and the two routes under
  `/forms/[formSlug]` (`incident-investigation`, `weekly-safety-inspection`)
  submit through `/api/submissions`. All three search projects and (for
  attendance) employees from the company's own roster rather than free text.
- **Company dashboard** (`/dashboard`, role `admin`) — manage projects and
  the employee roster (manual entry or CSV import with a column picker),
  manage company user accounts, and browse/filter/search all submitted
  records. New submissions since your last visit are flagged; every record
  can be expanded and downloaded as a PDF.
- **Employee workspace** (`/workspace`, role `employee`) — the same forms,
  scoped to what an employee needs without the admin tooling.
- **Platform admin** (`/dashboard`, role `platform_admin`) — creates
  companies and their first admin account, and manages its own credentials.

Three roles, one login screen (`/login`): `platform_admin`, `admin`,
`employee`. Auth is a signed session cookie, not email/password — usernames
are created by an admin (or the platform admin, for the first admin of a new
company).

## Local setup

1. Copy `.env.example` to `.env.local` and fill in real values (see below).
2. `npm install`
3. `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Environment variables

```
DATABASE_URL                          # Postgres connection string (Supabase)
SUPABASE_URL                          # for Supabase Storage (file uploads)
SUPABASE_SERVICE_ROLE_KEY
SAFETY_MODULE_PLATFORM_ADMIN_USERNAME # seeds the platform-admin account
SAFETY_MODULE_PLATFORM_ADMIN_PASSWORD
SAFETY_MODULE_PLATFORM_ADMIN_DISPLAY_NAME
SAFETY_MODULE_SESSION_SECRET          # signs session cookies
```

There's no local-file or JSON fallback storage — Postgres is required even
for local dev. The schema self-creates on first request: `ensureSchema()` in
`src/lib/server/db.ts` runs idempotent `CREATE TABLE IF NOT EXISTS` / `ALTER
TABLE ADD COLUMN IF NOT EXISTS` statements, so there's no manual migration
step, including the first time you point at a fresh database.

## Build

1. `npm run build`
2. `npm run start` to serve the production build locally

## Deploying

Currently deployed on **Netlify**, using Netlify's Next.js runtime (see
`netlify.toml`) — this is a server-rendered app with API routes and a live
database connection, so it needs a host that runs a real Next.js server, not
a static-file host. Any platform that supports the Next.js server runtime
(Netlify, Vercel, a Node-capable VPS) works the same way; just carry over the
environment variables above.

## Updating training content

Category/topic structure and the generated fallback copy live in
[`src/lib/training-data.ts`](src/lib/training-data.ts). The real, authored
article content — grounded in OSHA/NIOSH source material — lives separately
in [`src/lib/topic-content.ts`](src/lib/topic-content.ts), keyed by
`categorySlug/topicSlug`; a topic renders its authored version when present,
otherwise falls back to the generated placeholder. Category groupings shown
on the homepage are in
[`src/lib/category-groups.ts`](src/lib/category-groups.ts). Rollout status
and the content plan are tracked in [`docs/STATUS.md`](docs/STATUS.md) and
[`docs/CONTENT_PLAN.md`](docs/CONTENT_PLAN.md).

## Compliance wording

This site is intentionally framed as an internal safety training
organization tool. It does not describe itself as an official OSHA
certification site and does not claim to issue OSHA 10 or OSHA 30 cards.

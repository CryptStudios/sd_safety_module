# SD Safety Module

Static Next.js site by Maxwell Jung for an internal construction and startup safety training hub. Workers can browse safety categories, read article-style training material, and open external BoloForms links to complete acknowledgments.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export via `output: "export"`

## Features

- Fully static export-compatible site
- Home page with a dark navy and safety-yellow layout
- Searchable training categories page using client-side React state only
- Statically generated category article pages with `generateStaticParams`
- Rich, toolbox-talk-oriented category and topic content in `src/lib/training-data.ts`
- Forms & Reports page and contact page
- Footer disclaimer and internal-use wording

## Local setup

1. Run `npm install`
2. Run `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Build

1. Run `npm run build`
2. The static export will be generated in the `out/` directory

This project does not require a server runtime after build output is generated.

## Updating training content

All category content, article sections, discussion prompts, and topic links are in [src/lib/training-data.ts](/Users/maxwelljung/Documents/SafeTrack/src/lib/training-data.ts).

Each category includes:

- `overview`
- `meetingPurpose`
- `keyTakeaways`
- `supervisorNotes`
- `discussionPrompts`
- `articleSections`
- `topics`

To replace a BoloForms link, update the `boloFormUrl` value for the relevant topic.

## Deploying

### Vercel

1. Import the project into Vercel
2. Keep the default Next.js framework preset
3. Deploy normally

### Netlify

Use these settings:

- Build command: `npm run build`
- Publish directory: `out`

### Any static host

1. Run `npm run build`
2. Upload the contents of `out/` to your static host

Examples include Cloudflare Pages, GitHub Pages, Amazon S3 + CloudFront, and any standard static hosting provider.

## Compliance wording

This site is intentionally framed as an internal safety training organization tool. It does not describe itself as an official OSHA certification site and does not claim to issue OSHA 10 or OSHA 30 cards.

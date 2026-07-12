# Submit Daily — Design System

The visual language for the SD Safety Module. Warm off-white paper on a fixed
grid, safety-orange highlights, slab-serif display type, and mono uppercase
labels. This document is the source of truth; it mirrors what is implemented in
[`src/app/globals.css`](../src/app/globals.css) and
[`src/app/layout.tsx`](../src/app/layout.tsx).

Derived from the original visual spec in `App Design System.html`.

---

## Principles

- **Editorial, not corporate.** Slab-serif headings, generous line-height, a
  visible grid — reads like a printed field manual, not a SaaS dashboard.
- **Orange means action.** `--hi` is reserved for interactive and safety-critical
  emphasis. Don't use it for decoration.
- **Warm neutrals.** Every "gray" is warm (`#18150F` ink, not blue-black). Avoid
  cool slates and pure grays.
- **Precise geometry.** Small, deliberate radii (10–16px) and pill buttons. No
  oversized 2rem+ rounds.

---

## Color tokens

Defined as Tailwind v4 `@theme` variables — each generates utilities
(`bg-*`, `text-*`, `border-*`, and `/opacity` modifiers).

### Surfaces

| Token | Value | Utility | Use |
|-------|-------|---------|-----|
| `--color-bg` | `#F7F7F5` | `bg-bg` | Page background (carries the grid) |
| `--color-paper` | `#FFFFFF` | `bg-paper` | Cards, panels, raised surfaces |

### Ink (text)

| Token | Value | Utility | Use |
|-------|-------|---------|-----|
| `--color-ink` | `#18150F` | `text-ink` | Primary text, headings, dark bands |
| `--color-ink-2` | `#3B362C` | `text-ink-2` | Body / secondary text |
| `--color-ink-3` | `#6C6557` | `text-ink-3` | Muted text, eyebrow labels, meta |

On dark (`bg-ink`) bands, text uses light warm tones: `#F5EFE2` (primary),
`#C9C2B2` (secondary), `#8C8676` (muted).

### Highlight — safety orange

| Token | Value | Utility | Use |
|-------|-------|---------|-----|
| `--color-hi` | `#FF5A02` | `bg-hi` / `text-hi` | Primary accent, buttons, active states |
| `--color-hi-deep` | `#E14E00` | `text-hi-deep` | Hover on orange, accent text on light |
| `--color-hi-soft` | `#FFE2CC` | `bg-hi-soft` | Chips, icon shells, soft highlights |

### Secondary & rules

| Token | Value | Utility | Use |
|-------|-------|---------|-----|
| `--color-moss` | `#4F5A3D` | `text-moss` | Secondary/organic accent (sparingly) |
| `--color-rule` | `rgba(24,21,15,0.14)` | `border-rule` | Default borders on light surfaces |
| `--color-rule-2` | `rgba(24,21,15,0.06)` | `border-rule-2` | Hairline dividers |

On dark bands use `border-white/10` and `bg-white/5` for inset panels.

---

## Typography

Three families, loaded via `next/font/google` and wired to the `--font-*` theme
vars in `layout.tsx`.

| Role | Family | Utility | Notes |
|------|--------|---------|-------|
| Display / headings | **Roboto Slab** | `font-serif` | Auto-applied to `h1`–`h4`. Weights 400/500/700/800 |
| Body | **DM Sans** | `font-sans` | Default body font |
| Labels / eyebrows | **JetBrains Mono** | `font-mono` | Uppercase, tracked out |

### Scale & tracking

- **Display H1** — `text-5xl`/`text-6xl`, `font-bold`, `tracking-[-0.025em]`
- **Section H2** — `text-3xl`/`text-4xl`, `font-bold`, `tracking-[-0.02em]`
- **Card H3** — `text-xl`/`text-2xl`, `font-bold`, `tracking-[-0.02em]`
- **Body** — `text-sm`/`text-base`, `leading-7`/`leading-8`, `text-ink-2`
- Headings default to `letter-spacing: -0.02em` via the base `h1–h4` rule.

### Eyebrow label

The recurring section label. Use the `.eyebrow` class (defined in `globals.css`):

```html
<p class="eyebrow text-hi-deep">How It Works</p>
```

`.eyebrow` = JetBrains Mono · uppercase · `letter-spacing: 0.16em` · `0.6875rem`
· `font-weight: 600` · `color: --ink-3` (override with `text-hi` / `text-hi-deep`).

---

## Texture — the grid

The page background carries a fixed 64px grid at low opacity (set on `body`):

```css
background-image:
  linear-gradient(to right,  rgba(24,21,15,0.04) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(24,21,15,0.04) 1px, transparent 1px);
background-size: 64px 64px;
```

- Light surfaces: grid lines in `rgba(24,21,15,var(--grid-opacity))`
- Dark bands: grid lines in `rgba(255,255,255,var(--grid-opacity))`
- `--grid-size: 64px`, `--grid-opacity: 0.04` (use `0.05` for a 32px inset grid on preview panels)

---

## Geometry

### Radii

| Token | Use |
|-------|-----|
| `rounded-[10px]` | Inset panels, list rows, small controls |
| `rounded-[14px]` | Icon shells, search wrappers, nested cards |
| `rounded-[16px]` | Cards, hero panels, dark bands (the default card radius) |
| `rounded-full` | Buttons, chips, pills |

Never exceed 16px for rectangular surfaces.

### Elevation

Soft, warm shadows — not hard drop shadows:

```
shadow-[0_20px_50px_rgba(24,21,15,0.06)]   /* resting card */
shadow-[0_24px_60px_rgba(24,21,15,0.1)]    /* hover / emphasis */
```

---

## Components

### Buttons

```html
<!-- Primary -->
<a class="rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white
          transition hover:bg-hi-deep">…</a>

<!-- Dark (on paper) -->
<a class="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-[#f5efe2]
          transition hover:bg-hi hover:text-white">…</a>

<!-- Ghost / outline -->
<a class="rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink
          transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep">…</a>
```

Button labels are **DM Sans `font-semibold`** — never slab, never `font-black`.

### Card

```html
<article class="rounded-[16px] border border-rule bg-paper p-6
                shadow-[0_20px_50px_rgba(24,21,15,0.06)]
                transition hover:-translate-y-1 hover:border-hi/40">
  <p class="eyebrow text-hi-deep">Category</p>
  <h3 class="mt-3 font-serif text-2xl font-bold tracking-[-0.02em] text-ink">Title</h3>
  <p class="mt-3 text-sm leading-7 text-ink-2">Body copy…</p>
</article>
```

### Chip / badge

```html
<span class="rounded-full bg-hi-soft px-3 py-1 font-mono text-[0.6875rem]
             font-semibold uppercase tracking-[0.16em] text-hi-deep">6 Topics</span>
```

### Icon shell

```html
<span class="inline-flex h-12 w-12 items-center justify-center rounded-[14px]
             border border-hi/25 bg-hi-soft text-xl text-hi-deep">⛑</span>
```

### Dark band (hero / footer / CTA)

```html
<section class="rounded-[16px] border border-white/10 bg-ink p-8 text-[#f5efe2]">
  <p class="eyebrow text-hi">Eyebrow</p>
  <h1 class="mt-5 font-serif text-5xl font-bold tracking-[-0.025em]">
    Headline <span class="text-hi">accent</span>
  </h1>
  <p class="mt-6 text-[#c9c2b2]">Supporting copy in warm light gray.</p>
</section>
```

### Search field

```html
<div class="rounded-[14px] border border-rule bg-bg p-3">
  <input class="w-full bg-transparent text-sm text-ink outline-none
                placeholder:text-ink-3" placeholder="Search…" />
</div>
```

---

## Do / Don't

| Do | Don't |
|----|-------|
| Headings in Roboto Slab (`font-serif`) | Slab-serif on body or buttons |
| `font-semibold` / `font-bold` for weight | `font-black` (900 — outside loaded range) |
| Warm ink neutrals (`text-ink*`) | Cool `slate-*` / pure grays |
| Orange for action + safety emphasis | Orange as decorative fill |
| 10–16px radii, pill buttons | 2rem+ rounded corners |
| `.eyebrow` for section labels | Ad-hoc uppercase tracking values |

---

## Quick reference

```
Surfaces   bg #F7F7F5 · paper #FFFFFF · dark band #18150F
Ink        #18150F · #3B362C · #6C6557   (light-on-dark: #F5EFE2 · #C9C2B2 · #8C8676)
Highlight  hi #FF5A02 · hi-deep #E14E00 · hi-soft #FFE2CC
Secondary  moss #4F5A3D
Rules      rgba(24,21,15,0.14) · rgba(24,21,15,0.06)
Fonts      Roboto Slab (display) · DM Sans (body) · JetBrains Mono (labels)
Grid       64px · rgba(24,21,15,0.04)
Radii      10 / 14 / 16px · pill
```

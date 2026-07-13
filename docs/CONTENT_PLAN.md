# Content Rollout Plan — Real Toolbox-Talk Articles

Goal: replace the generated placeholder text on every article with **real,
authored training content** grounded in free, public-domain sources
(OSHA / NIOSH / CPWR). One category per session.

- **Target:** real, distinct toolbox-talk topics per category — **flex ~11–16**,
  with ~11 as the floor and more where the governing standard supports genuinely
  distinct talks (distinctness beats count; don't pad).
- **Method:** see [CLAUDE.md](../CLAUDE.md) → "Article-writing methodology".
- **Live status:** see [docs/STATUS.md](./STATUS.md) — the per-session tracker.

Each category, when authored, gets its topic list set to the real ~11 titles and
its slug added to `realContentCategories` (turns off the synthetic 11× expansion).

> ⚠️ All authored content is a **first draft** grounded in public-domain sources.
> A qualified safety professional must review and sign off before crews rely on it.

---

## Jurisdiction — RESOLVED: US / OSHA (2026-07-12)

**Decision:** this is a US construction safety app, so **OSHA 29 CFR is the
governing source for every category** — no exceptions. The two categories with
UK-flavored names are authored to their OSHA equivalents:
- **COSHH (Hazardous Substances)** → OSHA Hazard Communication **1910.1200**
  (GHS labels, safety data sheets, written HazCom program).
- **Manual Handling** → **NIOSH Lifting Equation** / OSHA ergonomics guidance.

If the audience ever becomes UK/mixed, revisit those two against HSE COSHH /
MHOR at SME review. Until then, US/OSHA governs and nothing is jurisdiction-blocked.

---

## Categories (grouped as they appear in the app)

Legend: ✅ done · 🟡 in progress · ⬜ pending

### Site & Structural Work
| # | Category | Slug | Primary source | Status |
|---|----------|------|----------------|--------|
| 1 | Confined Space Safety | `confined-space` | OSHA 1926 Subpart AA / 1910.146 | ✅ (11 topics) |
| 2 | Working at Heights | `working-at-heights` | OSHA 1926 Subpart M (Fall Protection) | ⬜ |
| 3 | Excavation Safety | `excavation-safety` | OSHA 1926 Subpart P | ⬜ |
| 4 | Construction Safety | `construction-safety` | OSHA 1926 (general) | ⬜ |
| 5 | Demolition Safety | `demolition-safety` | OSHA 1926 Subpart T | ⬜ |
| 6 | Site Access and Public Protection | `site-access-and-public-protection` | OSHA 1926 Subpart G | ⬜ |
| 7 | Housekeeping | `housekeeping` | OSHA 1926.25 / 1910.22 | ⬜ |

### Health & Hazardous Materials
| # | Category | Slug | Primary source | Status |
|---|----------|------|----------------|--------|
| 8 | Asbestos Awareness | `asbestos-awareness` | OSHA 1926.1101 | ⬜ |
| 9 | COSHH (Hazardous Substances) | `coshh-hazardous-substances` | OSHA HazCom 1910.1200 | ⬜ |
| 10 | Manual Handling | `manual-handling` | NIOSH Lifting Equation / OSHA ergonomics | ⬜ |
| 11 | Heat and Cold Stress Prevention | `heat-and-cold-stress-prevention` | OSHA heat illness / NIOSH | ⬜ |
| 12 | Environmental Controls and Spill Response | `environmental-controls-and-spill-response` | EPA SPCC / OSHA HAZWOPER 1910.120 | ⬜ |
| 13 | First Aid | `first-aid` | OSHA 1926.50 / 1910.151 | ⬜ |

### Fire & Hot Work
| # | Category | Slug | Primary source | Status |
|---|----------|------|----------------|--------|
| 14 | Fire Safety | `fire-safety` | OSHA 1926 Subpart F / 1910 Subpart L | ⬜ |
| 15 | Fire Extinguisher Safety | `fire-extinguisher-safety` | OSHA 1910.157 | ⬜ |
| 16 | Welding and Hot Work | `welding-and-hot-work` | OSHA 1926 Subpart J / 1910 Subpart Q | ⬜ |
| 17 | Compressed Gas and Air Tool Safety | `compressed-gas-and-air-tool-safety` | OSHA 1926.302 / 1910.101 | ⬜ |

### Equipment & Vehicles
| # | Category | Slug | Primary source | Status |
|---|----------|------|----------------|--------|
| 18 | Electrical Safety | `electrical-safety` | OSHA 1926 Subpart K | ⬜ |
| 19 | Forklift Safety | `forklift-safety` | OSHA 1910.178 (Powered Industrial Trucks) | ⬜ |
| 20 | Vehicle and Driver Safety | `vehicle-and-driver-safety` | OSHA 1926 Subpart O | ⬜ |
| 21 | Rigging and Material Handling Equipment | `rigging-and-material-handling-equipment` | OSHA 1926 Subpart H / CC | ⬜ |

### General Safety
| # | Category | Slug | Primary source | Status |
|---|----------|------|----------------|--------|
| 22 | PPE (Personal Protective Equipment) | `ppe` | OSHA 1926 Subpart E / 1910 Subpart I | ⬜ |
| 23 | Slips, Trips and Falls | `slips-trips-and-falls` | OSHA 1910 Subpart D (Walking-Working Surfaces) | ⬜ |
| 24 | Accident Reporting | `accident-reporting` | OSHA 1904 (Recordkeeping) | ⬜ |

---

## Recommended priority order

High-fatality / high-frequency first:

1. Confined Space ✅
2. Working at Heights (falls are the #1 construction killer)
3. Electrical Safety
4. Excavation Safety
5. Fire Safety
6. PPE
7. Forklift Safety
8. Welding and Hot Work
9. …then the remainder by group.

Adjust freely — the order is a recommendation, not a constraint.

---

## Per-category checklist (copy into STATUS.md when starting one)

- [ ] Define the ~11 real topic titles (grounded in the primary source)
- [ ] Research each subtopic (capture thresholds, standard cites, controls, roles)
- [ ] Author all topics into `src/lib/topic-content.ts` (`authoredTopics`)
- [ ] Set the category's `topics: [...]` in `src/lib/training-data.ts`
- [ ] Add the slug to `realContentCategories`
- [ ] `npx tsc --noEmit` clean + `npx next build` clean
- [ ] All topic routes 200 and rendering authored content
- [ ] Flag for qualified-safety-professional review

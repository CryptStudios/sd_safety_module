# Content Rollout — Status

Session-by-session tracker for authoring real article content.
Plan: [docs/CONTENT_PLAN.md](./CONTENT_PLAN.md) · Method: [CLAUDE.md](../CLAUDE.md).

**Progress: 7 / 24 categories authored (29%). 6 SME-reviewed ✅; Forklift Safety pending SME review.**

Update this file at the end of every session (`/end-session`).

---

## Current / next up

- **Next category:** Welding and Hot Work (`welding-and-hot-work`) — pending.
  (#8 in the priority order; OSHA 1926 Subpart J / 1910 Subpart Q.)
- **Blocker / decision:** confirm US vs. UK jurisdiction (affects COSHH, Manual
  Handling — see plan). All 7 authored categories to date were authored to OSHA.

---

## Completed categories

### ✅ Forklift Safety — `forklift-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Powered Industrial Truck Types and Classifications
  2. Operator Training, Evaluation, and Authorization
  3. Daily Pre-Operation Inspection
  4. Understanding the Stability Triangle
  5. Load Capacity, Data Plates, and Center of Gravity
  6. Safe Traveling — Speed, Visibility, Ramps, and Grades
  7. Load Handling — Lifting, Stacking, and Tiering
  8. Pedestrian Safety and Struck-By Prevention
  9. Loading Docks, Trailers, and Rail Cars
  10. Fueling, Battery Charging, and LP Gas Safety
  11. Attachments, Modifications, and Removing a Truck from Service
- **Sources:** OSHA 29 CFR 1910.178 (Powered Industrial Trucks) — (a) modifications/
  attachments & marking, (b)/(c) type & power designations and hazardous locations,
  (g) battery charging, (k)/(m) trucks/docks/traveling & load handling protections,
  (l) operator training/evaluation, (n) traveling, (o) loading, (p) removing from
  service, (q)(7) daily examination; ASME B56.1 (data plate / stability / load center).
- **Scope note:** authored at the powered-industrial-truck operating level; deep
  battery-room electrical and LOTO detail stays in Electrical Safety, and rigging/
  sling detail in Rigging & Material Handling — cross-referenced, not duplicated.
- **Verified:** tsc clean (after clearing stale `.next/types` duplicates) · `next
  build` clean (all pages prerender) · 11 exported HTML files in
  `out/training/forklift-safety/` · authored content present (`1910.178`, `stability
  triangle`, `24 inches`, `load center`, `trailer stands`, `hydrogen`), placeholder
  `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

### ✅ PPE (Personal Protective Equipment) — `ppe`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Hazard Assessment and Selecting the Right PPE
  2. Head Protection — Hard Hats
  3. Eye and Face Protection
  4. Hearing Protection
  5. Hand and Arm Protection
  6. Foot and Leg Protection
  7. Respiratory Protection
  8. High-Visibility Clothing
  9. Protective Clothing for Skin and Body
  10. Fall Protection Harnesses as PPE
  11. Inspecting, Maintaining, and Replacing PPE
- **Sources:** OSHA 29 CFR 1926 Subpart E (§95 general/employer duty & payment,
  §96 foot, §100 head, §101 hearing, §102 eye/face, §103 respiratory) + 1910
  Subpart I (§132 hazard assessment, §133 eye/face, §134 respiratory, §135 head,
  §136 foot, §138 hand); 1926.52 (noise) / 1910.95 (hearing conservation);
  1926.353 (welding clothing); 1926.502(d) (fall arrest); consensus standards —
  ANSI Z89.1 (hard hats), Z87.1 (eye/face), ANSI/ISEA 105 (cut), 107 (hi-vis),
  ASTM F2413 (footwear), MUTCD Part 6, NFPA 70E (arc rating).
- **Scope note:** PPE-level treatment; deep fall-arrest system/anchorage/rescue
  stays in Working at Heights, and electrical insulating PPE detail in Electrical
  Safety — cross-referenced, not duplicated.
- **Verified:** tsc clean · `next build` clean (all pages prerender) · 11 exported
  HTML files in `out/training/ppe/` · authored content present (`ASTM F2413`,
  `1910.134`, `85 dBA`, `ANSI/ISEA 107`, `dorsal D-ring`, `cal/cm²`), placeholder
  `plain site language` gone.
- **SME review:** ✅ complete (2026-07-12).

### ✅ Fire Safety — `fire-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. The Fire Triangle and Classes of Fire
  2. Recognizing Fire Hazards on Site
  3. Storing Flammable and Combustible Liquids
  4. Housekeeping and Combustible Debris Control
  5. Controlling Ignition Sources and Hot Work
  6. Temporary Heating Devices
  7. The Site Fire Prevention Plan
  8. Portable Fire Extinguishers — Classes and Placement
  9. Fire Alarm and Detection Systems
  10. Exit Routes and Means of Egress
  11. Evacuation, Alarms, and Assembly Points
- **Sources:** OSHA 29 CFR 1926 Subpart F (Fire Protection & Prevention);
  §150 (fire protection program, extinguisher placement/travel distance, alarm),
  §151 (ignition hazards), §152 (flammable/combustible liquids, cabinets),
  §154 (temporary heating devices), §352 (hot work); §1926.25 (housekeeping);
  1910 Subpart L — §157 (portable extinguishers), §164/.165 (detection/alarm),
  §36–37 (means of egress), §38 (emergency action plan), §39 (fire prevention plan).
- **Scope note:** kept at the fire-prevention-program level; extinguisher *use*
  (PASS) and full hot-work permitting deferred to their dedicated categories
  (#15 Fire Extinguisher Safety, #16 Welding & Hot Work).
- **Verified:** tsc clean · `next build` clean (all pages prerender) · 11 exported
  HTML files in `out/training/fire-safety/` · authored content present
  (`flash point`, `1926.152`, `1910.38`, `35 feet`), placeholder
  `plain site language` gone.
- **SME review:** ✅ complete (2026-07-12).

### ✅ Excavation Safety — `excavation-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Recognizing Excavation and Trench Hazards
  2. How and Why Cave-Ins Happen
  3. Soil Classification and Testing
  4. Sloping and Benching Systems
  5. Shoring Systems
  6. Trench Boxes and Shield Systems
  7. The Competent Person and Daily Inspections
  8. Safe Access and Egress
  9. Locating and Working Around Underground Utilities
  10. Spoil Piles, Surcharge Loads, and Edge Protection
  11. Hazardous Atmospheres, Water, and Emergency Response
- **Sources:** OSHA 29 CFR 1926 Subpart P (Excavations); §650 (definitions),
  §651 (specific requirements: utilities, access/egress, atmospheres, water,
  spoil, inspections), §652 (protective systems); Appendices A (soil
  classification), B (sloping/benching), C/D (timber/aluminum hydraulic shoring);
  OSHA Trenching & Excavation eTool; APWA uniform color code.
- **Verified:** tsc clean · build clean (all pages prerender) · 11 built HTML
  files · authored content present (`tension crack`, `APWA`, `19.5`), placeholder
  `plain site language` gone.
- **SME review:** ✅ complete (2026-07-12).

### ✅ Electrical Safety — `electrical-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Recognizing Electrical Hazards on Site
  2. Shock, Arc Flash, and Arc Blast
  3. Overhead Power Lines and Safe Approach Distances
  4. Grounding and Bonding Basics
  5. GFCIs and the Assured Equipment Grounding Program
  6. Inspecting Cords, Plugs, and Portable Power Tools
  7. Lockout/Tagout for Electrical Work
  8. Working On or Near Energized Parts
  9. Temporary Wiring and Extension Cords
  10. Electrical PPE and Insulated Tools
  11. Responding to an Electrical Incident
- **Sources:** OSHA 29 CFR 1926 Subpart K (Electrical); 1926.404/.405/.416/.417;
  1910.147 (Lockout/Tagout); NFPA 70E approach/arc-flash boundaries; OSHA 1904.
- **Verified:** tsc clean · build clean (1872 pages) · 11 built HTML files ·
  authored content present (`live-dead-live`), placeholder `plain site language` gone.
- **SME review:** ✅ complete (2026-07-12).

### ✅ Working at Heights — `working-at-heights`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Recognizing Fall Hazards
  2. Guardrail Systems
  3. Personal Fall Arrest Systems
  4. Choosing and Using Anchorage Points
  5. Ladder Safety
  6. Scaffold Safety
  7. Aerial and Scissor Lift Safety
  8. Roof and Leading-Edge Work
  9. Floor Holes and Wall Openings
  10. Inspecting Fall Protection Equipment
  11. Rescue and Suspension Trauma After a Fall
- **Sources:** OSHA 29 CFR 1926 Subpart M (Fall Protection), Subpart X (ladders),
  Subpart L (scaffolds); OSHA 1926.502/501; NIOSH.
- **Verified:** tsc clean · build clean (1945 pages) · all 11 routes 200 · authored.
- **SME review:** ✅ complete (2026-07-12).

### ✅ Confined Space Safety — `confined-space`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Hazard Identification in Confined Spaces
  2. Permit-Required vs. Non-Permit Confined Spaces
  3. Atmospheric Testing and Air Monitoring
  4. Ventilating a Confined Space
  5. Isolation and Lockout Before Entry
  6. Engulfment and Entrapment Hazards
  7. The Confined Space Entry Permit
  8. Authorized Entrant Duties
  9. Attendant (Hole Watch) Duties
  10. Entry Supervisor Duties
  11. Emergency Rescue and Retrieval Systems
- **Sources:** OSHA 29 CFR 1926 Subpart AA / 1910.146; NIOSH/CPWR toolbox talks.
- **Verified:** tsc clean · build clean (2011 pages) · all 11 routes 200 · authored.
- **SME review:** ✅ complete (2026-07-12).

---

## Session log

| Date | Category | Topics done | Notes |
|------|----------|-------------|-------|
| 2026-07-12 | Confined Space Safety | 11 | Built the content engine (authoredTopics, ArticleBlock, realContentCategories) + first authored category. |
| 2026-07-12 | Working at Heights | 11 | Second category. OSHA Subpart M/X/L. Build 1945 pages. |
| 2026-07-12 | Electrical Safety | 11 | Third category. OSHA Subpart K + LOTO 1910.147 + NFPA 70E boundaries. Build 1872 pages. |
| 2026-07-12 | Excavation Safety | 11 | Fourth category. OSHA Subpart P (§650–652 + App A/B/C/D). Soil classes, slopes, shoring/shields, 811, competent person. |
| 2026-07-12 | Fire Safety | 11 | Fifth category. OSHA Subpart F (§150–152/.154/.352, .25) + 1910 Subpart L (§36–39, §157, §164/.165). Fire triangle/classes, flammable storage, hot work, heaters, prevention plan, egress/EAP. Extinguisher use + hot-work permits deferred to dedicated categories. |
| 2026-07-12 | PPE | 11 | Sixth category. OSHA 1926 Subpart E + 1910 Subpart I. Hazard assessment/hierarchy lead, head/eye/hearing/hand/foot/respiratory, hi-vis, skin & body clothing, harness-as-PPE, inspect/replace. ANSI/ASTM/MUTCD/NFPA 70E consensus standards. **All 6 authored categories SME-reviewed ✅ this date.** |
| 2026-07-12 | Forklift Safety | 11 | Seventh category. OSHA 1910.178 (Powered Industrial Trucks) + ASME B56.1. Truck types/designations, operator training/eval, daily inspection, stability triangle, capacity/data plate/load center, traveling & ramps, load handling/tiering, pedestrian/struck-by, docks/trailers/rail cars, fuel/battery/LP gas, attachments & removal from service. Blocker doesn't apply (OSHA basis). Progress 7/24 (29%). SME review pending. |

---

## How to update this file

At `/end-session`:
1. Move the finished category into **Completed categories** with its topic list,
   sources, verification results, and SME-review status.
2. Update **Progress: N / 24** and **Current / next up**.
3. Add a row to the **Session log**.

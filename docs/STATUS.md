# Content Rollout — Status

Session-by-session tracker for authoring real article content.
Plan: [docs/CONTENT_PLAN.md](./CONTENT_PLAN.md) · Method: [CLAUDE.md](../CLAUDE.md).

**Progress: 5 / 24 categories authored (~21%).**

Update this file at the end of every session (`/end-session`).

---

## Current / next up

- **Next category:** PPE (`ppe`) — pending. (#6 in the priority order.)
- **Blocker / decision:** confirm US vs. UK jurisdiction (affects COSHH, Manual
  Handling — see plan). Confined Space, Working at Heights, Electrical Safety,
  Excavation Safety, and Fire Safety were authored to OSHA.

---

## Completed categories

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
- **SME review:** ⬜ pending.

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
- **SME review:** ⬜ pending.

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
- **SME review:** ⬜ pending.

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
- **SME review:** ⬜ pending.

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
- **SME review:** ⬜ pending.

---

## Session log

| Date | Category | Topics done | Notes |
|------|----------|-------------|-------|
| 2026-07-12 | Confined Space Safety | 11 | Built the content engine (authoredTopics, ArticleBlock, realContentCategories) + first authored category. |
| 2026-07-12 | Working at Heights | 11 | Second category. OSHA Subpart M/X/L. Build 1945 pages. |
| 2026-07-12 | Electrical Safety | 11 | Third category. OSHA Subpart K + LOTO 1910.147 + NFPA 70E boundaries. Build 1872 pages. |
| 2026-07-12 | Excavation Safety | 11 | Fourth category. OSHA Subpart P (§650–652 + App A/B/C/D). Soil classes, slopes, shoring/shields, 811, competent person. |
| 2026-07-12 | Fire Safety | 11 | Fifth category. OSHA Subpart F (§150–152/.154/.352, .25) + 1910 Subpart L (§36–39, §157, §164/.165). Fire triangle/classes, flammable storage, hot work, heaters, prevention plan, egress/EAP. Extinguisher use + hot-work permits deferred to dedicated categories. |

---

## How to update this file

At `/end-session`:
1. Move the finished category into **Completed categories** with its topic list,
   sources, verification results, and SME-review status.
2. Update **Progress: N / 24** and **Current / next up**.
3. Add a row to the **Session log**.

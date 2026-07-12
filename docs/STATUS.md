# Content Rollout — Status

Session-by-session tracker for authoring real article content.
Plan: [docs/CONTENT_PLAN.md](./CONTENT_PLAN.md) · Method: [CLAUDE.md](../CLAUDE.md).

**Progress: 3 / 24 categories authored.**

Update this file at the end of every session (`/end-session`).

---

## Current / next up

- **Next category:** Excavation Safety (`excavation-safety`) — pending. (#4 in the priority order.)
- **Blocker / decision:** confirm US vs. UK jurisdiction (affects COSHH, Manual
  Handling — see plan). Confined Space, Working at Heights, and Electrical Safety
  were authored to OSHA.

---

## Completed categories

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

---

## How to update this file

At `/end-session`:
1. Move the finished category into **Completed categories** with its topic list,
   sources, verification results, and SME-review status.
2. Update **Progress: N / 24** and **Current / next up**.
3. Add a row to the **Session log**.

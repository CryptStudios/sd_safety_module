# Content Rollout — Status

Session-by-session tracker for authoring real article content.
Plan: [docs/CONTENT_PLAN.md](./CONTENT_PLAN.md) · Method: [CLAUDE.md](../CLAUDE.md).

**Progress: 12 / 24 categories authored (50%). 6 SME-reviewed ✅; Forklift Safety, Welding & Hot Work, Fire Extinguisher Safety, Compressed Gas & Air Tool Safety, Vehicle & Driver Safety, and Rigging & Material Handling Equipment pending SME review.**

> **Convention update (2026-07-12): topic count is now FLEX (~11–16), not fixed at 11.**
> ~11 is the floor; categories flex up where the governing standard supports more
> distinct, non-overlapping talks. Expanded 9 authored categories (+25 topics) to
> match: Welding 15, Working at Heights 15, Electrical 14, Forklift 14, Fire Safety
> 14, Confined Space 14, Compressed Gas & Air Tool 14, Excavation 12, PPE 12; Fire
> Extinguisher stays 11 (narrow 1910.157). **Authored topics total: 135.** The
> +25 topics need SME review along with their categories.

Update this file at the end of every session (`/end-session`).

---

## Current / next up

- **Next category:** open — top remaining OSHA-based items are Construction Safety
  (`construction-safety`, OSHA 1926 general), Demolition Safety
  (`demolition-safety`, Subpart T), Site Access & Public Protection
  (`site-access-and-public-protection`, Subpart G), Housekeeping (`housekeeping`,
  1926.25 / 1910.22), and Slips/Trips/Falls (`slips-trips-and-falls`, 1910
  Subpart D). All 12 authored categories to date are OSHA-based.
- **Blocker / decision:** confirm US vs. UK jurisdiction (affects COSHH, Manual
  Handling — see plan). Does not affect the OSHA-based categories authored so far.

---

## Completed categories

### ✅ Rigging and Material Handling Equipment — `rigging-and-material-handling-equipment`
- **Session:** 2026-07-12
- **Topics authored:** 14 (real toolbox-talk list, flexed above the 11 floor —
  Subparts H + CC support it; synthetic expansion disabled)
  1. Rigging Basics and the Qualified Rigger
  2. Sling Types and How to Choose One
  3. Wire Rope Slings — Inspection and Removal Criteria
  4. Alloy Steel Chain Slings — Inspection and Use
  5. Synthetic Web and Round Slings — Inspection and Protection
  6. Rated Capacity, Sling Angles, and Load Charts
  7. Hitches — Vertical, Choker, and Basket
  8. Rigging Hardware — Shackles, Hooks, and Eyebolts
  9. Determining Load Weight and Center of Gravity
  10. Planning the Lift — The Lift Plan and Roles
  11. Crane Signals and Communication
  12. Working Around Suspended Loads and Tag Lines
  13. Mobile Crane Setup — Ground Conditions, Outriggers, and Power Lines
  14. Material Storage, Stacking, and Housekeeping
- **Sources:** OSHA 29 CFR 1926.251 (rigging equipment for material handling —
  inspect before use each shift, defective removed, rated-capacity ID tags; wire
  rope slings 10 randomly-distributed broken wires / 5 in one strand per rope lay,
  kink/crush/birdcage/heat, 1/3-diameter wear, hook 15%/10°, clips "never saddle a
  dead horse"; alloy steel chain slings — alloy only for overhead, ID tag
  size/grade/capacity/reach, wear Table H-2, thorough periodic inspection ≤12 mo
  with records; synthetic web removal criteria — acid/caustic burns, melting/
  charring, snags/tears/cuts, broken stitches, distorted fittings; shackles/hooks
  Table H-19); Subpart CC — §1402 ground conditions (firm/drained/graded, controlling
  entity hazard notice), §1404/1425 qualified rigger + fall zone, §1408 Table A
  power-line clearance (≤50 kV = 10 ft, 50–200 kV = 15 ft, assume energized),
  §1419–1422 signal person & Standard Method (ASME B30) hand signals, §1424 swing-
  radius barricade, §1427 operator qualification; §1926.250 storage/stacking (max
  floor load posted, brick ≤7 ft + 2 in/ft taper above 4 ft, block half-block taper
  above 6 ft, lumber 16 ft manual / 20 ft forklift + nails removed, bags cross-keyed
  every 10 layers); §1926.25 housekeeping; ASME B30 series (consensus). Sling-angle
  factors (60° ≈ 1.15×, 45° ≈ 1.41×, 30° ≈ 2×; avoid <30°); hitch capacities
  (vertical 100%, choker ~75–80%, basket up to 2× vertical); material densities
  (steel ≈490, concrete ≈150, water ≈62.4 lb/ft³).
- **Scope note:** owns slings, rigging hardware, cranes/derricks, hoists, and
  material storage/stacking. Powered industrial trucks cross-ref Forklift Safety
  (#19); earthmoving/haul vehicles cross-ref Vehicle & Driver Safety (#20);
  electrical approach distances cross-ref Electrical Safety — referenced, not
  duplicated.
- **Verified:** tsc clean · `next build` clean (1205 pages generated, all
  prerender) · 14 exported HTML files in
  `out/training/rigging-and-material-handling-equipment/` · authored content present
  (`1926.251`, `randomly distributed`, `rope lay`, `never saddle a dead horse`,
  `Table A`, `Standard Method`, `fall zone`, `490 pounds`, brick `taper`),
  placeholder `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

### ✅ Vehicle and Driver Safety — `vehicle-and-driver-safety`
- **Session:** 2026-07-12
- **Topics authored:** 13 (real toolbox-talk list, flexed above the 11 floor —
  Subpart O supports it; synthetic expansion disabled)
  1. Motor Vehicles on Site — Driver Duties and Rules of the Road
  2. Pre-Operation and Daily Vehicle Inspections
  3. Seat Belts and Rollover Protective Structures (ROPS)
  4. Backing Up — Blind Spots, Spotters, and Hand Signals
  5. Backup Alarms and Warning Devices
  6. Haul Roads, Access Roads, and Grades
  7. Dump Trucks and Raised-Bed Hazards
  8. Earthmoving and Material-Handling Equipment
  9. Working Around Mobile Equipment — Struck-By and Caught-Between
  10. Loading, Unloading, and Securing Loads
  11. Highway Work Zones and Public Traffic (Flaggers)
  12. Parking, Shutdown, and Securing Equipment
  13. Driver Fatigue, Distraction, and Fitness to Operate
- **Sources:** OSHA 29 CFR 1926 Subpart O — §600 (equipment general: parking/
  shutdown, blades-down, wheel chocks on grade, unattended-at-night lights/
  reflectors/barricades), §601 (motor vehicles: service/emergency/parking brakes,
  lights, obstructed-rear-view reverse-alarm-or-spotter rule, cab shields, secured
  tools/material, the (b)(14) start-of-shift check list), §602 (material-handling/
  earthmoving: seat belts to SAE J386, ROPS ref, access roads/grades, horns on
  bi-directional machines + reverse alarms audible above surrounding noise);
  Subpart W §1000–1003 (ROPS — scrapers/loaders/dozers/tractors/graders, sideboom
  exception, seat belts required with ROPS); Subpart G + MUTCD Part 6 (work-zone
  layout, flaggers, STOP/SLOW paddle, ANSI/ISEA 107 hi-vis); FMCSA hours-of-service
  (11-hr driving / 14-hr window / 30-min break / 60–70-hr week) and 49 CFR
  392.80/.82 (texting & hand-held ban for CMV drivers).
- **Scope note:** owns on-site vehicle + driver operation. Powered industrial
  trucks (forklifts) cross-ref Forklift Safety; crane/sling rigging cross-refs
  Rigging & Material Handling (#21); public-protection barricades/pedestrian
  routing cross-refs Site Access (#6) — referenced, not duplicated.
- **Verified:** tsc clean · `next build` clean (all pages prerender) · 13 exported
  HTML files in `out/training/vehicle-and-driver-safety/` · authored content
  present (`1926.601(b)(14)`, `SAE J386`, `audible above the surrounding noise`,
  `MUTCD`, `11 hours maximum driving`), placeholder `plain site language` gone ·
  live routes 200.
- **SME review:** ⏳ pending.

### ✅ Compressed Gas and Air Tool Safety — `compressed-gas-and-air-tool-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Compressed Gas Cylinder Hazards
  2. Storing Compressed Gas Cylinders
  3. Moving and Transporting Cylinders
  4. Cylinder Valves, Regulators, and Connections
  5. Compressed Air Hazards and the 30 PSI Cleaning Limit
  6. Pneumatic Tool Safety Basics
  7. Air Hoses, Couplings, and Whip Checks
  8. Nail Guns and Pneumatic Fasteners
  9. Pneumatic Grinders and Abrasive Wheels
  10. Air Compressors and Receivers
  11. Inspecting and Maintaining Air Tools and Hoses
- **Sources:** OSHA 29 CFR 1926.302 (pneumatic power tools — positive hose
  connection, percussion-tool retainers, >100 psi nailer muzzle safety, hose
  design), 1926.303 (abrasive wheels — ring test, guards, work rest 1/8 in,
  tongue guard 1/4 in, max RPM), 1910.242(b) / 1926.302(b)(4) (compressed air
  cleaning <30 psi + chip guarding + PPE), 1910.101 / CGA P-1 (cylinder handling,
  storage, 20 ft O₂/fuel separation); NIOSH/OSHA Nail Gun Safety guide (trigger
  types); air embolism/injection injury hazard; ASME receiver relief valves.
- **Scope note:** general compressed-gas cylinders + pneumatic tools. Welding-
  specific oxy-fuel/fuel-gas cylinder, acetylene ≤15 psig, and flashback detail
  cross-refs Welding & Hot Work; bench grinding also touched under tool safety.
- **Verified:** tsc clean · `next build` clean (1373 pages — synthetic expansion
  off for this category) · 11 exported HTML files in
  `out/training/compressed-gas-and-air-tool-safety/` · authored content present
  (`30 psi`, `1926.302`, `1/8 inch`, `whip check`, `air embolism`, `20 feet`),
  placeholder `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

### ✅ Fire Extinguisher Safety — `fire-extinguisher-safety`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Classes of Fire — A, B, C, D, and K
  2. Types of Portable Extinguishers and What They Put Out
  3. Reading the Label — Ratings and Listings
  4. Size-Up — When to Fight a Fire and When to Get Out
  5. The PASS Technique
  6. Selecting and Distributing Extinguishers
  7. Placement, Mounting, and Access
  8. The Monthly Visual Inspection
  9. Annual Maintenance and Recharging
  10. Hydrostatic Testing Schedules
  11. Employee Training and the Extinguisher Program
- **Sources:** OSHA 29 CFR 1910.157 — (c) placement/mounting/access, (d) selection
  & distribution + travel distances (Class A ≤75 ft, Class B ≤50 ft, Class D ≤75 ft),
  (e) monthly visual inspection + annual maintenance/recharge, (f) hydrostatic
  testing intervals (water/foam/wet chem/CO₂ 5 yr; dry chemical/halon/dry powder
  12 yr), (g) training at hire + annually and the total-evacuation option;
  NFPA 10 (consensus) — mounting heights (≤40 lb top ≤5 ft; >40 lb top ≤3½ ft),
  Class K ≤30 ft, ratings (1A ≈ 1¼ gal water; Class B ≈ sq ft). PASS technique.
- **Scope note:** owns extinguisher **use** (PASS, size-up) that Fire Safety (#14)
  deferred here. Class K/D/C special hazards woven into classes/types/selection.
  Emergency action plan cross-refs Fire Safety.
- **Verified:** tsc clean · `next build` clean (1472 pages, all prerender) · 11
  exported HTML files in `out/training/fire-extinguisher-safety/` · authored
  content present (`75 feet`, `50 feet`, `1910.157`, `PASS`, `hydrostatic`,
  `6 to 8 feet`), placeholder `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

### ✅ Welding and Hot Work — `welding-and-hot-work`
- **Session:** 2026-07-12
- **Topics authored:** 11 (real toolbox-talk list, 11× expansion disabled)
  1. Hot Work Hazards and When a Permit Is Required
  2. Preparing the Work Area — Fire Prevention
  3. The Fire Watch and Post-Work Monitoring
  4. Oxygen-Fuel Gas Welding and Cutting
  5. Compressed Gas Cylinders — Storage, Handling, and Transport
  6. Regulators, Hoses, Torches, and Flashback Prevention
  7. Arc Welding and Cutting Safety
  8. Welding Fumes, Gases, and Ventilation
  9. Hot Work in Confined Spaces
  10. Cutting and Welding on Preservative Coatings and Containers
  11. PPE and Radiation Protection for Welders
- **Sources:** OSHA 29 CFR 1926 Subpart J — §350 (gas welding/cutting, cylinders,
  20 ft O₂/fuel separation), §351 (arc welding — holders, cables, grounding),
  §352 (fire prevention, 35 ft rule), §353 (ventilation/fumes, confined spaces),
  §354 (preservative coatings); 1910 Subpart Q — §252 (fire prevention, hot work
  permit, fire watch ≥30 min, health/ventilation), §253 (oxy-fuel), §254 (arc).
  Acetylene ≤15 psig; filter-lens shade guidance; hexavalent chromium/manganese/
  zinc/cadmium fume hazards.
- **Scope note:** this category now **owns the hot-work permit and fire-watch
  detail** that Fire Safety (#14) explicitly deferred here. Welding-specific
  cylinder/gas content stays here; general compressed-gas & air-tool detail
  cross-refs #17. Fume-source specifics here; respirator selection/fit cross-refs
  PPE. Confined-space entry program cross-refs Confined Space Safety.
- **Verified:** tsc clean · `next build` clean (all pages prerender) · 11 exported
  HTML files in `out/training/welding-and-hot-work/` · authored content present
  (`15 psig`, `20 feet`, `30 minutes`, `hexavalent chromium`, `1926.352`,
  `1926.354`, `35 feet`), placeholder `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

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
| 2026-07-12 | Welding and Hot Work | 11 | Eighth category. OSHA 1926 Subpart J (§350–354) + 1910 Subpart Q (§252–254). Hot work permit & when required, 35 ft area prep, fire watch + ≥30 min post-work, oxy-fuel (acetylene ≤15 psig), cylinder storage (20 ft O₂/fuel), regulators/hoses/flashback arrestors, arc welding grounding, fumes (Cr(VI)/Mn/Zn) & ventilation, hot work in confined spaces, coatings/containers (§354), welder PPE & filter shades. Owns hot-work permit + fire-watch detail deferred from Fire Safety. Progress 8/24 (33%). SME review pending. |
| 2026-07-12 | Fire Extinguisher Safety | 11 | Ninth category. OSHA 1910.157 (c–g) + NFPA 10. Classes A/B/C/D/K, extinguisher types/agents, ratings/labels, size-up (fight vs evacuate), PASS, selection & distribution (75/50/30 ft travel), placement/mounting heights, monthly visual inspection, annual maintenance/recharge, hydrostatic intervals (5/12 yr), training (hire + annual) & total-evacuation option. Owns extinguisher use/PASS deferred from Fire Safety. Progress 9/24 (38%). SME review pending. |
| 2026-07-12 | Flex expansion (9 categories) | +25 | Switched topic-count convention from fixed-11 to FLEX (~11–16). Expanded 9 authored categories with distinct, source-grounded topics drafted by parallel subagents and fact-reviewed before wiring: Welding +4 (resistance/plasma/brazing/shock), Heights +4 (travel-restraint/nets/warning-lines/skylights), Electrical +3 (70E boundaries/EEWP/stored energy), Forklift +3 (tip-over survival/parking/elevating personnel), Fire Safety +3 (standpipes/fixed suppression/brigades), Confined Space +3 (reclassification/host-contractor/rescue-service eval), Compressed Gas +3 (HAVS/abrasive blasting/air hoists), Excavation +1 (mobile equipment at edge), PPE +1 (over-water life jackets). Build 1398 pages. Total authored topics 135. CLAUDE.md + CONTENT_PLAN updated. |
| 2026-07-12 | Compressed Gas and Air Tool Safety | 11 | Tenth category. OSHA 1926.302/.303 + 1910.101/.242(b) + CGA P-1 + NIOSH nail-gun guide. Cylinder hazards/storage/transport/valves (20 ft O₂/fuel), compressed-air injection & <30 psi cleaning limit, pneumatic tool basics (positive connection, retainers), hoses/couplings/whip checks, nailers (trigger types, >100 psi muzzle safety), abrasive wheels (ring test, guards, 1/8 in rest), compressors/receivers (relief valves, draining), inspection/depressurize-before-service. Welding oxy-fuel cylinder detail cross-ref'd, not duplicated. Progress 10/24 (42%). SME review pending. |
| 2026-07-12 | Vehicle and Driver Safety | 13 | Eleventh category. OSHA 1926 Subpart O (§600–602) + Subpart W (ROPS §1000–1003) + Subpart G/MUTCD Part 6 (flaggers) + FMCSA HOS/texting ban. Motor-vehicle equipment & driver duties, (b)(14) shift inspection, ROPS + seat belts (SAE J386, don't jump in a rollover), backing/spotters/hand signals, reverse alarms "audible above surrounding noise", haul roads/grades/berms, dump-truck raised-bed (overhead lines, tip-over, blocked bed), earthmoving 1926.602, struck-by/caught-between blind zones, load chocking/fall-zone/securement, work-zone layout & flaggers (STOP/SLOW, hi-vis), parking/shutdown (blades down, chock on grade, night lighting), fatigue (11/14/30-min/60–70) + distraction + fitness. Flexed to 13 topics. Forklift/rigging/public-protection cross-ref'd. Progress 11/24 (46%). SME review pending. |
| 2026-07-12 | Rigging and Material Handling Equipment | 14 | Twelfth category — **50% milestone**. OSHA 1926.251 (slings/rigging) + Subpart CC (cranes) + 1926.250/.25 (storage/housekeeping) + ASME B30. Qualified rigger & inspect-each-shift, sling types/selection + ID tags, wire-rope removal (10/5 broken wires per lay, "never saddle a dead horse"), alloy chain (alloy-only overhead, ≤12-mo periodic inspection + records, Table H-2 wear), synthetic web/round removal criteria + edge protection, sling angles (60/45/30° = 1.15/1.41/2×; avoid <30°) & load charts, hitches (vertical 100% / choker ~75–80% / basket up to 2×), hardware (shackles Table H-19, hooks 15%/10°/bowl-load, eyebolts shoulder-type/angled derating), load weight (densities: steel 490/concrete 150/water 62.4 lb/ft³) + center of gravity, lift plan & roles (operator/rigger/signal/lift-director, critical-lift triggers), crane signals (Standard Method, when required, one signal person), suspended-load fall zone + tag lines (non-conductive near lines), mobile-crane setup (ground §1402, outriggers/cribbing/level, power-line Table A 10/15 ft, swing-radius barricade §1424), material storage/stacking (brick 7 ft + 2 in/ft taper, block half-block taper, lumber 16/20 ft, bags cross-keyed every 10). Flexed to 14 topics. Forklift/vehicle/electrical cross-ref'd. Build 1205 pages. Progress 12/24 (50%). SME review pending. Also: switched /start-session + CLAUDE.md procedure to auto-proceed (no separate go-ahead). |

---

## How to update this file

At `/end-session`:
1. Move the finished category into **Completed categories** with its topic list,
   sources, verification results, and SME-review status.
2. Update **Progress: N / 24** and **Current / next up**.
3. Add a row to the **Session log**.

# Content Rollout — Status

Session-by-session tracker for authoring real article content.
Plan: [docs/CONTENT_PLAN.md](./CONTENT_PLAN.md) · Method: [CLAUDE.md](../CLAUDE.md).

**Progress: 24 / 24 categories authored (100%) 🎉 — authoring rollout COMPLETE.
6 SME-reviewed ✅; the other 18 (Forklift Safety, Welding & Hot Work, Fire
Extinguisher Safety, Compressed Gas & Air Tool Safety, Vehicle & Driver Safety,
Rigging & Material Handling Equipment, Construction Safety, Demolition Safety,
Site Access & Public Protection, Housekeeping, Slips, Trips and Falls, Accident
Reporting, First Aid, Asbestos Awareness, COSHH (Hazardous Substances), Manual
Handling, Heat & Cold Stress Prevention, and Environmental Controls & Spill
Response) pending SME review. 312 authored topics total across the 24 categories;
synthetic 11× expansion fully disabled.**

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

- **Next category:** none — **all 24 categories authored.** The authoring phase of
  the content rollout is complete (2026-07-13). The remaining work is **SME review**:
  18 of 24 categories are still pending qualified-safety-professional sign-off
  (First Aid and Heat & Cold Stress flagged elevated priority for their clinical
  emergency content). No new authoring sessions are needed.
- **Blocker / decision:** ✅ RESOLVED (2026-07-12) — jurisdiction is **US/OSHA**
  for every category (US construction safety app). COSHH → OSHA HazCom 1910.1200;
  Manual Handling → NIOSH Lifting Equation / OSHA ergonomics. Nothing is
  jurisdiction-blocked; all 12 remaining categories can be authored to OSHA.

---

## Completed categories

### ✅ Environmental Controls and Spill Response — `environmental-controls-and-spill-response`
- **Session:** 2026-07-13 (final category — completes the 24-category rollout)
- **Topics authored:** 14 (real toolbox-talk list, flexed above the 11 floor —
  EPA SPCC/stormwater/RCRA + OSHA HAZWOPER support it; synthetic expansion disabled)
  1. Your Environmental Duty of Care on Site
  2. Preventing Oil and Fuel Spills (SPCC)
  3. Secondary Containment
  4. Fueling and Refueling Safely
  5. Stormwater, SWPPP, and Keeping Pollutants Out of Drains
  6. Erosion and Sediment Control BMPs
  7. Concrete Washout and Wash Water
  8. Spill Kits — What's In Them and Where They Go
  9. Responding to a Spill — Stop, Contain, Notify, Clean Up
  10. When and How to Report a Spill (National Response Center)
  11. HAZWOPER and Knowing Your Limits
  12. Handling and Storing Hazardous Waste (RCRA Basics)
  13. Controlling Dust and Air Emissions
  14. Everyday Housekeeping That Protects the Environment
- **Sources:** **EPA SPCC — 40 CFR Part 112** — applies to non-transportation
  facilities with **>1,320 gal** aggregate aboveground oil storage (or **>42,000
  gal** buried) with reasonable potential to reach navigable waters (containers
  <55 gal excluded from the total); **secondary containment sized to the largest
  single container + freeboard** for rain. **Sheen rule — 40 CFR Part 110** (CWA):
  a discharge causing a **visible sheen/film** on water is reportable. **NPDES
  Construction General Permit — 40 CFR 450.21**: permit + **SWPPP** for sites
  disturbing **≥1 acre** (or part of a ≥1-acre common plan); **stabilize within 14
  days** when work stops; **concrete-washout wastewater and fuels/oils prohibited**
  from discharge. **NRC — 1-800-424-8802** (24/7); **CERCLA RQ — 40 CFR Part 302**
  (substance-specific reportable quantities). **OSHA HAZWOPER — 29 CFR 1910.120**:
  (q)(6) response tiers — **Awareness** (recognize/notify), **Operations** (≥8 hr,
  defensive), **Technician** (≥24 hr more, offensive); (e) site-worker training —
  **40-hr** general (+3 field days), **24-hr** occasional/below-PEL (+1 field day),
  **8-hr** annual refresher. **RCRA — 40 CFR**: satellite accumulation up to **55
  gal** at/near point of generation, containers closed, labeled; date & move within
  **3 consecutive days** once 55 gal exceeded. BMP device names, spill-kit contents,
  and water-truck dust control are industry-consensus practice, not verbatim rule text.
- **Scope note:** worker-awareness level — environmental duty of care, oil/fuel spill
  prevention (SPCC) & secondary containment, safe fueling, stormwater/SWPPP & drain
  protection, erosion/sediment BMPs, concrete washout, spill kits, the stop-contain-
  notify-clean-up response, federal spill reporting (NRC), HAZWOPER tiers & knowing
  your limits, RCRA hazardous-waste handling, dust/air emissions, and everyday
  housekeeping. Respirable-silica depth → COSHH (Respirable Crystalline Silica);
  chemical SDS/labels → COSHH; oily-rag/combustible housekeeping → Housekeeping —
  cross-ref'd, not duplicated.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender) · 14 exported HTML files in
  `out/training/environmental-controls-and-spill-response/` · authored content
  present (`40 CFR`, `1,320`, `1-800-424-8802`, `HAZWOPER`, `SWPPP`, `55 gallon`),
  placeholder `plain site language` gone (0 files). **Global check: 0 placeholder
  files across all 24 categories; 312 authored topics = 312 exported topic pages.**
- **SME review:** ⏳ pending. Facts grounded against epa.gov + osha.gov via research
  subagent — SPCC thresholds/containment sizing, the 40 CFR 110 sheen rule, CGP
  ≥1-acre/14-day/washout-prohibition, NRC number + CERCLA RQ, HAZWOPER (q)(6)/(e)
  hour tiers, and RCRA 55-gal/3-day satellite rule confirmed against regulatory text;
  BMP names and spill-kit contents flagged as consensus practice.

### ✅ Heat and Cold Stress Prevention — `heat-and-cold-stress-prevention`
- **Session:** 2026-07-13
- **Topics authored:** 14 (real toolbox-talk list covering BOTH heat and cold,
  flexed above the 11 floor — OSHA heat-illness guidance + OSHA/NIOSH cold-stress
  guidance support it; synthetic expansion disabled)
  1. Heat Stress — How Your Body Overheats
  2. Recognizing Heat Illness
  3. Heat Stroke — A Medical Emergency
  4. Water, Rest, and Shade
  5. Acclimatization — Building Up to the Heat
  6. Heat Risk Factors and the Heat Index
  7. Planning Work in Hot Weather
  8. Cold Stress — How Your Body Loses Heat
  9. Hypothermia
  10. Frostbite, Trench Foot, and Chilblains
  11. Dressing for Cold and Wet Work
  12. Wind Chill and Cold Risk Factors
  13. Planning Work in Cold Weather
  14. Watching Out for Each Other in Temperature Extremes
- **Legal-basis note:** OSHA has **no specific heat or cold standard** — both are
  enforced under the **General Duty Clause (OSH Act §5(a)(1))**. A federal heat rule
  was proposed (NPRM) but is **not final**. All thresholds are **OSHA/NIOSH
  guidance**, not regulatory PELs — stated as such in-copy.
- **Sources:** **OSHA heat-illness prevention** (osha.gov/heat) — Water·Rest·Shade
  core message; hydration **~1 cup (8 oz) every 15–20 min ≈ ¾–1 qt/hr**, cap
  **~48 oz/hr / ~12 qt/day**; **Rule of 20%** acclimatization (full schedule by end
  of week 1; **7–14 days** to adapt; returning workers re-acclimatize); **>70% of
  heat deaths in first week, ~half on first day/first day back**; heat index +
  **NIOSH/OSHA Heat Safety Tool** app + **WBGT**. **NIOSH heat-related illnesses**
  (cdc.gov/niosh) — rash, cramps, syncope, exhaustion, and **stroke** (medical
  emergency, **104°F/40°C** line, can hit **106°F+ in 10–15 min**, hot skin dry-or-
  wet, **call 911 + cool immediately** via cold-water/ice immersion). **OSHA Cold
  Stress Guide** (osha.gov) + NIOSH — hypothermia (**core <95°F/35°C**, warm center
  first, don't rub, warm sweet drinks, help if >30 min away); frostbite (white/waxy
  skin, don't rub, don't thaw if refreeze possible, no direct heat); trench foot
  (wet-cold up to **60°F**, feet lose heat **~25× faster** wet); chilblains
  (freezing–60°F); **wind chill 40°F + 35 mph ≈ 28°F**; **≥3 loose layers**
  (wicking base / insulating mid / wind-water outer).
- **Scope note:** owns temperature-extreme illness — heat physiology, the five heat
  illnesses + heat-stroke emergency, water/rest/shade, acclimatization, heat risk
  factors/index, hot-weather planning; and cold physiology, hypothermia, frostbite/
  trench foot/chilblains, cold-weather dress, wind chill/cold risk, cold-weather
  planning, and the buddy system across both. Clinical first-aid depth → First Aid;
  hi-vis/PPE selection → PPE — cross-ref'd.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender) · 14 exported HTML files in
  `out/training/heat-and-cold-stress-prevention/` · authored content present
  (`104`, `Rule of 20`, `General Duty Clause`, `hypothermia`, `trench foot`,
  `wind chill`), placeholder `plain site language` gone (0 files).
- **SME review:** ⏳ pending — **elevated priority: contains clinical emergency
  first-aid guidance.** Facts grounded against osha.gov + cdc.gov/niosh via research
  subagent — Water·Rest·Shade quantities, Rule of 20% / 7–14 day acclimatization,
  first-week fatality statistics, heat-stroke temperature lines, hypothermia/
  frostbite/trench-foot thresholds, and wind-chill example confirmed against OSHA/
  NIOSH guidance; all flagged as guidance, not PELs. CPR/cooling protocols should be
  confirmed against current AHA/Red Cross guidance at SME review.

### ✅ Manual Handling — `manual-handling`
- **Session:** 2026-07-13
- **Topics authored:** 12 (real toolbox-talk list; NIOSH Lifting Equation + OSHA
  ergonomics guidance support it; synthetic expansion disabled)
  1. Why Manual Handling Injuries Happen
  2. Ergonomic Risk Factors — Force, Posture, Repetition
  3. NIOSH Lifting Equation and Recommended Weight Limit
  4. Sizing Up a Lift Before You Do It
  5. Safe Lifting Technique
  6. Team Lifting and Communication
  7. Mechanical Aids and Equipment
  8. Carrying, Pushing, and Pulling Loads
  9. Awkward Postures, Overhead, and Repetitive Work
  10. Staging Materials to Reduce Handling
  11. Warming Up, Conditioning, and Pacing
  12. Recognizing and Reporting Early Warning Signs
- **Jurisdiction note:** authored to the **US/OSHA + NIOSH** basis. OSHA has **no
  specific manual-handling/lifting standard** — ergonomic hazards are enforced under
  the **General Duty Clause (OSH Act §5(a)(1))**; a federal heat/ergonomics rule is
  not the basis here. If the audience ever becomes UK-based, the **Manual Handling
  Operations Regulations (MHOR)** basis must be confirmed at SME review.
- **Sources:** **NIOSH Revised Lifting Equation (NIOSH Pub. No. 94-110,
  Applications Manual)** — Load Constant **51 lb (23 kg)** ideal lift; **RWL = 51 ×
  HM × VM × DM × AM × FM × CM** (horizontal, vertical ~30 in optimal, distance,
  asymmetry, frequency, coupling); **Lifting Index = load ÷ RWL** (LI ≤ 1.0
  acceptable, **> 1.0 increased risk, > 3.0 high risk**); ideal-lift assumptions.
  MSD burden (sprains/strains/back the most common construction injury; construction
  back injuries ~50% above other-industry average) + risk factors (force, awkward/
  static posture, repetition, vibration, contact stress, duration) from NIOSH
  ergonomics/construction bulletins. Controls hierarchy (engineering aids — carts,
  dollies, hand trucks, forklifts, hoists, lift tables; deliver to point of use;
  stage at knuckle-to-shoulder height — then administrative: team lifts, rotation,
  breaks), **"push beats pull"** (OSHA Technical Manual §VII ch.1), safe technique
  and early-symptom reporting (OSHA eTools / Technical Manual). All numbers are
  **NIOSH/OSHA guidance, not enforceable PELs** (no regulatory lifting threshold
  exists).
- **Scope note:** owns ergonomic/manual-material-handling — why MSDs happen, risk
  factors, the NIOSH equation, lift size-up, technique, team lifting, mechanical
  aids, carry/push/pull, awkward/overhead/repetitive postures, staging, warm-up/
  conditioning/pacing, and early-symptom recognition. Injury recordkeeping →
  Accident Reporting; getting symptoms looked at → First Aid — cross-ref'd.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender, +501 topic paths) · 12 exported HTML files in
  `out/training/manual-handling/` · authored content present (`51 lb`, `Recommended
  Weight Limit`, `Lifting Index`, `94-110`, `General Duty Clause`), placeholder
  `plain site language` gone (0 files).
- **SME review:** ⏳ pending. Facts grounded against cdc.gov/niosh + osha.gov via
  research subagent — 51-lb load constant, RWL multipliers, LI thresholds, and the
  no-OSHA-lifting-standard / General Duty Clause basis confirmed; all figures flagged
  as NIOSH/OSHA guidance, not regulatory limits.

### ✅ COSHH (Hazardous Substances) — `coshh-hazardous-substances`
- **Session:** 2026-07-13
- **Topics authored:** 14 (real toolbox-talk list, flexed above the 11 floor —
  OSHA Hazard Communication 1910.1200 + substance-specific construction standards
  support it; synthetic expansion disabled)
  1. What Counts as a Hazardous Substance
  2. The Hazard Communication Program and Your Right to Know
  3. GHS Labels and Signal Words
  4. The Nine GHS Pictograms
  5. Reading a Safety Data Sheet
  6. How Substances Get Into Your Body
  7. Permissible Exposure Limits and Air Monitoring
  8. Respirable Crystalline Silica
  9. Lead and Other Heavy Metals
  10. Dusts, Vapors, Fumes, and Mists Created by the Work
  11. Controlling Exposure — the Hierarchy of Controls
  12. Storing and Segregating Chemicals Safely
  13. Secondary Containers and Workplace Labeling
  14. Chemical Spills, Skin Contact, and Emergency Response
- **Jurisdiction note:** authored entirely to the **US/OSHA** equivalent — OSHA
  Hazard Communication **1910.1200** (GHS), not UK COSHH. If the audience ever
  becomes UK-based, the UK COSHH Regulations 2002 and WELs must be confirmed/
  re-authored at SME review.
- **Sources:** OSHA 29 CFR **1910.1200** (HazCom) — six GHS label elements +
  signal words **Danger** (severe) vs **Warning** (f); written program (e);
  training (h); the **16-section SDS** order (g); secondary-container/workplace
  labeling + the portable-container exception (f)(6); the **9 GHS pictograms**
  (Health Hazard, Skull & Crossbones, Exclamation Mark, Corrosion, Flame, Flame
  Over Circle, Exploding Bomb, Gas Cylinder, Environment [non-mandatory]).
  Substance standards: silica **1926.1153** (PEL **50 µg/m³** TWA / AL **25**,
  Table 1 wet methods + LEV 99%-filter), lead **1926.62** (PEL **50** / AL **30
  µg/m³**), hex chrome **1926.1126**, cadmium **1926.1127**; PEL framework
  **1926.55 / 1910.1000** Z-tables. NIOSH RELs / ACGIH TLVs cited as guidance,
  not law. The **15-min** eyewash flush is ANSI Z358.1 / first-aid convention
  (cross-ref First Aid), not a numeric CFR threshold here.
- **Scope note:** owns the chemical hazard-communication chain — recognizing
  hazardous substances (incl. those created by the work), the HazCom program &
  right-to-know, GHS labels/pictograms, SDS reading, exposure routes, PELs/air
  monitoring, silica, lead & heavy metals, dust/vapor/fume/mist forms, hierarchy
  of controls, chemical storage/segregation, workplace labeling, and chemical
  spill/skin-contact response. Respirator selection/fit → PPE; clinical first aid →
  First Aid; silica in demolition → Demolition; spill environmental reporting →
  Environmental Controls & Spill Response — cross-ref'd, not duplicated.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build`
  clean (all pages prerender, +558 topic paths) · 14 exported HTML files in
  `out/training/coshh-hazardous-substances/` · authored content present
  (`1910.1200`, `50 µg/m³`, `Skull and Crossbones`, `16-section`, `Danger`),
  placeholder `plain site language` gone (0 files) · live route 200.
- **SME review:** ⏳ pending. Facts grounded against osha.gov via research
  subagent — 1910.1200 label elements/signal words/SDS order, the 9 pictograms,
  silica PEL 50/AL 25, lead PEL 50/AL 30 confirmed against regulatory text; RELs/
  TLVs and the 15-min eyewash flush flagged as guidance/consensus, not OSHA PELs.

### ✅ Asbestos Awareness — `asbestos-awareness`
- **Session:** 2026-07-13
- **Topics authored:** 11 (real **awareness-level** toolbox-talk list — recognize /
  don't disturb / report / escalate; NOT abatement or competent-person training;
  OSHA 1926.1101 supports it; synthetic expansion disabled)
  1. What Asbestos Is and Why It Matters
  2. Health Effects — Asbestosis, Lung Cancer, and Mesothelioma
  3. Where Asbestos Is Found on Site
  4. ACM and PACM — the Pre-1980 Presumption
  5. Exposure Limits and How Exposure Happens
  6. The Four Classes of Asbestos Work
  7. Recognizing and Not Disturbing Suspect Materials
  8. Regulated Areas, Signs, and Labels
  9. If You Find or Disturb Suspect Material — Stop and Report
  10. PPE and Respiratory Protection Around Asbestos
  11. Awareness Worker vs. Licensed Abatement
- **Sources:** OSHA 29 CFR 1926.1101 (Asbestos — Construction) — (c)(1) **PEL
  0.1 f/cc** 8-hr TWA + (c)(2) excursion **1.0 f/cc / 30 min**; (b) definitions —
  **ACM = >1% asbestos**, **PACM = TSI + surfacing material in buildings
  constructed no later than 1980** (presumed asbestos until rebutted), TSI,
  surfacing material; four classes I–IV (b)/(g); (e) regulated areas; (k) hazard
  communication — **current DANGER sign legend: DANGER / ASBESTOS / MAY CAUSE
  CANCER / CAUSES DAMAGE TO LUNGS / AUTHORIZED PERSONNEL ONLY** (+ respirator/
  clothing line); (g)(3) prohibited high-fiber methods (no high-speed abrasive
  saws w/o point-of-cut ventilation, no compressed air, no dry sweeping, no sanding
  flooring). ACM product enumeration (transite, roofing felt, joint compound,
  popcorn ceilings, gaskets, cement pipe) attributed to **EPA/NIOSH** (not
  enumerated in 1926.1101; standard names TSI, surfacing, asphalt/vinyl flooring).
  Health effects (asbestosis/lung cancer/mesothelioma, "no safe level") from OSHA
  asbestos page; **10–40 yr latency + smoking synergy from NIOSH/EPA** (not the
  standard's numeric text). Respirator-program depth cross-ref → PPE.
- **Scope note:** strictly awareness level — recognize suspect ACM/PACM, understand
  the health risk, never disturb it, and stop-and-report to the competent person /
  building owner. Explicitly does **not** qualify the reader to remove, repair,
  enclose, or clean up asbestos (all four classes are trained/licensed work).
  Respirator selection/fit/medical → PPE; demolition-specific ACM handling →
  Demolition Safety; SDS/HazCom → forthcoming COSHH/HazCom — cross-ref'd.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender) · 11 exported HTML files in `out/training/asbestos-awareness/`
  · authored content present (`1926.1101`, `0.1 fiber`, `PACM`, `MAY CAUSE CANCER`,
  `mesothelioma`, `1980`), placeholder `plain site language` gone (0 files) · live
  routes 200.
- **SME review:** ⏳ pending. Facts verified against osha.gov 1926.1101 + OSHA
  asbestos page via research subagent — **corrected the DANGER sign legend** to the
  current "MAY CAUSE CANCER / CAUSES DAMAGE TO LUNGS" wording (the legacy "CANCER
  AND LUNG DISEASE HAZARD" legend was retired 2016-06-01 and is presented only as
  "older signs may still read…"); attributed the **ACM product list to EPA/NIOSH**
  and **latency/smoking-synergy to NIOSH/EPA** rather than the OSHA standard; and
  kept the reader strictly at awareness level (the standard has no verbatim
  "awareness worker" duty clause — the stop-and-report posture is the correct
  application of the PACM presumption (b)/(k), regulated areas (e), prohibited
  methods (g), and hazard communication (k)). PEL/excursion, ACM >1%, PACM pre-1980,
  and the four classes confirmed verbatim.

### ✅ First Aid — `first-aid`
- **Session:** 2026-07-13
- **Topics authored:** 12 (real toolbox-talk list; OSHA 1926.50 / 1910.151 +
  1910.1030 + AHA/Red Cross first-aid curricula support it; synthetic expansion
  disabled)
  1. First-Aid Readiness on the Job Site
  2. Trained First-Aid Providers and Medical Services
  3. First-Aid Kits and Supplies
  4. Getting Help Fast — Emergency Communication
  5. Scene Safety and the Primary Check
  6. Bloodborne Pathogens and Universal Precautions
  7. Controlling Bleeding and Wounds
  8. Shock
  9. Burns
  10. Fractures, Sprains, and Strains
  11. Eye Injuries and Emergency Eyewash
  12. CPR, Sudden Cardiac Arrest, and AEDs
- **Sources:** OSHA 29 CFR 1926.50 (construction — (a) medical personnel for
  advice/consultation; (b) prompt-attention provisions before project start;
  (c) trained first-aid provider on site where no infirmary/clinic/hospital/
  physician is **reasonably accessible in terms of time and distance** (Red Cross
  or verifiable equivalent); (d)(1) supplies **easily accessible**; (d)(2)
  weatherproof container + checked before each job & **at least weekly**; (e)
  transport equipment or ambulance-contact communication system; (f)(1) post
  physician/hospital/ambulance numbers where **911 unavailable** + (f)(2) post site
  location info; (g) quick-drench/eyewash for corrosive exposure); 1910.151
  (general industry — (a)/(b) **"near proximity"** + adequately-trained first aid +
  readily-available supplies; (c) eyewash); 1910.1030 (bloodborne pathogens —
  designated first-aid providers covered, universal precautions, gloves/CPR
  barrier, exposure control plan, HBV vaccine, post-exposure evaluation); ANSI/ISEA
  Z308.1 kit fill (Class A/B in current editions; OSHA appendices cite non-mandatory
  1978/1998 editions). Clinical steps (scene safety, primary check, bleeding
  control/Stop-the-Bleed, shock, burns, RICE, eye flushing 15 min, CPR 100–120/min
  ~2 in, AED) attributed to **AHA/American Red Cross first-aid curricula**, not OSHA
  regulatory text.
- **Scope note:** awareness-level emergency response — readiness/program, trained
  providers, kits, emergency communication, scene safety, bloodborne pathogens, and
  the common on-site injuries (bleeding, shock, burns, fractures, eye injuries,
  cardiac arrest/CPR/AED). Explicitly not certification; every clinical talk points
  the reader to hands-on training. Heat/cold emergencies → forthcoming Heat & Cold
  Stress; injury recordkeeping/severe-injury reporting → Accident Reporting;
  chemical SDS/eyewash siting → HazCom & PPE — cross-ref'd.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender) · 12 exported HTML files in `out/training/first-aid/` ·
  authored content present (`1926.50`, `1910.1030`, `tourniquet`, `AED`, `eyewash`,
  `15 minutes`, `reasonably accessible`), placeholder `plain site language` gone
  (0 files).
- **SME review:** ⏳ pending — **elevated priority: contains clinical first-aid
  guidance.** Facts verified against osha.gov via research subagent — corrected:
  construction 1926.50(c) uses **"reasonably accessible in terms of time and
  distance"** (the phrase **"near proximity"** belongs to 1910.151(b)); 1926.50(d)(1)
  = **"easily accessible"**; weatherproof/weekly-check = **(d)(2)** (no (d)(3));
  construction eyewash = **1926.50(g)**; the **3–4 min vs. 15 min** response-time
  guidance is from **OSHA interpretation letters + OSHRC/court precedent**, not CFR
  text; **Class A/B kits** and clinical protocols are consensus/curricula (ANSI-ISEA
  / AHA / Red Cross), not OSHA text. CPR ratios/depth and burn/eye flush times should
  be confirmed against current AHA/Red Cross guidelines at SME review.

### ✅ Accident Reporting — `accident-reporting`
- **Session:** 2026-07-13
- **Topics authored:** 11 (real toolbox-talk list; OSHA 29 CFR Part 1904 supports it;
  synthetic expansion disabled)
  1. Why We Report — Injuries, Near Misses, and Prevention
  2. Report It Right Away — Telling Your Supervisor
  3. Reporting Severe Injuries — The 8-Hour and 24-Hour Rules
  4. What Makes an Injury Recordable
  5. First Aid vs. Medical Treatment
  6. The OSHA 300 Log, 300A Summary, and 301 Report
  7. Near-Miss Reporting
  8. Incident Investigation and Root Cause
  9. Corrective Actions That Prevent Recurrence
  10. Your Right to Report Without Retaliation
  11. Writing a Clear Incident Report
- **Sources:** OSHA 29 CFR Part 1904 — §39 severe-injury reporting ((a)(1) fatality
  within **8 hours**; (a)(2) in-patient hospitalization/amputation/loss of an eye
  within **24 hours**; (b) 30-day fatality window & 24-hour window for the others;
  (a)(3) report via Area Office / **1-800-321-OSHA (6742)** / online; (b)(2)
  required report contents); §7(a) recordability triggers (death, days away,
  restricted/transfer, medical treatment beyond first aid, loss of consciousness,
  significant injury/illness diagnosed by PLHCP); §7(b)(5)(ii) the **closed
  first-aid list** (anything off it = medical treatment); §29(a) forms 300/300A/301
  + §29(b)(3) **7-calendar-day** entry deadline for 300 Log & 301; §32(b)(6) post
  300A **Feb 1–Apr 30**; §35 employee involvement + reasonable reporting procedure
  (no deterrence) + records access; §36 §11(c) anti-retaliation. Hierarchy of
  controls for corrective actions (consensus). Scene preservation framed as good
  practice, **not** a Part 1904 duty.
- **Scope note:** owns the injury/near-miss/recordkeeping reporting chain — why
  report, notify-supervisor-fast, OSHA severe-injury deadlines, recordability,
  first-aid-vs-medical-treatment line, the three forms + deadlines, near-miss
  reporting, investigation/root-cause, corrective actions, anti-retaliation rights,
  and writing a clear report. First-aid *response* → First Aid; stop-work authority
  & near-miss culture also touched by Construction Safety — cross-ref'd.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender) · 11 exported HTML files in `out/training/accident-reporting/`
  · authored content present (`1904.39`, `8 hours`, `24 hours`, `1904.7`, `300A`,
  `1-800-321`, `11(c)`), placeholder `plain site language` gone (0 files).
- **SME review:** ⏳ pending. Facts verified against osha.gov Part 1904 via research
  subagent — corrected: required-report contents live in **1904.39(b)(2)** not
  (b)(1); the **7-day deadline covers both the 300 Log entry and the 301** (not the
  301 alone); and **scene preservation is not a Part 1904 requirement** (written as
  recommended good practice, not a cited duty). 8-hr/24-hr deadlines, 30-day window,
  recordability triggers, closed first-aid list, Feb 1–Apr 30 posting, and
  §§1904.35/.36 all confirmed verbatim.

### ✅ Slips, Trips and Falls — `slips-trips-and-falls`
- **Session:** 2026-07-13
- **Topics authored:** 12 (real toolbox-talk list, flexed above the 11 floor —
  1910 Subpart D (Walking-Working Surfaces, §22–30) supports it; synthetic
  expansion disabled)
  1. How Slips, Trips, and Falls Happen
  2. Keeping Walking and Working Surfaces Safe
  3. Wet, Oily, and Slippery Surfaces
  4. Ice, Snow, and Bad-Weather Walking Conditions
  5. Uneven Surfaces and Changes in Level
  6. Trip Hazards — Cords, Hoses, Debris, and Clutter
  7. Slip-Resistant Footwear
  8. Lighting for Safe Movement
  9. Stairways
  10. Handrails and Guardrails
  11. Floor Holes, Openings, and Covers
  12. Protecting Open-Sided Floors, Platforms, and Runways
- **Sources:** OSHA 29 CFR 1910 Subpart D (Walking-Working Surfaces) — §22 general
  requirements ((a)(1) clean/orderly/sanitary, (a)(2) floors clean & to-the-extent-
  feasible dry + drainage/dry-standing-places/mats for wet processes, (a)(3) free
  of hazards "such as sharp or protruding objects, loose boards, corrosion, leaks,
  spills, snow, and ice", (b) support max intended load, (c) safe access/egress,
  (d)(1) inspect regularly & as necessary, (d)(2) correct/repair before reuse or
  guard, (d)(3) qualified person only when the repair involves **structural
  integrity**); §25 stairways (angle 30–50°, uniform riser height/tread depth,
  max riser 9.5 in, min tread depth 9.5 in, min width 22 in); §28 duty to have
  fall protection ((b)(1)(i) unprotected sides/edges **4 ft** GI trigger;
  (b)(3)(i) holes ≥4 ft above lower level guarded; (b)(3)(ii) holes <4 ft /
  step-into covered or guarded — **no height floor**; (b)(11)(ii) stairs with
  **≥3 treads & ≥4 risers** get stair rail + handrails, handrail count by width
  <44 / 44–88 / >88 in); §29 criteria (guardrail top edge 42 in ±3, midrail
  **midway**, 200 lb top-rail force, toeboard ≥3.5 in; hole cover ≥2× max intended
  load + secured + marked HOLE/COVER; handrail height 30–38 in from tread nosing;
  stair-rail height pre-2017 ≥30 in / on-or-after 2017-01-17 ≥42 in); §23 ladders
  (side rails ≥3 ft above landing; defective ladder tagged & removed); §30 training.
  Cross-ref only: §1926.56 illumination foot-candle levels (Housekeeping/
  Construction own the numbers); §1926.501(b)(1) construction **6-ft** fall trigger
  cited as the GI-vs-construction contrast.
- **Scope note:** owns same-level slips/trips + low-level falls straight off the
  walking surface — surface condition, wet/oily floors, ice & weather, uneven
  surfaces/changes in level, cord/hose/clutter trip hazards, slip-resistant
  footwear, lighting for movement, stairways, handrails/guardrails, floor holes/
  covers, and open-sided-floor/dock/platform edges at the GI 4-ft trigger.
  Fall-arrest at height, roofs, scaffolds, leading edges → Working at Heights (and
  the construction 6-ft rule) — cross-referenced, not duplicated; debris/waste/
  storage depth → Housekeeping; foot-protection ASTM F2413 depth → PPE;
  illumination foot-candles → Housekeeping/Construction.
- **Verified:** tsc clean (after clearing stale `.next/types`) · `next build` clean
  (all pages prerender, 24 category paths + [+771 more] topic paths) · 12 exported
  HTML files in `out/training/slips-trips-and-falls/` · authored content present
  (`1910.22`, `1910.29`, `42 inches`, `3.5 inches`, `twice the maximum intended
  load`, `4 feet`, `30 and 50 degrees`, `9.5 inches`), placeholder `plain site
  language` gone (0 files) · live routes 200.
- **SME review:** ⏳ pending. Facts verified against osha.gov Subpart D via research
  subagent — corrected four common errors carried in from construction rules:
  stair-rail trigger is **≥3 treads & ≥4 risers** (1910.28(b)(11)(ii)), **not** the
  "4 risers or >30 in" construction phrasing (1926.1052); stair-rail system height
  is **≥30 in pre-2017 / ≥42 in on-or-after 2017-01-17** (1910.29(f)(1)(ii)), with
  **no 36-in value**; the "qualified person" repair rule applies **only** to
  **structural-integrity** repairs (1910.22(d)(3)); and guardrail midrail is
  "**midway**" not a literal 21 in (1910.29(b)(2)(i)). GI fall trigger stated as
  **4 ft** (1910.28(b)(1)(i)) with construction's **6 ft** (1926.501(b)(1)) noted
  as the contrast.

### ✅ Housekeeping — `housekeeping`
- **Session:** 2026-07-13
- **Topics authored:** 12 (real toolbox-talk list, flexed above the 11 floor —
  1926.25 is short but the housekeeping cluster (1926.250 storage, 1926.252 waste
  disposal, 1926.51 sanitation, 1926.56 illumination, 1910.22 walking-working
  surfaces) supports 12 distinct talks; synthetic expansion disabled)
  1. Housekeeping as a Safety Control
  2. Keeping Walkways, Aisles, and Exits Clear
  3. Protruding Nails, Sharp Objects, and Scrap Lumber
  4. Managing Cords, Hoses, and Welding Leads
  5. Removing Combustible Scrap and Debris
  6. Waste Containers and Separating Refuse
  7. Oily Rags and Spontaneous Combustion
  8. Material Storage and Stacking
  9. Disposing of Debris — Chutes and Drop Areas
  10. How Poor Housekeeping Causes Slips, Trips, and Falls
  11. Lighting, Sanitation, and Welfare Facilities
  12. Making Cleanup Part of the Job
- **Sources:** OSHA 29 CFR 1926.25 (housekeeping — (a) form/scrap lumber with
  protruding nails & all debris cleared from work areas/passageways/stairs;
  (b) combustible scrap removed at regular intervals + safe means; (c) containers
  to collect & separate waste/trash/oily-and-used-rags, covers on oily/flammable/
  hazardous-waste containers, dispose at frequent & regular intervals); 1926.252
  (waste disposal — (a) enclosed wood chute when materials dropped **>20 ft** to
  a point outside the exterior walls; (b) debris dropped through floor holes w/o
  chute → drop area barricaded **≥42 in high / ≥6 ft back** from projected edge +
  falling-materials signs at each level + no removal below until dropping stops;
  (c) scrap/waste/rubbish removed from immediate area as work progresses; (d)
  burning per local fire regs; (e) solvent waste, oily rags & flammable liquids
  in fire-resistant covered containers); 1926.250 (storage — (a)(1) tiers stacked/
  racked/blocked/secured against sliding/collapse, (a)(2) max safe load posted in
  psf & not exceeded, (a)(3) aisles/passageways kept clear + good repair, (b)(3)
  noncompatible segregated, (b)(8)(iii) lumber stable/self-supporting, (b)(9)
  pipe/bar/cylindrical stacked & blocked); 1926.701(b) (rebar impalement guarding);
  1926.51 (sanitation — potable water tightly-closed w/ tap, no common cup, no
  dipping; nonpotable signed + no cross-connection; Table D-1 toilets: ≤20 = 1,
  20+ = 1 seat + 1 urinal / 40, 200+ = 1 / 50; (f) washing facilities for paints/
  coatings/herbicides/insecticides/harmful contaminants); 1926.56 (illumination
  Table D-3 — **3 fc** general construction area lighting, **5 fc** construction
  areas/concrete/excavation/waste/accessways/active storage/loading/refueling &
  indoor warehouses/corridors/exitways, **10 fc** plant & shops, **30 fc** first-
  aid/infirmaries/offices); 1910.22 (walking-working surfaces — (a)(1) clean/
  orderly/sanitary, (a)(2) floors clean & dry + drainage/mats where wet, (a)(3)
  free of sharp/protruding objects/loose boards/leaks/spills/snow/ice, (b) loads,
  (c) access/egress, (d) inspect/correct/qualified-person structural repair);
  spontaneous-combustion mechanism attributed to NFPA/fire-science, not OSHA text.
- **Scope note:** owns site order — walkways/aisles/exits, protruding nails &
  scrap, cord/hose management, combustible-debris removal, waste containers &
  separation, oily-rag storage, material storage/stacking, debris chutes/drop
  areas, poor-housekeeping slips/trips, and lighting/sanitation/welfare. Detailed
  stacking figures cross-ref Rigging & Material Handling; footwear/walking-surface
  depth cross-refs the dedicated Slips, Trips and Falls category; fire-prevention
  program cross-refs Fire Safety; hot-work fire watch cross-refs Welding & Hot
  Work; the steeper >45° demolition chute rule cross-refs Demolition Safety;
  GFCI/cord-inspection detail cross-refs Electrical.
- **Verified:** tsc clean · `next build` clean (all pages prerender, 24 category
  paths + [+825 more] topic paths) · 12 exported HTML files in
  `out/training/housekeeping/` · authored content present (`1926.25(a)`,
  `more than 20 feet`, `42 inches`, `1926.252(e)`, `3 fc`, `1926.701(b)`,
  `1926.250`, `oily and used rags`), placeholder `plain site language` gone
  (0 files) · live routes 200.
- **SME review:** ⏳ pending. Facts verified against osha.gov via research subagent
  — corrected three common errors: **no 45° chute-angle rule exists in 1926.252**
  (only the >20-ft enclosed-chute trigger; the >45° enclosed chute is a Subpart T
  demolition rule); **1926.56 general construction area lighting = 3 fc** (not the
  commonly-misquoted 5 fc; 5 fc is the concrete/excavation/waste/storage/loading
  list); and the oily-rag **spontaneous-combustion rationale is NFPA/fire-science**,
  while OSHA text (1926.25(c) / 1926.252(e)) states only the fire-resistant
  covered-container requirement.

### ✅ Site Access and Public Protection — `site-access-and-public-protection`
- **Session:** 2026-07-13
- **Topics authored:** 12 (real toolbox-talk list, flexed above the 11 floor —
  Subpart G §200–203 + public-protection provisions across fall-protection and
  excavation rules support it; synthetic expansion disabled)
  1. Controlling the Site Perimeter — Fencing, Gates, and Keeping People Out
  2. Accident Prevention Signs — Colors, Wording, and Placement
  3. Accident Prevention Tags
  4. Barricades and Channelizing Devices
  5. Flaggers and Traffic Signaling
  6. Protecting Pedestrians — Walkways and Accessible Routes
  7. Covered Walkways, Canopies, and Sidewalk Sheds
  8. Overhead and Falling-Object Protection
  9. Protecting People from Open Holes and Excavations
  10. Visitor, Delivery, and Contractor Access Control
  11. Night Work and Low-Visibility Protection
  12. Daily Inspection of Signs, Barriers, and Access Controls
- **Sources:** OSHA 29 CFR 1926 Subpart G — §200 accident-prevention signs & tags
  (Danger red/black/white "immediate hazard only"; Caution yellow w/ black panel;
  Exit red letters ≥6 in high, ¾-in stroke, white field; Safety-instruction
  green panel/white letters; Directional black panel/white symbol; (g) traffic
  signs at points of hazard per MUTCD; (h) tags = temporary warning of existing
  hazard, never a substitute for signs), §201 signaling (flagger signaling per
  MUTCD Part 6 — STOP/SLOW paddle ≥18 in / 6-in letters primary, emergency flag
  ≥24 in square, ANSI/ISEA 107 Class 2/3 apparel), §202 barricades (conform to
  MUTCD Part 6, not ANSI D6.1), §203 definitions (barricade/sign/signals/tags).
  Public/pedestrian protection assembled from: §501(c) falling-object controls
  (hard hat + toeboards/screens/guardrail, OR canopy, OR barricade & prohibit
  entry) & §502(j) criteria (toeboard ≥3½ in, ≥50 lb, canopy prevents
  collapse/penetration); §850(k) demolition sidewalk shed/canopy (8 ft from face,
  2 ft wider than opening, 150 psf); §501(b)(4)/502(i) holes & covers (cover ≥2×
  max load, secured, marked HOLE/COVER); §651(j)(2) spoil ≥2 ft from edge;
  §651(l) guarded walkways over excavations ≥6 ft; §56 illumination (5 fc general).
  MUTCD Part 6 pedestrian/ADA routing (continuous detectable path, ≤4-in
  projection under 7 ft, audible/vibrotactile cues) and night-work channelizing
  (retroreflective 45° orange/white stripes; Type A/B/C-D warning lights).
- **Scope note:** owns the site-interface + public-protection layer — perimeter/
  gates, signs/tags, barricades, flaggers, pedestrian routing, canopies, overhead
  & hole protection near the public, visitor/delivery control, night visibility,
  daily inspection. Highway work-zone flagging & vehicle-movement detail cross-ref
  Vehicle & Driver Safety; trench-wall/cave-in protection cross-refs Excavation;
  worker-side falling-object systems cross-ref Working at Heights. Flagged in-copy
  that OSHA has **no single "public protection" standard** — it's built from these
  worker-focused rules + MUTCD + local building codes.
- **Verified:** tsc clean · `next build` clean (all pages prerender, 24 category
  paths + [+879] topic paths) · 12 exported HTML files in
  `out/training/site-access-and-public-protection/` · authored content present
  (`1926.200`, `1926.202`, `150 pounds per square foot`, `24 inches square`,
  `ANSI/ISEA 107`, `3 1/2 inches`, `HOLE`), placeholder `plain site language`
  gone (0 files) · live routes 200.
- **SME review:** ⏳ pending. Facts verified against osha.gov Subpart G + MUTCD
  via research subagent — corrected three common errors: flagger flag is **24 in**
  square (not the outdated 18 in), §1926.202 references **MUTCD Part 6** (not ANSI
  D6.1), and tag wordings trace to **1910.145(f)** (Danger/Caution/Warning/
  Biohazard) not to §1926.200(h) itself.

### ✅ Demolition Safety — `demolition-safety`
- **Session:** 2026-07-12
- **Topics authored:** 13 (real toolbox-talk list, flexed above the 11 floor —
  Subpart T §850–860 (11 sections) + health/fire cross-cutting hazards support it;
  synthetic expansion disabled)
  1. The Pre-Demolition Engineering Survey
  2. Locating and Controlling Utilities Before Demolition
  3. Hazardous Materials — Asbestos, Lead, and Contaminated Systems
  4. Preparing the Structure and Safe Access
  5. Exclusion Zones, Barricades, and the Drop Zone
  6. Material Chutes and Dropping Debris Through Openings
  7. Manual Demolition of Walls, Masonry, and Chimneys
  8. Manual Removal of Floors
  9. Mechanical Demolition — Wrecking Ball and Powered Equipment
  10. Removal of Steel Construction
  11. Silica, Dust, and Respiratory Hazards
  12. Fire Prevention and Hot Work in Demolition
  13. Continuing Inspections and Preventing Unplanned Collapse
- **Sources:** OSHA 29 CFR 1926 Subpart T — §850 preparatory operations (§850(a)
  engineering survey by competent person + written evidence + adjacent structures;
  §850(b) shore/brace damaged structures; §850(c) utilities shut off/capped/
  controlled outside the building line + notify utility company; §850(d) protect
  utilities kept live; §850(e) test & purge tanks/pipes with hazardous residues;
  §850(f) glass; §850(g) 42-in wall-opening fall guard; §850(h) debris-drop
  barricade ≥42 in high & ≥6 ft back from projected edge + signs; §850(i) cover
  unused floor openings; §850(j) top-down story-by-story; §850(k) sidewalk sheds);
  §851 designated stairs/passageways/ladders only + stairwell covered ≥2 floors
  below work; §852 chutes (>45° enclosed, gate at discharge + competent controller,
  intake ≤48 in, closed when idle); §853 floor-disposal opening ≤25% of aggregate
  total floor area unless lateral supports remain; §854 masonry not to exceed floor
  safe carrying capacity, no wall section >1 story standing without lateral bracing
  unless designed self-supporting, no work atop wall in hazardous weather, retaining
  walls; §855 manual floor removal (2×10 full-size planks, ≤16-in gap, ≥18-in walk-
  ways, no one in area directly below + barricaded, clear 20 ft around before
  starting); §856 equipment only on floors strong enough for imposed load + curbs/
  stop-logs; §857 storage ≤ allowable floor loads, floor arches removed for storage
  ≤25 ft above grade, storage openings blocked/closed; §858 steel dismantled column
  length by column length & tier by tier (2-story columns), members not overstressed,
  planking per §855(b); §859 mechanical demolition (no workers in affected area
  during balling/clamming; ball ≤50% crane rated load OR ≤25% line nominal breaking
  strength, whichever lesser; boom/loadline short; swivel + positive attachment;
  cut steel free before pulling walls; remove cornices first; continuing inspections
  by competent person for weakened floors/walls/loosened material); §860 explosives →
  Subpart U. Health hazards: silica §1926.1153 (PEL 50 µg/m³, AL 25), lead §1926.62
  (PEL 50 µg/m³, AL 30), asbestos §1926.1101 (PEL 0.1 f/cc, excursion 1.0 f/cc/30 min).
- **Scope note:** owns demolition-specific structural, drop-zone, and dismantling
  hazards. Asbestos handling → Asbestos Awareness; respirator programs → PPE;
  hot-work permit/fire-watch → Welding & Hot Work; general fire prevention → Fire
  Safety; overhead-line approach → Electrical; underground locating → Excavation;
  steel rigging → Rigging & Material Handling — all cross-referenced, not duplicated.
- **Verified:** tsc clean (after clearing stale `.next/types` duplicates) · `next
  build` clean (all pages prerender, 24 category paths + [+977] topic paths) · 13
  exported HTML files in `out/training/demolition-safety/` · authored content present
  (`engineering survey`, `1926.859`, `50 percent`, `25 percent`, `20 feet`,
  `42 inches`, `50 µg/m³`), placeholder `plain site language` gone (0 files).
- **SME review:** ⏳ pending.

### ✅ Construction Safety — `construction-safety`
- **Session:** 2026-07-12
- **Topics authored:** 13 (real toolbox-talk list, flexed above the 11 floor —
  Subpart C general provisions + Focus Four + Subparts G/I support it; synthetic
  expansion disabled)
  1. The Focus Four Hazards in Construction
  2. Your Rights and Responsibilities Under OSHA
  3. New-Worker Safety Orientation and Training
  4. Job Hazard Analysis and Pre-Task Planning
  5. The Competent Person and Daily Inspections
  6. Struck-By Hazards
  7. Caught-In and Caught-Between Hazards
  8. Hand and Power Tool Safety
  9. Signs, Signals, Tags, and Barricades
  10. Illumination, Sanitation, and Site Welfare
  11. Personal Protective Equipment on Site
  12. Emergency Action Plans and Site Preparedness
  13. Stop-Work Authority and Reporting Hazards
- **Sources:** OSHA 29 CFR 1926 Subpart C — §20 (accident-prevention
  responsibility, frequent/regular inspections by a competent person), §21 (safety
  training/education, hazard recognition), §23 (first aid & medical), §24 (fire
  protection), §26 (illumination), §27 (sanitation), §28 (PPE), §32(f) (competent-
  person definition — identify hazards + authority to correct), §35 (emergency
  action plans); Subpart D §51 (sanitation — potable water, toilets) & §56
  (illumination minimums — 5 fc general construction, 10 fc shops); Subpart I
  §300–307 (hand & power tools — guarding, condition, GFCI/double-insulation);
  Subpart G §200–203 (signs Danger-red/Caution-yellow, tags, signals, barricades);
  OSH Act of 1970 (General Duty Clause §5(a)(1), §11(c) anti-retaliation, worker
  rights, employer-paid PPE); OSHA Focus Four (falls, struck-by, caught-in/between,
  electrocution); hierarchy of controls.
- **Scope note:** general-provisions foundation category. Owns Struck-By and
  Caught-In/Between (the two Focus Four hazards with no dedicated category) plus
  rights/training/JHA/competent-person/tools/signs/welfare/EAP/stop-work. Falls →
  Working at Heights, Electrocution/LOTO → Electrical, deep PPE → PPE, debris/
  walkways → Housekeeping, air tools → Compressed Gas, work-zone traffic → Vehicle
  & Driver, injury recordkeeping → Accident Reporting — all cross-referenced, not
  duplicated.
- **Verified:** tsc clean (after clearing the recurring stale `.next/types "* N.ts"`
  duplicates) · `next build` clean (1108 pages, all prerender) · 13 exported HTML
  files in `out/training/construction-safety/` · authored content present
  (`Focus Four`, `1926.32`, `5 foot-candles`, `hierarchy of controls`, `11(c)`,
  `struck-by`), placeholder `plain site language` gone · live routes 200.
- **SME review:** ⏳ pending.

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
| 2026-07-13 | Environmental Controls & Spill Response | 14 | **Twenty-fourth and FINAL category (100% 🎉 — authoring rollout complete).** EPA + OSHA HAZWOPER, worker-awareness level. Environmental duty of care (know where the water goes), SPCC 40 CFR 112 (>1,320 gal aboveground / >42,000 buried; <55-gal containers excluded), secondary containment (largest container + freeboard, keep drain valves closed), safe fueling (stay at nozzle, no topping off — #1 spill source), stormwater/NPDES CGP 40 CFR 450.21 (≥1 acre → SWPPP, 14-day stabilization, washout/fuel discharge prohibited), erosion/sediment BMPs (trench in silt fence, inlet protection, stabilized entrance), concrete washout (pH ~12, contained only), spill kits (match to hazard, stage at fueling/storage), stop-contain-notify-clean-up response + protect-yourself line, federal reporting (40 CFR 110 sheen rule + CERCLA RQ 302 → NRC 1-800-424-8802), HAZWOPER 1910.120 (q)(6) tiers Awareness/Operations-8hr/Technician-24hr + (e) 40hr+3day/24hr+1day/8hr refresher (recognize & report, don't play hero), RCRA satellite accumulation (55 gal / 3 days, closed/labeled/don't-mix), dust & exhaust control (water trucks; silica → COSHH), everyday housekeeping. Flexed to 14. Facts grounded vs epa.gov + osha.gov via research subagent; BMP names/kit contents = consensus. Replaced 10-topic placeholder. Silica/SDS → COSHH, housekeeping → Housekeeping cross-ref'd. **Rollout totals: 24/24 categories, 312 authored topics, 0 placeholder files.** SME review pending. | Twenty-third category (96%). OSHA heat-illness + OSHA/NIOSH cold-stress **guidance** (no specific heat/cold standard — General Duty Clause §5(a)(1) basis; federal heat rule proposed, not final). Heat: overheating physiology, the five heat illnesses (rash/cramps/syncope/exhaustion/stroke), heat-stroke emergency (104°F/40°C, 106°F+ in 10-15 min, call 911 + cold-water/ice immersion), Water·Rest·Shade (1 cup/15-20 min ≈ ¾-1 qt/hr, cap 48 oz/hr & 12 qt/day), acclimatization (Rule of 20%, 7-14 days, >70% deaths first week / ~half first day), risk factors + heat index/WBGT + NIOSH-OSHA Heat app, hot-weather planning. Cold: heat-loss physiology, hypothermia (core <95°F/35°C, warm center first, don't rub, shivering-stops = bad), frostbite/trench foot (60°F, 25× faster wet)/chilblains, three-layer dress, wind chill (40°F+35mph≈28°F) + cold risk factors, cold-weather planning, and a shared buddy-system talk (both illnesses cloud judgment). Flexed to 14. Facts grounded vs osha.gov + cdc.gov/niosh via research subagent; all figures = OSHA/NIOSH guidance not PELs. Replaced 10-topic placeholder. First Aid + PPE cross-ref'd. Build all pages prerender. SME review pending (elevated — clinical emergency content). | Twenty-second category (92%). Authored to **US/OSHA + NIOSH** (no OSHA lifting standard — General Duty Clause §5(a)(1) basis; UK MHOR flagged for SME review if audience changes). Why MSDs happen (sudden vs wear-and-tear; sprains/strains/back = most common construction injury, ~50% above other industries), ergonomic risk factors (force/awkward+static posture/repetition/vibration/contact stress/duration — they stack), NIOSH Lifting Equation (94-110: LC 51 lb, RWL = 51×HM×VM×DM×AM×FM×CM, LI = load÷RWL, >1.0 risk / >3.0 high), lift size-up (test load, clear path, set body), safe technique (knees not back, load close, legs lift, never twist under load), team lifting (two-person, one caller, move as one), mechanical aids (carts/dollies/hand trucks/forklifts/hoists/lift tables — engineering controls beat technique), carry/push/pull ("push beats pull" — OSHA Tech Manual §VII), awkward/overhead/repetitive postures (raise the work, break up repetition), staging to point of use at knuckle-to-shoulder height, warm-up/conditioning/pacing (support not a fix), early-symptom recognition & reporting. Facts grounded vs cdc.gov/niosh + osha.gov via research subagent; all figures = NIOSH/OSHA guidance not PELs. Replaced 6-topic placeholder. Accident Reporting + First Aid cross-ref'd. Build all pages prerender. SME review pending. | Twenty-first category (88%). Authored to **US/OSHA** — Hazard Communication 1910.1200 (GHS), not UK COSHH (flagged for SME review if audience changes). What-counts-as-hazardous (incl. work-created), HazCom program & right-to-know (written program (e), training (h)), GHS labels + Danger/Warning signal words (f), the 9 pictograms, 16-section SDS (g), exposure routes (inhalation/skin/ingestion/injection), PELs/air monitoring (1926.55/1910.1000 Z-tables; RELs/TLVs = guidance), silica 1926.1153 (PEL 50/AL 25 µg/m³, Table 1 wet+LEV), lead 1926.62 (PEL 50/AL 30) + hex chrome 1926.1126/cadmium 1926.1127, dust/vapor/fume/mist forms, hierarchy of controls (PPE last), chemical storage/segregation + flammables, secondary-container/workplace labeling + portable-container exception (f)(6), chemical spill/skin-eye response (15-min flush → First Aid). Flexed to 14. Facts grounded vs osha.gov via research subagent. Replaced 6-topic placeholder. Respirators → PPE, clinical first aid → First Aid, silica-in-demo → Demolition, spill reporting → Environmental cross-ref'd. Build all pages prerender. SME review pending. |
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
| 2026-07-12 | Demolition Safety | 13 | Fourteenth category (58%). OSHA 1926 Subpart T (§850–860, all 11 sections) + health/fire cross-cutting. Pre-demolition engineering survey (competent person + written evidence), utility control outside building line, hazardous materials (test/purge tanks; asbestos 0.1 f/cc, lead PEL 50/AL 30, silica PEL 50/AL 25 µg/m³), structure prep & designated access (42-in opening guard, stairwell covered 2 floors below), exclusion zones/drop-zone barricades (42 in / 6 ft + signs §850(h)), chutes (>45° enclosed, gate + ≤48-in intake) & 25%-floor-opening rule, manual masonry/wall demo (safe floor loads, 1-story lateral bracing, no wall-top work in bad weather), manual floor removal (2×10 planks, 16-in gap, 20-ft clearance), mechanical demolition (ball ≤50% rated load / ≤25% line breaking strength; no crew in area during balling; swivel + positive attach; cut steel free & remove cornices before pulling walls), steel removal (column-length/tier-by-tier, not overstressed), silica/dust controls (wet methods, LEV, HEPA), fire/hot-work (purge before cutting, keep standpipes/egress), continuing competent-person inspections & unplanned-collapse prevention (floor loads, 25-ft-above-grade storage). Facts verified against osha.gov Subpart T via research subagent (corrected §850 paragraph lettering). Replaced 10-topic placeholder. Cross-refs asbestos/PPE/welding/fire/electrical/excavation/rigging. Build all pages prerender. SME review pending. |
| 2026-07-12 | Construction Safety | 13 | Thirteenth category (54%). OSHA 1926 Subpart C (§20–35 general provisions) + Subpart D (§51/.56 sanitation/illumination) + Subpart I (§300–307 tools) + Subpart G (§200–203 signs/signals/barricades) + OSH Act (rights, §11(c), competent person §32(f)) + Focus Four. Focus Four overview, OSHA rights/responsibilities, new-worker orientation/training (§21), JHA & hierarchy of controls, competent person + daily inspections, struck-by (4 types + vehicles/backovers), caught-in/between (cave-ins/machinery/pinned), hand & power tools (guards/condition/GFCI), signs-tags-signals-barricades (Danger-red/Caution-yellow), illumination (5/10 fc)/sanitation/welfare, PPE overview (employer-paid, last line), emergency action plans (§35) + first aid/fire, stop-work authority + hazard/near-miss reporting. Replaced placeholder grab-bag that duplicated dedicated categories; owns Struck-By + Caught-In/Between, defers Falls/Electrocution/PPE/Housekeeping/tools-air/traffic/recordkeeping to their categories. Build 1108 pages. SME review pending. |
| 2026-07-13 | Site Access and Public Protection | 12 | Fifteenth category (63%). OSHA 1926 Subpart G (§200–203) + public-protection provisions from fall-protection (§501(c)/502(i)/(j)) and excavation (§651(j)(2)/(l)) rules + §850(k) demolition canopy + MUTCD Part 6. Perimeter/fencing/gates & attractive-nuisance, accident-prevention signs (Danger red / Caution yellow / Exit red ≥6 in / Safety-instruction green / Directional; §200(g) traffic signs), accident-prevention tags (temporary, never substitute for signs; 1910.145(f) Danger/Caution/Warning/Biohazard), barricades & channelizing devices (§202 → MUTCD Part 6, 45° orange/white retroreflective stripes), flaggers & signaling (STOP/SLOW paddle ≥18 in primary, emergency flag ≥24 in, ANSI/ISEA 107 Class 2/3), pedestrian walkways & ADA-accessible routes (continuous detectable path, ≤4-in projection, audible/vibrotactile cues), covered walkways/canopies/sidewalk sheds (§850(k): 8 ft / 2 ft wider / 150 psf), overhead & falling-object protection (§501(c) three controls + §502(j) toeboard ≥3½ in / ≥50 lb), open holes & excavations near public (cover ≥2× load marked HOLE/COVER, spoil ≥2 ft, guarded ≥6-ft walkways), visitor/delivery/contractor access control, night & low-visibility (retroreflective + Type A/B/C-D warning lights, §56 5 fc), daily inspection of controls. Replaced 10-topic placeholder. Facts verified vs osha.gov Subpart G + MUTCD via research subagent (corrected 24-in flag, §202→MUTCD not ANSI D6.1, tag wordings→1910.145(f)). Vehicle/Excavation/Heights cross-ref'd. Build all pages prerender. SME review pending. |
| 2026-07-13 | Housekeeping | 12 | Sixteenth category (67%). OSHA 1926.25 (a/b/c housekeeping) + 1926.252 (waste disposal — >20 ft enclosed chute, 42 in/6 ft barricaded drop area, oily rags in fire-resistant covered containers) + 1926.250 (storage/stacking, aisles, posted max floor load) + 1926.701(b) (rebar impalement) + 1926.51 (sanitation — potable water, Table D-1 toilets ≤20=1 / 20+=1 per 40 / 200+=1 per 50, washing) + 1926.56 (illumination Table D-3 — 3/5/10/30 fc) + 1910.22 (walking-working surfaces). Housekeeping-as-control, walkways/aisles/exits, protruding nails & scrap lumber, cord/hose/lead management, combustible-debris removal, waste containers & separation, oily-rag spontaneous combustion, material storage/stacking, debris chutes/drop areas, poor-housekeeping slips/trips, lighting/sanitation/welfare, clean-as-you-go ownership & inspection. Flexed to 12. Facts verified vs osha.gov via research subagent — corrected: **no 45° chute rule in 1926.252** (that's Subpart T demolition), **1926.56 general construction area lighting = 3 fc** (not 5), spontaneous-combustion = NFPA rationale not OSHA text. Replaced 6-topic placeholder. Rigging/STF/Fire/Welding/Demolition/Electrical cross-ref'd. Build all pages prerender. SME review pending. |
| 2026-07-13 | Asbestos Awareness | 11 | Twentieth category (83%). OSHA 29 CFR 1926.1101 (Asbestos — Construction), **awareness level only**. What asbestos is + don't-disturb rule, health effects (asbestosis/lung cancer/mesothelioma, no safe level, 10–40 yr latency + smoking synergy → NIOSH/EPA), where found (EPA/NIOSH ACM list: TSI, sprayed surfacing, floor tile & mastic, transite, popcorn ceilings, cement pipe, gaskets), ACM (>1%) & PACM (pre-1980 TSI/surfacing presumed asbestos) definitions (b), exposure limits (PEL 0.1 f/cc TWA / excursion 1.0 f/cc-30 min, (c)) + how fibers go airborne, the four work classes I–IV (all trained/licensed work), recognizing & not disturbing suspect material + prohibited methods (g)(3): no high-speed abrasive saws w/o ventilation, no compressed air, no dry sweeping, no sanding flooring), regulated areas/signs/labels (e)/(k) with **current DANGER legend (MAY CAUSE CANCER / CAUSES DAMAGE TO LUNGS)**, stop-and-report response (found vs already-disturbed), why ordinary dust masks fail & real asbestos PPE = trained-crew signal, and awareness-worker-vs-licensed-abatement boundary. Facts verified vs osha.gov via research subagent — **corrected sign legend** (legacy "CANCER AND LUNG DISEASE HAZARD" retired 2016, shown only as "older signs may read"), attributed ACM product list → EPA/NIOSH and latency/smoking → NIOSH/EPA (not the standard), kept strictly at awareness level. PEL/excursion, ACM >1%, PACM pre-1980, four classes confirmed verbatim. Replaced 6-topic placeholder. Respirator depth → PPE, demolition ACM → Demolition, SDS → HazCom cross-ref'd. Build all pages prerender. SME review pending. |
| 2026-07-13 | First Aid | 12 | Nineteenth category (79%). OSHA 1926.50 / 1910.151 + 1910.1030 (BBP) + AHA/Red Cross first-aid curricula. Readiness/program, trained providers & medical services (1926.50(a-c), "reasonably accessible in terms of time and distance"), kits & supplies (1926.50(d): easily accessible + weatherproof + weekly check; ANSI Z308.1), emergency communication (1926.50(e-f): ambulance contact, post numbers where no 911, post site location, direct responders in), scene safety & primary check (electrical/confined-space/traffic first; responsiveness-airway-breathing-circulation), bloodborne pathogens (1910.1030 universal precautions, gloves/CPR barrier, exposure follow-up), bleeding control (direct pressure→pack→tourniquet, Stop the Bleed), shock (recognize, lie down, keep warm, no food/drink), burns (thermal cool-and-cover, chemical flush 15-20 min, electrical = emergency), fractures/sprains/strains (immobilize; RICE; head/neck/back = don't move), eye injuries & eyewash (1926.50(g)/1910.151(c), flush 15 min, don't rub/don't remove embedded), CPR/SCA/AED (100-120/min ~2 in, hands-only ok, AED prompts). Facts verified vs osha.gov via research subagent — corrected: "reasonably accessible" vs "near proximity" (construction vs GI), 1926.50(d)(1) "easily accessible", weatherproof/weekly = (d)(2), eyewash = 1926.50(g), 3-4/15-min response = interpretation letters not CFR, Class A/B & clinical protocols = ANSI-ISEA/AHA/Red Cross not OSHA. Awareness-level only; every clinical talk points to hands-on certification. Replaced 6-topic placeholder. Heat/cold → forthcoming category; recordkeeping → Accident Reporting cross-ref'd. Build all pages prerender. SME review pending (elevated — clinical content). |
| 2026-07-13 | Accident Reporting | 11 | Eighteenth category (75%). OSHA 29 CFR Part 1904 (Recordkeeping & Reporting). Why-we-report (care/correction/learning/compliance), notify-supervisor-immediately, §1904.39 severe-injury deadlines (fatality 8 hr / hospitalization-amputation-eye 24 hr; 30-day & 24-hr windows; 1-800-321-OSHA/Area Office/online; (b)(2) report contents), §1904.7(a) recordability (death/days-away/restricted/medical-beyond-first-aid/loss-of-consciousness/PLHCP diagnosis), §1904.7(b)(5)(ii) closed first-aid list vs medical treatment, the 300/300A/301 forms + 7-day entry (§1904.29(b)(3)) & Feb 1–Apr 30 posting (§1904.32(b)(6)), near-miss reporting, investigation & root-cause (5-whys, preserve scene as good practice), corrective actions up the hierarchy of controls (owner/deadline/verify), anti-retaliation rights (§§1904.35/.36 + 11(c), 30-day complaint window), writing a clear factual report. Facts verified vs osha.gov Part 1904 via research subagent — corrected: report contents = 1904.39(b)(2) not (b)(1); 7-day deadline covers 300 Log + 301 both; scene preservation = good practice not a Part 1904 duty. Replaced 6-topic placeholder. First-aid response → First Aid cross-ref'd. Build all pages prerender. SME review pending. |
| 2026-07-13 | Slips, Trips and Falls | 12 | Seventeenth category (71%). OSHA 1910 Subpart D (Walking-Working Surfaces §22–30). Mechanisms (slip/trip/same-level & lower-level fall), §22 surface condition (clean/dry/free-of-hazards, loads, access/egress, inspect-correct-repair; qualified person only for structural-integrity repairs), wet/oily/slippery surfaces (drainage, dry standing places, mats, spill response), ice/snow/weather (penguin walk, treat paths, metal ices first), uneven surfaces/changes in level (fix→ramp→mark), cord/hose/clutter trip hazards, slip-resistant footwear (last layer, match sole to surface, keep tread), lighting for movement, stairways (30–50°, uniform risers/treads 9.5-in max/min, 22-in width), handrails & guardrails (handrail 30–38 in / stairs ≥3 treads & ≥4 risers; guardrail 42 in ±3 / midrail midway / 200 lb / toeboard ≥3.5 in; **GI 4-ft** trigger), floor holes/covers (≥4 ft fall + <4-ft step-into no-floor triggers; cover ≥2× load, secured, marked HOLE/COVER), open-sided floors/docks/platforms (4 ft vs construction 6 ft). Facts verified vs osha.gov Subpart D via research subagent — corrected 4 construction-carryover errors: stair-rail trigger ≥3 treads & ≥4 risers (not "4 risers or >30 in"), stair-rail height ≥30/≥42 in (no 36 in), qualified-person = structural-integrity only, midrail = "midway". Replaced 6-topic placeholder. Height fall-arrest → Working at Heights; debris/storage → Housekeeping; ASTM F2413 → PPE cross-ref'd. Build all pages prerender. SME review pending. |
| 2026-07-12 | Rigging and Material Handling Equipment | 14 | Twelfth category — **50% milestone**. OSHA 1926.251 (slings/rigging) + Subpart CC (cranes) + 1926.250/.25 (storage/housekeeping) + ASME B30. Qualified rigger & inspect-each-shift, sling types/selection + ID tags, wire-rope removal (10/5 broken wires per lay, "never saddle a dead horse"), alloy chain (alloy-only overhead, ≤12-mo periodic inspection + records, Table H-2 wear), synthetic web/round removal criteria + edge protection, sling angles (60/45/30° = 1.15/1.41/2×; avoid <30°) & load charts, hitches (vertical 100% / choker ~75–80% / basket up to 2×), hardware (shackles Table H-19, hooks 15%/10°/bowl-load, eyebolts shoulder-type/angled derating), load weight (densities: steel 490/concrete 150/water 62.4 lb/ft³) + center of gravity, lift plan & roles (operator/rigger/signal/lift-director, critical-lift triggers), crane signals (Standard Method, when required, one signal person), suspended-load fall zone + tag lines (non-conductive near lines), mobile-crane setup (ground §1402, outriggers/cribbing/level, power-line Table A 10/15 ft, swing-radius barricade §1424), material storage/stacking (brick 7 ft + 2 in/ft taper, block half-block taper, lumber 16/20 ft, bags cross-keyed every 10). Flexed to 14 topics. Forklift/vehicle/electrical cross-ref'd. Build 1205 pages. Progress 12/24 (50%). SME review pending. Also: switched /start-session + CLAUDE.md procedure to auto-proceed (no separate go-ahead). |

---

## How to update this file

At `/end-session`:
1. Move the finished category into **Completed categories** with its topic list,
   sources, verification results, and SME-review status.
2. Update **Progress: N / 24** and **Current / next up**.
3. Add a row to the **Session log**.

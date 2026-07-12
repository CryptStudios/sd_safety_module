import type { TrainingArticleSection } from "@/lib/training-data";

/**
 * Real, authored training content for individual topics, sourced from
 * public-domain material (OSHA / NIOSH). When a topic has an entry here, the
 * page renders this instead of the generated placeholder text.
 *
 * Key format: `${categorySlug}/${topicSlug}`.
 *
 * `sections[0]` is the lead — its body renders directly under the topic title
 * (its heading is not shown), matching how the article page is laid out.
 */
export type AuthoredTopic = {
  description: string;
  sections: TrainingArticleSection[];
};

export const authoredTopics: Record<string, AuthoredTopic> = {
  "confined-space/hazard-identification-in-confined-spaces": {
    description:
      "Recognizing what makes a confined space dangerous — the atmospheric, engulfment, and physical hazards you must identify and control before anyone enters.",
    sections: [
      {
        // Lead — rendered under the title, heading not shown.
        heading: "Overview",
        body: [
          "Before anyone enters a confined space, the crew needs to know what could hurt them inside. A confined space is any area big enough to work in, with limited ways in and out, that isn't meant for people to stay in — tanks, vaults, pits, manholes, silos, sewers, crawl spaces. The dangers are usually invisible from outside, so hazard identification comes first.",
          "A space can look completely normal and still kill you. The air can be missing oxygen or full of toxic or flammable gas, and the walls or stored material can trap or bury a worker. Spot these hazards before entry, and keep watching during the work."
        ]
      },
      {
        heading: "What counts as a confined space",
        body: [
          "OSHA calls it a confined space when it's big enough to enter and work in, has limited entry or exit, and isn't designed for people to stay in. On site that means manholes, tanks, boilers, pits, sewers, storm drains, crawl spaces, silos, and vaults.",
          "It becomes a permit-required space when it adds a serious hazard: a hazardous atmosphere, material that could engulf you (loose grain, sand, liquid), a shape that could trap you (converging walls, a floor sloping to a narrow opening), or any other recognized danger like unguarded machinery or live wires. Construction permit spaces fall under OSHA 29 CFR 1926 Subpart AA."
        ]
      },
      {
        heading: "Atmospheric hazards — the leading cause of death",
        body: [
          "Bad air is the number-one killer in confined spaces, and you can't see or smell most of it. Test the air from outside with a calibrated meter before entry — always in this order:",
          { list: ["Oxygen first", "Then flammable gases and vapors", "Then toxic contaminants"] },
          "Safe ranges to check against:",
          {
            list: [
              "Oxygen — 19.5% to 23.5%. Below 19.5% drops you with no warning; above 23.5% everything burns violently.",
              "Flammable gas or vapor — below 10% of the LEL (Lower Explosive Limit).",
              "Toxic gases — below their permissible exposure limits."
            ]
          },
          "Two common killers: hydrogen sulfide (H2S) smells like rotten eggs at first but kills your sense of smell as it rises, and carbon monoxide (CO) is odorless and often blows in from an engine, generator, or welding near the opening."
        ]
      },
      {
        heading: "Physical hazards inside the space",
        body: [
          "The space itself can hurt you. Watch for:",
          {
            list: [
              "Engulfment — loose sand, grain, or sludge that can bury a worker in seconds.",
              "Entrapment — converging walls or a funnel-shaped floor that pins you in.",
              "Machinery — augers, mixers, or blades that weren't locked out.",
              "Live wiring, heat buildup, standing water, poor footing, and falling objects.",
              "Low light or loud noise that hides hazards and makes it hard to communicate."
            ]
          },
          "Hazards also come from the work. Welding adds fumes and burns up oxygen, solvents give off vapors, and a running engine outside can push exhaust in. A space that tested clean an hour ago can turn deadly once work starts — so monitor continuously, not just once."
        ]
      },
      {
        heading: "Identifying the hazards before entry",
        body: [
          "Treat every confined space as dangerous until testing proves otherwise. Before entry:",
          {
            list: [
              "Identify and label the space, and check what it held or was used for.",
              "Lock out any energy, mechanical, or product lines feeding into it.",
              "Test the air from outside, and keep monitoring throughout.",
              "Set up ventilation if it's needed."
            ]
          },
          "Then ask about this exact space:",
          {
            list: [
              "What's the only way in and out — and could a rescuer reach an injured worker through it?",
              "What could change while the crew is inside?",
              "Who's the attendant staying outside, and how do they keep in contact?"
            ]
          },
          "If a control is missing, damaged, or unclear — or conditions change — stop until it's fixed. Never enter to rescue someone without proper equipment and training; many confined space deaths are rescuers who rushed in unprotected."
        ]
      }
    ]
  },

  "confined-space/permit-required-vs-non-permit-confined-spaces": {
    description:
      "How to tell a permit-required confined space from a non-permit one — and why that classification decides everything about how you enter.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Not every confined space needs a permit, but every confined space has to be classified before anyone goes in. That classification decides whether you can enter with basic precautions or need the full permit system — testing, an attendant, rescue standing by. Getting it wrong is how people die in spaces that 'looked fine.'",
          "The question is always the same: does the space hold a serious hazard, or could it? The answer sorts it into permit-required or non-permit."
        ]
      },
      {
        heading: "What makes a space permit-required",
        body: [
          "A space is permit-required if it has any one of these:",
          {
            list: [
              "A hazardous atmosphere, or the potential for one — bad oxygen, flammable or toxic gas.",
              "Material that could engulf an entrant — loose grain, sand, sludge, or liquid.",
              "An internal shape that could trap or asphyxiate you — converging walls or a floor sloping to a narrow opening.",
              "Any other recognized serious hazard, like unguarded machinery, exposed wiring, or heat stress."
            ]
          },
          "One is enough. Under OSHA 29 CFR 1926 Subpart AA, a permit-required space triggers the full program: a written permit, atmospheric testing, an attendant, and rescue arrangements."
        ]
      },
      {
        heading: "Non-permit confined spaces",
        body: [
          "A non-permit confined space still has the limited-entry, not-for-occupancy problem, but it does not contain — and cannot generate — a hazard capable of causing death or serious harm. It can be entered without a permit, but only after you have confirmed there is no atmospheric or physical hazard.",
          "The catch: a space is only non-permit as long as nothing changes. Bring in a fuel-burning tool, a solvent, or a hot-work torch, and it can become permit-required on the spot."
        ]
      },
      {
        heading: "Reclassifying a space",
        body: [
          "A permit space can sometimes be reclassified to non-permit — but only when you can prove and document that:",
          {
            list: [
              "There are no actual or potential atmospheric hazards.",
              "All other hazards are eliminated — not just controlled — without entering the space.",
              "If entry is needed to eliminate a hazard, that entry is done under a full permit.",
              "The basis for reclassification is written down and available to entrants."
            ]
          },
          "If ventilation is the only thing keeping the air safe, the space stays permit-required — ventilation controls a hazard, it doesn't eliminate it."
        ]
      },
      {
        heading: "When in doubt, treat it as permit-required",
        body: [
          "Classification is not a guess or a shortcut to save time. If you cannot confirm a space is free of hazards, treat it as permit-required and use the full system. The cost of over-protecting is a few minutes; the cost of under-protecting is a fatality — often a second one when someone rushes in to help."
        ]
      }
    ]
  },

  "confined-space/atmospheric-testing-and-air-monitoring": {
    description:
      "How to test and monitor the air in a confined space — the order, the numbers, and why one clean reading is never enough.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The air is what kills most people in confined spaces, and you can't judge it by looking. Testing turns an unknown atmosphere into a known one. It has to happen before entry, from outside the space, and it has to keep happening the whole time anyone is inside.",
          "Use a calibrated, direct-reading meter, and follow the same order every time — the sequence matters because one reading affects how you read the next."
        ]
      },
      {
        heading: "Test in the right order",
        body: [
          "Always test the atmosphere in this order:",
          {
            list: [
              "Oxygen first — a meter can't read other gases correctly if oxygen is off.",
              "Flammable gases and vapors second.",
              "Toxic contaminants third."
            ]
          },
          "Test top to bottom, too. Gases layer — some are heavier than air and pool at the bottom, some are lighter and collect at the top. Lower the probe through the full depth of the space, not just the opening."
        ]
      },
      {
        heading: "Know the numbers",
        body: [
          "Acceptable entry conditions:",
          {
            list: [
              "Oxygen — 19.5% to 23.5%. Below is deficient; above is enriched and a fire risk.",
              "Flammable gas or vapor — below 10% of the LEL.",
              "Toxic gases — below their permissible exposure limits, such as hydrogen sulfide and carbon monoxide."
            ]
          },
          "If any reading is out of range, no one enters until ventilation brings it back and a retest confirms it."
        ]
      },
      {
        heading: "Use the meter correctly",
        body: [
          {
            list: [
              "Calibrate and bump-test the meter per the manufacturer — a meter that isn't calibrated is worse than none, because it lies with confidence.",
              "Let the readings stabilize before you trust them.",
              "Test from outside the space; never lean in to place the probe.",
              "Know what your meter does and doesn't detect — a standard 4-gas meter won't catch every toxic gas."
            ]
          }
        ]
      },
      {
        heading: "Monitor continuously — one test isn't enough",
        body: [
          "Conditions change. Work adds fumes and burns oxygen, temperature shifts move gases, and hazards can seep in from connected pipes or nearby operations. Keep monitoring throughout the entry, and pull everyone out immediately if an alarm sounds. A space that passed at 8 a.m. is not guaranteed safe at noon."
        ]
      }
    ]
  },

  "confined-space/ventilating-a-confined-space": {
    description:
      "Using forced-air ventilation to make a confined space safe to enter — and understanding what ventilation can and can't do.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Ventilation is the main tool for controlling bad air in a confined space. Done right, it clears out contaminants and keeps fresh air flowing to the people inside. But ventilation manages a hazard — it doesn't erase it — so it never replaces testing and monitoring."
        ]
      },
      {
        heading: "How forced-air ventilation works",
        body: [
          {
            list: [
              "Use continuous, mechanical (forced-air) ventilation — not natural airflow — directed into the areas where people are working.",
              "Pull air from a clean source. Never draw from near exhaust, engines, or other contamination.",
              "Run the blower long enough to turn the air over before entry, and keep it running the whole time workers are inside.",
              "Ventilate the full space, including low spots and dead-end areas where gas collects."
            ]
          },
          "The point is to keep fresh air moving where the work is happening, continuously."
        ]
      },
      {
        heading: "Watch the air source",
        body: [
          "The most common ventilation mistake is a contaminated air supply. A blower parked next to a running generator or truck pumps carbon monoxide straight into the space and poisons the crew. Position the intake upwind, away from any engine or exhaust, and check it every time equipment or conditions move."
        ]
      },
      {
        heading: "Ventilation controls, it doesn't eliminate",
        body: [
          "Because ventilation only controls the hazard, the space stays permit-required whenever ventilation is what's keeping it safe. That means:",
          {
            list: [
              "Keep testing and monitoring while ventilating — prove the air is good, don't assume it.",
              "If the blower stops or fails, treat the space as hazardous and evacuate.",
              "Never substitute oxygen for ventilation — enriching with pure oxygen creates an explosion hazard."
            ]
          }
        ]
      },
      {
        heading: "Special cases",
        body: [
          "Some atmospheres can't just be ventilated. Purging, flushing, or inerting may be needed first to clear flammable or toxic residues. Hot work, coating, or solvent use inside the space adds contaminants faster than a small blower can clear them — plan ventilation for the work being done, not just the empty space."
        ]
      }
    ]
  },

  "confined-space/isolation-and-lockout-before-entry": {
    description:
      "Cutting off every source of energy and material to a confined space before entry — so nothing can start, fill, or energize while workers are inside.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A confined space is only as safe as what's connected to it. Pipes can flood it, augers can start, wires can energize, steam can scald. Isolation means physically cutting off every one of those sources before anyone enters — and locking it so it can't come back on."
        ]
      },
      {
        heading: "Isolate every energy and material source",
        body: [
          "Before entry, identify and isolate everything that feeds the space:",
          {
            list: [
              "Mechanical — augers, mixers, agitators, conveyors: lock out and, where possible, physically block motion.",
              "Electrical — de-energize and lock out circuits, then verify zero energy.",
              "Process lines — liquids, gases, steam: blank, blind, or use double block-and-bleed to stop flow.",
              "Stored energy — springs, hydraulics, pressure, gravity: release or restrain it."
            ]
          },
          "Just closing a valve or flipping a switch is not isolation — those get reopened or bumped on. Isolation means a physical, locked barrier."
        ]
      },
      {
        heading: "Blanking, blinding, and double block-and-bleed",
        body: [
          "For piped-in liquids and gases, a closed valve can leak or be opened by mistake. Stronger methods:",
          {
            list: [
              "Blanking or blinding — insert a solid plate rated for the line pressure to fully seal the pipe.",
              "Double block-and-bleed — close two in-line valves, then open a bleed valve between them so any leak drains away instead of into the space.",
              "Physically disconnect or remove a section of pipe where practical."
            ]
          }
        ]
      },
      {
        heading: "Lockout/tagout",
        body: [
          {
            list: [
              "Each worker applies their own lock and tag to every isolation point.",
              "Verify zero energy — try to start the equipment or test for pressure and voltage before entry.",
              "Locks stay on until the work is done and all entrants are out.",
              "Only the person who applied a lock removes it."
            ]
          }
        ]
      },
      {
        heading: "Verify before you trust",
        body: [
          "Isolation isn't done until it's verified. Confirm valves are blanked, switches are locked, and the equipment truly won't move or energize. If you can't confirm a source is isolated, the entry doesn't happen. Most 'sudden' confined space incidents were something that was supposed to be off but wasn't."
        ]
      }
    ]
  },

  "confined-space/engulfment-and-entrapment-hazards": {
    description:
      "Two of the fastest killers in confined spaces — being buried by loose material or trapped by the shape of the space — and how to control them.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Engulfment and entrapment don't give you time to react. Loose material can bury a worker in seconds, and a tapering space can pin someone where no one can reach them. These hazards are built into the space itself, so they have to be controlled before entry — not managed once you're inside."
        ]
      },
      {
        heading: "Engulfment — being buried alive",
        body: [
          "Engulfment happens when loose, flowing material surrounds and captures a worker, filling the space and crushing or suffocating them. It's common in:",
          {
            list: [
              "Silos, hoppers, and bins holding grain, sand, gravel, or pellets.",
              "Tanks and vaults with sludge, slurry, or liquid.",
              "Any space where material can flow, cave in, or bridge and collapse."
            ]
          },
          "A crust or 'bridge' of material can look solid, then collapse the moment a worker steps on it. Flowing grain can pull a person under in seconds — faster than anyone can climb out or be pulled free."
        ]
      },
      {
        heading: "Entrapment — trapped by the shape",
        body: [
          "Entrapment comes from the space's geometry: converging walls, or a floor that slopes down and tapers into a smaller cross-section. A worker slides or is drawn into the narrow part and can't get out, and the position alone can suffocate them even without material covering them."
        ]
      },
      {
        heading: "Controlling the hazard",
        body: [
          {
            list: [
              "Stop all flow of material in and out — lock out augers, conveyors, and fill or discharge lines.",
              "Never stand on top of, or work below, stored flowable material that could shift.",
              "Use required engineering controls, such as designed walking surfaces rather than the product itself.",
              "Wear a full-body harness and retrieval line so an attendant can pull you back before you're submerged.",
              "Keep the attendant watching and in communication the entire time."
            ]
          }
        ]
      },
      {
        heading: "Never enter to rescue without a plan",
        body: [
          "Most engulfment deaths include a would-be rescuer who jumped in and was engulfed too. If a worker is caught, do not enter unprotected — stop the flow, put the rescue plan into action, and use retrieval equipment. Speed matters, but a second victim helps no one."
        ]
      }
    ]
  },

  "confined-space/the-confined-space-entry-permit": {
    description:
      "What the entry permit is, what it must contain, and why no one enters a permit space until it's filled out, verified, and signed.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The entry permit is the document that proves a permit space is actually ready — tested, isolated, and set up with an attendant and rescue before anyone goes in. It's not paperwork for its own sake; it's the checklist that catches the missing step that would otherwise kill someone."
        ]
      },
      {
        heading: "What the permit must contain",
        body: [
          "A complete entry permit records:",
          {
            list: [
              "The space being entered, and the purpose and date of entry.",
              "The authorized entrants, the attendant, and the entry supervisor.",
              "The hazards of the space and the measures used to isolate and control them.",
              "Acceptable entry conditions and the atmospheric test results, with the time and tester.",
              "Rescue and emergency services, and how to summon them.",
              "Communication methods and the required equipment — PPE, meters, retrieval gear.",
              "The authorized duration of the entry."
            ]
          }
        ]
      },
      {
        heading: "Signed before entry, posted during",
        body: [
          "The entry supervisor verifies every item and signs the permit before entry begins. The signed permit is posted where entrants can see it, so anyone can confirm the space was prepared and what the acceptable conditions are."
        ]
      },
      {
        heading: "The permit has a life span",
        body: [
          {
            list: [
              "It's valid only for the specific space, task, and time listed.",
              "It's canceled when the work is done, when the duration ends, or when conditions change.",
              "Any new or changed hazard voids the permit — stop, fix it, and issue a new one.",
              "Canceled permits are kept on file to review the program and catch problems."
            ]
          }
        ]
      },
      {
        heading: "Why it matters on site",
        body: [
          "The permit turns 'I think it's fine' into a verified, signed record. If an item can't be checked off — the air isn't right, rescue isn't arranged, isolation isn't confirmed — the permit isn't signed and no one enters. Treat a blank or incomplete permit as a locked door."
        ]
      }
    ]
  },

  "confined-space/authorized-entrant-duties": {
    description:
      "What the worker going into the space is responsible for — knowing the hazards, staying in contact, and getting out the moment something's wrong.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The authorized entrant is the person who actually goes into the space. The job isn't only to do the work — it's to stay alert to the hazards, keep in constant contact with the attendant, and get out fast if anything changes. An entrant who knows the warning signs saves their own life."
        ]
      },
      {
        heading: "Know the hazards before you go in",
        body: [
          {
            list: [
              "Understand the hazards of the space — how you'd be exposed, the warning signs, and the symptoms of exposure.",
              "Know what oxygen loss, toxic gas, or engulfment feels like early, so you catch it in yourself or a coworker.",
              "Confirm the permit is signed and know the acceptable entry conditions before you enter."
            ]
          }
        ]
      },
      {
        heading: "Use your equipment and stay connected",
        body: [
          {
            list: [
              "Use all required PPE and equipment properly — harness, retrieval line, respirator, meter.",
              "Keep the retrieval line attached so the attendant can pull you out.",
              "Maintain communication with the attendant at all times, so they always know your status."
            ]
          },
          "If the attendant can't reach you, that alone is a reason to come out."
        ]
      },
      {
        heading: "Get out immediately when",
        body: [
          "Exit the space right away — without waiting to finish the task — if:",
          {
            list: [
              "The attendant or supervisor orders an evacuation.",
              "You notice any warning sign of exposure — dizziness, headache, trouble breathing.",
              "A monitor alarm goes off.",
              "You detect any prohibited or changed condition."
            ]
          }
        ]
      },
      {
        heading: "Speak up",
        body: [
          "The entrant is closest to the hazard. If something feels off — an odor, a sound, a change in the air, a control that's missing — say so and get out. It's always better to exit for a false alarm than to wait for a certainty that never comes."
        ]
      }
    ]
  },

  "confined-space/attendant-hole-watch-duties": {
    description:
      "The person stationed outside the space is the entrant's lifeline — monitoring conditions, controlling entry, and calling rescue. What the attendant must and must not do.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The attendant — the hole watch — stays outside the confined space and keeps the entrants alive. They watch conditions, stay in contact, control who goes in, and start the rescue if something goes wrong. It's a full-time job: an attendant who gets distracted or wanders off leaves the crew with no lifeline."
        ]
      },
      {
        heading: "Stay outside and stay put",
        body: [
          "The attendant's first rule is to remain outside the space and at the post the entire time anyone is inside. They never enter to help — even in an emergency — unless they're relieved by another attendant and are trained and equipped for entry rescue. An attendant who goes in often becomes the second victim."
        ]
      },
      {
        heading: "Monitor and communicate",
        body: [
          {
            list: [
              "Know the hazards, including how exposure affects behavior and the body.",
              "Keep an accurate count of everyone in the space and know who they are.",
              "Stay in continuous communication with the entrants to check their status.",
              "Watch conditions inside and outside the space, including the monitor and any nearby hazards."
            ]
          }
        ]
      },
      {
        heading: "Order evacuation and call rescue",
        body: [
          "The attendant pulls everyone out and summons rescue when they detect:",
          {
            list: [
              "A prohibited condition or a monitor alarm.",
              "Behavioral signs of exposure in an entrant.",
              "A hazard developing outside or around the space.",
              "That they can no longer effectively do their monitoring job."
            ]
          }
        ]
      },
      {
        heading: "No competing duties",
        body: [
          "The attendant does one thing: watch the space. They don't run other tasks, leave to grab tools, or get pulled into the work, and they keep unauthorized people away from the opening. If the attendant has to step away with no relief, the entrants come out until the post is covered again."
        ]
      }
    ]
  },

  "confined-space/entry-supervisor-duties": {
    description:
      "The entry supervisor authorizes the entry and owns the go/no-go decision — verifying testing, isolation, and rescue before signing the permit.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The entry supervisor is the person who says 'yes, you can go in' — and takes responsibility for that call. They verify that everything on the permit is actually true, sign it, and keep watch that conditions stay within the permit while the work goes on. They also have the authority to shut it all down."
        ]
      },
      {
        heading: "Verify before authorizing",
        body: [
          "Before signing the permit and allowing entry, the supervisor confirms:",
          {
            list: [
              "The required atmospheric tests were done and the results are within acceptable limits.",
              "All hazards are isolated or controlled and the procedures are in place.",
              "The attendant is posted and the entrants know the hazards.",
              "Rescue services are available, notified, and able to respond."
            ]
          }
        ]
      },
      {
        heading: "Own the permit",
        body: [
          {
            list: [
              "Sign the entry permit before entry begins.",
              "Make sure the operation stays consistent with the permit throughout.",
              "Remove anyone who isn't authorized to be in or around the space.",
              "Terminate the entry and cancel the permit when the work is done or conditions change."
            ]
          }
        ]
      },
      {
        heading: "Keep watching after entry starts",
        body: [
          "The supervisor's job doesn't end at the signature. Conditions drift, tasks change, new hazards appear. The supervisor checks that the entry still matches the permit — and if it stops matching, cancels it and pulls the crew out until it's corrected."
        ]
      },
      {
        heading: "The authority to stop work",
        body: [
          "The most important thing the supervisor holds is the power to say no. If rescue isn't available, if the air won't hold, if isolation can't be verified — the entry doesn't happen, regardless of schedule pressure. That authority only protects people if the supervisor actually uses it."
        ]
      }
    ]
  },

  "confined-space/emergency-rescue-and-retrieval-systems": {
    description:
      "Planning rescue before entry — why non-entry retrieval comes first, what equipment is required, and why untrained rescue attempts kill.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Rescue has to be planned before anyone enters, not figured out during an emergency. The hard truth: most people who die in confined spaces are would-be rescuers who rushed in without a plan or equipment. A real rescue setup means retrieval gear in place and trained responders arranged before the first entrant goes in."
        ]
      },
      {
        heading: "Plan rescue before entry",
        body: [
          {
            list: [
              "Arrange rescue services and confirm they can respond in time before entry begins.",
              "Make sure rescuers know the space and have practiced for it.",
              "Have the means to summon rescue immediately from the attendant's post.",
              "Never rely on 'we'll call 911' as the whole plan — response time may be far too long."
            ]
          }
        ]
      },
      {
        heading: "Non-entry (retrieval) rescue comes first",
        body: [
          "Whenever possible, rescue is done without anyone else entering the space. Non-entry retrieval pulls the entrant out from outside using their harness and line, so no second person is exposed. It's the preferred method because entry rescue puts the rescuer in the same danger that took the first worker."
        ]
      },
      {
        heading: "Retrieval equipment",
        body: [
          {
            list: [
              "Each entrant wears a chest or full-body harness, with the retrieval line attached at the back or shoulders.",
              "The line runs to a fixed anchor or a mechanical device outside the space.",
              "For vertical spaces deeper than 5 feet, a mechanical retrieval device — a tripod and winch — must be available.",
              "Keep at least one rescuer with current first-aid and CPR training.",
              "Rescue teams practice simulated rescues at least once a year, in the actual or representative spaces."
            ]
          }
        ]
      },
      {
        heading: "Never attempt an untrained rescue",
        body: [
          "When a worker goes down inside, the instinct is to jump in and help — and that instinct fills body bags. If you are not trained, equipped, and cleared for entry rescue, do not enter. Use the retrieval system, put the rescue plan into action, and keep the space isolated. The best way to help is to not become the second victim."
        ]
      }
    ]
  },

  "working-at-heights/recognizing-fall-hazards": {
    description:
      "Where fall hazards hide on a site, and the point at which OSHA requires you to be protected — before you're near the edge.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Falls are the number-one killer in construction. Most aren't from dramatic heights — they're from ladders, edges, roofs, and holes that workers walked past a hundred times. Recognizing the hazard before you're exposed is the whole game.",
          "The rule is simple: in construction, if you can fall 6 feet or more to a lower level, you need fall protection — and it has to be in place before you get near the edge, not rigged up after you're already exposed."
        ]
      },
      {
        heading: "The 6-foot rule",
        body: [
          "In construction, OSHA requires fall protection at any height of 6 feet or more above a lower level (general industry is 4 feet). That covers:",
          {
            list: [
              "Unprotected sides and edges.",
              "Leading edges where you're building the floor or roof out.",
              "Holes in floors and roofs, and openings in walls.",
              "Roofs, ramps, runways, and elevated platforms.",
              "Work above dangerous equipment, at any height."
            ]
          },
          "Below 6 feet you can still get badly hurt — the rule is a floor, not a guarantee."
        ]
      },
      {
        heading: "The hierarchy — best control first",
        body: [
          "Control fall hazards in order of effectiveness:",
          {
            list: [
              "Eliminate the hazard — do the work from the ground or a lower level if you can.",
              "Guardrails or a covered hole — passive protection that doesn't depend on the worker.",
              "Personal fall arrest — a harness system that stops you if you fall.",
              "Administrative controls — warning lines, safety monitors, controlled access zones — only where the higher options aren't feasible."
            ]
          },
          "Passive protection beats gear you have to remember to clip into. Reach for a guardrail before a harness whenever the work allows."
        ]
      },
      {
        heading: "Where falls actually happen",
        body: [
          "The everyday spots that catch people:",
          {
            list: [
              "Ladders — overreaching, wrong angle, or missing the last step.",
              "Roof edges and skylights — a skylight is a hole, not a surface.",
              "Floor holes and pits left uncovered, or with a cover kicked aside.",
              "Scaffolds without complete guardrails or planking.",
              "The edge you 'only step near for a second.'"
            ]
          }
        ]
      },
      {
        heading: "Plan before you're exposed",
        body: [
          "Fall protection is decided before the work starts — what system, what anchor, who inspects it. If you get to the edge and start figuring it out then, you're already exposed. If the protection isn't there, stop and set it up. No task is worth a 6-foot fall onto rebar or concrete."
        ]
      }
    ]
  },

  "working-at-heights/guardrail-systems": {
    description:
      "Passive edge protection that works whether or not a worker remembers to clip in — the specs that make a guardrail actually protective.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A guardrail is the simplest, most reliable fall protection there is: a physical barrier at the edge that protects everyone, all the time, without anyone clipping into anything. When guardrails are an option, they usually beat a harness because they don't depend on the worker doing something right."
        ]
      },
      {
        heading: "Guardrail specs",
        body: [
          "A compliant guardrail system has:",
          {
            list: [
              "A top rail 42 inches (plus or minus 3) above the walking surface.",
              "A midrail about halfway up, around 21 inches, when there's no wall or equivalent below the top rail.",
              "A toeboard (at least 3.5 inches) where tools or material could fall on someone below.",
              "Enough strength to take a 200-pound force in any outward or downward direction on the top rail without dropping below 39 inches."
            ]
          },
          "If a rail flexes below 39 inches under that push, it's not protecting anyone — it just looks like it is."
        ]
      },
      {
        heading: "Build it and keep it complete",
        body: [
          {
            list: [
              "Guard every open side and edge 6 feet or more above a lower level.",
              "Cover openings and holes with guardrails or a secured cover.",
              "Surfaces must be smooth enough not to cut hands or snag clothing.",
              "Banding is not a top rail; wire rope used as a top rail must be flagged and kept tensioned."
            ]
          }
        ]
      },
      {
        heading: "Don't defeat it",
        body: [
          "A guardrail only works if it stays up and complete. The common failures:",
          {
            list: [
              "A section removed for a material delivery and never put back.",
              "A gap at a ladder or hoist point left unguarded.",
              "Material leaned or stored against the rail so it can't take the load.",
              "Sitting, standing, or climbing on the rail."
            ]
          }
        ]
      },
      {
        heading: "When a section comes down",
        body: [
          "If you remove part of a guardrail to move material or reach a point, that edge is now unprotected — anyone working there needs personal fall arrest until the rail goes back. Put it back the moment the task is done. Most guardrail-related falls are through a gap someone meant to close later."
        ]
      }
    ]
  },

  "working-at-heights/personal-fall-arrest-systems": {
    description:
      "The harness system that stops a fall — the ABCs of anchorage, body harness, and connectors, and how to rig it so it actually saves you.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When you can't eliminate the hazard or put up a guardrail, a personal fall arrest system (PFAS) stops you after you fall. It only works if all its parts are right and it's rigged to catch you before you hit anything. A harness clipped to the wrong point, or with too much slack, can still let you die.",
          "Think of it as the ABC: Anchorage, Body harness, and Connectors."
        ]
      },
      {
        heading: "A — Anchorage",
        body: [
          "The anchor is what everything hangs from. It has to be:",
          {
            list: [
              "Capable of supporting 5,000 pounds per attached worker — or designed by a qualified person with a safety factor of at least two.",
              "Independent of any anchorage used to support or suspend platforms.",
              "Overhead where possible, to limit free fall and swing."
            ]
          },
          "Covered in more detail in the anchorage-points talk."
        ]
      },
      {
        heading: "B — Body harness",
        body: [
          {
            list: [
              "Use a full-body harness — body belts are not allowed for fall arrest.",
              "The attachment D-ring sits between the shoulder blades, on your back.",
              "Snug all the straps; a loose harness lets you slip or takes the shock in the wrong places.",
              "Chest strap across the chest, leg straps firm but not cutting."
            ]
          }
        ]
      },
      {
        heading: "C — Connectors",
        body: [
          "Lanyards, shock absorbers, and self-retracting lifelines (SRLs) tie the harness to the anchor.",
          {
            list: [
              "Use locking snaphooks and carabiners only — they can't roll open.",
              "A shock-absorbing lanyard or SRL limits the forces on your body when it catches you.",
              "Never tie a knot in a lanyard or connect two together to reach — it wrecks the rating."
            ]
          }
        ]
      },
      {
        heading: "Rig it to actually catch you",
        body: [
          "The system has to stop you before you hit the level below. That means:",
          {
            list: [
              "Limit free fall to 6 feet or less — anchor high and keep the slack out.",
              "Account for the shock absorber's deployment and your body length below the anchor (total fall clearance).",
              "Rig to prevent a swing fall into nearby structures.",
              "Any harness or lanyard that has arrested a fall is taken out of service immediately."
            ]
          }
        ]
      }
    ]
  },

  "working-at-heights/choosing-and-using-anchorage-points": {
    description:
      "The single point everything depends on in a fall — what makes an anchor strong enough, and the mistakes that turn a harness into a false sense of safety.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Your harness and lanyard are only as good as what they're tied to. The anchor point is the one part of a fall arrest system that, if it fails, guarantees a fatal fall. Picking a strong, correct anchor is the most important decision in the whole setup."
        ]
      },
      {
        heading: "What a real anchor can hold",
        body: [
          {
            list: [
              "5,000 pounds for each worker attached to it — that's the default rule.",
              "Or, if designed and installed by a qualified person as part of a complete system, a safety factor of at least two (twice the arresting force).",
              "Fall-arrest anchors must be separate from anchors holding up scaffolds or platforms."
            ]
          },
          "5,000 pounds sounds huge because a falling body generates enormous force in a fraction of a second."
        ]
      },
      {
        heading: "Anchor high and in line",
        body: [
          {
            list: [
              "Tie off overhead when you can — it cuts your free fall and keeps you upright.",
              "Keep the anchor roughly above your work so a fall doesn't swing you sideways into a wall or column.",
              "The lower the anchor, the farther you fall before the system catches — and the more clearance you need below."
            ]
          }
        ]
      },
      {
        heading: "Never anchor to these",
        body: [
          "Do not tie off to something that can't take the load or wasn't meant for it:",
          {
            list: [
              "Guardrails, standpipes, conduit, ductwork, or small pipe.",
              "Rebar, form ties, or light steel decking.",
              "Ladders, scaffolding not rated as an anchor, or a structure next to an aerial lift.",
              "Anything you only 'think' will hold — if you're not sure, it's not an anchor."
            ]
          }
        ]
      },
      {
        heading: "Use engineered anchors where they exist",
        body: [
          "Permanent anchor points, certified anchor straps, beam clamps, and horizontal lifelines are designed and rated for the job — use them over improvised tie-offs. When in doubt, get a competent or qualified person to confirm the anchor before you trust your life to it."
        ]
      }
    ]
  },

  "working-at-heights/ladder-safety": {
    description:
      "Ladders cause a huge share of falls — the setup, angle, and habits that keep a simple climb from putting you in the hospital.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Ladders look harmless, which is exactly why they hurt so many people. Most ladder falls come from small things: the wrong angle, overreaching, a skipped inspection, or rushing the last step. Set it up right and climb it right, every time."
        ]
      },
      {
        heading: "Set it up right",
        body: [
          {
            list: [
              "Extension ladders at a 4-to-1 angle — 1 foot out from the wall for every 4 feet of height.",
              "Extend the side rails at least 3 feet above the landing you're stepping onto.",
              "Put it on firm, level ground; secure or tie off the top so it can't shift.",
              "Keep ladders at least 10 feet from power lines, and use non-conductive ladders near electricity."
            ]
          }
        ]
      },
      {
        heading: "Climb it right",
        body: [
          {
            list: [
              "Face the ladder and keep three points of contact — two hands and a foot, or two feet and a hand.",
              "One person on a ladder at a time.",
              "Don't carry tools in your hands — use a tool belt or hoist them up.",
              "Keep your belt buckle between the rails; if you have to reach past them, get down and move the ladder."
            ]
          }
        ]
      },
      {
        heading: "Use the right ladder",
        body: [
          {
            list: [
              "Pick a ladder rated for your weight plus tools (its duty rating).",
              "Don't stand on the top cap or top step of a stepladder.",
              "Fully open a stepladder and lock the spreaders; never lean it like an extension ladder.",
              "Don't use a ladder as a walkboard, brace, or platform."
            ]
          }
        ]
      },
      {
        heading: "Inspect before every use",
        body: [
          "A competent person inspects ladders, and so should you before you climb:",
          {
            list: [
              "Check for cracked or bent rails, broken or missing rungs, and loose parts.",
              "Clean mud, grease, or ice off the rungs and your boots.",
              "Take any damaged ladder out of service and tag it so no one else grabs it."
            ]
          }
        ]
      }
    ]
  },

  "working-at-heights/scaffold-safety": {
    description:
      "Scaffolds put crews to work at height all day — the planking, guardrails, access, and competent-person checks that keep them from collapsing or dropping someone.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Scaffolds let a crew work at height for hours, which means a scaffold problem exposes a lot of people at once. Falls, collapses, and falling objects are the big three. A safe scaffold is fully built, fully planked, guarded, and checked by a competent person — not thrown together to save time."
        ]
      },
      {
        heading: "Built and inspected by a competent person",
        body: [
          {
            list: [
              "A competent person supervises erecting, moving, altering, and dismantling.",
              "That person inspects the scaffold before each work shift and after anything that could affect its integrity.",
              "Supported scaffolds sit on solid footing (base plates and mud sills), plumb and level.",
              "Don't use a scaffold that's tagged incomplete or hasn't been inspected."
            ]
          }
        ]
      },
      {
        heading: "Guardrails, planking, and capacity",
        body: [
          {
            list: [
              "Guardrails on platforms more than 10 feet above a lower level.",
              "Fully plank the work platform — no gaps to step or drop through.",
              "Each scaffold supports its own weight plus at least 4 times the maximum intended load.",
              "For supported scaffolds, keep the height no more than 4 times the minimum base width unless it's tied, guyed, or braced."
            ]
          }
        ]
      },
      {
        heading: "Get on and off safely",
        body: [
          {
            list: [
              "Use a proper ladder, stair tower, or ramp — never climb the cross-braces.",
              "Keep platforms clear of clutter and material you can trip on.",
              "Don't overload a platform or pile material at one point."
            ]
          }
        ]
      },
      {
        heading: "Watch the surroundings",
        body: [
          "Scaffold hazards aren't only falls:",
          {
            list: [
              "Keep at least 10 feet from power lines.",
              "Use toeboards, screens, or netting so tools don't fall on people below.",
              "Don't work on scaffolds in high wind, storms, or when they're covered in ice or snow.",
              "Watch the load — moving heavy material shifts the scaffold's balance."
            ]
          }
        ]
      }
    ]
  },

  "working-at-heights/aerial-and-scissor-lift-safety": {
    description:
      "Boom lifts and scissor lifts move workers up fast — the fall protection, ground conditions, and limits that keep them from tipping or ejecting someone.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Aerial lifts (boom lifts) and scissor lifts get people up high quickly, but they fail in ugly ways: tip-overs, ejections, and crushing against overhead structures. Each type has its own rules, and the fastest way into trouble is treating them the same or leaning out of the basket."
        ]
      },
      {
        heading: "Boom (aerial) lifts — tie off to the lift",
        body: [
          {
            list: [
              "Wear a full-body harness with a lanyard attached to the boom or basket anchor — never to a structure next to the lift.",
              "Stand firmly on the floor of the basket; don't climb, sit, or lean out over the rails.",
              "Keep the basket controls clear and never override them.",
              "A sudden boom movement or 'catapult' effect can throw an untethered worker out."
            ]
          }
        ]
      },
      {
        heading: "Scissor lifts — stay inside the rails",
        body: [
          {
            list: [
              "The guardrails are the fall protection — keep your feet on the platform and your body inside them.",
              "Don't stand on the rails or use planks or ladders to gain height.",
              "Only extend the platform when it's rated and on firm ground.",
              "Keep the chains or gates closed."
            ]
          }
        ]
      },
      {
        heading: "Set up on solid, level ground",
        body: [
          {
            list: [
              "Firm, level surface; use outriggers and chock or level as required.",
              "Watch for slopes, soft ground, holes, drop-offs, and edges.",
              "Check overhead for power lines and structures before you raise — keep clear of energized lines.",
              "Don't move an elevated lift unless it's designed for it, and watch travel speed and grade."
            ]
          }
        ]
      },
      {
        heading: "Inspect and know the limits",
        body: [
          "Before use:",
          {
            list: [
              "Do the pre-use inspection — controls, tires, hydraulics, guardrails, and emergency lowering.",
              "Know the rated capacity and don't exceed it with people plus material.",
              "Only trained, authorized operators run the lift.",
              "Watch the weather — wind can tip a raised lift."
            ]
          }
        ]
      }
    ]
  },

  "working-at-heights/roof-and-leading-edge-work": {
    description:
      "Roofs and leading edges are where fall protection gets skipped 'just for a minute' — and where a slip means going over the side or through a skylight.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Roof work and leading-edge work put you near an edge all day, often on a surface that slopes, gets slick, or has holes you can't see coming. This is where people cut corners for a quick task and go over the side or through a skylight. The protection has to be up before you step onto the roof."
        ]
      },
      {
        heading: "Protect the edge before you go up",
        body: [
          "Depending on the roof and the work, use:",
          {
            list: [
              "Guardrails at the edge — the most reliable, and they protect everyone.",
              "Personal fall arrest tied to a rated anchor.",
              "On low-slope roofs, a warning line and safety monitor, or a controlled access zone — only where guardrails or PFAS aren't feasible.",
              "Cover and mark every skylight and hole — a skylight will not hold your weight."
            ]
          }
        ]
      },
      {
        heading: "Leading-edge work",
        body: [
          "A leading edge is the edge of a floor or roof you're actively building out — it moves as you work.",
          {
            list: [
              "Fall protection is required at leading edges 6 feet or more above a lower level.",
              "Because the edge changes, so do your anchor and rigging — reset them as you advance.",
              "Watch for the unprotected edge behind and beside you, not just in front."
            ]
          }
        ]
      },
      {
        heading: "Watch the surface",
        body: [
          {
            list: [
              "Slope, wet membrane, frost, dew, dust, and loose material all cut your footing.",
              "Skylights, smoke vents, and old patched holes are hidden fall points.",
              "Roofing debris and tools underfoot cause the trip that starts the fall.",
              "Wind is stronger at the edge and can move you or your materials."
            ]
          }
        ]
      },
      {
        heading: "No 'just for a second'",
        body: [
          "The most common roof fatality is a quick, unprotected task — measuring, a small repair, grabbing a tool near the edge. If you're within a fall's distance of the edge or a hole, you're protected or you're not up there. There is no safe version of skipping it for a minute."
        ]
      }
    ]
  },

  "working-at-heights/floor-holes-and-wall-openings": {
    description:
      "Openings you can fall into or through — how to cover, guard, and mark them so no one steps into a hole that was 'obviously' there.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Holes in floors and roofs, and openings in walls, are easy to walk into because they blend in — a covered hole looks like floor, an open wall looks like a doorway. People fall through covers that weren't secured and out of openings that weren't guarded. Every hole and opening gets protected the moment it exists."
        ]
      },
      {
        heading: "Floor and roof holes",
        body: [
          "Any hole a person could step or fall into or through needs one of:",
          {
            list: [
              "A cover that supports at least twice the maximum expected load, secured so it can't shift or blow off.",
              "A guardrail system around the hole.",
              "A personal fall arrest system for anyone working at the hole."
            ]
          },
          "Mark covers so everyone knows what's underneath — a cover that isn't obvious is a trap."
        ]
      },
      {
        heading: "Wall openings",
        body: [
          {
            list: [
              "Guard any wall opening with an outside drop of 6 feet or more where a worker could fall through.",
              "That includes window openings, shafts, and unfinished wall sections at height.",
              "Use guardrails or covers rated for the opening."
            ]
          }
        ]
      },
      {
        heading: "Don't defeat the protection",
        body: [
          {
            list: [
              "Never remove a hole cover and walk away — if you open it, you guard it or you stay with it.",
              "Don't slide a cover aside to look and leave it.",
              "Don't store material on a cover that isn't rated to hold it.",
              "Report a missing or damaged cover immediately — the next person may not see the hole."
            ]
          }
        ]
      },
      {
        heading: "Skylights count",
        body: [
          "A skylight is a hole with glass or plastic over it. It will not hold a worker who trips, kneels, or falls onto it. Treat every skylight as an open hole — screen it, cover it with a rated guard, or guardrail it."
        ]
      }
    ]
  },

  "working-at-heights/inspecting-fall-protection-equipment": {
    description:
      "A harness only saves you if it's in good shape — how to inspect your gear before every use and pull damaged equipment out of service.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Fall protection gear takes abuse — sun, chemicals, sharp edges, and the shock of a hard day. A harness with a cut strap or a lanyard with a deployed shock pack can fail exactly when you need it. Inspect it before every use; it takes a minute, and it's the minute that saves you."
        ]
      },
      {
        heading: "Inspect the harness",
        body: [
          "Before you put it on, check:",
          {
            list: [
              "Webbing — cuts, frays, burns, chemical stains, or stiffness.",
              "Stitching — pulled, cut, or broken threads, especially at the D-ring and buckles.",
              "Hardware — the D-ring, buckles, and adjusters for cracks, distortion, sharp edges, or corrosion.",
              "Labels — legible; if you can't confirm what it is or how old it is, don't use it."
            ]
          }
        ]
      },
      {
        heading: "Inspect lanyards, SRLs, and connectors",
        body: [
          {
            list: [
              "Lanyard webbing or rope for cuts, fraying, and wear.",
              "Shock absorber pack — if it's torn open or deployed, the gear already caught a fall and is done.",
              "Snaphooks and carabiners — they must lock and not roll or gate open.",
              "Self-retracting lifelines — the line pulls out and retracts smoothly and locks up when you tug it fast."
            ]
          }
        ]
      },
      {
        heading: "Pull it from service when",
        body: [
          {
            list: [
              "It has arrested a fall — any gear in a fall is retired immediately.",
              "You find any cut, burn, deformation, corrosion, or deployed indicator.",
              "It's past the manufacturer's service life or missing its labels.",
              "You're not sure it's sound — when in doubt, take it out."
            ]
          },
          "Tag or destroy retired gear so no one grabs it by mistake."
        ]
      },
      {
        heading: "Store and care for it",
        body: [
          "Keep harnesses and lanyards clean, dry, and out of direct sun and chemicals when not in use. Sunlight and solvents quietly weaken webbing long before it looks bad. Gear thrown in the bottom of a gang box with sharp tools gets damaged there, not on the job."
        ]
      }
    ]
  },

  "working-at-heights/rescue-and-suspension-trauma-after-a-fall": {
    description:
      "Stopping the fall is only half the job — a worker hanging in a harness can die within minutes, so rescue has to be planned before anyone goes up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A fall arrest system stops the fall — but then the worker is hanging in a harness, and that's its own emergency. Hanging motionless can kill in minutes through suspension trauma. That's why a rescue plan has to be in place before anyone ties off, not figured out while a coworker dangles."
        ]
      },
      {
        heading: "Why hanging is deadly — suspension trauma",
        body: [
          "When a person hangs still in a harness, the leg straps trap blood in the legs. Blood stops returning to the heart and brain, and the worker can lose consciousness and die — sometimes within minutes, even though the fall itself was survived.",
          "It's called suspension trauma, or orthostatic intolerance, and it's why a suspended worker is a time-critical rescue, not a 'wait for the fire department' situation."
        ]
      },
      {
        heading: "Plan rescue before the work",
        body: [
          {
            list: [
              "Have a rescue plan for anyone using personal fall arrest.",
              "Know how you'll reach and lower a suspended worker quickly — a lift, ladder, rescue system, or trained team.",
              "Don't rely only on calling 911 — response time may be longer than the worker has.",
              "Make sure the means of rescue is on site before the work starts."
            ]
          }
        ]
      },
      {
        heading: "Buy time while suspended",
        body: [
          {
            list: [
              "Suspension-trauma relief straps let a hanging worker stand in the straps and keep blood moving.",
              "The worker should keep pumping their legs and pushing against a surface if they can.",
              "Get them down as fast as safely possible — minutes matter."
            ]
          }
        ]
      },
      {
        heading: "After the rescue",
        body: [
          "A rescued worker needs medical attention even if they seem fine — the effects of suspension can hit after they're brought down. And the gear that caught the fall is finished: any harness, lanyard, or SRL involved in a fall is removed from service and never reused."
        ]
      }
    ]
  }
};

export function getAuthoredTopic(
  categorySlug: string,
  topicSlug: string
): AuthoredTopic | undefined {
  return authoredTopics[`${categorySlug}/${topicSlug}`];
}

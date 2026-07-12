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
  },

  // ── Electrical Safety ─────────────────────────────────────────────
  // OSHA 29 CFR 1926 Subpart K (Electrical); 1910.147 (LOTO);
  // NFPA 70E approach/arc-flash boundaries referenced by OSHA.

  "electrical-safety/recognizing-electrical-hazards-on-site": {
    description:
      "The four ways electricity hurts you on a job site — shock, burns, arc events, and falls — and why current, not voltage, is what kills.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Electricity doesn't announce itself. A cord looks the same energized or dead, and a panel gives no warning before it bites. That's why electrocution is one of OSHA's construction Focus Four — the hazards that kill the most workers on site. Everyone needs to recognize the danger, not just the electricians.",
          "You don't have to be working on wiring to get hurt. Laborers, operators, and carpenters run into cords, temporary panels, damaged tools, and overhead lines every day. Knowing what to look for — and when to stop — is the whole job here."
        ]
      },
      {
        heading: "The four ways electricity injures you",
        body: [
          "Electrical contact hurts people in four main ways, and often more than one at once:",
          {
            list: [
              "Electrocution — current passing through the body stops the heart. This is the fatal one.",
              "Electric shock — a jolt that can throw you, freeze your muscles, or knock you off a ladder.",
              "Burns — the most common electrical injury, from current through the body, from arc flash, or from touching hot equipment.",
              "Falls and other injuries — a shock high up sends workers off scaffolds, ladders, and roofs."
            ]
          },
          "That last one matters on construction sites. A shock that wouldn't kill you at ground level can put you over a guardrail. Treat every electrical hazard as a fall hazard too when you're up high."
        ]
      },
      {
        heading: "Current kills, not voltage",
        body: [
          "It's the amount of current — the amps — flowing through your body that does the damage, and it takes surprisingly little. Some reference points:",
          {
            list: [
              "About 1 milliamp (mA) — you can just feel it.",
              "10 mA — muscles clamp and you may not be able to let go of the source.",
              "100 mA or so, across the heart — enough to send it into fibrillation and kill you."
            ]
          },
          "OSHA treats 50 volts and above as a shock hazard, but even ordinary 120-volt jobsite power kills people every year. What decides how much current flows is how good a path you make: wet skin, sweat, standing water, and metal all drop your resistance and drive the current up. Don't judge a hazard by how 'low' the voltage sounds."
        ]
      },
      {
        heading: "Where the exposure comes from",
        body: [
          "Most jobsite shocks trace back to a short list of conditions. Watch for:",
          {
            list: [
              "Damaged or worn cords and tools — cuts, cracks, exposed conductors, missing ground pins.",
              "Missing or defeated grounding, and no GFCI protection on temporary power.",
              "Overhead and buried power lines near cranes, ladders, scaffolds, and digging.",
              "Wet conditions — rain, puddles, and washdown that turn everything into a conductor.",
              "Overloaded circuits, daisy-chained cords, and makeshift 'temporary' wiring that never gets fixed."
            ]
          },
          "If you can name the hazard, you can stop before it gets you. When a tool, cord, or setup looks wrong, take it out of service and tell your supervisor — no production goal is worth a contact."
        ]
      }
    ]
  },

  "electrical-safety/shock-arc-flash-and-arc-blast": {
    description:
      "Three distinct electrical dangers — shock through the body, the intense heat of an arc flash, and the pressure wave of an arc blast — and what protects against each.",
    sections: [
      {
        heading: "Overview",
        body: [
          "People lump all electrical injuries together, but there are really three different events, and they hurt you in different ways. Shock is current through your body. Arc flash is an explosion of heat and light. Arc blast is the pressure wave that comes with it.",
          "You can be hurt by one without touching a wire at all. An arc flash can burn a worker standing several feet from the equipment. Knowing which hazard you're facing tells you what protection you actually need."
        ]
      },
      {
        heading: "Shock — current through the body",
        body: [
          "Shock happens when you become part of the circuit and current flows through you — usually hand to hand or hand to foot, straight across the chest and heart. The results range from a jolt to cardiac arrest depending on how much current flows and how long it lasts.",
          "The defenses against shock are the ones you already know: de-energize and lock out before you work, keep grounding intact, use GFCI protection on temporary power, and keep insulation — gloves, mats, tools — between you and any live part you can't kill."
        ]
      },
      {
        heading: "Arc flash — an explosion of heat",
        body: [
          "An arc flash is a fault where current jumps through the air between conductors. It releases a burst of heat and light that can reach roughly 35,000°F at the arc — several times hotter than the surface of the sun. It happens in a fraction of a second.",
          "Arc flash burns skin, ignites clothing, and damages eyes, and it can reach you without any direct contact. Common triggers are dropping a tool across bus bars, loose or corroded connections, and racking breakers in and out. This is why work near energized gear calls for arc-rated (AR) clothing and a face shield — regular cotton or synthetics can catch fire and make the burn worse."
        ]
      },
      {
        heading: "Arc blast — the pressure wave",
        body: [
          "The same fault that makes the flash also vaporizes copper and superheats the air, and that expansion creates a pressure wave — the arc blast. It can throw a worker across a room, rupture eardrums, and turn tools and molten metal into shrapnel.",
          "You can't 'PPE' your way fully out of an arc blast — the real control is not being in front of the equipment when it's energized. That's the point of approach boundaries and of de-energizing whenever you can: distance and dead equipment beat any amount of gear. When energized work truly can't be avoided, it takes trained, qualified workers with the right rated PPE and a plan, not someone reaching in to 'just check something.'"
        ]
      }
    ]
  },

  "electrical-safety/overhead-power-lines-and-safe-approach-distances": {
    description:
      "Keeping crews, equipment, and materials clear of overhead lines — the 10-foot rule, how clearance grows with voltage, and what to do when you can't stay clear.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Overhead power lines kill construction workers every year, and the victims usually never touched the line — a crane boom, a ladder, a scaffold, or a length of pipe did it for them. The lines carry enough voltage that current can jump the gap before you even make contact.",
          "The rule is simple: stay away. Assume every overhead line is energized and deadly until the utility confirms otherwise in writing, and plan the work so nothing — no person, no tool, no machine — gets inside the safe distance."
        ]
      },
      {
        heading: "How far is far enough",
        body: [
          "OSHA sets minimum clearance distances that grow with voltage. For most jobsite exposure to lines you don't control:",
          {
            list: [
              "Lines up to 50 kV — stay at least 10 feet away, in every direction.",
              "Over 50 kV — add 4 inches of clearance for every 10 kV above 50 kV.",
              "For cranes and lifting gear near lines up to 50 kV, OSHA requires a 10-foot minimum unless the line is de-energized and grounded or the clearance is increased for higher voltage."
            ]
          },
          "Those distances count the whole reach: a raised dump bed, an extended boom, a swinging load, or a long piece of conduit on your shoulder. Measure the worst case, not where the machine sits parked."
        ]
      },
      {
        heading: "Planning work near lines",
        body: [
          "Before equipment or elevated work goes anywhere near overhead lines, plan it out:",
          {
            list: [
              "Identify the lines and their voltage — call the utility if you don't know it.",
              "Keep equipment clear, or get the line de-energized, moved, or covered by the utility.",
              "Post a dedicated spotter whose only job is watching clearance, and mark a boundary with barricades or flags.",
              "Use non-conductive tag lines to control loads, and lower booms/beds before traveling."
            ]
          },
          "A spotter only works if they have your full attention and a way to stop the operation instantly. If clearance can't be guaranteed, the work doesn't start."
        ]
      },
      {
        heading: "If contact happens",
        body: [
          "If a machine contacts a line, the ground around it can be energized too. The operator should stay put:",
          {
            list: [
              "Stay in the cab if you can — you're safest not becoming the path to ground.",
              "Try to break contact by moving the equipment clear if it's safe to do so.",
              "If you must get off because of fire, jump clear with both feet together, don't touch the machine and the ground at once, and shuffle or hop away in small steps."
            ]
          },
          "Everyone else stays back — the ground can be live for a good distance. Keep clear, keep others clear, and don't approach until the utility confirms the line is dead."
        ]
      }
    ]
  },

  "electrical-safety/grounding-and-bonding-basics": {
    description:
      "What grounding and bonding actually do, why the equipment grounding conductor is your last line of defense, and how a lost ground turns a tool into a killer.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Grounding is the safety net built into every properly wired tool and circuit, and most workers never think about it until it's missing. Its whole job is to carry fault current safely away instead of through you.",
          "Two words get used together — grounding and bonding — and they're not the same thing. Understanding the difference helps you spot when the protection has been defeated, which on a jobsite happens more often than it should."
        ]
      },
      {
        heading: "Grounding vs. bonding",
        body: [
          "They work as a team, but they do different jobs:",
          {
            list: [
              "Grounding connects the electrical system to the earth, giving fault current a safe path to ground and holding equipment at a safe voltage.",
              "Bonding ties all the metal parts — tool housings, boxes, conduit, equipment frames — together so they stay at the same voltage and there's no shock between them."
            ]
          },
          "Together they make sure that if a hot wire touches metal it shouldn't, the current races back through the grounding path and trips the breaker — instead of sitting there waiting for someone to touch it."
        ]
      },
      {
        heading: "The equipment grounding conductor",
        body: [
          "That third prong on a plug is the equipment grounding conductor (EGC), and it's your last line of defense. Normally it carries no current — it just sits there. But the instant a fault energizes the metal body of a tool, the EGC gives that current an easy path back to source, popping the breaker and keeping the tool's housing from becoming live in your hand.",
          "Break that path and the protection is gone with no visible sign. The tool still runs — which is exactly why a lost ground is so dangerous. Common ways it gets defeated:",
          {
            list: [
              "A snapped-off or bent-back ground pin on a plug.",
              "A 'cheater' adapter that lifts the ground on a three-prong tool.",
              "A damaged cord with a broken ground wire inside the jacket.",
              "Ungrounded receptacles or improvised connections."
            ]
          }
        ]
      },
      {
        heading: "Keeping the ground intact on site",
        body: [
          "Grounding only protects you if it's whole, so treat it as something to verify, not assume:",
          {
            list: [
              "Never cut, file, or bend off a ground pin — retire the cord or tool instead.",
              "Don't use three-to-two adapters to force a grounded plug into an ungrounded outlet.",
              "Use double-insulated tools (marked with a square-in-a-square) where grounding can't be guaranteed — they're built so a fault can't reach you.",
              "Pair grounding with GFCI protection on temporary power; grounding and GFCIs cover each other's gaps."
            ]
          },
          "If you can't confirm a tool or circuit is grounded, treat it as unsafe until it's proven otherwise. Grounding under OSHA is covered in 29 CFR 1926.404."
        ]
      }
    ]
  },

  "electrical-safety/gfcis-and-the-assured-equipment-grounding-program": {
    description:
      "The two options OSHA gives you for protecting temporary power on construction sites — GFCIs and the Assured Equipment Grounding Conductor Program — and how each one works.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Construction runs on temporary power — cords, spider boxes, and portable tools dragged through mud, water, and traffic. That's exactly where grounds fail, so OSHA requires extra protection on top of normal grounding for temporary power on construction sites.",
          "OSHA gives you two acceptable ways to provide it: GFCI protection, or a written Assured Equipment Grounding Conductor Program (AEGCP). You use one or the other — and on most sites, GFCIs are the simpler, safer choice."
        ]
      },
      {
        heading: "How a GFCI protects you",
        body: [
          "A Ground-Fault Circuit Interrupter watches the current going out and the current coming back. Those should be equal. If some current goes missing — because it found another path, like through a worker to ground — the GFCI sees the imbalance and cuts power fast.",
          "It trips at a small leakage, on the order of 5 milliamps, and does it in a fraction of a second — quick enough to prevent a fatal shock. Use them right:",
          {
            list: [
              "Protect all 120-volt, single-phase, 15- and 20-amp receptacles used for temporary power.",
              "Use built-in GFCI receptacles, GFCI breakers, or portable plug-in GFCI units.",
              "Test them with the TEST and RESET buttons before each use — a GFCI can fail.",
              "A GFCI stops shock, but it doesn't stop arc flash or fix a bad ground — keep everything else in good shape too."
            ]
          }
        ]
      },
      {
        heading: "The Assured Equipment Grounding Conductor Program",
        body: [
          "The AEGCP is the other option: instead of GFCIs, you run a strict written program that inspects and tests every cord and grounded tool on a schedule so you know the grounding path is intact. It's more work, and it depends on people actually doing the tests.",
          "OSHA requires the program to cover, at minimum:",
          {
            list: [
              "A visual inspection of cords and equipment for damage before each day's use.",
              "Continuity tests of the equipment grounding conductor, plus a test that it's connected to the correct terminals.",
              "Testing before first use, before returning to service after repair, after any event that could damage it (like being run over), and at least every 3 months.",
              "A written record and a color-code tape system marking which items passed and when."
            ]
          }
        ]
      },
      {
        heading: "Which one, and why it matters",
        body: [
          "You must have one or the other on temporary power — not neither. Most contractors choose GFCIs because they protect automatically and don't rely on someone remembering to test every cord on schedule. The AEGCP catches a bad ground, but only if the inspections actually happen.",
          "Whichever your site uses, the worker's job is the same: use the protection that's provided, test GFCIs before you plug in, check for the current color-code tape if you're on an AEGCP site, and pull anything damaged out of service. This requirement lives in OSHA 29 CFR 1926.404(b)(1)."
        ]
      }
    ]
  },

  "electrical-safety/inspecting-cords-plugs-and-portable-power-tools": {
    description:
      "A pre-use inspection routine for extension cords, plugs, and portable electric tools — what damage to look for and when to take gear out of service.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Cords and portable tools take the worst beating on any site — dragged over rebar, run over by traffic, left in puddles, and yanked out by the cord. That abuse is exactly why so many shocks come from everyday gear, not high-voltage gear.",
          "A quick look before you plug in catches most of it. Inspection isn't paperwork — it's the thirty seconds that keeps a damaged cord from putting current through your hands."
        ]
      },
      {
        heading: "Inspecting cords and plugs",
        body: [
          "Before each use, run the cord through your hands and look it over end to end. Take it out of service if you find:",
          {
            list: [
              "Cuts, cracks, fraying, or the inner conductors showing through the jacket.",
              "A missing or bent ground pin, or a loose, cracked, or burned plug.",
              "Melting, scorching, or a hot spot — signs of overload or a bad connection.",
              "Damaged strain relief where the cord meets the plug, or repairs held together with tape.",
              "Wet connectors, or a cord that's been spliced with electrical tape."
            ]
          },
          "Use the right cord too: jobsite extension cords must be the three-wire grounded type rated for hard or extra-hard service, not the light 'household' cords. Never repair a damaged cord with tape — retire it."
        ]
      },
      {
        heading: "Inspecting portable power tools",
        body: [
          "The tool itself needs the same look before you pick it up:",
          {
            list: [
              "Cracked or broken housing that could expose live parts or let water in.",
              "A ground pin that's intact — unless the tool is double-insulated (marked with a square inside a square).",
              "Guards in place, switch working properly, and no smell of burning or overheating.",
              "No sign the tool's been dunked or rained on."
            ]
          },
          "A double-insulated tool doesn't have or need a ground pin — it's built with two layers of insulation so a fault can't reach you. But if the housing is cracked, that protection is gone; take it out of service."
        ]
      },
      {
        heading: "Take it out of service — don't work around it",
        body: [
          "When gear fails inspection, the rule is simple: tag it, remove it, and report it so no one else grabs it. A damaged tool doesn't get 'used carefully until the end of the shift' — it gets pulled.",
          "Keep the odds in your favor while you work: don't carry or hoist tools by the cord, don't yank the plug out by the wire, keep cords out of walkways and standing water, and plug into GFCI-protected power. OSHA covers tool and cord condition in 29 CFR 1926.403 and 1926.405."
        ]
      }
    ]
  },

  "electrical-safety/lockout-tagout-for-electrical-work": {
    description:
      "De-energizing electrical equipment the right way — the lockout/tagout sequence and the live-dead-live test that proves zero energy before you touch anything.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The safest electrical work is done on dead equipment, and lockout/tagout (LOTO) is how you make sure it stays dead while you're in it. It stops a circuit from being switched back on, and it proves the energy is actually gone before you make contact.",
          "The deadly mistake is assuming. Someone flips a breaker at the panel, walks away, and someone else turns it back on not knowing you're downstream. LOTO takes that decision out of anyone else's hands."
        ]
      },
      {
        heading: "The lockout/tagout sequence",
        body: [
          "The order matters. Work through it every time:",
          {
            list: [
              "Plan — identify every energy source feeding the equipment, including secondary and backfeed sources.",
              "Shut down the equipment through the normal stop.",
              "Isolate — open the disconnect or breaker to cut the energy.",
              "Lock and tag — apply your own lock and a tag naming who, why, and when at the isolation point.",
              "Release stored energy — capacitors, and stored mechanical or hydraulic energy, can hold a charge after disconnect.",
              "Verify — test to confirm the circuit is truly dead before you touch it."
            ]
          },
          "Each worker applies their own lock and keeps the only key. If several people are on the job, each one puts their own lock on — the equipment doesn't come alive until the last lock comes off."
        ]
      },
      {
        heading: "Verify zero energy — the live-dead-live test",
        body: [
          "A lock on the disconnect isn't proof the circuit is dead — you might have locked the wrong breaker. The only proof is a test with a meter, done in a way that also proves your meter works. This is the live-dead-live test:",
          {
            list: [
              "Live — test your meter on a known live source and confirm it reads voltage.",
              "Dead — test the circuit you're about to work on; it should read zero.",
              "Live — test your meter again on the known live source to confirm it didn't fail between readings."
            ]
          },
          "Skip that middle-and-final check and a dead meter can tell you a live circuit is safe. Treat every conductor as energized until your own test proves otherwise."
        ]
      },
      {
        heading: "Tags, and getting power back",
        body: [
          "A tag is a warning, not a lock — it tells people why the equipment is down and who to talk to, but it doesn't physically stop anyone. Where the disconnect can accept a lock, use a lock; use a tag alone only where locking truly isn't possible, and add other protection.",
          "Restoring power is its own careful step: confirm the work is done and tools and people are clear, remove your lock and tag yourself (never cut off someone else's), and let people know before you re-energize. OSHA's control-of-energy requirements are in 29 CFR 1910.147, with construction tagging in 1926.417."
        ]
      }
    ]
  },

  "electrical-safety/working-on-or-near-energized-parts": {
    description:
      "When de-energizing isn't possible — approach boundaries, who counts as qualified, and the controls that keep energized electrical work from becoming a fatality.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The first rule of energized work is don't — de-energize and lock out whenever you can. OSHA expects live parts to be shut off before work, and treats energized work as the exception, not the routine.",
          "Sometimes it genuinely can't be avoided: de-energizing would create a greater hazard, or it's truly infeasible for the task. When that's the case, energized work is only for qualified workers, with a plan, boundaries, and the right protection — not for someone reaching in to check one thing."
        ]
      },
      {
        heading: "When energized work is allowed",
        body: [
          "Live work is justified only in narrow cases — for example, when shutting down would introduce a bigger hazard (like killing life-support or ventilation) or when the task itself, such as certain testing and troubleshooting, can't be done dead. 'It's faster' and 'it's a hassle to lock out' are never on that list.",
          "Even when it's justified, the bar is high: a qualified person, an energized-work plan, the correct rated PPE and insulated tools, and — for anything but the simplest tasks — a second person aware of the work. If those aren't in place, the job waits until the equipment can be de-energized."
        ]
      },
      {
        heading: "Approach boundaries",
        body: [
          "Near exposed energized parts, distance is protection, so there are defined boundaries around them (from NFPA 70E, which OSHA references):",
          {
            list: [
              "Limited approach boundary — no unqualified person crosses it without an escort and protection.",
              "Restricted approach boundary — only qualified workers, using rated insulating PPE, get this close.",
              "Arc flash boundary — the distance at which arc-flash heat could cause a second-degree burn; arc-rated PPE is required inside it."
            ]
          },
          "The higher the voltage, the bigger these distances. If you're not qualified for the equipment, you stay outside the limited approach boundary — full stop."
        ]
      },
      {
        heading: "Qualified vs. unqualified, and guarding",
        body: [
          "OSHA draws a hard line between qualified and unqualified workers. A qualified person is trained on the specific equipment and its hazards and knows the safe approach distances; an unqualified person is everyone else. Unqualified workers keep well clear of energized parts and never do electrical work on them.",
          "Where live parts can't be shut off, they get guarded so people can't contact them by accident — enclosures, barriers, covers, and insulation, plus signs and barricades to keep the unqualified out. If a live part is exposed and unguarded, that's a stop-work condition. The requirement to protect workers from contact is in OSHA 29 CFR 1926.416."
        ]
      }
    ]
  },

  "electrical-safety/temporary-wiring-and-extension-cords": {
    description:
      "Running temporary power safely — the right cords for the job, protecting them from damage, and the makeshift setups OSHA prohibits.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Almost all jobsite power is temporary — cords, spider boxes, and portable panels that move with the work. It carries the same voltage as permanent wiring but takes far more abuse, so it needs its own rules.",
          "The trouble is that 'temporary' gets treated as 'anything goes.' A cord run through a doorway, a splice wrapped in tape, a panel with no cover — these are the setups that put current where it doesn't belong."
        ]
      },
      {
        heading: "Use the right cords and equipment",
        body: [
          "Temporary power gear has to be built for the environment it's in:",
          {
            list: [
              "Extension cords must be three-wire, grounded, and rated for hard or extra-hard service — not light indoor cords.",
              "All 120-volt temporary receptacles need GFCI protection (or an AEGCP).",
              "Cords and connectors used in wet or damp areas must be rated and listed for that use.",
              "Boxes and panels need covers and no exposed live parts; every conductor gets properly terminated, not just twisted and taped."
            ]
          },
          "Match the cord's amp rating to the load, too. An undersized cord overheats, and a long run drops voltage and can cook a tool's motor."
        ]
      },
      {
        heading: "Protect cords from damage",
        body: [
          "Most temporary-wiring failures come from where and how the cords are run. Keep them out of harm's way:",
          {
            list: [
              "Don't run cords through doorways, windows, or anywhere they get pinched or crushed.",
              "Keep them out of walkways and traffic lanes, or protect them with cord ramps or covers where they must cross.",
              "Keep connections up out of standing water and mud.",
              "Support cords properly — don't hang them by staples, wire, or anything that pierces the jacket.",
              "Never yank a cord by the wire to unplug it, and don't hoist tools by the cord."
            ]
          },
          "A cord that's been crushed, cut, or spliced comes out of service — no field repairs with tape."
        ]
      },
      {
        heading: "Setups OSHA prohibits",
        body: [
          "Some common shortcuts are flat-out not allowed, because they've all killed people:",
          {
            list: [
              "Splicing or repairing cords with tape instead of proper fittings.",
              "Using cords with missing ground pins or defeated grounding.",
              "Overloading circuits by daisy-chaining cords and strips.",
              "Leaving boxes and panels open with live parts exposed.",
              "Using indoor-rated cords and connectors outdoors or in wet areas."
            ]
          },
          "If temporary wiring looks improvised or damaged, treat it as a hazard and get it fixed before use. OSHA's temporary wiring and cord rules are in 29 CFR 1926.405."
        ]
      }
    ]
  },

  "electrical-safety/electrical-ppe-and-insulated-tools": {
    description:
      "The personal protective equipment for electrical work — rubber insulating gloves and their voltage classes, arc-rated clothing, and rated insulated tools.",
    sections: [
      {
        heading: "Overview",
        body: [
          "PPE is the last layer of electrical protection, not the first. De-energizing, distance, and guarding come first; the gloves and arc-rated gear are what stand between you and injury when a live part can't be avoided.",
          "Electrical PPE only works if it matches the hazard and it's in good shape. A glove rated for the wrong voltage, or one with a pinhole in it, gives you false confidence — which is worse than none."
        ]
      },
      {
        heading: "Rubber insulating gloves",
        body: [
          "Rubber insulating gloves are the core of shock protection for live work, and they're rated by voltage class. You pick the class for the voltage you're working on:",
          {
            list: [
              "Class 00 — up to 500 volts.",
              "Class 0 — up to 1,000 volts.",
              "Class 1 — up to 7,500 volts.",
              "Class 2 — up to 17,000 volts.",
              "Class 3 — up to 26,500 volts.",
              "Class 4 — up to 36,000 volts."
            ]
          },
          "Always wear leather protector gloves over the rubber to guard against cuts and punctures. Before each use, inspect the rubber and air-test it — roll it up to trap air and check for leaks — and honor the periodic test dates. A pinhole makes the rating meaningless."
        ]
      },
      {
        heading: "Arc-rated clothing and face protection",
        body: [
          "Where there's an arc-flash hazard, you need clothing that won't ignite and will slow the heat. Arc-rated (AR) clothing is rated in cal/cm² — its arc thermal performance value (ATPV) — and that rating has to meet or beat the arc-flash energy at the task.",
          "Round it out for the flash hazard:",
          {
            list: [
              "AR shirt, pants, or coveralls rated for the job — never meltable synthetics like untreated nylon or polyester next to the skin.",
              "An arc-rated face shield or hood, plus safety glasses under it.",
              "Hard hat, and hearing protection for higher-energy work.",
              "Rubber insulating gloves and dielectric footwear as the task requires."
            ]
          }
        ]
      },
      {
        heading: "Insulated tools and PPE care",
        body: [
          "Working near live parts calls for insulated hand tools — screwdrivers, pliers, and wrenches rated and marked for 1,000 volts, with the insulation molded on and undamaged. A regular tool that touches two conductors, or a conductor and ground, makes an instant fault.",
          "Keep the whole kit trustworthy: inspect insulated tools for cracks or nicks in the insulation and retire damaged ones, store rubber goods away from heat, sunlight, and chemicals that degrade them, and keep gloves and blankets on their required retest schedule. PPE that's out of test date or damaged doesn't go on the job."
        ]
      }
    ]
  },

  "electrical-safety/responding-to-an-electrical-incident": {
    description:
      "What to do when a co-worker is shocked — why you can't just grab them, how to break the contact safely, and the first aid and reporting that follow.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When someone gets caught by electricity, the instinct is to grab them and pull them off — and that instinct kills would-be rescuers. If they're still in the circuit and you touch them, the current runs through you too.",
          "The first job at an electrical incident is to make the scene safe before you touch anyone. A few clear steps keep one victim from becoming two."
        ]
      },
      {
        heading: "Break the contact — safely",
        body: [
          "If the person is still in contact with the source, don't touch them until the power is off. In order:",
          {
            list: [
              "Shut off the power at the source — unplug it, trip the breaker, or open the disconnect.",
              "If you can't kill the power fast, and only then, use a dry, non-conductive object — a dry wood or fiberglass handle — to move the source or the person clear. Never use anything metal or damp, and don't use your bare hands.",
              "Watch for water and downed lines around the victim, and keep others back.",
              "For high-voltage or overhead-line contact, stay clear and wait for the utility — a downed line can energize the ground for a wide radius."
            ]
          }
        ]
      },
      {
        heading: "First aid after contact",
        body: [
          "Once the victim is clear of the source, get help moving and start care:",
          {
            list: [
              "Call 911 (or site emergency number) immediately — every electrical shock gets medical evaluation.",
              "Check breathing and pulse; if absent, start CPR and use an AED if one is on site and you're trained.",
              "Treat electrical burns — cool them and cover with a clean, dry dressing. Look for both an entry and an exit burn.",
              "Keep the person still and watch for shock; the heart can develop a dangerous rhythm even after they seem fine."
            ]
          },
          "Electrical injuries fool people — the surface burn can look small while the current has done real damage along its path through the body. Anyone who's taken a shock gets checked by a medical professional, even if they wave it off."
        ]
      },
      {
        heading: "Secure the scene and report",
        body: [
          "After the person is cared for, don't let the same hazard catch someone else. Keep the faulty equipment or circuit de-energized and tagged out, and keep people away until it's inspected and fixed.",
          "Then report it. Every shock and near-miss gets reported so the cause can be found and corrected — a near-miss today is the warning before the fatality tomorrow. Serious injuries carry OSHA reporting duties under 29 CFR 1904 (a fatality within 8 hours; an inpatient hospitalization, amputation, or eye loss within 24 hours)."
        ]
      }
    ]
  },

  "excavation-safety/recognizing-excavation-and-trench-hazards": {
    description:
      "Why trenching and excavation work kills workers every year, and the main hazards — cave-ins, falls, bad air, utilities, and traffic — you must control before anyone gets in the hole.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Digging looks like routine work, but trenches kill people every year. A wall can collapse in seconds with no warning, and the soil that buries you is far heavier than it looks. Before anyone gets in a trench, the whole crew needs to understand what makes this work dangerous.",
          "OSHA puts it plainly: the fatality rate for excavation work runs well above general construction, and cave-ins are the deadliest hazard by far. This is governed by OSHA 29 CFR 1926 Subpart P."
        ]
      },
      {
        heading: "Excavation vs. trench",
        body: [
          "OSHA defines an excavation as any man-made cut, cavity, trench, or depression in the ground made by removing earth. A trench is a narrow excavation — deeper than it is wide — where the bottom is no wider than 15 feet.",
          "The distinction matters because trenches are where most people die. Their steep, narrow walls have nothing holding the soil face, and a worker down in a trench has nowhere to go when a wall lets loose."
        ]
      },
      {
        heading: "The hazards you're managing",
        body: [
          "Cave-ins get the headlines, but a trench stacks several ways to get hurt at once:",
          {
            list: [
              "Cave-ins — the number-one killer. A collapsing wall buries a worker faster than they can react.",
              "Falls and falling loads — people, equipment, and material falling into the excavation.",
              "Hazardous atmospheres — low oxygen or toxic/flammable gas collecting in the hole.",
              "Mobile equipment — excavators, trucks, and loaders working at the edge.",
              "Underground utilities — striking buried gas, electric, or fiber lines.",
              "Water accumulation — softening the walls and drowning risk."
            ]
          }
        ]
      },
      {
        heading: "The rule that saves lives",
        body: [
          "The core requirement is simple: under 1926.652, every worker in an excavation must be protected from cave-ins by an adequate protective system — sloping, benching, shoring, or a shield (trench box).",
          "There are only two exceptions: the excavation is made entirely in stable rock, or it's less than 5 feet deep and a competent person has examined it and found no sign of a potential cave-in. Any trench 5 feet or deeper gets a protective system, no exceptions on judgment alone.",
          "A competent person — someone trained to spot the hazards and authorized to shut the work down — inspects the excavation before the shift and as conditions change. If you're not sure the trench is protected, you don't get in it."
        ]
      }
    ]
  },

  "excavation-safety/how-and-why-cave-ins-happen": {
    description:
      "The mechanics of a trench collapse — soil weight, tension cracks, and the conditions that make a wall fail — and why a buried worker rarely survives.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A cave-in is not a slow slide you can step away from. A trench wall fails in a second or two, and by the time you see it move, it's already on you. Understanding why walls collapse is what makes the protective systems make sense.",
          "The reason cave-ins are so lethal comes down to weight. A single cubic yard of soil can weigh up to 3,000 pounds — about the weight of a small car. A few feet of that on top of a worker is more than enough to crush the chest and stop breathing."
        ]
      },
      {
        heading: "Why a wall lets go",
        body: [
          "When you dig a vertical trench, nothing is holding the soil face in place anymore. The ground behind the wall is still under pressure, and over time — sometimes minutes — a tension crack opens back from the edge. The slab between that crack and the trench then shears off and drops.",
          "A worker buried to the waist usually can't pull themselves free — the soil grips like setting concrete. Buried above the chest, a worker is likely to suffocate before anyone can dig them out. That's why the goal is to prevent the collapse, not survive it."
        ]
      },
      {
        heading: "What makes a wall more likely to fail",
        body: [
          "Several things push a marginal trench over the edge:",
          {
            list: [
              "Soil type — granular, sandy, or previously disturbed soil holds together poorly.",
              "Water — rain, groundwater, or a leaking line softens the soil and adds weight.",
              "Vibration — traffic, compactors, pile driving, or nearby equipment shakes the wall loose.",
              "Surcharge loads — spoil piles, equipment, or material stacked near the edge press down on the wall.",
              "Previously disturbed ground — old utility trenches and backfill are weaker than undisturbed soil.",
              "Weather and time — freeze-thaw, drying, and simply leaving a trench open all degrade the walls."
            ]
          }
        ]
      },
      {
        heading: "The 5-foot line",
        body: [
          "OSHA draws the bright line at 5 feet. At 5 feet or deeper, a protective system is required unless the excavation is entirely in stable rock. Below 5 feet, a competent person still has to look at it — if there's any sign of a potential cave-in, it gets protected too.",
          "Don't treat 5 feet as 'safe below, dangerous above.' People have been killed in trenches only 4 feet deep. Depth is a trigger for the rules, not a guarantee of safety."
        ]
      }
    ]
  },

  "excavation-safety/soil-classification-and-testing": {
    description:
      "How a competent person classifies soil as Stable Rock, Type A, B, or C — the strength thresholds and the visual and manual tests behind the call that drives your protective system.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every protective system starts with one question: what kind of soil are we in? Sloping angles, shoring, and shield selection all depend on the soil classification. Getting it wrong means building a system for stronger ground than you actually have.",
          "OSHA's soil rules are in Appendix A of Subpart P. A competent person classifies the soil, and the classification has to be based on at least one visual test and at least one manual test of samples."
        ]
      },
      {
        heading: "The four categories",
        body: [
          "OSHA sorts soil by how well it holds together, measured as unconfined compressive strength in tons per square foot (tsf):",
          {
            list: [
              "Stable Rock — solid natural mineral matter that can be excavated with vertical sides and stay intact.",
              "Type A — cohesive soil with strength of 1.5 tsf or greater (clay, silty clay, hardpan). The strongest soil.",
              "Type B — cohesive soil between 0.5 and 1.5 tsf, plus granular cohesionless soils like silt and sandy loam.",
              "Type C — cohesive soil of 0.5 tsf or less, plus sand, gravel, and any soil with water freely seeping in. The weakest, and the most common on wet or disturbed sites."
            ]
          }
        ]
      },
      {
        heading: "When Type A gets downgraded",
        body: [
          "Soil that would otherwise be Type A can't be classified that way if any of these apply:",
          {
            list: [
              "It's fissured (cracked).",
              "It's subject to vibration from traffic, pile driving, or nearby equipment.",
              "It's been previously disturbed — an old trench or backfill.",
              "Water is seeping into it.",
              "It's part of a sloped, layered system where the layers dip into the excavation."
            ]
          },
          "In practice, a lot of jobsite soil that looks like solid clay ends up classified B or C once you account for traffic, past digging, or moisture."
        ]
      },
      {
        heading: "Visual and manual tests",
        body: [
          "A visual test means looking at the excavated soil and the sides of the opening — grain size, cracking, layering, signs of water, and whether it's clumping or running. A manual test checks the soil in hand or with a tool:",
          {
            list: [
              "Plasticity — can you roll a moist sample into a thin thread without it breaking? Cohesive soils can.",
              "Dry strength — a dry clump of cohesive soil resists crushing; granular soil crumbles.",
              "Thumb penetration — press your thumb into the sample; Type A resists, Type C indents easily.",
              "Pocket penetrometer or shearvane — gives an actual strength reading in tsf."
            ]
          },
          "If conditions change during the job — it rains, the soil dries out, water shows up — the competent person reclassifies. Yesterday's Type B can be today's Type C."
        ]
      }
    ]
  },

  "excavation-safety/sloping-and-benching-systems": {
    description:
      "Cutting excavation walls back to a safe angle — the maximum allowable slopes for each soil type, when benching is allowed, and the depth limits that require an engineer.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Sloping and benching protect workers by removing the wall that could fall on them. Instead of a vertical face, you cut the sides back to an angle the soil can hold, so there's nothing overhead to collapse.",
          "Sloping cuts the walls to an incline. Benching cuts a series of horizontal steps into the walls. Both are covered by 1926.652 and Appendix B, and the safe angle depends entirely on the soil classification."
        ]
      },
      {
        heading: "Maximum allowable slopes",
        body: [
          "For excavations less than 20 feet deep, OSHA sets the maximum allowable slope by soil type, written as horizontal-to-vertical (H:V):",
          {
            list: [
              "Stable Rock — vertical (90°).",
              "Type A — ¾:1, about a 53° angle.",
              "Type B — 1:1, about a 45° angle.",
              "Type C — 1½:1, about a 34° angle. The flatter the soil, the wider you cut."
            ]
          },
          "Type C is the default when you're unsure — it's the flattest, safest cut. For a 10-foot-deep Type C trench, that means the top is roughly 30 feet wider than the bottom (15 feet of cutback on each side)."
        ]
      },
      {
        heading: "Benching and short-term limits",
        body: [
          "Benching — the stepped cut — is allowed in Type A and Type B soil only. You can't bench Type C: the steps won't hold, so Type C has to be sloped or protected with a support or shield system.",
          "There's one short-term allowance: a Type A excavation 12 feet deep or less that will be open for 24 hours or less may be sloped at ½:1 (about 63°). Once it's open longer or deeper, that steeper cut no longer applies."
        ]
      },
      {
        heading: "When you need an engineer",
        body: [
          "Sloping works well where you have room, but it eats a lot of surface space, especially in Type C. Where there isn't room, you switch to shoring or a shield.",
          "For any excavation deeper than 20 feet, the protective system — sloped or otherwise — must be designed by a registered professional engineer. The tabulated slope charts only cover up to 20 feet."
        ]
      }
    ]
  },

  "excavation-safety/shoring-systems": {
    description:
      "Support systems that hold the trench walls in place — timber and aluminum hydraulic shoring, how they're installed and removed, and the tabulated data that governs their use.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Where you don't have room to slope the walls back, you hold them in place instead. A support system — shoring — presses against the trench faces so the soil can't move. It's the difference between cutting the hazard away and bracing it back.",
          "The common systems are timber shoring and aluminum hydraulic shoring. Both are covered by 1926.652 and its appendices, and both have to be installed and used according to the design or tabulated data."
        ]
      },
      {
        heading: "How shoring works",
        body: [
          "Shoring puts pressure back against the walls. In a typical trench, vertical members (uprights or sheeting) sit against the soil face, horizontal members (wales) run along them, and cross-braces or hydraulic cylinders push the two walls apart and hold them.",
          "Aluminum hydraulic shoring uses pistons pressurized with hydraulic fluid, so a two-person crew can set it from the top without getting into an unprotected trench. Timber shoring uses sized lumber and screw jacks or trench jacks per the tabulated charts."
        ]
      },
      {
        heading: "Install from the top down, remove from the bottom up",
        body: [
          "The install sequence keeps workers out of unprotected ground:",
          {
            list: [
              "Install shoring from the top down as the excavation deepens — never send someone into an unshored trench to place it.",
              "Remove shoring from the bottom up, slowly, as you backfill.",
              "Release hydraulic pressure from outside the trench where the design allows."
            ]
          },
          "The most dangerous moments in shored work are installation and removal. Follow the sequence and stay out of the unprotected zone."
        ]
      },
      {
        heading: "Tabulated data and limits",
        body: [
          "You don't guess at member sizes and spacing. Timber shoring follows OSHA's Appendix C tables; aluminum hydraulic shoring follows Appendix D or the manufacturer's tabulated data. The tables set spacing based on soil type and depth, and they only go to 20 feet.",
          "Keep the manufacturer's tabulated data on site. For excavations deeper than 20 feet, or anything outside the tables, the system must be designed by a registered professional engineer."
        ]
      }
    ]
  },

  "excavation-safety/trench-boxes-and-shield-systems": {
    description:
      "Using a trench box to protect the space workers occupy — how shields differ from shoring, the tabulated-data and depth rules, and staying inside the protected zone.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A shield — usually a trench box — doesn't try to stop the walls from moving. It protects the space the workers are standing in, so that if the soil does move, the box holds it back and the crew inside is safe.",
          "That's the key difference from shoring: shoring prevents the collapse, a shield contains it. Both are legitimate protective systems under 1926.652 as long as they're rated for the depth and soil."
        ]
      },
      {
        heading: "Working inside the box",
        body: [
          "The protection only exists inside the box. The rules that follow all come down to keeping workers within that protected zone:",
          {
            list: [
              "Stay inside the shield. Don't work outside the ends of the box or reach into unprotected soil.",
              "The top of the box must extend at least 18 inches above the surrounding area when the ground is sloped toward the excavation.",
              "Don't allow workers in the box while it's being installed, moved, or removed unless the shield is specifically designed for it.",
              "Backfill against the outside of the box to keep it from shifting."
            ]
          }
        ]
      },
      {
        heading: "Depth and the 2-foot rule",
        body: [
          "A trench box is rated to a maximum depth by its manufacturer's tabulated data — the registration or data plate on the box. You can't put a box rated for one depth into a deeper trench and assume it holds.",
          "A shield can be used in a trench deeper than the box if the excavation below the box is sloped or benched, but the vertical wall the box protects can't extend more than 2 feet below the bottom of the shield. Below that, the soil has to be cut back."
        ]
      },
      {
        heading: "Getting in and out",
        body: [
          "The box protects you inside it, but you still need a safe way in and out. A ladder or ramp within 25 feet still applies for any trench 4 feet or deeper — you don't climb the box or the cross-braces.",
          "Keep the manufacturer's tabulated data on site, and have the competent person confirm the box is rated for the soil and depth before anyone gets in."
        ]
      }
    ]
  },

  "excavation-safety/the-competent-person-and-daily-inspections": {
    description:
      "Who the competent person is, the authority they must have, and OSHA's inspection schedule — before the shift, as conditions change, and after every rainstorm.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every excavation job needs a competent person on site. They're the one who classifies the soil, picks the protective system, and inspects the work — and they have the authority to stop it when something's wrong.",
          "OSHA's definition has two parts, and both matter: a competent person is capable of identifying existing and predictable hazards, and is authorized to take prompt corrective measures to eliminate them. Knowledge without authority isn't enough."
        ]
      },
      {
        heading: "What the competent person does",
        body: [
          "On an excavation, the competent person owns the safety-critical calls:",
          {
            list: [
              "Classifies the soil using visual and manual tests.",
              "Selects and checks the protective system — slope, shoring, or shield.",
              "Inspects the excavation and adjacent areas for hazards.",
              "Removes workers from the excavation when a hazard appears.",
              "Reclassifies and reassesses when conditions change."
            ]
          }
        ]
      },
      {
        heading: "The inspection schedule",
        body: [
          "Under 1926.651(k), the competent person inspects excavations, the adjacent areas, and the protective systems for signs of possible cave-ins, failing systems, hazardous atmospheres, or other dangers. Those inspections happen:",
          {
            list: [
              "Before the start of work and as needed throughout the shift.",
              "After every rainstorm.",
              "After any other event that could increase the hazard — a nearby load, new vibration, a utility strike, soil sloughing."
            ]
          },
          "These aren't paperwork inspections done from the truck. The competent person walks the excavation and looks at the actual ground."
        ]
      },
      {
        heading: "Acting on what they find",
        body: [
          "If the competent person sees evidence of a hazardous situation — a tension crack, sloughing, water coming in, a leaning wall — the workers come out of the excavation until the hazard is fixed. Nobody goes back in until the corrective measures are in place.",
          "This is why the authority half of the definition matters. A competent person who spots a crack but can't stop the crew isn't protecting anyone."
        ]
      }
    ]
  },

  "excavation-safety/safe-access-and-egress": {
    description:
      "Getting workers in and out safely — the 4-foot rule for ladders and ramps, the 25-foot lateral-travel limit, and why you never climb shoring or a trench box.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When a wall starts to go, seconds count — and a worker who has to run 40 feet to reach a ladder isn't going to make it. Safe access and egress means a way out is always close by.",
          "OSHA's rule is specific: in trench excavations 4 feet or deeper, there has to be a stairway, ladder, ramp, or other safe means of egress located within 25 feet of lateral travel from any worker. That's 1926.651(c)."
        ]
      },
      {
        heading: "The 4-foot and 25-foot rules",
        body: [
          "Two numbers drive access:",
          {
            list: [
              "4 feet — the depth that triggers the requirement for a means of egress in a trench.",
              "25 feet — the farthest a worker can be from the nearest ladder, ramp, or stairway, measured as lateral travel."
            ]
          },
          "On a long trench, that often means more than one ladder. Space them so no one working anywhere in the trench is more than 25 feet from a way out."
        ]
      },
      {
        heading: "Ladders and ramps done right",
        body: [
          "A ladder used for egress has to be secured and extend at least 3 feet above the landing surface so workers have something to hold as they step off. Set it on firm footing, not on spoil or loose material.",
          "Structural ramps used for worker access have to be designed by a competent person. Ramps built for equipment access that workers also use have to be designed by a competent person qualified in structural design, and made of uniform, connected material."
        ]
      },
      {
        heading: "Don't climb the protection",
        body: [
          "A trench box, its cross-braces, and shoring members are not ladders. Climbing them puts you in the pinch points and can shift the system.",
          "Use the ladder or ramp every time. If getting a proper ladder within 25 feet is inconvenient, that's a planning problem to fix — not a rule to skip."
        ]
      }
    ]
  },

  "excavation-safety/locating-and-working-around-underground-utilities": {
    description:
      "Finding buried lines before you dig — the 811 one-call system, exposing utilities by hand or vacuum, the color code, and protecting lines you uncover.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The ground is full of things that can hurt you when you hit them — energized electric, high-pressure gas, water, sewer, and fiber. Striking a buried line can cause an explosion, electrocution, or a flood, and it's entirely preventable.",
          "Under 1926.651(b), you have to determine the location of underground installations before you open the ground, and take steps to protect them. The starting point is the one-call system."
        ]
      },
      {
        heading: "Call before you dig",
        body: [
          "In the U.S., you call 811 before any digging. The one-call center notifies the utility owners, who send locators to mark their lines on the ground, usually within a few business days.",
          {
            list: [
              "Call 811 (or your local one-call center) before the dig, within the required lead time.",
              "Wait for the utilities to be located and marked before breaking ground.",
              "If the excavation approaches a marked line, the exact location has to be established by a safe and acceptable means — hand-digging or vacuum excavation, not a machine bucket.",
              "Support, protect, or remove exposed utilities as you go so no one is endangered."
            ]
          }
        ]
      },
      {
        heading: "Know the color code",
        body: [
          "Locators mark lines with a standard color code so you know what you're near before you dig. The common APWA colors:",
          {
            list: [
              "Red — electric power.",
              "Yellow — gas, oil, steam, or other flammable material.",
              "Orange — communication, alarm, or signal lines and cable.",
              "Blue — potable water.",
              "Green — sewer and drain lines.",
              "White — the proposed excavation itself."
            ]
          },
          "Marks fade and get driven over. If they're gone or unclear, don't guess — get the line re-marked."
        ]
      },
      {
        heading: "The tolerance zone",
        body: [
          "Locate marks aren't exact — the line can be off to one side. Most states set a tolerance zone (often around 18 to 24 inches on either side of the mark) where you dig by hand or vacuum, not with a machine.",
          "If you nick or damage a line — even a small scrape on a gas or electric line — stop, keep people clear, and report it to the utility owner. A scraped coating today is a failure and a leak later."
        ]
      }
    ]
  },

  "excavation-safety/spoil-piles-surcharge-loads-and-edge-protection": {
    description:
      "Keeping weight off the trench edge — the 2-foot setback for spoil and materials, how surcharge loads trigger collapse, and controlling equipment and traffic near the excavation.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The dirt you dig out and the equipment you park don't just clutter the site — set too close to the edge, they load the trench wall and help push it into the hole. Managing the edge is part of preventing the cave-in.",
          "OSHA's rule is a hard number: under 1926.651(j), spoil, materials, and equipment are kept at least 2 feet back from the edge of the excavation, held back by a retaining device, or both."
        ]
      },
      {
        heading: "What a surcharge load does",
        body: [
          "A surcharge load is any weight near the top of the trench that adds pressure to the soil behind the wall — the spoil pile, stacked pipe or material, a parked excavator, or passing traffic. That extra pressure is often what tips a marginal wall into failing.",
          "Keeping loads back reduces the pressure on the wall and keeps material from rolling in on top of the crew. The 2-foot setback is the minimum; more is better where you have room."
        ]
      },
      {
        heading: "Controlling the edge",
        body: [
          "Beyond the spoil pile, keep the whole edge disciplined:",
          {
            list: [
              "Barricade the excavation so people and equipment don't wander to the edge.",
              "Keep mobile equipment back from the edge, and use stop logs or barricades where equipment works nearby.",
              "Don't let workers lean over or cross unprotected openings.",
              "Scale or bench loose rock and soil that could roll or fall in on workers below."
            ]
          }
        ]
      },
      {
        heading: "Traffic and vibration",
        body: [
          "Vehicle traffic near a trench is both a surcharge and a source of vibration that shakes the wall loose. Route traffic away from the edge where you can, and treat a trench next to a live road as a higher-risk condition the competent person watches closely.",
          "Workers exposed to public or site traffic wear high-visibility warning vests, and the work zone is set up to keep vehicles and the excavation apart."
        ]
      }
    ]
  },

  "excavation-safety/hazardous-atmospheres-water-and-emergency-response": {
    description:
      "The conditions that turn a trench deadly beyond cave-ins — low oxygen and toxic gas, accumulating water, and why you never jump in to rescue a buried co-worker.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A trench can kill without a cave-in. Bad air collects in the hole, water softens the walls and rises around your legs, and when someone does go down, an untrained rescue often buries a second worker. These are the conditions 1926.651 tells you to plan for.",
          "Deep or contaminated excavations behave like confined spaces. The lower you go, and the closer you are to landfills, sewers, or stored chemicals, the more the air and water become the hazard."
        ]
      },
      {
        heading: "Hazardous atmospheres",
        body: [
          "Under 1926.651(g), where a hazardous atmosphere exists or could reasonably be expected — near a landfill, a sewer, or stored hazardous substances — the air in excavations deeper than 4 feet is tested before workers enter.",
          {
            list: [
              "Oxygen must stay between 19.5% and 23.5%.",
              "Flammable gas must stay below 10% of the lower explosive limit.",
              "Toxic gases must stay below their exposure limits.",
              "Where a hazard is found, control it with ventilation and re-test."
            ]
          },
          "Where a hazardous atmosphere exists or could develop, emergency rescue equipment — such as breathing apparatus, a harness and line, or a basket stretcher — is kept ready and attended."
        ]
      },
      {
        heading: "Water accumulation",
        body: [
          "Workers don't work in an excavation where water has accumulated, or is accumulating, unless adequate precautions are taken — 1926.651(h). Water adds weight, softens the walls, and hides how unstable the ground has become.",
          {
            list: [
              "Use special support or shield systems rated for the water.",
              "Pump the water out and control the level, with the removal monitored by the competent person.",
              "Use a harness and lifeline where there's a drowning risk.",
              "Inspect the excavation after every rainstorm before anyone re-enters, and divert surface runoff away from the edge."
            ]
          }
        ]
      },
      {
        heading: "When someone is buried",
        body: [
          "The instinct is to jump in and dig your co-worker out. Don't. The soil that collapsed once is even less stable now, and secondary collapses kill would-be rescuers — a large share of trench-collapse deaths are the second person who went in.",
          {
            list: [
              "Call 911 and request trained trench rescue immediately.",
              "Keep everyone else out of the trench and back from the edge.",
              "Shut down equipment and traffic that's adding vibration.",
              "Don't dig with a machine near a buried worker — you'll injure them and destabilize the walls further."
            ]
          },
          "Trench rescue is a specialized job with shoring and vacuum equipment. The best thing the crew can do is not become the next victims."
        ]
      }
    ]
  },

  "fire-safety/the-fire-triangle-and-classes-of-fire": {
    description:
      "The three things every fire needs to burn, and the five classes of fire — so you pick the right control and the right extinguisher instead of making a fire worse.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every fire needs three things at the same time: fuel, heat, and oxygen. Take away any one of them and the fire dies. That's the whole idea behind both preventing fires and putting them out.",
          "It also matters what's burning. Wood burns differently than gasoline, and both are different from a live electrical panel. Match your response to the type of fire, or you'll make it worse."
        ]
      },
      {
        heading: "The fire triangle — and the fourth side",
        body: [
          "Picture a triangle. Each side is one thing a fire has to have:",
          {
            list: [
              "Fuel — anything that burns: wood, paper, fuel, solvents, insulation, dust.",
              "Heat — the ignition source: a spark, flame, hot surface, or friction.",
              "Oxygen — normally the air around us, about 21%."
            ]
          },
          "Break any side and the fire goes out. Water cools it (removes heat). A blanket or CO2 smothers it (removes oxygen). Shutting a fuel valve starves it (removes fuel). Dry-chemical extinguishers add a fourth control — they interrupt the chemical chain reaction that keeps the flame going, which is why the triangle is sometimes called the fire tetrahedron.",
          "Prevention works the same way: keep ignition sources away from fuels and you never complete the triangle in the first place."
        ]
      },
      {
        heading: "Know the five classes of fire",
        body: [
          "Fires are grouped by what's burning. Extinguishers are rated for the classes they can handle:",
          {
            list: [
              "Class A — ordinary combustibles: wood, paper, cloth, cardboard, most plastics, trash.",
              "Class B — flammable liquids and gases: gasoline, diesel, oil, grease, solvents, propane.",
              "Class C — energized electrical equipment: panels, cords, motors, tools that are still powered.",
              "Class D — combustible metals: magnesium, titanium, sodium, lithium.",
              "Class K — cooking oils and fats, mostly in kitchens."
            ]
          }
        ]
      },
      {
        heading: "Why the class matters",
        body: [
          "The class tells you what's safe to use. Water is great on Class A, but it's dangerous on the others. Throw water on a grease fire (Class B) and it flashes and spreads the burning liquid. Hit an energized panel (Class C) with water and you can get shocked through the stream. A combustible-metal fire (Class D) can react violently with water.",
          "Most site extinguishers are ABC dry chemical because they cover the three you're most likely to meet. But before you grab anything, know what's on fire — that decides whether you fight it or get out and let it burn."
        ]
      }
    ]
  },

  "fire-safety/recognizing-fire-hazards-on-site": {
    description:
      "Spotting the ignition sources and the fuel sources that combine into a fire — and the danger zones where the two overlap — before they meet.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A fire starts when an ignition source meets a fuel source with oxygen around. On a job site both are everywhere, so the skill is seeing where they line up before they touch.",
          "Walk your area and ask two questions: what here could start a fire, and what here would feed it? Where the answers sit close together, that's your hazard."
        ]
      },
      {
        heading: "Ignition sources — what starts it",
        body: [
          "Anything that makes a spark, flame, or enough heat can be the ignition source:",
          {
            list: [
              "Hot work — welding, cutting, grinding, brazing — throwing sparks and slag.",
              "Electrical faults — damaged or overloaded cords, loose connections, arcing.",
              "Temporary heaters and open flames.",
              "Hot engine and exhaust surfaces on equipment and generators.",
              "Friction, static electricity, and smoking outside designated areas."
            ]
          }
        ]
      },
      {
        heading: "Fuel sources — what feeds it",
        body: [
          "Then look at what would catch and carry the fire:",
          {
            list: [
              "Combustible debris — scrap wood, cardboard, packaging, sawdust, rags.",
              "Flammable and combustible liquids — gasoline, diesel, solvents, thinners, adhesives.",
              "Flammable gases — propane, acetylene, and their leaking hoses.",
              "Building materials — foam insulation, tarps, form lumber, plastics.",
              "Fine dust from cutting wood or masonry, which can flash in the air."
            ]
          }
        ]
      },
      {
        heading: "The danger zones — where they overlap",
        body: [
          "The real hazard is where an ignition source sits next to fuel. Watch for hot work near flammable storage or debris, grinders near cardboard and sawdust, heaters near tarps and lumber, and battery charging or generators next to a trash pile.",
          "Most of these are fixed by separation and housekeeping — move the fuel away, move the spark away, and clean up as you go. If you can't separate them, that task needs a permit, a fire watch, and an extinguisher standing by."
        ]
      }
    ]
  },

  "fire-safety/storing-flammable-and-combustible-liquids": {
    description:
      "Storing and handling gasoline, diesel, solvents, and thinners so their vapors never find an ignition source — approved containers, cabinet limits, and static control per OSHA 1926.152.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Flammable and combustible liquids are on every site — fuel, solvents, thinners, adhesives. What burns isn't really the liquid, it's the vapor coming off it, and that vapor spreads, sinks, and travels to find a spark.",
          "Store and handle these liquids right and you keep the vapor contained and away from ignition. OSHA 29 CFR 1926.152 sets the rules."
        ]
      },
      {
        heading: "Flammable vs. combustible — it's the flash point",
        body: [
          "Flash point is the lowest temperature at which a liquid gives off enough vapor to ignite. It's how these liquids are split:",
          {
            list: [
              "Flammable liquid — flash point below 100°F (37.8°C). Gasoline flashes around −45°F, so it's giving off ignitable vapor at any job-site temperature.",
              "Combustible liquid — flash point at or above 100°F (37.8°C), like diesel and many oils. Harder to light, but still burns once it's hot enough."
            ]
          },
          "Either way, treat the vapor as the hazard. Keep containers closed, keep the area ventilated, and keep ignition sources back."
        ]
      },
      {
        heading: "Approved containers and safety cans",
        body: [
          "Store and carry these liquids only in approved containers. A safety can is self-closing, holds no more than 5 gallons, and has a flame arrester and a spring-loaded lid that relieves pressure and snuffs flashback.",
          "Keep liquids in their original labeled containers or a properly labeled safety can. No open buckets, no unmarked jugs, no soda bottles — an unlabeled container is how someone pours the wrong thing or lights it off."
        ]
      },
      {
        heading: "Storage limits and cabinets",
        body: [
          "Don't let quantities build up in the work area. OSHA sets limits:",
          {
            list: [
              "No more than 25 gallons of flammable liquids stored in containers outside of an approved storage cabinet in any one room.",
              "A flammable storage cabinet holds no more than 60 gallons of Category 1, 2, or 3 flammable liquids, or 120 gallons of Category 4 combustible liquids.",
              "No more than three storage cabinets grouped in one area.",
              "Cabinets are labeled in conspicuous lettering: \"Flammable — Keep Fire Away.\""
            ]
          },
          "Store away from exits, stairways, and ignition sources, out of direct sun, and where a spill can be contained."
        ]
      },
      {
        heading: "Bond, ground, and no ignition",
        body: [
          "Pouring liquid between metal containers builds up static — and one static spark in fuel vapor is all it takes. When you transfer flammable liquids, bond the containers together and ground them so the charge can't jump.",
          "Post \"No Smoking or Open Flame\" signs at storage and dispensing areas and mean it — no smoking, no hot work, no running engines nearby. Clean up spills right away and get soaked rags into a covered metal container."
        ]
      }
    ]
  },

  "fire-safety/housekeeping-and-combustible-debris-control": {
    description:
      "The cheapest fire control on site is a broom — clearing scrap, sawdust, packaging, and oily rags so a spark has nothing to catch. OSHA 1926.25 and 1926.151.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Good housekeeping is fire prevention. Scrap wood, cardboard, sawdust, oily rags, and packaging are all fuel. Clear them out and even if a spark happens, it has nothing to catch and grow on.",
          "It's the cheapest control you have and it works every shift. OSHA 1926.25 requires you to keep the work area cleared as the job goes."
        ]
      },
      {
        heading: "Clear combustible scrap as you go",
        body: [
          "Don't wait for the pile to get big. OSHA 1926.25 says form and scrap lumber with protruding nails, and all other debris, has to be kept cleared from the work area, and combustible scrap and debris removed at regular intervals.",
          "Break down boxes, bag the trash, and get sawdust and cutoffs out of the work zone. A tidy area isn't just neater — it's got far less to burn."
        ]
      },
      {
        heading: "Oily rags and spontaneous combustion",
        body: [
          "Rags soaked in linseed oil, stains, or some solvents can heat up on their own and burst into flame with no spark at all — that's spontaneous combustion. A pile of oily rags in the sun or in a warm corner is a fire waiting to happen.",
          "Put used oily and solvent rags in a covered metal container, and empty it daily. Never leave them balled up in a bucket, a pocket, or on the floor overnight."
        ]
      },
      {
        heading: "Keep the safety gear clear",
        body: [
          "Housekeeping also means not burying the things you'd need in a fire. Keep debris and stored material away from exits, exit routes, fire extinguishers, alarm pulls, and electrical panels.",
          "If a stack of materials is blocking an extinguisher or a doorway, it's a hazard even before anything burns — fix it now, not when the alarm sounds."
        ]
      }
    ]
  },

  "fire-safety/controlling-ignition-sources-and-hot-work": {
    description:
      "Welding, cutting, and grinding throw sparks and slag that travel and smolder — controlling the ignition, the permit, and the fire watch per OSHA 1926.352.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Hot work — welding, cutting, grinding, brazing — is a leading cause of site fires. The sparks and slag travel farther than you think, drop through openings, and smolder in hidden debris long after you've packed up.",
          "Control the ignition or don't do the work. OSHA 1926.352 covers fire prevention during welding and cutting. (The Welding & Hot Work category goes deeper on the permit itself.)"
        ]
      },
      {
        heading: "Before hot work — clear or protect the area",
        body: [
          "Sparks and slag can travel 35 feet or more and roll even farther. Before you strike an arc:",
          {
            list: [
              "Move the work at least 35 feet from combustibles, or move the combustibles away.",
              "What can't be moved gets covered with fire blankets or noncombustible guards.",
              "Cover floor and wall openings so sparks can't drop to a level below.",
              "Wet down combustible floors and sweep up debris in the spark zone."
            ]
          }
        ]
      },
      {
        heading: "Hot work permit and fire watch",
        body: [
          "A hot work permit confirms someone checked the area, tested the air where needed, assigned a fire watch, and put an extinguisher in reach before the work started.",
          "The fire watch is a trained person with an extinguisher who watches for sparks and smoldering while the work is going. Because slag stays hot and hidden fires can smolder before they show, the fire watch keeps watching for at least 30 minutes after the work stops. They know how to sound the alarm and call for help."
        ]
      },
      {
        heading: "The other ignition sources",
        body: [
          "Hot work is the big one, but not the only one. Keep smoking to designated areas well away from fuels. Don't run damaged or overloaded cords. Keep hot engine exhaust and generators away from combustibles and fumes.",
          "The rule is the same for all of them: keep the heat source separated from anything that can burn."
        ]
      }
    ]
  },

  "fire-safety/temporary-heating-devices": {
    description:
      "Salamanders and propane torpedo heaters keep cold-weather work going — and start fires and put out carbon monoxide when misused. Clearance, ventilation, and fuel handling per OSHA 1926.154.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Portable heaters — salamanders, propane torpedo heaters, and the like — keep work moving in cold weather. They also start fires when they're too close to combustibles, and they put out carbon monoxide that can kill in an enclosed space.",
          "OSHA 1926.154 covers temporary heating devices. Two things keep them safe: clearance from anything that burns, and ventilation for the fumes."
        ]
      },
      {
        heading: "Clearance and stability",
        body: [
          "Keep the manufacturer's required clearance between the heater and any combustible — tarps, walls, wood, and stacked materials. A heater pointed at a tarp is a fire, not a warm-up.",
          "Set the heater on a stable, level base so it can't tip or be knocked over, and keep the flame guarded. Don't use it to dry clothing or gear draped nearby."
        ]
      },
      {
        heading: "Ventilation and carbon monoxide",
        body: [
          "Fuel-fired heaters burn oxygen out of the air and give off carbon monoxide — an odorless, invisible gas that kills. In an enclosed or confined space, an unvented heater can drop the oxygen and build up CO fast.",
          "Provide fresh-air ventilation whenever a fuel-fired heater runs indoors, and test for carbon monoxide in enclosed areas. Never use an unvented fuel heater in a tight space or anywhere crews sleep."
        ]
      },
      {
        heading: "Fuel and LP-gas handling",
        body: [
          "Most site heaters run on propane, and the fuel is its own hazard:",
          {
            list: [
              "Solid-fuel heaters are not allowed inside enclosed buildings or structures.",
              "Keep LP-gas cylinders upright and secured so they can't fall.",
              "Shut the heater off and let it cool before refueling — never refuel a hot or running unit.",
              "Store spare cylinders outside, not in the building.",
              "Check hoses and connections for leaks with soapy water, never with a flame."
            ]
          }
        ]
      }
    ]
  },

  "fire-safety/the-site-fire-prevention-plan": {
    description:
      "Someone has to own fire safety on the project — the fire prevention plan names the hazards, the controls, and who's responsible, per OSHA 1926.150 and 1910.39.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Fire safety can't be left to chance — someone has to own it for the project. A fire prevention plan is how you lay out what the fire hazards are, how they're controlled, and who's responsible for each piece.",
          "OSHA requires a fire protection program throughout all phases of the work (1926.150), and a fire prevention plan with specific elements (1910.39)."
        ]
      },
      {
        heading: "What the plan covers",
        body: [
          "A fire prevention plan (1910.39) spells out:",
          {
            list: [
              "The major fire hazards on site and the proper handling and storage for each.",
              "Potential ignition sources and how they're controlled.",
              "The type of fire protection equipment provided.",
              "Procedures to control accumulations of flammable and combustible waste.",
              "Regular maintenance of heat-producing equipment so it doesn't become an ignition source.",
              "The names or job titles of the people responsible for the equipment and for controlling fuel sources."
            ]
          }
        ]
      },
      {
        heading: "Fire protection through all phases",
        body: [
          "OSHA 1926.150(a) requires the employer to develop and maintain a fire protection program through all phases of construction and demolition. That means firefighting equipment is provided, conspicuously located, and maintained in working order, and crews have access to it at all times.",
          "Where the work needs it, a water supply for firefighting is arranged. The point is that fire protection is planned in from the start, not scrambled together after a fire breaks out."
        ]
      },
      {
        heading: "Written, shared, and trained",
        body: [
          "If the employer has more than 10 employees, the fire prevention plan is put in writing and kept where workers can review it. A smaller employer can communicate it to the crew out loud.",
          "Either way, workers get told the parts of the plan that affect their job — the hazards in their area, how to report a fire, and who's responsible for what."
        ]
      }
    ]
  },

  "fire-safety/portable-fire-extinguishers-classes-and-placement": {
    description:
      "Picking and placing extinguishers so the right type is always close and charged — matching class to hazard and meeting OSHA 1926.150(c) travel-distance rules. (For how to use one, see Fire Extinguisher Safety.)",
    sections: [
      {
        heading: "Overview",
        body: [
          "An extinguisher only helps if it's the right type for the fire, it's close enough to reach fast, and it's charged and ready. This is about picking and placing them.",
          "Matching the extinguisher class to the hazard, and meeting OSHA's placement rules, is what makes the extinguisher useful before a small fire becomes a big one. (For how to actually operate one, see the Fire Extinguisher Safety category.)"
        ]
      },
      {
        heading: "Match the extinguisher to the fire class",
        body: [
          "The extinguisher has to match what's burning:",
          {
            list: [
              "ABC dry chemical — covers Class A, B, and C. The most common all-around extinguisher on site.",
              "CO2 — good on Class B and C (electrical); leaves no residue on equipment.",
              "Class D — special dry powder for combustible-metal fires; a standard extinguisher won't work.",
              "Class K — for cooking oils and fats, in kitchens and break areas."
            ]
          },
          "Don't put a water or pressurized-water (Class A only) extinguisher on grease or energized electrical — it spreads the fire or shocks you."
        ]
      },
      {
        heading: "Placement and travel distance",
        body: [
          "OSHA 1926.150(c) sets how many and how close for construction sites:",
          {
            list: [
              "At least one extinguisher rated not less than 2A for each 3,000 square feet of protected building area.",
              "Travel distance from any point to the nearest extinguisher no more than 100 feet.",
              "Where more than 5 gallons of flammable or combustible liquid, or 5 pounds of flammable gas, is used, a 10B-rated extinguisher within 50 feet.",
              "A 55-gallon open drum of water with two fire pails may substitute for a 2A extinguisher.",
              "On a multi-story building, at least one extinguisher next to the stairway on each floor."
            ]
          }
        ]
      },
      {
        heading: "Keep them ready",
        body: [
          "An extinguisher does no good buried behind material or discharged. Keep them mounted, visible, unobstructed, and accessible. Give each one a quick visual check monthly and a full maintenance check yearly, and recharge any extinguisher after it's used — even a short burst.",
          "Protect them from freezing where that's a risk, and never hang gear on them or stack material in front of them."
        ]
      }
    ]
  },

  "fire-safety/fire-alarm-and-detection-systems": {
    description:
      "The faster people know there's a fire, the more time they have to get out — a way to raise the alarm and, where required, detection that catches a fire early. OSHA 1926.150(e), 1910.164, 1910.165.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The faster people find out there's a fire, the more time they have to get out and the smaller the fire is when someone acts. That takes a reliable way to raise the alarm, and where it's required, detection that catches a fire early.",
          "OSHA 1926.150(e) covers the site alarm; 1910.165 covers employee alarm systems and 1910.164 covers detection."
        ]
      },
      {
        heading: "Raising the alarm",
        body: [
          "OSHA 1926.150(e) requires an alarm system — a telephone, siren, air horn, or equivalent — so workers and the fire department can be alerted to a fire. The alarm code and the reporting instructions are posted conspicuously where everyone can see them.",
          "Every worker needs to know two things cold: what the alarm signal sounds like, and how to report a fire if they're the one who finds it."
        ]
      },
      {
        heading: "Employee alarm systems",
        body: [
          "Under 1910.165, an employee alarm has to be perceived above the ambient noise and light on site — loud or bright enough that people actually notice it. Each signal is distinctive for its purpose, and the system is maintained and tested so it works when it's needed.",
          "On a small, close-quarters job, a shouted warning or a manually operated device can be enough — as long as everyone can hear or see it and knows what it means."
        ]
      },
      {
        heading: "Detection systems",
        body: [
          "Where fire detection is installed (1910.164), the detectors have to be maintained and tested so they stay reliable, and restored to normal operation after any test or alarm. They're kept in working order at all times.",
          "Detection is early warning — it buys time. It never replaces prevention and good housekeeping; it just tells you sooner when those have failed."
        ]
      }
    ]
  },

  "fire-safety/exit-routes-and-means-of-egress": {
    description:
      "When a fire starts, people need a clear, known way out — enough exits, unobstructed and marked, every shift. OSHA 1910.36 and 1910.37.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When a fire starts, people need a clear, known way out — fast. That means exit routes that actually exist, that aren't blocked, and that are marked so nobody's guessing in smoke.",
          "OSHA 1910.36 and 1910.37 set the requirements for means of egress. On a changing site the routes have to be re-checked as the work moves, not just drawn once."
        ]
      },
      {
        heading: "Enough exits, far enough apart",
        body: [
          "A workplace needs at least two exit routes, located as far apart from each other as practical, so that if one is blocked by fire or smoke the other is still usable. More than two are required if the number of workers, the size, or the layout of the space needs them.",
          "The idea is simple: never let a single fire trap people with only one way out."
        ]
      },
      {
        heading: "Keep them clear and usable",
        body: [
          "An exit route only counts if you can actually get through it:",
          {
            list: [
              "Unobstructed — never blocked by materials, equipment, or debris.",
              "Doors unlocked from the inside and, where required, opening in the direction of travel.",
              "Adequate lighting so the route is visible.",
              "Minimum size kept clear — at least 28 inches wide and 7 feet 6 inches high.",
              "No dead ends where someone thinks they're heading out and hits a wall."
            ]
          }
        ]
      },
      {
        heading: "Mark the way out",
        body: [
          "Each exit is marked by a plainly visible, illuminated \"EXIT\" sign. Where the path to an exit isn't obvious, signs point the way. A door or passage that could be mistaken for an exit but isn't one is marked \"Not an Exit\" or labeled for what it is, like \"Storeroom.\"",
          "On a job site, walls go up, materials get stacked, and phases change — so re-walk the routes regularly and fix anything that's now blocked or confusing."
        ]
      }
    ]
  },

  "fire-safety/evacuation-alarms-and-assembly-points": {
    description:
      "When the alarm sounds, everyone should already know what to do and where to go — the emergency action plan, evacuation, and the head count. OSHA 1910.38.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When the alarm sounds, nobody should be figuring out what to do — they should already know. That's what an emergency action plan is for: the steps, the routes, and the meeting point are set before anything happens.",
          "OSHA 1910.38 covers the emergency action plan. The goal is a fast, orderly exit and a count that tells you everyone got out."
        ]
      },
      {
        heading: "The emergency action plan",
        body: [
          "An emergency action plan (1910.38) has to spell out, at a minimum:",
          {
            list: [
              "How to report a fire or other emergency.",
              "Evacuation procedures and exit route assignments.",
              "Procedures for anyone who stays behind to shut down critical operations before they leave.",
              "How all employees are accounted for after the evacuation.",
              "Rescue and medical duties for the workers assigned to them.",
              "The name or job title of who to contact for more information about the plan."
            ]
          }
        ]
      },
      {
        heading: "When the alarm sounds",
        body: [
          "Stop work and shut down or leave equipment the way you were trained. Take the nearest clear exit route — don't stop for tools or belongings, and don't use elevators. Help anyone who needs it, and keep moving away from the building.",
          "The time to learn the route is now, not when it's full of smoke."
        ]
      },
      {
        heading: "Assembly points and head count",
        body: [
          "Go to the designated assembly point — a spot a safe distance from the building where the crew gathers. There, a supervisor counts everyone against the sign-in so it's clear whether anyone's missing.",
          "If someone's unaccounted for, report it to the fire department — never go back inside to look yourself. As the site changes, keep the assembly points and routes current, review the plan with workers when they're assigned and when it changes, and run drills so the response is automatic."
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

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
  },

  "ppe/hazard-assessment-and-selecting-the-right-ppe": {
    description:
      "PPE is the last line of defense, not the first. Assess the hazards, control what you can at the source, then match the right protection to what's left.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Personal protective equipment is the last thing standing between you and a hazard, not the first. Before you reach for gear, the job is to get rid of the hazard or control it — swap a safer material, guard the machine, ventilate the space, change how the work is done. PPE only covers what's left over after all that.",
          "OSHA 29 CFR 1926 Subpart E is the construction PPE standard. It puts the duty on the employer to look at the job, figure out what hazards are present, and provide protection that actually fits the exposure. \"Wear your PPE\" isn't a plan — the plan starts with knowing what you're protecting against."
        ]
      },
      {
        heading: "PPE sits at the bottom of the hierarchy of controls",
        body: [
          "Safety controls work best from the top down. PPE is the weakest and most-used, because it depends on a person putting it on right, every time, and it does nothing to the hazard itself — it just shields one worker if everything else fails.",
          {
            list: [
              "Elimination — remove the hazard entirely (do the work a different way).",
              "Substitution — swap in a less dangerous material or method.",
              "Engineering controls — guarding, ventilation, isolation, wet-cutting.",
              "Administrative controls — procedures, rotation, signage, training.",
              "PPE — the last layer, worn by the individual."
            ]
          },
          "A face shield doesn't make a cracked grinding wheel safe. A respirator doesn't fix bad ventilation. Reach for the higher controls first, and treat PPE as the backstop — not the answer."
        ]
      },
      {
        heading: "The hazard assessment",
        body: [
          "Someone has to actually look at the task and decide what's needed. Walk the job and ask what could hit the head, the eyes, the hands, the feet, the lungs, the ears — from impact, flying particles, chemicals, noise, heat, electricity, or falls.",
          "Match the protection to the real exposure, not the job title or old habit. Cut-resistant gloves don't stop a solvent; safety glasses don't stop a chemical splash; a hard hat rated for impact isn't rated for electrical contact. When the task changes, redo the assessment — new tools, new materials, or a new phase can bring hazards the old PPE list never covered."
        ]
      },
      {
        heading: "Employer duties and fit",
        body: [
          "Under Subpart E the employer provides the required PPE and, with only narrow exceptions (like everyday steel-toe boots and prescription eyewear the worker takes home), pays for it. Cost is never a reason to keep using worn-out gear.",
          "Protection only works if it fits. Gear that's too big, too small, or incompatible with other equipment gets worn wrong or not at all. Make sure sizes are available, that items work together (glasses under a face shield, earplugs with a hard hat), and that anyone who can't get a proper fit gets an alternative that does the same job."
        ]
      }
    ]
  },

  "ppe/head-protection-hard-hats": {
    description:
      "When and why hard hats are required, how to read the ANSI Z89.1 type and class ratings, and how to keep the shell and suspension doing their job.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A hard hat is required wherever there's a chance of head injury from falling or flying objects, from bumping a fixed object, or from electrical contact. On an active site that's almost everywhere people work below cranes, scaffolds, or overhead trades.",
          "OSHA 1926.100 sets the requirement and points to the ANSI/ISEA Z89.1 standard for the hats themselves. The rating printed inside the shell tells you exactly what kind of protection you're wearing — so it's worth knowing how to read it."
        ]
      },
      {
        heading: "Types and classes — read the label inside",
        body: [
          "Z89.1 grades a hard hat two ways: by the direction of impact it's built for (Type) and by the electrical protection it offers (Class).",
          {
            list: [
              "Type I — protects against impact to the top of the head only.",
              "Type II — protects against top AND lateral (side) impact.",
              "Class G (General) — tested to 2,200 volts.",
              "Class E (Electrical) — tested to 20,000 volts, for work near higher-voltage exposure.",
              "Class C (Conductive) — offers NO electrical protection (often vented or has metal parts)."
            ]
          },
          "The volt rating is a test threshold, not a working rating — it doesn't mean go touch a live line. It means the shell won't be the thing that gets you killed if you brush a conductor. If you work around electricity, never wear a Class C hat."
        ]
      },
      {
        heading: "The suspension does half the work",
        body: [
          "The shell spreads and deflects the blow; the suspension webbing inside absorbs it by holding the shell about an inch off your skull. That gap is the crumple zone. That's why you never store anything — gloves, cigarettes, a notepad — between the suspension and the shell, and why the hat has to fit and be adjusted snug.",
          "Wear it bill-forward unless the hat is specifically rated and marked for reverse wear. Turning a standard hat backward can move the suspension out of its tested position."
        ]
      },
      {
        heading: "Inspection and replacement",
        body: [
          "Check the shell and suspension before each use. Take the hat out of service if you find any of these:",
          {
            list: [
              "Cracks, dents, gouges, or a shell that's gone dull, chalky, or brittle (UV damage).",
              "A suspension with cracks, frayed or torn straps, or broken keys/attachment points.",
              "Any hat that took a real impact — even with no visible damage, the protection may be spent.",
              "Signs of chemical or solvent contact that can weaken the plastic."
            ]
          },
          "Follow the manufacturer's service life. As a common guide, replace the suspension roughly every 12 months and the shell within about 5 years of first use — sooner with heavy sun or damage. Don't paint a hat or clean it with solvents unless the maker approves it; some chemicals quietly weaken the shell."
        ]
      }
    ]
  },

  "ppe/eye-and-face-protection": {
    description:
      "Matching eye and face protection to the hazard — impact, dust, splash, and radiant energy — and why a face shield is never enough on its own.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most eye injuries on site come from flying particles — grinding, cutting, chipping, nailing — and nearly all of them are preventable with the right protection worn correctly. Chemical splashes and welding light do the rest.",
          "OSHA 1926.102 requires eye and face protection when there's a hazard, and points to ANSI/ISEA Z87.1 for the gear. The trick is matching the protector to the specific hazard: impact, dust, splash, or radiant energy each call for something different."
        ]
      },
      {
        heading: "Match the protector to the hazard",
        body: [
          {
            list: [
              "Flying particles (grinding, cutting, chipping) — safety glasses with side protection, marked Z87. For heavy impact look for the Z87+ mark.",
              "Dust and fine debris — snug-fitting goggles that seal around the eye.",
              "Chemical splash — indirect-vented or non-vented splash goggles, plus a face shield for the face.",
              "Welding, cutting, brazing — a welding helmet or goggles with the correct shade filter lens.",
              "Light optical radiation (lasers, UV) — filters rated for that source."
            ]
          },
          "Everyday safety glasses stop a particle but not a splash — a chemical goes right around the lens. Don't substitute one for the other."
        ]
      },
      {
        heading: "Face shields don't replace primary eye protection",
        body: [
          "A face shield is secondary protection. It guards the whole face from splash and larger debris, but it can be lifted, and a particle can still get under it. Always wear primary eye protection — safety glasses or goggles — underneath.",
          "So for a splash job: goggles for the eyes AND a face shield for the face. For grinding: safety glasses AND a shield if there's a heavy fragment or spark hazard."
        ]
      },
      {
        heading: "Welding filter shades",
        body: [
          "Welding, cutting, and brazing throw off intense ultraviolet and infrared light that burns the eyes (\"arc flash\" / \"welder's flash\") — the pain shows up hours later. The filter shade has to match the process and amperage; a shade too light lets damaging light through.",
          {
            list: [
              "Oxy-fuel gas cutting and brazing — lighter shades (roughly 3–6 depending on the work).",
              "Shielded metal arc welding (stick) — heavier shades (around 10–14 as amperage climbs).",
              "Helpers and nearby workers — need protection too; use screens or filter lenses so bystanders aren't flashed."
            ]
          },
          "Use the shade chart in 1926.102 (or the manufacturer's guide) for the exact number, and step up a shade if the arc is still too bright."
        ]
      }
    ]
  },

  "ppe/hearing-protection": {
    description:
      "Noise-induced hearing loss is permanent and painless. The OSHA action level and PEL, how earplugs and muffs are rated, and when the hearing conservation program kicks in.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Loud noise takes your hearing slowly and permanently — there's no pain and no warning, and it never comes back. Construction is full of it: impact tools, saws, compressors, heavy equipment, generators.",
          "OSHA 1926.52 sets the permissible noise limits for construction and 1926.101 requires hearing protection when you're over them. As with any hazard, cut the noise at the source first with engineering and administrative controls; use protectors for what's left."
        ]
      },
      {
        heading: "The numbers that matter",
        body: [
          "Noise is measured in A-weighted decibels (dBA), and the limits are based on how long you're exposed. The decibel scale is logarithmic — every few dB is a big jump in energy.",
          {
            list: [
              "90 dBA — the OSHA permissible exposure limit (PEL) averaged over an 8-hour day.",
              "85 dBA — the action level; at or above this over 8 hours the employer must run a hearing conservation program.",
              "The louder it is, the shorter the allowed time — the limit halves the exposure time as noise rises (a 5 dBA exchange rate)."
            ]
          },
          "A rough field test: if you have to raise your voice to be understood by someone an arm's length away, the area is likely around 85 dBA or higher and you need protection."
        ]
      },
      {
        heading: "The hearing conservation program",
        body: [
          "Once workers are exposed at or above the 85 dBA action level, the program is required and includes:",
          {
            list: [
              "Noise monitoring to identify who's over the action level.",
              "Baseline and annual audiometric (hearing) testing at no cost to the worker.",
              "Hearing protectors made available, with a choice of types and proper fit.",
              "Training on noise, the protectors, and the testing.",
              "Recordkeeping of exposures and test results."
            ]
          }
        ]
      },
      {
        heading: "Choosing and wearing protectors",
        body: [
          "Earplugs and earmuffs both carry a Noise Reduction Rating (NRR) — the higher the number, the more attenuation under lab conditions. Real-world protection is always less than the label, so most guidance derates the NRR before comparing it to the exposure.",
          "In very high noise, wear plugs AND muffs together (\"double protection\"). Fit is everything: roll and insert foam plugs deep enough to seal, and keep muff cushions in good shape — long hair, glasses arms, or a torn cushion break the seal and drop the protection to near zero."
        ]
      }
    ]
  },

  "ppe/hand-and-arm-protection": {
    description:
      "Hands take the most injuries on site. Choosing gloves by the actual hazard — cut, chemical, heat, electrical — and why the wrong glove can be worse than none.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Hands and fingers take more injuries than any other part of the body on a construction site — cuts, punctures, crushes, burns, and chemical damage. The right glove prevents most of them, but only if it matches the hazard.",
          "OSHA 1910.138 requires hand protection selected for the specific task and the hazards present. There's no all-purpose glove: a glove built for one hazard can leave you exposed to another, or even make things worse."
        ]
      },
      {
        heading: "Match the glove to the hazard",
        body: [
          {
            list: [
              "Cuts and abrasion — cut-resistant gloves (rated by ANSI/ISEA 105 cut levels A1 up to A9); pick the level from how sharp the material is.",
              "Chemicals — gloves whose material resists that specific chemical (nitrile, neoprene, butyl, PVC); check breakthrough time.",
              "Heat and welding — leather or aluminized gloves rated for the temperature.",
              "Electrical — insulating rubber gloves rated for the voltage, with leather protectors (see the electrical PPE topic).",
              "General handling — leather or coated fabric for grip and abrasion."
            ]
          }
        ]
      },
      {
        heading: "Chemical gloves — breakthrough and permeation",
        body: [
          "For chemical work, \"waterproof\" isn't the question — chemicals soak through glove material over time even with no visible hole. That's permeation, and every glove/chemical pair has a breakthrough time: how long before the chemical reaches your skin.",
          "Check the chemical's Safety Data Sheet and the glove manufacturer's chart to match the material to the substance, and swap gloves out before the breakthrough time is up. The wrong material can absorb and hold a chemical against your skin — worse than no glove at all."
        ]
      },
      {
        heading: "The one place gloves are the hazard",
        body: [
          "Around rotating or moving machinery — drills, lathes, augers, rebar benders — a glove can be caught and pull your hand in. Where a machine can grab a glove, gloves may be prohibited; follow the machine's rules and the site policy.",
          "Otherwise, inspect gloves before use and replace them when you find holes, tears, thin spots, stiffness, swelling, or discoloration from chemical contact. A degraded glove gives false confidence."
        ]
      }
    ]
  },

  "ppe/foot-and-leg-protection": {
    description:
      "Safety footwear ratings under ASTM F2413, what impact and compression numbers mean, and the specialty ratings — EH, metatarsal, puncture-resistant — for specific hazards.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Feet get hurt by dropped and rolling objects, by stepping on nails and sharp debris, by heavy equipment, and by electrical and chemical contact. Safety footwear is required where those hazards exist — which on most sites means everywhere on the working surface.",
          "OSHA 1926.96 requires safety-toe footwear that meets the consensus standard, now ASTM F2413 (formerly ANSI Z41). The rating stamped inside the boot tells you what it's built to take."
        ]
      },
      {
        heading: "Reading the ASTM rating",
        body: [
          "F2413-rated footwear is marked inside with a line of codes. The first line covers the basic protective toe, tested for impact (I) and compression (C):",
          {
            list: [
              "I/75 — protective toe rated to a 75 foot-pound impact.",
              "C/75 — protective toe rated to a 2,500-pound compression load.",
              "(75 is the highest class; 50 and 30 exist for lighter duty.)"
            ]
          },
          "Additional lines call out specialty protection the boot also provides — so you can match footwear to the specific job, not just \"steel toe.\""
        ]
      },
      {
        heading: "Specialty ratings for specific hazards",
        body: [
          {
            list: [
              "EH — Electrical Hazard: a secondary defense against stepping on a live conductor in dry conditions. It is NOT rated for standing in water or direct electrical work.",
              "Mt — Metatarsal: guards the top of the foot from heavy impact (paving, foundry, drop hazards).",
              "PR — Puncture Resistant: a plate that stops nails and sharp debris coming up through the sole.",
              "CD — Conductive: drains static in areas with explosive atmospheres.",
              "SD — Static Dissipative: controls static for electronics work."
            ]
          },
          "EH and CD do opposite jobs — one resists current, one carries it away. Wearing the wrong one in the wrong place removes the protection you think you have, so match the rating to the hazard."
        ]
      },
      {
        heading: "Fit, condition, and metatarsal add-ons",
        body: [
          "A safety toe only protects if the boot fits — too loose and your toes may sit outside the cap. Replace footwear when the toe cap is exposed or deformed, the sole is worn smooth or separating, or an EH-rated boot has cracks or holes that let water reach your foot.",
          "Where there's no built-in metatarsal boot, strap-on metatarsal guards can add top-of-foot protection for high-impact tasks."
        ]
      }
    ]
  },

  "ppe/respiratory-protection": {
    description:
      "Respirators are only safe inside a full program. Medical evaluation and fit testing come before use, cartridges must match the contaminant, and IDLH air needs supplied air — not a filter.",
    sections: [
      {
        heading: "Overview",
        body: [
          "You can't see or smell most of what damages your lungs — silica dust from cutting concrete, welding fume, asbestos, solvent vapor, carbon monoxide. A respirator is the protection, but it's the one piece of PPE that can give you a false sense of safety if it's the wrong type or doesn't seal.",
          "OSHA 1910.134 governs respirators, and it's strict: a respirator is only safe when it's part of a full written program. First control the dust and fume at the source — ventilation, wet methods, enclosure — and use respirators for the exposure that's left."
        ]
      },
      {
        heading: "Before anyone wears one — the program",
        body: [
          "Two things happen before a required respirator ever goes on your face, in this order:",
          {
            list: [
              "Medical evaluation — a respirator makes your heart and lungs work harder; a worker has to be cleared as fit to wear one before use.",
              "Fit test — done before first use and at least annually, with the exact make, model, and size you'll wear, to prove it seals to your face."
            ]
          },
          "The written program, run by a named administrator, also covers proper selection, training, cartridge change schedules, cleaning, storage, and evaluation. A dust mask handed out with no program isn't respiratory protection."
        ]
      },
      {
        heading: "Match the respirator to the contaminant — and the oxygen",
        body: [
          "Air-purifying respirators (APRs) filter the air you breathe — but only if the filter or cartridge matches the hazard, and only if there's enough oxygen to begin with.",
          {
            list: [
              "Particulates (dust, fume) — an N/R/P-series filter (e.g. N95, P100).",
              "Gases and vapors — a chemical cartridge specific to that gas; cartridges are color-coded and have a limited service life.",
              "More protection — half-mask (assigned protection factor ~10) vs. full-face (~50)."
            ]
          },
          "An air-purifying respirator does NOTHING for oxygen deficiency or an IDLH (Immediately Dangerous to Life or Health) atmosphere — no filter makes oxygen. Those conditions require supplied-air (SAR) or self-contained breathing apparatus (SCBA)."
        ]
      },
      {
        heading: "The seal is everything",
        body: [
          "A tight-fitting respirator only protects if it seals to skin. Facial hair along the sealing surface breaks the seal — no amount of tightening fixes a beard under the edge. So do scars, glasses temples running through the seal, or a wrong-size mask.",
          "Do a user seal check every time you put it on (positive and negative pressure). If a worker can't get a seal, they need a different respirator — a loose-fitting powered air-purifying respirator (PAPR) is one option that doesn't rely on a tight face seal. Voluntary use of filtering facepieces still requires the basic information in Appendix D."
        ]
      }
    ]
  },

  "ppe/high-visibility-clothing": {
    description:
      "Being seen is the protection. ANSI/ISEA 107 garment classes, when work-zone rules require Class 2 or 3, and why high-vis has to be kept clean and replaced when it fades.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When the hazard is a moving vehicle or a piece of equipment, being seen is the protection. Workers on foot around traffic, mobile equipment, cranes, and backing trucks need to stand out against a busy, changing background — day and night.",
          "High-visibility safety apparel is built to two things at once: fluorescent background material that pops in daylight, and retroreflective tape that bounces headlights back at a driver in the dark. The consensus standard is ANSI/ISEA 107, which grades garments by how much of each they carry."
        ]
      },
      {
        heading: "The garment classes",
        body: [
          {
            list: [
              "Class 1 — the least material; for low-traffic areas well separated from the road (parking lots, warehouse yards).",
              "Class 2 — more background and reflective material; for workers in or near a roadway right-of-way and moderate traffic.",
              "Class 3 — the most conspicuous, with sleeves; for high-speed traffic, low light, and the highest-risk work zones.",
              "Class E — high-visibility pants/gaiters that, combined with a Class 2 or 3 top, make the whole outfit Class 3."
            ]
          }
        ]
      },
      {
        heading: "When it's required",
        body: [
          "For road and highway work, the federal Manual on Uniform Traffic Control Devices (MUTCD) requires all workers and flaggers within the right-of-way of a federal-aid highway to wear high-visibility apparel meeting ANSI/ISEA 107 — generally Class 2 or Class 3 depending on traffic speed and volume.",
          "Beyond the road, use high-vis anywhere workers are on foot around mobile equipment: laydown yards, loading zones, backing areas, and anywhere operators have limited sightlines. Pick the class from the speed and the light."
        ]
      },
      {
        heading: "Keep it working",
        body: [
          "High-vis wears out, and worn-out high-vis quietly stops protecting. Faded fluorescent fabric doesn't pop, and dirt, mud, paint, or overspray on the reflective tape kills the return of light at night.",
          "Keep garments clean, and inspect for fading, tears, and damaged tape. Replace them when the color has washed out or the reflective striping is cracked, peeling, or coated over — a vest that looks 'good enough' in the yard may be invisible to a driver at night."
        ]
      }
    ]
  },

  "ppe/protective-clothing-for-skin-and-body": {
    description:
      "Beyond the hard hat and gloves — chemical suits, welding leathers, and arc-rated clothing that protect skin and body from splash, sparks, flame, and arc flash.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Not every hazard aims at your head, hands, or feet. Chemical splashes burn skin, welding throws sparks and molten metal, and an electrical arc flash can ignite ordinary clothing. Protective clothing covers the skin and body against those exposures.",
          "The type of garment is driven entirely by the hazard — a chemical suit, welding leathers, and arc-rated clothing are built to completely different jobs and aren't interchangeable. Match the clothing to the exposure the hazard assessment turned up."
        ]
      },
      {
        heading: "Chemical protective clothing",
        body: [
          "Skin contact with corrosives, solvents, and other hazardous substances causes burns, rashes, and absorption into the body. Chemical protective clothing — aprons, suits, coveralls, sleeves — has to be made of a material that resists the specific chemical, just like chemical gloves.",
          "As with gloves, watch permeation and breakthrough time: a chemical can soak through the fabric with no visible damage. Check the Safety Data Sheet and the garment's chemical-resistance data, and for serious exposures follow the HAZWOPER protection levels (A through D) that set the ensemble."
        ]
      },
      {
        heading: "Welding and hot-work clothing",
        body: [
          "Welding, cutting, and grinding throw sparks, slag, and molten metal that set ordinary clothes — especially synthetics — on fire. OSHA 1926.353 and welding practice call for flame-resistant clothing and leathers.",
          {
            list: [
              "Leather or flame-resistant jackets, aprons, sleeves, and leggings to shed sparks and slag.",
              "No synthetic fabrics (polyester, nylon) that melt onto skin.",
              "Cuffless pants and closed pockets so sparks can't lodge and smolder.",
              "Cotton or FR base layers, not meltable synthetics, underneath."
            ]
          }
        ]
      },
      {
        heading: "Arc-rated clothing for electrical work",
        body: [
          "An electrical arc flash releases intense heat that can cause severe burns and ignite regular clothing, which then keeps burning. Workers exposed to arc-flash hazards wear arc-rated (AR) clothing, rated in calories per square centimeter (cal/cm²) to match the incident energy of the task.",
          "Arc-rated clothing is always flame-resistant, and it must meet or exceed the arc rating the electrical hazard analysis calls for (see NFPA 70E and the electrical PPE topic). Never wear meltable synthetics near an arc-flash hazard — under an arc they make the injury worse."
        ]
      }
    ]
  },

  "ppe/fall-protection-harnesses-as-ppe": {
    description:
      "The harness is the wearable piece of a fall arrest system. Full-body only, correct fit and D-ring position, inspection before every use, and out of service after any fall.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The full-body harness is the piece of fall protection you wear — the PPE end of a personal fall arrest system (PFAS). It only does its job if it fits right, is worn right, and is inspected every single time. This topic covers the harness as equipment; how the whole arrest system, anchorages, and rescue work is covered under Working at Heights.",
          "OSHA 1926.502(d) sets the fall arrest requirements. The short version: full-body harnesses only, correct fit, inspect before every use, and out of service the moment it takes a fall or fails inspection."
        ]
      },
      {
        heading: "Full-body harness only",
        body: [
          "Body belts are prohibited for fall arrest — arresting a fall on a belt can cause serious internal injury and let a worker slip out. Only a full-body harness spreads the arrest forces across the thighs, pelvis, chest, and shoulders.",
          "The dorsal D-ring (for a standard fall arrest connection) sits between the shoulder blades, so a fall leaves you upright and the forces land where your body can take them. Front, side, or shoulder D-rings are for specific uses like ladder-climbing systems or positioning — not general fall arrest."
        ]
      },
      {
        heading: "Fit and donning",
        body: [
          "A harness that's too loose lets you fall farther before it catches, can slip during the arrest, and makes suspension worse afterward. Put it on right:",
          {
            list: [
              "Untangle it and slip it on like a jacket, dorsal D-ring centered between the shoulder blades.",
              "Buckle and snug the leg straps — tight enough that a flat hand barely fits under the strap.",
              "Fasten the chest strap across the mid-chest and adjust the shoulder straps so there's no slack.",
              "Check that D-rings and buckles sit where they should and nothing is twisted."
            ]
          }
        ]
      },
      {
        heading: "Inspect before every use — and after any fall",
        body: [
          "Run the whole harness through your hands before each use. Take it out of service for any of these:",
          {
            list: [
              "Webbing with cuts, frays, burns, pulled or broken stitches, or chemical/heat damage.",
              "Cracked, bent, corroded, or distorted D-rings, buckles, or hardware.",
              "A deployed impact indicator (the warning fold that tears open when the harness has arrested a fall).",
              "Missing or unreadable labels."
            ]
          },
          "Any harness or lanyard that has arrested a fall is done — remove it from service immediately, even if it looks fine, because the fibers and hardware may be spent. Store harnesses out of sunlight, heat, and chemicals, and follow the manufacturer's service life."
        ]
      }
    ]
  },

  "ppe/inspecting-maintaining-and-replacing-ppe": {
    description:
      "PPE that's present but damaged gives false confidence. Building inspection into daily use, keeping gear serviceable, and making replacement quick and no-fault.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A piece of PPE can be right there on the worker and still not protect — a cracked hard hat, scratched lenses, a stretched harness, a glove eaten by solvent, boots worn smooth. Present but defective gear is worse than none, because it gives false confidence.",
          "Inspection isn't a separate chore; it's part of wearing PPE correctly. The goal is simple: every worker checks their gear before they use it, and defective gear comes out of service and gets replaced fast."
        ]
      },
      {
        heading: "Inspect before every use",
        body: [
          "Make a quick pre-use check the habit for every item. What to look for, item by item:",
          {
            list: [
              "Hard hats — cracks, dents, dull/chalky shells, damaged suspension; anything that took an impact.",
              "Eye/face — deep scratches, cracks, pitting, or a poor seal that lets particles in.",
              "Gloves — holes, tears, thin spots, stiffness, or swelling from chemical contact.",
              "Boots — exposed or deformed toe caps, worn-through soles, cracks in EH-rated footwear.",
              "Respirators — cracked facepiece, hardened or torn straps, worn valves, expired or wrong cartridges.",
              "Harnesses/lanyards — cut or frayed webbing, damaged hardware, deployed impact indicator."
            ]
          }
        ]
      },
      {
        heading: "Maintenance and service life",
        body: [
          "Keep gear working between inspections. Clean it per the manufacturer — dirt on reflective tape, grime on a respirator seal, or the wrong solvent on a hard hat all cut protection. Store PPE out of sunlight, heat, and chemicals that degrade it.",
          "Respect service life and expiration. Respirator cartridges, hard hat suspensions and shells, and harness webbing all age out even when they look fine. Follow the dates and change schedules the manufacturer sets — 'it still looks okay' isn't the standard for life-safety gear."
        ]
      },
      {
        heading: "Make replacement quick and no-fault",
        body: [
          "Workers keep using bad gear when replacing it is a hassle. If it takes approval, paperwork, or a long walk across the site, damaged equipment stays in service. Stock replacement PPE where crews can get it, and make swapping out defective gear routine and blame-free.",
          "Under OSHA Subpart E the employer provides and, with narrow exceptions, pays for required PPE — including replacements when gear wears out or is damaged in normal use. Cost and friction should never be the reason a worker is wearing protection that no longer protects."
        ]
      }
    ]
  },
  "forklift-safety/powered-industrial-truck-types-and-classifications": {
    description:
      "The forklift is one machine in a family of powered industrial trucks — and the type you're on, its fuel, and its rating for the space you're in all change how it must be run.",
    sections: [
      {
        heading: "Overview",
        body: [
          "\"Forklift\" is the everyday word, but OSHA calls the whole family powered industrial trucks — any mobile, power-driven truck used to carry, push, pull, lift, stack, or tier material. That covers sit-down riders, stand-up reach trucks, order pickers, pallet jacks, and rough-terrain machines. They don't all behave the same, and a license to run one doesn't mean you're cleared to run another.",
          "Two things decide whether a given truck is safe for a given job: the type of truck and its load design, and whether it's rated for the atmosphere it's working in. Get either wrong and you can tip a load, stall in a spot you can't handle, or set off a fire in a flammable area."
        ]
      },
      {
        heading: "The main truck types you'll see",
        body: [
          "The trucks split roughly by how you ride them and what they're built to do:",
          {
            list: [
              "Sit-down counterbalanced rider — the classic forklift; a counterweight in the back offsets the load on the forks.",
              "Stand-up rider and reach trucks — narrow-aisle warehouse trucks; the reach truck extends the forks forward into racking.",
              "Order pickers — the operator platform rises with the forks; used to pick stock off high shelves.",
              "Motorized hand and hand/rider pallet trucks — low-lift trucks for moving pallets at floor level.",
              "Rough-terrain and telehandler trucks — big pneumatic tires for outdoor, uneven ground and reach over distance."
            ]
          },
          "Each handles, brakes, and tips differently. A reach truck's stability and an order picker's fall exposure have nothing in common with a sit-down rider, which is exactly why OSHA training is truck-specific."
        ]
      },
      {
        heading: "Fuel and power designations",
        body: [
          "OSHA 1910.178(b) sorts trucks by power source, and each carries a letter designation you'll find on the data plate — for example D, DS, and DY for diesel; G and GS for gasoline; LP and LPS for liquid propane; and E, ES, EE, and EX for electric. The extra letters mean added safeguards (S for safety features against fire and ignition, EE for fully enclosed electrics, EX for explosion-proof).",
          "This isn't trivia. Internal-combustion trucks (diesel, gas, propane) put out carbon monoxide and can't run indoors without serious ventilation. Electric trucks are cleaner for enclosed spaces but bring battery-charging hazards. Know what you're standing on and what it's exhausting."
        ]
      },
      {
        heading: "Match the truck to the atmosphere",
        body: [
          "OSHA 1910.178(c) forbids running an ordinary truck in an area with flammable gases, vapors, combustible dust, or hazardous concentrations — like paint spray areas, grain handling, or spaces with volatile liquids. Those locations require trucks specifically approved and marked for that classification (the EX and similar designations exist for exactly this).",
          "Before you drive into a new area, ask whether the space is a designated hazardous location and whether this truck is rated for it. A standard forklift's sparks, hot surfaces, and exhaust are ignition sources — the right rating is the difference between a normal shift and an explosion."
        ]
      }
    ]
  },
  "forklift-safety/operator-training-evaluation-and-authorization": {
    description:
      "Only a trained, evaluated, and authorized operator may run a forklift — and that authorization is tied to the specific truck and the specific workplace.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1910.178(l) is blunt: only workers who have been trained and authorized may operate a powered industrial truck. Handing the keys to someone because they \"used to drive one\" or \"picked it up\" doesn't meet the standard and it's how people get hurt.",
          "Training isn't a one-time video. It's formal instruction, hands-on practice, and an evaluation of the operator actually driving — all tied to the type of truck they'll run and the site they'll run it on."
        ]
      },
      {
        heading: "What real training covers",
        body: [
          "Proper training combines three parts: formal instruction (classroom, video, or written), practical training (demonstration and hands-on driving), and an evaluation of the operator's performance in the workplace. It has to cover both truck-related and workplace-related topics, such as:",
          {
            list: [
              "This truck's controls, instruments, engine, steering, and visibility differences from a car.",
              "Capacity, stability, and how attachments change the machine.",
              "Loading, maneuvering, and any operating limits for this truck.",
              "The surfaces, ramps, aisles, pedestrian traffic, and load types at this site.",
              "Hazardous or classified locations where the truck may or may not go."
            ]
          },
          "Trainees may operate only under the direct supervision of someone with the knowledge and experience to train, and only where it won't endanger anyone."
        ]
      },
      {
        heading: "Evaluation and refresher training",
        body: [
          "Certification isn't permanent. OSHA requires the employer to evaluate each operator's performance at least once every three years. On top of that, refresher training and re-evaluation are required when:",
          {
            list: [
              "The operator is seen driving unsafely.",
              "They're involved in an accident or a near-miss.",
              "An evaluation shows they aren't operating safely.",
              "They're assigned to a different type of truck.",
              "Conditions in the workplace change in a way that affects safe operation."
            ]
          },
          "The employer must certify the training and evaluation, keeping a record of the operator's name, the training date, the evaluation date, and who did it."
        ]
      },
      {
        heading: "Authorization is specific",
        body: [
          "Being cleared on a sit-down rider doesn't clear you for a reach truck, a telehandler, or an order picker — each is a different machine with different training. And authorization is site-aware: an operator who's solid in one warehouse still needs to know the ramps, blind corners, and traffic of a new job.",
          "If you're asked to run a truck you weren't trained and authorized on, that's a stop-and-ask moment. Note too that OSHA generally bars anyone under 18 from operating powered industrial trucks in non-agricultural work."
        ]
      }
    ]
  },
  "forklift-safety/daily-pre-operation-inspection": {
    description:
      "Every forklift gets checked before it's used and at least once a day — a documented walk-around that catches defects before they put you or a pedestrian in the hospital.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1910.178(q)(7) requires that a powered industrial truck be examined before being placed in service, and it must not be put in service if the exam shows any condition that affects the safety of the vehicle. That check happens at least daily — and where trucks run around the clock, after each shift.",
          "This is a real walk-around, not a glance. You're looking for the things that fail at the worst moment: brakes, steering, the horn, the mast, the tires, and leaks. Find them in the yard, not in a loaded turn."
        ]
      },
      {
        heading: "Engine-off checks (walk-around)",
        body: [
          "Start with the truck shut down and do a visual and hands-on pass:",
          {
            list: [
              "Tires — condition, pressure on pneumatics, no chunks missing or splits.",
              "Forks — no cracks, bends, or excessive wear at the heel; positioning locks work.",
              "Mast and chains — no damaged or kinked chains, no leaks, guards in place.",
              "Overhead guard and load backrest — present, not bent or cracked.",
              "Hydraulic hoses, fittings, and the floor under the truck — no leaks or puddles.",
              "Fluid levels — engine oil, coolant, hydraulic fluid; fuel or battery charge.",
              "Data plate and warning decals — present and legible.",
              "LP tank (if fitted) — secure, hose and fittings sound, no gas smell."
            ]
          }
        ]
      },
      {
        heading: "Engine-on / operational checks",
        body: [
          "With the truck running, test the systems that keep it under control:",
          {
            list: [
              "Service brake and parking brake — hold and stop firmly.",
              "Steering — smooth, no excessive play.",
              "Horn — works (it's your main warning to pedestrians).",
              "Lights and backup alarm — working if fitted.",
              "Lift, lower, and tilt controls — smooth, no drift or grabbing.",
              "Seat belt — latches and retracts.",
              "Gauges and warning lights — reading normal."
            ]
          }
        ]
      },
      {
        heading: "Tag it out and report it",
        body: [
          "If anything on the check fails, the truck comes out of service until it's fixed by authorized personnel. Don't \"nurse it through the shift\" — a soft brake or a dead horn is exactly what leads to a struck-by or a runaway.",
          "Report defects on the daily inspection form so there's a record and the next operator knows the truck's history. Repairs get done by qualified people, and the fix gets noted before the truck goes back on the floor."
        ]
      }
    ]
  },
  "forklift-safety/understanding-the-stability-triangle": {
    description:
      "A sit-down forklift balances on a three-point stance, and every load and turn shifts its center of gravity — understand the stability triangle and you understand why forklifts tip.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A sit-down counterbalanced forklift doesn't sit on four solid corners like a car. It pivots. Understand how it balances and you understand why it tips — and tip-overs are the single leading cause of forklift deaths.",
          "The idea is simple: the truck and its load balance on a triangle. Keep the combined center of gravity inside that triangle and the truck stays upright. Push it outside — with a heavy load, a fast turn, or a raised fork — and the truck goes over."
        ]
      },
      {
        heading: "The three-point stance",
        body: [
          "A forklift is supported at three points: the two front wheels, and a single pivot point at the center of the rear axle. Connect those three points and you get the stability triangle. Because the rear axle pivots, the back end swings side to side over that single point — which is why the rear of a forklift steers and swings out.",
          "The truck stays stable as long as the combined center of gravity of the truck and its load stays inside that triangle. The counterweight built into the back of the truck is what keeps the balance point forward and inside the triangle when you pick up a load."
        ]
      },
      {
        heading: "What moves the center of gravity",
        body: [
          "The center of gravity isn't fixed — it moves with what you do:",
          {
            list: [
              "Picking up a load moves it forward, toward the front wheels.",
              "A heavier load, or a load carried further out on the forks, moves it forward and up.",
              "Raising the load raises the center of gravity, making the truck far tippier.",
              "Turning throws the center of gravity sideways, toward the outside of the turn.",
              "Traveling on a slope or over uneven ground shifts it toward the low side."
            ]
          },
          "Stack these up — a raised, heavy load taken through a fast turn — and you push the balance point right out of the triangle. That's a lateral tip-over, and it happens fast."
        ]
      },
      {
        heading: "Driving inside the triangle",
        body: [
          "You keep the center of gravity where it belongs by how you drive: carry loads low and tilted back, slow down before turns, and never turn with the load raised. Take grades straight, not at an angle. Smooth and slow keeps the balance point inside the lines.",
          "One more thing every operator must know: in a tip-over, do not jump. Stay in the seat, hold the wheel, brace your feet, and lean away from the fall. The overhead guard and seat belt are built to protect you if you stay put — operators who jump get crushed by the falling mast or overhead guard."
        ]
      }
    ]
  },
  "forklift-safety/load-capacity-data-plates-and-center-of-gravity": {
    description:
      "Every forklift has a rated capacity stamped on its data plate — at a specific load center — and exceeding it, or loading past that center, is how you overload and tip a truck.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every forklift has a limit, and it's printed right on the machine. The data plate (nameplate) tells you the rated capacity — the most the truck can safely lift — and the conditions that rating assumes. OSHA 1910.178 requires that plate to be there and legible, and requires you to stay within it.",
          "The number matters, but so does a detail people miss: capacity is rated at a specific load center. Carry the weight further out than that, and the truck can't lift what the plate says. Overloading and off-center loads are a direct path to tipping forward or dropping a load."
        ]
      },
      {
        heading: "Reading the data plate",
        body: [
          "The data plate is your source of truth for the truck. It lists:",
          {
            list: [
              "Rated capacity — the maximum weight the truck can lift, in pounds.",
              "Rated load center — the distance the capacity is measured at, commonly 24 inches from the face of the forks.",
              "Maximum lift height the rating applies to.",
              "Truck model, serial number, weight, and fuel/power type designation.",
              "Any attachments the truck is configured with, and the derated capacity for them."
            ]
          },
          "If the plate is missing, unreadable, or doesn't match the attachment on the truck, the truck isn't ready to work. Get it corrected before you load."
        ]
      },
      {
        heading: "Load center and why it changes capacity",
        body: [
          "Load center is the distance from the front face of the forks to the center of gravity of the load. The plate's capacity assumes the load is centered at the rated distance — say 24 inches. A load that's longer, or shifted out on the forks, has a load center further from the truck.",
          "The further out the weight sits, the harder it levers the truck forward — that's load moment, weight multiplied by distance. Double the distance and you roughly double the tipping force, so a long or deep load can put you over the limit even when its weight is under the rated capacity. When in doubt, treat a bulky or oddly-shaped load as reducing your safe capacity."
        ]
      },
      {
        heading: "Attachments and stable loads",
        body: [
          "Attachments — clamps, side-shifters, extensions, booms — add weight out front and lower the truck's rated capacity. The truck must be marked with the derated capacity for the attachment fitted, and you operate to that number, not the bare-truck number.",
          "OSHA 1910.178(o) also requires that only stable, safely arranged loads within the rated capacity be handled. If a load is unstable, unevenly stacked, or you're not sure of its weight, don't lift it and hope — arrange it, weigh it, or break it down first."
        ]
      }
    ]
  },
  "forklift-safety/safe-traveling-speed-visibility-ramps-and-grades": {
    description:
      "How you travel a forklift — speed, fork height, which way you face, and how you take a ramp — decides whether you keep control or lose a load, hit a pedestrian, or roll on a grade.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most of a forklift's day is spent traveling, and that's where a lot of the risk lives. OSHA 1910.178(n) lays out the traveling rules, and they come down to control: the right speed, the right fork height, a clear view of where you're going, and grades taken the right way.",
          "A forklift can't stop or swerve like a car — it's heavy, top-loaded, and steers from the rear. Give yourself room and keep it slow and predictable."
        ]
      },
      {
        heading: "Speed, fork height, and following distance",
        body: [
          "Travel with the load low and tilted back — forks just a few inches off the ground, high enough to clear surfaces but low enough to keep the center of gravity down. Obey the speed limits for the site, and slow down for wet or slippery floors, blind corners, doorways, and congestion.",
          {
            list: [
              "Keep at least three truck lengths (about 10 feet) behind another truck.",
              "Slow down and sound the horn at cross aisles, doorways, and blind corners.",
              "No passing another truck at intersections, blind spots, or dangerous spots.",
              "Keep your whole body inside the truck — never an arm or leg outside the running lines.",
              "Cross railroad tracks diagonally, and don't park within 8 feet of the center of a track."
            ]
          }
        ]
      },
      {
        heading: "Keep a clear view — and reverse when you can't",
        body: [
          "You have to be able to see where you're going. If the load blocks your forward view, travel in reverse so you're looking in your direction of travel — the one exception is going up a ramp, where a loaded truck faces upgrade regardless.",
          "Look toward the path of travel and keep it clear. Use a spotter for loads that block your view or for tight, congested moves. And whatever you do, don't rely on backup alarms alone to keep pedestrians clear — they tune them out."
        ]
      },
      {
        heading: "Ramps and grades",
        body: [
          "Grades are where forklifts tip and loads slide. The rule for which way to face depends on whether you're loaded:",
          {
            list: [
              "Loaded: drive with the load pointing upgrade — forks facing up the slope, going up or down.",
              "Unloaded: drive with the forks pointing downgrade.",
              "Never turn on a ramp or grade — take it straight up and straight down.",
              "Don't raise or lower the load while on the incline.",
              "Keep the load tilted back and travel slowly."
            ]
          },
          "Keeping the heavy end uphill keeps the center of gravity inside the stability triangle. Turn or reverse the load on a slope and you invite a downhill tip-over or a runaway load."
        ]
      }
    ]
  },
  "forklift-safety/load-handling-lifting-stacking-and-tiering": {
    description:
      "Picking up, carrying, and stacking a load is where the forklift does its real work — approach square, tilt back, lift smooth, and keep every load stable and within capacity.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Handling the load is the whole point of the truck, and it's where a lot goes wrong — dropped loads, struck pedestrians, and forward tip-overs. OSHA 1910.178(o) sets the load-handling rules, and they build on one idea: only handle stable, safely arranged loads within the truck's rated capacity.",
          "Good load handling is smooth and deliberate. You line up square, get the forks fully under the load, tilt back to cradle it, and lift and lower without jerking. Rushing the pick or the stack is what spills a load."
        ]
      },
      {
        heading: "Picking up a load",
        body: [
          "Approach the load slowly and squarely, so you're straight on before the forks go in:",
          {
            list: [
              "Set the forks level and spaced as wide as the load or pallet allows.",
              "Drive in until the load rests against the fork backrest — get the forks fully under it.",
              "Lift the load clear, then tilt the mast back to settle it against the backrest.",
              "Lower the load to travel height — a few inches off the ground — before moving.",
              "Check the load is stable and within capacity before you travel."
            ]
          }
        ]
      },
      {
        heading: "Carrying and unstable loads",
        body: [
          "Carry loads low and tilted back so the weight stays cradled and the center of gravity stays down. If a load is loose, long, high, or wide, it needs extra care — bind or arrange it, use a spotter, and take it slow. A load you can't see over means you travel in reverse.",
          "Never handle a load heavier than the rated capacity or one that's stacked so it can shift or topple. If it isn't safely arranged, fix it before you lift — don't try to \"balance it\" on the forks and hope it holds through a turn."
        ]
      },
      {
        heading: "Stacking and tiering",
        body: [
          "When you're placing or pulling loads in racking or a stack, precision matters more than speed:",
          {
            list: [
              "Square up to the rack before raising the load.",
              "Raise or lower with the mast vertical or tilted back only slightly.",
              "Use just enough backward tilt to stabilize the load — no more.",
              "Once the load is placed, level the forks before withdrawing them.",
              "Back straight out, then lower the forks to travel height."
            ]
          },
          "Tilting a raised load forward, or turning with the mast up, moves the center of gravity out over the front wheels — the classic way to pitch a load and the truck forward. Keep the mast up only as long as you need to place the load."
        ]
      }
    ]
  },
  "forklift-safety/pedestrian-safety-and-struck-by-prevention": {
    description:
      "Forklifts and people share the same floor, and struck-by injuries are among the deadliest forklift hazards — separation, visibility, and communication keep pedestrians out of the truck's path.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The most dangerous thing about a forklift often isn't the operator's skill — it's that trucks and people share the same space. Struck-by and crushing injuries are among the leading causes of forklift deaths, and the person hurt is usually a pedestrian, not the operator.",
          "Keeping people safe around forklifts takes three things working together: physical separation, visibility, and communication. Rely on any one alone and you'll eventually have a close call become a hit."
        ]
      },
      {
        heading: "Separation — keep people and trucks apart",
        body: [
          "The best control is to not have people in the truck's path at all. Where the layout allows:",
          {
            list: [
              "Mark and enforce separate pedestrian walkways, kept clear of truck routes.",
              "Use physical barriers, rails, or bollards to protect walkways and work areas.",
              "Set up exclusion zones around active forklift work — no foot traffic during the lift.",
              "Add convex mirrors at blind corners and intersections.",
              "Control access so only trained people are in the truck operating area."
            ]
          },
          "OSHA 1910.178(m) is firm on one point: no one is allowed to stand or pass under the elevated portion of any truck, loaded or empty. A raised load or fork is never something to walk beneath."
        ]
      },
      {
        heading: "Visibility and blind spots",
        body: [
          "A loaded forklift has a big blind spot straight ahead — the load blocks the operator's forward view. That's why the rule is to travel in reverse when the load obstructs the view (except going up ramps). Operators must look toward the path of travel and keep a clear view of the route.",
          "Pedestrians carry responsibility too: make eye contact with the operator before crossing, never assume you've been seen, and stay out of the swing area at the rear — remember the back of the truck swings wide when it turns."
        ]
      },
      {
        heading: "Communication and right of way",
        body: [
          "Horns and eye contact close the gap between separation and visibility. Operators sound the horn at cross aisles, doorways, and blind corners, and slow down where sightlines are poor. Pedestrians get the right of way.",
          "One rule removes a whole class of injuries: no riders. Nobody rides on the forks, the load, or any part of the truck not designed as a seat. And no one reaches or steps between the mast uprights — an arm or leg in there gets crushed when the mast moves."
        ]
      }
    ]
  },
  "forklift-safety/loading-docks-trailers-and-rail-cars": {
    description:
      "Driving a forklift into a trailer or rail car, or working the edge of a dock, adds falling and trailer-movement hazards — chock the wheels, secure the trailer, check the floor, and mind the edge.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Loading docks are one of the most dangerous places a forklift works. You're driving a heavy truck across a gap, onto a trailer or rail car floor that might not hold, next to a drop-off, near a trailer that could roll or tip. Several forklift fatalities every year happen right here.",
          "The controls are specific and non-negotiable: secure the vehicle so it can't move, bridge the gap with a rated dockboard, check the floor before you drive on, and respect the dock edge. Skip one and the trailer rolls, the floor gives, or the truck drives off the dock."
        ]
      },
      {
        heading: "Secure the trailer or truck first",
        body: [
          "Before a forklift drives onto any trailer, truck, or rail car, that vehicle has to be locked in place so it can't move away from the dock:",
          {
            list: [
              "Set the vehicle's brakes and chock the wheels — OSHA 1910.178(k) and (m) require it.",
              "Use a dock lock or restraint where the dock has one.",
              "For a trailer not coupled to a tractor, set fixed jacks (trailer stands) under the nose to stop it from upending under the weight of the truck.",
              "For rail cars, use wheel stops or blocks and derails, and follow blue-flag protection so the car can't be moved while you're in it."
            ]
          },
          "\"Trailer creep\" and pulling away with a forklift still inside are real events — the restraint is what stops them."
        ]
      },
      {
        heading: "Check the floor and the dockboard",
        body: [
          "The floor of a truck, trailer, or rail car has to be checked for breaks and weak points before you drive a loaded forklift onto it — a soft or rotten floor won't take the weight. Look before you commit.",
          "Bridge the gap with a dockboard or bridge plate that's rated for the load and properly secured so it can't shift. Portable dockboards should be anchored or have curbs to keep the truck from running off the side. Watch for the gap and the lip every time — don't assume it's set."
        ]
      },
      {
        heading: "Mind the dock edge",
        body: [
          "The open edge of a loading dock is a fall hazard for the truck and for people. Driving a forklift off the edge of a dock is one of the classic fatal incidents — it happens when an operator misjudges the edge, or a trailer pulls away leaving an open drop where the operator expected floor.",
          "Keep clear of the dock edge, don't back up to it without knowing where it is, and keep the area well lit. When trucks aren't loading, close or barrier open dock doors so no one — on foot or on a truck — goes over the edge."
        ]
      }
    ]
  },
  "forklift-safety/fueling-battery-charging-and-lp-gas-safety": {
    description:
      "Refueling a forklift, swapping a propane cylinder, or charging a battery all bring fire, explosion, and chemical hazards — done only in designated areas, with the engine off and ignition sources away.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The energy that runs a forklift is also its most concentrated hazard off the job of driving. Gasoline and diesel are flammable, propane is a flammable gas under pressure, and battery charging gives off explosive hydrogen and involves corrosive acid. OSHA 1910.178(g) and (p) set the rules for handling all of it.",
          "The common thread: do it in a designated area, keep ignition sources away, and follow the specific steps for the fuel type. Refueling and charging areas are where a careless spark becomes a fire."
        ]
      },
      {
        heading: "Refueling liquid-fuel trucks",
        body: [
          "For gasoline and diesel trucks, refuel only in designated areas and treat the fuel like the fire hazard it is:",
          {
            list: [
              "Shut the engine off before fueling.",
              "No smoking, open flame, or spark sources anywhere near the fueling area.",
              "Don't overfill; clean up any spill before restarting.",
              "Have fire protection available in the fueling area."
            ]
          }
        ]
      },
      {
        heading: "LP gas (propane) cylinders",
        body: [
          "Propane trucks run off a pressurized cylinder, and swapping it has its own routine. Shut the engine off, close the cylinder valve, and let the engine burn off the line before disconnecting. Then:",
          {
            list: [
              "Wear gloves — liquid propane escaping under pressure causes frostbite burns.",
              "Seat the replacement cylinder correctly with the locating pin, and mount it with the pressure-relief valve positioned as the maker specifies.",
              "Check for leaks with soapy water or a leak detector — never a flame.",
              "Store and change cylinders outdoors or in well-ventilated designated areas, away from heat and ignition sources."
            ]
          },
          "Propane is heavier than air, so a leak pools low where it can find an ignition source — which is exactly why you never test for leaks with a flame."
        ]
      },
      {
        heading: "Battery charging",
        body: [
          "Charging electric-truck batteries releases hydrogen gas, which is explosive, and the electrolyte is sulfuric acid. OSHA 1910.178(g) requires charging to happen in a designated area with the right facilities:",
          {
            list: [
              "Ventilation to carry off the hydrogen gas the battery gives off while charging.",
              "Facilities for flushing and neutralizing spilled electrolyte, plus an eyewash and shower nearby.",
              "Fire protection, and no smoking, sparks, or open flame in the charging area.",
              "PPE — face shield, apron, and gloves — for handling acid and batteries.",
              "Keep the battery cover open during charge to let heat and gas escape, and reinstall vent caps before use."
            ]
          },
          "Position the truck and set the brake before connecting or disconnecting, and keep metal tools and jewelry away from battery terminals — a dead short across a battery throws a lot of energy."
        ]
      }
    ]
  },
  "forklift-safety/attachments-modifications-and-removing-a-truck-from-service": {
    description:
      "Bolting on an attachment or modifying a forklift changes how it lifts and balances — it needs the manufacturer's approval and updated capacity marking, and an unsafe truck comes out of service until it's repaired.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A forklift is engineered as a balanced package — truck, counterweight, and rated capacity all matched. Bolt something onto the front, or change how it's built, and you change that balance. OSHA 1910.178(a) doesn't let you do that on your own judgment; it requires the manufacturer's involvement.",
          "The flip side is knowing when a truck is no longer safe to run. A forklift with a defect that affects safe operation comes out of service and stays out until qualified people fix it. Both rules protect the same thing: a truck that behaves the way its data plate says it will."
        ]
      },
      {
        heading: "Modifications need manufacturer approval",
        body: [
          "OSHA 1910.178(a)(4) is clear: no modifications or additions that affect capacity or safe operation may be made without the manufacturer's prior written approval. That covers changes to the counterweight, mast, hydraulics, or anything that alters how the truck lifts and balances.",
          "When approval is given, the capacity, operation, and maintenance plates, tags, and decals have to be changed to match. You don't fabricate a mast extension in the shop or add a homemade counterweight — the balance math behind the data plate stops being true, and the truck can tip on a load it used to handle."
        ]
      },
      {
        heading: "Attachments change the rating",
        body: [
          "Adding a legitimate attachment — a clamp, rotator, side-shifter, or fork extension — adds weight out front and changes the load center, which lowers the truck's safe capacity. OSHA 1910.178(a)(5) requires that when a truck is equipped with front-end attachments not factory-installed, it be marked to identify the attachment and show the approximate combined weight of the truck and attachment at maximum elevation with the load laterally centered.",
          "Operate to the attachment's derated capacity, not the bare-truck number, and make sure the marking reflects the attachment that's actually on the truck. An attachment the operator doesn't account for is an overload waiting to happen."
        ]
      },
      {
        heading: "Removing a truck from service",
        body: [
          "When a truck isn't safe, it comes off the floor. OSHA 1910.178(p) and (q) require that trucks in unsafe condition be removed from service, and that repairs be made only by authorized, qualified personnel. Tag it out so no one runs it in the meantime.",
          "Common reasons to pull a truck immediately:",
          {
            list: [
              "Brakes, steering, or the horn not working right.",
              "A hydraulic, fuel, or oil leak.",
              "Damaged forks, mast, chains, or overhead guard.",
              "An engine or LP system emitting hazardous sparks or fumes, or overheating.",
              "A missing or illegible data plate, or an unapproved modification."
            ]
          },
          "The daily inspection is what usually catches these — when it does, the truck's day is done until it's fixed and signed off."
        ]
      }
    ]
  },
  "welding-and-hot-work/hot-work-hazards-and-when-a-permit-is-required": {
    description:
      "Hot work throws sparks and slag that travel, smolder, and start fires hours later — which is why OSHA makes you stop, prepare the area, and get it authorized before a torch or grinder ever fires up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Hot work is any job that makes flames, sparks, or heat — welding, cutting, brazing, soldering, grinding, and torch work all count. The danger isn't just the arc in front of you. Sparks and molten slag can fly more than 35 feet, roll into cracks, drop through floor openings, and land on something combustible you never looked at. Fires often smolder unseen and flare up long after the crew has packed up.",
          "That's why hot work isn't a task you just start. OSHA 1926.352 and 1910.252(a) require you to size up the fire risk, prepare the area, and — in most workplaces — pull a hot work permit before the tool comes on."
        ]
      },
      {
        heading: "Why hot work causes fires",
        body: [
          "A single cutting or grinding operation can send thousands of sparks in every direction. Each one is a tiny piece of burning metal hot enough to ignite paper, sawdust, rags, insulation, packaging, or flammable vapor. The classic hot work fire has the same story every time:",
          {
            list: [
              "Sparks or slag traveled farther than anyone expected — through a gap, down a hole, behind a wall.",
              "A combustible nobody moved caught and smoldered.",
              "The crew left, and the fire grew with no one watching."
            ]
          },
          "You control this by widening your view past the tip of the torch and thinking about where the heat can go, not just where you're pointing it."
        ]
      },
      {
        heading: "When a hot work permit is required",
        body: [
          "A hot work permit is a written authorization that says the area's been checked and the precautions are in place. Management designates safe permanent areas for hot work; anywhere outside those areas, hot work is only allowed after someone responsible inspects the spot and issues the permit.",
          "Before the permit is signed, a supervisor inspects the area and confirms the fire controls, then designates the precautions — clearing combustibles, protecting what can't move, assigning a fire watch, and confirming extinguishing equipment is on hand. The permit ties it all together and names who's responsible.",
          "If you're about to do hot work outside a designated area and there's no permit, that's a stop-and-ask moment — not a formality to skip."
        ]
      },
      {
        heading: "When hot work simply isn't allowed",
        body: [
          "Some conditions rule out hot work entirely until they're fixed. Don't strike an arc or light a torch:",
          {
            list: [
              "In or near an area with flammable vapors, gases, or combustible dust in the air.",
              "On or inside drums, tanks, or containers that held flammables until they've been cleaned and tested safe.",
              "Where sprinklers are shut off, or fire protection is out of service.",
              "Where the required precautions from 1910.252(a) — moving the object, removing hazards, or guarding — can't be met."
            ]
          },
          "If the area can't be made safe, the work waits. There's no version of hot work that's worth an explosion or a structure fire."
        ]
      }
    ]
  },
  "welding-and-hot-work/preparing-the-work-area-fire-prevention": {
    description:
      "The 35-foot rule is the heart of hot work fire prevention: clear combustibles, protect what can't move, and have extinguishing equipment right there before the first spark.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most hot work fires are prevented — or caused — in the minutes before the tool comes on. OSHA 1926.352 and 1910.252(a) lay out a simple order of priority: move the work to a safe spot, and if you can't, move the hazards away from the work. Only when neither is possible do you fall back on guards and shields.",
          "The number to remember is 35 feet. That's the radius around the hot work you have to think about, because that's how far sparks and slag realistically travel."
        ]
      },
      {
        heading: "The 35-foot rule",
        body: [
          "Whenever you can, take the object being cut or welded to a designated safe area. When the object can't be moved and it has combustibles nearby, then all movable fire hazards within 35 feet get taken to a safe place.",
          "Anything combustible that can't be moved gets protected instead:",
          {
            list: [
              "Cover it with flame-resistant blankets, tarps, or metal guards.",
              "Close or cover floor and wall openings within 35 feet so sparks can't drop through to a lower level or the other side.",
              "Protect combustible floors — wet them down, cover with damp sand, or lay fire-resistant shields.",
              "Cover ducts and conveyors that could carry sparks to distant combustibles."
            ]
          },
          "Remember sparks fall and roll. A gap in the floor, a wall penetration, or a stack of pallets two rooms over can all be in play."
        ]
      },
      {
        heading: "Extinguishing equipment on hand",
        body: [
          "Fire extinguishing equipment has to be right there and ready — not down the hall. Depending on the job that means a charged extinguisher rated for the hazard, a charged fire hose, buckets of water or sand, or a combination.",
          "Whoever's doing the fire watch needs to know how to use it and be able to reach it in seconds. Confirm the extinguisher is charged and the right class before work starts, not while something's already burning."
        ]
      },
      {
        heading: "Special hazards to check for",
        body: [
          "Before you fire up, walk the area and rule out the things that turn routine hot work into a disaster:",
          {
            list: [
              "Flammable liquids, vapors, or gases — the atmosphere has to be clear.",
              "Combustible dust on beams, ledges, and equipment that a spark can ignite.",
              "Coatings, linings, or insulation that can burn or give off toxic smoke.",
              "Hidden combustibles inside walls, above ceilings, or below grated floors."
            ]
          },
          "If any of these can't be controlled, the work doesn't start until they are. Preparation is the main control — once the sparks are flying, it's too late to see what you missed."
        ]
      }
    ]
  },
  "welding-and-hot-work/the-fire-watch-and-post-work-monitoring": {
    description:
      "A fire watch is a person whose only job is to catch a fire before it grows — and OSHA keeps them on station for at least 30 minutes after the tool shuts off, because that's when hidden fires flare up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The fire watch is one of the most important controls in hot work, and it's the one most often shortchanged. It's a person assigned to watch for fire while hot work is going on and for a period after it stops — and to put out a starting fire or sound the alarm if one gets away.",
          "OSHA 1910.252(a)(2)(iii) spells out when a fire watch is required and how long it stays. This is not a paperwork step. Most fatal hot work fires grew because nobody was watching after the work stopped."
        ]
      },
      {
        heading: "When a fire watch is required",
        body: [
          "You need a fire watch whenever hot work is done where more than a minor fire could develop, including any of these:",
          {
            list: [
              "Combustible material is closer than 35 feet to the point of the work.",
              "Combustibles are more than 35 feet away but easily ignited by sparks.",
              "Wall or floor openings within 35 feet expose combustibles in adjacent areas, including concealed spaces in walls or floors.",
              "Combustible materials are against the opposite side of metal walls, partitions, ceilings, or roofs and could ignite from conduction or radiation."
            ]
          },
          "When those conditions aren't present and the area is genuinely clear, a dedicated watcher may not be required — but that's a judgment the permit and supervisor make, not the person holding the torch."
        ]
      },
      {
        heading: "What the fire watch does",
        body: [
          "The fire watch has one job and shouldn't be pulled onto anything else while hot work is live. That person:",
          {
            list: [
              "Watches the work area and the surrounding spaces — including levels below and the far side of walls — for sparks and smoldering.",
              "Has firefighting equipment right at hand and knows how to use it.",
              "Puts out small fires within the extinguisher's capacity and sounds the alarm for anything bigger.",
              "Knows how to raise the alarm and get help fast."
            ]
          },
          "A fire watch who's also welding, spotting a crane, or running for parts isn't a fire watch."
        ]
      },
      {
        heading: "The 30-minute post-work watch",
        body: [
          "Here's the part crews skip: the fire watch is maintained for at least 30 minutes after hot work is completed, to detect and extinguish smoldering fires. Sparks that landed in insulation, dust, or a wall cavity can smolder for a long time before they break into open flame.",
          "So the work isn't done when the torch shuts off. Someone keeps eyes on the area — and the concealed spaces sparks could have reached — for a full half hour. Some jobs and permits require longer. Don't clear the fire watch early because the visible work looks finished."
        ]
      }
    ]
  },
  "welding-and-hot-work/oxygen-fuel-gas-welding-and-cutting": {
    description:
      "Oxy-fuel work pairs pure oxygen with a fuel gas like acetylene — a powerful cutting tool and a serious fire and explosion hazard if the cylinders, valves, and flame aren't handled right.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Oxygen-fuel gas welding and cutting uses a torch that mixes a fuel gas — most often acetylene — with pure oxygen to make a flame hot enough to cut steel. OSHA 1926.350 and 1910.253 govern how it's set up and run, because the two gases that make it work are exactly what make it dangerous.",
          "Pure oxygen doesn't burn, but it makes everything else burn violently — including grease, oil, and clothing. Acetylene is unstable under pressure. Treat the setup with respect from the cylinder to the tip."
        ]
      },
      {
        heading: "Setting up and lighting safely",
        body: [
          "A safe start follows a set order and a few hard rules:",
          {
            list: [
              "Keep oxygen away from oil and grease — never lubricate regulators, valves, or fittings, and don't handle oxygen equipment with greasy gloves.",
              "Crack the cylinder valve slightly to blow out dirt before attaching the regulator, and stand to the side of the regulator — never in front of the gauge face — when opening the valve.",
              "Open cylinder valves slowly. Open the acetylene valve no more than about one turn so you can shut it fast in an emergency.",
              "Use a friction lighter or striker to light the torch — never matches or a lighter held at the tip.",
              "Purge the lines and set working pressures before lighting."
            ]
          }
        ]
      },
      {
        heading: "The acetylene 15 psi limit",
        body: [
          "Acetylene is the big one to respect. It becomes unstable and can decompose explosively at higher pressures, so acetylene must never be used at a pressure over 15 psig (about 30 psia). Don't crank the regulator past it looking for more heat.",
          "Acetylene cylinders also have to stay valve-end up so the acetone inside doesn't get drawn into the lines. And the cylinder valve should never be opened more than about one and a half turns, so you can close it quickly if something goes wrong."
        ]
      },
      {
        heading: "Shutting down and leaving the torch",
        body: [
          "Shut down in a way that leaves the system safe:",
          {
            list: [
              "Close cylinder valves when the work is finished or the equipment is unattended for a substantial time.",
              "Bleed the lines and back the regulator adjusting screws out so there's no pressure on the diaphragms.",
              "Never leave a lit or pressurized torch lying around, and don't hang the torch on a regulator or cylinder valve.",
              "When cylinders are moved, close the valves and — unless on a cart designed for it — remove the regulators and replace the valve protection caps."
            ]
          },
          "A torch left charged or a valve left cracked is how leaks and flashbacks find their way into the shop."
        ]
      }
    ]
  },
  "welding-and-hot-work/compressed-gas-cylinders-storage-handling-and-transport": {
    description:
      "A compressed gas cylinder is a bomb if the valve snaps off — so OSHA is strict about keeping them secured upright, capped when moved, and oxygen stored well away from fuel gas.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The cylinders feeding a welding rig hold gas at very high pressure. Knock the valve off an unsecured cylinder and it can rocket across a yard or through a wall. OSHA 1926.350 and 1910.253 set out how to store, handle, and move them so that never happens.",
          "The rules come down to three habits: keep cylinders secured, keep the caps on when they're not in use, and keep oxygen away from fuel gas and combustibles."
        ]
      },
      {
        heading: "Securing and protecting cylinders",
        body: [
          "Cylinders live and work upright and restrained:",
          {
            list: [
              "Secure cylinders upright with a chain, strap, or stand so they can't fall — in storage, in transport, and at the workstation.",
              "Keep valve protection caps in place whenever the cylinder isn't connected and in use, especially before it's moved.",
              "Never lift a cylinder by the valve or the cap, and don't use them as rollers or supports.",
              "Keep cylinders away from heat, sparks, slag, and open flame — a heated cylinder can over-pressurize.",
              "Keep them clear of electrical circuits and never let a cylinder become part of a welding ground."
            ]
          }
        ]
      },
      {
        heading: "The 20-foot separation rule",
        body: [
          "Oxygen and fuel-gas cylinders in storage have to be kept apart. Oxygen cylinders in storage must be separated from fuel-gas cylinders or combustible materials — especially oil and grease — by at least 20 feet, or by a noncombustible barrier at least 5 feet high with a fire-resistance rating of at least a half hour.",
          "The reason is simple: an oxygen leak next to a fuel leak, or next to something combustible, is a fire waiting for a spark. Store them the right distance apart, valves closed and capped, in a dry, ventilated area — not in a walkway, stairwell, or unventilated closet."
        ]
      },
      {
        heading: "Moving cylinders",
        body: [
          "Most cylinder injuries happen while moving them. Do it the boring, safe way:",
          {
            list: [
              "Close the valve, remove the regulator, and put the valve protection cap on before moving a cylinder any distance.",
              "Move cylinders on a hand truck or cart designed for them, chained in place — don't drag, roll on the bottom edge carelessly, or drop them.",
              "Don't lift cylinders with magnets or by slings around the body; use a proper cradle or platform if lifting by crane.",
              "Keep them out of the path of vehicles and falling objects."
            ]
          },
          "Treat every cylinder as full and under pressure, because the empty-looking one still has enough left to hurt you."
        ]
      }
    ]
  },
  "welding-and-hot-work/regulators-hoses-torches-and-flashback-prevention": {
    description:
      "The regulators, hoses, and torch between the cylinder and the flame are where leaks, backfires, and flashbacks start — inspect them, keep the colors straight, and use flashback arrestors.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Between the cylinder and the flame sits the delivery system — regulators, hoses, and the torch. It's where a lot of oxy-fuel trouble starts: a leaking fitting, a cracked hose, or a flame that travels backward into the equipment. OSHA 1926.350 covers the equipment; good habits and the right safety devices cover the rest.",
          "Two failure modes matter here. A backfire is the flame popping back into the torch with a snap. A flashback is worse — the flame runs back up the hose toward the cylinder, and it can cause an explosion."
        ]
      },
      {
        heading: "Hoses and connections",
        body: [
          "Hoses are color- and thread-coded so you can't cross them: green for oxygen with right-hand threads, red for fuel gas with left-hand threads (the fuel fitting has a notch in the nut). Keep that separation and keep the hoses in good shape:",
          {
            list: [
              "Inspect hoses for burns, cracks, worn spots, and leaks before each use, and replace defective lengths — don't tape them.",
              "Don't repair hose with tape; use proper splices and ferrules, and keep the number of joints to a minimum.",
              "Leak-test connections with soapy water, never with a flame.",
              "Keep hoses out of walkways, off hot surfaces, and clear of sparks and falling slag."
            ]
          }
        ]
      },
      {
        heading: "Regulators and torches",
        body: [
          "Regulators step the cylinder pressure down to a safe working pressure, and they have to be treated as precision equipment:",
          {
            list: [
              "Keep regulators, gauges, and torch fittings clean and free of oil and grease — oil plus oxygen equals fire.",
              "Back the adjusting screw out before opening the cylinder valve, then open the valve slowly.",
              "Don't use a regulator on a gas it wasn't made for, and don't force fittings that don't match.",
              "Clean torch tips with the proper tip cleaner, not a drill bit or wire that changes the orifice.",
              "Take any regulator with a creeping or non-holding pressure out of service."
            ]
          }
        ]
      },
      {
        heading: "Preventing backfire and flashback",
        body: [
          "Flashback arrestors and check valves are your defense against a flame or gas running backward. Check valves stop reverse gas flow; flashback arrestors stop a flame front from reaching the hose and cylinder. Install them per the manufacturer between the torch and hose and/or at the regulator.",
          "If you get a backfire — that loud pop and the flame going out — shut down, let the torch cool, and find out why (often a dirty or overheated tip or wrong pressures) before relighting. If you ever suspect a flashback, close the cylinder valves immediately, starting with the fuel. And know the signs of a heating cylinder: hissing, frost, or a hot spot means get clear and get help."
        ]
      }
    ]
  },
  "welding-and-hot-work/arc-welding-and-cutting-safety": {
    description:
      "Arc welding turns electricity into an intensely hot arc — which means shock, sparks, and radiation risk all at once, controlled through insulated equipment, proper grounding, and de-energizing when you step away.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Arc welding and cutting use an electric arc between an electrode and the work to melt metal. That brings its own hazards on top of the sparks and heat — electric shock from the welding circuit, and intense ultraviolet and infrared radiation from the arc. OSHA 1926.351 and 1910.254 cover how the equipment is set up and used.",
          "The current that makes the weld can also stop your heart. Damp conditions, sweat, and a worn cable or holder all raise the shock risk, so the condition of your equipment matters every shift."
        ]
      },
      {
        heading: "Electrode holders and cables",
        body: [
          "The holder and cables are the parts you touch and the parts that wear:",
          {
            list: [
              "Use electrode holders rated for the current you're running, with the insulation and jaws in good shape.",
              "Inspect welding cable for cracked or worn insulation and exposed conductor; take damaged cable out of service.",
              "Repair cable only with proper insulated splices and connectors — no bare taped joints near the working area.",
              "Keep cables out of walkways, water, and the path of sparks, and don't wrap them around your body."
            ]
          }
        ]
      },
      {
        heading: "Grounding and the welding circuit",
        body: [
          "The machine frame or case must be grounded, and the work lead (ground return) has to make a solid connection to the work. A poor ground connection makes heat, arcing, and a shock hazard, and it can push welding current through unintended paths like conduit, chains, or a cylinder.",
          "Never use a compressed gas cylinder, a pipe carrying flammable gas, or a structural member holding a load as part of the welding circuit. Keep the work clamp close to the weld so the current takes the path you intend."
        ]
      },
      {
        heading: "When you stop or step away",
        body: [
          "Small habits prevent shocks and stray arcs:",
          {
            list: [
              "When you finish a weld or set the holder down, remove the electrode from the holder.",
              "When you leave the work or stop for any length of time, de-energize the equipment — don't leave a live holder lying on the steel.",
              "Hang the holder where it can't touch a grounded surface, a person, or a conductive object.",
              "Never change electrodes or touch the metal parts of the holder with bare or wet hands or a soaked glove."
            ]
          },
          "A live holder left on the work is how the next person — or you — takes a shock nobody planned for."
        ]
      }
    ]
  },
  "welding-and-hot-work/welding-fumes-gases-and-ventilation": {
    description:
      "The plume rising off a weld carries metal fumes and gases — manganese, hexavalent chromium, zinc, and more — and ventilation that keeps your head out of it is the control that protects your lungs and brain.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every weld gives off a plume of fine metal fume and gases. What's in it depends on the base metal, the coating, and the filler — and some of it is genuinely toxic. OSHA 1926.353 and 1910.252(c) require ventilation and, where that's not enough, respiratory protection to keep those fumes out of your lungs.",
          "The plume rises straight up off the arc. The single most effective free move you can make is to keep your head out of it — position yourself so the fume goes past you, not through your helmet."
        ]
      },
      {
        heading: "What's in the plume",
        body: [
          "The specific hazards ride on what you're welding:",
          {
            list: [
              "Manganese — from mild and stainless steel filler; overexposure attacks the nervous system with Parkinson's-like effects.",
              "Hexavalent chromium — from stainless steel and some coatings; a known carcinogen with its own strict OSHA limit.",
              "Zinc — from galvanized steel; causes metal fume fever, the flu-like \"zinc shakes.\"",
              "Cadmium, lead, and beryllium — from certain alloys, platings, and coatings; highly toxic, and beryllium and cadmium are especially dangerous.",
              "Gases like ozone, nitrogen oxides, and carbon monoxide formed by the arc and the shielding process."
            ]
          },
          "Galvanized, painted, plated, or coated metal is a red flag — strip the coating back or step up the ventilation and respiratory protection."
        ]
      },
      {
        heading: "Ventilation controls",
        body: [
          "Ventilation is the primary control, applied in order of effectiveness:",
          {
            list: [
              "Local exhaust ventilation — a fume extractor or hood right at the arc that captures the plume before it reaches your breathing zone. This is the most effective option.",
              "General mechanical ventilation — fans and air movement to dilute and remove fume when local exhaust isn't practical.",
              "Position and airflow — keep upwind of the plume and out of the rising column, and don't let a fan blow shielding gas off the weld."
            ]
          },
          "OSHA calls for mechanical ventilation for indoor work in tight quarters — small rooms, low ceilings, or confined spaces — and for certain toxic metals regardless of the space."
        ]
      },
      {
        heading: "When ventilation isn't enough",
        body: [
          "Some jobs need respiratory protection on top of ventilation — welding on stainless (hexavalent chromium), galvanized (zinc), or coated metal, and any work in a confined space where the fume can't be cleared. In those cases you need the right respirator, selected and fit-tested under a respiratory protection program.",
          "For the toxic metals — cadmium, lead, beryllium, mercury, and fluorine-bearing materials — 1926.353 calls for local exhaust or airline respirators, and for confined-space work with them, airline respirators plus someone stationed outside. Respirator selection and fit are covered under PPE; the point here is to recognize when the plume in front of you is one you can't just breathe through a filter."
        ]
      }
    ]
  },
  "welding-and-hot-work/hot-work-in-confined-spaces": {
    description:
      "A confined space concentrates every welding hazard at once — fumes build, oxygen shifts, and a leaking gas cylinder can fill the space — so cylinders and machines stay outside and the atmosphere gets tested and ventilated.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Welding or cutting inside a tank, vault, manhole, boiler, or other confined space stacks the deck against you. The fume that would rise and clear in open air builds up around your head. The oxygen the process consumes — or that a shielding gas displaces — can drop to a level that won't keep you conscious. And a leaking cylinder or torch can turn the whole space into an explosion hazard.",
          "OSHA 1926.353 sets special rules for hot work in confined spaces, and they work alongside the confined-space entry program. Both apply — don't treat welding as an exception to permit-required entry."
        ]
      },
      {
        heading: "Keep cylinders and machines outside",
        body: [
          "The gas and power sources stay out of the space with you:",
          {
            list: [
              "Keep compressed gas cylinders and welding machines outside the confined space — a leak inside is a fire and asphyxiation hazard you can't escape.",
              "When the torch or the job is left unattended, remove the torch and hose from the space and shut off the gas at the cylinder.",
              "Position the arc welder outside and run only the leads in, so a fault or leak stays outside the space.",
              "Never use oxygen to ventilate or \"freshen\" a space — an oxygen-enriched atmosphere makes everything flammable."
            ]
          }
        ]
      },
      {
        heading: "Ventilation and atmosphere",
        body: [
          "Air is the thing that keeps you alive in there:",
          {
            list: [
              "Test the atmosphere before entry and monitor it continuously — oxygen level, flammable gas, and toxic fume.",
              "Provide mechanical ventilation to keep fume and gas below limits and oxygen in the safe range.",
              "Where ventilation can't keep the air safe, use airline (supplied-air) respirators — a filtering respirator does nothing for low oxygen.",
              "Purge and test any space that held flammable or toxic material before any hot work."
            ]
          }
        ]
      },
      {
        heading: "Attendant and rescue",
        body: [
          "You don't go in alone. An attendant stationed outside keeps watch and stays in contact, ready to summon help and start rescue. For hot work in a confined space, the worker should wear a harness with a lifeline where feasible, tended from outside, so they can be pulled out without a rescuer entering.",
          "The full confined-space rules — permits, entrant and attendant duties, rescue arrangements — apply on top of the welding rules. This topic covers the welding-specific pieces; the entry program itself is covered under Confined Space Safety."
        ]
      }
    ]
  },
  "welding-and-hot-work/cutting-and-welding-on-preservative-coatings-and-containers": {
    description:
      "Paint, galvanizing, and residue in a drum or tank turn into toxic smoke or an explosion when heat hits them — so coatings get stripped back and containers get cleaned, tested, and vented before any torch touches them.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Two of the deadliest hot work jobs look ordinary: welding on painted or coated metal, and cutting on a drum, tank, or pipe that held something flammable. In both cases the danger isn't the metal — it's what's on it or inside it. OSHA 1926.354 covers welding in the way of preservative coatings, and the fire-prevention rules cover containers.",
          "People die on these jobs when they treat an empty-looking container as empty, or a coated surface as bare metal. Neither is safe until it's been made safe."
        ]
      },
      {
        heading: "Preservative coatings",
        body: [
          "Paints, primers, galvanizing, and other coatings can burn, give off toxic smoke, or hide a flammable film. Before hot work on a coated surface:",
          {
            list: [
              "Find out whether the coating is flammable or toxic when heated — a lot of industrial coatings are both.",
              "Strip the coating back from the area of heat far enough that it won't be ignited or decomposed — clean the metal for a margin around the work.",
              "Where the coating can't be fully removed, protect the worker with an airline respirator and provide added ventilation for the toxic fume.",
              "Watch for lead-based paint and other toxic coatings that need their own controls."
            ]
          }
        ]
      },
      {
        heading: "Drums, tanks, and containers",
        body: [
          "A container that held a flammable or combustible is the classic hot work killer — the vapor left behind is what explodes, and it takes only a trace. Never apply heat to a used drum, tank, or vessel until it's been made safe:",
          {
            list: [
              "Empty, clean, and purge the container of all flammable liquid and vapor.",
              "Test the atmosphere inside with a combustible gas indicator and confirm it's below the flammable range before and during the work.",
              "Where practical, fill the container with an inert gas or water to displace vapor, and keep it vented so pressure can't build.",
              "When you can't verify it's clean and vapor-free, don't cut or weld on it — period."
            ]
          }
        ]
      },
      {
        heading: "Don't trust \"empty\"",
        body: [
          "The word \"empty\" has killed a lot of people on this job. A drum that's been drained still holds enough vapor to blow the ends off. A tank that \"only ever held water\" may have had something else years ago. A pipe may still be connected to a live system.",
          "So verify, don't assume. Confirm what the container held, that it's been cleaned and purged, and that a gas test reads safe — and re-test, because vapor can come back. If any of that can't be confirmed, the hot work waits until it can."
        ]
      }
    ]
  },
  "welding-and-hot-work/ppe-and-radiation-protection-for-welders": {
    description:
      "Welding throws UV and infrared radiation, sparks, molten metal, and hot slag at you — so the right filter shade, a proper helmet, flame-resistant clothing, and screens for the people around you aren't optional.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The welding arc is one of the most intense light sources on a job site. It puts out ultraviolet and infrared radiation that burns eyes and skin, plus sparks, spatter, molten metal, and hot slag. OSHA 1910.252(b) and 1926.353 set the PPE requirements, and they cover both the welder and everyone nearby.",
          "This isn't gear you wear when you feel like it. A few seconds of unprotected arc exposure gives you \"arc eye,\" and bare skin under the arc burns like a sunburn — fast."
        ]
      },
      {
        heading: "Eye and face protection — filter shades",
        body: [
          "Your helmet or goggles need a filter lens dark enough for the process and the current. The higher the amperage, the darker the shade you need:",
          {
            list: [
              "Oxy-fuel gas welding and light cutting — roughly shade 4 to 6.",
              "Heavy cutting and higher-heat gas work — up to about shade 6 to 8.",
              "Shielded metal arc (stick) welding — shade 10 to 14 depending on amperage; heavier current needs the darker lenses.",
              "Always wear safety glasses under the helmet for when it's up and for chipping slag."
            ]
          },
          "\"Arc eye\" (welder's flash, or photokeratitis) is a UV burn to the surface of the eye. It shows up hours later as gritty, painful, watering eyes — and it's entirely preventable with the right shade and a helmet that's actually down."
        ]
      },
      {
        heading: "Protecting the body from heat and sparks",
        body: [
          "Sparks, spatter, and slag find every gap. Dress to keep them off skin:",
          {
            list: [
              "Flame-resistant clothing — leather or treated cotton; never synthetics that melt, and never oily or greasy clothing.",
              "Leather gloves, and a leather apron, sleeves, or jacket for heavier work.",
              "High-top leather boots and cuffless pants worn over the boots so sparks can't lodge in a cuff or fall inside.",
              "A hood or cap under the helmet for overhead work, and hearing protection where cutting and grinding are loud.",
              "Keep collars buttoned and pockets closed — an open pocket is a spark trap."
            ]
          }
        ]
      },
      {
        heading: "Protecting people nearby",
        body: [
          "The arc burns the eyes of anyone who looks at it, not just the welder. Anyone in the area can catch arc eye from a flash across the shop. So:",
          {
            list: [
              "Set up non-combustible or flame-resistant screens or shields around the work to block the arc from passersby and other crews.",
              "Warn nearby workers before you strike an arc, and keep helpers and fire watches in proper eye protection.",
              "Position screens so they don't trap fume or block ventilation."
            ]
          },
          "Respirator selection for the fume is covered under PPE and the fume topic — here the focus is the radiation, sparks, and burns. Protect yourself, and protect the person who just walked around the corner."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/classes-of-fire-a-b-c-d-and-k": {
    description:
      "Fires are sorted into five classes by what's burning — and grabbing the wrong extinguisher for the class can do nothing, spread the fire, or get you shocked or blown back.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every portable extinguisher is built for certain kinds of fire, and fires are grouped into five classes by the fuel that's burning: A, B, C, D, and K. Match the extinguisher to the class and you knock the fire down. Grab the wrong one and you can waste the whole bottle, spread the fire, or hurt yourself.",
          "You don't need to be a firefighter to use this. You need to look at what's on fire, name the class, and reach for an extinguisher rated for it."
        ]
      },
      {
        heading: "The five classes",
        body: [
          "Here's what each class means and what's burning:",
          {
            list: [
              "Class A — ordinary combustibles: wood, paper, cloth, cardboard, rubber, and most plastics.",
              "Class B — flammable and combustible liquids and gases: gasoline, diesel, oil, grease, solvents, paint, propane.",
              "Class C — energized electrical equipment: live wiring, panels, motors, tools, and machinery still under power.",
              "Class D — combustible metals: magnesium, titanium, sodium, potassium, lithium, and zirconium, often as chips, turnings, or powder.",
              "Class K — cooking media: vegetable and animal oils and fats in commercial kitchen equipment."
            ]
          }
        ]
      },
      {
        heading: "Why the class decides the agent",
        body: [
          "The class isn't trivia — it changes what's safe to put on the fire:",
          {
            list: [
              "Water on a Class B liquid fire spreads the burning liquid; on Class C it can conduct current back to you.",
              "Water or a standard extinguisher on Class D can react violently with the hot metal.",
              "Class K grease fires re-ignite unless you use an agent that cools and seals the surface.",
              "A Class C fire becomes a Class A or B fire once you kill the power — de-energizing is often the first real move."
            ]
          },
          "So the first question at any fire isn't \"where's an extinguisher\" — it's \"what's burning,\" because that's what tells you which extinguisher will actually work."
        ]
      },
      {
        heading: "Reading the class off the fuel",
        body: [
          "On a job site you'll usually be sizing this up in seconds. Ordinary trash and lumber is A. Anything from a fuel can, a solvent drum, or a gas line is B. If it's plugged in or energized, treat it as C until the power's off. Grinding dust or shavings from magnesium or titanium is D. Fryer or cooking oil is K.",
          "When more than one fuel is involved — say a fuel spill near energized equipment — you need an extinguisher rated for every class present, which is exactly why multipurpose ABC extinguishers are so common on site. The next topic covers the extinguisher types that cover these classes."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/types-of-portable-extinguishers-and-what-they-put-out": {
    description:
      "Water, foam, CO₂, dry chemical, wet chemical, and dry powder each fight different classes — knowing what's in the bottle in your hand tells you what it will and won't put out.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The extinguisher on the wall is defined by what's inside it. Each agent works on certain fire classes and fails — sometimes dangerously — on others. Knowing the common types tells you at a glance what a given bottle can handle.",
          "The one you'll see most on a construction or industrial site is the multipurpose dry chemical ABC. But it's not the only one, and it's not right for every hazard."
        ]
      },
      {
        heading: "The common agents",
        body: [
          "These are the types you're most likely to meet and the classes they cover:",
          {
            list: [
              "Water (APW) — Class A only. Cools ordinary combustibles. Never on B, C, or D.",
              "Foam (AFFF) — Class A and B. Blankets a liquid surface to smother it. Conductive, so not for energized equipment.",
              "Carbon dioxide (CO₂) — Class B and C. Smothers and leaves no residue, so it's good for electronics and electrical — but short range and easily blown away outdoors.",
              "Dry chemical, multipurpose (ABC) — Class A, B, and C. The site workhorse. Leaves a corrosive powder residue.",
              "Ordinary dry chemical (BC) — Class B and C only, no A rating.",
              "Wet chemical — Class K (and light A). Cools and saponifies cooking grease so it won't re-flash.",
              "Dry powder — Class D only. A special metal-fire agent — not the same thing as dry chemical."
            ]
          }
        ]
      },
      {
        heading: "Strengths and limits to know",
        body: [
          "A few practical points that catch people out:",
          {
            list: [
              "CO₂ has a short reach (a few feet) and displaces oxygen — dangerous in a small enclosed space, and it can frostbite bare skin at the horn.",
              "Dry chemical residue is corrosive and makes a mess of electronics and machined surfaces — CO₂ or a clean agent is better around sensitive equipment.",
              "Foam and water conduct electricity — keep them off anything energized.",
              "\"Dry chemical\" and \"dry powder\" sound alike but are not interchangeable: only dry powder is made for combustible-metal (Class D) fires."
            ]
          }
        ]
      },
      {
        heading: "Match the bottle to the hazard",
        body: [
          "Before you rely on an extinguisher, read its faceplate and confirm it covers the fire classes you could actually face at that spot. A welding bay with fuel and energized gear wants ABC coverage; a metal-grinding station wants a Class D unit staged nearby; a kitchen wants Class K.",
          "If the only extinguisher in reach is wrong for the hazard, that's a gap to flag before there's a fire — not something to discover with flames in front of you."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/reading-the-label-ratings-and-listings": {
    description:
      "The faceplate tells you exactly what an extinguisher can do — the letter classes it fights and the numbers that rate how big a fire it can handle.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every listed extinguisher carries a rating on its faceplate — a mix of numbers and letters like 4A:80B:C. That rating isn't decoration; it tells you which classes of fire the unit fights and, for A and B, roughly how much fire it can put out.",
          "Learning to read it takes a minute and tells you whether the bottle in your hand is up to the fire in front of you."
        ]
      },
      {
        heading: "Letters and numbers",
        body: [
          "The rating combines a class letter with, for A and B, a number in front of it:",
          {
            list: [
              "The letter (A, B, C, D, K) is the class of fire the unit is listed for.",
              "The Class A number runs roughly 1A to 40A and reflects extinguishing capacity — a 1A rating is about the equivalent of 1¼ gallons of water.",
              "The Class B number is the approximate square feet of flammable-liquid fire a non-expert operator can put out — a 10B handles about 10 square feet.",
              "Class C carries no number — it just means the agent is non-conductive and safe on energized equipment; the unit's A or B numbers still apply once the power's off.",
              "Class D and K units are rated for specific hazards, with details on the faceplate rather than a simple number."
            ]
          },
          "So 4A:80B:C means it'll handle a moderate ordinary-combustible fire, about 80 square feet of liquid fire, and it's safe on energized equipment."
        ]
      },
      {
        heading: "Listings and markings",
        body: [
          "A trustworthy extinguisher is listed and labeled by a nationally recognized testing lab — you'll see a UL (or similar) listing mark. That listing is what backs up the rating on the plate.",
          "Modern labels also use pictured symbols: a picture of the fire type in a blue box means the unit works on it; the same symbol with a red slash means it does not. Those pictographs are a fast way to check suitability without decoding the alphanumeric rating."
        ]
      },
      {
        heading: "Use the rating to plan, not just to react",
        body: [
          "Ratings matter before the fire, too. OSHA's distribution rules (covered under selecting and distributing) are built around Class A and B ratings and how far apart units can be. A higher-rated extinguisher covers more hazard and can allow greater spacing.",
          "When you check an extinguisher, glance at the rating and ask whether it fits the hazard where it's mounted. A 2A:10B:C by a large fuel storage area is undersized — the rating tells you that at a glance."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/size-up-when-to-fight-a-fire-and-when-to-get-out": {
    description:
      "A portable extinguisher is for a small, early fire and nothing more — the most important skill is honestly judging when to fight and when to drop the bottle and get out.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A portable extinguisher is built for an incipient fire — a small, early-stage fire you catch in the first moments. Past that stage, no handheld bottle is going to win, and trying turns a property loss into a life loss.",
          "The single most valuable skill in this whole category isn't technique — it's the honest size-up: deciding fast whether this is a fire to fight or a fire to run from. Life safety comes before property, every time."
        ]
      },
      {
        heading: "Only fight the fire if all of these are true",
        body: [
          "Fight it only when every one of these holds:",
          {
            list: [
              "The alarm's been raised and people are getting out.",
              "The fire is small, contained, and not spreading — still in its early stage.",
              "You have the right extinguisher for the class, and it's fully charged.",
              "You're trained and confident using it.",
              "The smoke and heat are light enough to approach safely.",
              "You have a clear, unobstructed escape route at your back — you're between the fire and the exit, never the other way around."
            ]
          },
          "If any one of these is missing, don't fight it."
        ]
      },
      {
        heading: "Get out when",
        body: [
          "Back out and evacuate the moment you see any of these:",
          {
            list: [
              "The fire is spreading, has reached the ceiling, or has moved beyond where it started.",
              "The room is filling with smoke, or you can't see or breathe easily.",
              "The extinguisher empties and the fire's still going — you get one bottle, not a duel.",
              "You're unsure of the fuel, the extinguisher, or your escape.",
              "Your instinct says it's too big — trust it."
            ]
          },
          "Close doors behind you if you can, keep low under smoke, and get everyone to the assembly point."
        ]
      },
      {
        heading: "Know your site's policy",
        body: [
          "Not every employer wants workers fighting fires. Under OSHA some sites require total evacuation and train nobody to use extinguishers; others designate and train specific people. Know which one your site is before an alarm sounds — fighting a fire you were told to evacuate from helps no one.",
          "Either way, the rule that never changes: raise the alarm and get people out first. A portable extinguisher buys you a clear path or a chance at a truly small fire — it is not a reason to stay in a building that's beginning to burn."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/the-pass-technique": {
    description:
      "PASS — Pull, Aim, Squeeze, Sweep — is how you actually use an extinguisher: aim at the base of the fire, not the flames, from a safe distance back.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Once you've decided the fire is small enough to fight and you've got the right extinguisher, the technique is simple and worth knowing cold: PASS — Pull, Aim, Squeeze, Sweep. Under stress people forget it, so it's exactly the kind of thing a toolbox talk should drill.",
          "The core idea behind all four steps: hit the base of the fire — the fuel — not the flames above it."
        ]
      },
      {
        heading: "The four steps",
        body: [
          "PASS stands for:",
          {
            list: [
              "Pull the pin — this breaks the tamper seal and frees the handle.",
              "Aim low, at the base of the fire, not at the flames. The flames go out when the fuel stops burning.",
              "Squeeze the handle to discharge the agent in a controlled stream.",
              "Sweep from side to side across the base of the fire, keeping it aimed at the fuel until the fire is out."
            ]
          },
          "Do a quick test squeeze before you approach, so you know the extinguisher works and get a feel for the range."
        ]
      },
      {
        heading: "Distance, position, and watching for re-flash",
        body: [
          "How you stand matters as much as the steps:",
          {
            list: [
              "Start about 6 to 8 feet back — most portable extinguishers have a short range and only 8 to 15 seconds of discharge.",
              "Keep your back to your exit so you never have to move toward or past the fire to escape.",
              "Move in as the fire shrinks, keeping the stream on the base.",
              "After it's out, watch for re-flash — liquids and grease especially can re-ignite — and keep the extinguisher ready.",
              "Back away from the fire when done; don't turn your back on it."
            ]
          }
        ]
      },
      {
        heading: "After you've used it",
        body: [
          "A used extinguisher is a dead extinguisher until it's serviced — even a one-second squeeze can bleed the pressure over time. So once you've discharged one, even partially, take it out of service, report it, and get it recharged or replaced.",
          "Never hang a used extinguisher back on the bracket. The next person to grab it is counting on a full bottle, and finding an empty one in a fire is the worst possible time."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/selecting-and-distributing-extinguishers": {
    description:
      "OSHA ties extinguisher selection to the hazard and caps how far you can be from one — 75 feet for Class A, 50 feet for Class B — so the right unit is always within reach.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1910.157(d) requires extinguishers to be selected and distributed based on the classes of fire that could happen in the area and the size and degree of the hazard. In plain terms: the right type of extinguisher, enough of them, and never too far to reach one.",
          "The rule sets maximum travel distances — how far a worker should ever have to walk to get to an extinguisher — and those distances depend on the fire class."
        ]
      },
      {
        heading: "Maximum travel distances",
        body: [
          "The distance limits are the numbers to know:",
          {
            list: [
              "Class A hazards — no more than 75 feet of travel distance to an extinguisher.",
              "Class B hazards — no more than 50 feet, because flammable-liquid fires grow fast.",
              "Class C hazards — extinguishers distributed on the basis of the Class A or B pattern that applies to the area.",
              "Class D hazards — within 75 feet of the combustible-metal work.",
              "Class K hazards — within 30 feet of the cooking equipment (per NFPA 10)."
            ]
          },
          "Travel distance means the actual walking path around benches, racks, and walls — not a straight line through solid objects."
        ]
      },
      {
        heading: "Selecting for the hazard",
        body: [
          "Selection is about matching type and size to what's actually there:",
          {
            list: [
              "Identify every fire class present in the area — often more than one.",
              "Choose extinguishers rated for all of those classes (multipurpose ABC covers the common mix).",
              "Size the rating to the hazard — bigger fuel loads need higher A and B ratings, not just more small bottles.",
              "Stage special units where they're needed: Class D near combustible-metal work, Class K near cooking, CO₂ or clean agent near sensitive electronics."
            ]
          }
        ]
      },
      {
        heading: "Distribution on a changing site",
        body: [
          "On construction sites the hazards move as the work moves. Fuel storage, a new welding area, or a temporary generator all change where extinguishers need to be. Distribution isn't a one-time layout — it gets revisited as the site and its hazards shift.",
          "When you set up a new operation with a fire hazard, part of the setup is confirming a properly rated extinguisher is within the required travel distance before the work starts."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/placement-mounting-and-access": {
    description:
      "An extinguisher only helps if you can find it and grab it fast — so OSHA requires them mounted, visible, identified, and never blocked, at heights anyone can lift them from.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1910.157(c) says extinguishers must be provided, mounted, located, and identified so they're readily accessible without putting anyone at risk to reach them. A properly rated extinguisher does nothing if it's hidden behind a pallet or lying on the floor under a tarp.",
          "Placement is one of the easiest things to get wrong on a busy site and one of the easiest to fix — most of it is just discipline about where the bottle lives and keeping the path to it clear."
        ]
      },
      {
        heading: "Mounting and height",
        body: [
          "Extinguishers are mounted on brackets or in cabinets, not left standing on the floor where they get knocked over, wet, or buried. Height matters so anyone can lift one down safely (per NFPA 10):",
          {
            list: [
              "Units weighing 40 pounds or less: mounted so the top is no more than 5 feet above the floor.",
              "Units heavier than 40 pounds (except wheeled): mounted so the top is no more than 3½ feet above the floor.",
              "Keep a clearance of at least 4 inches between the bottom of the extinguisher and the floor.",
              "Secure the unit in its bracket so vibration or a bump can't drop it."
            ]
          }
        ]
      },
      {
        heading: "Visibility and access",
        body: [
          "You have to be able to see it and reach it fast:",
          {
            list: [
              "Keep extinguishers in plain sight; where they'd be visually obstructed, use signs or arrows to mark the location.",
              "Never block the extinguisher or its path with stored material, equipment, cords, or parked vehicles.",
              "Locate them along normal travel routes and near exits, so grabbing one keeps you moving toward the way out.",
              "Keep the location consistent so crews learn where they are."
            ]
          }
        ]
      },
      {
        heading: "Keep it that way",
        body: [
          "Placement isn't set-and-forget. Material gets stacked in front of extinguishers, they get borrowed and not returned, and temporary work blocks the path. That's exactly what the monthly visual inspection is meant to catch.",
          "In a fire, people go to where the extinguisher is supposed to be. If it's not there, or they can't get to it, the seconds they lose looking are the seconds the fire uses to grow. Access is a life-safety issue, not housekeeping."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/the-monthly-visual-inspection": {
    description:
      "Once a month, someone lays eyes on every extinguisher to confirm it's there, charged, and ready — a 30-second check that catches the empty or blocked bottle before you need it.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1910.157(e) requires portable extinguishers to be visually inspected at least monthly. It's a quick look — not a teardown — to confirm each unit is in its place and ready to work. Anyone can be trained to do it.",
          "The whole point is to find the dead or missing extinguisher on a calm Tuesday, not in the middle of a fire. A surprising number of extinguishers fail this simple check."
        ]
      },
      {
        heading: "What to check every month",
        body: [
          "Walk each extinguisher and confirm:",
          {
            list: [
              "It's in its assigned spot, visible, and not blocked or obstructed.",
              "The pressure gauge needle sits in the green (operable) range — not in the red on either side.",
              "The tamper seal and pin are intact, showing it hasn't been used or fiddled with.",
              "There's no visible damage, dents, corrosion, or leakage, and the nozzle or horn is clear.",
              "The instruction label faces out and is legible.",
              "For CO₂ and cartridge units, the weight is right if your site weighs them."
            ]
          }
        ]
      },
      {
        heading: "Recording it",
        body: [
          "The monthly check gets recorded. In practice that's a date and initial on the tag attached to the extinguisher, and often a log as well. The record shows the inspection is actually happening month after month.",
          "If you find a problem — low pressure, a broken seal, damage, or a missing unit — tag it, report it, and get it serviced or replaced. Don't leave a suspect extinguisher on the wall giving people false confidence."
        ]
      },
      {
        heading: "Inspection vs. maintenance",
        body: [
          "The monthly visual inspection is the quick look anyone can do. It's different from the annual maintenance check, which is a thorough, hands-on examination by a trained person — that's the next topic.",
          "Think of it this way: the monthly inspection catches the obvious (missing, blocked, discharged, damaged); the annual maintenance catches the internal and mechanical problems a glance can't. You need both."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/annual-maintenance-and-recharging": {
    description:
      "Once a year every extinguisher gets a thorough hands-on check by a trained person — and any extinguisher that's been used, even for a second, gets recharged before it goes back up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "On top of the monthly look, OSHA 1910.157(e) requires a thorough maintenance check at least once a year, done by someone trained to do it. This is the hands-on examination that catches the problems a visual inspection can't — internal condition, mechanical parts, and the agent itself.",
          "Recharging is the partner to maintenance: any extinguisher that's been discharged, even partially, has to be recharged before it's put back in service."
        ]
      },
      {
        heading: "The annual maintenance check",
        body: [
          "The yearly maintenance is a complete examination of the extinguisher's mechanical parts, the extinguishing agent, and the expelling means. The servicer verifies the unit is fully charged and operable and repairs or replaces what's needed.",
          "OSHA requires the maintenance to be recorded and the record kept. The date of the last annual maintenance is marked on the tag, and the record is retained for at least one year after the check (or the life of the shell if the unit is discarded)."
        ]
      },
      {
        heading: "Recharging after use",
        body: [
          "An extinguisher is a one-and-done tool until it's recharged:",
          {
            list: [
              "Recharge any extinguisher after any use — even a quick test squeeze or a partial discharge bleeds pressure and agent.",
              "Recharge rechargeable units per the manufacturer's instructions with the correct agent.",
              "Non-rechargeable (disposable) units are replaced, not refilled, once used or expired.",
              "Never put a used or under-pressure extinguisher back on the bracket."
            ]
          }
        ]
      },
      {
        heading: "Internal exams and stored-pressure units",
        body: [
          "Some extinguishers also need periodic internal examination between hydrostatic tests. For example, stored-pressure dry chemical units in the 12-year hydrostatic category get emptied and examined internally at intervals not exceeding 6 years.",
          "You don't have to memorize every interval — that's the servicer's job — but you should know that maintenance is more than the annual glance-over, and that an extinguisher pulled for internal exam or hydrostatic test needs to be covered by a spare so the area isn't left unprotected. Hydrostatic testing itself is the next topic."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/hydrostatic-testing-schedules": {
    description:
      "The pressure vessel itself has a lifespan — hydrostatic testing pressure-checks the shell on a set schedule (5 years for CO₂ and water, 12 for dry chemical) so it can't rupture under pressure.",
    sections: [
      {
        heading: "Overview",
        body: [
          "An extinguisher is a pressure vessel, and the shell and hose can weaken over years of service. Hydrostatic testing pressure-tests the cylinder and hose to make sure they can safely hold their charge and won't rupture. OSHA 1910.157(f) requires it on a set schedule, done by trained people with the proper equipment.",
          "This is specialist work — not something done on the job site — but crews should understand why extinguishers periodically disappear for testing and come back with a new date stamped on them."
        ]
      },
      {
        heading: "Test intervals by type",
        body: [
          "The interval depends on the extinguisher type. The common ones:",
          {
            list: [
              "Water, foam (AFFF), and wet chemical — every 5 years.",
              "Carbon dioxide (CO₂) — every 5 years.",
              "Dry chemical, stored-pressure and cartridge — every 12 years.",
              "Halon and halocarbon (clean agent) — every 12 years.",
              "Dry powder (Class D) — every 12 years.",
              "CO₂ hose assemblies with a shutoff — every 5 years."
            ]
          },
          "The test date is recorded on the extinguisher, so you can read when it was last done and when it's due."
        ]
      },
      {
        heading: "Why it matters and who does it",
        body: [
          "A corroded or damaged shell can fail catastrophically under pressure — the test exists to catch that before it happens. Testing must be performed by trained persons with suitable equipment and facilities, following the procedure for that extinguisher type.",
          "Units that fail the test, or that show cupping, corrosion, dents, or damaged threads, are condemned and taken out of service — not repaired and returned."
        ]
      },
      {
        heading: "Coverage while units are out",
        body: [
          "When extinguishers go off for hydrostatic testing, the area they protected can't be left bare. Spare or loaner extinguishers of the right type and rating go up in their place so the required coverage and travel distances still hold.",
          "For crews, the practical takeaway is simple: don't assume an empty bracket is fine because \"it's just out for testing.\" Report a missing extinguisher so a replacement is confirmed to be covering that spot."
        ]
      }
    ]
  },
  "fire-extinguisher-safety/employee-training-and-the-extinguisher-program": {
    description:
      "If extinguishers are provided for workers to use, OSHA requires training on how and when to use them — at hire and at least once a year — so nobody's learning the tool during a fire.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Providing extinguishers isn't enough on its own. OSHA 1910.157(g) says that where an employer provides portable extinguishers for employees to use, it must also provide training so they know how to use them and understand the hazards of fighting even a small fire.",
          "Nobody should be reading the label for the first time with a fire in front of them. The training is what turns a bottle on the wall into something a worker can actually use safely — or correctly decide not to."
        ]
      },
      {
        heading: "What the training covers",
        body: [
          "Effective extinguisher training gives workers:",
          {
            list: [
              "The general principles of extinguisher use and the hazards of early-stage (incipient) firefighting.",
              "How to read the classes and ratings and match an extinguisher to the fire.",
              "The PASS technique and safe distance and positioning.",
              "The size-up decision — when to fight and when to evacuate.",
              "Where the extinguishers are on their site and how to raise the alarm."
            ]
          },
          "Hands-on practice with a real or simulated extinguisher makes the difference under stress far better than a talk alone."
        ]
      },
      {
        heading: "When training is required",
        body: [
          "Timing is set by the standard:",
          {
            list: [
              "Upon initial employment or assignment — before a worker would be expected to use an extinguisher.",
              "At least annually thereafter — a refresher every year.",
              "Employees specifically designated to use firefighting equipment under an emergency action plan get trained in that equipment on assignment and at least yearly."
            ]
          }
        ]
      },
      {
        heading: "The total-evacuation option",
        body: [
          "OSHA also allows a different approach: an employer with an emergency action plan and a fire prevention plan can require total evacuation and have no employees use extinguishers at all. In that case the full training requirement doesn't apply, because nobody's expected to fight a fire.",
          "What a site can't do is put extinguishers out for workers to use and skip the training. Either people are trained to use them, or the policy is get-out-and-let-them-burn — the program has to pick one and make it clear to every worker. This ties into the site's emergency action plan covered under Fire Safety."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/compressed-gas-cylinder-hazards": {
    description:
      "A compressed gas cylinder holds a huge amount of stored energy in a thin steel shell — snap the valve off and it becomes an unguided rocket, so every cylinder gets treated as full and dangerous.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The cylinders you see around a site — nitrogen, argon, CO₂, compressed air, and the fuel and oxygen for cutting — hold gas at very high pressure, often a couple thousand psi. That's an enormous amount of stored energy behind a valve and a thin steel wall. OSHA 1910.101 points to the Compressed Gas Association's handling rules, and they all come back to respecting that stored energy.",
          "The classic failure is a cylinder that falls and snaps its valve off. The escaping gas can drive the cylinder through a block wall like a torpedo. Treat every cylinder as full and pressurized, even the one you think is empty."
        ]
      },
      {
        heading: "The main hazards",
        body: [
          "Cylinders bring several distinct dangers at once:",
          {
            list: [
              "Stored pressure — a broken valve turns the cylinder into a projectile.",
              "The gas itself — inert gases (nitrogen, argon, CO₂) displace oxygen and can suffocate you in an enclosed space with no warning; fuel gases are flammable; oxygen makes everything burn harder.",
              "Weight — a full cylinder is heavy and top-heavy, easy to drop on a foot or a hand.",
              "Heat — a cylinder heated by fire or the sun can over-pressurize and rupture."
            ]
          },
          "The specific gas decides the specific danger, so know what's in the bottle before you handle it."
        ]
      },
      {
        heading: "Handling habits that keep you safe",
        body: [
          "Most cylinder injuries trace back to a few skipped basics:",
          {
            list: [
              "Keep the valve protection cap on whenever the cylinder isn't connected and in use — the cap protects the one vulnerable part.",
              "Keep cylinders secured and upright so they can't fall.",
              "Never drop, drag, or roll a cylinder on its side carelessly, and never strike an arc on one.",
              "Keep cylinders away from heat, sparks, slag, and electrical circuits.",
              "Only use cylinders labeled for their contents — never rely on color alone, and never use an unmarked cylinder."
            ]
          }
        ]
      },
      {
        heading: "Where welding cylinders fit",
        body: [
          "Oxygen and fuel-gas cylinders for cutting and welding follow these same rules plus extra ones — the 20-foot oxygen-to-fuel separation, the acetylene pressure limit, flashback protection, and regulator handling. Those specifics are covered under Welding and Hot Work.",
          "This category covers compressed gas cylinders generally and the air-powered tools that run off them. If you're on a torch, pair this with the welding cylinder topics; the fundamentals here apply either way."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/storing-compressed-gas-cylinders": {
    description:
      "Cylinders in storage stay upright, secured, and capped in a ventilated spot — with oxygen and oxidizers kept well away from fuel gases and anything that burns.",
    sections: [
      {
        heading: "Overview",
        body: [
          "How cylinders are stored decides how safe they are before anyone even picks one up. OSHA 1910.101 follows the Compressed Gas Association's storage practices, and they're mostly common sense applied consistently: keep cylinders upright, secured, capped, cool, ventilated, and with incompatible gases separated.",
          "A storage area is also a fire and asphyxiation concern, so where and how you stage cylinders matters as much as that you secured them."
        ]
      },
      {
        heading: "Basic storage rules",
        body: [
          "Every cylinder in storage should be:",
          {
            list: [
              "Upright and secured — chained, strapped, or racked so it can't tip or fall.",
              "Capped — valve protection cap in place on any cylinder not connected for use.",
              "Valve closed — even on \"empty\" cylinders, to keep contaminants and moisture out.",
              "In a dry, well-ventilated area, out of walkways, stairwells, and exits.",
              "Away from heat sources and kept below about 125°F — not against a heater or baking in direct sun.",
              "Separated into full and empty groups so crews grab the right one and rotate stock."
            ]
          }
        ]
      },
      {
        heading: "Separate oxygen and fuel gases",
        body: [
          "Oxidizers and flammables don't get stored together. Oxygen cylinders in storage are kept away from fuel-gas cylinders and combustible materials — especially oil and grease — by at least 20 feet, or separated by a noncombustible barrier at least 5 feet high with a half-hour fire rating.",
          "The reason is simple: an oxygen leak next to a fuel leak, or next to something that burns, is a fire waiting for an ignition source. Keep flammable gases away from oxidizers, and keep both away from ignition sources and corrosives."
        ]
      },
      {
        heading: "Ventilation and asphyxiation risk",
        body: [
          "Store cylinders where any leak can disperse. Inert gases like nitrogen, argon, and CO₂ have no smell and no color — a leak in a closed room quietly pushes the oxygen out, and someone walking in can pass out before they realize anything's wrong.",
          "That's why ventilation isn't optional for a cylinder store, and why you never stage cylinders in a confined or unventilated space. If you suspect a leak, ventilate the area, keep people out, and shut the valve if you can reach it safely."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/moving-and-transporting-cylinders": {
    description:
      "Most cylinder injuries happen while moving them — so caps go on, regulators come off, valves close, and the cylinder rides a proper cart chained in place, never dragged or lifted by the cap.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Cylinders get damaged and people get hurt more often during moving than during the actual work. A cylinder tipping off a cart, rolling onto a hand, or having its valve knocked in transit is the common story. Moving them the slow, boring, correct way prevents almost all of it.",
          "The rule of thumb: before a cylinder travels any distance, make it safe to travel — cap on, regulator off, valve closed."
        ]
      },
      {
        heading: "Before you move it",
        body: [
          "Prep the cylinder so nothing can go wrong in transit:",
          {
            list: [
              "Close the cylinder valve.",
              "Release the pressure from and remove the regulator.",
              "Put the valve protection cap back on — it protects the valve if the cylinder falls.",
              "Confirm it's the cylinder you mean to move and that it's labeled."
            ]
          }
        ]
      },
      {
        heading: "Moving it safely",
        body: [
          "Use the right equipment and never take shortcuts:",
          {
            list: [
              "Move cylinders on a hand truck or cart designed for them, with the cylinder chained or strapped in place.",
              "Never lift a cylinder by the valve or the cap, and never use them as a handle.",
              "Don't drag, slide, or roll cylinders on their side; if you must reposition a capped cylinder short distances, tilt and roll it on its bottom edge under control.",
              "Never carry a cylinder on your shoulder or drop it off a truck bed.",
              "Keep cylinders clear of vehicle traffic and falling-object zones while staged."
            ]
          }
        ]
      },
      {
        heading: "Lifting and vehicle transport",
        body: [
          "When cylinders have to be lifted or hauled, do it with proper equipment:",
          {
            list: [
              "Lift with a cradle, platform, or rack made for cylinders — never with a magnet or by a sling choked around the body.",
              "Secure cylinders upright in the vehicle so they can't roll or fall, valves closed and capped.",
              "Keep the load ventilated — don't transport cylinders in a sealed cab or trunk where a leak can build up.",
              "Follow DOT requirements for transporting cylinders on public roads."
            ]
          }
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/cylinder-valves-regulators-and-connections": {
    description:
      "The valve, regulator, and fittings are where leaks start — so you crack the valve to clear it, open it slowly standing to the side, check for leaks with soapy water, and never force a mismatched connection.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The business end of a cylinder is the valve, the regulator that steps the pressure down, and the fittings that connect it all to your equipment. It's where leaks, blowouts, and wrong-gas mix-ups happen. A few careful habits at connection time prevent most of them.",
          "Connections are deliberately designed so you can't easily hook the wrong gas to the wrong equipment — but only if you don't force or adapt them."
        ]
      },
      {
        heading: "Opening a cylinder valve",
        body: [
          "How you open the valve matters:",
          {
            list: [
              "Before attaching the regulator, crack the valve slightly to blow dirt out of the outlet, pointing it away from people and ignition sources.",
              "Stand to the side of the regulator when opening the valve — never in front of or behind the gauge face, in case it blows out.",
              "Open the valve slowly so the regulator doesn't get a sudden high-pressure surge.",
              "Open it all the way for valves designed to back-seat, or as the gas requires — and only use the valve wheel or the proper wrench, never a pipe or cheater bar."
            ]
          }
        ]
      },
      {
        heading: "Regulators and connections",
        body: [
          "Regulators are precision equipment and the fittings are safety features:",
          {
            list: [
              "Match the regulator to the gas and pressure — CGA connections differ by gas on purpose, so never file, adapt, or force a fitting to make it fit.",
              "Keep regulators, valves, and fittings clean and free of oil and grease — oil plus oxygen equals fire.",
              "Back the regulator's adjusting screw out before opening the cylinder valve, then set the working pressure.",
              "Use the right thread and don't overtighten to the point of galling; replace a regulator that creeps or won't hold pressure."
            ]
          }
        ]
      },
      {
        heading: "Leak checks and shutdown",
        body: [
          "Never hunt for a leak with a flame. Check connections with soapy water or an approved leak-detector solution — bubbles show you the leak. If you smell fuel gas or hear a hiss, shut the valve and fix the connection before going on.",
          "When you're done, close the cylinder valve first, then bleed the pressure from the lines and back the regulator screw out so nothing stays under load. A system left pressurized and unattended is how slow leaks and blowouts find their moment. Oxy-fuel torch specifics are covered under Welding and Hot Work."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/compressed-air-hazards-and-the-30-psi-cleaning-limit": {
    description:
      "Compressed air can inject through skin and kill — never blow it at yourself or others, and never use it to clean unless it's dropped below 30 psi with chip guarding and eye protection.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Compressed air seems harmless because it's \"just air,\" and that's exactly why it hurts people. The same line that runs your tools can drive dirt, metal, and air itself into and through skin, into eyes, and into the bloodstream. OSHA 1926.302(b) and 1910.242(b) set hard limits on how it's used.",
          "Two rules carry most of the safety here: never point compressed air at yourself or anyone else, and never use it for cleaning unless the pressure is reduced below 30 psi with the right guarding and PPE."
        ]
      },
      {
        heading: "Injection and blow-off injuries",
        body: [
          "Compressed air can cause injuries that look minor and turn deadly:",
          {
            list: [
              "Air forced against or into the skin can enter the bloodstream and cause an air embolism — a potentially fatal bubble in the circulation.",
              "A blast into the ear can rupture the eardrum; into the eye can rupture the globe; into the mouth can injure the lungs or intestines.",
              "Blowing dust and chips off clothing or skin drives particles into eyes and flesh.",
              "It only takes a low pressure to do serious harm — this is not an exaggeration of the risk."
            ]
          },
          "Never use compressed air to blow off your clothes, your skin, or your hair, and never aim it as a joke."
        ]
      },
      {
        heading: "The 30 psi cleaning rule",
        body: [
          "When compressed air is used for cleaning surfaces or equipment, OSHA requires that it be reduced to less than 30 psi — and even then, only with effective chip guarding and personal protective equipment.",
          "The 30 psi limit is measured at the nozzle when the outlet is dead-ended (blocked) — special safety nozzles are built to bleed off pressure so a blocked tip can't build back up to a dangerous level. Chip guarding (a guard or the nozzle design) keeps blown debris from flying back, and eye and face protection is required for the person doing it and anyone nearby."
        ]
      },
      {
        heading: "Safer cleaning practices",
        body: [
          "Compressed air is often the wrong tool for cleaning in the first place:",
          {
            list: [
              "Use a vacuum, brush, or sweep instead of blowing debris around whenever you can.",
              "If you must use air, use a regulated safety nozzle rated to stay under 30 psi dead-ended.",
              "Wear eye and face protection, and clear the area of other workers first.",
              "Never substitute compressed air for cleaning dust off yourself."
            ]
          }
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/pneumatic-tool-safety-basics": {
    description:
      "Air tools fire attachments and kick hard, so the tool gets clipped to the hose so it can't fly loose, percussion tools get retainers, and you never carry a tool by the hose or point it at anyone.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Pneumatic tools — chippers, drills, impact wrenches, riveters, grinders, and the rest — run on the stored energy of compressed air. That energy makes them powerful and makes them dangerous in specific ways: attachments can be ejected, tools can disconnect and whip, and the tool can kick or drive into you. OSHA 1926.302(b) sets the requirements.",
          "The tool, the connection, and the attachment all need to be secured so nothing becomes a projectile."
        ]
      },
      {
        heading: "Positive connections and retainers",
        body: [
          "Two OSHA requirements prevent the two worst failures:",
          {
            list: [
              "Pneumatic tools must be secured to the hose or whip by a positive means — a pin, clip, or lanyard — so the tool can't accidentally disconnect and fly off under pressure.",
              "Impact (percussion) tools — chipping hammers, riveters — must have safety clips or retainers installed and maintained so the chisel, die, or bit can't be expelled from the barrel.",
              "Check both before you pull the trigger; a missing retainer turns the attachment into a spear."
            ]
          }
        ]
      },
      {
        heading: "Handling air tools safely",
        body: [
          "The daily habits that keep air tools from hurting you:",
          {
            list: [
              "Never carry a tool by its hose, and never yank the hose to move or disconnect the tool.",
              "Point the tool at the work, never at yourself or anyone else, and keep your hands clear of the business end.",
              "Bleed the pressure and disconnect the tool before changing bits, clearing a jam, or setting it down for a while.",
              "Keep a firm grip and brace for the tool's kick and torque — impact and rotary tools can twist your wrist or pull you off balance.",
              "Don't exceed the tool's rated air pressure."
            ]
          }
        ]
      },
      {
        heading: "PPE and surroundings",
        body: [
          "Air tools throw debris and make noise. Eye and face protection is required against flying chips and particles, and hearing protection is usually needed — chippers, grinders, and impact tools are loud enough to damage hearing over a shift.",
          "Watch your footing and your hose routing, mind other workers in the line of fire, and keep the work secured so it can't move under the tool. Nail guns, grinders, and hoses each have their own specifics covered in the topics that follow."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/air-hoses-couplings-and-whip-checks": {
    description:
      "A charged air hose that breaks loose whips with enough force to break bones — so hoses are rated for the pressure, kept out of traffic, and fitted with whip checks so a failed coupling can't turn the hose into a weapon.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The hose is the part of an air system that's underfoot, run over, dragged, and forgotten — and it's under pressure the whole time. A hose or coupling that lets go doesn't just leak; it whips violently and blasts air and debris. OSHA 1926.302(b) requires hoses and connections built for the pressure and service they see.",
          "Two things keep hoses from hurting people: keeping them in good condition and out of harm's way, and fitting safety devices so a failure can't turn into a whipping hose."
        ]
      },
      {
        heading: "Whip checks and safety devices",
        body: [
          "A charged hose that breaks free at a coupling snaps back and forth with real force — enough to break a jaw or an arm. Guard against it:",
          {
            list: [
              "Install whip checks (safety cables) across every hose-to-hose and hose-to-tool coupling, so if the coupling fails the hose can't fly.",
              "Use excess-flow or safety devices at the air supply that cut or reduce flow if a hose downstream ruptures.",
              "Make sure couplings are the right type, fully engaged, and locked — not just push-fit and hoping.",
              "Depressurize before you connect or disconnect, so a coupling never lets go under full pressure in your hands."
            ]
          }
        ]
      },
      {
        heading: "Hose condition and routing",
        body: [
          "Most hose failures are visible before they happen if you look:",
          {
            list: [
              "Inspect hoses for cuts, cracks, soft spots, bulges, worn covers, and damaged fittings, and take bad hose out of service.",
              "Match the hose to the pressure and service — don't run a light hose at high pressure.",
              "Keep hoses out of walkways, off sharp edges and hot surfaces, and clear of traffic that can crush or cut them.",
              "Don't kink a hose to stop flow, and don't use tape to patch a leak — replace the section."
            ]
          }
        ]
      },
      {
        heading: "Trip hazards and housekeeping",
        body: [
          "Air hoses snaking across a work area are one of the most common trip hazards on any site. Route them overhead or along walls where you can, cover or ramp them where they cross a walkway, and reel them back in when the job's done.",
          "A hose left charged and coiled on the floor is both a trip hazard and a stored-energy hazard. Bleed it down and put it away — deliberate shutdown is part of the job, not an afterthought."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/nail-guns-and-pneumatic-fasteners": {
    description:
      "Pneumatic nailers fire fasteners fast enough to bury them in a stud — or a hand — so the trigger type, the muzzle safety, and keeping your hand out of the firing line are what keep nails in the wood.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Pneumatic nailers and staplers are among the most common — and most injuring — air tools on a site. They drive fasteners with enough force to sink a nail through framing, which is exactly the force that sends one through a hand, a foot, or into a bystander. OSHA 1926.302(b) and the NIOSH/OSHA nail gun guidance cover them.",
          "Most nail gun injuries come from unintended firing and double-fires — and both are strongly affected by the trigger type."
        ]
      },
      {
        heading: "Trigger types and the muzzle safety",
        body: [
          "Not all triggers are equally safe:",
          {
            list: [
              "Full sequential trigger — you must press the nose against the work first, then pull the trigger; each nail needs a fresh trigger pull. This is the safest and prevents double-fires.",
              "Contact (bump) trigger — holding the trigger down lets the gun fire every time the nose bumps a surface, which is fast but causes double-fires and unintended shots.",
              "OSHA requires a safety device on the muzzle of automatic-feed nailers operating over 100 psi at the tool, so the tool won't eject a fastener unless the muzzle is pressed against the work surface.",
              "Use the full sequential trigger for placement work and anywhere near hands, ladders, or tight spots."
            ]
          }
        ]
      },
      {
        heading: "Safe firing habits",
        body: [
          "How you hold and fire the gun keeps fasteners in the wood:",
          {
            list: [
              "Keep your free hand well away from the firing line — never within reach of where the nail comes out.",
              "Never bypass, wire down, or remove the muzzle safety or trigger safety.",
              "Don't rest a finger on the trigger while carrying the gun, and never carry it with the trigger squeezed.",
              "Don't fire toward yourself, other workers, or through material where a nail can pass and exit the far side.",
              "Shoot into solid backing — nails can blow through knots, edges, and thin stock and become projectiles."
            ]
          }
        ]
      },
      {
        heading: "Jams, disconnects, and PPE",
        body: [
          "Clearing and handling a nailer safely:",
          {
            list: [
              "Disconnect the air before clearing a jam, loading, adjusting depth, or handing the tool off — a jam-clearing that fires a nail is a classic injury.",
              "Treat every gun as loaded and pressurized until you've disconnected it.",
              "Wear eye protection and hearing protection — misfires and ricochets go for the eyes.",
              "Report a gun that double-fires or fires without the muzzle pressed, and take it out of service until it's fixed."
            ]
          }
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/pneumatic-grinders-and-abrasive-wheels": {
    description:
      "An abrasive wheel spun past its rated speed or run without a guard can shatter and throw fragments like shrapnel — so wheels get ring-tested, guarded, speed-matched, and their work rests set within 1/8 inch.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Air-powered grinders spin abrasive wheels at high speed, and a wheel that fails doesn't just crack — it bursts, throwing pieces at bullet speed. OSHA 1926.303 sets the rules for abrasive wheels and tools, and they're all about keeping the wheel intact and containing it if it isn't.",
          "The two big killers are running a wheel faster than it's rated and running it without a guard. Both are avoidable every single time."
        ]
      },
      {
        heading: "Wheel speed and the ring test",
        body: [
          "The wheel has to be right for the tool and undamaged:",
          {
            list: [
              "Never exceed the maximum operating speed (RPM) marked on the wheel — and confirm the grinder's speed doesn't exceed it. An air grinder can overspeed if the pressure is too high or the governor fails.",
              "Match the wheel to the tool and the job — the right diameter, arbor size, and type for the material.",
              "Ring-test a bonded wheel before mounting: tap it gently and listen for a clear ring; a dull thud means a cracked wheel — discard it.",
              "Inspect wheels for cracks, chips, and damage, and don't use one that's been dropped."
            ]
          }
        ]
      },
      {
        heading: "Guards and rests",
        body: [
          "Guarding is what stands between you and a burst wheel:",
          {
            list: [
              "Keep the wheel guard in place — it's designed to contain fragments and deflect them away from the operator. Never remove it.",
              "On bench and pedestal grinders, set the work rest to within 1/8 inch of the wheel so work can't jam between the rest and the wheel.",
              "Set the tongue guard (spark deflector) to within 1/4 inch of the wheel.",
              "Mount wheels with the correct blotters and flanges, and don't overtighten."
            ]
          }
        ]
      },
      {
        heading: "Operating safely",
        body: [
          "Running the grinder without becoming the target:",
          {
            list: [
              "Stand to the side of the wheel's plane when starting up, and let a new wheel run up to speed briefly before use.",
              "Grind on the face of the wheel as designed — don't grind on the side of a wheel not made for it.",
              "Don't jam the work into the wheel or overload it; let the wheel do the work.",
              "Wear a face shield over safety glasses, plus hearing protection — grinding throws sparks and metal and is loud."
            ]
          },
          "Bench-mounted grinding also comes up under hand and power tool safety; here the focus is the pneumatic tool and the wheel."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/air-compressors-and-receivers": {
    description:
      "The compressor and its air receiver are pressure vessels storing serious energy — they need working safety relief valves, correct pressure limits, and regular draining so they can't over-pressurize or hide a failing tank.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The compressor and the air receiver (the storage tank) are the source of everything downstream — and they're pressure vessels holding a lot of stored energy. A receiver that over-pressurizes or corrodes through can rupture with explosive force. The safety devices on them exist for exactly that reason.",
          "You don't have to be the mechanic to work safely around a compressor, but you should know what keeps it safe and what a problem looks like."
        ]
      },
      {
        heading: "Pressure protection",
        body: [
          "The receiver's defenses against over-pressure:",
          {
            list: [
              "A safety relief valve set at or below the maximum working pressure, so the tank vents before it can over-pressurize — never plug, adjust, or paint over it.",
              "A working pressure gauge showing tank pressure.",
              "Operating within the receiver's rated (ASME) working pressure — don't override the pressure switch to push more.",
              "Test the relief valve periodically per the manufacturer to confirm it lifts freely."
            ]
          }
        ]
      },
      {
        heading: "Moisture, drains, and corrosion",
        body: [
          "Compressed air carries water that collects in the tank:",
          {
            list: [
              "Drain the receiver regularly — daily on many units — so water doesn't accumulate and corrode the tank from the inside.",
              "Internal corrosion is the hidden killer of receivers; a tank that looks fine outside can be thinning from within.",
              "Keep the tank on its schedule of inspection, and take a receiver with dents, heavy rust, or a weeping seam out of service.",
              "Drain moisture from lines and filters too, so it doesn't reach the tools."
            ]
          }
        ]
      },
      {
        heading: "Around the compressor",
        body: [
          "Working safely near a running compressor:",
          {
            list: [
              "Keep guards over belts, pulleys, and couplings in place — rotating parts catch gloves and sleeves.",
              "Give an engine-driven compressor ventilation for its exhaust; carbon monoxide indoors is deadly.",
              "Watch the noise — compressors are loud enough to need hearing protection nearby.",
              "Relieve system pressure before servicing the compressor, receiver, or the lines coming off it."
            ]
          }
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/inspecting-and-maintaining-air-tools-and-hoses": {
    description:
      "A quick pre-use check of the tool, the hose, the couplings, and the safety devices catches the failures before they happen — and depressurizing before any service keeps the stored energy from biting you.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Air systems fail at predictable places — worn hoses, loose couplings, missing retainers, tired safety devices. Almost all of it shows up in a quick look before use. A minute of inspection at the start of the job is what keeps a hose from bursting or an attachment from flying loose mid-task.",
          "And the golden rule for any maintenance on an air system: relieve the pressure first. Stored air doesn't care that the tool is \"off.\""
        ]
      },
      {
        heading: "Pre-use inspection",
        body: [
          "Before you connect and run an air tool, check:",
          {
            list: [
              "The hose — no cuts, cracks, bulges, or soft spots; fittings tight and undamaged.",
              "The couplings — right type, fully engaged, and whip checks in place.",
              "The tool's positive connection to the hose and, on percussion tools, the safety clip or retainer.",
              "The trigger and any muzzle or safety device — working and not bypassed.",
              "The tool itself — no cracks or damage, guards in place on grinders, correct attachment fitted."
            ]
          }
        ]
      },
      {
        heading: "Depressurize before service",
        body: [
          "Servicing an air system safely comes down to killing the stored energy first:",
          {
            list: [
              "Shut off the air and bleed the line before disconnecting, changing bits or wheels, clearing jams, or opening the tool.",
              "Disconnect the tool from the air before you work on it — don't rely on the trigger being off.",
              "Drain the receiver and relieve system pressure before working on the compressor or fixed lines.",
              "Never look into or reach into a tool that's still connected to air."
            ]
          }
        ]
      },
      {
        heading: "Maintenance and taking tools out of service",
        body: [
          "Keep the tools running right and pull the ones that aren't:",
          {
            list: [
              "Lubricate and maintain air tools per the manufacturer so they run at the intended speed and force.",
              "Tag and remove from service any tool that leaks, runs rough, overspeeds, double-fires, or has a defeated safety.",
              "Replace damaged hoses and worn couplings rather than patching them.",
              "Report defects rather than working around them — a worked-around defect is the next incident."
            ]
          }
        ]
      }
    ]
  },
  "welding-and-hot-work/resistance-welding-safety": {
    description:
      "Spot, seam, and projection welders throw no arc — but the crushing force between the electrodes, the huge current, and the molten metal they expel put pinch points, shock, and burns front and center.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Resistance welding — spot, seam, and projection — clamps the metal between two electrodes and pushes a high current through it, so the joint heats and fuses under pressure. There's no arc, but that doesn't make it safe: the electrodes come together with real force, the current is very high, and molten metal can spit out of the weld. OSHA 1910.255 covers how these machines are built and guarded.",
          "The hazard that hurts people most on these machines is the pinch point. The electrodes or dies close with enough force to crush a finger, so keeping your hands clear of the weld point is the whole game."
        ]
      },
      {
        heading: "Pinch points and controls",
        body: [
          "The point of operation has to be set up so you can't get a hand into it while it cycles:",
          {
            list: [
              "Use the machine guarding and point-of-operation devices the machine came with — don't remove or defeat them.",
              "Two-hand controls keep both your hands on the buttons and out of the weld point during the cycle; use them where they're fitted.",
              "Interlocks and light curtains stop the cycle if the guarded area is broken — treat a bypassed interlock as a machine that's out of service.",
              "Foot switches must have a guard over the pedal so a dropped tool or a bumped foot can't fire the machine.",
              "Keep your hands clear of the electrodes and dies whenever the machine can cycle."
            ]
          }
        ]
      },
      {
        heading: "Current, expelled metal, and burns",
        body: [
          "The current running through a resistance weld is high, and the weld can expel molten metal — weld splatter — as the joint forms. That spatter burns skin and can reach your eyes even though there's no arc, so eye protection against flying and expelled metal is required on these machines. Wear it, and keep your face out of the line of the weld.",
          "The electrodes, the tips, and the freshly welded part are hot. Treat the work as hot metal after every cycle, and let tips cool or use the proper tools before you handle them."
        ]
      },
      {
        heading: "Electrical and machine safety",
        body: [
          "These are powered machines carrying high current, so the electrical side gets the same respect as any arc equipment. The frame must be grounded, and controls and cables kept in good condition. Portable spot welders and their control panels need to be supported and handled so they can't fall or pull on their cabling.",
          "Lock out and de-energize the machine before you reach into the point of operation to clear a stuck part, change tips, or clean the electrodes — not while it's live with the controls one bump away from a cycle."
        ]
      }
    ]
  },
  "welding-and-hot-work/plasma-arc-cutting-safety": {
    description:
      "Plasma cutting drives a super-hot, high-voltage jet through metal — brighter and louder than most arc work, with heavy fume and a high open-circuit voltage that demand a darker lens, strong ventilation, and hearing protection.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Plasma arc cutting forces gas through a constricted, high-intensity arc to blast a jet of ionized gas — plasma — through metal. It cuts fast and clean, but it turns up every hazard you know from arc work: more intense light, more noise, more fume, and a high open-circuit voltage. Treat it as a bigger version of the arc hazards, not a lighter one.",
          "The arc is hotter and brighter than most stick or MIG work, so it throws more ultraviolet and infrared radiation. The eye and skin protection you'd use for ordinary arc welding isn't enough here."
        ]
      },
      {
        heading: "Eyes, skin, and the right shade",
        body: [
          "Because the plasma arc is so intense, it needs a darker filter shade than similar-amperage stick welding — step up the number and check it against a filter-shade guide for the amperage you're running. A lens that's fine for arc welding will leave you underprotected on a plasma torch.",
          "Cover your skin the same way you would for heavy arc work. The extra ultraviolet burns exposed skin like a fast sunburn, so keep sleeves down, neck covered, and no gaps at the cuffs and collar. Filter-shade selection and welder PPE are covered in the radiation-protection topic — the point here is that plasma sits at the high end of it."
        ]
      },
      {
        heading: "Noise, fume, and the cutting jet",
        body: [
          "Plasma cutting is loud — loud enough to need hearing protection, especially on thicker plate and in enclosed areas. Wear it.",
          "It also produces heavy fume and gas as it vaporizes metal and coatings, so it needs strong ventilation or local exhaust to keep the plume out of your breathing zone. Water tables — cutting over or under water — knock down fume, noise, and glare and are used on many fixed setups; where you have one, use it. Welding fume and ventilation are covered in their own topic; plasma just makes more of it.",
          "The plasma jet cuts flesh as easily as steel. Keep your hands and body out of the cutting path and clear of the torch tip, and never test or clear the torch aimed at yourself or anyone else."
        ]
      },
      {
        heading: "High open-circuit voltage",
        body: [
          "Plasma units run a high open-circuit (no-load) voltage to start and hold the arc — higher than many welding machines — so the shock hazard is real even before you cut. Keep the torch, leads, and connections in good condition, keep yourself and the equipment dry, and don't touch the torch tip or electrode with the power on. Electric-shock precautions for welding apply here in full."
        ]
      }
    ]
  },
  "welding-and-hot-work/brazing-and-soldering-safety": {
    description:
      "Brazing and soldering join metal below its melting point with a filler and flux — lower heat than welding, but the flux fumes can be toxic, cadmium filler is a real danger, and it's still hot work.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Brazing and soldering join metal without melting the base metal. You heat the joint and flow in a filler that melts below the base-metal melting point — higher-temperature filler for brazing, lower for soldering — and a flux cleans the surface so the filler bonds. Less heat than welding, but the hazards don't go away; they change.",
          "The one that catches people off guard is the flux. The fumes from flux and from some fillers are toxic, so ventilation matters even though there's no arc and no welding-level heat."
        ]
      },
      {
        heading: "Flux fumes and cadmium",
        body: [
          "Fluxes and filler metals are where the real toxic exposure lives on these jobs:",
          {
            list: [
              "Fluoride-bearing fluxes give off fumes that irritate the eyes, nose, and lungs — you need ventilation to carry them away from your face.",
              "Cadmium-bearing filler metal releases cadmium fume when heated, and cadmium is highly toxic — it can cause severe lung damage and worse from a short overexposure, sometimes with no strong warning at the time.",
              "Where you can, use a cadmium-free filler. When cadmium-bearing filler must be used, it takes strong local exhaust ventilation, and the fume is not something to breathe through an ordinary dust mask."
            ]
          },
          "Detailed fume hazards and ventilation are covered in the welding-fumes topic; the takeaway for brazing and soldering is that the flux and filler, not the heat, are what get into your lungs."
        ]
      },
      {
        heading: "Burns and hot equipment",
        body: [
          "The torch, the filler, the flux, and the joint are all hot, and molten filler and hot flux can spatter. Wear eye protection against splatter and hot particles, keep skin covered, and use tongs or pliers on hot work — don't grab a joint you just brazed. Soldering irons and torches burn on contact, so set them in a stand, never on the bench, and keep the flame and tip away from hoses, cords, and cylinders.",
          "Oxy-fuel torches and gas cylinders used for brazing carry their own handling rules — see the oxygen-fuel and cylinder topics for how to set them up, light them, and shut them down."
        ]
      },
      {
        heading: "Still hot work",
        body: [
          "Lower temperature doesn't take brazing and soldering out of the hot-work category. There's an open flame or a hot iron and the same chance to ignite whatever's nearby, so the fire-prevention rules still apply: clear or protect combustibles, and where a hot-work permit and fire watch are required, they're required here too. Handle it as hot work, because it is."
        ]
      }
    ]
  },
  "welding-and-hot-work/preventing-electric-shock-while-welding": {
    description:
      "The same welding circuit that melts steel can stop your heart — and the open-circuit voltage is live before you strike an arc, so staying dry, insulated, and off the live parts is what keeps a shock from becoming a fatality.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Electric shock is one of the most serious and immediate dangers in arc welding. The welding circuit carries enough current to injure or kill, and the open-circuit (no-load) voltage is present on the electrode and holder before you ever strike an arc. You don't need a fault or a broken machine for this — the voltage that runs the weld is the same voltage that can run through you.",
          "It gets worse anywhere you're damp or cramped. Sweat, wet clothing, rain, and standing on wet steel all lower your body's resistance, and tight or kneeling positions in confined spaces put more of you in contact with grounded metal."
        ]
      },
      {
        heading: "Stay dry and insulated",
        body: [
          "The core of shock prevention is keeping yourself electrically separated from both the electrode and the work or ground:",
          {
            list: [
              "Keep yourself, your clothing, and your gloves dry — change out soaked gloves and don't weld in wet clothes.",
              "Insulate yourself from the work and from ground with dry insulation: a rubber mat, a dry board, or dry insulating material under you and behind you.",
              "Don't let your bare skin or a wet glove touch the electrode, the metal parts of the holder, or the work while the circuit is live.",
              "Wear dry, hole-free welding gloves and keep your body off the grounded metal you're working against — especially in tight, kneeling, or lying-down positions."
            ]
          }
        ]
      },
      {
        heading: "Keep the equipment sound",
        body: [
          "Worn insulation is how the voltage finds you:",
          {
            list: [
              "Inspect the electrode holder and cables each shift for cracked or worn insulation, exposed conductor, and loose connections; take damaged gear out of service.",
              "Don't drape welding cable over your shoulder or wrap it around your body — a break in the insulation against your skin puts current across you.",
              "Keep connections tight and cables out of water and walkways.",
              "Repair cable only with proper insulated splices, not bare taped joints."
            ]
          },
          "Machine grounding and the work-lead connection are part of this too — they're covered in the arc welding topic, and getting them right keeps welding current on the path you intend instead of through you."
        ]
      },
      {
        heading: "When you change electrodes or step away",
        body: [
          "The routine moments are where shocks happen. Don't change a stub electrode with bare or wet hands — the holder is live. When you set the holder down, hang it where it can't touch a grounded surface, a person, or a conductive object, and never lay a live holder on the steel you're welding. When you stop for any length of time or leave the work, de-energize the equipment so nothing you or the next person touches is carrying voltage."
        ]
      }
    ]
  },
  "working-at-heights/positioning-and-travel-restraint-systems": {
    description:
      "Two systems that keep you from falling in the first place — one stops you before the edge, one holds you in place on a wall — and neither is a substitute for fall arrest on its own.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Fall arrest catches you after you've fallen. Restraint and positioning are different — they're built so you don't fall at all. Travel restraint keeps you from ever reaching the edge. A positioning device holds you against a vertical surface so you can work with both hands. Know which one you're rigged for, because they're set up differently and used for different work."
        ]
      },
      {
        heading: "Travel restraint keeps you back from the edge",
        body: [
          "Restraint means your anchor and lanyard are short enough that you physically can't reach the fall edge. If you can't get to the edge, you can't go over it.",
          {
            list: [
              "Rig the anchor and lanyard length so your reach stops short of the edge — measure it, don't eyeball it.",
              "It only works on surfaces where you're not going to slide, like a low-slope roof — not for arresting a fall.",
              "The moment the work needs you at the edge, restraint isn't enough — switch to a fall arrest setup with a rated anchor."
            ]
          }
        ]
      },
      {
        heading: "Positioning device systems",
        body: [
          "A positioning device system holds you in place on a vertical surface — rebar, a wall, a form — so you can lean back into the harness and work hands-free. Under 1926.502(e), it has to be rigged so you can't free fall more than 2 feet.",
          {
            list: [
              "Anchor positioning gear to a point rated for at least twice the potential impact load, or 3,000 pounds — whichever is greater.",
              "It supports you at the work position; it does not stop a real fall.",
              "You still wear a back-up personal fall arrest system in case the positioning gear or the surface lets go."
            ]
          }
        ]
      },
      {
        heading: "Restraint vs. arrest — don't mix them up",
        body: [
          "Restraint prevents you from reaching a fall hazard. Arrest stops a fall already in progress. A restraint lanyard rigged long enough to let you reach the edge stops being restraint — now it's an arrest situation, and it has to meet arrest requirements for anchor strength and free-fall distance. If you're not certain which you have, treat the edge as live and rig for arrest."
        ]
      }
    ]
  },
  "working-at-heights/safety-net-systems": {
    description:
      "When you can't rig guardrails or personal fall arrest, a properly installed safety net catches the fall — but only if it's hung close, tested, and kept clear.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Safety nets under 1926.502(c) are for the jobs where guardrails or personal fall arrest aren't practical — some bridge and structural steel work, for example. A net catches you after you fall, so how it's hung and maintained is everything. A net rigged wrong is worse than no net, because people trust it."
        ]
      },
      {
        heading: "Hang it close and hang it wide",
        body: [
          {
            list: [
              "Install the net as close as practicable under the work surface, and never more than 30 feet below it.",
              "Extend the net outward from the edge of the work — the farther below the surface it hangs, the farther out it has to reach.",
              "Keep enough clearance underneath so a falling worker doesn't bottom out on the surface or structure below.",
              "Mesh openings are limited in size, and the border rope has to meet a minimum breaking strength — use a net that's rated and labeled for the job."
            ]
          }
        ]
      },
      {
        heading: "Drop-test and certify it",
        body: [
          "A net has to be proven before anyone works over it. The standard requires a drop test — a 400-pound bag dropped into the net from the height workers could fall — after it's installed and after any major repair or relocation. If a drop test isn't feasible, a competent person certifies the installation in writing. No test or certification means no working over it."
        ]
      },
      {
        heading: "Inspect it and keep it clear",
        body: [
          {
            list: [
              "Inspect the net at least weekly, and after anything that could damage it, for wear, tears, and deterioration.",
              "Remove tools, scraps, and debris from the net as soon as practical, and at least before the next shift — that stuff becomes shrapnel in a fall.",
              "Pull worn or damaged nets and defective components out of service.",
              "Check the connections between panels and to the supports — a gap or a failed hookup is a hole you'll fall through."
            ]
          }
        ]
      }
    ]
  },
  "working-at-heights/warning-lines-and-controlled-access-zones": {
    description:
      "On low-slope roofs and at leading edges, warning lines and controlled access zones keep workers away from the fall hazard when conventional protection isn't in place.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Sometimes guardrails and personal fall arrest aren't feasible for the work. Warning line systems and controlled access zones are the fallback — they don't catch a fall, they keep people back from where a fall can happen. They only work if everyone respects the line, so the crew has to know exactly what each line means."
        ]
      },
      {
        heading: "Warning line systems on low-slope roofs",
        body: [
          "Under 1926.502(f), a warning line marks off the area near a roof edge so workers stay clear of it during roofing work on low-slope roofs.",
          {
            list: [
              "Set the line back at least 6 feet from the edge; where mechanical equipment is in use, set it back farther along the direction of equipment travel.",
              "The flagged line has to stand roughly 34 to 39 inches above the walking surface — high enough to see and not step over without noticing.",
              "Flag the line at short intervals so it's clearly visible, and rig it and its stanchions to resist being knocked over.",
              "Between the warning line and the edge, only workers actively doing the roofing work belong — and they need additional protection like a safety monitor."
            ]
          }
        ]
      },
      {
        heading: "Controlled access zones",
        body: [
          "A controlled access zone under 1926.502(g) is an area where leading-edge or overhand bricklaying work goes on and access is limited to authorized workers only.",
          {
            list: [
              "Mark the zone with a control line or other means that clearly defines where it is.",
              "Only workers authorized for that task cross into the zone — everyone else stays out.",
              "Set the control line the required distance back from the edge for the type of work, and keep it flagged and visible."
            ]
          }
        ]
      },
      {
        heading: "Safety monitors are a limited option",
        body: [
          "In some low-slope roofing work, a competent person acts as a safety monitor — watching workers and warning them when they get too close to the edge. It's a last resort where nothing else is feasible, not a shortcut. The monitor does only that job, stays within sight and earshot of the crew, and can't be pulled onto other tasks. A monitor watching a phone instead of the crew is no protection at all."
        ]
      }
    ]
  },
  "working-at-heights/skylights-and-fragile-roof-surfaces": {
    description:
      "Skylights, smoke domes, and worn roof panels look like solid roof and won't hold your weight — treat every one as an open hole.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The deadly thing about a skylight or a fragile roof panel is that it looks walkable. You can't tell by looking whether a panel will hold you, and a skylight dome reads like part of the roof until you kneel or trip onto it. Workers fall straight through and land on the floor below. Every skylight and every questionable surface gets treated as a hole you can fall through."
        ]
      },
      {
        heading: "Know what won't hold you",
        body: [
          {
            list: [
              "Skylights, smoke domes, and roof windows — the dome or glazing carries no live load.",
              "Old fiber-cement and cement-sheet roofing, and corroded or weathered metal panels, that crack or give way underfoot.",
              "Translucent panels and patched-over holes that blend into the surrounding roof.",
              "Any surface you're not certain is structural — if you don't know it'll hold you, assume it won't."
            ]
          }
        ]
      },
      {
        heading: "Protect it before anyone works near it",
        body: [
          "A skylight is a hole with a dome over it — protect it the same way you protect any floor or roof hole (see Floor Holes and Wall Openings).",
          {
            list: [
              "Cover it with a screen or guard, install a guardrail around it, or protect workers with personal fall arrest.",
              "A cover has to support at least twice the maximum load that could cross it, be secured against shifting, and be marked so everyone sees it's a cover.",
              "Walk fragile-roof areas only on rated crawling boards, roof ladders, or planks that span to solid supports — never directly on the panels."
            ]
          }
        ]
      },
      {
        heading: "Never trust it with your weight",
        body: [
          "Don't step, kneel, sit, or set your weight on a skylight or an unmarked panel — not to reach something, not for a second. Don't stack material on one. If a skylight or fragile area isn't guarded or covered, stay off it and get it protected before the work goes on."
        ]
      }
    ]
  },
  "electrical-safety/arc-flash-and-shock-approach-boundaries": {
    description:
      "The boundary system around live gear — the two shock approach boundaries, the arc-flash boundary, and how to read them off the equipment label.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Approach boundaries are invisible lines drawn around exposed energized parts. There are two kinds of hazard they protect against — shock and arc flash — so there are two kinds of boundaries, and they don't line up. Cross one without the training and protection it calls for and you're in reach of something that can kill you.",
          "The distances aren't guesses. They come from NFPA 70E and, for arc flash, from the incident-energy analysis printed on the equipment's arc-flash label. Your job is to know which boundary you're crossing and what it demands before you step over it."
        ]
      },
      {
        heading: "The two shock boundaries",
        body: [
          "Shock boundaries are about contact — how close you can get to an exposed energized conductor before an accidental reach or a slip puts you into it. NFPA 70E defines two of them:",
          {
            list: [
              "Limited approach boundary — the outer line. No unqualified person crosses it unless a qualified person escorts them and they're protected. It's the 'stay back' line for everyone who isn't trained on that equipment.",
              "Restricted approach boundary — the inner line, close to the live part. Only a qualified worker gets this close, and only with rated insulating PPE and a plan for the increased risk of contact."
            ]
          },
          "Both distances grow with voltage — the higher the system voltage, the farther out those lines sit. If you're not qualified for the equipment, you stay outside the limited approach boundary, full stop. The awareness-level breakdown of shock, arc flash, and arc blast is covered separately; this is about the lines themselves."
        ]
      },
      {
        heading: "The arc-flash boundary",
        body: [
          "The arc-flash boundary is a different measurement for a different hazard. It's the distance at which the heat from an arc flash would deliver 1.2 cal/cm² of incident energy to your skin — the threshold for the onset of a second-degree burn. Anyone inside that boundary needs arc-rated PPE rated for the energy at that spot.",
          "This boundary has nothing to do with touching a conductor — an arc flash can burn you standing several feet back. It can sit inside or outside the shock boundaries depending on the equipment, which is exactly why you can't treat one line as covering the other."
        ]
      },
      {
        heading: "Reading the label",
        body: [
          "On gear that's had an incident-energy analysis, the numbers you need are on the arc-flash label. Before you approach, read it:",
          {
            list: [
              "The arc-flash boundary distance.",
              "The incident energy at the working distance, or the required PPE category.",
              "The rated PPE and arc rating (in cal/cm²) needed inside the boundary.",
              "The shock hazard — system voltage and the limited and restricted approach boundaries."
            ]
          },
          "No label, or a label that doesn't match the equipment, means the analysis isn't done — treat that as a stop and get a qualified person before anyone approaches. NFPA 70E governs these boundaries; OSHA's approach and protection requirements are in 29 CFR 1910.333 and 1910.335."
        ]
      }
    ]
  },
  "electrical-safety/energized-electrical-work-permits": {
    description:
      "When live work is genuinely justified — the narrow exceptions that allow it and the energized electrical work permit that has to back it up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The default for electrical work is dead equipment. You de-energize, lock out, and prove zero energy before you touch anything — that's covered in the lockout/tagout topic, and it's the rule, not the suggestion.",
          "Working on it live is the exception, and NFPA 70E puts a gate in front of that exception: the energized electrical work permit, or EEWP. It's the paperwork that forces someone to justify the live work before it happens, instead of after someone gets hurt."
        ]
      },
      {
        heading: "When live work is justified",
        body: [
          "Energized work is only justified in two narrow cases:",
          {
            list: [
              "De-energizing would introduce additional or increased hazards — for example, shutting down life-support, emergency ventilation, or alarm systems.",
              "De-energizing is infeasible because of the equipment design or an operational limitation — such as certain testing, troubleshooting, or diagnostics that can only be done with the circuit live."
            ]
          },
          "That's the whole list. 'It's faster,' 'production doesn't want the downtime,' and 'it's a hassle to lock out' are not justifications — inconvenience never makes live work legal. If the reason you're not de-energizing is any version of convenience, the answer is to de-energize."
        ]
      },
      {
        heading: "The permit",
        body: [
          "When live work clears that bar and the task falls above the point where a permit is required, an EEWP has to be completed and approved before the work starts. It documents the job so nobody's improvising at the panel:",
          {
            list: [
              "A description of the work and the equipment, and why it can't be done de-energized.",
              "The shock and arc-flash boundaries for the equipment.",
              "The specific arc-rated PPE and insulated tools required.",
              "The safe-work practices and the means to restrict access to the area.",
              "The evidence of a job briefing, and the signatures of the qualified worker and the authorizing person."
            ]
          },
          "Some tasks — like certain testing and troubleshooting within the normal operating limits — don't require a written permit but still require the qualified worker, the PPE, and the boundaries. The permit is what documents that the exception was real and the protections were in place."
        ]
      },
      {
        heading: "No permit, no work",
        body: [
          "The permit isn't a formality to backfill later — it's the gate. If the justification doesn't hold, or the boundaries and PPE aren't defined, or the approvals aren't signed, the job waits until the equipment can be de-energized and locked out.",
          "NFPA 70E sets the permit requirement; OSHA's expectation that live parts be de-energized before work, with narrow exceptions, is in 29 CFR 1910.333. The paperwork exists so that a decision that can kill someone gets made deliberately, by the right people, and not by whoever's holding the screwdriver."
        ]
      }
    ]
  },
  "electrical-safety/stored-energy-capacitors-batteries-and-discharge": {
    description:
      "The energy that stays behind after the power's off — charged capacitors, battery and UPS systems with no upstream switch, and stored mechanical energy.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Opening the disconnect kills the incoming power, but it doesn't always kill the energy already inside the equipment. Some gear holds a charge after it's disconnected, and some of it has no upstream switch to open at all. That leftover energy has killed people who thought the box was dead.",
          "This is why lockout/tagout includes a step for releasing or restraining stored energy, and why the only proof a circuit is dead is a test. Isolating the source is the start of the job, not the end of it."
        ]
      },
      {
        heading: "Capacitors hold a charge",
        body: [
          "A capacitor's whole job is to store electrical energy, and it doesn't give that up when you open the disconnect. VFDs, motor drives, power supplies, large motors with power-factor correction, and similar gear can hold a lethal charge on their capacitors for a while after disconnection.",
          "Before you work on that equipment, the stored charge has to be bled off — capacitors discharged and grounded using the manufacturer's procedure and the right rated tools, never a shorting screwdriver. Then you verify with a meter that it's actually at zero, the same live-dead-live way you'd prove any circuit dead. Assume a disconnected capacitor is still charged until your own test says otherwise."
        ]
      },
      {
        heading: "Batteries and UPS have no off switch",
        body: [
          "Battery banks, UPS systems, and DC systems are their own energy source — there's no upstream breaker that de-energizes them, because they are the power. The stored energy sits there whether the building has power or not, and it carries hazards beyond shock:",
          {
            list: [
              "Enormous short-circuit and arc-flash energy — a dropped wrench across the terminals can vaporize and arc.",
              "Chemical burns from the electrolyte in the cells.",
              "Hydrogen gas that can build up and explode where charging batteries aren't ventilated."
            ]
          },
          "Work on these systems takes insulated tools, rated PPE, terminal covers, and the manufacturer's isolation procedure — you isolate sections, you don't just 'turn it off.' Treat the bank as energized the entire time you're in it."
        ]
      },
      {
        heading: "Mechanical stored energy, and verifying zero",
        body: [
          "Not all stored energy is electrical. Springs, charged breaker mechanisms, elevated or suspended parts, and pressurized hydraulic or pneumatic systems tied to the equipment all hold energy that can release when you open something up. Racking or working on a breaker with a charged closing spring is a classic surprise.",
          "The rule ties back to LOTO: block, restrain, bleed down, or release every stored-energy source before you rely on the equipment being safe, then verify. The final check is always a test — capacitors discharged, DC sources isolated, mechanical energy neutralized, and a meter confirming zero. OSHA's control-of-energy requirements, including stored and residual energy, are in 29 CFR 1910.147."
        ]
      }
    ]
  },
  "forklift-safety/tip-over-survival-and-seat-belts": {
    description:
      "When a sit-down forklift goes over, jumping out is what gets operators killed — stay in the seat, hold on, and let the overhead guard and seat belt do their job.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A sit-down counterbalanced forklift can tip sideways in a fast turn, or forward over the front wheels with a heavy or raised load. Once it starts going, it's over faster than you can react. What decides whether you walk away isn't reflexes — it's what you already decided to do before it happened.",
          "The single biggest killer in a forklift tip-over is being crushed by the overhead guard or mast after jumping out. The truck lands on the operator who tried to escape. Stay in the seat and the protective structure keeps a survival space around you."
        ]
      },
      {
        heading: "If it goes over, don't jump",
        body: [
          "Every operator has to have this wired in before it happens, because there's no time to think it through mid-tip. If the truck starts to tip:",
          {
            list: [
              "Stay in the seat — do not try to jump clear.",
              "Grip the steering wheel firmly with both hands.",
              "Brace your feet against the floor.",
              "Lean your upper body away from the direction of the fall.",
              "Hold on until the truck comes to rest."
            ]
          },
          "Leaning away from the fall keeps your head and torso inside the overhead guard as the truck comes down. Operators who jump land in the path of the falling mast or guard and get pinned under thousands of pounds. Riding it out is counter-intuitive, but it's what keeps you alive."
        ]
      },
      {
        heading: "The seat belt keeps you inside the guard",
        body: [
          "The operator restraint — the seat belt — isn't there for fender-benders. Its job is to keep you in the seat and inside the protective zone during a tip-over, so you can't be thrown out into the crush zone or slide out an open side.",
          "Wear it every time you're in the seat, and keep it buckled the whole shift, not just for the long runs. If the belt is torn, frayed, or the buckle won't latch, the truck comes out of service until it's fixed. A truck with a disabled or missing restraint isn't ready to work."
        ]
      },
      {
        heading: "Why this is separate from staying stable",
        body: [
          "Keeping the combined center of gravity inside the stability triangle — carrying loads low, slowing before turns, never turning with the load raised — is how you keep from tipping in the first place. That's the physics, and it's covered on its own.",
          "This is the other half: what to do in the seconds when prevention has already failed and the truck is going over anyway. Good operators know both. You drive to stay upright, and you keep the belt on and stay put in case you don't."
        ]
      }
    ]
  },
  "forklift-safety/parking-and-leaving-a-truck-unattended": {
    description:
      "How you park a forklift matters as much as how you drive it — lowered forks, neutral, power off, brake set, so nobody gets struck or crushed by a truck sitting still.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A parked forklift can still hurt someone. Forks left up become a head-level hazard, a truck left in gear can creep, and one left on a slope without the wheels blocked can roll. OSHA 1910.178(m) spells out how to leave a truck so it stays put and stays safe.",
          "The rules change slightly depending on how far you're stepping away, so it's worth knowing exactly when a truck counts as 'unattended.'"
        ]
      },
      {
        heading: "When a truck is \"unattended\"",
        body: [
          "OSHA draws a clear line. A powered industrial truck is unattended when the operator is 25 feet or more away from it, or when the truck is out of the operator's view — with the engine still running.",
          "Getting off the truck but staying within 25 feet and keeping it in sight is 'dismounted,' not unattended. Either way you don't get to leave the forks up or the controls live — the requirements just get stricter the moment you cross that 25-foot line or lose sight of it."
        ]
      },
      {
        heading: "Leaving a truck unattended",
        body: [
          "Before you walk away 25 feet or more, or anywhere you can't see the truck:",
          {
            list: [
              "Fully lower the forks or load-engaging means flat to the floor.",
              "Put the controls in neutral.",
              "Shut off the power.",
              "Set the parking brake."
            ]
          },
          "Flat on the floor means nobody walks into a raised tine, and a truck that's off, in neutral, and braked can't creep or be bumped into motion."
        ]
      },
      {
        heading: "Dismounting nearby, and parking on a grade",
        body: [
          "Even when you're staying within 25 feet and keeping the truck in view, still lower the load-engaging means fully to the floor, put the controls in neutral, and set the brake. Lowered forks and a set brake are non-negotiable no matter how close you are.",
          "If you park on an incline, block the wheels in addition to setting the brake. And never leave a truck with the forks raised — no matter how quick you think you'll be back. Park in a designated area, clear of aisles, exits, fire equipment, and pedestrian paths."
        ]
      }
    ]
  },
  "forklift-safety/elevating-personnel-on-a-forklift": {
    description:
      "If you have to lift a worker on a forklift, it's only ever on a secured, guarded work platform with the operator at the controls — never on the forks, never on a pallet.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Sometimes the only way to reach a high spot is to send a worker up on the forklift. That's allowed — but only one way. The worker rides on a securely attached, purpose-built work platform (a safety cage), and never on the bare forks or a pallet balanced on the tines.",
          "Riding the forks is how people fall. A proper platform, secured to the truck and guarded on all sides, is the only acceptable way to put a person in the air on a forklift."
        ]
      },
      {
        heading: "The platform and its rails",
        body: [
          "The work platform is an attachment, and like any attachment it has to be right for the truck and properly fitted. The platform must:",
          {
            list: [
              "Be securely attached to the forks or mast so it can't slip, tip, or come loose.",
              "Have standard guardrails or equivalent rails on all open sides.",
              "Provide a means to protect and restrain the worker from falling.",
              "Have a firm, safe surface to stand on."
            ]
          },
          "Because a platform is an attachment, it also changes the truck's rated capacity and how it's operated — see the guidance on attachments and derated capacity. Never rig up a homemade cage; the platform has to be built and secured for the job."
        ]
      },
      {
        heading: "Rules while someone is elevated",
        body: [
          "With a person on the platform, the truck's whole job is to hold them steady and safe:",
          {
            list: [
              "The operator stays at the controls the entire time the platform is raised.",
              "Do not travel the truck while the platform is elevated with a worker on it.",
              "Lift and lower smoothly and slowly — no sudden moves.",
              "Keep the mast as vertical as practical, not tilted."
            ]
          },
          "The operator never leaves the seat while a worker is up in the air. If the truck has to be repositioned, the worker comes down first."
        ]
      },
      {
        heading: "Communication and watching the worker",
        body: [
          "The operator and the elevated worker need a clear, agreed way to signal each other — hand signals, radio, or voice they've both confirmed — before the platform goes up. The operator watches the platform and the worker, not the job the worker is doing.",
          "Keep the elevated worker clear of overhead hazards like beams, pipes, and especially energized electrical lines. Anyone working from the platform still follows fall-protection requirements for the height they're at."
        ]
      }
    ]
  },
  "fire-safety/standpipe-and-hose-systems": {
    description:
      "On tall construction, standpipes give the fire department water on the upper floors — install them as the building rises and keep the outlets charged and clear. OSHA 1926.150(d).",
    sections: [
      {
        heading: "Overview",
        body: [
          "On a multi-story building, dragging hose up a stairwell from a street hydrant wastes the minutes that matter most. A standpipe is a pipe that carries water up through the building so firefighters can hook a hose in on the floor where the fire is.",
          "OSHA 1926.150(d) is about getting that system in early, keeping it charged, and keeping the outlets clear. These are for trained responders and the fire department — not something untrained workers grab and fight fire with."
        ]
      },
      {
        heading: "Install the standpipe as the building goes up",
        body: [
          "The rule ties the standpipe to the height of the work, so it's ready before it's needed:",
          {
            list: [
              "On buildings tall enough to need one, the standpipe goes in as construction rises so it's available for firefighting.",
              "Keep the system ready for use as the floors get built out — don't leave it to the end.",
              "A water supply for firefighting has to be available as soon as combustible materials accumulate on site."
            ]
          },
          "The whole point is that when a fire breaks out on an upper floor, the department already has water up there instead of starting from the street."
        ]
      },
      {
        heading: "Keep the outlets accessible and protected",
        body: [
          "A standpipe only works if responders can reach a hose connection and it delivers water:",
          {
            list: [
              "Hose connections and outlets on each floor stay accessible and unobstructed — never buried behind stacked material or walled off by new partitions.",
              "Protect the piping and outlets from physical damage from equipment and traffic.",
              "Where freezing is a risk, protect the system so it doesn't freeze up and fail when it's called on.",
              "Keep the system charged so water is there the moment a hose is connected."
            ]
          }
        ]
      },
      {
        heading: "Who uses it",
        body: [
          "Standpipe hose systems are set up for trained firefighters — the fire department or a trained brigade — not for the average worker. If you're not trained and equipped for that, your job when the alarm sounds is to get out, not to open a standpipe valve.",
          "What every worker can do is keep the outlets clear and report any damaged, leaking, or blocked connection so the system works when responders arrive."
        ]
      }
    ]
  },
  "fire-safety/fixed-fire-suppression-systems": {
    description:
      "Sprinklers and fixed extinguishing systems fight fire automatically — keep them clear, keep the valves open, and know that some agents can make the air unsafe. OSHA 1910.159 and 1910.160.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A fixed suppression system fights fire on its own — automatic sprinklers that open when heat hits them, or a fixed system that dumps a gas or chemical into a protected space. It works without anyone pulling a trigger, which is exactly why it can't be blocked or switched off without anyone noticing.",
          "OSHA 1910.159 covers automatic sprinkler systems; 1910.160 covers fixed extinguishing systems like CO2, clean agent, dry chemical, and commercial kitchen systems."
        ]
      },
      {
        heading: "Don't block the sprinklers",
        body: [
          "A sprinkler head has to be able to throw water across the space. Anything in the way creates a shadow where fire can grow:",
          {
            list: [
              "Keep at least 18 inches of clearance below every sprinkler head so nothing blocks the spray.",
              "Don't hang anything from sprinkler piping — no wire, no lights, no material. The pipe isn't a support.",
              "Don't paint sprinkler heads or let them get coated in overspray, dust, or debris; it stops them operating.",
              "Keep control valves accessible and in the open position so the system stays charged.",
              "Report any damaged, painted, or corroded head instead of ignoring it."
            ]
          }
        ]
      },
      {
        heading: "Some agents make the air unsafe",
        body: [
          "Gas-based systems put out fire by flooding a room — CO2 and some clean-agent systems work by displacing or starving the oxygen. When one discharges, the atmosphere in that space can drop to a level that won't support life, and it happens fast.",
          "Know which spaces are protected by these systems, know the discharge alarm, and when it sounds, get out and stay out. Don't re-enter a flooded space until it's been ventilated and someone qualified says the air is safe."
        ]
      },
      {
        heading: "Never disable a system on your own",
        body: [
          "Taking a suppression system out of service — closing a sprinkler valve, isolating a fixed system — leaves the building unprotected. That's not a field decision.",
          "Systems are only taken offline with proper authorization, and while they're down a fire watch and other safeguards cover the gap. If you find a valve closed or a system tagged out and don't know why, treat the area as unprotected and flag it."
        ]
      }
    ]
  },
  "fire-safety/fire-brigades-and-employee-firefighting-roles": {
    description:
      "Know your site's model — evacuate and call the fire department, or run a trained brigade. If it's a brigade, OSHA 1910.156 sets real requirements for training, capability, and gear.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every site needs one clear answer to the same question: when there's a fire past the small, just-starting stage, do workers get out and let the fire department handle it, or does the site run its own trained fire brigade? There's no in-between, and everyone has to know which one it is.",
          "OSHA 1910.156 governs fire brigades. Fighting a small, incipient fire with an extinguisher is a separate matter, covered under Fire Extinguisher Safety — a brigade means employees who go beyond that."
        ]
      },
      {
        heading: "Most construction sites don't run a brigade",
        body: [
          "The common model on construction is simple: raise the alarm, evacuate, account for people at the assembly point, and let the fire department fight the fire. Trained workers may still use an extinguisher on a small incipient fire, but nobody is expected to take on a fire that's grown.",
          "If that's your site, the expectation is clear — when the alarm sounds, you leave. You don't go looking for the fire or try to be a hero."
        ]
      },
      {
        heading: "What a fire brigade triggers",
        body: [
          "If an employer chooses to organize a brigade — employees who fight fires beyond the incipient stage — 1910.156 brings real obligations that come with it:",
          {
            list: [
              "A written organizational statement setting out the brigade's structure, function, and the training its members get.",
              "Training and education commensurate with the duties members are expected to perform, provided before those duties and repeated regularly.",
              "Members physically capable of doing the tasks they'd be assigned.",
              "Proper protective clothing and equipment for the hazards they'll face."
            ]
          }
        ]
      },
      {
        heading: "Interior structural firefighting is another level",
        body: [
          "Sending people inside a burning structure is the most demanding case. For interior structural firefighting, brigade members need full structural firefighting protective gear and self-contained breathing apparatus (SCBA), and the training and physical capability to use it.",
          "This is not something a site drifts into. If your site doesn't have the organization, training, and equipment 1910.156 requires, then it doesn't do interior firefighting — it evacuates and waits for the fire department. Know your site's model before the alarm ever sounds."
        ]
      }
    ]
  },
  "confined-space/reclassification-and-alternate-entry-procedures": {
    description:
      "Two legitimate ways to cut back controls on a permit space — and the strict conditions that separate eliminating a hazard from just controlling it.",
    sections: [
      {
        heading: "Overview",
        body: [
          "There are two ways OSHA lets you enter a permit space without running the full permit system. They're not shortcuts — each has hard conditions, and mixing them up gets people killed. One covers spaces where the only problem is the air; the other covers spaces where every hazard has been truly removed.",
          "The line that matters: controlling a hazard is not the same as eliminating it. Only elimination lets you drop the space out of the permit program entirely."
        ]
      },
      {
        heading: "Alternate procedures — atmospheric hazard only",
        body: [
          "Under OSHA 29 CFR 1910.146(c)(5), if the only hazard in the space is atmospheric and continuous forced-air ventilation alone keeps the air safe, you may enter under alternate procedures. That means no permit and no attendant required by this route — but the safeguards around the air stay.",
          "You can only use this route if all of these hold:",
          {
            list: [
              "The single hazard is atmospheric — no engulfment, no mechanical, no other serious hazard.",
              "Continuous forced-air ventilation by itself keeps the atmosphere within safe limits.",
              "You have data and a determination showing ventilation alone will keep it safe.",
              "You test the air before entry and monitor continuously while anyone is inside.",
              "If a hazardous atmosphere shows up at any point, everyone leaves, the space is evaluated, and you fix what let it happen before going back in."
            ]
          },
          "If ventilation ever stops or the air won't hold, the alternate-procedures route is off — you're back to a full permit entry. See the ventilation and atmospheric testing topics for how to run the air side."
        ]
      },
      {
        heading: "Reclassification — hazards eliminated, not controlled",
        body: [
          "Under 1910.146(c)(7), a permit space can be reclassified as a non-permit space, but only when it has no actual or potential atmospheric hazards and every other hazard is eliminated without anyone entering. Eliminated means removed at the source — blanked and bled lines, drained and cleaned, de-energized and locked out so the hazard is physically gone, not just held back.",
          {
            list: [
              "No actual or potential atmospheric hazard exists in the space.",
              "All other hazards are eliminated without entry into the space.",
              "If entry is required to eliminate a hazard, that entry is done under a full permit first.",
              "The basis for the reclassification is documented in a certification — date, location, and signature — and made available to entrants."
            ]
          },
          "Reclassification is only good as long as the conditions that made it safe hold. If a hazard comes back or the space changes, the reclassification is void and you re-establish permit-space controls."
        ]
      },
      {
        heading: "Don't confuse the two",
        body: [
          "The trap is treating ventilation as elimination. Forced air controls a bad atmosphere while it's running — turn it off and the hazard returns, so the space stays permit-required and can't be reclassified. Alternate procedures let you keep working with the ventilation on; reclassification is for spaces where there's nothing left to control. Pick the wrong one and you've stripped protections a space still needs."
        ]
      }
    ]
  },
  "confined-space/host-and-contractor-coordination": {
    description:
      "Who owes whom what when an outside crew enters a site's confined spaces — the information handoff, the coordination, and the debrief afterward.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most confined-space work involves two employers: the host that owns the site and the contractor that sends the crew in. OSHA 1910.146(c)(8) and (c)(9) split the duties so nobody enters blind and nothing learned on the job gets lost. When that handoff breaks down, entrants walk into hazards the host already knew about.",
          "It's a two-way street — the host shares what it knows, the contractor coordinates the work and reports back what it found."
        ]
      },
      {
        heading: "What the host employer owes the contractor",
        body: [
          "Before the contractor's crew shows up, the host has to hand over what it knows about the spaces they'll enter:",
          {
            list: [
              "That the location has permit spaces and that entry is only allowed through a compliant program.",
              "Why each space is permit-required — the specific hazards it holds.",
              "Any precautions or procedures the host has used for entry in or near those spaces.",
              "Any other information the host has about the space's hazards."
            ]
          }
        ]
      },
      {
        heading: "What the contractor owes back",
        body: [
          "The contractor doesn't just take the info and disappear into the hole. It has its own duties:",
          {
            list: [
              "Get the host's hazard information and use it to plan the entry.",
              "Coordinate entry operations with the host when both host and contractor personnel will work in or near the space.",
              "Debrief the host at the end — go over the program followed and any hazards confronted or created during entry."
            ]
          },
          "That debrief is how the host's knowledge of the space stays current for the next crew. See the entry permit and entry supervisor topics for who owns those documents on the contractor's side."
        ]
      },
      {
        heading: "When multiple crews work near a space",
        body: [
          "The real danger on a busy site is one crew creating a hazard for another. A painter's solvent, a welder's torch, an exhaust from equipment parked over a hatch — any of them can turn a controlled space deadly for entrants who never saw it coming. Coordinate the schedule and the work so nobody introduces an atmosphere or a hazard into a space someone else is inside. When work overlaps, the host and every contractor talk to each other before it starts, not after someone goes down."
        ]
      }
    ]
  },
  "confined-space/selecting-and-evaluating-a-rescue-service": {
    description:
      "Why 'we'll call 911' isn't a rescue plan — how OSHA 1910.146(k) makes you evaluate, select, and prove a rescue service can actually reach your entrants.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Under OSHA 1910.146(k), whoever you're counting on to pull a worker out — your own team or an outside service like the fire department — has to be evaluated and selected before entry, not assumed. Naming a rescue service on the permit means nothing if they can't get there in time, can't fit your space, or have never touched the gear.",
          "Non-entry retrieval is still the first choice wherever it's feasible — pulling the entrant out from outside on their line keeps a second person from being exposed. See the rescue and retrieval systems topic for that equipment."
        ]
      },
      {
        heading: "Evaluate before you rely on them",
        body: [
          "Before you designate a rescue service, you evaluate whether they can actually do the job for your spaces:",
          {
            list: [
              "They can respond in a timely manner given the hazards — how fast a downed worker needs to be out drives how fast rescue has to arrive.",
              "They're proficient with the rescue and retrieval equipment and trained for permit-space rescue.",
              "They can reach the entrant and perform the extraction from this space — its size, depth, opening, and layout.",
              "They're willing and able to respond, and you've confirmed availability for the entry — not just found a number."
            ]
          }
        ]
      },
      {
        heading: "Let them see the space and drill",
        body: [
          "An evaluation on paper isn't enough. Give the selected service access to the permit spaces so they can plan and practice rescue operations, and inform them of the hazards they'll face. Rescuers train at least once a year, using the actual spaces or representative ones — a dummy or person going through the motions of a real extraction — so they've solved the problem before it's a live emergency."
        ]
      },
      {
        heading: "\"We'll just call 911\" is not a plan",
        body: [
          "Assuming the local fire department will come, can fit your space, and will arrive before a worker in bad air is beyond saving is a bet on somebody's life. Some departments don't do confined-space rescue at all. Confirm they can and will respond in time before entry — in writing, coordinated ahead. And the whole point of evaluating rescuers first is the same rule that runs through all of this: rescuers must never become victims themselves."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/pneumatic-breakers-and-hand-arm-vibration": {
    description:
      "Jackhammers and chipping hammers pound vibration straight into your hands, and enough of it permanently kills the nerves and blood vessels — so you cut trigger time, keep your hands warm, and use anti-vibration tools.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Pneumatic breakers — jackhammers, chipping hammers, rivet busters — do their work by pounding, and that pounding travels straight up the tool into your hands and arms. Over months and years that vibration can permanently damage the nerves and blood vessels in your fingers. It's called hand-arm vibration syndrome, and once it sets in it doesn't heal.",
          "These tools also come with noise, dust, and a heavy moving bit — so the vibration is only part of what you're managing."
        ]
      },
      {
        heading: "Hand-arm vibration syndrome (HAVS)",
        body: [
          "Also called vibration white finger. Repeated vibration slowly damages the nerves and blood flow in the hands, and the damage is permanent if you keep ignoring it. Watch for the early warning signs:",
          {
            list: [
              "Numbness or tingling in the fingers, especially after running the tool.",
              "Fingers going white or blanching, often in the cold.",
              "Loss of grip strength and loss of feeling — trouble picking up small objects.",
              "Pain or throbbing in the hands and fingers."
            ]
          },
          "If you're noticing these, report it. Early is the only time you can stop it getting worse."
        ]
      },
      {
        heading: "Cutting the vibration dose",
        body: [
          "You can't feel the damage building, so you manage the exposure instead of waiting for symptoms:",
          {
            list: [
              "Use anti-vibration tools and anti-vibration gloves where they're provided.",
              "Limit continuous trigger time — take breaks and rotate the job around the crew so no one runs the breaker all shift.",
              "Keep your hands warm and dry; cold hands take the damage faster.",
              "Keep bits and steels sharp — a dull bit means you push harder and run longer for the same work.",
              "Grip only as tight as you need to control the tool; a death-grip pumps more vibration into your hands."
            ]
          }
        ]
      },
      {
        heading: "Noise, dust, and the moving bit",
        body: [
          "Breakers are loud enough to damage hearing over a shift — wear hearing protection. Breaking or chipping concrete throws respirable silica dust, which scars your lungs, so use wet methods or dust controls and the respiratory protection called for; respirator selection and fit are covered under PPE.",
          "The bit itself is a struck-and-caught hazard: keep your feet and free hand clear of where it drives, watch for it kicking out or breaking through, and mind the material and people below on elevated work. The retainer that keeps the steel from being ejected is covered under pneumatic tool basics — make sure it's in place before you pull the trigger."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/abrasive-blasting-safety": {
    description:
      "Blasting drives abrasive at killing speed and, if the abrasive is silica sand, fills the air with the dust that causes silicosis — so you swap out the sand where you can, run supplied-air hoods, and never let go of the deadman control by accident.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Abrasive blasting — sandblasting — strips paint, rust, and scale by firing abrasive at high velocity out of a nozzle. That same energy will strip skin, and the biggest killer isn't the impact, it's the dust. OSHA 1926.57 and 1910.94 cover abrasive blasting operations.",
          "If the abrasive is silica sand, blasting fills the air with respirable crystalline silica — the dust that causes silicosis, a permanent, sometimes fatal scarring of the lungs."
        ]
      },
      {
        heading: "Silica and respiratory protection",
        body: [
          "This is the hazard that outlives the job:",
          {
            list: [
              "Where you can, use a non-silica abrasive instead of silica sand — it's the most effective control.",
              "Blasting operations require respiratory protection; an abrasive-blasting operator uses a supplied-air blasting helmet or hood, not just a dust mask.",
              "Anyone working near the blasting, not just the operator, can be exposed to the airborne dust — keep bystanders back and controlled.",
              "Respirator selection and fit are covered under PPE — get the right one for the exposure, don't improvise."
            ]
          }
        ]
      },
      {
        heading: "The deadman control and system hazards",
        body: [
          "The blast stream and the system feeding it both hurt you:",
          {
            list: [
              "The nozzle has a deadman (dead-man) control that shuts off the flow the instant you let go — never block, tie down, or defeat it, because it's what stops the stream if you drop the nozzle.",
              "Abrasive rebounds off the work at high velocity — keep the nozzle pointed at the work, never at yourself or anyone, and protect people around you.",
              "Blast hoses carry abrasive under pressure; a failed coupling or hose whips like any charged line — general hose, coupling, and whip-check rules apply here too.",
              "Bond and ground the system — moving abrasive builds a static charge that can shock or spark.",
              "Blasting inside a tank, vessel, or other enclosure is a hazardous, oxygen-affected atmosphere — treat it as confined-space work with ventilation and monitoring."
            ]
          }
        ]
      },
      {
        heading: "PPE and the blast area",
        body: [
          "Beyond the supplied-air respirator, the operator wears a blasting helmet or hood that protects the head, face, and neck, heavy gloves, and body protection against rebounding abrasive. Blasting is loud, so hearing protection is required.",
          "Keep the blast area barricaded and marked so nobody walks into the stream or the dust cloud, and shut the deadman before you turn to talk to anyone or reposition."
        ]
      }
    ]
  },
  "compressed-gas-and-air-tool-safety/air-powered-hoists-and-winches": {
    description:
      "An air hoist lifts more than you can, so a stuck air control or an overloaded hook can drop a load on someone — you work to the rated capacity, inspect the rigging every time, and never stand under the load.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Air-powered hoists and winches lift and pull loads using compressed air instead of a motor. They're strong and easy to run, which is exactly why they hurt people: it's easy to overload one, and a sticking air control can make it run away when you thought you'd stopped it.",
          "Treat one like any other lifting device — know its limits, check its gear, and keep people clear of the load."
        ]
      },
      {
        heading: "Rated capacity and control",
        body: [
          "The two things that cause a dropped or runaway load:",
          {
            list: [
              "Know the rated capacity marked on the hoist and never exceed it — no 'just this once' with a heavy pick.",
              "Feed air within the hoist's rated supply pressure; wrong pressure means the tool doesn't behave the way you expect.",
              "Run the controls smoothly and stay on them — an air control valve can stick open and let the hoist run away, so know where the emergency stop or the means to bleed the air is before you start.",
              "Make sure you can stop and hold the load, not just lift it."
            ]
          }
        ]
      },
      {
        heading: "Inspect before every lift",
        body: [
          "Check the load path before it's carrying anything:",
          {
            list: [
              "Inspect the load chain or wire rope for wear, kinks, corrosion, and broken wires or stretched links.",
              "Check the hook for cracks, gouges, and any bending or opening of the throat.",
              "Make sure the hook latch (safety catch) is present and works, so a sling can't roll out.",
              "Take the hoist out of service if any of it is damaged — don't nurse it through the lift."
            ]
          }
        ]
      },
      {
        heading: "Under the load and rigging",
        body: [
          "Where people get hurt is standing in the wrong place:",
          {
            list: [
              "Never ride the load or the hook, and never let anyone else.",
              "Keep yourself and everyone else out from under a suspended load — a raised load is never 'parked.'",
              "Secure the load and center the hook over it before you pick, so it can't swing, slip, or spin when it lifts.",
              "Land the load and take the tension off before anyone reaches in."
            ]
          },
          "Choosing slings, hitches, and rated hardware for the pick is rigging work — that's covered under Rigging and Material Handling Equipment. Get the rigging right before you touch the hoist control."
        ]
      }
    ]
  },
  "excavation-safety/mobile-equipment-and-traffic-around-the-excavation": {
    description:
      "Keeping excavators, trucks, and traffic from rolling, backing, or swinging into the trench — warning systems at the edge, spotters, and staying out of the swing radius.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most of what kills people in a trench is the ground. But heavy equipment working at the edge brings its own way to get you hurt — a machine backs in, a bucket swings into you, or the weight parked up top pushes the wall in on the crew below.",
          "OSHA 1926.651 sets rules for mobile equipment near an excavation. They come down to two things: don't let the machine get into the hole, and don't let it hit anyone."
        ]
      },
      {
        heading: "Keep the machine out of the trench",
        body: [
          "Under 1926.651(f), when mobile equipment is operated at or near the edge of an excavation, and the operator can't see the edge, you set up a warning system so the machine doesn't roll or back over it.",
          {
            list: [
              "Barricades to physically stop the equipment short of the edge.",
              "Hand or mechanical signals from a spotter the operator can see.",
              "Stop logs — a curb or log the wheels hit before they reach the edge.",
              "Where the ground allows, grade the spoil or the surface so it slopes away from the excavation."
            ]
          },
          "A machine parked or working at the edge is also a surcharge load that can trigger a collapse — that's covered under spoil piles and surcharge, so keep equipment set back and off the wall."
        ]
      },
      {
        heading: "Keep equipment and material back from the edge",
        body: [
          "The same 2-foot rule that applies to the spoil pile applies to equipment. Under 1926.651(j), workers are protected from loose rock and soil and from equipment by keeping materials and equipment at least 2 feet back from the edge, using a retaining device, or both.",
          "That setback keeps the load off the wall and keeps anything from rolling or being knocked into the trench on top of the crew. More room is better where you have it."
        ]
      },
      {
        heading: "Struck-by: the swing radius and backing equipment",
        body: [
          "An excavator working above an open trench is the biggest struck-by hazard on the job. The bucket swings, the machine backs up, and a worker in the wrong spot gets crushed against the wall or run over.",
          {
            list: [
              "Stay out of the swing radius of the boom and bucket — never work or walk under a swinging load.",
              "Keep workers out of the trench while the machine is digging or setting a box above them.",
              "Use a spotter when equipment backs up or works blind, and make eye contact with the operator before you approach.",
              "Wear high-visibility clothing so operators can pick you out against the dirt and equipment.",
              "Agree on hand signals ahead of time, and give one person the job of signaling so the operator isn't getting mixed messages."
            ]
          }
        ]
      },
      {
        heading: "Traffic where the excavation meets a road",
        body: [
          "When the excavation is next to a live road, public and site traffic add both a struck-by hazard and vibration that works the wall loose. Set up a traffic control zone to keep vehicles away from the edge and the crew, and route traffic away from the excavation where you can.",
          "Anyone exposed to vehicle traffic wears a high-visibility warning vest, and the work zone keeps vehicles and the open trench apart."
        ]
      }
    ]
  },
  "ppe/working-over-or-near-water-life-jackets-and-ring-buoys": {
    description:
      "When a fall means landing in water, the PPE is what keeps you floating. Coast Guard-approved life vests, ring buoys on 90 feet of line, and a rescue skiff standing by.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Where you can fall into water and drown, the PPE changes. A hard hat and a hi-vis vest don't keep you afloat. Working over or next to open water — bridges, docks, barges, cofferdams, intake structures — means you need gear built to keep your head above the surface until someone reaches you.",
          "OSHA 1926.106 covers it. Where a fall CAN be prevented, fall protection comes first — a guardrail or a harness stops you going in at all (see the fall protection harness topic). Drowning protection is for the exposure that's left: the chance you end up in the water anyway."
        ]
      },
      {
        heading: "Wear a Coast Guard-approved life vest",
        body: [
          "Anyone working over or near water where they could fall in and drown wears a U.S. Coast Guard-approved life jacket or buoyant work vest. Not a substitute, not a pool float — an approved device rated to keep you buoyant.",
          "Inspect the vest before you put it on. A vest that can't hold you up is worse than useless because it tells everyone you're covered when you're not. Pull it out of service for any of these:",
          {
            list: [
              "Rips, tears, or open seams in the fabric or shell.",
              "Waterlogged, hardened, oil-soaked, or mildewed buoyant material.",
              "Broken or missing straps, buckles, or hardware.",
              "Any damage that could reduce the buoyancy the vest is rated for."
            ]
          }
        ]
      },
      {
        heading: "Ring buoys and a rescue skiff",
        body: [
          "The vest keeps you floating; the ring buoy and the skiff get you out. Both have to be there before work starts over the water.",
          {
            list: [
              "Ring buoys with at least 90 feet of line, readily available for emergency rescue.",
              "Spaced along the water's edge so one is always within reach — commonly not more than 200 feet apart.",
              "At least one lifesaving skiff immediately available wherever employees work over or next to water."
            ]
          },
          "Know where the nearest buoy is before you need it, and know who's manning the skiff. In a real fall you have seconds, not minutes."
        ]
      },
      {
        heading: "Cold water and current make it urgent",
        body: [
          "Water doesn't have to be deep or fast to kill you. Cold water saps strength and coordination in minutes — cold shock can make you gasp and inhale water the instant you go under, and a current carries you away from the buoy and the ladder faster than you can swim back.",
          "That's why the vest, the buoys, and the skiff aren't paperwork — they're the difference between a splash and a drowning. Set them up, check them, and don't work over water without them."
        ]
      }
    ]
  },

  // ── Vehicle and Driver Safety ─────────────────────────────────────────────
  "vehicle-and-driver-safety/motor-vehicles-on-site-driver-duties-and-rules-of-the-road": {
    description:
      "What OSHA 1926.601 requires on any motor vehicle used on the job, and the driver habits that keep low-speed site moves from turning into incidents.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A pickup, a flatbed, a water truck, a dump truck — any vehicle you drive around the site falls under OSHA 29 CFR 1926.601, \"Motor vehicles.\" That rule sets what the vehicle has to have before it moves and covers vehicles operated inside the jobsite, off the public road.",
          "Most vehicle incidents on site don't happen at highway speed. They happen at a walking pace, in a spot everybody knows, when a driver assumes the way is clear. The vehicle is safe to run and the driver drives it like people are always nearby — because they are."
        ]
      },
      {
        heading: "What the vehicle has to have (1926.601)",
        body: [
          "Before a motor vehicle goes into service, OSHA requires it to have working safety equipment. The basics:",
          {
            list: [
              "Service brakes, an emergency (secondary) braking system, and a parking brake — all operable.",
              "At least two headlights and two working tail lights whenever visibility calls for extra light.",
              "Working brake lights, regardless of the light conditions.",
              "Windshields and powered wipers; cracked or broken glass gets replaced, not ignored.",
              "A reverse-signal alarm audible above the surrounding noise, or a spotter, on any vehicle with an obstructed rear view.",
              "A cab shield or canopy on haulage trucks that get loaded by a crane, power shovel, or loader, to protect the operator from spillage."
            ]
          },
          "If a required item is broken, the vehicle is out of service until it's fixed — that's not a judgment call."
        ]
      },
      {
        heading: "The driver's job",
        body: [
          "The person behind the wheel owns the move. That means:",
          {
            list: [
              "Buckle the seat belt before you release the brake — every trip, no exceptions.",
              "Know the site traffic plan: routes, one-way sections, speed limits, and where foot traffic crosses.",
              "Keep speed to conditions — mud, gravel, blind corners, and congestion all mean slow down.",
              "Assume pedestrians are in your blind spots; make eye contact before you move near people.",
              "Secure tools and loose material so nothing shifts or flies off (1926.601(b)(7))."
            ]
          },
          "If you can't see, can't fit, or aren't sure who has the right-of-way, stop. A stopped vehicle has never run anyone over."
        ]
      },
      {
        heading: "Where this connects",
        body: [
          "Powered industrial trucks (forklifts) run under their own rule and are covered in Forklift Safety. Earthmoving machines — loaders, dozers, scrapers, graders — add requirements under 1926.602 and are covered here in the earthmoving talk. Backing, spotters, alarms, and work-zone traffic each get their own talk in this category."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/pre-operation-and-daily-vehicle-inspections": {
    description:
      "The start-of-shift walkaround OSHA 1926.601(b)(14) requires — the parts you check, why, and what to do when something's wrong.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA 1926.601(b)(14) is direct: every vehicle in use gets checked at the beginning of each shift to make sure key parts are in safe operating condition and free of damage that could cause a failure while you're driving. Defects get fixed before the vehicle is put in service — not after the run.",
          "A walkaround takes a couple of minutes. A brake that fades on a downgrade, a tire that lets go under load, or a coupling that drops a trailer takes a couple of seconds to become a fatality."
        ]
      },
      {
        heading: "What the shift check covers",
        body: [
          "The standard names the parts. Check that each is there, working, and undamaged:",
          {
            list: [
              "Service brakes, including trailer brake connections.",
              "Parking (hand) brake and the emergency stopping/braking system.",
              "Tires — inflation, tread, cuts, and no missing lugs.",
              "Horn.",
              "Steering mechanism.",
              "Coupling devices — hitch, pintle, fifth wheel, safety chains.",
              "Seat belts.",
              "Operating controls and all safety devices (lights, wipers, alarms, mirrors)."
            ]
          },
          "Add fluids, leaks, and mirror/glass condition to the loop — anything that would stop you seeing or stopping."
        ]
      },
      {
        heading: "Do it the same way every time",
        body: [
          "Walk a consistent path so nothing gets skipped: front, down one side, rear, up the other, then in the cab. Check tires and lights on foot before you climb in; test brakes, steering, horn, and gauges once you're seated.",
          "Look under the vehicle for fresh puddles — a spreading stain is a leak, not condensation. Tug the trailer coupling and confirm the safety chains and breakaway are connected."
        ]
      },
      {
        heading: "When something's wrong",
        body: [
          "Any defect that affects safe operation means the vehicle comes out of service until it's corrected. Tag it, report it, and don't let \"it's just a short trip\" talk you into driving it.",
          "Log the check. A written or app-based record shows the vehicle was inspected, flags repeat problems before they strand a crew, and protects the driver who did the right thing."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/seat-belts-and-rollover-protective-structures-rops": {
    description:
      "Why ROPS and a buckled seat belt are one system — required together under OSHA Subpart W and 1926.602 — and what to do if a machine starts to roll.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A rollover is one of the top killers on construction equipment, and the two things that decide whether you walk away are the rollover protective structure (ROPS) over your head and the seat belt across your lap. They only work together. A ROPS keeps a survival space when the machine flips; the belt keeps you inside that space instead of thrown out and crushed.",
          "OSHA requires ROPS on the major earthmoving machines under 29 CFR 1926 Subpart W, and requires seat belts on that equipment under 1926.602(a)(2). Buckling up is not optional on a machine that has a belt."
        ]
      },
      {
        heading: "What needs ROPS",
        body: [
          "Subpart W (1926.1000) requires rollover protection on these machines when they're used in construction:",
          {
            list: [
              "Rubber-tired self-propelled scrapers.",
              "Rubber-tired front-end loaders and rubber-tired dozers.",
              "Wheel-type agricultural and industrial tractors.",
              "Crawler tractors and crawler-type loaders.",
              "Motor graders — with or without attachments."
            ]
          },
          "The ROPS has to meet the performance criteria in the standard, and the machine carries seat belts that meet SAE J386. Sideboom pipelaying tractors are the specific exception. If a ROPS is damaged in a rollover, it's replaced — never repaired and reused, because bent steel won't take a second hit."
        ]
      },
      {
        heading: "Wear the belt — every time",
        body: [
          "The belt is the part operators skip, and it's the part that saves the life. In a rollover, an unbelted operator's instinct is to jump clear — and that's exactly how people end up under the machine. The survival space is inside the ROPS. Stay in it.",
          "If the machine starts to tip: stay seated and belted, grip the wheel, brace your feet, and lean away from the point of impact. Do not try to jump out."
        ]
      },
      {
        heading: "Keep the system intact",
        body: [
          "Don't modify or drill a ROPS, hang loads from it, or remove it to fit under a low clearance. Any of that voids the protection. Check the belt with the daily inspection — frayed webbing, a cracked buckle, or a jammed retractor means the belt gets replaced before the machine runs.",
          "Overhead falling-object protection (FOPS) is a separate structure for a separate hazard; where the work exposes you to falling material, the machine needs that too."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/backing-up-blind-spots-spotters-and-hand-signals": {
    description:
      "Backing is where struck-by fatalities happen. What OSHA 1926.601(b)(4) requires, how to use a spotter, and the signal rules that keep the move safe.",
    sections: [
      {
        heading: "Overview",
        body: [
          "More site vehicles run people over in reverse than in any other maneuver. The driver can't see behind the vehicle, the worker on foot assumes the driver sees them, and the two assumptions meet in the blind spot.",
          "OSHA 1926.601(b)(4) is clear: you may not use a motor vehicle with an obstructed rear view unless it has a reverse-signal alarm audible above the surrounding noise, or it's backed only when a spotter signals that it's safe. Earthmoving equipment carries the same rule under 1926.602(a)(9)."
        ]
      },
      {
        heading: "Cut down the backing",
        body: [
          "The safest reverse move is the one you don't make. Before backing becomes routine:",
          {
            list: [
              "Set up pull-through parking and drive-through routes so trucks exit forward.",
              "Plan deliveries so vehicles don't have to reverse into work areas.",
              "If you must back, do it right away when you arrive and know the area is clear — not blind at the end of the job."
            ]
          }
        ]
      },
      {
        heading: "Using a spotter",
        body: [
          "When a spotter is directing the back-up, the rules are simple and non-negotiable:",
          {
            list: [
              "One spotter, one driver — agree on the signals before the vehicle moves.",
              "The spotter stays out of the vehicle's path and in a position where mirrors can see them the whole time.",
              "If the driver loses sight of the spotter, the driver STOPS — every time, no exceptions.",
              "The spotter never walks backward and never puts themselves between the vehicle and a fixed object.",
              "A high-visibility vest so the driver can pick the spotter out of the background."
            ]
          },
          "Agree in advance on the one signal that always means STOP, and that anyone on the ground can give it."
        ]
      },
      {
        heading: "Alarms and cameras help — they don't replace looking",
        body: [
          "A reverse alarm warns people on foot; a backup camera and mirrors help the driver. They're aids, not permission to back blind. Alarms get ignored on a noisy site (\"alarm fatigue\"), and cameras have their own blind zones.",
          "The safe move is layered: cut down backing, use a spotter for the tight ones, keep the alarm working, and glance the mirrors and camera. No single one of those is enough alone."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/backup-alarms-and-warning-devices": {
    description:
      "Reverse alarms, horns, lights, and flags — what OSHA requires, why 'audible above the surrounding noise' is the test, and how to keep them working.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Warning devices are how a moving vehicle tells people on foot where it is and what it's about to do. On a site with engines, tools, and traffic, the person in the blind spot may never hear the truck itself — the alarm is what gives them the second they need to step clear.",
          "OSHA sets the standard for reverse alarms on both motor vehicles (1926.601(b)(4)) and earthmoving equipment (1926.602(a)(9)): the alarm has to be audible above the surrounding noise level, or a spotter directs the back-up."
        ]
      },
      {
        heading: "The devices and what they're for",
        body: [
          {
            list: [
              "Reverse-signal alarm — the tonal or broadband \"beeper\" that sounds automatically when the machine is in reverse.",
              "Horn — on bi-directional machines (rollers, compactors, loaders, dozers, tractors), OSHA 1926.602(a)(9)(i) requires a horn distinctly audible above the surrounding noise; the operator sounds it when starting to move.",
              "Rotating amber beacon or strobe — makes the machine visible over spoil piles and in low light.",
              "Headlights, tail lights, and brake lights — required working when visibility warrants (1926.601).",
              "Flags, reflectors, and reflective tape on slow-moving or oversized equipment."
            ]
          }
        ]
      },
      {
        heading: "\"Audible above the surrounding noise\" is the real test",
        body: [
          "An alarm that the machine's own engine and the crew's tools drown out isn't doing its job, even if it's technically working. If the site is loud, the alarm has to be loud enough to beat it — or you add a spotter.",
          "Broadband (\"white-noise\") alarms are easier to locate directionally and are less prone to being tuned out than a single-tone beeper. Where alarm fatigue is a problem — a busy yard where beepers never stop — self-adjusting alarms that stay just above ambient noise, plus spotters for the tight moves, work better than one more loud beeper."
        ]
      },
      {
        heading: "Keep them working",
        body: [
          "Warning devices are on the daily inspection list for a reason. Check that the reverse alarm sounds when you select reverse, the horn works, the beacon spins, and all lights come on before the shift.",
          "A dead alarm or a burned-out brake light takes the vehicle out of service until it's fixed. Don't disable an alarm because it's annoying — annoyed is the point."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/haul-roads-access-roads-and-grades": {
    description:
      "OSHA 1926.602(a)(3) requires haul and access roads built to be safe. Grades, berms, width, surface, and the driving habits that match them.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The road is a safety control. OSHA 1926.602(a)(3) requires that access roadways and grades be constructed so equipment can be operated safely, and that no vehicle is moved on a road or grade unless it's built to handle it.",
          "A haul road that's too narrow, too steep, poorly drained, or dropping off at a fill edge turns an ordinary haul into a rollover or a run-off. The road gets planned and maintained like any other part of the job."
        ]
      },
      {
        heading: "Build the road right",
        body: [
          {
            list: [
              "Width — wide enough for the widest equipment plus clearance; on two-way roads, room to pass without crowding the edge.",
              "Grade — kept within what the loaded equipment's brakes and traction can handle; the steeper the grade, the slower and more deliberate the move.",
              "Berms or guardrails along drop-offs, fill edges, and near excavations to stop a vehicle from going over.",
              "Surface — graded, drained, and maintained; watch for ruts, soft spots, mud, ice, and washouts.",
              "Sight distance at intersections and blind crests; add signs, mirrors, or traffic control where it's tight."
            ]
          }
        ]
      },
      {
        heading: "Drive to the road and the grade",
        body: [
          "The road being built right doesn't help if the driver outruns it. On grades and haul roads:",
          {
            list: [
              "Slow down before the descent — control speed with the transmission and engine brake, not by riding the service brakes until they fade.",
              "Keep well back from the edge, spoil piles, and excavation lips; the ground near an edge can give way under weight.",
              "Match speed to the surface — mud, gravel, and ice cut your traction and stopping distance.",
              "Give loaded equipment the right-of-way; it can't stop or maneuver like an empty vehicle."
            ]
          }
        ]
      },
      {
        heading: "Light it and control it",
        body: [
          "Where haul roads run at night or in poor visibility, OSHA 1926.602(a)(3) calls for adequate lighting — headlights, and flares or reflectors to mark the route and any hazards.",
          "On a busy site, set the traffic plan in writing: one-way loops, speed limits, and where haul traffic and foot traffic are kept apart. Keep pedestrians off haul roads entirely wherever the layout allows."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/dump-trucks-and-raised-bed-hazards": {
    description:
      "The raised bed is where dump trucks kill — overhead lines, tip-overs, and stuck loads. How to dump, when to stay clear, and never travel with the bed up.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A dump truck is routine until the bed goes up. Raised, that bed can reach an overhead power line, throw the whole truck off balance on soft or uneven ground, or trap someone who steps under it to free a stuck load.",
          "Most raised-bed incidents are one of three things: contact with a power line, a tip-over, or getting caught under the bed. Each one is preventable with the same discipline every time you dump."
        ]
      },
      {
        heading: "Before you raise the bed",
        body: [
          {
            list: [
              "Look up. Check for overhead power lines and set the dump spot to keep the raised bed well clear — treat any line as energized. If the truck contacts a line, stay in the cab and warn others to keep back until the utility confirms it's dead.",
              "Check the ground. Dump on firm, level ground — a raised bed puts the center of gravity high, and soft or sloped ground rolls the truck.",
              "Line up straight and set the parking brake. A truck skewed to the pile tips sideways as the load shifts.",
              "Keep people clear of the rear and the sides of the bed's swing."
            ]
          }
        ]
      },
      {
        heading: "Dumping and stuck loads",
        body: [
          "Raise the bed smoothly and watch the load release. Sticky material — wet clay, frozen aggregate — can cling high on one side and lever the truck over, or let go all at once.",
          "If a load hangs up, do not drive forward and slam to jolt it loose near people, and never climb under or into a raised bed to free it while it's up on hydraulics alone. If someone must work under a raised body for any reason, it gets blocked or the safety prop is set first — hydraulics can drift or fail."
        ]
      },
      {
        heading: "Never travel with the bed up",
        body: [
          "Lower the bed completely and confirm it's seated before you pull away. Driving with the bed even partly raised is how trucks snag overhead lines, structures, and power drops, and how they roll on the first turn.",
          "Know your truck: watch the bed-up indicator, and don't rely on feel. Bed down, brake off, mirrors clear — then move."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/earthmoving-and-material-handling-equipment": {
    description:
      "Loaders, dozers, scrapers, graders, and rollers under OSHA 1926.602 — the added requirements for the big machines and how to work on and around them.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Earthmoving and material-handling machines — front-end loaders, dozers, scrapers, graders, backhoes, rollers, and compactors — carry hazards a pickup doesn't: huge blind spots, heavy articulating parts, and the mass to bury or crush in an instant. OSHA 29 CFR 1926.602 sets the requirements on top of the general motor-vehicle rule.",
          "These machines demand a trained operator, a machine that's inspected and equipped, and everyone on foot kept out of the swing and travel path."
        ]
      },
      {
        heading: "What 1926.602 adds",
        body: [
          {
            list: [
              "Seat belts on the equipment, meeting SAE J386 (1926.602(a)(2)) — and worn.",
              "Rollover protection (ROPS) per Subpart W on scrapers, loaders, dozers, tractors, and graders.",
              "Reverse-signal alarm audible above the surrounding noise, or a spotter, when the rear view is obstructed (1926.602(a)(9)).",
              "A horn, distinctly audible above the surrounding noise, on bi-directional machines — sounded before moving.",
              "Access roads and grades built for safe operation (1926.602(a)(3)).",
              "Service brakes and fog-tail-brake lighting adequate for the machine's weight and speed."
            ]
          }
        ]
      },
      {
        heading: "Operating safely",
        body: [
          "The operator controls the danger zone around the machine:",
          {
            list: [
              "Mount and dismount facing the machine with three points of contact — never jump down.",
              "Carry loads low for stability and visibility; a raised bucket blocks the view and raises the tip-over risk.",
              "Lower buckets, blades, and forks to the ground before leaving the seat.",
              "Keep clear of the edges of excavations and fills — the weight can collapse the ground.",
              "Watch the articulation and swing points; a loader or backhoe pins people in the pinch zone with no warning."
            ]
          }
        ]
      },
      {
        heading: "Working near the machine",
        body: [
          "Ground crews stay out of the operator's blind spots and never approach a running machine until the operator sees them, signals back, and the equipment is stopped with attachments grounded.",
          "Make eye contact and get an acknowledgment before you enter the work zone. The operator up in the cab often cannot see a worker close to the machine at all — assume you're invisible until you know you're seen."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/working-around-mobile-equipment-struck-by-and-caught-between": {
    description:
      "Struck-by vehicles is a leading construction killer. The blind zones, the pinch points, and the separation habits that keep workers on foot alive.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Struck-by incidents are one of construction's \"Focus Four\" hazards, and being struck by a vehicle or mobile equipment is the deadliest kind. Caught-between — pinned against a wall, a trailer, or another machine — runs a close second. Both hit the worker on foot, not the driver.",
          "The whole game is separation: keep people and moving equipment apart, and where they must share space, make sure the driver sees the worker and the worker sees the machine."
        ]
      },
      {
        heading: "Know the blind zones",
        body: [
          "Every large vehicle has zones the driver simply cannot see — directly behind, along the passenger side, and close in around the front on a high cab. On articulated and swinging machines, the danger zone moves as the machine turns.",
          "The rule for anyone on foot: if you can't see the operator's eyes or face, the operator can't see you. Don't walk behind a vehicle that could back up, and don't cut through the swing radius of a loader, excavator, or backhoe."
        ]
      },
      {
        heading: "Caught-between pinch points",
        body: [
          "Caught-between kills fast and quiet. The common traps:",
          {
            list: [
              "Between a backing vehicle and a wall, trailer, stack of material, or another machine.",
              "In the articulation joint of a loader or the swing of an excavator counterweight.",
              "Between a truck and a loading dock during spotting.",
              "Under a raised bed, bucket, or attachment held only on hydraulics."
            ]
          },
          "Never position yourself where a moving machine could close the gap against something solid. There's no reaction time in a pinch point."
        ]
      },
      {
        heading: "Build in separation",
        body: [
          {
            list: [
              "Separate pedestrian routes and vehicle routes with barriers or marked walkways where you can.",
              "High-visibility clothing so drivers pick you out — required near traffic and good practice everywhere equipment runs.",
              "Positive communication: eye contact and an acknowledged signal before entering a work zone.",
              "Internal traffic control plan — one-way routes, spotters, and speed limits — so movements are predictable.",
              "Stay out of the path; let the machine finish its move rather than timing a dash across it."
            ]
          }
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/loading-unloading-and-securing-loads": {
    description:
      "Chocking, staying out of the fall zone, and securing the load so nothing shifts in transit or drops on someone during loading.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Loading and unloading is where the vehicle is standing still and people relax — and it's where loads shift, roll off, or crush. A load that isn't secured moves in transit; a worker in the wrong spot during loading gets hit by what's coming off.",
          "OSHA 1926.601(b)(7) requires tools and material to be secured to prevent movement when a vehicle is in motion. The same discipline — chock, stay clear, secure — applies whether you're loading a flatbed or unloading a delivery."
        ]
      },
      {
        heading: "Set the vehicle before you load",
        body: [
          {
            list: [
              "Set the parking brake and chock the wheels before anyone loads or unloads.",
              "On a trailer being loaded by forklift, chock the trailer and set trailer stands or a dock lock so it can't roll or tip forward off its landing gear.",
              "Load on firm, level ground; a lean throws off how the load sits and how it comes off.",
              "Shut off and secure the vehicle if the driver leaves the cab during the work."
            ]
          }
        ]
      },
      {
        heading: "Stay out of the fall zone",
        body: [
          "Never stand under a suspended load or in the path a load would take if it broke free or shifted. When material is being lifted onto or off the bed by crane, loader, or forklift, workers stay clear of the load and the pinch points until it's set.",
          "Getting on and off the trailer bed: use three points of contact and steps or a ladder — don't jump down, and don't climb on an unstable load. Falls from truck and trailer beds are a common, serious injury."
        ]
      },
      {
        heading: "Secure the load for the road",
        body: [
          "A load that's fine at 5 mph in the yard comes apart at highway speed or on the first hard stop. Before the vehicle moves:",
          {
            list: [
              "Block, brace, and tie down so nothing can slide, roll, or fall — enough tie-downs rated for the weight.",
              "Cover loose material that could blow off.",
              "Check the load didn't shift after the first short distance, and re-tension straps.",
              "Distribute weight so the vehicle stays balanced and within its rated capacity."
            ]
          },
          "For loads hauled on public roads, DOT/FMCSA cargo-securement rules set the minimum tie-down numbers and working load limits — meet them."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/highway-work-zones-and-public-traffic-flaggers": {
    description:
      "Working where the site meets live traffic — work-zone layout, flagger duties, high-visibility PPE, and keeping the public and the crew apart.",
    sections: [
      {
        heading: "Overview",
        body: [
          "When the job runs next to a road that's still open, the biggest hazard isn't your own equipment — it's the public driving through at speed, distracted, and not expecting you. Work-zone struck-by incidents kill workers and motorists every year.",
          "The controls come from OSHA 1926 Subpart G (signs, signals, and barricades) and the Manual on Uniform Traffic Control Devices (MUTCD, Part 6), which set how work zones are laid out and how flaggers direct traffic. The goal is a predictable path for drivers and a protected space for the crew."
        ]
      },
      {
        heading: "Lay the zone out right",
        body: [
          "A work zone guides traffic through in stages so drivers aren't surprised:",
          {
            list: [
              "Advance warning signs far enough back to give drivers time to react.",
              "A transition (taper) with channelizing devices — cones, drums, barricades — that moves traffic over gradually.",
              "A buffer space between traffic and the work area — keep it empty; it's the crash cushion.",
              "The activity area where the crew works, kept separated from live lanes.",
              "A termination area that returns traffic to normal."
            ]
          },
          "Positive barriers (concrete, water-filled) where speeds and exposure are high; cones and drums only channelize — they don't stop a vehicle."
        ]
      },
      {
        heading: "Flagger duties",
        body: [
          "A flagger controls traffic and is exposed to it, so the rules are strict:",
          {
            list: [
              "Trained in the MUTCD flagging methods and using a STOP/SLOW paddle (the primary device).",
              "High-visibility safety apparel — ANSI/ISEA 107 — and at night, retroreflective gear plus a lighted work zone.",
              "Stand where you're visible and have an escape route; never stand in the open lane or between two-way traffic with your back turned.",
              "Give clear, standard signals; make eye contact with drivers; stay alert for the one who isn't slowing.",
              "Stay in position and in communication with the other flagger on two-way control."
            ]
          }
        ]
      },
      {
        heading: "Keep the crew separated",
        body: [
          "Everyone in the zone wears high-visibility clothing, not just the flagger. Park equipment to shield the crew from traffic where you can, and keep workers out of the buffer space and out of the blind side of vehicles backing or turning inside the zone.",
          "The public-protection side of barricades, signage, and pedestrian routing is covered in depth under Site Access and Public Protection — coordinate the two so the plan is one plan."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/parking-shutdown-and-securing-equipment": {
    description:
      "How OSHA 1926.600 says to leave a vehicle: brakes set, blades down, wheels chocked on a grade, and lights or barricades on anything left near traffic.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A parked vehicle isn't a safe vehicle until it's secured. Machines roll off grades, buckets drop, and unlit equipment left by a road gets hit at night. OSHA 1926.600 sets how equipment is parked and shut down so it stays put and stays visible.",
          "The habit is short: park it, ground the attachments, set the brake, chock if there's any grade, shut it down, and mark it if it's near traffic."
        ]
      },
      {
        heading: "Shutdown sequence",
        body: [
          "Before you leave the seat, OSHA 1926.600(a)(3) and good practice call for:",
          {
            list: [
              "Lower blades, buckets, forks, and any raised attachment fully to the ground.",
              "Set the parking brake.",
              "Chock the wheels whenever the equipment is parked on an incline — the brake alone isn't the plan on a grade.",
              "Shift to neutral/park, shut off the engine, and secure the controls.",
              "Take the key or otherwise secure it against unauthorized use."
            ]
          },
          "Never leave a machine running and unattended, and never leave one parked with a load or attachment up in the air."
        ]
      },
      {
        heading: "Left near traffic or overnight",
        body: [
          "OSHA 1926.600(a)(3)(i) is specific: equipment left unattended at night — adjacent to a highway in normal use, or adjacent to a construction area where work is in progress — must have lights or reflectors, or barricades with lights or reflectors, to mark where it is.",
          "So anything left by a live road overnight gets marked. A dark machine parked half in a lane is a fatal-crash waiting to happen for the crew and for the public."
        ]
      },
      {
        heading: "Where you park matters",
        body: [
          "Pick the spot on purpose: firm, level ground, clear of the swing of other equipment, out of haul-road and traffic lanes, and back from excavation edges and drop-offs where the ground could give way under a parked machine.",
          "Don't block emergency access, fire lanes, exits, or electrical panels. Park so the next crew — and any emergency vehicle — can get where it needs to go."
        ]
      }
    ]
  },

  "vehicle-and-driver-safety/driver-fatigue-distraction-and-fitness-to-operate": {
    description:
      "The condition of the driver is a safety control too — fatigue, phones, and impairment. Hours-of-service limits, the texting ban, and fitness to operate.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A vehicle in perfect shape is still only as safe as the person driving it. A tired, distracted, or impaired driver reacts late, drifts, and misjudges gaps — and at any speed with heavy equipment, late is enough. The driver's condition is a control you manage, same as brakes and mirrors.",
          "Two of the biggest killers on the road — fatigue and distraction — are the two most likely to get waved off as normal. They aren't."
        ]
      },
      {
        heading: "Fatigue and hours of service",
        body: [
          "Drowsy driving impairs you much like alcohol — slower reactions and lapses in attention. Long shifts, early starts, and monotonous hauls all build it.",
          "For drivers operating commercial motor vehicles on public roads, FMCSA hours-of-service rules set hard limits for property-carrying drivers:",
          {
            list: [
              "11 hours maximum driving, after 10 consecutive hours off duty.",
              "A 14-hour on-duty window — driving must stop 14 hours after coming on duty, even with breaks.",
              "A 30-minute break required after 8 cumulative hours of driving.",
              "A weekly cap of 60 hours in 7 days, or 70 hours in 8 days."
            ]
          },
          "On site, the same principle holds even where the FMCSA rule doesn't apply: rotate long or monotonous tasks, take real breaks, and pull over when you feel it — micro-sleeps give no warning."
        ]
      },
      {
        heading: "Distraction — hands, eyes, and mind",
        body: [
          "Distraction takes your hands off the wheel, your eyes off the path, or your mind off the task — and texting takes all three. FMCSA prohibits texting and hand-held phone use for CMV drivers (49 CFR 392.80 and 392.82), and it's the right rule for every vehicle on site.",
          "Set the route and phone before you move; if you need to call, text, or eat, stop the vehicle first. Reversing, spotting, and tight moves get your full attention — nothing else."
        ]
      },
      {
        heading: "Fitness to operate",
        body: [
          "Come to the seat fit to drive. That means:",
          {
            list: [
              "No alcohol or drugs — including impairing prescription and over-the-counter medications; check the label for drowsiness warnings.",
              "Rested, not driving through obvious exhaustion.",
              "Not driving through illness or an injury that limits your control.",
              "Seat, mirrors, and belt adjusted before you move."
            ]
          },
          "If you're not fit to drive, say so and hand it off. No load, no schedule, and no short trip is worth a vehicle you can't fully control."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/rigging-basics-and-the-qualified-rigger": {
    description:
      "What rigging is, the rules that govern it, and why OSHA requires a qualified rigger to attach and guide loads on a crane lift.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Rigging is how you connect a load to the hook so it lifts level, stays put, and comes down where you want it. Get it right and the lift is boring. Get it wrong and a load drops, swings into someone, or tips the crane. Most rigging failures trace back to three things: gear that should have been pulled out of service, a load nobody weighed, or people who didn't know what they were doing under the hook.",
          "Rigging gear is covered by OSHA 29 CFR 1926.251, and crane lifts add Subpart CC (1926.1400 and on). The rules come down to a few habits: inspect before you use it, never load past the rating, and put a qualified person on the rigging."
        ]
      },
      {
        heading: "The rules that govern rigging",
        body: [
          "Every piece of rigging has a rated capacity — the working load limit the maker set. That number is the ceiling, and you never go over it. Under 1926.251:",
          {
            list: [
              "Inspect rigging before use on each shift, and again during the shift as conditions change.",
              "Pull defective or damaged gear out of service immediately — don't hang it back on the rack.",
              "Never load a sling, shackle, or hook past its rated capacity.",
              "Every sling carries a durable, legible identification tag with its rated capacity and type. No tag, no lift — set it aside."
            ]
          },
          "Rated capacities are printed for a reason. A sling's capacity also changes with how you rig it — the angle and the hitch — which the later talks cover."
        ]
      },
      {
        heading: "Who is a qualified rigger",
        body: [
          "A qualified rigger isn't just whoever's standing closest to the hook. OSHA defines one as a person who, through a degree, certificate, or extensive knowledge, training, and experience, can solve problems related to the specific rigging in front of them. They know how to pick slings, read a load, figure the angles, and protect the gear from edges.",
          "Subpart CC requires a qualified rigger in specific moments — during assembly and disassembly when workers are in the fall zone, and whenever a worker in the fall zone is hooking, unhooking, or guiding a load, or doing the initial connection to a structure (1926.1425(c)). In those moments the person on the rigging must be qualified, not just available."
        ]
      },
      {
        heading: "Before every lift",
        body: [
          "Whoever rigs the load owns these questions before it leaves the ground:",
          {
            list: [
              "How much does it weigh, and is that inside the crane's and the rigging's rating?",
              "Where's the center of gravity, and will it lift level?",
              "Is the gear the right type, inspected, and protected from sharp edges?",
              "Who's clear of the fall zone, and who's giving signals?"
            ]
          },
          "If any answer is a guess, stop and get it right. A rigging job is planned on the ground, not fixed in the air."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/sling-types-and-how-to-choose-one": {
    description:
      "The main sling families — wire rope, alloy steel chain, and synthetic web or round — and how to match the right one to the load, the edges, and the environment.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The sling is the link between the hook and the load, and picking the wrong one is how a lift goes bad before it starts. Each type has jobs it's good at and jobs that ruin it. Chain shrugs off heat and rough edges but is heavy. Wire rope is a solid all-rounder. Synthetic slings are gentle on finished surfaces but a sharp corner will cut one in half.",
          "Match the sling to the load, the edges it wraps, the temperature, and the environment. And whatever you grab, it has to carry a legible tag with its rated capacity, size, and type."
        ]
      },
      {
        heading: "The main sling families",
        body: [
          "Four types cover most site work:",
          {
            list: [
              "Alloy steel chain — tough, takes heat and abrasion, good for rough or hot loads and repeated hard use. For overhead lifting it must be alloy steel, never hardware-store proof coil chain.",
              "Wire rope — the general-purpose workhorse; strong and reasonably flexible, but broken wires and kinks retire it.",
              "Synthetic web (nylon or polyester) — flat, flexible, light, and easy on finished or fragile surfaces; cuts, abrades, and burns easily.",
              "Synthetic round slings — an endless polyester core in a protective cover; strong for their weight, mold to the load, and a worn cover warns you before the core."
            ]
          },
          "Metal mesh and fiber rope slings show up for special cases — mesh for edges and heat, fiber for delicate light loads."
        ]
      },
      {
        heading: "Choosing the right one",
        body: [
          "Walk through the load before you pick:",
          {
            list: [
              "Weight — is the sling's rated capacity above the load share it'll carry at the angle you'll rig?",
              "Edges — sharp corners cut synthetics fast; use chain or wire rope, or protect the sling with softeners.",
              "Temperature — synthetic web and round slings have real heat limits (commonly around 180 to 194 degrees F for polyester and nylon); chain and wire rope take far more.",
              "Environment — nylon weakens in acids, polyester in strong alkalis; chemicals and sunlight degrade synthetics over time.",
              "The surface — a polished or coated load calls for a soft sling that won't mar it."
            ]
          }
        ]
      },
      {
        heading: "Every sling needs a tag",
        body: [
          "No sling goes on the hook without a durable, readable identification tag. Depending on type it shows the rated capacity, the size, the material or grade, and the maker. If the tag is missing or you can't read it, you don't know the rating — so the sling is out of service until it's identified.",
          "Store slings off the ground, out of the weather and sun, and away from chemicals. A sling that lives in mud and sunlight won't last, and you won't be able to trust the tag when it counts."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/wire-rope-slings-inspection-and-removal-criteria": {
    description:
      "How to inspect a wire rope sling and the specific defects — broken wires, kinks, wear, and heat damage — that require you to take it out of service.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Wire rope slings are the workhorse of the yard, and they fail from the inside out. A rope that looks fine can be hiding broken wires, crushing, or heat damage that dropped its strength well below the rating. That's why OSHA 1926.251(c) wants them inspected before use on each shift and pulled the moment they hit a removal criterion.",
          "You're looking and feeling for damage along the whole length and especially at the end fittings, where most breaks start. Run a rag along it — snags catch broken wires you'd miss by eye."
        ]
      },
      {
        heading: "Broken-wire removal limits",
        body: [
          "The clearest retirement rule is broken wires. For a wire rope sling, take it out of service when you find:",
          {
            list: [
              "Ten randomly distributed broken wires in one rope lay, or",
              "Five broken wires in one strand in one rope lay."
            ]
          },
          "A rope lay is one full wrap of a strand around the rope. Broken wires cluster where the rope bends over the hook and at the swaged or spliced end fittings — check those areas closely, because a break at the end connection is an automatic removal."
        ]
      },
      {
        heading: "Other damage that retires a sling",
        body: [
          "Broken wires aren't the only killers. Pull the sling if you find:",
          {
            list: [
              "Kinking, crushing, birdcaging, or any distortion of the rope structure.",
              "Evidence of heat damage — from a torch, an arc, or a fire.",
              "End attachments that are cracked, deformed, or worn.",
              "Hooks opened more than 15 percent of the normal throat, or twisted more than 10 degrees.",
              "Severe corrosion of the rope, end fittings, or clips.",
              "Wear that has worn away a third of the original diameter of the outside individual wires."
            ]
          },
          "Any one of these is enough. You don't average defects or hope it holds — a retired sling is retired."
        ]
      },
      {
        heading: "End connections and clips",
        body: [
          "How the eye is made matters as much as the rope. A swaged or spliced eye should be clean and undamaged; an eye splice must have at least three full tucks. When wire rope clips form the connection, they have to be the right number, sized to the rope, and spaced per the maker — and the saddle goes on the live (load) side with the U-bolt on the dead end. The old line is 'never saddle a dead horse.'",
          "Protect the rope in service: pad sharp corners, don't drag slings out from under loads, and don't shorten a wire rope sling with knots or bolts. When a sling reaches any removal criterion, cut the eye or tag it so it can't be picked back up by mistake."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/alloy-steel-chain-slings-inspection-and-use": {
    description:
      "Why overhead chain slings must be alloy steel, how to inspect for stretch, wear, and cracks, and the periodic-inspection recordkeeping OSHA requires.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Chain slings take abuse that would kill a synthetic — heat, sharp edges, rough repeated lifts — which is why they show up on the heavy, dirty jobs. But that toughness hides trouble: a stretched or cracked link doesn't look dramatic right before it lets go. Alloy steel chain slings are covered by OSHA 1926.251(b), and the rules are strict because these carry the heavy loads.",
          "First rule: only alloy steel chain is allowed for overhead lifting. Proof coil or hardware-store chain is not rated for it, no matter how heavy it looks."
        ]
      },
      {
        heading: "The identification tag",
        body: [
          "Every welded alloy steel chain sling carries a permanently affixed, durable identification tag showing its size, grade, rated capacity, and reach. Any hooks, rings, oblong links, or coupling links attached to the chain must have a rated capacity at least equal to the chain itself — a Grade 100 chain with a weak hook is only as strong as the hook.",
          "No tag or an unreadable tag means you don't know the rating. That sling is out of service until it's identified."
        ]
      },
      {
        heading: "Inspecting for wear and damage",
        body: [
          "Go link by link, and check the hooks and connectors too. Remove the sling from service for:",
          {
            list: [
              "Cracks, nicks, or gouges in any link.",
              "Stretch — links that have elongated or a chain that's grown longer than its marked reach.",
              "Bent, twisted, or otherwise distorted links.",
              "Wear at any point of a link beyond the manufacturer's allowance (OSHA Table H-2).",
              "Heat damage, weld splatter, or evidence of burning.",
              "Hooks that are opened, worn, twisted, or missing a working latch."
            ]
          },
          "Don't repair a chain sling in the field. No shortening it with knots, bolts, or makeshift links, and no welding or heating a link back into shape — repairs must go through a qualified source and be proof-tested."
        ]
      },
      {
        heading: "Periodic inspection and records",
        body: [
          "Beyond the shift inspection, OSHA requires a thorough periodic inspection at intervals no greater than 12 months, with the employer keeping a record of the most recent inspection. The interval tightens with heavy service, severe conditions, or a sling's history — hard-used chain gets looked at more often.",
          "Heat also cuts capacity: alloy chain can work at elevated temperatures, but rated capacity drops as temperature climbs, so check the maker's derating before lifting hot loads. When a link fails any criterion, pull the whole sling — one bad link condemns it."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/synthetic-web-and-round-slings-inspection-and-protection": {
    description:
      "The removal criteria for nylon and polyester web and round slings, plus how to protect soft slings from the sharp edges and chemicals that destroy them.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Synthetic slings — flat web and covered round slings — are light, flexible, and gentle on finished surfaces, which makes them the go-to for delicate or coated loads. The trade-off is that they're fragile in ways steel isn't: a sharp edge cuts one in a single lift, and acids, alkalis, and sunlight quietly rot the fibers. OSHA 1926.251(e) sets the removal criteria for web slings, and round slings follow the same logic.",
          "Because the damage is easy to miss, you inspect the full length before every use and protect the sling from anything that can cut or burn it."
        ]
      },
      {
        heading: "Web sling removal criteria",
        body: [
          "Take a synthetic web sling out of service for any of these (1926.251(e)):",
          {
            list: [
              "Acid or caustic burns.",
              "Melting or charring of any part of the sling.",
              "Snags, punctures, tears, or cuts.",
              "Broken or worn stitches, especially in the load-bearing splices.",
              "Distortion of end fittings, or fittings that are cracked, pitted, or corroded.",
              "A missing or unreadable identification tag."
            ]
          },
          "Any one of these retires the sling. Fibers don't heal — a cut web sling is scrap, not a repair job."
        ]
      },
      {
        heading: "Round slings and their warning covers",
        body: [
          "A round sling is an endless bundle of load-bearing yarns inside a protective cover. The cover is a warning system: it wears first. Inspect the cover for cuts, snags, abrasion, and heat damage — and if you can see the inner core or a colored warning yarn showing through, the sling is done.",
          "Because you can't see the core directly, treat any cover damage seriously. Feel along the whole length for lumps, hard spots, or thin areas that signal core damage underneath."
        ]
      },
      {
        heading: "Protecting soft slings in use",
        body: [
          "Most synthetic-sling failures are avoidable with a little protection:",
          {
            list: [
              "Pad every sharp corner and edge with sleeves, wear pads, or corner protectors — a plate edge will slice through webbing under load.",
              "Keep slings off the ground and out of grit; abrasion and embedded dirt cut fibers from the inside.",
              "Match the material to the chemistry — nylon resists many acids but not strong alkalis; polyester is the opposite.",
              "Store out of direct sunlight; UV breaks down synthetic fibers over time.",
              "Don't drag a load across a sling or pull the sling out from under a set-down load."
            ]
          }
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/rated-capacity-sling-angles-and-load-charts": {
    description:
      "Why the tension in a sling leg climbs as the angle flattens, how to read a load angle factor, and why sling angles under 30 degrees are dangerous.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The number stamped on a sling is its rated capacity in a straight pull. The moment you rig two legs at an angle, each leg carries more than its share of the load — and the flatter the angle, the worse it gets. Riggers get surprised by this because the load didn't get heavier, but the tension in the sling did.",
          "Understanding sling angle is the difference between a sling working at half its rating and a sling working past it. This is basic geometry, and the load doesn't forgive it."
        ]
      },
      {
        heading: "Why angle multiplies the load",
        body: [
          "Measure the sling angle from horizontal. As that angle drops, the tension in each leg climbs fast. For a load split evenly between two legs:",
          {
            list: [
              "At 90 degrees (straight up) — each leg carries its plain share.",
              "At 60 degrees from horizontal — tension is about 1.15 times the vertical share.",
              "At 45 degrees — about 1.41 times.",
              "At 30 degrees — about 2 times the vertical share."
            ]
          },
          "So a 2,000-pound load split between two legs is 1,000 pounds per leg straight up, but roughly 2,000 pounds per leg at a 30-degree angle. The horizontal pull also tries to crush or collapse the load inward."
        ]
      },
      {
        heading: "Reading load charts and angle factors",
        body: [
          "Sling capacity charts list a rated capacity for each hitch and often a load angle factor for each angle. To find the real capacity at your angle, apply the factor from the chart — don't eyeball it. Two more things change the number:",
          {
            list: [
              "The D/d ratio — bending a sling around a small-diameter pin or a tight corner reduces its capacity; keep the load-contact diameter generous.",
              "Load distribution — with three or more legs, the load may not actually split evenly, so rig assuming the worst-loaded legs carry more."
            ]
          },
          "Two legs never means double capacity. The rating depends on the angle and how the load shares out."
        ]
      },
      {
        heading: "Keep the angle up",
        body: [
          "The practical rule: keep sling angles as steep as you can, and never go below 30 degrees from horizontal — OSHA and ASME guidance treat angles under 30 degrees as a condition to avoid because the tension runs away and the load-crushing force gets extreme.",
          "If the angle is coming out too flat, use longer slings, a spreader bar, or a different pick point to open it back up. Fixing the geometry on the ground is cheap; overloading a sling in the air is not."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/hitches-vertical-choker-and-basket": {
    description:
      "The three basic hitches — vertical, choker, and basket — how each changes a sling's capacity, and when to use each one.",
    sections: [
      {
        heading: "Overview",
        body: [
          "How you wrap the sling around the load is the hitch, and it changes both how much the sling can carry and how well the load stays put. The three basics are vertical, choker, and basket. Pick the wrong one and you either overload the sling or let the load slip out of it.",
          "Each hitch has a rated capacity — usually printed right on the sling tag for all three — because the same sling carries very different loads depending on how it's rigged."
        ]
      },
      {
        heading: "Vertical (straight) hitch",
        body: [
          "A vertical hitch is a single sling straight from the hook to the load — the full rated capacity, since the sling pulls in a straight line. It's simple and strong, but it does nothing to keep the load from spinning or tipping.",
          "Use it for a load that's balanced and won't rotate, or add a tag line to control spin. A single vertical hitch on an unbalanced load will let it swing and turn under the hook."
        ]
      },
      {
        heading: "Choker hitch",
        body: [
          "A choker hitch loops the sling around the load and back through itself, cinching down to grip. It's how you grab pipe, bundles, and loose material that a basket would let slide. The catch is capacity: a choker reduces the sling's rating — commonly to about 75 to 80 percent of vertical — because of the sharp bend where it chokes.",
          "That reduction assumes a wide choke angle (around 120 degrees or more). Cinch the loop tighter than that and the capacity drops further. A single choker also doesn't fully lock a load against sliding — for a long load, use two chokers spread apart."
        ]
      },
      {
        heading: "Basket hitch",
        body: [
          "A basket hitch cradles the load with the sling passing under it and both ends on the hook. With the legs vertical it can carry up to twice the vertical rating, since two sling parts share the load — but that doubling only holds when the legs are straight up. As the basket legs angle in, the same angle math from the load-chart talk cuts the capacity right back down.",
          "A basket only works if the load is balanced and won't roll or slip out of the cradle. Watch the D/d ratio where the sling bends under the load, and keep the pick points spread so the load rides level. When in doubt about slip, choke it instead."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/rigging-hardware-shackles-hooks-and-eyebolts": {
    description:
      "How to select and inspect the connecting hardware — shackles, hooks, and eyebolts — and the loading mistakes that quietly cut their capacity.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Slings get the attention, but the load usually hangs off a shackle, a hook, or an eyebolt — and a lift is only as strong as its weakest connector. OSHA 1926.251(f) covers shackles and hooks, and the theme is the same as slings: use the rated capacity, inspect before use, and load it the way it was designed to be loaded.",
          "Most hardware failures aren't mystery breaks. They're a side-loaded eyebolt, a shackle pin replaced with a bolt, or a load riding on the tip of a hook."
        ]
      },
      {
        heading: "Shackles",
        body: [
          "Use the shackle's rated capacity (OSHA Table H-19 lists safe working loads) and never exceed it. A few rules keep them honest:",
          {
            list: [
              "Match the pin to the shackle — never replace a shackle pin with a random bolt; the bolt isn't rated for it.",
              "Screw-pin shackles can back out under a rotating load; use a bolt-type (with nut and cotter pin) for long-term or dynamic pulls.",
              "Load in line with the shackle; side-loading reduces the rating and has to be figured with the maker's reduction.",
              "Retire a shackle that's bent, stretched, worn, corroded, or has a pin that won't seat fully."
            ]
          }
        ]
      },
      {
        heading: "Hooks",
        body: [
          "Hooks follow the manufacturer's rated capacity, and most lifting hooks need a working safety latch to keep the sling from jumping out. Load rides in the bowl (the saddle) of the hook, never on the tip — tip-loading can cut a hook's capacity dramatically. Pull a hook from service when you find:",
          {
            list: [
              "A throat opening stretched more than 15 percent beyond normal.",
              "A twist of more than 10 degrees from the plane of the hook.",
              "Cracks, gouges, sharp wear, or a latch that won't close and hold."
            ]
          }
        ]
      },
      {
        heading: "Eyebolts and other connectors",
        body: [
          "Eyebolts are the most misused connector on site because angled pulls quietly overload them. Key points:",
          {
            list: [
              "Use shoulder-type eyebolts for any angled load, and seat the shoulder flush against the surface.",
              "An angled pull sharply reduces an eyebolt's capacity — a side load can drop it to a fraction of the straight-pull rating, so keep the pull aligned with the eye or use a swivel hoist ring.",
              "Thread the eyebolt fully into the tapped hole; partial engagement strips the threads under load.",
              "For turnbuckles and wire rope clips, follow the maker's torque and orientation — clips get the saddle on the live side, tightened to spec."
            ]
          },
          "Inspect all hardware before use, and treat the connector with the same respect as the sling — it's carrying the same load."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/determining-load-weight-and-center-of-gravity": {
    description:
      "How to find a load's true weight before you lift, and how to rig to the center of gravity so it lifts level and doesn't tip.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Two numbers decide whether a lift is safe before any gear touches it: how much the load weighs, and where its center of gravity sits. Guess the weight and you can overload the sling or tip the crane. Miss the center of gravity and the load lifts crooked, swings, or flips as it clears the ground.",
          "Neither is optional. Overloading from a bad weight guess is one of the top causes of rigging and crane failures, and it's completely preventable."
        ]
      },
      {
        heading: "Finding the real weight",
        body: [
          "Never guess a load's weight. Get it from a reliable source:",
          {
            list: [
              "Shipping papers, packing lists, or the manufacturer's name plate.",
              "Engineered or fabrication drawings that list weights.",
              "A calculation from volume and material density — steel is about 490 pounds per cubic foot, concrete about 150, water about 62.4.",
              "A load-indicating device or crane scale when nothing else is reliable."
            ]
          },
          "Add for anything riding along — water trapped inside, mud, ice, attached rigging, and the below-the-hook devices. A tank that's 'empty' may be holding hundreds of pounds of residue."
        ]
      },
      {
        heading: "Rigging to the center of gravity",
        body: [
          "The center of gravity is the point the load balances around. For a level lift, the hook has to end up directly above it — otherwise the load will swing under the hook until it finds that balance, and that swing is where people get struck.",
          "For a load that isn't symmetrical, the center of gravity is off to the heavy side, so you adjust: move the pick points or use different sling lengths so the hook lands over the true center. If the load lifts and immediately tilts, set it down — the rig isn't over the center of gravity."
        ]
      },
      {
        heading: "Stability and pick points",
        body: [
          "Where the slings attach relative to the center of gravity decides whether the load is stable. Attach above the center of gravity and the load hangs stable like a pendulum. Attach at or below it and the load can roll or flip the instant it's free.",
          "Spread the pick points wide enough to keep the load level and resist tipping, and keep the sling angles up. When a load is tall, top-heavy, or oddly shaped, plan the pick points deliberately — a tag line controls rotation, but only good geometry keeps the load from turning over."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/planning-the-lift-the-lift-plan-and-roles": {
    description:
      "What goes into a lift plan, when a lift is critical enough to need a written one, and who does what — operator, rigger, signal person, and lift director.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Every lift has a plan, even if it's a quick one in your head for a light, routine pick. The bigger, heavier, or riskier the lift, the more the plan needs to be written down and walked through before anyone touches the controls. The plan is where weight, crane capacity, rigging, ground, path, and signals all get checked against each other — on the ground, where mistakes are cheap.",
          "A lift plan also settles who's in charge of what. Confusion over roles — two people signaling, nobody watching the load path — is how good gear still ends in an incident."
        ]
      },
      {
        heading: "What a lift plan covers",
        body: [
          "A solid plan answers all of these before the pick:",
          {
            list: [
              "Load weight and center of gravity, including rigging and anything trapped inside.",
              "Crane configuration, the radius, and the capacity from the load chart at that radius — with real margin, not right at the line.",
              "Rigging selection — sling type, hitch, angles, and hardware, all rated above the load.",
              "Ground conditions and the setup — outriggers, mats, level.",
              "The load path and the exclusion zone, including overhead obstructions and power lines.",
              "Signals, communication method, and the weather limits that stop the lift."
            ]
          }
        ]
      },
      {
        heading: "When a lift is critical",
        body: [
          "Some lifts carry enough risk that they get a written, engineered plan and a pre-lift meeting. Treat a lift as critical when it's:",
          {
            list: [
              "Near the crane's rated capacity for the configuration.",
              "A multi-crane or tandem pick.",
              "Over occupied buildings, live process equipment, or the public.",
              "A personnel lift, or a pick where a drop would be catastrophic.",
              "Unusual — blind, complex rigging, or a one-of-a-kind load."
            ]
          },
          "Critical lifts get more eyes, tighter margins, and a plan on paper that everyone reviews before the pick."
        ]
      },
      {
        heading: "Who does what",
        body: [
          "Clear roles keep the lift from turning into a crowd around the load:",
          {
            list: [
              "Operator — runs the crane, owns the right to refuse or stop an unsafe lift.",
              "Qualified rigger — selects and attaches the rigging and reads the load.",
              "Qualified signal person — directs crane movement when the operator can't see the load or the path.",
              "Lift director or supervisor — oversees the whole operation and makes the call on go or no-go."
            ]
          },
          "One person signals at a time. But a stop signal from anyone on the crew gets honored, no questions asked."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/crane-signals-and-communication": {
    description:
      "When a signal person is required, the standard methods of communication, and the rules that keep crane signaling clear and unambiguous.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A crane operator often can't see the load, the landing spot, or the path in between. That's what the signal person is for — the operator's eyes. When signaling breaks down, the operator is running blind, and blind moves are how loads hit people and structures. OSHA Subpart CC (1926.1419 through 1422) sets the rules for how crane signals work.",
          "The whole system depends on one thing: clear, agreed, unambiguous communication between one operator and one signal person."
        ]
      },
      {
        heading: "When a signal person is required",
        body: [
          "You need a designated signal person whenever:",
          {
            list: [
              "The point of operation — where the load is being landed or handled — is not in full view of the operator.",
              "The operator's view is obstructed in the direction the crane or load is traveling.",
              "Site or safety concerns (near power lines, tight clearances) make signals necessary even if there's some view."
            ]
          },
          "If none of those apply and the operator has a clear view the whole time, a signal person may not be required — but the moment the view is blocked, someone qualified has to take over the eyes."
        ]
      },
      {
        heading: "Methods of communication",
        body: [
          "Signals come in three forms, and everyone agrees on which before the lift:",
          {
            list: [
              "Hand signals — use the Standard Method (the ASME B30 hand signals), and post a chart of them at the site.",
              "Voice signals — over a dedicated radio channel; the signal person names the function, the direction, the distance, and calls the stop.",
              "Audible signals — horn or whistle patterns, agreed and understood before the lift."
            ]
          },
          "For hand signals the signal person stays in clear view of the operator. For radio, the channel is dedicated and working — and if communication is lost, all crane movement stops until it's back."
        ]
      },
      {
        heading: "Rules that keep signals safe",
        body: [
          "A few rules prevent mixed messages:",
          {
            list: [
              "One designated signal person per lift — the operator takes direction from that person only.",
              "The signal person must be qualified: they know the signals, can judge clearances and load travel, and understand the crane's operation.",
              "A stop signal from anyone on the crew is obeyed immediately, no matter who gives it.",
              "If the operator doesn't understand a signal, the operator stops and holds until it's clear."
            ]
          },
          "Never guess at an unclear signal. A held load is safe; a guessed move is not."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/working-around-suspended-loads-and-tag-lines": {
    description:
      "The fall zone rule, why nobody works under a suspended load, and how tag lines control a load safely from a distance.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A suspended load is stored energy hanging in the air. If it drops, swings, or rotates, anyone underneath or in its path is in serious trouble — and loads do all three when a sling slips, the wind picks up, or the pick is off balance. The core rule is simple and OSHA backs it up in 1926.1425: stay out from under the load and out of the fall zone.",
          "You control a load from a safe distance, not by putting hands on it in the air. That's what tag lines are for."
        ]
      },
      {
        heading: "The fall zone",
        body: [
          "The fall zone is the area the load could reach if it fell during the lift — not just straight down, but where it could swing or roll. While the boom is being raised, lowered, or swung, no one is allowed in the fall zone except the workers actually needed to hook, unhook, guide, or make the initial connection.",
          "Even those workers only stay in the zone under specific conditions: the load is rigged to prevent it from shifting, the hooks have working latches, and the connection is done by someone qualified. Everyone else routes around and waits for the load to land."
        ]
      },
      {
        heading: "Using tag lines",
        body: [
          "A tag line is a rope tied to the load so a worker can steady it and control rotation from off to the side, well clear of the fall zone. Use one when the load is long, has sail area, or could spin — wind and momentum turn a free-hanging load, and a tag line keeps it aimed.",
          "Handle tag lines right: keep enough distance to stay out from under the load, never wrap the line around your hand or body, and let go rather than get pulled in if the load lurches. Near power lines, use a non-conductive tag line — a wet rope can carry current."
        ]
      },
      {
        heading: "Rules for staying clear",
        body: [
          "A few habits keep the load path safe:",
          {
            list: [
              "Never walk or stand under a suspended load, even for a second.",
              "Never ride the load, the hook, or the ball.",
              "Plan the load path to keep it away from workers, and warn crews before the load moves overhead.",
              "Watch the swing radius of the crane's counterweight as well — the back end sweeps a crush zone as it rotates."
            ]
          },
          "If a load is drifting toward someone, the signal person calls the stop and the load holds until the area is clear."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/mobile-crane-setup-ground-conditions-outriggers-and-power-lines": {
    description:
      "Setting a mobile crane on firm ground, deploying outriggers on proper cribbing, and keeping the required clearance from overhead power lines.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A mobile crane is only as stable as what it's parked on and how it's set up. Most crane tip-overs and collapses trace back to the setup — soft ground under an outrigger, pads that weren't big enough, or a boom that swung into a power line. OSHA Subpart CC covers this ground: 1926.1402 for ground conditions and 1926.1408 for power lines.",
          "The setup is done before the first pick, deliberately, with the load chart in hand — not adjusted on the fly once the crane is working."
        ]
      },
      {
        heading: "Ground conditions",
        body: [
          "The crane needs ground that's firm, drained, and graded enough — with supporting materials like mats, cribbing, or blocking — to hold it and the load without settling. The controlling entity is supposed to tell the crane crew about hazards it knows of underneath: voids, backfilled trenches, buried utilities, and septic or basement areas that could collapse under an outrigger.",
          "Set outriggers over solid support, and watch for ground that looks fine but hides trouble — recent backfill, a covered trench, or saturated soil after rain can give way under load."
        ]
      },
      {
        heading: "Outriggers and stabilizers",
        body: [
          "Outriggers put the crane's stability where the load chart assumes it is. Set them up right:",
          {
            list: [
              "Extend outriggers or stabilizers fully, or to the exact position the load chart specifies for a partial setup — and use the matching chart.",
              "Set the pads on cribbing or mats sized to spread the load over enough ground; a small float on soft soil will punch through.",
              "Get the crane level, within the manufacturer's tolerance (commonly about 1 percent) — an out-of-level crane loses capacity fast.",
              "When required, get the tires up off the ground so the outriggers carry the load, not the suspension."
            ]
          }
        ]
      },
      {
        heading: "Power lines and swing radius",
        body: [
          "Assume every overhead line is energized until the utility confirms it's deenergized and grounded. Keep the crane, load, and rigging clear per OSHA Table A (1926.1408):",
          {
            list: [
              "Up to 50 kV — at least 10 feet of clearance.",
              "Over 50 kV up to 200 kV — at least 15 feet.",
              "Higher voltages need more; when the voltage is unknown, keep the larger clearance until you confirm it."
            ]
          },
          "If you can't guarantee the clearance, the options are to deenergize and ground the line, or use the encroachment-prevention measures Subpart CC requires (a dedicated spotter, warnings, and range-control devices). And barricade the crane's swing radius (1926.1424) so no one can walk into the space the rotating superstructure and counterweight sweep through."
        ]
      }
    ]
  },

  "rigging-and-material-handling-equipment/material-storage-stacking-and-housekeeping": {
    description:
      "How to store and stack materials so they don't slide or collapse — the height limits, taper rules, and blocking OSHA 1926.250 requires — plus the housekeeping that keeps a lay-down area safe.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Material handling isn't just what hangs off a crane — it's the pipe, brick, block, lumber, and steel stacked around the site. Stacked material that slides, rolls, or collapses crushes feet, pins legs, and buries people, and it happens in the lay-down yard where nobody's thinking about a lift. OSHA 1926.250 sets the rules for storing and stacking so a pile stays a pile.",
          "The theme is stability: stack it so it can't slide or topple, keep it off the walkways, and don't load a floor past what it can hold."
        ]
      },
      {
        heading: "General storage rules",
        body: [
          "Whatever you're staging, the basics from 1926.250(a) hold:",
          {
            list: [
              "Store material so it's stable and secured against sliding, rolling, or collapse.",
              "Post the maximum safe load limits for floors and don't exceed them — stored material can overload a deck.",
              "Keep aisles and passageways clear, in good repair, and wide enough for the equipment that uses them.",
              "Keep storage clear of exits, stairways, and fire equipment, and back at least the required distance from openings and edges."
            ]
          }
        ]
      },
      {
        heading: "Stacking heights and taper rules",
        body: [
          "Different materials have specific stacking rules under 1926.250(b):",
          {
            list: [
              "Brick — no higher than 7 feet; once a stack passes 4 feet, taper it back 2 inches for every foot of height above 4 feet.",
              "Masonry block — when stacked over 6 feet high, taper back one-half block per tier above the 6-foot level.",
              "Lumber — pull or bend over protruding nails, and stack it stable and self-supporting; manually-handled stacks no higher than 16 feet, and 20 feet when handled by forklift.",
              "Bagged material — stack it by stepping back the layers and cross-keying the bags at least every 10 layers so it won't slump.",
              "Pipe, bar stock, poles, and structural steel — block, rack, or chock it to stop it rolling or sliding out of the pile."
            ]
          }
        ]
      },
      {
        heading: "Housekeeping in the lay-down area",
        body: [
          "A tidy storage area is a safe one. Under 1926.25, keep the site clear of scrap, form lumber, and debris as the work goes, and stage materials where they won't block routes or pinch a walkway. Watch for:",
          {
            list: [
              "Banding and dunnage left underfoot after a load is opened — trip and roll hazards.",
              "Loads leaned against walls, racks, or scaffolds that could topple when disturbed.",
              "Water, ice, or mud building up under a stack and softening its base."
            ]
          },
          "Restack anything that's shifted, and don't pull material from the bottom or the middle of a pile — take it off the top so the stack stays stable."
        ]
      }
    ]
  },

  "construction-safety/the-focus-four-hazards-in-construction": {
    description:
      "OSHA's Focus Four — falls, struck-by, caught-in/between, and electrocution — cause most construction deaths. What they are and how to keep them off your site.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Construction is one of the deadliest industries, and four hazard types cause most of the deaths. OSHA calls them the Focus Four (you'll also hear 'the Fatal Four'): falls, struck-by, caught-in/between, and electrocution. Together they account for roughly six of every ten construction worker deaths, and falls alone are the single biggest killer.",
          "Knowing the Focus Four isn't trivia — it's how you aim your attention. On any task, ask which of the four could get someone today, and make sure the control for it is already in place before work starts."
        ]
      },
      {
        heading: "The four hazards",
        body: [
          "Each of the four kills in a different way:",
          {
            list: [
              "Falls — from roofs, leading edges, ladders, scaffolds, and through floor holes. The #1 cause of construction death.",
              "Struck-by — hit by flying, falling, swinging, or rolling objects: vehicles, falling tools, swinging loads, flying particles.",
              "Caught-in or -between — trapped, crushed, or pinched: trench cave-ins, unguarded machinery, being pinned between equipment and a fixed object.",
              "Electrocution — contact with overhead or buried power lines, energized parts, damaged cords, or missing grounding."
            ]
          }
        ]
      },
      {
        heading: "Where each one gets covered",
        body: [
          "Two of the four have their own dedicated training here, and the two that don't are covered in this category:",
          {
            list: [
              "Falls → see Working at Heights for guardrails, harnesses, ladders, and scaffolds.",
              "Electrocution → see Electrical Safety for power lines, GFCIs, LOTO, and approach distances.",
              "Struck-by and Caught-in/between → covered directly in this Construction Safety category."
            ]
          },
          "Wherever a hazard is covered, the point is the same: the control goes in before the work, not after the close call."
        ]
      },
      {
        heading: "Beating the Focus Four every day",
        body: [
          "These deaths are predictable, which means they're preventable. A few habits cover most of it:",
          {
            list: [
              "Plan the task and name which of the four applies before you start.",
              "Guard the edge, guard the machine, guard the trench, and keep clear of suspended loads and swing radii.",
              "Treat every wire as live and keep the required distance from power lines.",
              "Wear the PPE the hazard calls for — hard hat, eye protection, hi-vis, fall protection.",
              "Stop the job if a control is missing; don't work around it."
            ]
          }
        ]
      }
    ]
  },

  "construction-safety/your-rights-and-responsibilities-under-osha": {
    description:
      "What OSHA guarantees you on a construction site — a safe workplace, training, PPE, and the right to speak up — and what your employer and you each owe in return.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Safety on a job site isn't a favor — it's the law. The Occupational Safety and Health Act of 1970 created OSHA and set a baseline: your employer has to give you a workplace free of recognized hazards that can seriously hurt or kill you. That's the General Duty Clause, and everything else builds on it.",
          "You have rights on that site, and you also have responsibilities. Knowing both is how you keep yourself and your crew protected."
        ]
      },
      {
        heading: "Your rights",
        body: [
          "As a construction worker in the US, you have the right to:",
          {
            list: [
              "A safe workplace, free of recognized serious hazards.",
              "Safety training in a language and vocabulary you understand.",
              "Necessary PPE — and your employer pays for most of it (OSHA 1926.28 and Subpart E).",
              "See records of work-related injuries, illnesses, and your own exposure monitoring.",
              "Raise a safety concern or file an OSHA complaint — and request an inspection — without being fired, demoted, or retaliated against (Section 11(c) of the OSH Act)."
            ]
          }
        ]
      },
      {
        heading: "Your employer's responsibilities",
        body: [
          "The employer carries the primary legal duty for safety on the site. Under OSHA 1926.20 and .21 they must:",
          {
            list: [
              "Find and fix hazards, and run an accident-prevention program with frequent, regular inspections by a competent person.",
              "Train every worker to recognize and avoid the hazards of their job.",
              "Provide the required PPE, guards, and protective systems.",
              "Not retaliate against a worker for reporting a hazard or injury."
            ]
          }
        ]
      },
      {
        heading: "Your responsibilities",
        body: [
          "Rights come with your part of the deal. On site you're expected to:",
          {
            list: [
              "Follow the safety rules and use the protections and PPE provided.",
              "Inspect your tools and equipment, and use them the way they're meant to be used.",
              "Report hazards, near misses, and injuries so they get fixed.",
              "Speak up and stop work when something isn't safe — for you or anyone around you."
            ]
          },
          "Safety works when the employer sets it up and the crew lives it out. Neither side can carry it alone."
        ]
      }
    ]
  },

  "construction-safety/new-worker-safety-orientation-and-training": {
    description:
      "Why new and young workers face the highest injury risk, what OSHA requires for training, and what a real site orientation covers before you pick up a tool.",
    sections: [
      {
        heading: "Overview",
        body: [
          "New workers get hurt more than anyone. A big share of serious injuries happen in the first weeks on a job, before someone has learned the site, the hazards, and how this crew does things. That's not because new workers are careless — it's because nobody walked them through what could hurt them yet.",
          "OSHA 1926.21 makes training the employer's job: every worker has to be instructed in recognizing and avoiding the unsafe conditions and the regulations that apply to their work. Orientation is where that starts."
        ]
      },
      {
        heading: "What the training rule requires",
        body: [
          "Under 1926.21(b), the employer must:",
          {
            list: [
              "Instruct each employee to recognize and avoid unsafe conditions, and know the regulations that apply to the work.",
              "Give added instruction for hazardous materials and special exposures — flammables, confined spaces, harmful substances.",
              "Deliver it so workers actually understand it — in a language and at a level they can follow."
            ]
          },
          "Training isn't a one-time signature. Toolbox talks, task-specific instruction, and refreshers keep it alive as the work and the hazards change."
        ]
      },
      {
        heading: "What a good orientation covers",
        body: [
          "Before a new worker starts, a solid site orientation walks through:",
          {
            list: [
              "The Focus Four and the specific hazards of this site and this task.",
              "Where the exits, first aid, eyewash, fire extinguishers, and assembly point are.",
              "How to report a hazard, a near miss, or an injury — and who to.",
              "The PPE required here and how to inspect and wear it.",
              "Stop-work authority — that anyone can stop a job that isn't safe.",
              "Who the competent person and supervisor are for the crew."
            ]
          }
        ]
      },
      {
        heading: "Looking out for new hands",
        body: [
          "Experienced workers make orientation real. If you've been on site a while, watch the new person's first days, answer the questions they're afraid to ask, and correct a bad habit before it becomes a scar.",
          "And if you're the new worker: it's never dumb to ask how a task is done safely or to say you haven't done something before. Speaking up on day one is how you make it to day one thousand."
        ]
      }
    ]
  },

  "construction-safety/job-hazard-analysis-and-pre-task-planning": {
    description:
      "How to break a job into steps, spot the hazards in each, and pick controls using the hierarchy of controls — before the work starts, not after someone gets hurt.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most incidents aren't freak accidents — they're hazards nobody looked for before the work started. A job hazard analysis (JHA), sometimes called an AHA or pre-task plan, is the fix: you break the task into steps, ask what could hurt someone at each step, and decide how to control it before anyone picks up a tool.",
          "Done right, it takes a few minutes and turns 'we've always done it this way' into 'here's exactly what could go wrong today and how we're stopping it.'"
        ]
      },
      {
        heading: "The three questions",
        body: [
          "A JHA answers three things for each step of the job:",
          {
            list: [
              "What are the steps? Break the task into the basic sequence of what actually gets done.",
              "What can hurt us at each step? Name the hazards — falls, struck-by, caught-in, electrical, chemical, heat, pinch points.",
              "How do we control each hazard? Decide the specific protection and who's responsible for it."
            ]
          },
          "Write it down, keep it short, and make it about this task in this spot today — not a generic form filed and forgotten."
        ]
      },
      {
        heading: "The hierarchy of controls",
        body: [
          "Not all controls are equal. Work down this order and use the strongest one you can, not just the easiest:",
          {
            list: [
              "Elimination — remove the hazard entirely (do it at ground level instead of at height).",
              "Substitution — swap in something less dangerous (a less toxic product).",
              "Engineering controls — guard, isolate, or ventilate so the hazard can't reach people.",
              "Administrative controls — procedures, training, rotation, warning signs.",
              "PPE — the last line, protecting the worker when the hazard can't be removed."
            ]
          },
          "PPE matters, but it's the bottom of the list for a reason — it only works if it's worn right every time, and it does nothing to remove the hazard itself."
        ]
      },
      {
        heading: "Making it a habit",
        body: [
          "The best JHA is the one the crew actually does. Run a short pre-task talk at the start of the shift and again when the job changes — new location, new crew, new weather, new equipment. Ask the people doing the work; they see hazards a form can't.",
          "And revisit it when conditions change mid-task. A plan built for dry ground in the morning may not hold after an afternoon of rain."
        ]
      }
    ]
  },

  "construction-safety/the-competent-person-and-daily-inspections": {
    description:
      "What OSHA means by a 'competent person,' why the definition includes authority to act, and how frequent inspections catch hazards before they cause injuries.",
    sections: [
      {
        heading: "Overview",
        body: [
          "OSHA uses the term 'competent person' all over its construction standards — excavations, scaffolds, fall protection, and more — because a lot of safety depends on someone qualified looking at the work and catching problems early. It's a specific legal role, not just 'the most experienced guy on the crew.'",
          "The competent person is a big part of how a site stays ahead of hazards instead of reacting to injuries."
        ]
      },
      {
        heading: "What 'competent person' actually means",
        body: [
          "Under OSHA 1926.32(f), a competent person is someone who meets both halves of the definition:",
          {
            list: [
              "Capable of identifying existing and predictable hazards in the surroundings or work that are unsanitary, hazardous, or dangerous, AND",
              "Has the authorization to take prompt corrective measures to eliminate them."
            ]
          },
          "Both halves matter. Knowing a trench is unsafe isn't enough — a competent person also has the authority to stop the work and fix it. Someone who can spot the hazard but can't act on it doesn't meet the definition."
        ]
      },
      {
        heading: "Where a competent person is required",
        body: [
          "Many standards specifically require one, including:",
          {
            list: [
              "Excavations — daily inspections of trenches and protective systems (Subpart P).",
              "Scaffolds — inspection before each shift (Subpart L).",
              "Fall protection — supervising and inspecting systems (Subpart M).",
              "Ladders, cranes, and others, each with its own competent-person duties."
            ]
          },
          "The specific qualifications change with the hazard — an excavation competent person knows soils and shoring; a scaffold one knows scaffold erection. Competence is task-specific."
        ]
      },
      {
        heading: "Frequent and regular inspections",
        body: [
          "OSHA 1926.20(b)(2) requires the employer's safety program to include frequent and regular inspections of the site, materials, and equipment by competent persons. That's the routine that catches a cracked ladder, a missing guardrail, a sloughing trench wall, or a frayed cord before it hurts someone.",
          "Inspections aren't just the competent person's job to do alone — the whole crew feeds it. When you flag a hazard, you're giving the competent person what they need to act. When they tell you to stop, that authority is exactly what the OSHA definition is about."
        ]
      }
    ]
  },

  "construction-safety/struck-by-hazards": {
    description:
      "The four kinds of struck-by hazards — flying, falling, swinging, and rolling objects — and the controls that keep vehicles, loads, and tools from hitting workers.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Struck-by is one of the Focus Four, and it covers any time a worker is hit by a moving object with enough force to injure. It's a leading killer on construction sites because moving objects are everywhere — vehicles, swinging loads, falling tools, flying debris — and it only takes one to catch someone in the wrong spot.",
          "Struck-by hazards break down into four types by how the object is moving: flying, falling, swinging, and rolling. Spot which type is in play and you know what control to use."
        ]
      },
      {
        heading: "The four types",
        body: [
          "Each type has its own sources and its own protection:",
          {
            list: [
              "Flying — particles or objects thrown by tools: grinding sparks, nail-gun misfires, chipped concrete. Guard the tool and wear eye and face protection.",
              "Falling — tools, materials, or loads dropped from above. Use toe boards, screens, hard hats, and never work directly under a load or overhead work.",
              "Swinging — crane loads, backhoe buckets, and materials that pivot. Stay out of the swing radius and use tag lines to control the load.",
              "Rolling — vehicles, equipment, and materials moving on the ground. Watch blind spots, use spotters and backup alarms, and stay out of the path."
            ]
          }
        ]
      },
      {
        heading: "Vehicles and mobile equipment",
        body: [
          "Vehicles and heavy equipment cause many of the worst struck-by injuries, especially backovers where an operator can't see a worker on foot. Protect yourself:",
          {
            list: [
              "Wear high-visibility clothing so operators can see you.",
              "Make eye contact with operators before you approach, and never assume they see you.",
              "Stay out of blind spots and the equipment's path and swing area.",
              "Use spotters, backup alarms, and internal traffic control to separate people from equipment."
            ]
          },
          "In highway work zones, the traffic itself is the struck-by hazard — see Vehicle and Driver Safety for flaggers, work-zone layout, and public traffic."
        ]
      },
      {
        heading: "Falling and flying objects",
        body: [
          "Keep objects from becoming projectiles:",
          {
            list: [
              "Secure tools and materials at height; use tool lanyards and don't pile loose material near edges.",
              "Install toe boards, screens, or debris nets where people work or pass below.",
              "Barricade or restrict the area under overhead work.",
              "Keep guards on saws, grinders, and pneumatic tools, and wear eye and face protection for any cutting, grinding, or fastening.",
              "Stack and brace masonry walls under construction — an unbraced wall can collapse and crush the crew below."
            ]
          },
          "And always wear your hard hat — it's the last defense when something does come down."
        ]
      }
    ]
  },

  "construction-safety/caught-in-and-caught-between-hazards": {
    description:
      "How workers get caught in, crushed by, or pinned between equipment and materials — and the guarding, LOTO, and clearance rules that prevent it.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Caught-in and caught-between is one of the Focus Four, and it's exactly what it sounds like: a worker gets squeezed, pinned, crushed, or caught between two objects, or pulled into machinery. The difference from struck-by is the force — struck-by is impact from a moving object; caught-in/between is being crushed, compressed, or trapped.",
          "These injuries are severe because the body can't take that kind of force. Trench cave-ins, unguarded machinery, and getting pinned by equipment are the big three."
        ]
      },
      {
        heading: "The main ways it happens",
        body: [
          "Watch for these situations:",
          {
            list: [
              "Cave-ins — an unprotected trench or excavation wall collapses and buries a worker. A cubic yard of soil weighs around 3,000 pounds.",
              "Unguarded machinery — hands, clothing, or hair pulled into rotating parts, gears, augers, or belts.",
              "Pinned between — caught between equipment and a wall, between a swinging load and a fixed object, or between two pieces of equipment.",
              "Collapsing materials — pipe, block, or material stacks that shift and trap a worker."
            ]
          }
        ]
      },
      {
        heading: "Machinery and equipment",
        body: [
          "Moving machine parts don't let go. Protect yourself:",
          {
            list: [
              "Keep machine guards in place over gears, belts, blades, and rotating parts — never remove or defeat them.",
              "Lock out and tag out energy before you service, clear a jam, or reach into equipment (see Electrical Safety for LOTO).",
              "Don't wear loose clothing, jewelry, or untied long hair near rotating equipment.",
              "Stay clear of pinch points between moving and fixed objects, and never position yourself between backing equipment and a wall."
            ]
          }
        ]
      },
      {
        heading: "Trenches and materials",
        body: [
          "The deadliest caught-in hazard is the trench. Never enter an excavation five feet or deeper without a protective system — sloping, shoring, or a trench box — and a competent person's inspection. The full detail lives in Excavation Safety, but the rule on any site is simple: no protective system, no entry.",
          "For stacked and stored materials, block and brace anything that could roll or shift, don't undercut a pile, and keep out of the collapse zone. When equipment is set up, respect the crush zones its counterweight and moving parts sweep through."
        ]
      }
    ]
  },

  "construction-safety/hand-and-power-tool-safety": {
    description:
      "Keeping hand and power tools safe — guards in place, tools in good repair, the right tool for the job — under OSHA 1926 Subpart I.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Tools are so routine that it's easy to forget they cause a steady stream of serious injuries — lacerations, amputations, eye injuries, electric shock. Most of it comes down to three things: a guard that's missing, a tool that's worn out, or the wrong tool forced into the job. OSHA 1926 Subpart I (sections 300 through 307) sets the rules.",
          "Whether it's a hammer or a table saw, the same idea holds: the tool has to be right for the task, in good shape, and used the way it was designed."
        ]
      },
      {
        heading: "Guards stay on",
        body: [
          "Under 1926.300, guards protect you from the parts of a tool that can catch, cut, or throw. The rules:",
          {
            list: [
              "Point-of-operation guarding — the spot where the tool does its work (the blade, the bit) must be guarded.",
              "Guard belts, gears, shafts, pulleys, and flywheels that someone could contact.",
              "Never remove or wedge back a guard to work faster — a guarded saw is slower than an ER visit.",
              "Anti-kickback devices, blade guards, and spreaders stay in place and functional."
            ]
          }
        ]
      },
      {
        heading: "Keep tools in good condition",
        body: [
          "A damaged tool is a hazard in your hand. Under 1926.301 and .302:",
          {
            list: [
              "Inspect before use; take damaged or defective tools out of service — don't just set them back on the rack.",
              "No mushroomed heads on chisels or impact tools, no split or loose handles, no dull or cracked blades.",
              "Electric power tools need a ground (three-prong) or double insulation, plus GFCI protection; never carry or hoist a tool by its cord.",
              "Use the right tool for the job — don't use a wrench as a hammer or a screwdriver as a pry bar."
            ]
          }
        ]
      },
      {
        heading: "Use and PPE",
        body: [
          "How you handle the tool finishes the job of staying safe:",
          {
            list: [
              "Wear eye and face protection for cutting, grinding, drilling, and fastening — flying particles are a top tool injury.",
              "Secure your work with a clamp or vise so both hands control the tool.",
              "Keep good footing and don't overreach, especially with a running tool.",
              "Disconnect power before changing blades or bits, clearing a jam, or making adjustments."
            ]
          },
          "Abrasive wheels and pneumatic tools have extra rules — see Compressed Gas and Air Tool Safety for air tools, whip checks, and the ring test on grinding wheels."
        ]
      }
    ]
  },

  "construction-safety/signs-signals-tags-and-barricades": {
    description:
      "How OSHA's accident-prevention signs, tags, signals, and barricades warn workers of hazards — the color codes and what each one means on site.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A site talks to you through signs, tags, signals, and barricades. They mark where the hazards are, what equipment is out of service, and where you can't go. Ignore them and you walk into exactly the danger they were put up to keep you out of. OSHA 1926 Subpart G (sections 200 through 203) sets what they mean and how they're used.",
          "The system only works if everyone reads it the same way — so the colors and words are standardized, and you're expected to know them."
        ]
      },
      {
        heading: "Signs and their colors",
        body: [
          "Under 1926.200, accident-prevention signs use color to signal how serious the hazard is:",
          {
            list: [
              "Danger (red) — an immediate hazard that can seriously hurt or kill. Stop and take it seriously.",
              "Caution (yellow) — a potential hazard or unsafe practice; stay alert and take precautions.",
              "Safety instruction (usually green/white) — general safety information and directions.",
              "Traffic and directional signs — routing for vehicles and pedestrians around the work."
            ]
          },
          "Red means the highest danger for a reason. Never treat a Danger sign as background noise."
        ]
      },
      {
        heading: "Tags",
        body: [
          "Tags are temporary warnings on a specific piece of equipment or a specific hazard, used until it's fixed or removed. They tell you the item isn't safe to use:",
          {
            list: [
              "'Do Not Operate' or 'Out of Service' — the equipment is defective or being worked on; don't start it.",
              "'Do Not Start' — tied to work in progress, often part of lockout/tagout.",
              "Defective-tool and damaged-equipment tags — keep the item out of use until repaired."
            ]
          },
          "A tag is a message from the last person who touched that equipment. Removing or ignoring one can put you or them in danger — never do it without knowing why it's there."
        ]
      },
      {
        heading: "Signals and barricades",
        body: [
          "The other two keep people out of moving hazards and off restricted ground:",
          {
            list: [
              "Signals (1926.201) — flaggers directing traffic and crane signal persons directing lifts use standardized hand signals; one designated signaler at a time, and a stop signal from anyone is obeyed.",
              "Barricades (1926.202) — physical barriers that block access to a hazard: open excavations, overhead work, floor holes, or restricted zones."
            ]
          },
          "A barricade isn't a suggestion. If it's up, there's a reason you're being kept out — find another way around, don't duck under it. For public-facing barricades and pedestrian routing, see Site Access and Public Protection."
        ]
      }
    ]
  },

  "construction-safety/illumination-sanitation-and-site-welfare": {
    description:
      "The basics OSHA requires for a livable job site — enough light to work safely, potable water, and toilet facilities — under 1926 Subparts C and D.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Not every hazard is dramatic. Poor lighting, no clean drinking water, and filthy or missing toilets wear a crew down, cause mistakes, and spread illness. OSHA treats these welfare basics as real requirements, not niceties — covered in 1926.26 and .27 and detailed in Subpart D (sections 51 and 56).",
          "A site that takes care of light, water, and sanitation is usually a site that takes care of the bigger hazards too."
        ]
      },
      {
        heading: "Illumination",
        body: [
          "You can't avoid a hazard you can't see. Under 1926.26 and the minimum levels in 1926.56, work areas, ramps, stairways, and walkways have to be lit while work is going on:",
          {
            list: [
              "General construction areas — at least 5 foot-candles.",
              "General construction plants and shops, and indoor warehouses/corridors — at least 10 foot-candles.",
              "Keep temporary lighting and its cords in good repair, with bulbs guarded against breakage.",
              "Add task lighting for close, detailed, or low-light work, and light the path people travel."
            ]
          }
        ]
      },
      {
        heading: "Sanitation and drinking water",
        body: [
          "Under 1926.27 and 1926.51, the site has to provide the basics for health:",
          {
            list: [
              "Potable (safe) drinking water, clearly marked, with single-use cups or a sanitary fountain — never a shared cup or dipper.",
              "Non-potable water (for firefighting or washing) marked so no one drinks it.",
              "Toilet facilities scaled to the crew size, kept usable and sanitary.",
              "Hand-washing where workers handle harmful substances or before eating."
            ]
          },
          "In heat, water isn't optional — it's a life-safety control. See Heat and Cold Stress Prevention for how water, rest, and shade work together."
        ]
      },
      {
        heading: "Housekeeping ties in",
        body: [
          "Light, water, and sanitation are part of a bigger idea: a site kept in order is a safer site. Clear walkways, contained trash, and organized storage prevent trips, fires, and pest problems.",
          "The full treatment of debris control, walkway clearance, and material storage is in the Housekeeping category — but it starts with the same mindset as keeping the lights on and the water clean: the site is a place people have to work in safely all day."
        ]
      }
    ]
  },

  "construction-safety/personal-protective-equipment-on-site": {
    description:
      "The PPE every construction worker needs, why it's the employer's job to provide it, and where PPE fits in the bigger plan to control hazards.",
    sections: [
      {
        heading: "Overview",
        body: [
          "PPE is the gear you wear when a hazard can't be fully removed — hard hat, safety glasses, gloves, boots, hi-vis, hearing and respiratory protection. It's the most visible part of site safety, but it's also the last line of defense, and treating it as the only line is where crews get in trouble.",
          "OSHA 1926.28 and Subpart E require PPE wherever there's a reasonable chance of injury. This is the site-level overview; the deep detail on each type lives in the dedicated PPE category."
        ]
      },
      {
        heading: "The basics you'll need",
        body: [
          "Most construction tasks call for some mix of:",
          {
            list: [
              "Head — a hard hat wherever there's a risk of falling or flying objects or bumps (1926.100).",
              "Eyes and face — safety glasses, goggles, or a face shield for grinding, cutting, chipping, and dust (1926.102).",
              "Feet — sturdy work boots, safety-toe where there's a crush or puncture risk.",
              "Hands — gloves matched to the job: cut, chemical, or abrasion protection.",
              "Hearing — plugs or muffs in high-noise work (1926.52 / .101).",
              "High-visibility clothing near traffic and equipment, and respiratory protection for dusts, fumes, and vapors (1926.103)."
            ]
          }
        ]
      },
      {
        heading: "Whose job it is",
        body: [
          "PPE is largely the employer's responsibility to provide and pay for. Under OSHA rules the employer must:",
          {
            list: [
              "Assess the job for hazards and determine what PPE is needed.",
              "Provide that PPE, and pay for most of it (a few personal items like ordinary work boots are excepted).",
              "Train workers on what to wear, when, and how to use and care for it."
            ]
          },
          "Your part: wear it every time the task calls for it, inspect it before use, and replace it when it's damaged. PPE that's in your truck or cracked doesn't protect anyone."
        ]
      },
      {
        heading: "PPE is the last line",
        body: [
          "PPE protects one worker, only if it's worn right, and it does nothing to remove the hazard itself — which is why it sits at the bottom of the hierarchy of controls. Always ask first whether the hazard can be eliminated, engineered out, or controlled by procedure before relying on gear alone.",
          "Use PPE fully and correctly, but never let it become an excuse to skip the stronger controls. For selection, fit, inspection, and the specifics of each type, see the PPE category."
        ]
      }
    ]
  },

  "construction-safety/emergency-action-plans-and-site-preparedness": {
    description:
      "What a site emergency action plan covers, the first-aid and fire basics OSHA requires, and how a crew stays ready to respond before something goes wrong.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Emergencies on a construction site — a serious injury, a fire, a collapse, a chemical release — happen fast and don't wait for you to figure out a plan. The time to know the exits, who calls 911, and where first aid is kept is before the emergency, not during it. OSHA 1926.35 covers emergency action plans, and 1926.23, .24, and .50 cover first aid and fire protection.",
          "Preparedness is simple to train and easy to skip. A five-minute walkthrough on day one is what makes a chaotic moment survivable."
        ]
      },
      {
        heading: "What an emergency action plan covers",
        body: [
          "Where a standard requires one, an emergency action plan (1926.35) has to spell out:",
          {
            list: [
              "Escape procedures and routes — how to get out and where to go.",
              "Procedures for workers who stay to handle critical operations before they evacuate.",
              "How to account for all employees after evacuation — a headcount at the assembly point.",
              "Rescue and medical duties for those assigned them.",
              "How to report emergencies, and the alarm system that signals one."
            ]
          },
          "The plan only works if the crew knows it. That's why it gets covered in orientation and reviewed when the site or crew changes."
        ]
      },
      {
        heading: "First aid and medical",
        body: [
          "Under 1926.23 and 1926.50, help has to be reachable fast:",
          {
            list: [
              "If a clinic or hospital isn't close for treating injuries, someone on site must be trained and certified in first aid.",
              "First aid supplies must be available, in a weatherproof container, checked and restocked.",
              "Emergency phone numbers must be posted, and where corrosives are used, eyewash or quick-drenching must be available.",
              "Know who your trained first-aiders are before you need one."
            ]
          }
        ]
      },
      {
        heading: "Fire and staying ready",
        body: [
          "Fire protection (1926.24 and .150) means fire extinguishers available and accessible, kept charged and inspected, with the crew knowing where they are and how to use them. Keep exits and firefighting equipment clear at all times.",
          "Staying ready is a habit: know your two ways out, your assembly point, your alarm, and your first-aiders — and keep the paths to all of them clear. For extinguisher use and fire prevention, see Fire Safety and Fire Extinguisher Safety; for injury recordkeeping, see Accident Reporting."
        ]
      }
    ]
  },

  "construction-safety/stop-work-authority-and-reporting-hazards": {
    description:
      "Why every worker has the authority to stop unsafe work, how to report hazards and near misses, and why speaking up early prevents the next injury.",
    sections: [
      {
        heading: "Overview",
        body: [
          "The most important safety device on any site isn't a guard or a harness — it's a worker willing to say 'stop, this isn't safe.' Most serious incidents had warning signs somebody noticed and didn't raise, or raised and saw ignored. Stop-work authority and a real reporting culture are how those warnings turn into fixes instead of injuries.",
          "This isn't about being difficult. It's about catching the hazard while it's still just a hazard."
        ]
      },
      {
        heading: "Stop-work authority",
        body: [
          "Stop-work authority means anyone on the crew can halt a task they believe is unsafe — no matter their seniority — without fear of punishment. It rests on your OSHA-backed right to a safe workplace and protection from retaliation (Section 11(c) of the OSH Act). When you stop a job:",
          {
            list: [
              "Make the area safe and tell the supervisor and crew why you stopped.",
              "Fix the hazard or get the competent person to before work restarts.",
              "Restart only when the control is actually in place — not just promised."
            ]
          },
          "A false alarm costs a few minutes. A missed one can cost a life. Stopping is always the right call when you're not sure."
        ]
      },
      {
        heading: "Reporting hazards and near misses",
        body: [
          "Hazards and near misses are free lessons — a warning that came without an injury. Report them so they get fixed before the next person isn't so lucky:",
          {
            list: [
              "Report unsafe conditions — broken ladders, missing guards, exposed wiring, bad housekeeping — as soon as you see them.",
              "Report near misses, the close calls where nobody got hurt but easily could have.",
              "Report every injury, no matter how minor; small ones point to hazards that could cause big ones.",
              "You have the right to report without retaliation, and to raise it to OSHA if it isn't addressed."
            ]
          }
        ]
      },
      {
        heading: "Building the culture",
        body: [
          "Reporting only works if speaking up is treated as a contribution, not a complaint. Supervisors build that by thanking workers for raising concerns, fixing hazards quickly, and closing the loop so people see that reporting leads to action. When concerns get ignored or punished, hazards go underground until something goes wrong.",
          "Everyone owns this one. Formal injury and illness recordkeeping is covered in Accident Reporting (OSHA 1904) — but the culture starts here, with a crew that speaks up and a site that listens."
        ]
      }
    ]
  },
  "demolition-safety/the-pre-demolition-engineering-survey": {
    description:
      "The written engineering survey a competent person must complete before anyone starts demolition — how the structure will come down and where it could collapse on its own.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Demolition is the reverse of construction, and it's done to a building that may already be damaged, weakened, or full of hazards nobody documented. That's why OSHA won't let you start swinging until the structure has been studied. Before any employee begins demolition, §1926.850(a) requires an engineering survey by a competent person.",
          "The survey answers one question: how will this building come down, and where could it come down on its own? Get that wrong and floors overload, walls fall the wrong way, or a section collapses while your crew is standing under it."
        ]
      },
      {
        heading: "What the survey has to cover",
        body: [
          "The competent person walks the structure and evaluates the condition of the framing, floors, and walls, and the possibility of unplanned collapse of any part of it. Any adjacent structure where your people could be exposed gets checked the same way.",
          "The employer must have written evidence that the survey was performed — this is not a verbal walk-through you skip when the schedule is tight.",
          {
            list: [
              "Condition of framing, floors, and walls — what's load-bearing, what's already deteriorated.",
              "Possibility of unplanned collapse anywhere in the structure.",
              "Adjacent buildings where workers or the public could be hurt.",
              "For structures damaged by fire, flood, explosion, or deterioration, §1926.850(b) requires walls or floors to be shored or braced before work starts."
            ]
          }
        ]
      },
      {
        heading: "From survey to demolition plan",
        body: [
          "The survey feeds the plan: the sequence of removal, what gets braced or shored, where debris can safely land, and which floors can carry equipment or storage. OSHA's default sequence for exterior walls and floors is top-down — demolished story by story so the structure stays stable as it comes apart (§1926.850(j)).",
          "If conditions in the field don't match what the survey assumed — a floor is more rotted than expected, a beam is cracked — stop and get the competent person back out. The plan is only as good as the survey it's built on."
        ]
      },
      {
        heading: "The competent person keeps working",
        body: [
          "The survey isn't a one-and-done. §1926.859(g) requires continuing inspections by a competent person as the work progresses, to catch weakened or deteriorated floors and walls and loosened material before they fail. No one works where those hazards exist until they're corrected by shoring, bracing, or other effective means.",
          "So the person who made the call up front stays involved. Demolition changes the building by the hour, and the hazard picture changes with it."
        ]
      }
    ]
  },
  "demolition-safety/locating-and-controlling-utilities-before-demolition": {
    description:
      "Shutting off, capping, or controlling every service line outside the building before demolition starts — and protecting any utility that has to stay live.",
    sections: [
      {
        heading: "Overview",
        body: [
          "A wall coming down onto a live gas line, an excavator cutting an energized feeder, a torch opening a pipe that still holds fuel — utilities kill demolition crews when nobody shut them off first. §1926.850(c) is blunt about it: all electric, gas, water, steam, sewer, and other service lines shall be shut off, capped, or otherwise controlled, outside the building line, before demolition work is started.",
          "Outside the building line matters. You isolate the service where it enters the property, not somewhere inside the structure you're about to tear apart."
        ]
      },
      {
        heading: "Shut off, cap, or control — and notify",
        body: [
          "For every service entering the building, one of three things has to happen before demolition: shut it off, cap it, or otherwise control it. And in each case, any utility company involved must be notified in advance (§1926.850(c)). The utility often has to make the disconnection or verify it at their equipment.",
          {
            list: [
              "Electric — de-energized and confirmed dead, not just breaker-off.",
              "Gas — shut off and capped; purge lines that could still hold fuel.",
              "Water, steam, sewer — isolated so lines don't flood or scald the work area.",
              "Every affected utility company notified ahead of time."
            ]
          }
        ]
      },
      {
        heading: "Utilities that must stay live",
        body: [
          "Sometimes you need a service kept on during demolition — temporary power, water for dust control, a fire line. §1926.850(d) allows it, but those utilities have to be relocated as necessary and protected so the demolition work can't damage them and expose the crew.",
          "That means marking them, routing them clear of the drop zones and equipment paths, and treating them as live hazards for the whole job — because they are."
        ]
      },
      {
        heading: "Overhead and buried lines don't disappear",
        body: [
          "The service lines feeding the building aren't the only ones. Overhead power lines crossing the site and buried utilities under it stay energized and stay in the equipment's path. Keep cranes, excavators, and man-baskets clear of overhead lines, and locate buried utilities before any ground disturbance.",
          "Electrical approach distances are covered in Electrical Safety and underground locating in Excavation Safety — the same rules apply here. The demolition point is simple: no line gets touched, cut, or pulled until it's been positively identified and controlled."
        ]
      }
    ]
  },
  "demolition-safety/hazardous-materials-asbestos-lead-and-contaminated-systems": {
    description:
      "Finding and dealing with asbestos, lead, and chemical or fuel residues before demolition — testing, purging, and the exposure limits that govern the work.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Old buildings are full of things that were legal when they went in and are hazards now: asbestos insulation, lead paint, PCBs, and tanks or pipes that still hold flammable or toxic residue. Demolition breaks all of it loose at once. The pre-demolition survey has to find these before the work starts, not after your crew has been breathing the dust for a week.",
          "This is about long-latency and acute hazards both — a silica or asbestos exposure you won't feel for years, and a fuel-tank explosion that happens the second a torch touches it."
        ]
      },
      {
        heading: "Tanks, pipes, and chemical residues",
        body: [
          "§1926.850(e) requires you to determine whether any hazardous chemicals, gases, explosives, flammable materials, or similar substances were used in any pipes, tanks, or other equipment on the property. When any such substance is apparent or suspected, testing and purging must be performed and the hazard eliminated before demolition starts.",
          "That means no cutting into a tank or line until it's been tested and purged. A drum or pipe that looks empty can still hold enough vapor to flatten the building."
        ]
      },
      {
        heading: "Asbestos and lead — survey before you disturb",
        body: [
          "Asbestos-containing materials and lead-based paint have to be identified and, where required, removed by qualified workers before general demolition disturbs them. The exposure limits that govern the work:",
          {
            list: [
              "Asbestos (§1926.1101) — PEL 0.1 fiber per cubic centimeter as an 8-hour average, plus an excursion limit of 1.0 f/cc over any 30 minutes.",
              "Lead (§1926.62) — PEL 50 µg/m³ over 8 hours; action level 30 µg/m³ that triggers monitoring and controls.",
              "Respirable crystalline silica (§1926.1153) — PEL 50 µg/m³ over 8 hours; action level 25 µg/m³."
            ]
          },
          "Asbestos awareness and disturbance are covered in more depth in the Asbestos Awareness category. On a demolition job the rule is the same: suspect material doesn't get cut, broken, or dropped until it's been assessed and handled by the right process."
        ]
      },
      {
        heading: "What the crew does with it",
        body: [
          "If you hit something that wasn't in the survey — suspect insulation, a labeled drum, a pipe that smells of fuel — stop, keep people out of the area, and report it. Don't sweep it up, don't torch it, don't guess.",
          "Fast reporting is the protective move here, even if the material turns out to be nothing. The cost of stopping is an hour; the cost of guessing wrong is measured in exposures and explosions."
        ]
      }
    ]
  },
  "demolition-safety/preparing-the-structure-and-safe-access": {
    description:
      "Getting the building ready before demolition — shoring damaged structures, covering openings, protecting fall exposures, and controlling how people get in and out.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Between the engineering survey and the first swing, there's prep work that keeps the structure and the crew stable while it comes apart. Damaged buildings get braced, floor openings get covered, fall edges get guarded, and access gets locked down to the routes you know are safe.",
          "Skip the prep and you've built the collapse and the fall into the job before demolition even begins."
        ]
      },
      {
        heading: "Shore what's already weak",
        body: [
          "If the structure was damaged by fire, flood, explosion, or deterioration, §1926.850(b) requires the walls or floors to be shored or braced before workers go in. A building that's already compromised won't wait for your planned sequence to fail.",
          "The competent person's survey identifies what needs support. Shoring and bracing go in first, then work proceeds."
        ]
      },
      {
        heading: "Openings, glass, and fall edges",
        body: [
          "Demolition opens holes in floors and walls fast. OSHA's prep rules keep people from falling through them:",
          {
            list: [
              "Wall openings a worker could fall through are protected to a height of approximately 42 inches (§1926.850(g)).",
              "Floor openings not used for dropping material are covered with material strong enough to support any load that could be imposed, and secured against shifting (§1926.850(i)).",
              "Glass that could shatter and cut is removed where it creates a hazard (§1926.850(f)).",
              "At building entrances, sidewalk sheds or canopies protect people from falling debris (§1926.850(k))."
            ]
          }
        ]
      },
      {
        heading: "Control how people get in and out",
        body: [
          "During demolition you don't wander the building. §1926.851(a) says only the stairways, passageways, and ladders designated as means of access shall be used — everything else stays closed off. Those designated routes get inspected periodically and kept clean and safe (§1926.851(b)).",
          "In multistory buildings, an active stairwell is illuminated and substantially covered over at a point not less than two floors below the floor being worked, so debris from above can't rain down the stairs on people using them (§1926.851(c))."
        ]
      }
    ]
  },
  "demolition-safety/exclusion-zones-barricades-and-the-drop-zone": {
    description:
      "Keeping people out of the areas where debris falls and equipment works — barricades, warning signs, and the exclusion zone that shrinks nobody's margin.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Most demolition deaths come down to one thing: a person was where the material was going. Falling debris, a wall pulled over, a wrecking ball swinging — the control is distance. You barricade the drop zones and the equipment work areas and you keep people out of them.",
          "The exclusion zone isn't decoration. It's the difference between debris landing on the ground and debris landing on a worker."
        ]
      },
      {
        heading: "Barricade the drop zones",
        body: [
          "When debris is dropped through holes in the floor without a chute, §1926.850(h) requires the area onto which it drops to be enclosed with barricades not less than 42 inches high and not less than 6 feet back from the projected edge of the opening above, with warning signs posted.",
          {
            list: [
              "Barricade height — not less than 42 inches.",
              "Setback — not less than 6 feet from the projected edge of the opening above.",
              "Warning signs posted at the barricades.",
              "Signs kept up whenever the drop is active."
            ]
          }
        ]
      },
      {
        heading: "Keep people clear of the machines",
        body: [
          "Mechanical demolition has its own hard rule. §1926.859(a) prohibits any worker from being in an area that can be adversely affected by demolition when balling or clamming is being performed. During ball or clamshell work, the affected area is empty except for the operation itself.",
          "That includes the space a wall could fall into when it's pulled over, and the swing radius of the crane. Set the zone from where the material can go, not from where you hope it stays."
        ]
      },
      {
        heading: "The zone moves with the work",
        body: [
          "A demolition exclusion zone is never fixed. As floors come out and walls come down, the drop zones shift, the equipment repositions, and the boundaries have to move with them. What was safe standing ground this morning can be under the next wall this afternoon.",
          "That's why the continuing inspection by a competent person (§1926.859(g)) matters here too — someone has to keep resetting the boundaries as the building changes. If the crew doesn't know exactly where they can and can't be right now, the zone isn't doing its job."
        ]
      }
    ]
  },
  "demolition-safety/material-chutes-and-dropping-debris-through-openings": {
    description:
      "Moving debris down safely — enclosed chutes over 45°, gates at the discharge, and the 25% floor-opening limit when you drop material through the floor.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Getting debris from an upper floor to the ground is where a lot of demolition energy goes, and where a lot of struck-by injuries come from. There are two controlled ways to do it: a chute, or an opening cut in the floor. Both have rules, because loose material dropping through a building turns into a projectile.",
          "Throwing debris out a window or down a stairwell isn't one of the options."
        ]
      },
      {
        heading: "Chutes — enclose them and gate them",
        body: [
          "§1926.852 governs debris chutes:",
          {
            list: [
              "Any chute at an angle of more than 45 degrees from the horizontal must be entirely enclosed (§1926.852(a)).",
              "A substantial gate is installed in each chute at or near the discharge end, and a competent employee controls the operation (§1926.852(b)).",
              "Chute intake openings can't exceed 48 inches in height measured along the wall of the chute; below the top floor they're kept closed when not in use (§1926.852(c)).",
              "Chutes are designed and built strong enough that the impact of material won't cause failure."
            ]
          },
          "The gate and the controller at the bottom keep material from piling up and blowing out the discharge onto whoever's loading the dumpster."
        ]
      },
      {
        heading: "Dropping through floor openings — the 25% rule",
        body: [
          "If you cut an opening in a floor to drop material instead of using a chute, §1926.853 limits it: any opening cut in a floor for the disposal of materials shall be no larger than 25 percent of the aggregate of the total floor area, unless the lateral supports of the removed flooring remain in place.",
          "Cut too much floor out and you've removed the diaphragm that braces the walls and carries the load. The 25% cap keeps the floor doing its structural job while you use part of it as a drop.",
          "Any floor weakened or made unsafe by the work has to be shored to carry the loads imposed on it."
        ]
      },
      {
        heading: "And barricade the bottom",
        body: [
          "Whichever method you use, the landing area is a drop zone. When material drops through a floor opening without a chute, the area below is barricaded — not less than 42 inches high and not less than 6 feet back from the projected edge — with warning signs, under §1926.850(h).",
          "Chute discharges get the same treatment: fenced or barricaded, signed, and nobody in the discharge area while material is coming down."
        ]
      }
    ]
  },
  "demolition-safety/manual-demolition-of-walls-masonry-and-chimneys": {
    description:
      "Taking down walls and masonry by hand — not overloading the floors below, keeping wall sections braced, and staying off the wall in bad weather.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Hand demolition of masonry walls, brick, and chimneys is slow, heavy, and deceptively dangerous. The hazards are a wall section falling on the crew, a floor collapsing under the weight of dropped masonry, and a worker on top of a wall going down with it. §1926.854 covers all three.",
          "Masonry is heavy and unforgiving. A section of brick wall weighs tons, and it doesn't give warning before it lets go."
        ]
      },
      {
        heading: "Don't overload the floors",
        body: [
          "Masonry shall not be permitted to fall upon the floors of the building in such masses as to exceed the safe carrying capacities of the floors (§1926.854). A pile of dropped brick concentrated in one spot can punch through a floor that was fine under distributed load.",
          "Drop material in controlled amounts, spread the load, or route it down a chute or opening instead of letting it pile. The floor below has a limit, and demolition debris finds it fast."
        ]
      },
      {
        heading: "Keep standing walls braced",
        body: [
          "A tall free-standing wall wants to fall. §1926.854 prohibits any wall section more than one story in height from standing alone without lateral bracing — unless the wall was originally designed and constructed to stand without lateral support and is in a condition safe enough to be self-supporting.",
          "Retaining walls have their own rule: a wall holding back earth or an adjoining structure isn't demolished until that earth has been braced or the adjoining structure has been underpinned. Pull it early and you drop the slope or the building next door."
        ]
      },
      {
        heading: "Stay off the wall in bad weather",
        body: [
          "Employees shall not be permitted to work on top of a wall when weather conditions constitute a hazard (§1926.854). Wind, ice, and rain turn a narrow wall top into a place you fall from or get blown off.",
          "And don't let a worker stand on a wall to knock the top off below their own feet — the wall goes when it goes, and the person on it goes with it. Work from a stable platform or take the wall down in a sequence that never puts someone on the part that's about to fail."
        ]
      }
    ]
  },
  "demolition-safety/manual-removal-of-floors": {
    description:
      "Removing floor arches and decking by hand — planking for firm footing, the 16-inch plank gap, keeping the area below clear, and the 20-foot rule.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Taking out a floor by hand means working over the hole you're creating, on framing that's being removed under your feet. §1926.855 is built around one idea: give the worker firm footing that will still hold if the arch below them lets go, and keep everyone out of the space underneath.",
          "The failure mode here is a worker riding a collapsing floor arch down, or dropped material landing on the crew below."
        ]
      },
      {
        heading: "Plank for footing that holds",
        body: [
          "When you remove floor arches, you don't walk on the exposed beams. §1926.855 requires planking so that if an arch collapses, the worker still has support:",
          {
            list: [
              "Planks not less than 2 inches by 10 inches, full-size undressed lumber, positioned to give safe support (§1926.855(b)).",
              "Open space between planks not more than 16 inches (§1926.855(b)).",
              "Safe walkways at least 18 inches wide, planks at least 2 inches thick or equivalent (§1926.855(c)).",
              "Plank ends overlap at least 1 foot over solid bearings; stringers supported by floor beams or girders, not by floor arches alone (§1926.855(d)–(e))."
            ]
          }
        ]
      },
      {
        heading: "Keep the area below empty",
        body: [
          "When floor arches are being removed, employees shall not be allowed in the area directly underneath, and that area shall be barricaded to prevent access (§1926.855(f)). The floor above is coming out; nobody stands where it lands.",
          "This ties straight to the exclusion-zone discipline — the space under active floor removal is a drop zone whether or not there's a marked opening."
        ]
      },
      {
        heading: "Clear the deck first — the 20-foot rule",
        body: [
          "Demolition of floor arches shall not be started until they, and the surrounding floor area for a distance of 20 feet, have been cleared of debris and any other unnecessary materials (§1926.855(g)).",
          "You don't start pulling a floor apart with piles of debris sitting on it. The extra weight and the tripping hazard turn a controlled removal into a collapse waiting for a wrong step. Clear 20 feet around the work first, every time."
        ]
      }
    ]
  },
  "demolition-safety/mechanical-demolition-wrecking-ball-and-powered-equipment": {
    description:
      "Bringing structures down with machines — the wrecking-ball weight limits, keeping the area clear during balling, and running equipment only on floors that can carry it.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Mechanical demolition — wrecking balls, clamshells, excavators with shears and grapples — moves a lot of building fast, and the energy involved is unforgiving. §1926.859 and §1926.856 set the rules. The core one never changes: when the machine is working, people are out of the area it can affect.",
          "A demolition ball is a wrecking energy on a swinging line, and an excavator pulling a wall over is aiming tons of material at the ground. Nobody stands in the answer."
        ]
      },
      {
        heading: "Clear the area during balling and clamming",
        body: [
          "§1926.859(a) prohibits any worker from being in an area that can be adversely affected by demolition operations when balling or clamming is being performed. Only workers necessary for the operation are allowed in the area at any other time.",
          "The affected area includes the ball's swing, the space a wall falls into when pulled, and anywhere debris can travel. Set it wide and enforce it."
        ]
      },
      {
        heading: "Size the wrecking ball right",
        body: [
          "A ball that's too heavy for the crane or the line is how a rig tips or a load line parts. §1926.859(b) caps the ball weight:",
          {
            list: [
              "Not more than 50 percent of the crane's rated load, based on boom length and the maximum angle of operation the ball will be used at.",
              "Not more than 25 percent of the nominal breaking strength of the line it hangs from.",
              "Whichever of the two gives the lesser value governs."
            ]
          },
          "The rest of §1926.859: keep the boom and load line as short as possible (c); attach the ball with a swivel-type connection to prevent load-line twist, by positive means so it can't come loose (d); cut all affected steel members free before pulling a wall over (e); and remove roof cornices and ornamental stonework before pulling walls (f)."
        ]
      },
      {
        heading: "Run equipment only on floors that can hold it",
        body: [
          "When machines work on a floor instead of at grade, §1926.856 applies. Mechanical equipment shall not be used on floors or working surfaces unless those surfaces are strong enough to support the imposed load (§1926.856(a)) — the equipment plus the debris it's handling.",
          "Floor openings in the equipment's path get curbs or stop-logs to keep the machine from running over the edge (§1926.856(b)). And a competent person keeps inspecting as the work goes, pulling people back from any weakened floor, wall, or loosened material until it's shored or braced (§1926.859(g))."
        ]
      }
    ]
  },
  "demolition-safety/removal-of-steel-construction": {
    description:
      "Dismantling structural steel safely — taking it down column length by column length and tier by tier, not overstressing members, and planking for the crew.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Structural steel is the skeleton, and taking it down changes how every load in the building travels. Cut the wrong member and the frame redistributes forces you didn't plan for — onto a beam that fails, or onto the crew. §1926.858 keeps steel demolition orderly.",
          "Steel doesn't come down casually. It's dismantled in a controlled sequence, with hoisting equipment rated for the members, and with the crew standing on real footing."
        ]
      },
      {
        heading: "Dismantle in sequence",
        body: [
          "§1926.858(c) sets the method: steel construction is dismantled column length by column length, and tier by tier — though columns may be taken in two-story lengths. You work the frame down in an order that keeps what's left standing stable.",
          "You don't cut members out of the middle of a standing frame and hope the rest holds. The sequence exists so the structure stays predictable while it comes apart."
        ]
      },
      {
        heading: "Don't overstress the members",
        body: [
          "Any structural member being dismembered shall not be overstressed (§1926.858(d)). A member that's carrying more than it was meant to — because supports around it are already gone — can fail while it's being cut or rigged.",
          "Rig members before they're cut free, support them through the cut, and control them as they come down. The hoisting equipment used has to comply with the crane and rigging standards (Subparts N and CC); rigging practice is covered in the Rigging and Material Handling Equipment category."
        ]
      },
      {
        heading: "Footing for the razing crew",
        body: [
          "When floor arches have been removed, the workers razing the steel still need somewhere solid to stand. §1926.858(a) requires planking in accordance with §1926.855(b) — the same 2-by-10 full-size planks with no more than a 16-inch gap.",
          "Steel demolition often happens over open framing with a long way to fall. Firm footing and fall protection aren't optional; they're how the crew stays on the structure while they take it apart."
        ]
      }
    ]
  },
  "demolition-safety/silica-dust-and-respiratory-hazards": {
    description:
      "Controlling the dust demolition generates — respirable crystalline silica from concrete and masonry, plus lead and other contaminants, and the exposure limits and controls that apply.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Demolition is a dust factory. Breaking concrete, block, brick, and mortar throws respirable crystalline silica into the air, and silica scars your lungs permanently — there's no cure for silicosis. Add lead paint, asbestos, mold, and general nuisance dust, and the air on a demolition job is one of its most serious and most ignored hazards.",
          "You can't see respirable silica. The particles that reach deep into your lungs are too small to see, which is exactly why people underestimate it."
        ]
      },
      {
        heading: "Know the limits",
        body: [
          "OSHA's construction exposure limits for the dust demolition creates:",
          {
            list: [
              "Respirable crystalline silica (§1926.1153) — PEL 50 µg/m³ as an 8-hour average; action level 25 µg/m³ that triggers monitoring, training, and medical surveillance.",
              "Lead (§1926.62) — PEL 50 µg/m³ over 8 hours; action level 30 µg/m³.",
              "Asbestos (§1926.1101) — PEL 0.1 f/cc over 8 hours; excursion limit 1.0 f/cc over 30 minutes."
            ]
          },
          "The silica standard has a Table 1 of common construction tasks — including handheld and stand-mounted concrete/masonry cutting and jackhammering — with the water and ventilation controls that let you skip separate air monitoring if you follow them fully."
        ]
      },
      {
        heading: "Control the dust at the source",
        body: [
          "PPE is the last line, not the first. Cut the dust before it reaches the air:",
          {
            list: [
              "Wet methods — water applied at the point of cutting, breaking, or drilling to knock dust down.",
              "Local exhaust ventilation and dust collection on saws, grinders, and jackhammers.",
              "Keep debris damp during handling and cleanup; don't dry-sweep — use HEPA vacuums or wet methods.",
              "Respiratory protection matched to the exposure when engineering controls can't get you below the limit."
            ]
          }
        ]
      },
      {
        heading: "Respirators when you need them",
        body: [
          "Where dust controls can't bring exposure under the limit, respirators fill the gap — but only inside a full respiratory protection program: the right respirator for the contaminant, fit testing, medical clearance, and clean storage. That program lives in the PPE category (§1926.103 / 1910.134).",
          "Dust that lingers in a demolition zone reaches everyone in it, not just the person running the saw. Control it at the source so the whole crew isn't breathing it."
        ]
      }
    ]
  },
  "demolition-safety/fire-prevention-and-hot-work-in-demolition": {
    description:
      "Managing fire risk in a building being torn apart — torch-cutting near combustibles, keeping fire protection and egress available, and controlling flammable residues.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Demolition and fire are a bad mix. You've got torch-cutting and grinding throwing sparks, piles of dry combustible debris, flammable residues in old pipes and tanks, and a building whose sprinklers, alarms, and clear exits are being dismantled around the crew. The fire hazard goes up as the fire protection comes down.",
          "A fire in a structure that's half torn apart, with blocked exits and no working standpipe, traps people fast."
        ]
      },
      {
        heading: "Hot work is the ignition source",
        body: [
          "Cutting torches and abrasive saws are the most common ignition sources on a demolition job. Before any hot work:",
          {
            list: [
              "Confirm tanks, pipes, and equipment that held flammable or hazardous substances were tested and purged (§1926.850(e)) — never cut into a container that might still hold vapor.",
              "Clear combustible debris away from the cutting area, or shield it.",
              "Keep a charged extinguisher and, where required, a fire watch during and after cutting.",
              "Follow the hot-work permit and fire-watch discipline covered in the Welding and Hot Work category."
            ]
          }
        ]
      },
      {
        heading: "Keep fire protection and exits working",
        body: [
          "As long as it's feasible, existing fire protection — standpipes, sprinklers, alarms — stays in service while the building is demolished, and is removed only as the demolition sequence reaches it. A demolition job still needs firefighting water available and a way for the crew to get out.",
          "Means of egress get the same respect. The designated stairways and passageways (§1926.851) are the escape routes too — keep them clear, lit, and open. Don't let debris or dropped material block the way out."
        ]
      },
      {
        heading: "Debris, fuel, and housekeeping",
        body: [
          "Piled combustible debris is fuel. Route it out of the building through chutes or openings instead of letting it accumulate, and keep the drop and storage areas clear of ignition sources. Flammable and combustible liquids used on the job — fuels, cutting gases, solvents — get stored and handled per the fire-safety rules, away from hot work.",
          "Good housekeeping is fire prevention here, not just tidiness. Less fuel lying around means a spark has less to catch. General fire prevention and flammable storage are covered in the Fire Safety category."
        ]
      }
    ]
  },
  "demolition-safety/continuing-inspections-and-preventing-unplanned-collapse": {
    description:
      "The competent person's ongoing job during demolition — watching for weakened floors, walls, and loosened material, and stopping work before an unplanned collapse.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Unplanned collapse is the signature demolition killer. A floor overloaded with debris, a wall left standing too long without bracing, a member cut in the wrong order — the building comes down when and where nobody intended. The defense is a competent person watching the structure the whole way down and the authority to stop work.",
          "The engineering survey tells you how the building should come apart. Continuing inspection tells you whether it actually is."
        ]
      },
      {
        heading: "The competent person never stops looking",
        body: [
          "§1926.859(g) is the governing rule: during demolition, continuing inspections by a competent person shall be made as the work progresses to detect hazards resulting from weakened or deteriorated floors, or walls, or loosened material.",
          "No employee is permitted to work where those hazards exist until they're corrected by shoring, bracing, or other effective means. The inspection isn't a formality — it's the mechanism that pulls people out of harm's way before a section fails."
        ]
      },
      {
        heading: "What starts an unplanned collapse",
        body: [
          "Collapse rarely comes from one big mistake. It builds from conditions that stack up as the job goes:",
          {
            list: [
              "Debris piled past a floor's safe carrying capacity (§1926.854, §1926.857(a)).",
              "A wall section over one story left standing without lateral bracing (§1926.854).",
              "Structural members cut out of sequence or overstressed (§1926.858).",
              "Floors weakened by removed sections or water, not yet shored.",
              "Loosened masonry, cornices, or material left hanging above the crew (§1926.859(f))."
            ]
          }
        ]
      },
      {
        heading: "Stop-work is the last safeguard",
        body: [
          "When a competent person spots a weakened floor, an unbraced wall, or loosened material overhead, the work in that area stops until it's corrected. Storage limits back this up: waste and debris on any floor can't exceed the allowable floor loads (§1926.857(a)), and floor arches can be removed for debris storage only to an elevation of not more than 25 feet above grade, and only if it doesn't endanger the structure (§1926.857(d)).",
          "Every worker on a demolition job carries stop-work authority. If the structure starts behaving in a way the plan didn't predict — a crack opening, a floor sagging, a wall leaning — stop, clear the area, and get the competent person. The building only has to surprise you once."
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

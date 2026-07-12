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
  }
};

export function getAuthoredTopic(
  categorySlug: string,
  topicSlug: string
): AuthoredTopic | undefined {
  return authoredTopics[`${categorySlug}/${topicSlug}`];
}

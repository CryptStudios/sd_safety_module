import { getAuthoredTopic } from "@/lib/topic-content";

export type TrainingTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  articleIntro: string;
  articleSections: TrainingArticleSection[];
  toolboxTalk: string[];
  keyPoints: string[];
  hazardSignals: string[];
  commonMistakes: string[];
  actionPlan: string[];
  supervisorScenario: string;
  speakerNotes: string[];
  checklist: string[];
  reviewQuestions: string[];
  meetingPoints: string[];
  slides: TrainingSlide[];
  boloFormUrl: string;
};

export type TrainingSourceLink = {
  label: string;
  url: string;
};

/**
 * A block of article content: a plain string is a paragraph; a `{ list }`
 * object renders as a bullet list. Generated content uses strings only;
 * authored content can mix paragraphs and lists.
 */
export type ArticleBlock = string | { list: string[] };

export type TrainingArticleSection = {
  heading: string;
  body: ArticleBlock[];
};

export type TrainingSlide = {
  id: string;
  title: string;
  bullets: string[];
  speakerNote: string;
};

export type TrainingCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  meetingPurpose: string;
  keyTakeaways: string[];
  supervisorNotes: string[];
  discussionPrompts: string[];
  articleSections: TrainingArticleSection[];
  sourceLinks: TrainingSourceLink[];
  topics: TrainingTopic[];
};

const topicExpansionLabels = [
  "Fundamentals",
  "Pre-Task Planning",
  "Field Inspection Points",
  "Safe Setup and Preparation",
  "Common Mistakes and Red Flags",
  "Crew Communication",
  "Emergency Response",
  "Supervisor Review",
  "Documentation and Reporting",
  "Weather and Changing Conditions",
];

const placeholderUrl =
  "https://fill.boloforms.com/signature/1UYGri1WmKFHB4GbS-RYbulaKHzLjzvSdt74ZFlP2434?p=view#googtrans(en)";

type CategoryInput = {
  id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  meetingPurpose: string;
  keyTakeaways: string[];
  supervisorNotes: string[];
  discussionPrompts: string[];
  articleSections: TrainingArticleSection[];
  topics: string[];
};

const topicDescriptionTemplates = [
  "Read this article to understand the topic, see how it appears on site, and recognize examples that make the hazard easier to spot.",
  "This article explains the topic in plain language and uses job site examples to show why it matters.",
  "Use this article as a straightforward overview of the hazard, the situations where it appears, and the controls that keep it manageable.",
];

const toolboxTalkSourceLink: TrainingSourceLink = {
  label: "Toolbox Talks for OSHA Safety and Health",
  url: "https://oshatraining.com/more-osha-training-resources/toolbox-talks-for-osha-safety-and-health/",
};

const categoryMeetingFocus: Record<string, string> = {
  "construction-safety": "daily site hazards, pre-task planning, and safe work expectations",
  "slips-trips-and-falls": "walking surfaces, housekeeping, and changing site conditions",
  "electrical-safety": "shock prevention, inspection, and energy control",
  "ppe": "matching protective equipment to the hazard and keeping it serviceable",
  "working-at-heights": "fall prevention, access planning, and worker positioning",
  "confined-space": "hazard recognition, atmospheric control, and entry discipline",
  "accident-reporting": "fast communication, documentation, and corrective follow-through",
  "asbestos-awareness": "awareness, restricted disturbance, and escalation",
  "coshh-hazardous-substances": "substance awareness, exposure routes, and practical controls",
  "excavation-safety": "soil stability, protective systems, and excavation access",
  "fire-extinguisher-safety": "extinguisher readiness and early-stage emergency response",
  "fire-safety": "fire prevention, flammable storage, and evacuation readiness",
  "first-aid": "emergency resources, immediate response, and escalation",
  "forklift-safety": "equipment movement, pedestrian separation, and load handling",
  "housekeeping": "work area control, access routes, and cleanup ownership",
  "manual-handling": "lifting plans, body mechanics, and use of handling aids",
};

const categoryRiskLens: Record<string, string> = {
  "construction-safety": "routine tasks become dangerous when crews skip planning or normalize unsafe conditions",
  "slips-trips-and-falls": "small conditions such as debris, mud, hoses, lighting changes, or uneven surfaces can cause serious injuries",
  "electrical-safety": "electricity is invisible, so workers depend on inspection, isolation, and disciplined procedures",
  "ppe": "equipment that is missing, damaged, or mismatched to the task creates false confidence instead of protection",
  "working-at-heights": "one missing safeguard or one rushed movement can turn an ordinary task into a severe fall event",
  "confined-space": "conditions can change quickly and may not be obvious from outside the space",
  "accident-reporting": "late or incomplete reporting allows hazards and patterns to stay hidden",
  "asbestos-awareness": "suspect materials may not look dangerous, so awareness and reporting are critical",
  "coshh-hazardous-substances": "harmful exposure can come from products in containers or from dusts, vapors, and fumes created by the work",
  "excavation-safety": "soil, weather, equipment movement, and nearby loads can change excavation safety quickly",
  "fire-extinguisher-safety": "an extinguisher only helps when it is accessible, appropriate, and used under the right conditions",
  "fire-safety": "fire risk grows when ignition sources, combustible materials, and poor housekeeping overlap",
  "first-aid": "the first minutes after an incident depend on preparation, calm communication, and clear responsibilities",
  "forklift-safety": "equipment, loads, route conditions, and foot traffic all affect the chance of struck-by or crush injuries",
  "housekeeping": "disorder in the work area often creates access problems, trip hazards, and slower emergency response",
  "manual-handling": "soft-tissue injuries often develop when awkward lifts, poor staging, and fatigue stack together",
};

const categorySourceLinks: Record<string, TrainingSourceLink[]> = {
  "construction-safety": [
    { label: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" },
    { label: "OSHA Hazard Prevention and Control", url: "https://www.osha.gov/safety-management/hazard-prevention" },
  ],
  "slips-trips-and-falls": [
    { label: "OSHA Walking-Working Surfaces", url: "https://www.osha.gov/walking-working-surfaces" },
    { label: "OSHA Fall Protection", url: "https://www.osha.gov/fall-protection" },
  ],
  "electrical-safety": [
    { label: "OSHA Electrical", url: "https://www.osha.gov/electrical" },
    { label: "OSHA Lockout/Tagout", url: "https://www.osha.gov/lockout-tagout" },
  ],
  "ppe": [
    { label: "OSHA Personal Protective Equipment", url: "https://www.osha.gov/personal-protective-equipment" },
    { label: "OSHA Eye and Face Protection eTool", url: "https://www.osha.gov/etools/eye-and-face-protection" },
  ],
  "working-at-heights": [
    { label: "OSHA Fall Protection", url: "https://www.osha.gov/fall-protection" },
    { label: "OSHA Scaffolding eTool", url: "https://www.osha.gov/etools/scaffolding" },
  ],
  "confined-space": [
    { label: "OSHA Permit-Required Confined Spaces", url: "https://www.osha.gov/confined-spaces" },
    { label: "OSHA Safety and Health Topics: Confined Spaces", url: "https://www.osha.gov/confined-spaces-construction" },
  ],
  "accident-reporting": [
    { label: "OSHA Recordkeeping and Reporting", url: "https://www.osha.gov/recordkeeping" },
    { label: "OSHA Hazard Prevention and Control", url: "https://www.osha.gov/safety-management/hazard-prevention" },
  ],
  "asbestos-awareness": [
    { label: "OSHA Asbestos", url: "https://www.osha.gov/asbestos" },
    { label: "OSHA Safety and Health Topics: Asbestos", url: "https://www.osha.gov/asbestos/standards" },
  ],
  "coshh-hazardous-substances": [
    { label: "OSHA Hazard Communication", url: "https://www.osha.gov/hazcom" },
    { label: "OSHA Silica, Crystalline", url: "https://www.osha.gov/silica-crystalline" },
  ],
  "excavation-safety": [
    { label: "OSHA Trenching and Excavation", url: "https://www.osha.gov/trenching-excavation" },
    { label: "OSHA Trenching and Excavation eTool", url: "https://www.osha.gov/etools/trenching-excavation" },
  ],
  "fire-extinguisher-safety": [
    { label: "OSHA Portable Fire Extinguishers", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.157" },
    { label: "OSHA Fire Safety", url: "https://www.osha.gov/fire-safety" },
  ],
  "fire-safety": [
    { label: "OSHA Fire Safety", url: "https://www.osha.gov/fire-safety" },
    { label: "OSHA Emergency Preparedness and Response", url: "https://www.osha.gov/emergency-preparedness" },
  ],
  "first-aid": [
    { label: "OSHA Medical and First Aid", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.151" },
    { label: "OSHA Emergency Preparedness and Response", url: "https://www.osha.gov/emergency-preparedness" },
  ],
  "forklift-safety": [
    { label: "OSHA Powered Industrial Trucks", url: "https://www.osha.gov/powered-industrial-trucks" },
    { label: "OSHA Safety and Health Topics: Powered Industrial Trucks", url: "https://www.osha.gov/powered-industrial-trucks/standards" },
  ],
  "housekeeping": [
    { label: "OSHA Walking-Working Surfaces", url: "https://www.osha.gov/walking-working-surfaces" },
    { label: "OSHA Fire Safety", url: "https://www.osha.gov/fire-safety" },
  ],
  "manual-handling": [
    { label: "OSHA Materials Handling", url: "https://www.osha.gov/materials-handling" },
    { label: "OSHA Ergonomics", url: "https://www.osha.gov/ergonomics" },
  ],
};

function getCategoryFocus(categorySlug: string) {
  return (
    categoryMeetingFocus[categorySlug] ??
    "hazard recognition, control measures, and safe work expectations"
  );
}

function getCategoryRiskLens(categorySlug: string) {
  return (
    categoryRiskLens[categorySlug] ??
    "job site conditions can change quickly, and workers need clear expectations before exposure grows"
  );
}

function topicControlHint(title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes("fall")) return "fall exposures should be controlled before the worker reaches the hazard";
  if (normalized.includes("ladder")) return "ladders should be selected, inspected, and used with stable footing and three points of contact";
  if (normalized.includes("scaffold")) return "scaffolds should be inspected, fully planked where required, and used only as intended";
  if (normalized.includes("electrical")) return "equipment should be inspected, protected from damage, and kept away from wet or energized exposure";
  if (normalized.includes("lock-out") || normalized.includes("tag-out")) return "stored or live energy should be isolated before maintenance or service begins";
  if (normalized.includes("ppe")) return "protective equipment should match the hazard, fit properly, and be replaced when defective";
  if (normalized.includes("forklift")) return "operators and nearby workers should maintain clear routes, visibility, and communication";
  if (normalized.includes("first aid") || normalized.includes("cpr") || normalized.includes("aed")) return "workers should know how to summon help and use trained responders and available emergency resources";
  if (normalized.includes("fire")) return "workers should understand prevention, alarm, evacuation, and the limits of portable response";
  if (normalized.includes("confined")) return "entry should follow permit, testing, communication, and rescue expectations";
  if (normalized.includes("asbestos")) return "suspect materials should not be disturbed and should be escalated through the approved process";
  if (normalized.includes("sds") || normalized.includes("hazardous")) return "labels, safety data sheets, and exposure controls should guide the work plan";
  if (normalized.includes("excavation") || normalized.includes("trench")) return "protective systems, access, and inspections should be in place before entry";
  if (normalized.includes("report")) return "clear, timely reporting should start as soon as the event or concern is identified";
  if (normalized.includes("housekeeping")) return "cleanup and access control should be treated as part of the job, not separate from it";
  if (normalized.includes("lifting") || normalized.includes("handling") || normalized.includes("carrying")) return "the lift should be planned before it happens, with mechanical aids or team help when needed";

  return "the crew should identify hazards early, understand the control measures, and know when to stop work";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildTopicIntro(categorySlug: string, title: string) {
  const focus = getCategoryFocus(categorySlug);
  const riskLens = getCategoryRiskLens(categorySlug);

  return `${title} is written as a short article for workers who want a clear, practical explanation of the topic before starting work. It fits into the broader conversation about ${focus}, and it matters because ${riskLens}. The best reading material connects the topic to the exact work area, exact task, and exact decisions workers will make on site.`;
}

function buildTopicMeetingPoints(categorySlug: string, title: string): string[] {
  return [
    `Look for a current task, area, or crew exposure where ${title.toLowerCase()} shows up on this project.`,
    `Notice the warning signs or changing conditions that make the topic more important right now.`,
    `Read the control measures, reporting path, and stop-work expectations as part of the article itself.`
  ];
}

function buildTopicSections(categorySlug: string, title: string): TrainingArticleSection[] {
  const focus = getCategoryFocus(categorySlug);
  const controlHint = topicControlHint(title);

  return [
    {
      heading: `What ${title} means`,
      body: [
        `${title} is easiest to understand when it is described in plain site language instead of policy language. The topic usually comes up in ordinary work, which is why a good article explains where it appears, who is exposed, and what makes it dangerous when conditions change.`,
        `For example, a worker may not notice a problem until the task has already started, the layout has changed, or equipment has been moved into a tighter space. That is why the broader safety focus here is ${focus}: the article should connect the topic to real work, not abstract rules.`
      ]
    },
    {
      heading: "How it shows up on site",
      body: [
        `One reason ${title.toLowerCase()} deserves its own article is that the hazard usually grows from a chain of small changes rather than one dramatic mistake. A crew gets comfortable, the environment changes, a control is missing, access becomes awkward, or the task starts to move faster than the original plan.`,
        `A useful article gives examples of those buildup conditions. Maybe a walkway gets cluttered, a cord gets damaged, a lift point is chosen too quickly, or weather changes the ground underfoot. Those small shifts matter because they turn familiar work into something riskier than it looked at first glance.`
      ]
    },
    {
      heading: "Examples of safe practice",
      body: [
        `In practice, ${controlHint}. That means the article should describe what safe work looks like before the task starts, while the task is underway, and after conditions change.`,
        `Concrete examples help more than broad reminders. A worker should be able to picture the setup, the checks, and the behaviors that keep the hazard under control. If the article can point to a specific piece of equipment, a specific access route, or a specific change in the environment, the lesson becomes easier to remember.`
      ]
    },
    {
      heading: "Common mistakes",
      body: [
        `A common mistake is treating ${title.toLowerCase()} as a rule to memorize instead of a condition to notice. Another is assuming the controls are in place because they were present earlier in the week or on a different job.`,
        `Articles are more useful when they show how people get hurt by moving too quickly, skipping an inspection, or ignoring a small problem that turns into a larger one. Those examples make the topic feel real instead of theoretical.`
      ]
    },
    {
      heading: "What to remember",
      body: [
        `By the end of the article, readers should understand the hazard, the warning signs, the required controls, and the point at which they should stop and speak up. They should also know who to contact if the controls are missing, damaged, or no longer fit the conditions in front of them.`,
        `That matters because ${title.toLowerCase()} is not just background reading. It is field information. The article is successful when a worker can point to the controls on site and explain what would happen if conditions changed unexpectedly.`
      ]
    },
  ];
}

function buildTopicKeyPoints(categorySlug: string, title: string): string[] {
  return [
    `${title} is easiest to learn when it is tied directly to current project conditions rather than a generic rule.`,
    `The article should show the warning signs, behavior changes, and site conditions that make ${title.toLowerCase()} more urgent.`,
    `Readers should be able to picture the controls in the field instead of only reading about them in theory.`,
    `The article should make clear what to do when the controls related to ${title.toLowerCase()} break down.`
  ];
}

function buildTopicHazardSignals(title: string): string[] {
  return [
    `Workers begin treating ${title.toLowerCase()} as routine instead of checking the conditions in front of them.`,
    "The work area changes faster than the original plan, access, or protection gets updated.",
    "Equipment, housekeeping, communication, or supervision starts slipping even though the task is still moving forward.",
    "People feel pressure to continue despite missing controls, damaged gear, or unclear expectations."
  ];
}

function buildTopicCommonMistakes(title: string): string[] {
  return [
    `Reading ${title.toLowerCase()} as a rule without connecting it to the current project.`,
    "Assuming the controls are in place because they were present earlier in the week or on another task.",
    "Waiting too long to report a missing safeguard, site change, or near miss.",
    "Letting speed, convenience, or habit override the original work plan."
  ];
}

function buildTopicActionPlan(title: string): string[] {
  return [
    `Identify where ${title.toLowerCase()} is most likely to appear during the next shift or work phase.`,
    "Assign a person or role to verify the controls before the task begins.",
    "Confirm the stop-work and reporting expectation with the full crew.",
    "Recheck the area after site conditions, staffing, weather, or sequencing changes."
  ];
}

function buildSupervisorScenario(title: string): string {
  return `A realistic example of ${title.toLowerCase()} helps readers see how the hazard changes once the task has already started, conditions have changed, and one of the expected controls is no longer reliable.`;
}

function buildSpeakerNotes(categorySlug: string, title: string): string[] {
  const focus = getCategoryFocus(categorySlug);

  return [
    `Introduce ${title.toLowerCase()} by tying it to ${focus} on this project rather than jumping straight to a summary.`,
    "Pause after each major section and ask for one real example from the field.",
    "If the reading stays too theoretical, bring it back to the exact crew, exact area, and exact task planned for the day.",
    "Close by naming one action item, one reporting reminder, and one ownership assignment."
  ];
}

function buildSlides(categorySlug: string, title: string): TrainingSlide[] {
  const focus = getCategoryFocus(categorySlug);
  const controlHint = topicControlHint(title);

  return [
    {
      id: "overview",
      title: `${title} Overview`,
      bullets: [
        `Connect this topic to ${focus}.`,
        "Explain where the exposure appears on this project.",
        "Set the expectation that readers should look for real field examples, not only rules."
      ],
      speakerNote:
        "Use this opening slide to explain why the topic matters today, which crews are exposed, and what examples the reader should notice."
    },
    {
      id: "why-it-matters",
      title: "Why It Matters",
      bullets: [
        "Small changes in conditions can turn a routine task into a serious hazard.",
        "Most incidents build through a chain of missed checks, assumptions, or rushed decisions.",
        "Workers need to know the earliest warning signs, not only the worst-case outcome."
      ],
      speakerNote:
        "Ask what signs a worker would notice before the situation becomes an incident. Keep the emphasis on real examples from the site."
    },
    {
      id: "controls",
      title: "Required Controls",
      bullets: [
        controlHint.charAt(0).toUpperCase() + controlHint.slice(1) + ".",
        "Verify protections before the task begins and whenever conditions change.",
        "Do not assume yesterday's controls are still effective today."
      ],
      speakerNote:
        "Point to the actual controls in the work area if possible. This slide should feel practical and visual, not abstract."
    },
    {
      id: "discussion",
      title: "Crew Discussion",
      bullets: [
        `Where does ${title.toLowerCase()} show up in our current work?`,
        "What usually gets missed when the pace increases?",
        "What change in conditions would make us stop and reassess?"
      ],
      speakerNote:
        "Let the reader imagine the crew talking here. The goal is to expose weak spots in the current plan and get workers to describe them out loud."
    },
    {
      id: "action",
      title: "Action and Sign-Off",
      bullets: [
        "Confirm who verifies the controls.",
        "Review who to notify if something is wrong or missing.",
        "Complete the external acknowledgment after the meeting."
      ],
      speakerNote:
        "Finish with ownership and follow-through. This slide should turn the article into clear next steps."
    }
  ];
}

function buildTopicChecklist(title: string): string[] {
  return [
    `Explain where ${title.toLowerCase()} shows up in current work areas or upcoming tasks.`,
    `Confirm which equipment, protection, or procedural controls must be in place before the task begins.`,
    "Review what changes in conditions should trigger reassessment or stop-work.",
    "Identify who the crew should notify if they see a problem or missing control.",
    "Close the topic by confirming the acknowledgment step and any follow-up corrections."
  ];
}

function buildTopicReviewQuestions(title: string): string[] {
  return [
    `What site condition would make ${title.toLowerCase()} more hazardous today than it looked during planning?`,
    `What is the first thing a worker should do if the expected controls for ${title.toLowerCase()} are missing or damaged?`,
    `How can the crew tell the difference between a routine condition and one that needs to be escalated immediately?`
  ];
}

function buildToolboxTalk(title: string): string[] {
  return [
    `Open by asking the crew where ${title.toLowerCase()} appears on this project right now.`,
    `Review the controls and work habits that should be visible before anyone begins the task.`,
    `End with one site-specific action item, one reporting reminder, and the acknowledgment step.`
  ];
}

function expandTopicTitles(topicTitles: string[]) {
  return topicTitles.flatMap((title) => [
    title,
    ...topicExpansionLabels.map((label) => `${title} - ${label}`),
  ]);
}

function buildTopics(categorySlug: string, topicTitles: string[]): TrainingTopic[] {
  return topicTitles.map((title, index) => {
    const slug = slugify(title);
    const authored = getAuthoredTopic(categorySlug, slug);

    return {
    id: `${categorySlug}-${index + 1}`,
    title,
    slug,
    description: authored?.description ?? topicDescriptionTemplates[index % topicDescriptionTemplates.length],
    articleIntro: buildTopicIntro(categorySlug, title),
    articleSections: authored?.sections ?? buildTopicSections(categorySlug, title),
    toolboxTalk: buildToolboxTalk(title),
    keyPoints: buildTopicKeyPoints(categorySlug, title),
    hazardSignals: buildTopicHazardSignals(title),
    commonMistakes: buildTopicCommonMistakes(title),
    actionPlan: buildTopicActionPlan(title),
    supervisorScenario: buildSupervisorScenario(title),
    speakerNotes: buildSpeakerNotes(categorySlug, title),
    checklist: buildTopicChecklist(title),
    reviewQuestions: buildTopicReviewQuestions(title),
    meetingPoints: buildTopicMeetingPoints(categorySlug, title),
    slides: buildSlides(categorySlug, title),
    boloFormUrl: placeholderUrl,
    };
  });
}

/**
 * Categories that have been given their real toolbox-talk topic list and
 * authored content. These skip the synthetic 11x expansion — their topics
 * array is the final list. Others keep the placeholder expansion until they
 * are authored.
 */
const realContentCategories = new Set<string>([
  "confined-space",
  "working-at-heights",
  "electrical-safety",
  "excavation-safety",
  "fire-safety",
  "ppe",
  "forklift-safety",
  "welding-and-hot-work",
  "fire-extinguisher-safety",
  "compressed-gas-and-air-tool-safety",
  "vehicle-and-driver-safety",
  "rigging-and-material-handling-equipment",
  "construction-safety",
  "demolition-safety",
  "site-access-and-public-protection",
  "housekeeping",
  "slips-trips-and-falls",
  "accident-reporting",
  "first-aid",
]);

function createCategory(input: CategoryInput): TrainingCategory {
  const topicTitles = realContentCategories.has(input.slug)
    ? input.topics
    : expandTopicTitles(input.topics);

  return {
    ...input,
    sourceLinks: [toolboxTalkSourceLink, ...(categorySourceLinks[input.slug] ?? [])],
    topics: buildTopics(input.slug, topicTitles),
  };
}

const coreTrainingCategories: TrainingCategory[] = [
  createCategory({
    id: "construction-safety",
    title: "Construction Safety",
    slug: "construction-safety",
    description: "General construction safety practices and awareness to help keep everyone safe on site.",
    overview:
      "Construction Safety brings together the day-to-day habits that keep crews safe on active job sites. It covers planning, hazard awareness, communication, equipment use, and personal responsibility. This category works well as a broad orientation meeting because it gives supervisors a reliable baseline they can repeat across projects, trades, and shifts.",
    meetingPurpose:
      "Use this category when you need a full-site safety meeting that resets the standard for hazard awareness, safe behavior, and accountability.",
    keyTakeaways: [
      "Workers should identify hazards before starting work, not after the task is underway.",
      "Unsafe conditions, damaged equipment, and missing protection should be reported immediately.",
      "Supervisors should connect each topic to real site examples and current project conditions.",
      "Training is strongest when workers understand both the rule and the reason behind it."
    ],
    supervisorNotes: [
      "Open the meeting with the top three hazards currently present on your site.",
      "Ask each crew lead to name one recent good catch or lesson learned from the field.",
      "Close by confirming who owns follow-up corrections after the meeting."
    ],
    discussionPrompts: [
      "What task on this project has the highest chance of becoming unsafe if people rush?",
      "Where do we most often see workers skip a step because the task feels routine?",
      "What hazards have changed since the start of this phase of work?"
    ],
    articleSections: [
      {
        heading: "Why construction safety meetings matter",
        body: [
          "Construction work changes by the hour. Crews move from excavation to framing, from electrical rough-in to material delivery, and each shift introduces new conditions. A strong safety meeting helps workers slow down long enough to recognize those changes before they create injuries.",
          "The purpose of the meeting is not only to review rules. It is to build a shared picture of what safe work should look like on this site, today, with this crew, under these conditions. Workers should leave the conversation knowing what hazards matter most and what actions are expected from them."
        ]
      },
      {
        heading: "Planning before work starts",
        body: [
          "A safe job begins with planning. Before a task starts, the crew should know the scope of work, the sequence of the task, the tools required, and the protections that must already be in place. When the plan is unclear, people fill in the gaps with assumptions, and assumptions are where many incidents begin.",
          "Supervisors should encourage a short pre-task review that asks simple questions: What can hurt us here? What conditions would make us stop? What equipment needs inspection first? This habit turns training into action and helps prevent routine jobs from becoming risky."
        ]
      },
      {
        heading: "Building a stronger reporting culture",
        body: [
          "A healthy safety culture depends on fast reporting. Crews should feel expected, not reluctant, to speak up about near misses, broken ladders, missing guards, bad housekeeping, and unclear instructions. Reporting should be treated as a contribution to the team, not a complaint.",
          "If workers believe concerns will be ignored or punished, hazards stay hidden until something goes wrong. Supervisors can change that by thanking workers for raising issues, correcting hazards quickly, and closing the loop so employees can see that reporting leads to action."
        ]
      }
    ],
    topics: [
      "The Focus Four Hazards in Construction",
      "Your Rights and Responsibilities Under OSHA",
      "New-Worker Safety Orientation and Training",
      "Job Hazard Analysis and Pre-Task Planning",
      "The Competent Person and Daily Inspections",
      "Struck-By Hazards",
      "Caught-In and Caught-Between Hazards",
      "Hand and Power Tool Safety",
      "Signs, Signals, Tags, and Barricades",
      "Illumination, Sanitation, and Site Welfare",
      "Personal Protective Equipment on Site",
      "Emergency Action Plans and Site Preparedness",
      "Stop-Work Authority and Reporting Hazards"
    ]
  }),
  createCategory({
    id: "slips-trips-and-falls",
    title: "Slips, Trips and Falls",
    slug: "slips-trips-and-falls",
    description: "Prevent slips, trips, and falls through hazard awareness, good housekeeping, and safer walking surfaces.",
    overview:
      "Slips, trips, and falls are among the most common workplace injuries because they grow out of everyday conditions that people learn to ignore. Wet floors, uneven ground, loose materials, poor lighting, and blocked walkways can all seem minor until someone gets hurt. This category helps teams refocus on basic site order and movement safety.",
    meetingPurpose:
      "Use this category for a practical crew meeting focused on housekeeping, travel paths, and the conditions workers encounter while moving around the job site.",
    keyTakeaways: [
      "Many fall injuries start with small conditions such as cords, debris, or surface changes.",
      "Good housekeeping is a safety control, not just a cleanliness goal.",
      "Workers should report and correct hazards as soon as they are found.",
      "Walking paths, stairs, and access points should be checked throughout the shift."
    ],
    supervisorNotes: [
      "Walk the crew mentally through the busiest travel path on the site and identify where problems tend to show up.",
      "Tie the meeting to weather, mud, rain, or changing access routes if they are affecting the project.",
      "Assign ownership for cleanup instead of leaving it as a general reminder."
    ],
    discussionPrompts: [
      "Where do we see the most clutter build up by the end of the day?",
      "What surfaces become dangerous after weather changes or material deliveries?",
      "What would stop a visitor or a new worker from safely navigating the site today?"
    ],
    articleSections: [
      {
        heading: "Why simple hazards cause serious injuries",
        body: [
          "Slips, trips, and falls are often seen as minor incidents, but they can lead to fractures, strains, head injuries, and lost work time. The reason they happen so often is that the hazards are familiar. People walk past them repeatedly and start to accept them as normal.",
          "Training should remind crews that a hazard does not need to look dramatic to cause harm. A torn mat, trailing hose, or mud on a stair tread can be enough. Workers need to be trained to notice these small conditions and respond before someone is injured."
        ]
      },
      {
        heading: "Housekeeping as an active control",
        body: [
          "Housekeeping should be discussed as part of risk control, not as an afterthought. Materials stacked too close to walkways, tools left in access routes, and packaging on the floor all create avoidable exposure. Keeping work areas orderly makes movement safer and improves emergency access.",
          "Supervisors should set clear expectations for who clears debris, when areas are cleaned, and what standard must be maintained before a shift ends. When crews understand that housekeeping is part of doing the task correctly, the site becomes safer and more efficient."
        ]
      },
      {
        heading: "Walking surface awareness",
        body: [
          "Not all hazards are inside buildings. Exterior paths, temporary ramps, excavation edges, and transitions between surfaces can create unstable footing. Conditions can change with weather, traffic, and ongoing construction work.",
          "A useful meeting discussion is to ask workers where they feel least confident walking on the project. That question often reveals hidden issues with grading, drainage, temporary access, or maintenance that should be corrected quickly."
        ]
      }
    ],
    topics: [
      "How Slips, Trips, and Falls Happen",
      "Keeping Walking and Working Surfaces Safe",
      "Wet, Oily, and Slippery Surfaces",
      "Ice, Snow, and Bad-Weather Walking Conditions",
      "Uneven Surfaces and Changes in Level",
      "Trip Hazards — Cords, Hoses, Debris, and Clutter",
      "Slip-Resistant Footwear",
      "Lighting for Safe Movement",
      "Stairways",
      "Handrails and Guardrails",
      "Floor Holes, Openings, and Covers",
      "Protecting Open-Sided Floors, Platforms, and Runways"
    ]
  }),
  createCategory({
    id: "electrical-safety",
    title: "Electrical Safety",
    slug: "electrical-safety",
    description: "Electrical safety procedures and best practices for recognizing hazards and reducing the risk of shock, burns, and arc exposure.",
    overview:
      "Electrical hazards can injure workers instantly and often without warning. This category supports meeting discussions about inspection, isolation, equipment condition, and safe work boundaries around power sources. It is useful both for electrical trades and for general workers who may be exposed to temporary power, extension cords, tools, and energized systems.",
    meetingPurpose:
      "Use this category to reinforce that electricity must be respected, planned for, and controlled before any work begins.",
    keyTakeaways: [
      "Workers should never assume a circuit or piece of equipment is safe because it worked yesterday.",
      "Inspection and isolation are essential before contact with electrical systems.",
      "Temporary power setups can be just as dangerous as permanent installations.",
      "Damage, moisture, and missing protection sharply increase risk."
    ],
    supervisorNotes: [
      "Ask the crew where temporary cords, panels, or energized lines are most likely to create exposure this week.",
      "Make sure non-electrical workers understand the stop-work expectation around damaged equipment.",
      "Use real examples of shock, burn, or near-miss events from the field if available."
    ],
    discussionPrompts: [
      "Which electrical hazards are easiest to overlook on this site?",
      "What signs tell us a tool or cord should be taken out of service immediately?",
      "How do we prevent pressure from pushing people to work around live energy?"
    ],
    articleSections: [
      {
        heading: "Electricity is invisible but not unpredictable",
        body: [
          "One of the biggest challenges with electrical safety is that the danger cannot be seen directly. Workers rely on condition, testing, labeling, isolation, and procedure to understand what they are dealing with. That makes discipline critical. Shortcuts around inspection or lockout can place workers in contact with energy they never intended to face.",
          "A useful training message is that electrical exposure is not limited to electricians. Laborers, operators, carpenters, and delivery personnel can all encounter cords, panels, damaged tools, or overhead lines. Everyone on site needs enough awareness to recognize a problem and stop before the hazard escalates."
        ]
      },
      {
        heading: "Inspection as the first line of defense",
        body: [
          "Inspections should focus on what has changed. A cord that was safe last week may now be crushed, cut, wet, or missing strain relief. A panel that was protected yesterday may now be open, blocked, or exposed to traffic. Workers should be taught to pause and inspect before use, especially when equipment has been moved or shared between crews.",
          "Training becomes stronger when workers can name what they are looking for: exposed conductors, missing grounding, damaged insulation, overloaded connections, loose covers, and signs of heat. Specific language helps people act with confidence instead of relying on a vague sense that something might be wrong."
        ]
      },
      {
        heading: "Control measures and boundaries",
        body: [
          "Electrical incidents are prevented by layers of control: de-energizing when possible, locking out sources, maintaining clear approach distances, using proper protective equipment, and keeping unqualified workers away from hazardous zones. When crews understand these layers, they are less likely to treat any single safeguard as enough on its own.",
          "Supervisors should also discuss environmental factors. Water, conductive materials, damaged temporary power, and rushed troubleshooting all raise exposure. A good meeting closes with a direct reminder that no production goal justifies improvising around energized systems."
        ]
      }
    ],
    topics: [
      "Recognizing Electrical Hazards on Site",
      "Shock, Arc Flash, and Arc Blast",
      "Overhead Power Lines and Safe Approach Distances",
      "Grounding and Bonding Basics",
      "GFCIs and the Assured Equipment Grounding Program",
      "Inspecting Cords, Plugs, and Portable Power Tools",
      "Lockout/Tagout for Electrical Work",
      "Working On or Near Energized Parts",
      "Temporary Wiring and Extension Cords",
      "Electrical PPE and Insulated Tools",
      "Responding to an Electrical Incident",
      "Arc Flash and Shock Approach Boundaries",
      "Energized Electrical Work Permits",
      "Stored Energy — Capacitors, Batteries, and Discharge"
    ]
  }),
  createCategory({
    id: "ppe",
    title: "PPE (Personal Protective Equipment)",
    slug: "ppe",
    description: "Personal protective equipment guidance, selection, inspection, and replacement expectations for job site work.",
    overview:
      "PPE is one of the most visible parts of a site safety program, but it only works when it is selected correctly, worn consistently, and kept in usable condition. This category is designed to help teams go beyond the message of wear your PPE and focus instead on how different hazards require different protection.",
    meetingPurpose:
      "Use this category when you need to reset expectations for proper PPE use, inspection, and replacement across multiple crews or trades.",
    keyTakeaways: [
      "PPE must match the actual hazard, not just the job title or habit.",
      "Damaged, expired, or poorly fitted PPE should be removed from service.",
      "Supervisors should explain why each item is required, not just enforce it.",
      "PPE is a final layer of protection and does not replace planning or engineering controls."
    ],
    supervisorNotes: [
      "Bring examples of worn or damaged PPE if you want the meeting to feel more concrete.",
      "Review where replacement PPE is stored and who workers should contact when gear needs to be changed out.",
      "If a task has changed recently, make sure the required PPE list has changed with it."
    ],
    discussionPrompts: [
      "What PPE on this site is most often worn incorrectly or inconsistently?",
      "Where do workers lose time because the correct PPE is not readily available?",
      "How do we make sure visitors and subcontractors meet the same protection standard?"
    ],
    articleSections: [
      {
        heading: "Why PPE conversations need more depth",
        body: [
          "It is easy for safety meetings to reduce PPE to a compliance checklist. Hard hat, safety glasses, gloves, vest. But real training should help workers understand what hazards each item is controlling and where those controls can fail. When people understand the reason for the equipment, they are more likely to use it properly and consistently.",
          "PPE should also be discussed in terms of fit, condition, and compatibility. Workers may need different gloves for cut resistance versus chemical exposure, different eye protection for grinding versus splash hazards, and different respiratory protection depending on the airborne contaminant. One size does not fit every task."
        ]
      },
      {
        heading: "Inspection and replacement expectations",
        body: [
          "A piece of PPE can appear present while still being ineffective. Cracked hard hats, scratched lenses, stretched harnesses, damaged glove coatings, and worn boot soles all reduce protection. Training meetings should remind workers that inspection is part of wearing PPE correctly.",
          "Supervisors should make replacement simple. If workers need approval, paperwork, or a long walk across the site just to replace defective gear, they are more likely to keep using unsafe equipment. The system should support quick replacement and clear accountability."
        ]
      },
      {
        heading: "PPE as one layer in a larger system",
        body: [
          "The meeting should also reinforce that PPE is not the only answer. Better planning, guarding, ventilation, housekeeping, and isolation often do more to reduce exposure than equipment alone. PPE protects the worker, but the best safety programs also remove or reduce the hazard whenever possible.",
          "That message matters because crews sometimes treat PPE as permission to proceed under weak conditions. A face shield does not make a grinder safe if the wheel is damaged. A harness does not make roof work safe if there is no rescue plan. Meetings should connect PPE use to the bigger control strategy."
        ]
      }
    ],
    topics: [
      "Hazard Assessment and Selecting the Right PPE",
      "Head Protection — Hard Hats",
      "Eye and Face Protection",
      "Hearing Protection",
      "Hand and Arm Protection",
      "Foot and Leg Protection",
      "Respiratory Protection",
      "High-Visibility Clothing",
      "Protective Clothing for Skin and Body",
      "Fall Protection Harnesses as PPE",
      "Inspecting, Maintaining, and Replacing PPE",
      "Working Over or Near Water — Life Jackets and Ring Buoys"
    ]
  }),
  createCategory({
    id: "working-at-heights",
    title: "Working at Heights",
    slug: "working-at-heights",
    description: "Fall protection, elevated work planning, and controls for ladders, roofs, platforms, and exposed edges.",
    overview:
      "Working at heights remains one of the most serious exposures in construction because a single missed safeguard can lead to a severe or fatal injury. This category gives supervisors enough structure to hold a meaningful meeting on planning, access, protection systems, and worker decision-making before elevated work begins.",
    meetingPurpose:
      "Use this category for crews working on ladders, scaffolds, roofs, aerial lifts, elevated decks, or any task with a meaningful fall exposure.",
    keyTakeaways: [
      "Fall protection has to be in place before the worker reaches the edge or elevation.",
      "Access equipment should be selected for the task, not based on convenience.",
      "Inspection, anchorage, and rescue planning are part of height safety.",
      "Workers should stop when they cannot maintain three points of contact or secure footing."
    ],
    supervisorNotes: [
      "Tie the talk directly to the elevated tasks scheduled for the next shift or week.",
      "Review not just the equipment, but how workers will move materials and tools while elevated.",
      "Ask who would respond if a suspended worker had to be rescued quickly."
    ],
    discussionPrompts: [
      "Where are workers most likely to overreach or improvise at height on this project?",
      "What parts of the site make access more complicated than it appears on paper?",
      "How confident is the team in the rescue plan if fall arrest is used?"
    ],
    articleSections: [
      {
        heading: "Height work begins on the ground",
        body: [
          "Most fall incidents begin before anyone leaves the ground. They start with poor access selection, missing anchor points, rushed staging, incomplete guardrails, or unclear sequencing. A productive training meeting should emphasize that the safest time to solve a height hazard is during planning.",
          "Workers should know which tasks require ladders, which require scaffolds, which require aerial platforms, and when none of those options are sufficient without additional fall protection. Choosing the wrong access method often pushes people into awkward body positions, overreaching, or working without proper support."
        ]
      },
      {
        heading: "Protection systems need real understanding",
        body: [
          "Guardrails, safety nets, personal fall arrest systems, and positioning systems each serve different purposes. Training should clarify what each system does, what it does not do, and what conditions make it ineffective. Workers should never be left with the message that a harness alone solves the problem.",
          "Supervisors can strengthen the meeting by discussing anchorage, connector use, inspection points, and clearance requirements in plain language. The goal is to make sure workers can recognize whether the system in front of them is truly ready for use."
        ]
      },
      {
        heading: "Behavior at elevation",
        body: [
          "Even with proper equipment, safe behavior matters. Carrying too much by hand, climbing with tools, stepping onto unprotected surfaces, or leaning outside guarded zones can defeat good planning. Meetings should reinforce steady movement, clean access paths, and stopping when conditions change.",
          "Weather, lighting, wind, and fatigue deserve attention too. Elevated work that is manageable early in the day can become unstable later. Crews should understand that reassessing conditions is not a delay. It is part of completing the work correctly."
        ]
      }
    ],
    topics: [
      "Recognizing Fall Hazards",
      "Guardrail Systems",
      "Personal Fall Arrest Systems",
      "Choosing and Using Anchorage Points",
      "Ladder Safety",
      "Scaffold Safety",
      "Aerial and Scissor Lift Safety",
      "Roof and Leading-Edge Work",
      "Floor Holes and Wall Openings",
      "Inspecting Fall Protection Equipment",
      "Rescue and Suspension Trauma After a Fall",
      "Positioning and Travel-Restraint Systems",
      "Safety Net Systems",
      "Warning Lines and Controlled Access Zones",
      "Skylights and Fragile Roof Surfaces"
    ]
  }),
  createCategory({
    id: "confined-space",
    title: "Confined Space Safety",
    slug: "confined-space",
    description: "Confined space hazard awareness, atmospheric controls, entry planning, and rescue responsibilities.",
    overview:
      "Confined space work brings together hidden hazards, limited access, and a high need for planning. This category is built for structured training meetings where supervisors need to explain why entry decisions, atmospheric testing, communication, and rescue readiness cannot be treated casually.",
    meetingPurpose:
      "Use this category when preparing crews for entry work, attendant duties, or site awareness around tanks, vaults, pits, and other restricted spaces.",
    keyTakeaways: [
      "Hazards inside a confined space can change quickly and may not be obvious from outside the opening.",
      "Testing, ventilation, permit controls, and communication are all critical layers of protection.",
      "Workers should never enter based on assumptions or previous conditions alone.",
      "A rescue plan must exist before entry begins, not after an emergency occurs."
    ],
    supervisorNotes: [
      "Clarify which spaces on your project are restricted and who is authorized for entry decisions.",
      "Review how attendants communicate and what conditions require immediate evacuation.",
      "Make sure the meeting distinguishes general awareness from qualified entry responsibilities."
    ],
    discussionPrompts: [
      "What makes a space on this site difficult to assess from the outside?",
      "How do we respond if conditions change mid-entry?",
      "Who has the authority to stop entry when permit conditions are no longer met?"
    ],
    articleSections: [
      {
        heading: "Why confined spaces demand discipline",
        body: [
          "Confined spaces can contain oxygen deficiency, toxic atmospheres, engulfment hazards, mechanical energy, and difficult access conditions, sometimes all at once. Because the space may look quiet or routine from the outside, crews can underestimate the risk and move too quickly toward entry.",
          "A good training meeting should remind workers that confined space safety depends on strict process. The space must be identified, the hazards evaluated, the atmosphere tested, and the controls confirmed before entry is considered. Experience alone is not a substitute for procedure."
        ]
      },
      {
        heading: "Atmospheric awareness and control",
        body: [
          "Atmospheric testing is central because the most dangerous conditions may be invisible and odorless. Workers should understand why testing must be performed properly, why ventilation may be needed, and why a previous safe reading does not guarantee current safety.",
          "Supervisors should explain what the crew should do if monitors alarm, ventilation fails, or the work being performed changes the atmosphere. These moments are where training has to translate into immediate action, not debate."
        ]
      },
      {
        heading: "Roles, communication, and rescue",
        body: [
          "Confined space safety is a team process. Entrants, attendants, supervisors, and rescue personnel all have different responsibilities. Meetings should define those roles clearly so that nobody assumes someone else is watching the conditions or managing the response.",
          "Rescue planning deserves direct attention. Workers should know that an emergency in a confined space can escalate quickly and that unplanned rescue attempts often create additional victims. The safer path is to rely on the prepared rescue process, communication plan, and evacuation triggers established before entry."
        ]
      }
    ],
    topics: [
      "Hazard Identification in Confined Spaces",
      "Permit-Required vs. Non-Permit Confined Spaces",
      "Atmospheric Testing and Air Monitoring",
      "Ventilating a Confined Space",
      "Isolation and Lockout Before Entry",
      "Engulfment and Entrapment Hazards",
      "The Confined Space Entry Permit",
      "Authorized Entrant Duties",
      "Attendant (Hole Watch) Duties",
      "Entry Supervisor Duties",
      "Emergency Rescue and Retrieval Systems",
      "Reclassification and Alternate-Entry Procedures",
      "Host and Contractor Coordination",
      "Selecting and Evaluating a Rescue Service"
    ]
  }),
  createCategory({
    id: "accident-reporting",
    title: "Accident Reporting",
    slug: "accident-reporting",
    description: "How to report incidents, near misses, injuries, and corrective actions with clarity and speed.",
    overview:
      "Accident reporting is one of the strongest tools for learning from the field, but many crews only think about it after something serious happens. This category helps supervisors explain what should be reported, when it should be escalated, and how better reporting leads to better prevention.",
    meetingPurpose:
      "Use this category to strengthen the reporting culture on site and remove confusion around what needs to be communicated.",
    keyTakeaways: [
      "Near misses and unsafe conditions should be reported before they become injuries.",
      "Fast reporting allows treatment, investigation, and correction to happen sooner.",
      "Clear reporting is part of professional job performance, not just compliance paperwork.",
      "Workers should know exactly who to notify and what details to provide."
    ],
    supervisorNotes: [
      "If possible, walk through the actual reporting chain your company uses.",
      "Reassure the crew that reporting concerns is expected and supported.",
      "Explain how incident information leads to corrective action, not just documentation."
    ],
    discussionPrompts: [
      "Why do people hesitate to report near misses or minor incidents?",
      "What information is most often missing when an event is first reported?",
      "How can supervisors make the reporting process easier and faster?"
    ],
    articleSections: [
      {
        heading: "Reporting as a prevention tool",
        body: [
          "When crews hear the words accident reporting, they often think only about injuries. But a mature safety culture uses reporting to capture unsafe acts, hazardous conditions, property damage, and near misses before they turn into something worse. The earlier the signal, the better the chance to prevent a repeat event.",
          "That is why supervisors should describe reporting as a core part of safe work. It is how the company learns what is happening in the field, how patterns are identified, and how corrective actions are assigned. Without good reporting, leaders are making decisions without good information."
        ]
      },
      {
        heading: "What good reporting looks like",
        body: [
          "Good reporting is timely, factual, and specific. Workers should know the basics: what happened, where it happened, when it happened, who was involved, what conditions were present, and what immediate actions were taken. Even simple incidents become harder to understand when that information is delayed or incomplete.",
          "Meetings should also remind crews to avoid guessing or blaming. The first priority is getting the right information to the right people so the hazard can be controlled and the next steps can be managed professionally."
        ]
      },
      {
        heading: "Using lessons learned",
        body: [
          "The value of reporting increases when workers see that it leads to action. If crews report a repeated access problem, the route should be changed. If they report damaged tools, replacements should appear. If they raise near misses during deliveries, traffic control should improve.",
          "Supervisors can build trust by circling back on what changed because a concern was reported. That closes the learning loop and reinforces that speaking up protects the whole team."
        ]
      }
    ],
    topics: [
      "Why We Report — Injuries, Near Misses, and Prevention",
      "Report It Right Away — Telling Your Supervisor",
      "Reporting Severe Injuries — The 8-Hour and 24-Hour Rules",
      "What Makes an Injury Recordable",
      "First Aid vs. Medical Treatment",
      "The OSHA 300 Log, 300A Summary, and 301 Report",
      "Near-Miss Reporting",
      "Incident Investigation and Root Cause",
      "Corrective Actions That Prevent Recurrence",
      "Your Right to Report Without Retaliation",
      "Writing a Clear Incident Report"
    ]
  }),
  createCategory({
    id: "asbestos-awareness",
    title: "Asbestos Awareness",
    slug: "asbestos-awareness",
    description: "Awareness-level training on recognizing asbestos concerns, health risks, and the need for escalation.",
    overview:
      "Asbestos Awareness is designed to help workers recognize potential asbestos-containing materials, understand why disturbance is dangerous, and know when to stop and report concerns. It is not task-specific abatement training. Instead, it supports general site awareness and escalation.",
    meetingPurpose:
      "Use this category when crews may encounter older materials, demolition areas, renovation work, or uncertainty about building components.",
    keyTakeaways: [
      "Workers should never disturb suspect materials unless the work has been properly evaluated and authorized.",
      "Awareness training helps crews recognize warning signs and escalate concerns early.",
      "Health risks may not be immediate, which makes prevention and discipline even more important.",
      "Clear reporting and restricted access protect both workers and the wider project."
    ],
    supervisorNotes: [
      "Make sure the meeting stays within awareness-level guidance and does not imply specialized abatement qualification.",
      "Explain who must be contacted if suspect material is found or damaged.",
      "If relevant, point out building areas or materials that require extra caution on the current project."
    ],
    discussionPrompts: [
      "What materials on older sites tend to create uncertainty for workers?",
      "How do we respond if a suspect material is damaged during routine work?",
      "What signs would tell us to stop and isolate an area immediately?"
    ],
    articleSections: [
      {
        heading: "Why asbestos awareness matters",
        body: [
          "Asbestos hazards are different from many job site hazards because the effects may not be obvious in the moment. Workers can disturb material without seeing an immediate injury, which makes complacency especially dangerous. Awareness meetings should emphasize that long-term health risks are still serious and still preventable.",
          "The purpose of the training is to help workers recognize where asbestos-containing materials may exist and to make sure they understand the correct response: stop, protect the area, and report the concern through the proper channel."
        ]
      },
      {
        heading: "Recognizing suspect materials and conditions",
        body: [
          "Older insulation, flooring, ceiling systems, fireproofing, and pipe coverings can all create uncertainty. Workers do not need to identify asbestos conclusively, but they do need enough awareness to understand that certain materials should not be cut, drilled, broken, or cleaned up casually when their composition is unknown.",
          "Supervisors should stress that damage, dust, or demolition debris around suspect materials should trigger caution. The key is not guessing right every time. The key is knowing when the uncertainty itself is enough reason to stop."
        ]
      },
      {
        heading: "Escalation and site response",
        body: [
          "A good site response involves stopping the work, limiting access, notifying the proper contact, and waiting for the approved process to take over. Workers should not be left to improvise cleanup or disposal methods on their own.",
          "Meetings should reinforce that raising a concern is the correct action even if the material later turns out not to contain asbestos. Fast reporting is a protective step, not an overreaction."
        ]
      }
    ],
    topics: [
      "Types of Asbestos-Containing Materials",
      "Where Asbestos is Found on Job Sites",
      "Health Risks of Asbestos Exposure",
      "Proper PPE When Asbestos is Present",
      "Reporting Suspected Asbestos",
      "Abatement Procedures Overview"
    ]
  }),
  createCategory({
    id: "coshh-hazardous-substances",
    title: "COSHH (Hazardous Substances)",
    slug: "coshh-hazardous-substances",
    description: "Guidance for identifying hazardous substances, reading safety data, and reducing harmful exposure on site.",
    overview:
      "This category helps crews think more clearly about chemicals, dusts, vapors, and other hazardous substances they may use or generate at work. It supports meetings on product awareness, exposure routes, storage, handling, and practical control measures such as ventilation, substitution, containment, and hygiene.",
    meetingPurpose:
      "Use this category when crews work with chemicals, coatings, fuels, silica-producing tasks, adhesives, cleaners, or any process that creates airborne contaminants.",
    keyTakeaways: [
      "Hazardous substances include both packaged products and exposures created by the work itself.",
      "Labels and safety data sheets help workers understand handling, storage, and emergency concerns.",
      "Exposure can happen by breathing, skin contact, or accidental ingestion.",
      "Controls should focus on reducing exposure before relying on PPE alone."
    ],
    supervisorNotes: [
      "Bring up the specific substances or dust-generating activities currently present on the project.",
      "Review where SDS information is stored and how workers can access it quickly.",
      "Use the meeting to confirm storage, disposal, and hygiene expectations."
    ],
    discussionPrompts: [
      "What hazardous substances are most common on this site right now?",
      "Where do workers take shortcuts because a product is used frequently?",
      "What controls could reduce dust or vapor exposure before PPE is needed?"
    ],
    articleSections: [
      {
        heading: "Hazard awareness beyond labels",
        body: [
          "Many workers think of hazardous substances only as chemicals in containers, but exposure can also come from dust created by cutting, fumes created by hot work, or vapors released during cleaning and coating operations. Training should help crews recognize that the work process itself can create the hazard.",
          "That broader understanding matters because it changes how people plan. A task that seems routine may still require isolation, wet methods, local exhaust, better storage, or hygiene controls once the exposure is recognized clearly."
        ]
      },
      {
        heading: "Using safety information effectively",
        body: [
          "Safety data sheets are most useful when workers know what they are looking for. Meetings should encourage crews to focus on the main questions: What are the hazards? How should the substance be handled and stored? What PPE is required? What first aid or spill response concerns should we know about?",
          "Workers do not need to memorize every section. They do need enough familiarity to use the information when a product is introduced, when conditions change, or when there is an exposure concern."
        ]
      },
      {
        heading: "Reducing exposure in practical ways",
        body: [
          "The best meetings move from awareness to control. Supervisors can walk through options such as selecting a safer product, using wet methods to suppress dust, improving ventilation, separating workers from the source, and cleaning up contaminated waste correctly.",
          "When crews understand that exposure reduction is built into the task plan, they are less likely to see hazardous substance control as an extra burden added after the fact."
        ]
      }
    ],
    topics: [
      "Identifying Hazardous Substances on Site",
      "Reading Safety Data Sheets",
      "Risk Assessment for Hazardous Substances",
      "Dust and Silica Exposure Controls",
      "Chemical Storage and Handling",
      "Reducing Exposure to Harmful Substances"
    ]
  }),
  createCategory({
    id: "excavation-safety",
    title: "Excavation Safety",
    slug: "excavation-safety",
    description: "Excavation and trench safety guidance for cave-in prevention, access control, inspections, and utility awareness.",
    overview:
      "Excavation work can become dangerous quickly because soil, water, vibration, utilities, and equipment movement all affect stability. This category gives supervisors a meeting-ready structure for discussing trench hazards, protective systems, spoil placement, access, and inspection discipline before and during digging operations.",
    meetingPurpose:
      "Use this category for crews involved in digging, trenching, utility work, grading, or any task near open excavations.",
    keyTakeaways: [
      "Soil can fail suddenly, which is why excavation protection must be planned in advance.",
      "Inspections are required whenever conditions change, especially after rain or disturbance.",
      "Utilities, access routes, and spoil placement all affect worker exposure.",
      "Excavations should be treated as active hazards even when no one is inside them."
    ],
    supervisorNotes: [
      "Review the specific excavation depths, nearby utilities, and protective systems planned for the work.",
      "Talk through how the crew will keep people and equipment away from the edge.",
      "If weather is changing, make that part of the conversation instead of a side note."
    ],
    discussionPrompts: [
      "What site conditions make this excavation more complex than it appears?",
      "How do we know if the protective system is still appropriate after conditions change?",
      "Where are the biggest risks from traffic, spoil piles, or nearby loads?"
    ],
    articleSections: [
      {
        heading: "Excavations are changing systems",
        body: [
          "A trench or excavation should never be treated as a static condition. Soil dries, softens, shifts, and absorbs water. Vibration from traffic or equipment can change stability. Deliveries and material staging can add loads near the edge. A productive safety meeting should frame excavation work as something that must be reassessed continuously.",
          "This mindset helps workers understand why yesterday's safe condition does not automatically mean today's condition is safe. It also reinforces the role of inspections and competent oversight before entry or continued work."
        ]
      },
      {
        heading: "Protective systems and edge discipline",
        body: [
          "Training should explain the purpose of sloping, shoring, shielding, and spoil placement in practical terms. These measures are not paperwork requirements. They are the controls that keep soil from collapsing, equipment from overloading the edge, and people from being exposed unnecessarily.",
          "Crews should also discuss edge discipline. Materials, spoil piles, and equipment placed too close to the excavation can increase risk. So can workers leaning over edges, crossing unprotected openings, or using poor access points to get in and out."
        ]
      },
      {
        heading: "Utilities, weather, and inspections",
        body: [
          "Excavation meetings should always include utility awareness. Striking buried power, gas, communication, or water lines can create immediate and serious consequences. Workers should understand the need for proper locating, marking, and careful digging around known services.",
          "Weather is another major factor. Rainfall, freeze-thaw cycles, or runoff can weaken soil and change the condition of access routes. A strong meeting closes with a reminder that inspections are not a one-time event. They are part of how the crew stays ahead of changing ground conditions."
        ]
      }
    ],
    topics: [
      "Recognizing Excavation and Trench Hazards",
      "How and Why Cave-Ins Happen",
      "Soil Classification and Testing",
      "Sloping and Benching Systems",
      "Shoring Systems",
      "Trench Boxes and Shield Systems",
      "The Competent Person and Daily Inspections",
      "Safe Access and Egress",
      "Locating and Working Around Underground Utilities",
      "Spoil Piles, Surcharge Loads, and Edge Protection",
      "Hazardous Atmospheres, Water, and Emergency Response",
      "Mobile Equipment and Traffic Around the Excavation"
    ]
  }),
  createCategory({
    id: "fire-extinguisher-safety",
    title: "Fire Extinguisher Safety",
    slug: "fire-extinguisher-safety",
    description: "Extinguisher basics, inspections, and site response expectations during early-stage fire emergencies.",
    overview:
      "Fire extinguisher safety meetings help workers understand what extinguishers are for, where they should be located, and the limits of using them. This category is a good fit for site-wide refresher talks because it reinforces visibility, accessibility, inspection awareness, and the difference between a controllable incipient fire and a situation that requires evacuation.",
    meetingPurpose:
      "Use this category when crews need a practical reminder on extinguisher readiness and safe response during a fire event.",
    keyTakeaways: [
      "Workers should know where extinguishers are located before an emergency happens.",
      "Different fire types require the correct extinguisher and a clear understanding of personal limits.",
      "Blocked, damaged, or uninspected extinguishers reduce readiness when time matters most.",
      "If the fire is growing or conditions are unsafe, evacuation is the right response."
    ],
    supervisorNotes: [
      "Point out extinguisher locations relevant to the current site layout.",
      "Use the meeting to confirm access is not blocked by materials or equipment.",
      "Reinforce that life safety comes before property protection."
    ],
    discussionPrompts: [
      "Would everyone on this crew know the nearest extinguisher right now?",
      "What would make a fire too dangerous to fight with a portable extinguisher?",
      "Where on this site are extinguishers most likely to become blocked or overlooked?"
    ],
    articleSections: [
      {
        heading: "Preparedness before the emergency",
        body: [
          "Fire extinguisher training is most useful before there is any smoke, heat, or panic. Workers should know where extinguishers are located, what basic classes of fire they may face, and how site conditions could affect access. In an emergency, people rarely have time to learn these details from scratch.",
          "Meetings should also reinforce visibility and maintenance. An extinguisher hidden behind stored material or missing an inspection tag creates false confidence. Crews need to know that readiness includes placement, access, and condition."
        ]
      },
      {
        heading: "Using extinguishers with judgment",
        body: [
          "Workers should understand that extinguishers are intended for early-stage fires when the person is trained, the extinguisher is appropriate, the exit remains clear, and the fire can be approached safely. If those conditions are not met, the correct action is to raise the alarm and evacuate.",
          "That message helps prevent a common problem: people feeling pressure to act heroically in conditions that are already beyond portable control. Safety meetings should make it clear that stepping back is sometimes the safest and most responsible decision."
        ]
      },
      {
        heading: "Inspection and site discipline",
        body: [
          "Extinguishers should be checked for placement, visibility, damage, tampering, and current inspection status. Workers do not need to perform formal maintenance, but they should know what signs suggest the extinguisher is not ready for use.",
          "Supervisors can use the meeting to connect extinguisher safety to broader fire readiness: good housekeeping, controlled hot work, proper flammable storage, and clear evacuation routes all reduce the chance that a small fire becomes a major event."
        ]
      }
    ],
    topics: [
      "Classes of Fire — A, B, C, D, and K",
      "Types of Portable Extinguishers and What They Put Out",
      "Reading the Label — Ratings and Listings",
      "Size-Up — When to Fight a Fire and When to Get Out",
      "The PASS Technique",
      "Selecting and Distributing Extinguishers",
      "Placement, Mounting, and Access",
      "The Monthly Visual Inspection",
      "Annual Maintenance and Recharging",
      "Hydrostatic Testing Schedules",
      "Employee Training and the Extinguisher Program"
    ]
  }),
  createCategory({
    id: "fire-safety",
    title: "Fire Safety",
    slug: "fire-safety",
    description: "Fire prevention, hot work awareness, flammable storage, and emergency response planning for job sites.",
    overview:
      "Fire Safety covers the broader site practices that reduce ignition, control fuel sources, and prepare crews to respond safely if a fire starts. This category is useful for meetings focused on prevention rather than just emergency equipment.",
    meetingPurpose:
      "Use this category when site conditions involve flammables, hot work, temporary heating, storage concerns, or changing emergency routes.",
    keyTakeaways: [
      "Most site fires are preventable when ignition sources and fuels are managed together.",
      "Hot work, poor housekeeping, and improper storage are common contributors to fire risk.",
      "Workers should know alarm, evacuation, and assembly expectations before an emergency occurs.",
      "Fire watch responsibilities should be specific and actively managed."
    ],
    supervisorNotes: [
      "Connect the talk to any active hot work, fuel storage, or enclosed work areas on site.",
      "Review where assembly points are and whether current site changes affect evacuation routes.",
      "Do not assume crews understand the difference between prevention and emergency response roles."
    ],
    discussionPrompts: [
      "What current tasks on this project create the highest fire risk?",
      "Where are flammable materials most likely to accumulate or be stored poorly?",
      "How would we know if our evacuation plan no longer fits the current phase of work?"
    ],
    articleSections: [
      {
        heading: "Fire prevention begins with site conditions",
        body: [
          "A fire does not require a major failure to start. Small ignition sources, poor storage, combustible debris, and rushed work can combine quickly. Safety meetings should help workers see fire prevention as part of ordinary site control, not something that only matters during emergencies.",
          "This means talking about what is happening now: cutting and welding, heater use, charging equipment, fuel storage, temporary power, and general housekeeping. Workers should be able to connect the meeting directly to their current tasks and surroundings."
        ]
      },
      {
        heading: "Managing ignition sources and fuels",
        body: [
          "Fires need fuel, heat, and the right conditions to grow. Meetings should focus on practical questions: Where are we generating sparks? What combustible materials are nearby? Are flammable liquids stored correctly? Is debris being removed before it becomes part of the hazard?",
          "By framing the discussion this way, supervisors can move the crew from abstract warnings to clear prevention steps such as clearing work areas, separating storage, controlling permits, and maintaining vigilance after hot work ends."
        ]
      },
      {
        heading: "Response readiness and evacuation",
        body: [
          "Prevention is the goal, but readiness still matters. Crews should know how alarms are communicated, where to go, who accounts for personnel, and what roles are assigned during a fire event. If the site changes often, those plans should be reviewed often too.",
          "The meeting should also emphasize that evacuation routes and assembly areas must remain usable. A written plan alone is not enough if current site conditions have made the route confusing or blocked."
        ]
      }
    ],
    topics: [
      "The Fire Triangle and Classes of Fire",
      "Recognizing Fire Hazards on Site",
      "Storing Flammable and Combustible Liquids",
      "Housekeeping and Combustible Debris Control",
      "Controlling Ignition Sources and Hot Work",
      "Temporary Heating Devices",
      "The Site Fire Prevention Plan",
      "Portable Fire Extinguishers — Classes and Placement",
      "Fire Alarm and Detection Systems",
      "Exit Routes and Means of Egress",
      "Evacuation, Alarms, and Assembly Points",
      "Standpipe and Hose Systems",
      "Fixed Fire Suppression Systems",
      "Fire Brigades and Employee Firefighting Roles"
    ]
  }),
  createCategory({
    id: "first-aid",
    title: "First Aid",
    slug: "first-aid",
    description: "Basic first aid awareness, emergency contacts, and early response expectations for job site incidents.",
    overview:
      "First Aid meetings help crews understand what resources exist on site, how to get help quickly, and what basic response expectations apply before professional medical support arrives. This category supports calm, organized discussion around emergencies without overstating worker medical qualifications.",
    meetingPurpose:
      "Use this category when you need a practical site-wide refresher on emergency response, first aid resources, and early care awareness.",
    keyTakeaways: [
      "Workers should know where supplies, AEDs, and emergency contact information are located.",
      "Fast communication and clear reporting improve emergency outcomes.",
      "Only trained personnel should provide care beyond their level of competence.",
      "Scene safety matters before anyone attempts to assist an injured worker."
    ],
    supervisorNotes: [
      "Review actual site-specific emergency numbers, addresses, and access points for responders.",
      "Make sure the crew knows who the trained first aid responders are.",
      "Use scenarios relevant to heat, cuts, falls, or equipment contact if those are current project risks."
    ],
    discussionPrompts: [
      "Would the crew know exactly how to direct emergency services to this work area?",
      "What delays could happen between an injury and getting help on this site?",
      "How do we keep helpers from becoming additional victims during an incident?"
    ],
    articleSections: [
      {
        heading: "First aid readiness is part of site planning",
        body: [
          "When an injury happens, the first few minutes are often confusing. Training helps crews replace panic with a basic plan: make the scene safe, call for help, get trained responders involved, and use available resources appropriately. These fundamentals are valuable even for workers who are not designated first aid providers.",
          "A strong meeting should include the practical details people need under stress, such as supply locations, site address information, access gates, emergency contacts, and who on the team has additional training."
        ]
      },
      {
        heading: "Matching response to the situation",
        body: [
          "Not every incident requires the same response. Minor cuts, serious bleeding, heat illness, electrical contact, and fall-related trauma all present differently. Training meetings should help workers understand the importance of quickly recognizing what kind of event they are dealing with and escalating appropriately.",
          "At the same time, crews should be reminded not to exceed their level of training. The goal is to provide safe, immediate support and get proper medical help engaged as soon as needed."
        ]
      },
      {
        heading: "Communication and follow-through",
        body: [
          "Emergency response does not end once care begins. Someone still needs to manage communication, control the area, direct responders, and make sure supervisors receive accurate information. Meetings should clarify who handles those responsibilities so the response stays organized.",
          "This also connects back to reporting and lessons learned. Reviewing what happened, what worked, and what slowed the response can improve readiness for the next incident."
        ]
      }
    ],
    topics: [
      "First-Aid Readiness on the Job Site",
      "Trained First-Aid Providers and Medical Services",
      "First-Aid Kits and Supplies",
      "Getting Help Fast — Emergency Communication",
      "Scene Safety and the Primary Check",
      "Bloodborne Pathogens and Universal Precautions",
      "Controlling Bleeding and Wounds",
      "Shock",
      "Burns",
      "Fractures, Sprains, and Strains",
      "Eye Injuries and Emergency Eyewash",
      "CPR, Sudden Cardiac Arrest, and AEDs"
    ]
  }),
  createCategory({
    id: "forklift-safety",
    title: "Forklift Safety",
    slug: "forklift-safety",
    description: "Forklift inspection, operation, load handling, and pedestrian awareness for safer material movement.",
    overview:
      "Forklift Safety supports meetings about powered industrial truck hazards, operator expectations, traffic coordination, and pedestrian protection. Because forklifts operate in mixed environments with tight spaces and changing loads, this category works well for both operators and nearby workers who share the same work zone.",
    meetingPurpose:
      "Use this category when material handling, staging, and equipment traffic create exposure for operators, spotters, or pedestrians.",
    keyTakeaways: [
      "Pre-use inspection and safe operating habits are essential before a forklift moves.",
      "Pedestrian awareness and clear communication reduce struck-by and crush risks.",
      "Load limits, visibility, and surface conditions should guide operating decisions.",
      "Forklift safety depends on the surrounding site setup as much as the operator."
    ],
    supervisorNotes: [
      "Discuss the actual travel paths, blind corners, and staging areas in use on this project.",
      "Include pedestrians and spotters in the conversation, not just operators.",
      "Review how loads, uneven ground, and congestion affect the task plan."
    ],
    discussionPrompts: [
      "Where are forklifts most likely to interact with foot traffic on this site?",
      "What conditions most often reduce visibility or stability during movement?",
      "How do we stop routine material handling from becoming rushed and unsafe?"
    ],
    articleSections: [
      {
        heading: "Material movement is a shared risk",
        body: [
          "Forklift safety is not only about operator skill. It also depends on pedestrians, traffic routes, staging practices, load security, and site layout. A good meeting should help the whole team see that forklift incidents often involve multiple factors, not a single mistake made in isolation.",
          "When workers understand this, they are more likely to maintain clear walkways, avoid blind spots, respect exclusion areas, and communicate effectively around moving equipment."
        ]
      },
      {
        heading: "Inspection and condition awareness",
        body: [
          "The safest operating practices begin before the engine starts. Forklifts should be checked for obvious mechanical issues, tire condition, forks, mast function, brakes, horns, alarms, steering, and fluid concerns. Meetings should emphasize that damaged or questionable equipment must be addressed before use.",
          "This is also the time to review the work environment. Surface conditions, overhead clearance, congested storage areas, and changing material locations can all affect how the truck should be operated that day."
        ]
      },
      {
        heading: "Loads, visibility, and communication",
        body: [
          "Loads change the way a forklift behaves. High, unstable, or off-center loads affect visibility, braking, and turning. Training meetings should remind crews that proper speed, smooth movement, and communication with spotters are part of keeping the truck stable and predictable.",
          "Pedestrian communication matters too. Horn use, eye contact where possible, controlled routes, and clear right-of-way expectations all reduce the chance of a worker stepping into the path of moving equipment."
        ]
      }
    ],
    topics: [
      "Powered Industrial Truck Types and Classifications",
      "Operator Training, Evaluation, and Authorization",
      "Daily Pre-Operation Inspection",
      "Understanding the Stability Triangle",
      "Load Capacity, Data Plates, and Center of Gravity",
      "Safe Traveling — Speed, Visibility, Ramps, and Grades",
      "Load Handling — Lifting, Stacking, and Tiering",
      "Pedestrian Safety and Struck-By Prevention",
      "Loading Docks, Trailers, and Rail Cars",
      "Fueling, Battery Charging, and LP Gas Safety",
      "Attachments, Modifications, and Removing a Truck from Service",
      "Tip-Over Survival and Seat Belts",
      "Parking and Leaving a Truck Unattended",
      "Elevating Personnel on a Forklift"
    ]
  }),
  createCategory({
    id: "housekeeping",
    title: "Housekeeping",
    slug: "housekeeping",
    description: "General housekeeping rules, storage practices, and cleanup expectations that support a safer job site.",
    overview:
      "Housekeeping is one of the clearest visible signs of how well a site is being controlled. Clean and organized work areas support safer movement, better access to tools and emergency routes, and fewer hidden hazards. This category gives supervisors enough content to run a focused meeting on expectations, ownership, and field discipline.",
    meetingPurpose:
      "Use this category when clutter, debris, storage problems, or access issues are starting to affect safety and productivity.",
    keyTakeaways: [
      "Housekeeping prevents injuries, delays, and emergency access problems.",
      "Cleanup should be built into the job, not postponed until the end of the week.",
      "Material storage, waste handling, and walkway control all need clear ownership.",
      "A messy site often signals deeper planning and coordination problems."
    ],
    supervisorNotes: [
      "Point to the exact areas on site where housekeeping has recently slipped.",
      "Be specific about expectations for cleanup timing and responsible crews.",
      "Use the meeting to support accountability without turning it into vague criticism."
    ],
    discussionPrompts: [
      "Where does clutter build up fastest on this job and why?",
      "Which housekeeping issues create the biggest safety risk, not just the worst appearance?",
      "What tools or process changes would make good housekeeping easier to maintain?"
    ],
    articleSections: [
      {
        heading: "Why housekeeping deserves meeting time",
        body: [
          "Housekeeping is easy to underrate because it rarely feels like a specialized hazard. But many injuries, access problems, fire concerns, and delays begin with poor site order. When tools, cords, materials, and debris accumulate, they make every task around them less safe and less efficient.",
          "A meeting on housekeeping should make it clear that cleanliness is not the only goal. The real goal is control. Workers need space to move, room to stage, clear exits, and visible work areas. Good housekeeping supports all of those outcomes."
        ]
      },
      {
        heading: "Ownership and timing",
        body: [
          "Housekeeping fails when responsibility is vague. If everyone is told to keep the area clean but nobody owns a specific standard or cleanup point, clutter returns quickly. Supervisors should explain what right looks like, when cleanup happens, and who is accountable for maintaining it.",
          "Timing matters too. End-of-shift cleanup helps, but it may not be enough if debris builds up throughout the day. Some tasks require cleanup during the work, between phases, or immediately after a specific step is complete."
        ]
      },
      {
        heading: "Housekeeping as a signal",
        body: [
          "Poor housekeeping often points to broader issues such as overcrowded staging, poor coordination between trades, inadequate waste containers, or unrealistic production pacing. Meetings should encourage crews to think about why the mess keeps returning, not just how to remove it one more time.",
          "When the root causes are addressed, housekeeping becomes easier to maintain and the site functions better overall."
        ]
      }
    ],
    topics: [
      "Housekeeping as a Safety Control",
      "Keeping Walkways, Aisles, and Exits Clear",
      "Protruding Nails, Sharp Objects, and Scrap Lumber",
      "Managing Cords, Hoses, and Welding Leads",
      "Removing Combustible Scrap and Debris",
      "Waste Containers and Separating Refuse",
      "Oily Rags and Spontaneous Combustion",
      "Material Storage and Stacking",
      "Disposing of Debris — Chutes and Drop Areas",
      "How Poor Housekeeping Causes Slips, Trips, and Falls",
      "Lighting, Sanitation, and Welfare Facilities",
      "Making Cleanup Part of the Job"
    ]
  }),
  createCategory({
    id: "manual-handling",
    title: "Manual Handling",
    slug: "manual-handling",
    description: "Safer lifting, carrying, pushing, and team handling practices to reduce strains and soft tissue injuries.",
    overview:
      "Manual Handling focuses on the everyday movements that often lead to strains, sprains, and overexertion injuries. It is especially helpful for meetings with crews that move materials by hand, work in awkward spaces, or handle repetitive tasks where poor technique and rushed decisions can build up over time.",
    meetingPurpose:
      "Use this category when the work involves frequent lifting, carrying, positioning, or moving of materials and equipment by hand.",
    keyTakeaways: [
      "Many manual handling injuries come from planning failures as much as from lifting technique.",
      "Weight, reach distance, posture, and repetition all affect the level of risk.",
      "Mechanical aids and team lifts should be used early, not as a last resort.",
      "Workers should be encouraged to stop and reset when a load feels unstable or too heavy."
    ],
    supervisorNotes: [
      "Connect the talk to the materials the crew is actually moving this week.",
      "Review where carts, dollies, hoists, or other aids are available and expected.",
      "Ask workers what tasks feel most physically awkward, not just heaviest."
    ],
    discussionPrompts: [
      "Which handling tasks create the most strain because of posture or reach?",
      "What keeps workers from using mechanical aids more consistently?",
      "How can we redesign staging or sequencing to reduce hand-carrying distances?"
    ],
    articleSections: [
      {
        heading: "Manual handling injuries build over time",
        body: [
          "Not every injury comes from a dramatic event. Many strains and soft tissue injuries develop from repeated awkward lifts, twisting while carrying, poor staging, or working in tight spaces. These injuries are common because the work feels manageable until a small difference in load, fatigue, or posture pushes the body too far.",
          "A good meeting should frame manual handling as both a technique issue and a planning issue. Workers need good body mechanics, but they also need tasks that are staged intelligently and supported with the right equipment."
        ]
      },
      {
        heading: "Planning the lift before the lift",
        body: [
          "Before picking something up, workers should think about its weight, shape, grip points, destination, travel path, and whether help or equipment is needed. This short pause can prevent a lot of rushed, awkward movement. If the path is cluttered or the destination is unstable, those problems should be fixed first.",
          "Supervisors can use meetings to normalize these pauses so workers do not feel pressure to prove they can handle a load alone. Good planning is a sign of professionalism, not weakness."
        ]
      },
      {
        heading: "Reducing strain with smarter systems",
        body: [
          "Manual handling risk can often be reduced by changing the system. Better staging, smaller load sizes, mechanical aids, shorter carry distances, and team coordination all make a difference. Meetings should help crews think about these options instead of focusing only on textbook lifting posture.",
          "That shift matters because many real-world injuries happen when the worker knows the right technique but the task setup makes it hard to apply. The safer solution is to improve the task, not just remind the worker to be careful."
        ]
      }
    ],
    topics: [
      "Proper Lifting Techniques",
      "Identifying Manual Handling Risk Factors",
      "Team Lifting Procedures",
      "Using Mechanical Aids",
      "Avoiding Back Strain and Injury",
      "Twisting, Turning, and Carrying Safely"
    ]
  })
];

const extendedTrainingCategories: TrainingCategory[] = [
  createCategory({
    id: "heat-and-cold-stress-prevention",
    title: "Heat and Cold Stress Prevention",
    slug: "heat-and-cold-stress-prevention",
    description: "Training topics for working safely in hot, cold, humid, and fast-changing weather conditions.",
    overview:
      "This category focuses on temperature-related risks, worker conditioning, hydration, rest planning, clothing choices, and emergency response when crews face environmental exposure.",
    meetingPurpose:
      "Use this category when weather conditions, seasonal changes, or PPE requirements can increase heat or cold stress risk.",
    keyTakeaways: [
      "Temperature stress can escalate quickly when crews work hard, wear heavy PPE, or lose access to shade and recovery time.",
      "Hydration, acclimatization, and observation of symptoms are daily controls, not optional reminders.",
      "Supervisors should plan around conditions instead of reacting only after signs of illness appear.",
      "Workers should know the symptoms that require immediate intervention and escalation.",
    ],
    supervisorNotes: [
      "Tie the discussion to the actual forecast, humidity, wind, and work intensity expected during the shift.",
      "Review break planning, water access, and shaded or warmed recovery areas before work begins.",
      "Check whether new workers or returning workers need extra monitoring while adjusting to conditions.",
    ],
    discussionPrompts: [
      "What part of today’s workday creates the highest temperature-related exposure?",
      "What signs would tell us someone is not handling the conditions safely?",
      "What would keep the crew from slowing down even if the weather is changing quickly?",
    ],
    articleSections: [
      {
        heading: "Environmental conditions change work risk",
        body: [
          "Heat, humidity, wind, cold, radiant exposure, and heavy clothing all change how demanding a task becomes. A job that feels routine in mild conditions can become hazardous when the environment shifts.",
          "That is why temperature stress needs active planning. Supervisors should think about weather and workload together rather than treating environmental exposure as an unrelated concern.",
        ],
      },
      {
        heading: "Recognizing the early signs matters",
        body: [
          "Workers should be taught to notice early signs such as unusual fatigue, dizziness, confusion, chills, numbness, or changes in sweating. These symptoms are warnings, not inconveniences.",
          "The earlier the crew responds, the more likely it is that a more serious emergency can be prevented.",
        ],
      },
      {
        heading: "Controls should be visible in the field",
        body: [
          "Controls such as hydration access, warm-up or cool-down areas, schedule changes, pace adjustments, and peer monitoring should be visible, not assumed. If the system is difficult to use, workers are less likely to rely on it in time.",
          "A complete toolbox talk should connect the environmental conditions to a clear plan for the current shift.",
        ],
      },
    ],
    topics: [
      "Heat Illness Basics",
      "Hydration and Break Planning",
      "Shade and Rest Cycles",
      "Acclimatization",
      "Recognizing Heat Exhaustion",
      "Cold Stress Warning Signs",
      "Hypothermia and Frostbite",
      "Weather Monitoring",
      "Clothing Selection for Temperature Extremes",
      "Emergency Response for Temperature Stress",
    ],
  }),
  createCategory({
    id: "vehicle-and-driver-safety",
    title: "Vehicle and Driver Safety",
    slug: "vehicle-and-driver-safety",
    description: "Training on site driving, backing, traffic routes, inspection, and vehicle incident prevention.",
    overview:
      "Vehicle and Driver Safety focuses on the interaction between trucks, pickups, trailers, public roads, and active work zones. It supports both company drivers and workers exposed to moving vehicles.",
    meetingPurpose:
      "Use this category when crews depend on vehicle movement, deliveries, backing maneuvers, trailer handling, or shared traffic routes.",
    keyTakeaways: [
      "Low-speed movement in congested areas can be just as dangerous as road travel.",
      "Backing, blind spots, and route confusion create some of the most common vehicle exposures.",
      "Pre-use checks and clear communication reduce preventable incidents.",
      "Vehicle safety involves drivers, spotters, pedestrians, and work-zone planning together.",
    ],
    supervisorNotes: [
      "Review the current traffic pattern, delivery windows, and tightest backing locations on the project.",
      "Use the talk to clarify spotter expectations and right-of-way rules.",
      "Connect vehicle condition checks to the actual routes and surface conditions crews face.",
    ],
    discussionPrompts: [
      "Where are vehicles most likely to conflict with foot traffic on this site?",
      "What backing situation feels normal but carries the most avoidable risk?",
      "What route or surface condition could turn a simple move into an incident?",
    ],
    articleSections: [
      {
        heading: "Driving risk does not stop at the gate",
        body: [
          "Vehicle safety includes travel on roads, but it also includes how vehicles move, idle, reverse, park, and unload inside the work area. Many preventable incidents happen at low speed in familiar spaces.",
          "Crews should understand that congestion, distractions, blind spots, and changing site routes make vehicle movement an everyday hazard.",
        ],
      },
      {
        heading: "Communication prevents confusion",
        body: [
          "Spotters, hand signals, mirrors, alarms, and route planning all matter because assumptions around movement create risk quickly. Workers should know who has control of the move and when the vehicle must stop.",
          "If the communication plan is unclear, the vehicle should not continue moving until roles are clarified.",
        ],
      },
      {
        heading: "Inspection and planning support safe movement",
        body: [
          "Drivers should know how to check visibility, tires, brakes, attachments, trailer connections, and route conditions before moving. These checks are part of the task, not a separate formality.",
          "A useful toolbox talk connects pre-use inspection to the work conditions the driver will actually face that day.",
        ],
      },
    ],
    topics: [
      "Motor Vehicles on Site — Driver Duties and Rules of the Road",
      "Pre-Operation and Daily Vehicle Inspections",
      "Seat Belts and Rollover Protective Structures (ROPS)",
      "Backing Up — Blind Spots, Spotters, and Hand Signals",
      "Backup Alarms and Warning Devices",
      "Haul Roads, Access Roads, and Grades",
      "Dump Trucks and Raised-Bed Hazards",
      "Earthmoving and Material-Handling Equipment",
      "Working Around Mobile Equipment — Struck-By and Caught-Between",
      "Loading, Unloading, and Securing Loads",
      "Highway Work Zones and Public Traffic (Flaggers)",
      "Parking, Shutdown, and Securing Equipment",
      "Driver Fatigue, Distraction, and Fitness to Operate",
    ],
  }),
  createCategory({
    id: "welding-and-hot-work",
    title: "Welding and Hot Work",
    slug: "welding-and-hot-work",
    description: "Toolbox talks on hot work preparation, sparks, fire watch, fumes, and post-work inspection.",
    overview:
      "This category covers the planning and controls that should be in place before welding, cutting, grinding, brazing, or any other spark-producing activity begins.",
    meetingPurpose:
      "Use this category when hot work, grinding, flame work, or spark-producing tasks are active or planned nearby.",
    keyTakeaways: [
      "Hot work risk extends beyond the immediate task because sparks, heat, fumes, and hidden combustibles can travel.",
      "Area preparation and fire watch are essential controls, not paperwork steps.",
      "Workers should understand the interaction between hot work and nearby fuel sources, coatings, dust, and ventilation.",
      "Post-work checks are as important as setup checks.",
    ],
    supervisorNotes: [
      "Walk through the exact area where hot work will happen and identify what must be cleared, covered, or protected first.",
      "Confirm who owns the fire watch and what the duration of the post-work watch will be.",
      "Discuss ventilation, PPE, and nearby crews before the permit or task begins.",
    ],
    discussionPrompts: [
      "What nearby condition could make routine hot work much more dangerous today?",
      "What gets missed most often during cleanup or final fire watch?",
      "How would we know our ventilation setup is not adequate for the work being done?",
    ],
    articleSections: [
      {
        heading: "Hot work changes the surrounding environment",
        body: [
          "Hot work should never be treated as an isolated task. Sparks, molten metal, slag, radiant heat, and fumes affect nearby materials, nearby workers, and the overall fire risk in the area.",
          "A strong toolbox talk begins by widening the view beyond the worker holding the tool or torch.",
        ],
      },
      {
        heading: "Preparation is the main control",
        body: [
          "The area should be reviewed for combustibles, gas cylinders, dusts, coatings, openings, stored materials, and anything else that could carry heat or sparks to an unsafe location.",
          "Preparation is where many incidents are prevented, because once work starts, it becomes harder to see every secondary risk.",
        ],
      },
      {
        heading: "Finish the task only after the area is safe",
        body: [
          "Crews sometimes treat the task as complete when the cutting, welding, or grinding stops. In reality, the work is not complete until the area has been checked and the fire watch responsibilities have been satisfied.",
          "This final step is what keeps a finished task from becoming a delayed emergency.",
        ],
      },
    ],
    topics: [
      "Hot Work Hazards and When a Permit Is Required",
      "Preparing the Work Area — Fire Prevention",
      "The Fire Watch and Post-Work Monitoring",
      "Oxygen-Fuel Gas Welding and Cutting",
      "Compressed Gas Cylinders — Storage, Handling, and Transport",
      "Regulators, Hoses, Torches, and Flashback Prevention",
      "Arc Welding and Cutting Safety",
      "Welding Fumes, Gases, and Ventilation",
      "Hot Work in Confined Spaces",
      "Cutting and Welding on Preservative Coatings and Containers",
      "PPE and Radiation Protection for Welders",
      "Resistance Welding Safety",
      "Plasma Arc Cutting Safety",
      "Brazing and Soldering Safety",
      "Preventing Electric Shock While Welding",
    ],
  }),
  createCategory({
    id: "rigging-and-material-handling-equipment",
    title: "Rigging and Material Handling Equipment",
    slug: "rigging-and-material-handling-equipment",
    description: "Rigging, hoisting, signaling, and lifted-load safety topics for material movement on site.",
    overview:
      "Rigging and Material Handling Equipment covers how suspended loads, hardware, communication, and lift planning affect worker exposure during hoisting and controlled movement operations.",
    meetingPurpose:
      "Use this category when loads are lifted, hoisted, rigged, guided, or staged using slings, hardware, hoists, or cranes.",
    keyTakeaways: [
      "Loads should be planned before movement begins, not corrected while suspended.",
      "Communication between the operator, signal person, and nearby crews is critical.",
      "Hardware condition and load stability can change rapidly during movement.",
      "The exclusion zone is part of the lift plan, not an afterthought.",
    ],
    supervisorNotes: [
      "Use real rigging gear during the talk if possible so the crew can point out components and defects.",
      "Clarify who gives signals and who controls the load path before movement starts.",
      "Review wind, overhead obstructions, and staging constraints in the actual work area.",
    ],
    discussionPrompts: [
      "What part of today’s lift plan depends most on communication?",
      "Where is a load most likely to become unstable or expose nearby workers?",
      "What sign would tell us the lift should stop immediately?",
    ],
    articleSections: [
      {
        heading: "Rigging safety starts before the hook is loaded",
        body: [
          "Rigging incidents are often linked to planning gaps, hardware condition, or communication failures that existed before the load ever left the ground.",
          "A useful toolbox talk begins with how the lift will be planned, checked, communicated, and controlled from start to finish.",
        ],
      },
      {
        heading: "The load path is a hazard zone",
        body: [
          "The movement path of a suspended or supported load is a hazard zone that workers should respect from the start. Loads can swing, rotate, settle, or shift when surfaces, wind, or balance change.",
          "Everyone involved should understand where the exclusion zone begins and what could change it during the move.",
        ],
      },
      {
        heading: "Small hardware issues can have major consequences",
        body: [
          "Hooks, shackles, slings, chains, and connection points do not need to fail dramatically to create danger. Wear, mismatch, poor selection, and damaged components all matter.",
          "That is why inspection, load understanding, and correct setup are central to every rigging discussion.",
        ],
      },
    ],
    topics: [
      "Rigging Basics and the Qualified Rigger",
      "Sling Types and How to Choose One",
      "Wire Rope Slings — Inspection and Removal Criteria",
      "Alloy Steel Chain Slings — Inspection and Use",
      "Synthetic Web and Round Slings — Inspection and Protection",
      "Rated Capacity, Sling Angles, and Load Charts",
      "Hitches — Vertical, Choker, and Basket",
      "Rigging Hardware — Shackles, Hooks, and Eyebolts",
      "Determining Load Weight and Center of Gravity",
      "Planning the Lift — The Lift Plan and Roles",
      "Crane Signals and Communication",
      "Working Around Suspended Loads and Tag Lines",
      "Mobile Crane Setup — Ground Conditions, Outriggers, and Power Lines",
      "Material Storage, Stacking, and Housekeeping",
    ],
  }),
  createCategory({
    id: "site-access-and-public-protection",
    title: "Site Access and Public Protection",
    slug: "site-access-and-public-protection",
    description: "Access routes, visitors, barricades, and public-facing work-zone protection topics.",
    overview:
      "This category focuses on how the site interface is controlled where workers, visitors, deliveries, and the public may interact with the job.",
    meetingPurpose:
      "Use this category when projects involve restricted access, street exposure, adjacent pedestrians, or changing gate and walkway conditions.",
    keyTakeaways: [
      "Public exposure and visitor movement should be planned with the same care as worker-only areas.",
      "Barricades, signage, lighting, and access routes must stay usable as the site changes.",
      "Access control is a daily field task, not a one-time setup item.",
      "A confusing route can become a safety hazard quickly for both workers and non-workers.",
    ],
    supervisorNotes: [
      "Walk the actual access points when possible and identify where route confusion is most likely.",
      "Discuss how deliveries, visitors, and changing work phases affect public protection.",
      "Use the talk to confirm who inspects barriers and signs during the day.",
    ],
    discussionPrompts: [
      "Where could a visitor or member of the public enter an unsafe area without realizing it?",
      "What barrier or route change is most likely to be overlooked after site conditions change?",
      "How would the crew know public-facing protection is no longer adequate?",
    ],
    articleSections: [
      {
        heading: "Access routes need daily attention",
        body: [
          "A route that was safe at the start of the week may no longer be safe after deliveries, excavation, weather, or work-phase changes. Access control requires ongoing attention.",
          "Toolbox talks should make clear that site access is a living condition, not a one-time installation.",
        ],
      },
      {
        heading: "Public protection extends beyond the fence line",
        body: [
          "Jobs near streets, sidewalks, neighbors, active facilities, or shared parking areas create exposure that extends beyond the immediate work zone.",
          "Crews should understand how signage, barricades, lighting, and route separation protect both the public and the workforce.",
        ],
      },
      {
        heading: "Visitor and delivery control is part of the plan",
        body: [
          "Visitors, inspectors, clients, and delivery drivers often do not know the safest route or the current work hazards. Without control, they can unintentionally enter dangerous areas.",
          "A strong talk should clarify where those people go, who guides them, and what happens if the route changes during the day.",
        ],
      },
    ],
    topics: [
      "Controlling the Site Perimeter — Fencing, Gates, and Keeping People Out",
      "Accident Prevention Signs — Colors, Wording, and Placement",
      "Accident Prevention Tags",
      "Barricades and Channelizing Devices",
      "Flaggers and Traffic Signaling",
      "Protecting Pedestrians — Walkways and Accessible Routes",
      "Covered Walkways, Canopies, and Sidewalk Sheds",
      "Overhead and Falling-Object Protection",
      "Protecting People from Open Holes and Excavations",
      "Visitor, Delivery, and Contractor Access Control",
      "Night Work and Low-Visibility Protection",
      "Daily Inspection of Signs, Barriers, and Access Controls",
    ],
  }),
  createCategory({
    id: "environmental-controls-and-spill-response",
    title: "Environmental Controls and Spill Response",
    slug: "environmental-controls-and-spill-response",
    description: "Spill response, runoff control, waste management, and environmental protection topics.",
    overview:
      "Environmental Controls and Spill Response helps crews understand how fuel, chemicals, dust, wastewater, and contaminated materials can create safety and compliance issues if not controlled properly.",
    meetingPurpose:
      "Use this category when work involves fluids, runoff, washout, waste handling, environmental reporting, or spill kits.",
    keyTakeaways: [
      "Environmental controls should be visible in the work area before materials are used or transferred.",
      "A small spill can escalate quickly when drainage, traffic, or cleanup coordination is poor.",
      "Crews should know the location of spill resources and the reporting path before they need them.",
      "Environmental protection tasks also support job site safety and housekeeping.",
    ],
    supervisorNotes: [
      "Walk the work area and identify drains, low points, storage locations, and spill kit placement.",
      "Review the first three actions expected if a spill occurs.",
      "Connect the talk to the actual materials currently stored or used on site.",
    ],
    discussionPrompts: [
      "Where would a spill move first if it happened in this work area?",
      "What resource or control would the crew need immediately during a spill response?",
      "What environmental protection step is easiest to skip when the job gets busy?",
    ],
    articleSections: [
      {
        heading: "Environmental control is part of work planning",
        body: [
          "Environmental protection tasks should not be treated as separate from production work. Fuel, waste, runoff, concrete washout, and hazardous material handling all affect how safely and cleanly the site operates.",
          "Toolbox talks are strongest when they connect environmental controls directly to the task that creates the exposure.",
        ],
      },
      {
        heading: "Spill response depends on speed and clarity",
        body: [
          "When a spill occurs, workers should not have to guess where the kit is, who to notify, or what the first containment step looks like. Those decisions should already be clear.",
          "A talk should focus on the immediate response sequence and the specific layout of the current project.",
        ],
      },
      {
        heading: "Good housekeeping supports environmental control",
        body: [
          "Waste buildup, poor labeling, messy transfer areas, and blocked containment supplies all make incidents more likely. Environmental control becomes easier when the site is organized.",
          "This makes housekeeping and spill prevention closely connected topics in practice.",
        ],
      },
    ],
    topics: [
      "Spill Kit Location and Use",
      "Drain Protection",
      "Fuel Transfer Controls",
      "Waste Segregation",
      "Dust Suppression Methods",
      "Concrete Washout Control",
      "Stormwater Protection",
      "Spill Reporting Steps",
      "Contaminated Material Handling",
      "Post-Spill Cleanup Review",
    ],
  }),
  createCategory({
    id: "demolition-safety",
    title: "Demolition Safety",
    slug: "demolition-safety",
    description: "Demolition planning, instability hazards, dust control, and exclusion-zone topics.",
    overview:
      "Demolition Safety focuses on the planning and control measures needed when structures, systems, and materials are removed, altered, or brought down in a changing environment.",
    meetingPurpose:
      "Use this category when demolition, dismantling, strip-out, salvage, or structural alteration work is active.",
    keyTakeaways: [
      "Demolition work changes conditions quickly, which makes reassessment essential.",
      "Hidden utilities, unsupported components, dust, and falling debris are central concerns.",
      "Exclusion zones and communication should change with the phase of demolition work.",
      "Pre-demolition planning is one of the strongest controls available.",
    ],
    supervisorNotes: [
      "Connect the talk directly to the phase of demolition planned for the current shift.",
      "Review what utilities, structural elements, and access controls have already been verified.",
      "Use the talk to confirm debris handling, dust control, and drop-zone protection.",
    ],
    discussionPrompts: [
      "What hidden condition could surprise the crew during this demolition phase?",
      "How would we know the exclusion zone is no longer large enough?",
      "What change in structure or debris behavior would require immediate stop-work?",
    ],
    articleSections: [
      {
        heading: "Demolition changes the work area by the minute",
        body: [
          "Demolition removes the certainty of a stable finished structure and replaces it with changing loads, debris, dust, noise, and exposed systems. Conditions can shift faster than on many other tasks.",
          "That is why the toolbox talk should emphasize reassessment and communication throughout the work phase.",
        ],
      },
      {
        heading: "Pre-demolition checks reduce surprises",
        body: [
          "Utilities, structural supports, openings, adjacent areas, and material hazards should be evaluated before dismantling begins. Many demolition incidents begin with something that should have been identified earlier.",
          "A useful talk highlights what has already been checked and what still needs to be verified before the day’s task starts.",
        ],
      },
      {
        heading: "Control where people and debris can go",
        body: [
          "Drop zones, exclusion areas, material staging, and access routes all need clear boundaries during demolition. These boundaries may need to shift as the work progresses.",
          "If the crew does not understand where they can and cannot be, the risk grows even if the demolition technique is otherwise sound.",
        ],
      },
    ],
    topics: [
      "The Pre-Demolition Engineering Survey",
      "Locating and Controlling Utilities Before Demolition",
      "Hazardous Materials — Asbestos, Lead, and Contaminated Systems",
      "Preparing the Structure and Safe Access",
      "Exclusion Zones, Barricades, and the Drop Zone",
      "Material Chutes and Dropping Debris Through Openings",
      "Manual Demolition of Walls, Masonry, and Chimneys",
      "Manual Removal of Floors",
      "Mechanical Demolition — Wrecking Ball and Powered Equipment",
      "Removal of Steel Construction",
      "Silica, Dust, and Respiratory Hazards",
      "Fire Prevention and Hot Work in Demolition",
      "Continuing Inspections and Preventing Unplanned Collapse",
    ],
  }),
  createCategory({
    id: "compressed-gas-and-air-tool-safety",
    title: "Compressed Gas and Air Tool Safety",
    slug: "compressed-gas-and-air-tool-safety",
    description: "Cylinder safety, regulator checks, compressed air hazards, and air-tool control topics.",
    overview:
      "This category supports safe handling of cylinders, hoses, regulators, fittings, and compressed-air tools used during construction and maintenance activities.",
    meetingPurpose:
      "Use this category when compressed gas cylinders, air-powered tools, or pressurized systems are stored, moved, or used on site.",
    keyTakeaways: [
      "Pressurized systems store energy even when the tool is not actively in use.",
      "Cylinder handling, storage, and leak awareness are essential to safe setup.",
      "Air tools and hoses can create struck-by, trip, noise, and injection-type hazards if poorly controlled.",
      "Safe disconnect and storage practices matter just as much as active use.",
    ],
    supervisorNotes: [
      "Bring up the exact cylinders, hoses, and tools currently in use so the talk feels specific.",
      "Review storage, transport, and valve protection practices before the shift starts.",
      "Use the talk to confirm what workers should do if they suspect a leak or damaged fitting.",
    ],
    discussionPrompts: [
      "What condition would make a cylinder or air tool unsafe to use right now?",
      "Where are hoses or pressurized components most likely to be damaged on this site?",
      "What compressed-air habit feels routine but carries the most risk?",
    ],
    articleSections: [
      {
        heading: "Stored energy creates hidden risk",
        body: [
          "Compressed gas and air systems can create serious hazards because the energy is not always obvious while the equipment sits idle. A damaged valve, loose hose, or failed fitting can turn a quiet setup into an emergency quickly.",
          "Toolbox talks should remind crews that stored pressure deserves the same respect as active equipment movement.",
        ],
      },
      {
        heading: "Handling and storage prevent avoidable damage",
        body: [
          "Cylinders and air systems are often damaged during transport, staging, or hurried setup rather than during the task itself. That makes handling and storage central topics, not side issues.",
          "A complete talk should connect storage, securing, and inspection to the actual work area and travel path.",
        ],
      },
      {
        heading: "Disconnect and shutdown should be deliberate",
        body: [
          "Workers sometimes give more attention to startup than shutdown. But disconnecting, depressurizing, storing, and securing equipment are part of preventing the next incident.",
          "The safest system is one that remains controlled before, during, and after use.",
        ],
      },
    ],
    topics: [
      "Compressed Gas Cylinder Hazards",
      "Storing Compressed Gas Cylinders",
      "Moving and Transporting Cylinders",
      "Cylinder Valves, Regulators, and Connections",
      "Compressed Air Hazards and the 30 PSI Cleaning Limit",
      "Pneumatic Tool Safety Basics",
      "Air Hoses, Couplings, and Whip Checks",
      "Nail Guns and Pneumatic Fasteners",
      "Pneumatic Grinders and Abrasive Wheels",
      "Air Compressors and Receivers",
      "Inspecting and Maintaining Air Tools and Hoses",
      "Pneumatic Breakers and Hand-Arm Vibration",
      "Abrasive Blasting Safety",
      "Air-Powered Hoists and Winches",
    ],
  }),
];

export const trainingCategories: TrainingCategory[] = [
  ...coreTrainingCategories,
  ...extendedTrainingCategories,
];

export const featuredCategorySlugs = [
  "construction-safety",
  "electrical-safety",
  "working-at-heights",
  "excavation-safety",
  "manual-handling",
  "fire-safety"
];

export const incidentInvestigationFormUrl =
  "https://fill.boloforms.com/signature/1_3_1kmsq9bfFvu7E7Q83tjZVhhOPQaeUORS1rayXKVo?p=view#googtrans(en)";

export const weeklySafetyInspectionReportUrl =
  "https://fill.boloforms.com/signature/10b6668d-c5d2-4da8-b2c1-df9220240e89?p=view#googtrans(en)";

export const totalTopicCount = trainingCategories.reduce(
  (sum, category) => sum + category.topics.length,
  0,
);

export const getCategoryBySlug = (slug: string) =>
  trainingCategories.find((category) => category.slug === slug);

export const getTopicBySlug = (categorySlug: string, topicSlug: string) =>
  getCategoryBySlug(categorySlug)?.topics.find((topic) => topic.slug === topicSlug);

import type { TrainingCategory } from "@/lib/training-data";

/**
 * Higher-level grouping for the training categories.
 * `order` sets how the groups render top-to-bottom on the Training page;
 * `slugs` maps each category slug into its group. Categories not listed here
 * fall back to the last group so nothing is ever dropped.
 */
export type CategoryGroupName =
  | "Site & Structural Work"
  | "Health & Hazardous Materials"
  | "Fire & Hot Work"
  | "Equipment & Vehicles"
  | "General Safety";

export const categoryGroupOrder: CategoryGroupName[] = [
  "Site & Structural Work",
  "Health & Hazardous Materials",
  "Fire & Hot Work",
  "Equipment & Vehicles",
  "General Safety"
];

const groupBySlug: Record<string, CategoryGroupName> = {
  // Site & Structural Work
  "construction-safety": "Site & Structural Work",
  "working-at-heights": "Site & Structural Work",
  "confined-space": "Site & Structural Work",
  "excavation-safety": "Site & Structural Work",
  "demolition-safety": "Site & Structural Work",
  "site-access-and-public-protection": "Site & Structural Work",
  "housekeeping": "Site & Structural Work",

  // Health & Hazardous Materials
  "asbestos-awareness": "Health & Hazardous Materials",
  "coshh-hazardous-substances": "Health & Hazardous Materials",
  "manual-handling": "Health & Hazardous Materials",
  "heat-and-cold-stress-prevention": "Health & Hazardous Materials",
  "environmental-controls-and-spill-response": "Health & Hazardous Materials",
  "first-aid": "Health & Hazardous Materials",

  // Fire & Hot Work
  "fire-safety": "Fire & Hot Work",
  "fire-extinguisher-safety": "Fire & Hot Work",
  "welding-and-hot-work": "Fire & Hot Work",
  "compressed-gas-and-air-tool-safety": "Fire & Hot Work",

  // Equipment & Vehicles
  "forklift-safety": "Equipment & Vehicles",
  "vehicle-and-driver-safety": "Equipment & Vehicles",
  "rigging-and-material-handling-equipment": "Equipment & Vehicles",
  "electrical-safety": "Equipment & Vehicles",

  // General Safety
  "ppe": "General Safety",
  "slips-trips-and-falls": "General Safety",
  "accident-reporting": "General Safety"
};

const fallbackGroup: CategoryGroupName =
  categoryGroupOrder[categoryGroupOrder.length - 1];

export function getCategoryGroup(slug: string): CategoryGroupName {
  return groupBySlug[slug] ?? fallbackGroup;
}

export type GroupedCategories = {
  name: CategoryGroupName;
  categories: TrainingCategory[];
};

/**
 * Buckets categories into their groups in `categoryGroupOrder`, sorting each
 * group's categories alphabetically by title. Empty groups are omitted.
 */
export function groupCategories(
  categories: TrainingCategory[]
): GroupedCategories[] {
  const buckets = new Map<CategoryGroupName, TrainingCategory[]>();

  for (const category of categories) {
    const group = getCategoryGroup(category.slug);
    const bucket = buckets.get(group) ?? [];
    bucket.push(category);
    buckets.set(group, bucket);
  }

  return categoryGroupOrder
    .map((name) => ({
      name,
      categories: (buckets.get(name) ?? []).sort((a, b) =>
        a.title.localeCompare(b.title)
      )
    }))
    .filter((group) => group.categories.length > 0);
}

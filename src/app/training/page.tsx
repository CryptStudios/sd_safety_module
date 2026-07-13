import { CategorySearch } from "@/components/category-search";
import { trainingCategories } from "@/lib/training-data";

export default function TrainingCategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <CategorySearch categories={trainingCategories} />
    </div>
  );
}

import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/data/categories";
import { CategoryPageContent } from "@/components/category/CategoryPageContent";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { categories } = await import("@/lib/data/categories");
  return categories
    .filter((c) => !c.isRandomPicker)
    .map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category || category.isRandomPicker) {
    notFound();
  }

  return <CategoryPageContent category={category} />;
}

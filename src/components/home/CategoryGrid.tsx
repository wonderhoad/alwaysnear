"use client";

import { useRouter } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { pickRandomVideoId } from "@/lib/utils/random";
import { GlassCard } from "@/components/ui/GlassCard";

export function CategoryGrid() {
  const router = useRouter();

  const handleCategoryClick = (slug: string, isRandomPicker?: boolean) => {
    if (isRandomPicker) {
      const videoId = pickRandomVideoId();
      router.push(`/video/${videoId}`);
      return;
    }
    router.push(`/category/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((category, index) => (
        <GlassCard
          key={category.id}
          delay={index * 0.05}
          onClick={() =>
            handleCategoryClick(category.slug, category.isRandomPicker)
          }
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl">{category.icon}</span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-medium leading-snug text-foreground/90">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/45">
                {category.subtitle}
              </p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

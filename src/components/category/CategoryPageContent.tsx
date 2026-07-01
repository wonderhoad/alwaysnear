"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "@/lib/types";
import { getVideoById } from "@/lib/data/videos";
import { GlassCard } from "@/components/ui/GlassCard";
import { PastelBackground } from "@/components/layout/PastelBackground";
import { PageTransition } from "@/components/layout/PageTransition";
import { FadeIn } from "@/components/ui/FadeIn";

interface CategoryPageContentProps {
  category: Category;
}

export function CategoryPageContent({ category }: CategoryPageContentProps) {
  const videos = category.videoIds
    .map((id) => getVideoById(id))
    .filter(Boolean);

  return (
    <PageTransition className="relative min-h-[100dvh]">
      <PastelBackground />

      <div className="mx-auto max-w-lg px-5 py-10 sm:px-8">
        <FadeIn>
          <Link
            href="/#home"
            className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/45 transition-colors hover:text-foreground/70"
          >
            ← домой
          </Link>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-10 text-center">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="mt-4 text-2xl font-light text-foreground/90">
            {category.title}
          </h1>
          <p className="mt-2 text-sm text-foreground/45">
            {category.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4">
          {videos.map((video, index) =>
            video ? (
              <GlassCard
                key={video.id}
                delay={index * 0.06}
                href={`/video/${video.id}`}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-soft/30 text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    ▶
                  </motion.span>
                  <div>
                    <h3 className="text-base font-medium text-foreground/90">
                      {video.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-foreground/45">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ) : null,
          )}
        </div>
      </div>
    </PageTransition>
  );
}

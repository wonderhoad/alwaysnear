"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <FadeIn className="flex flex-col items-center gap-6">
      <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-soft-lg">
        {!imageError ? (
          <Image
            src="/images/hero.jpg"
            alt="Эмилия улыбается"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 384px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-soft/40 via-background to-blue-soft/30 p-8 text-center">
            <span className="mb-4 text-5xl">🌸</span>
            <p className="text-sm text-foreground/50">
              положи тёплое фото сюда:
              <br />
              <code className="text-xs">/public/images/hero.jpg</code>
            </p>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-light tracking-wide text-foreground/90 sm:text-3xl">
        как ты сегодня?
      </h2>
    </FadeIn>
  );
}

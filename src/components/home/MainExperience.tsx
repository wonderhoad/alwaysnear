"use client";

import { useCallback } from "react";
import { OpeningScreen } from "@/components/opening/OpeningScreen";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FooterMessage } from "@/components/home/FooterMessage";
import { PastelBackground } from "@/components/layout/PastelBackground";

export function MainExperience() {
  const scrollToHome = useCallback(() => {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <PastelBackground />

      <OpeningScreen onEnter={scrollToHome} />

      <section
        id="home"
        className="scroll-mt-4 px-5 pb-20 pt-8 sm:px-8"
      >
        <div className="mx-auto flex max-w-lg flex-col gap-10">
          <HeroSection />
          <CategoryGrid />
          <FooterMessage />
        </div>
      </section>
    </div>
  );
}

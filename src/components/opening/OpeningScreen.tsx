"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse } from "@/components/ui/HeartPulse";
import { HandwrittenText, SoftButton } from "@/components/ui/SoftButton";
import { FadeIn } from "@/components/ui/FadeIn";

const LINES = [
  { text: "привет, мам.", handwritten: false, pause: 1800 },
  { text: "это я.", handwritten: false, pause: 1600 },
  { text: "твой кнопик ❤️", handwritten: true, pause: 2000 },
  { text: "я рядом.", handwritten: true, pause: 2200 },
  {
    text: "даже если однажды между нами будут тысячи километров,\nты всегда сможешь найти меня здесь.",
    handwritten: false,
    pause: 0,
  },
] as const;

interface OpeningScreenProps {
  onEnter: () => void;
}

export function OpeningScreen({ onEnter }: OpeningScreenProps) {
  const [showHeart, setShowHeart] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const heartTimer = setTimeout(() => setShowHeart(true), 1000);
    return () => clearTimeout(heartTimer);
  }, []);

  useEffect(() => {
    if (!showHeart) return;

    const startTimer = setTimeout(() => setLineIndex(0), 800);
    return () => clearTimeout(startTimer);
  }, [showHeart]);

  useEffect(() => {
    if (lineIndex < 0 || lineIndex >= LINES.length) return;

    const pause = LINES[lineIndex].pause;
    if (pause === 0) {
      const buttonTimer = setTimeout(() => setShowButton(true), 1200);
      return () => clearTimeout(buttonTimer);
    }

    const nextTimer = setTimeout(() => setLineIndex((i) => i + 1), pause);
    return () => clearTimeout(nextTimer);
  }, [lineIndex]);

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex max-w-md flex-col items-center gap-6">
        {showHeart && <HeartPulse />}

        <div className="flex min-h-[200px] flex-col items-center justify-center gap-5">
          <AnimatePresence mode="popLayout">
            {lineIndex >= 0 &&
              LINES.slice(0, lineIndex + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {line.handwritten ? (
                    <HandwrittenText className="text-2xl text-foreground/90 sm:text-3xl">
                      {line.text}
                    </HandwrittenText>
                  ) : (
                    <p className="whitespace-pre-line text-lg leading-relaxed text-foreground/80 sm:text-xl">
                      {line.text}
                    </p>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showButton && (
            <FadeIn delay={0.2}>
              <SoftButton size="lg" onClick={onEnter}>
                ❤️ побыть вместе
              </SoftButton>
            </FadeIn>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

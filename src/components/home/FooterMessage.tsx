"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { HandwrittenText } from "@/components/ui/SoftButton";

export function FooterMessage() {
  return (
    <FadeIn className="text-center">
      <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent" />

      <div className="mx-auto max-w-sm space-y-4 text-base leading-relaxed text-foreground/70">
        <p>я не могу быть рядом каждую минуту.</p>
        <p>
          но я очень постаралась сделать так,
          <br />
          чтобы ты никогда не чувствовала себя одной.
        </p>
        <HandwrittenText className="block text-xl text-foreground/85">
          люблю тебя.
        </HandwrittenText>
        <HandwrittenText className="block text-lg text-foreground/75">
          всегда.
        </HandwrittenText>
      </div>

      <p className="mt-8 text-sm text-foreground/40">
        — эмилиа <span className="text-pink-soft">❤️</span>
      </p>
    </FadeIn>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SoftButton } from "@/components/ui/SoftButton";

interface AfterVideoActionsProps {
  onRandom: () => void;
  showFamilyMovieButton?: boolean;
}

export function AfterVideoActions({
  onRandom,
  showFamilyMovieButton,
}: AfterVideoActionsProps) {
  const router = useRouter();

  return (
    <FadeIn className="flex flex-col items-center gap-8 text-center">
      <h2 className="text-2xl font-light text-foreground/90">
        как ты теперь?
      </h2>

      <div className="flex w-full max-w-sm flex-col gap-3">
        <SoftButton
          variant="primary"
          size="lg"
          onClick={() => router.push("/#home")}
        >
          🙂 стало легче
        </SoftButton>

        <SoftButton
          variant="secondary"
          size="lg"
          onClick={() => router.push("/#home")}
        >
          🥹 хочу ещё побыть рядом
        </SoftButton>

        <SoftButton variant="ghost" size="lg" onClick={onRandom}>
          🎲 выбери за меня
        </SoftButton>

        {showFamilyMovieButton && (
          <SoftButton
            variant="primary"
            size="lg"
            onClick={() => router.push("/video/family_movie")}
            className="mt-4"
          >
            🎞️ посмотреть фильм
          </SoftButton>
        )}
      </div>
    </FadeIn>
  );
}

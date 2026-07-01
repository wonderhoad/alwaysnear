"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Video } from "@/lib/types";
import { getVideoPath } from "@/lib/data/videos";
import { pickRandomVideoId } from "@/lib/utils/random";
import { IPhoneFrame } from "@/components/video/IPhoneFrame";
import { VideoPlaceholder } from "@/components/video/VideoPlaceholder";
import { AfterVideoActions } from "@/components/video/AfterVideoActions";
import { SoftButton } from "@/components/ui/SoftButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { PastelBackground } from "@/components/layout/PastelBackground";

interface CustomVideoPlayerProps {
  video: Video;
}

export function CustomVideoPlayer({ video }: CustomVideoPlayerProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const src = getVideoPath(video.filename);

  const togglePause = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      void el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, []);

  const replay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    setHasEnded(false);
    el.currentTime = 0;
    void el.play();
    setIsPlaying(true);
  }, []);

  const goHome = useCallback(() => {
    router.push("/#home");
  }, [router]);

  const handleEnded = useCallback(() => {
    setHasEnded(true);
    setIsPlaying(false);
  }, []);

  const handleRandom = useCallback(() => {
    const nextId = pickRandomVideoId([video.id]);
    router.push(`/video/${nextId}`);
  }, [router, video.id]);

  return (
    <PageTransition className="relative min-h-[100dvh]">
      <PastelBackground />

      <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center justify-center gap-8 px-5 py-10">
        <AnimatePresence mode="wait">
          {!hasEnded ? (
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full"
            >
              <IPhoneFrame>
                {!videoError && (
                  <video
                    ref={videoRef}
                    src={src}
                    className={`absolute inset-0 h-full w-full object-cover ${videoLoaded ? "opacity-100" : "opacity-0"}`}
                    autoPlay
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    onError={() => setVideoError(true)}
                    onEnded={handleEnded}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                )}
                {(!videoLoaded || videoError) && (
                  <VideoPlaceholder
                    title={video.title}
                    filename={video.filename}
                  />
                )}
              </IPhoneFrame>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <SoftButton variant="secondary" size="md" onClick={togglePause}>
                  {isPlaying ? "⏸ пауза" : "▶ продолжить"}
                </SoftButton>
                <SoftButton variant="ghost" size="md" onClick={replay}>
                  ↺ посмотреть ещё раз
                </SoftButton>
                <SoftButton variant="ghost" size="md" onClick={goHome}>
                  🏠 домой
                </SoftButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="w-full"
            >
              <AfterVideoActions
                onRandom={handleRandom}
                showFamilyMovieButton={video.showFamilyMovieButton}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}

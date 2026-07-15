"use client";

import { ReactNode } from "react";

interface IPhoneFrameProps {
  children: ReactNode;
  /** Landscape 16:9 frame — used for family movie */
  orientation?: "portrait" | "landscape";
}

export function IPhoneFrame({
  children,
  orientation = "portrait",
}: IPhoneFrameProps) {
  const isLandscape = orientation === "landscape";

  return (
    <div
      className={
        isLandscape
          ? "relative mx-auto w-full max-w-[560px] sm:max-w-[640px]"
          : "relative mx-auto w-full max-w-[280px] sm:max-w-[300px]"
      }
    >
      {/* Outer frame */}
      <div
        className={
          isLandscape
            ? "relative rounded-[1.75rem] bg-gradient-to-r from-zinc-800 to-zinc-900 p-2.5 shadow-2xl shadow-black/20 sm:rounded-[2rem]"
            : "relative rounded-[2.75rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2.5 shadow-2xl shadow-black/20"
        }
      >
        {/* Inner bezel */}
        <div
          className={
            isLandscape
              ? "relative overflow-hidden rounded-[1.35rem] bg-black sm:rounded-[1.55rem]"
              : "relative overflow-hidden rounded-[2.25rem] bg-black"
          }
        >
          {/* Dynamic Island — top in portrait, left edge in landscape */}
          {isLandscape ? (
            <div className="absolute left-3 top-1/2 z-20 h-[90px] w-[22px] -translate-y-1/2 rounded-full bg-black" />
          ) : (
            <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
          )}

          {/* Screen */}
          <div
            className={
              isLandscape
                ? "relative aspect-video w-full bg-zinc-950"
                : "relative aspect-[9/19.5] w-full bg-zinc-950"
            }
          >
            {children}
          </div>

          {/* Home indicator — bottom in portrait, right edge in landscape */}
          {isLandscape ? (
            <div className="absolute bottom-1/2 right-2 z-20 h-28 w-1 translate-y-1/2 rounded-full bg-white/30" />
          ) : (
            <div className="absolute bottom-2 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-full bg-white/30" />
          )}
        </div>
      </div>

      {/* Subtle reflection */}
      <div
        className={
          isLandscape
            ? "pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-tr from-white/5 via-transparent to-transparent sm:rounded-[2rem]"
            : "pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-tr from-white/5 via-transparent to-transparent"
        }
      />
    </div>
  );
}

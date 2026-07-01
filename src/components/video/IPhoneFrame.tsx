"use client";

import { ReactNode } from "react";

interface IPhoneFrameProps {
  children: ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      {/* Outer frame */}
      <div className="relative rounded-[2.75rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2.5 shadow-2xl shadow-black/20">
        {/* Inner bezel */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-black">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] w-full bg-zinc-950">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Subtle reflection */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface VideoPlaceholderProps {
  title: string;
  filename: string;
}

export function VideoPlaceholder({ title, filename }: VideoPlaceholderProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-pink-soft/20 via-zinc-900 to-blue-soft/20 p-6 text-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4 text-4xl"
      >
        🎬
      </motion.div>
      <p className="text-sm font-medium text-white/90">{title}</p>
      <p className="mt-2 text-xs text-white/40">
        {filename}
      </p>
      <p className="mt-4 max-w-[180px] text-[10px] leading-relaxed text-white/30">
        видео скоро появится здесь
      </p>
    </div>
  );
}

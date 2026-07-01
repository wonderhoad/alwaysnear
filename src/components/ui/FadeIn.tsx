"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.45,
  className = "",
  direction = "up",
}: FadeInProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 16 }
      : { opacity: 0 };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0 }
      : { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

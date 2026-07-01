"use client";

import { motion } from "framer-motion";

export function HeartPulse() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-center"
    >
      <motion.span
        className="text-3xl select-none"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❤️
      </motion.span>
    </motion.div>
  );
}

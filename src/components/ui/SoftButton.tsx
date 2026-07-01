"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HandwrittenTextProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h1" | "h2";
}

export function HandwrittenText({
  children,
  className = "",
  as: Tag = "span",
}: HandwrittenTextProps) {
  return (
    <Tag className={`font-handwritten italic ${className}`}>{children}</Tag>
  );
}

interface SoftButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

export function SoftButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  size = "md",
}: SoftButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-soft/50";

  const sizes = {
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-gradient-to-br from-pink-soft to-pink-soft/80 text-foreground shadow-soft hover:shadow-soft-lg",
    secondary:
      "glass text-foreground shadow-soft hover:shadow-soft-lg",
    ghost:
      "bg-white/40 text-foreground/80 hover:bg-white/60",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 40,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

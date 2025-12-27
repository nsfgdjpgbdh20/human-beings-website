"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  yOffset = 20,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  // Relaxed margins for better mobile detection:
  // Trigger when element is 50px above the bottom of viewport.
  // Top margin 0px means it triggers immediately if it enters from top (or is already there).
  const isInView = useInView(ref, { margin: "0px 0px -50px 0px", once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

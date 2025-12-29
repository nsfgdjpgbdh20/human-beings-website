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
  yOffset = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  // モバイル対応: マージンを緩和してコンテンツが表示されるように
  const isInView = useInView(ref, { amount: 0.1, once: true });

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
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

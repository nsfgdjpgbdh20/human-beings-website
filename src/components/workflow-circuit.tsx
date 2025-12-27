"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowCircuitProps {
  className?: string;
  variant?: "hero" | "section";
}

export function WorkflowCircuit({ className, variant = "hero" }: WorkflowCircuitProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const paths = {
    hero: [
      "M10 140 Q 180 40 360 120 T 710 100",
      "M40 220 Q 220 140 420 200 T 740 180",
    ],
    section: [
      "M0 80 Q 140 10 320 70 T 640 60",
      "M0 140 Q 160 90 340 140 T 640 120",
    ],
  };

  const selectedPaths = paths[variant];

  return (
    <div ref={ref} className={cn("pointer-events-none", className)}>
      <motion.svg
        width="100%"
        height={variant === "hero" ? 260 : 200}
        viewBox={variant === "hero" ? "0 0 760 260" : "0 0 640 200"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={controls}
      >
        {selectedPaths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            stroke="rgba(0,183,255,0.25)"
            strokeWidth={1.8}
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: index * 0.35 }}
          />
        ))}
        {selectedPaths.map((d, index) => (
          <motion.path
            key={`${d}-glow`}
            d={d}
            stroke="url(#glowGradient)"
            strokeWidth={3.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: [0, 0.6, 1], opacity: [0, 0.45, 0] },
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              delay: index * 0.35 + 0.2,
              repeat: 1,
              repeatType: "reverse",
            }}
          />
        ))}
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(0,183,255,0)" />
            <stop offset="50%" stopColor="rgba(0,183,255,0.85)" />
            <stop offset="100%" stopColor="rgba(0,183,255,0)" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

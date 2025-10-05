"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HBMonogram({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[200px] w-[220px]", className)}>
      <svg
        viewBox="0 0 220 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Letter outlines */}
        <path
          d="M32 24 H60 V92 H132 V24 H160 V176 H132 V120 H60 V176 H32 Z"
          stroke="#121212"
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <path
          d="M132 24 H168 C190 24 204 38 204 60 C204 76 196 87 182 94 C198 99 208 113 208 132 C208 156 192 176 164 176 H132 Z"
          stroke="#121212"
          strokeWidth={6}
          strokeLinejoin="round"
        />

        {/* Static circuit path */}
        <path
          d="M44 60 H120 C134 60 146 72 146 86 V96 H180 C192 96 200 104 200 116 C200 126 194 134 184 136 L146 144 V164"
          stroke="#00B7FF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M44 120 H116 C128 120 138 130 138 142 V152"
          stroke="#00B7FF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated highlight */}
        <motion.path
          d="M44 60 H120 C134 60 146 72 146 86 V96 H180 C192 96 200 104 200 116 C200 126 194 134 184 136 L146 144 V164"
          stroke="url(#monogram-glow)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
        />

        <motion.path
          d="M44 120 H116 C128 120 138 130 138 142 V152"
          stroke="url(#monogram-glow)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2, delay: 0.6 }}
        />

        {/* Nodes */}
        {[
          [44, 60],
          [120, 60],
          [146, 86],
          [180, 96],
          [200, 116],
          [146, 144],
          [44, 120],
          [116, 120],
          [138, 142],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={5}
            fill="#00B7FF"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12 }}
          />
        ))}

        <defs>
          <linearGradient id="monogram-glow" x1="44" y1="60" x2="208" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0,183,255,0)" />
            <stop offset="45%" stopColor="rgba(0,183,255,0.8)" />
            <stop offset="100%" stopColor="rgba(0,183,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

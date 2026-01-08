"use client";

import { useEffect, useRef, useId } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowCircuitProps {
  className?: string;
  variant?: "hero" | "section";
}

export function WorkflowCircuit({ className, variant = "hero" }: WorkflowCircuitProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const uniqueId = useId();
  // モバイル対応: マージンを緩和してコンテンツが表示されるように
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  // 各パスに複数のドットを配置する設定
  const dotConfigs = [
    { delay: 0, duration: 4 },
    { delay: 1.3, duration: 4 },
    { delay: 2.6, duration: 4 },
  ];

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
        <defs>
          {/* 線のグラデーション */}
          <linearGradient id={`lineGradient-${uniqueId}`} x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(0,183,255,0.1)" />
            <stop offset="50%" stopColor="rgba(0,183,255,0.35)" />
            <stop offset="100%" stopColor="rgba(0,183,255,0.1)" />
          </linearGradient>

          {/* ドットのグロー効果 */}
          <radialGradient id={`dotGlow-${uniqueId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,183,255,1)" />
            <stop offset="40%" stopColor="rgba(0,183,255,0.8)" />
            <stop offset="100%" stopColor="rgba(0,183,255,0)" />
          </radialGradient>

          {/* ドットの影（ぼかし） */}
          <filter id={`dotBlur-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* ベースの線 */}
        {selectedPaths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            stroke={`url(#lineGradient-${uniqueId})`}
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 2, ease: "easeOut", delay: index * 0.3 }}
          />
        ))}

        {/* 流れるドット（グロー効果付き） */}
        {selectedPaths.map((pathD, pathIndex) => (
          <g key={`dots-${pathIndex}`}>
            {/* 大きめのぼかしドット（背景グロー） */}
            {dotConfigs.map((config, dotIndex) => (
              <motion.circle
                key={`glow-${pathIndex}-${dotIndex}`}
                r={12}
                fill="rgba(0,183,255,0.3)"
                filter={`url(#dotBlur-${uniqueId})`}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{
                  offsetDistance: "100%",
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: config.duration,
                  delay: config.delay + pathIndex * 0.5 + 2, // 線が描かれた後に開始
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{
                  offsetPath: `path("${pathD}")`,
                  offsetRotate: "0deg",
                }}
              />
            ))}

            {/* メインのドット */}
            {dotConfigs.map((config, dotIndex) => (
              <motion.circle
                key={`dot-${pathIndex}-${dotIndex}`}
                r={4}
                fill="rgba(0,183,255,1)"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{
                  offsetDistance: "100%",
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: config.duration,
                  delay: config.delay + pathIndex * 0.5 + 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{
                  offsetPath: `path("${pathD}")`,
                  offsetRotate: "0deg",
                }}
              />
            ))}

            {/* 中心の白い点（ハイライト） */}
            {dotConfigs.map((config, dotIndex) => (
              <motion.circle
                key={`highlight-${pathIndex}-${dotIndex}`}
                r={1.5}
                fill="rgba(255,255,255,0.9)"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{
                  offsetDistance: "100%",
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: config.duration,
                  delay: config.delay + pathIndex * 0.5 + 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{
                  offsetPath: `path("${pathD}")`,
                  offsetRotate: "0deg",
                }}
              />
            ))}
          </g>
        ))}

        {/* ノード（始点・中点・終点のアイコン） */}
        {variant === "section" && (
          <>
            {/* 始点ノード */}
            <motion.g
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <circle cx="0" cy="80" r="8" fill="rgba(0,183,255,0.15)" stroke="rgba(0,183,255,0.4)" strokeWidth="1.5" />
              <circle cx="0" cy="80" r="3" fill="rgba(0,183,255,0.8)" />
            </motion.g>

            {/* 終点ノード */}
            <motion.g
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <circle cx="640" cy="60" r="8" fill="rgba(0,183,255,0.15)" stroke="rgba(0,183,255,0.4)" strokeWidth="1.5" />
              <circle cx="640" cy="60" r="3" fill="rgba(0,183,255,0.8)" />
            </motion.g>
          </>
        )}
      </motion.svg>
    </div>
  );
}

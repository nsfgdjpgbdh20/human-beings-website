"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimeRewindProps {
  className?: string;
  size?: number;
}

export function TimeRewind({ className, size = 120 }: TimeRewindProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={controls}
      >
        {/* 外側のリング（グロー効果） */}
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          stroke="rgba(0,183,255,0.1)"
          strokeWidth="1"
          fill="none"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* メインの時計枠 */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(0,183,255,0.3)"
          strokeWidth="2"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* 時計の目盛り（12時、3時、6時、9時） */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.line
            key={angle}
            x1={60 + 38 * Math.sin((angle * Math.PI) / 180)}
            y1={60 - 38 * Math.cos((angle * Math.PI) / 180)}
            x2={60 + 44 * Math.sin((angle * Math.PI) / 180)}
            y2={60 - 44 * Math.cos((angle * Math.PI) / 180)}
            stroke="rgba(0,183,255,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
          />
        ))}

        {/* 中心点 */}
        <motion.circle
          cx="60"
          cy="60"
          r="4"
          fill="rgba(0,183,255,0.8)"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />

        {/* 短針（時針）- 反時計回りに回転 */}
        <motion.line
          x1="60"
          y1="60"
          x2="60"
          y2="32"
          stroke="rgba(18,18,18,0.7)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transformOrigin: "60px 60px" }}
          variants={{
            hidden: { opacity: 0, rotate: 0 },
            visible: { opacity: 1, rotate: 0 },
          }}
          animate={isInView ? {
            rotate: [0, -360, -720],
          } : {}}
          transition={{
            rotate: {
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: { duration: 0.3, delay: 1.2 },
          }}
        />

        {/* 長針（分針）- 反時計回りに高速回転 */}
        <motion.line
          x1="60"
          y1="60"
          x2="60"
          y2="22"
          stroke="rgba(18,18,18,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transformOrigin: "60px 60px" }}
          variants={{
            hidden: { opacity: 0, rotate: 0 },
            visible: { opacity: 1, rotate: 0 },
          }}
          animate={isInView ? {
            rotate: [0, -360 * 3],
          } : {}}
          transition={{
            rotate: {
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: { duration: 0.3, delay: 1.4 },
          }}
        />

        {/* 巻き戻し矢印（反時計回り） */}
        <motion.g
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {/* 円弧 */}
          <motion.path
            d="M 85 35 A 30 30 0 1 0 35 35"
            stroke="rgba(0,183,255,0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            animate={isInView ? {
              strokeDashoffset: [0, -188],
            } : {}}
            strokeDasharray="188"
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          {/* 矢印の先端 */}
          <motion.polygon
            points="30,28 38,35 30,42"
            fill="rgba(0,183,255,0.6)"
            animate={isInView ? {
              opacity: [0.6, 1, 0.6],
            } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.g>

        {/* パルスリング（外側に広がる波紋） */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(0,183,255,0.3)"
          strokeWidth="1"
          fill="none"
          animate={isInView ? {
            r: [48, 58],
            opacity: [0.3, 0],
          } : {}}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.svg>
    </div>
  );
}

"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Capability density diagram with on-scroll animation.
 * Lines draw in (stroke-dashoffset), nodes fade up with a saffron pulse halo.
 */
export default function CapabilityDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView && !reduce;

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const lineProps = (delay: number) => ({
    initial: { pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 },
    animate: animate
      ? { pathLength: 1, opacity: 1 }
      : reduce
        ? { pathLength: 1, opacity: 1 }
        : undefined,
    transition: { duration: 1.0, delay, ease },
  });

  const nodeProps = (delay: number) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 },
    animate: animate
      ? { opacity: 1, y: 0 }
      : reduce
        ? { opacity: 1, y: 0 }
        : undefined,
    transition: { duration: 0.55, delay, ease },
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Capability density diagram showing brand systems, search dominance, listings infrastructure, paid media, reputation defense, and operator reporting connected to a central operator core"
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0A0A0A" />
        </marker>
        <radialGradient id="hub-pulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4A300" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#F4A300" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#F4A300" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hub pulse halo */}
      {animate && (
        <motion.circle
          cx="400"
          cy="200"
          r="80"
          fill="url(#hub-pulse)"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.4, 0.6], opacity: [0, 0.85, 0] }}
          transition={{
            duration: 3.2,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "400px 200px" }}
        />
      )}

      {/* Connecting lines, drawn in sequence */}
      <g stroke="#0A0A0A" strokeWidth="2" fill="none" strokeLinecap="round">
        <motion.line x1="160" y1="100" x2="370" y2="170" {...lineProps(0.05)} />
        <motion.line x1="640" y1="100" x2="430" y2="170" {...lineProps(0.12)} />
        <motion.line x1="80" y1="200" x2="370" y2="200" {...lineProps(0.19)} />
        <motion.line x1="720" y1="200" x2="430" y2="200" {...lineProps(0.26)} />
        <motion.line x1="160" y1="300" x2="370" y2="230" {...lineProps(0.33)} />
        <motion.line x1="640" y1="300" x2="430" y2="230" {...lineProps(0.40)} />
      </g>

      {/* Center hub */}
      <motion.g {...nodeProps(0.5)}>
        <rect x="340" y="160" width="120" height="80" fill="#F4A300" stroke="#0A0A0A" strokeWidth="2" />
        <text
          x="400"
          y="195"
          textAnchor="middle"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="13"
          fontWeight="800"
          fill="#0A0A0A"
          letterSpacing="0.5"
        >
          OPERATOR
        </text>
        <text
          x="400"
          y="215"
          textAnchor="middle"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#0A0A0A"
        >
          CORE
        </text>
      </motion.g>

      {/* Top-left: Brand Systems */}
      <motion.g {...nodeProps(0.6)}>
        <rect x="60" y="60" width="200" height="80" fill="#0F1B3C" stroke="#0A0A0A" strokeWidth="2" />
        <text x="160" y="92" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#FFFFFF">
          BRAND SYSTEMS
        </text>
        <text x="160" y="115" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="10" fill="#F4A300">
          Documented identity
        </text>
      </motion.g>

      {/* Top-right: Search Dominance */}
      <motion.g {...nodeProps(0.68)}>
        <rect x="540" y="60" width="200" height="80" fill="#0F1B3C" stroke="#0A0A0A" strokeWidth="2" />
        <text x="640" y="92" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#FFFFFF">
          SEARCH DOMINANCE
        </text>
        <text x="640" y="115" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="10" fill="#F4A300">
          Organic + local + brand
        </text>
      </motion.g>

      {/* Mid-left: Listings */}
      <motion.g {...nodeProps(0.76)}>
        <rect x="0" y="160" width="160" height="80" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
        <text x="80" y="192" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#0A0A0A">
          LISTINGS
        </text>
        <text x="80" y="208" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#0A0A0A">
          INFRASTRUCTURE
        </text>
      </motion.g>

      {/* Mid-right: Paid Media */}
      <motion.g {...nodeProps(0.84)}>
        <rect x="640" y="160" width="160" height="80" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
        <text x="720" y="192" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#0A0A0A">
          PAID MEDIA
        </text>
        <text x="720" y="212" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="10" fill="#0A0A0A">
          First-party reconciled
        </text>
      </motion.g>

      {/* Bottom-left: Reputation Defense */}
      <motion.g {...nodeProps(0.92)}>
        <rect x="60" y="260" width="200" height="80" fill="#0F1B3C" stroke="#0A0A0A" strokeWidth="2" />
        <text x="160" y="292" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#FFFFFF">
          REPUTATION DEFENSE
        </text>
        <text x="160" y="315" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="10" fill="#F4A300">
          Owned-property dominance
        </text>
      </motion.g>

      {/* Bottom-right: Reporting */}
      <motion.g {...nodeProps(1.0)}>
        <rect x="540" y="260" width="200" height="80" fill="#0F1B3C" stroke="#0A0A0A" strokeWidth="2" />
        <text x="640" y="292" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#FFFFFF">
          OPERATOR REPORTING
        </text>
        <text x="640" y="315" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="10" fill="#F4A300">
          Friday cadence
        </text>
      </motion.g>

      {/* Saffron node accent dots that pulse on the hub corners */}
      {animate && (
        <>
          <motion.circle
            cx="340"
            cy="160"
            r="4"
            fill="#0A0A0A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            style={{ transformOrigin: "340px 160px" }}
          />
          <motion.circle
            cx="460"
            cy="160"
            r="4"
            fill="#0A0A0A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "460px 160px" }}
          />
          <motion.circle
            cx="340"
            cy="240"
            r="4"
            fill="#0A0A0A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            style={{ transformOrigin: "340px 240px" }}
          />
          <motion.circle
            cx="460"
            cy="240"
            r="4"
            fill="#0A0A0A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "460px 240px" }}
          />
        </>
      )}
    </svg>
  );
}

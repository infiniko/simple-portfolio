"use client";

// npm install @phosphor-icons/react framer-motion

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import { skillSet } from "@/data";

// ─── Customise here ──────────────────────────────────────────────────────────

const CARDS = skillSet;

// ─────────────────────────────────────────────────────────────────────────────

function GlassCardItem({
  id,
  title,
  color,
  gradient,
  icon: Icon,
  entries,
}: {
  id: number;
  title: string;
  color: string;
  gradient: string;
  icon: Icon;
  entries: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouse = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative w-64 cursor-pointer overflow-hidden rounded-3xl p-[1px]"
    >
      {/* Rotating border gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-30"
        style={{
          background: `linear-gradient(135deg, ${gradient}, transparent 60%)`,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Card body */}
      <div
        className="relative rounded-3xl p-6"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        }}
      >
        {/* Icon — notification-style tinted badge */}
        <motion.div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            background: `${color}18`,
            border: `1px solid ${color}22`,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Icon size={22} weight="duotone" style={{ color }} />
        </motion.div>

        <h3 className="mb-2 text-base font-semibold text-white/90">{title}</h3>
        {/* <p className="mb-5 text-sm leading-relaxed text-white/40">{subtitle}</p> */}

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-between rounded-2xl px-4 py-3"
          style={{
            background: `linear-gradient(135deg, ${gradient.split(",")[0]}40, ${gradient.split(",")[1]?.trim() ?? gradient.split(",")[0]}28)`,
            border: `1px solid ${gradient.split(",")[0]}55`,
            boxShadow: `0 2px 12px ${gradient.split(",")[0]}25`,
            transition: "box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = `0 4px 20px ${gradient.split(",")[0]}45`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = `0 2px 12px ${gradient.split(",")[0]}25`)
          }
        >
          <span
            className="text-sm font-semibold"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {entries.map((entry) => (
              <div key={entry}>{entry}</div>
            ))}
          </span>
        </motion.button>

        {/* Top edge highlight */}
        <div
          className="absolute left-6 right-6 top-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function GlassCard() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="relative flex flex-wrap items-center justify-center gap-6 px-6">
        {CARDS.map((card) => (
          <GlassCardItem key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

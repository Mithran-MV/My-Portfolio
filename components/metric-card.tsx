"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type MetricCardProps = {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
};

export function MetricCard({
  label,
  value,
  suffix = "",
  duration = 1.4
}: MetricCardProps) {
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) => {
    const rounded = Number.isInteger(value) ? Math.round(latest) : Number(latest).toFixed(1);
    return rounded.toString();
  });

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, value, duration]);

  return (
    <div className="glass-panel flex h-full flex-col justify-between rounded-xl p-5 shadow-lg">
      <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
        {label}
      </div>
      <motion.div className="mt-3 font-display text-3xl text-white light:text-slate-900">
        <motion.span>{formatted}</motion.span>
        {suffix && <span className="ml-1 text-xl text-cyan-200/90">{suffix}</span>}
      </motion.div>
    </div>
  );
}

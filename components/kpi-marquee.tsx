"use client";

import { motion } from "framer-motion";
import { MetricCard } from "./metric-card";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

export function KpiMarquee({ metrics }: { metrics: Metric[] }) {
  const duplicated = [...metrics, ...metrics];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-800/80 py-4 light:border-slate-200 light:bg-white">
      <motion.div
        className="flex gap-4"
        animate={{ x: "-50%" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ width: "200%" }}
      >
        {duplicated.map((metric, idx) => (
          <div key={`${metric.label}-${idx}`} className="min-w-[220px] flex-1 px-2">
            <MetricCard {...metric} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

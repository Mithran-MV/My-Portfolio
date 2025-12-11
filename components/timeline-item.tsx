"use client";

import { motion } from "framer-motion";

type TimelineItemProps = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
  accent?: string;
};

export function TimelineItem({
  title,
  role,
  period,
  bullets,
  accent = "cyan"
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-8"
    >
      <span className="absolute left-1 top-2 h-4 w-4 rounded-full border border-white/20 bg-night-900 shadow-glow-teal light:border-slate-300 light:bg-white" />
      <div
        className={`rounded-xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white`}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg text-white light:text-slate-900">
              {title}
            </h3>
            <p className="text-sm text-cyan-200/80 light:text-cyan-700">{role}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-300/70 light:text-slate-600">
            {period}
          </span>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-300/80 light:text-slate-700">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className={`mt-2 h-1 w-1 rounded-full ${
                  accent === "purple" ? "bg-purple-300" : "bg-cyan-300"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

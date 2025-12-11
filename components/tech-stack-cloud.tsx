"use client";

import { motion } from "framer-motion";

type CloudGroup = {
  title: string;
  items: string[];
};

export function TechStackCloud({ groups }: { groups: CloudGroup[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group, idx) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="rounded-xl border border-white/10 bg-white/5 p-4 light:border-slate-200 light:bg-white"
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-display text-lg text-white light:text-slate-900">
              {group.title}
            </h4>
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
              {group.items.length}+
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

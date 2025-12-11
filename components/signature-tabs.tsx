"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Chip } from "./chip";

export type SignatureDomain = {
  key: string;
  title: string;
  bullets: string[];
  tech: string[];
};

export function SignatureTabs({ domains }: { domains: SignatureDomain[] }) {
  const [active, setActive] = useState(domains[0]?.key ?? "");
  const activeDomain = domains.find((d) => d.key === active) ?? domains[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white">
      <div className="flex gap-3 overflow-x-auto pb-3">
        {domains.map((domain) => (
          <button
            key={domain.key}
            onClick={() => setActive(domain.key)}
            className="relative rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-200/40 light:border-slate-200 light:text-slate-700"
          >
            {domain.title}
            {active === domain.key && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 -z-10 rounded-full bg-cyan-400/15"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeDomain?.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4 md:grid-cols-2"
        >
          <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
            {activeDomain?.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {activeDomain?.tech.map((item) => (
              <Chip key={item} tone="solid" accent="purple">
                {item}
              </Chip>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

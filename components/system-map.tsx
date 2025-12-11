"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Hero visual now centers your own image (profile.png in /public).
export function SystemMap() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-night-800 via-night-900 to-night-800 p-5 shadow-2xl light:border-slate-200 light:from-white light:via-slate-50 light:to-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="h-full w-full bg-grid-pattern" style={{ backgroundSize: "32px 32px" }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(45,212,191,0.16),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(192,132,252,0.16),transparent_30%)]" />

      <motion.div
        className="absolute h-64 w-64 rounded-full bg-[conic-gradient(from_0deg,rgba(45,212,191,0.12),rgba(96,165,250,0.12),rgba(192,132,252,0.12),rgba(45,212,191,0.12))]"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex h-full w-full max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-glow-teal light:border-slate-200 light:bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(96,165,250,0.22),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(192,132,252,0.18),transparent_45%)] blur-xl" />
        <Image
          src="/profile.png"
          alt="Mithran MV"
          fill
          priority
          sizes="(max-width:768px) 100vw, 960px"
          className="object-contain object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900/10 via-night-900/5 to-transparent light:from-white/20 light:via-white/10 light:to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/20 bg-night-900/70 p-4 text-sm text-slate-100 backdrop-blur-md light:border-slate-200 light:bg-white/85 light:text-slate-800">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80 light:text-cyan-700">Mithran MV</p>
            <p className="font-display text-lg text-white light:text-slate-900">
              Full Stack Developer · Cloud Systems Architect · AI & Blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

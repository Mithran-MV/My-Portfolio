"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Chip } from "./chip";

export type SpotlightItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  label: string;
  image?: string;
};

export function SpotlightCarousel({ items }: { items: SpotlightItem[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-night-800 to-night-900 p-5 light:border-slate-200 light:from-white light:to-slate-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200/70">
          <Sparkles size={14} />
          Spotlight Systems
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous spotlight project"
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:border-cyan-200/50 light:border-slate-200 light:bg-white light:text-slate-900"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next spotlight project"
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:border-cyan-200/50 light:border-slate-200 light:bg-white light:text-slate-900"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="mt-6 grid gap-6 md:grid-cols-5 md:items-center"
        >
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2">
              <Chip tone="solid" accent="purple">
                {current.label}
              </Chip>
            </div>
            <h3 className="mt-3 font-display text-2xl text-white light:text-slate-900">
              {current.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300/80 light:text-slate-700">
              {current.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <Chip key={tag} tone="outline" accent="teal">
                  {tag}
                </Chip>
              ))}
            </div>
            <Link
              href={`/projects/${current.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:gap-3 light:text-cyan-700"
            >
              Deep dive
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-white/5 md:col-span-2 light:border-slate-200 light:bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20" />
            {current.image ? (
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover opacity-80"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-200/70 light:text-slate-700">
                Visual node map
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

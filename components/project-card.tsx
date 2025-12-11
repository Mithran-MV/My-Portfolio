"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "./chip";

export type ProjectCardProps = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  categories: string[];
  labels?: string[];
  tech: string[];
};

export function ProjectCard({
  slug,
  title,
  subtitle,
  role,
  status,
  categories,
  labels = [],
  tech
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-panel group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 p-5 transition hover:border-cyan-300/40 light:border-slate-200"
    >
      <div className="flex items-center justify-between">
        <Chip tone="solid" accent="purple">
          {status}
        </Chip>
        <div className="flex gap-2">
          {labels.map((label) => (
            <Chip key={label} tone="outline" accent="teal">
              {label}
            </Chip>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl text-white light:text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-300/80 light:text-slate-700">
          {subtitle}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
          {role}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Chip key={category} tone="outline" accent="blue">
            {category}
          </Chip>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300/70 light:text-slate-600">
        {tech.slice(0, 6).map((stack) => (
          <span key={stack} className="rounded-md bg-white/5 px-2 py-1 light:bg-slate-100">
            {stack}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${slug}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:gap-3 light:text-cyan-700"
      >
        View case study <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
}

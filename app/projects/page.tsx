"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { projects, internshipSlugs } from "@/data/projects";

const filters = ["All", "AI & Agents", "Web3 & ZK", "Enterprise & ERP", "IoT & R&D", "Community & EdTech"];

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const visibleProjects = projects.filter((p) => !internshipSlugs.includes(p.slug));
  const filtered =
    active === "All"
      ? visibleProjects
      : visibleProjects.filter((project) => project.categories.includes(active));

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Projects"
        title="Systems portfolio"
        subtitle="Enterprise ERP, SLA engines, blockchain integrations, AI products, and deterministic hardware control. Internship work is listed separately."
      />

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActive(filter)}
            whileTap={{ scale: 0.96 }}
            className={`relative rounded-full border px-4 py-2 text-sm transition ${
              active === filter
                ? "border-cyan-300 bg-cyan-400/15 text-cyan-100"
                : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-200/40 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>
      <p className="text-xs text-slate-300/80 light:text-slate-600">
        Want to see what I built during internships? Visit <a className="text-cyan-200 hover:text-white light:text-cyan-700" href="/internship">Internship Projects</a>.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            role={project.role}
            status={project.status}
            categories={project.categories}
            labels={project.labels}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

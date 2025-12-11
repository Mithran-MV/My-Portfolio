import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { Chip } from "@/components/chip";
import { SystemDiagram } from "@/components/system-diagram";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const { caseStudy } = project;

  return (
    <article className="space-y-10">
      <header className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-night-800 via-night-900 to-night-800 p-6 shadow-2xl light:border-slate-200 light:from-white light:via-white light:to-slate-50">
        <div className="flex flex-wrap items-center gap-3">
          <Chip tone="solid" accent="teal">
            {project.status}
          </Chip>
          {project.labels.map((label) => (
            <Chip key={label} tone="outline" accent="purple">
              {label}
            </Chip>
          ))}
        </div>
        <h1 className="mt-4 font-display text-3xl text-white light:text-slate-900">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-slate-200/80 light:text-slate-700">{project.subtitle}</p>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
          {project.role}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <Chip key={c} tone="outline" accent="blue">
              {c}
            </Chip>
          ))}
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 light:bg-slate-100 light:text-slate-700">
              {t}
            </span>
          ))}
        </div>
      </header>

      {caseStudy.diagram && (
        <SystemDiagram
          nodes={caseStudy.diagram.nodes}
          edges={caseStudy.diagram.edges}
          caption={caseStudy.diagram.caption}
        />
      )}

      <SectionHeader eyebrow="Context" title="Problem & context" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.context.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <SectionHeader eyebrow="Architecture" title="Architecture & stack" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.architecture.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-blue-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <SectionHeader eyebrow="Features" title="Key flows" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.features.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <SectionHeader eyebrow="Challenges" title="Engineering challenges & solutions" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.challenges.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-orange-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <SectionHeader eyebrow="Impact" title="Impact & metrics" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.impact.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <SectionHeader eyebrow="Next" title="What I’d improve next" />
      <ul className="space-y-3 text-sm text-slate-200/80 light:text-slate-700">
        {caseStudy.improvements.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

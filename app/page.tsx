import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Download, MapPin, Trophy } from "lucide-react";
import { SystemMap } from "@/components/system-map";
import { SectionHeader } from "@/components/section-header";
import { signatureDomains, whatIDo, kpiMetrics } from "@/data/skills";
import { SignatureTabs } from "@/components/signature-tabs";
import { SpotlightCarousel } from "@/components/spotlight-carousel";
import { projects, spotlightSlugs } from "@/data/projects";
import { Chip } from "@/components/chip";
import { KpiMarquee } from "@/components/kpi-marquee";
import { impactStatements, proofTiles } from "@/data/home";
import { QuickNav } from "@/components/quick-nav";
import { VisitorCounter } from "@/components/visitor-counter";

const spotlightItems = spotlightSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<(typeof projects)[number]> => Boolean(p))
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.summary,
    tags: [...p.categories, ...p.tech.slice(0, 2)],
    label: p.labels[0] ?? "Flagship",
    image: p.heroImage
  }));

export default function HomePage() {
  const quickNavSections = [
    { id: "hero", label: "Overview" },
    { id: "what-i-do", label: "What I Do" },
    { id: "domains", label: "Domains" },
    { id: "spotlight", label: "Spotlight" },
    { id: "proof", label: "Proof" },
    { id: "impact", label: "Impact" }
  ];

  return (
    <div className="space-y-16">
      <QuickNav sections={quickNavSections} />

      <section id="hero" className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
            Senior Full Stack Engineer & Systems Architect — Chennai, India
          </p>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl light:text-slate-900">
            Designing systems where AI, Web3, and hardware actually talk to each other.
          </h1>
          <p className="text-sm text-slate-200/80 light:text-slate-700">
            High-impact engineering lead building scalable distributed systems, cloud-native platforms, and AI/Web3 products. Bridges IoT/embedded hardware with AI & blockchain for governments, manufacturing groups, and startups.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-night-900 shadow-glow-teal transition hover:shadow-glow-purple"
            >
              View Systems Portfolio
            </Link>
            <Link
              href="/awards"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:text-cyan-100 light:border-slate-200 light:text-slate-900"
            >
              See ETHGlobal Wins
            </Link>
            <a
              href="/Mithran-MV-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-200/50 hover:text-cyan-100 light:border-slate-200 light:text-slate-900"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip tone="solid" accent="teal">
              <Trophy size={14} /> ETHGlobal Ethereum Winner (Coinbase Pool)
            </Chip>
            <Chip tone="solid" accent="blue">
              <BadgeCheck size={14} /> ETHGlobal Bangkok Winner (WorkVerse)
            </Chip>
            <Chip tone="solid" accent="purple">
              20+ Google Cloud Badges
            </Chip>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300/80 light:text-slate-600">
            <MapPin size={14} />
            Chennai, India · Full Stack · Cloud Systems · AI & Blockchain · IoT
          </div>
        </div>
        <div className="relative">
          <SystemMap />
          <div className="mt-3">
            <VisitorCounter />
          </div>
        </div>
      </section>

      <section id="what-i-do" className="space-y-6">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I actually ship"
          subtitle="AI systems, Web3 attestations, campus-scale ERP, IoT control, and the glue between them."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {whatIDo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel card-hover flex items-start gap-3 rounded-xl border border-white/10 p-4 light:border-slate-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200 light:bg-cyan-100 light:text-cyan-800">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white light:text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300/80 light:text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="domains" className="space-y-6">
        <SectionHeader
          eyebrow="Signature Domains"
          title="Systems Control Hub"
          subtitle="Horizontal tabs reveal how AI, Web3, enterprise, and IoT stacks interlock."
        />
        <SignatureTabs domains={signatureDomains} />
      </section>

      <section id="spotlight" className="space-y-6">
        <SectionHeader
          eyebrow="Spotlight"
          title="Flagship systems"
          subtitle="Award-winning builds and production deployments stitched across AI, Web3, and hardware."
        />
        <SpotlightCarousel items={spotlightItems} />
      </section>

      <section id="proof" className="space-y-6">
        <SectionHeader
          eyebrow="Proof of scale"
          title="Operational signals"
          subtitle="Evidence from high-concurrency launches, manufacturing rollouts, and temporal SLA engines."
        />
        <KpiMarquee metrics={kpiMetrics} />
        <div className="flex flex-wrap gap-3">
          {proofTiles.map((tile) => (
            <div
              key={tile}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/80 light:border-slate-200 light:bg-white light:text-slate-700"
            >
              {tile}
            </div>
          ))}
        </div>
      </section>

      <section id="impact" className="space-y-6">
        <SectionHeader
          eyebrow="Impact statements"
          title="Where the systems landed"
          subtitle="Measurable outcomes from manufacturing floors to campus-wide launches."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {impactStatements.map((impact) => (
            <div
              key={impact}
              className="glass-panel card-hover rounded-xl border border-white/10 p-4 text-sm text-slate-200/80 light:border-slate-200 light:text-slate-700"
            >
              {impact}
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-300/80 light:border-slate-200 light:text-slate-700">
        <Link href="/contact" className="text-cyan-200 hover:text-white light:text-cyan-700">
          Collaborate →
        </Link>
      </footer>
    </div>
  );
}

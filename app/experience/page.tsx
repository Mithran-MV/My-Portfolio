import { SectionHeader } from "@/components/section-header";
import { TimelineItem } from "@/components/timeline-item";
import { TechStackCloud } from "@/components/tech-stack-cloud";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";

const howIWork = [
  {
    title: "Architecture First",
    detail: "Model tradeoffs, failure modes, and observability before writing the first API handler."
  },
  {
    title: "Shipping Bias",
    detail: "Hackathons to production rollouts—ship fast with guardrails, then harden with metrics."
  },
  {
    title: "Bridging Hardware & Cloud",
    detail: "From RP2040 laser control to MQTT pipelines that feed cloud services with deterministic clocks."
  }
];

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Experience"
        title="Timeline & technical arsenal"
        subtitle="Lead engineer designing enterprise, AI, blockchain, and IoT systems with production uptime demands."
      />

      <div className="space-y-6">
        <h3 className="font-display text-xl">Career path</h3>
        <div className="border-l border-white/10 pl-2 light:border-slate-200">
          {experience.map((item) => (
            <TimelineItem
              key={item.company}
              title={item.company}
              role={item.role}
              period={item.period}
              bullets={item.bullets}
              accent={item.accent === "purple" ? "purple" : "cyan"}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeader
          eyebrow="Technical Arsenal"
          title="Stacks that ship"
          subtitle="Distributed systems, languages, infra, and specialized domains used in production and hackathon wins."
        />
        <TechStackCloud groups={skillGroups} />
      </div>

      <div className="space-y-6">
        <SectionHeader
          eyebrow="Operating System"
          title="How I work"
          subtitle="Principles applied from discovery to delivery."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {howIWork.map((item) => (
            <div
              key={item.title}
              className="glass-panel card-hover rounded-xl border border-white/10 p-5 light:border-slate-200"
            >
              <h4 className="font-display text-lg text-white light:text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-slate-300/80 light:text-slate-700">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

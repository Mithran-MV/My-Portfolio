import { ArrowRight } from "lucide-react";
import { Chip } from "./chip";

type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone?: "teal" | "blue" | "purple";
};

type DiagramEdge = {
  from: string;
  to: string;
  label?: string;
};

type SystemDiagramProps = {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  caption?: string;
};

const toneMap: Record<NonNullable<DiagramNode["tone"]>, string> = {
  teal: "from-cyan-400/50 to-emerald-400/50 border-cyan-200/40",
  blue: "from-blue-400/50 to-indigo-400/50 border-blue-200/40",
  purple: "from-purple-400/50 to-pink-400/50 border-purple-200/40"
};

// Reimagined system diagram: clean cards + connection bands, no overlapping circles.
export function SystemDiagram({ nodes, edges, caption }: SystemDiagramProps) {
  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-night-800 via-night-900 to-night-800 p-5 shadow-xl light:border-slate-200 light:from-white light:via-slate-50 light:to-slate-100">
      {caption && (
        <div className="flex items-center gap-2 text-sm text-slate-200/80 light:text-slate-700">
          <ArrowRight size={16} className="text-cyan-300" />
          {caption}
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-3">
        {nodes.map((node) => {
          const tone = node.tone ?? "teal";
          return (
            <div
              key={node.id}
              className={`relative overflow-hidden rounded-xl border bg-white/5 p-3 light:bg-white ${toneMap[tone as keyof typeof toneMap] ?? toneMap.teal}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-100 light:text-cyan-700">
                  Node
                </span>
                <span className="h-2 w-2 rounded-full bg-white/70" />
              </div>
              <div className="mt-2 font-display text-lg text-white light:text-slate-900">
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        {edges.map((edge) => {
          const from = nodes.find((n) => n.id === edge.from);
          const to = nodes.find((n) => n.id === edge.to);
          if (!from || !to) return null;
          return (
            <div
              key={`${edge.from}-${edge.to}-${edge.label ?? ""}`}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 text-xs text-slate-200/90 light:border-slate-200 light:bg-white light:text-slate-700"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="font-semibold text-white light:text-slate-900">{from.label}</span>
              <ArrowRight size={14} className="text-cyan-300" />
              <span className="font-semibold text-white light:text-slate-900">{to.label}</span>
              {edge.label && (
                <Chip tone="solid" accent="blue">
                  {edge.label}
                </Chip>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip tone="solid" accent="teal">
          Data
        </Chip>
        <Chip tone="solid" accent="blue">
          Control
        </Chip>
        <Chip tone="solid" accent="purple">
          Security
        </Chip>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Chip } from "./chip";

const modes = {
  sensor: {
    label: "Virtual Sensor Stream",
    desc: "Adjust moisture to see inferred state from the predictive model.",
    unit: "%",
    ranges: [
      { max: 35, label: "Dry", tone: "purple", detail: "Irrigation trigger queued" },
      { max: 65, label: "Optimal", tone: "teal", detail: "Hold state, monitor drift" },
      { max: 85, label: "Saturated", tone: "blue", detail: "Reduce flow, capture excess" },
      { max: 100, label: "Flooding", tone: "purple", detail: "Force shut-off + alerts" }
    ]
  },
  sla: {
    label: "Temporal SLA Timeline",
    desc: "Slide to simulate elapsed time against the SLA policy.",
    unit: "min",
    ranges: [
      { max: 20, label: "Green", tone: "teal", detail: "Within SLA window" },
      { max: 35, label: "Warning", tone: "blue", detail: "Pre-escalation notices" },
      { max: 50, label: "Breach Risk", tone: "purple", detail: "Auto-prioritize + reroute" },
      { max: 100, label: "Breach", tone: "purple", detail: "Escalation matrix active" }
    ]
  }
} as const;

type ModeKey = keyof typeof modes;

export function LabPlayground() {
  const [mode, setMode] = useState<ModeKey>("sensor");
  const [value, setValue] = useState(48);
  const config = modes[mode];

  const activeRange = useMemo(
    () => config.ranges.find((r) => value <= r.max) ?? config.ranges.at(-1)!,
    [config, value]
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Playground
          </p>
          <h3 className="font-display text-xl text-white light:text-slate-900">
            {config.label}
          </h3>
          <p className="text-sm text-slate-300/80 light:text-slate-700">{config.desc}</p>
        </div>
        <div className="flex gap-2">
          {(Object.keys(modes) as ModeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                mode === key
                  ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                  : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-200/40 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
              }`}
            >
              {modes[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-cyan-300"
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-night-900/60 p-4 text-sm light:border-slate-200 light:bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="text-slate-300/80 light:text-slate-700">Value</span>
              <span className="font-display text-2xl text-white light:text-slate-900">
                {value}
                <span className="ml-1 text-sm text-cyan-200/80">{config.unit}</span>
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/5 light:bg-slate-200">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                initial={false}
                animate={{ width: `${value}%` }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-400 light:text-slate-600">
              Simulated signal traces render here with damped movement to mimic buffering.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-night-900/60 p-4 light:border-slate-200 light:bg-slate-50">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
              Status
            </p>
            <h4 className="mt-2 font-display text-xl text-white light:text-slate-900">
              {activeRange.label}
            </h4>
            <p className="text-sm text-slate-300/80 light:text-slate-700">{activeRange.detail}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {config.ranges.map((range) => (
                <Chip
                  key={range.label}
                  tone={range.label === activeRange.label ? "solid" : "outline"}
                  accent={range.tone as any}
                >
                  {range.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

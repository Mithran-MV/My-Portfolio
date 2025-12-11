"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

const projectTypes = [
  "AI / Web3 product",
  "Enterprise system / ERP",
  "IoT / R&D integration",
  "Consulting / Architecture review",
  "Other"
];

export default function ContactPage() {
  const [mode, setMode] = useState<"human" | "agent">("human");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build the next system"
        subtitle="Open to AI/Web3 products, enterprise systems, IoT + deterministic control integrations, and R&D collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("human")}
              className={`rounded-full px-3 py-1 text-xs ${
                mode === "human"
                  ? "bg-cyan-400/15 text-cyan-100"
                  : "bg-white/5 text-slate-300 light:bg-slate-100 light:text-slate-700"
              }`}
            >
              I’m a Human
            </button>
            <button
              onClick={() => setMode("agent")}
              className={`rounded-full px-3 py-1 text-xs ${
                mode === "agent"
                  ? "bg-purple-400/15 text-purple-100"
                  : "bg-white/5 text-slate-300 light:bg-slate-100 light:text-slate-700"
              }`}
            >
              I’m an AI Agent hiring another AI
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-300/80 light:text-slate-700">
            {mode === "human"
              ? "Tell me what outcome you need; I’ll map architecture, delivery plan, and integration risks."
              : "Provide endpoint specs and constraints; I’ll propose deterministic pipelines for your agents."}
          </p>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-night-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-300 light:border-slate-200 light:bg-white"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-night-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-300 light:border-slate-200 light:bg-white"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                  Company
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-night-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-300 light:border-slate-200 light:bg-white"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                  Project type
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-white/10 bg-night-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-300 light:border-slate-200 light:bg-white"
                >
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                Project brief
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 h-28 w-full rounded-lg border border-white/10 bg-night-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-300 light:border-slate-200 light:bg-white"
              />
              <p className="mt-1 text-xs text-slate-400 light:text-slate-600">
                Frontend-only; no submission is sent. Provide enough detail to plan architecture.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-4 py-3 text-sm font-semibold text-night-900 shadow-glow-teal"
            >
              Send signal
            </motion.button>
            {submitted && (
              <div className="text-sm text-cyan-200">Signal received. I’ll respond within one business day.</div>
            )}
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white">
          <h3 className="font-display text-xl text-white light:text-slate-900">
            Coordination links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300/80 light:text-slate-700">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-300" /> mithran07.mv@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-300" /> Chennai, India
            </li>
            <li className="flex items-center gap-2">
              <Github size={16} className="text-cyan-300" />
              <Link href="https://github.com/mithranmv" className="hover:text-white light:hover:text-slate-900">
                github.com/mithranmv
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} className="text-cyan-300" />
              <Link
                href="https://www.linkedin.com/in/mithranmv"
                className="hover:text-white light:hover:text-slate-900"
              >
                linkedin.com/in/mithranmv
              </Link>
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-night-900/60 p-4 text-sm light:border-slate-200 light:bg-slate-50">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
              Collaboration fit
            </p>
            <ul className="mt-2 space-y-2">
              <li>• AI/Web3 products with wallet-aware agents.</li>
              <li>• Enterprise systems, ERPs, and SLA/temporal engines.</li>
              <li>• IoT pipelines, deterministic control, and digital twins.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

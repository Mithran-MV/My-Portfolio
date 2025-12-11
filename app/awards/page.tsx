import { Trophy, Award as AwardIcon, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { awards } from "@/data/awards";
import { Chip } from "@/components/chip";

export default function AwardsPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Awards"
        title="ETHGlobal wins & credentials"
        subtitle="ETHGlobal Coinbase Developer Prize and Push Protocol prize at ETHGlobal Bangkok, plus Google Cloud badges."
        action={
          <Chip tone="solid" accent="purple">
            <ShieldCheck size={14} /> Verified wins
          </Chip>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-5 light:border-slate-200 light:from-white light:to-slate-50">
          <div className="flex items-center gap-3">
            <Trophy className="text-cyan-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                ETHGlobal Ethereum 2025
              </p>
              <h3 className="font-display text-xl text-white light:text-slate-900">
                Coinbase Developer Prize — V-WorkForce
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-200/80 light:text-slate-700">
            Agentic marketplace with Coinbase AgentKit wallets, Nillion SecretVault privacy, and Privy onboarding for legal-grade automation.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-5 light:border-slate-200 light:from-white light:to-slate-50">
          <div className="flex items-center gap-3">
            <Trophy className="text-purple-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                ETHGlobal Bangkok 2024
              </p>
              <h3 className="font-display text-xl text-white light:text-slate-900">
                Push Protocol Prize — WorkVerse
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-200/80 light:text-slate-700">
            Gamified virtual office with Phaser3 + React, proximity-based encrypted video via Push Protocol.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-xl">Timeline</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="glass-panel card-hover rounded-xl border border-white/10 p-4 light:border-slate-200"
            >
              <div className="flex items-center gap-2">
                <AwardIcon className="text-cyan-300" size={18} />
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70 light:text-cyan-700">
                  {award.period}
                </p>
              </div>
              <h4 className="mt-2 font-display text-lg text-white light:text-slate-900">
                {award.title}
              </h4>
              <p className="text-sm text-slate-300/80 light:text-slate-700">{award.event}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {award.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-md bg-white/5 px-3 py-1 text-xs text-slate-200 light:bg-slate-100 light:text-slate-700"
                  >
                    {detail}
                  </span>
                ))}
              </div>
              {award.label && (
                <Chip tone="outline" accent="purple">
                  {award.label}
                </Chip>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

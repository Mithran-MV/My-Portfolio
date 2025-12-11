import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  action?: ReactNode;
};

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  action
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200/70">
          {eyebrow && (
            <>
              <Sparkles size={14} />
              <span>{eyebrow}</span>
            </>
          )}
        </div>
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
        {subtitle && (
          <p className="max-w-2xl text-sm text-slate-300/80 light:text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

import { ReactNode } from "react";
import clsx from "clsx";

type ChipProps = {
  children: ReactNode;
  tone?: "outline" | "solid";
  accent?: "teal" | "blue" | "purple";
};

export function Chip({
  children,
  tone = "outline",
  accent = "teal"
}: ChipProps) {
  const base = "text-xs rounded-full px-3 py-1 inline-flex items-center gap-1";
  const colorMap = {
    teal: {
      outline: "border border-cyan-200/40 text-cyan-100",
      solid: "bg-cyan-400/15 text-cyan-100 border border-cyan-300/50"
    },
    blue: {
      outline: "border border-blue-200/40 text-blue-100",
      solid: "bg-blue-400/15 text-blue-100 border border-blue-300/50"
    },
    purple: {
      outline: "border border-purple-200/40 text-purple-100",
      solid: "bg-purple-400/15 text-purple-100 border border-purple-300/50"
    }
  };

  return <span className={clsx(base, colorMap[accent][tone])}>{children}</span>;
}

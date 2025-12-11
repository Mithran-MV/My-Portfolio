"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type QuickNavProps = {
  sections: { id: string; label: string }[];
};

export function QuickNav({ sections }: QuickNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.2, 0.4, 0.6, 1] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="pointer-events-none fixed right-6 top-1/3 hidden flex-col gap-3 lg:flex">
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={clsx(
              "pointer-events-auto flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition",
              isActive
                ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 bg-white/5 text-slate-300/70 hover:border-cyan-200/40 hover:text-white"
            )}
          >
            <span
              className={clsx(
                "h-2 w-2 rounded-full",
                isActive ? "bg-cyan-300 shadow-glow-teal" : "bg-white/40"
              )}
            />
            {section.label}
          </a>
        );
      })}
    </aside>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { usePathname } from "next/navigation";

// Client-side only counter to show visit frequency per page (stored locally).
export function VisitorCounter() {
  const pathname = usePathname();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = `mithran-visit:${pathname}`;
    const previous = Number(window.localStorage.getItem(key) ?? "0");
    const next = previous + 1;
    window.localStorage.setItem(key, String(next));
    setCount(next);
  }, [pathname]);

  if (count === null) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 light:border-slate-200 light:bg-white light:text-slate-800">
      <Eye size={14} className="text-cyan-300" />
      {count} local view{count > 1 ? "s" : ""} of this page
    </div>
  );
}

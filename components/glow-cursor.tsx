"use client";

import { useEffect, useState } from "react";

export function GlowCursor() {
  const [coords, setCoords] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setEnabled(false);

    const handleMove = (event: MouseEvent) => {
      if (!enabled) return;
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
      style={{
        left: coords.x - 128,
        top: coords.y - 128,
        transition: "transform 0.15s ease-out",
        transform: "translate3d(0,0,0)"
      }}
    />
  );
}

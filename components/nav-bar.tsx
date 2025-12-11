"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/internship", label: "Internship Projects" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" }
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl light:border-slate-200 light:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/60 via-blue-500/60 to-purple-500/60 p-[2px] shadow-glow-teal">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-night-900 text-sm font-semibold uppercase text-cyan-100 light:bg-white light:text-slate-900">
              MV
            </div>
          </div>
          <div>
            <p className="font-display text-lg text-white light:text-slate-900">
              Mithran MV
            </p>
            <p className="text-xs uppercase tracking-widest text-cyan-200/80 light:text-cyan-700">
              Full Stack · Cloud · AI & Blockchain
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  active
                    ? "text-cyan-200 underline decoration-cyan-400 decoration-2 underline-offset-8"
                    : "text-slate-200/80 hover:text-white light:text-slate-700 light:hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/projects"
            className="rounded-full border border-cyan-200/50 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-glow-teal transition hover:-translate-y-0.5 hover:shadow-glow-purple light:border-cyan-600 light:text-cyan-800"
          >
            Systems Portfolio
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md border border-white/10 bg-white/10 p-2 text-white light:border-slate-200 light:bg-white light:text-slate-900"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-night-800/90 px-4 py-4 shadow-xl light:border-slate-200 light:bg-white"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-base ${
                      active
                        ? "text-cyan-200"
                        : "text-slate-200/80 hover:text-white light:text-slate-700 light:hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="rounded-full border border-cyan-200/50 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 light:border-cyan-600 light:text-cyan-800"
              >
                Systems Portfolio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

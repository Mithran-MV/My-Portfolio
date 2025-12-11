import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 space-y-4 border-t border-white/10 pt-8 text-sm text-slate-300/80 light:border-slate-200 light:text-slate-700">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-base text-slate-200 light:text-slate-700">
          Built with Next.js, Tailwind, Framer Motion, and too much coffee.
        </span>
        <Link
          href="/contact"
          className="text-cyan-200 hover:text-white light:text-cyan-700 light:hover:text-cyan-800"
        >
          Collaborate →
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <span>© {year} Mithran MV — Full Stack · Cloud Systems · AI & Blockchain.</span>
        <div className="flex gap-4">
          <Link href="/projects" className="hover:text-white light:hover:text-slate-900">
            Projects
          </Link>
          <Link href="/internship" className="hover:text-white light:hover:text-slate-900">
            Internship
          </Link>
          <Link href="/awards" className="hover:text-white light:hover:text-slate-900">
            Awards
          </Link>
          <Link href="/contact" className="hover:text-white light:hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

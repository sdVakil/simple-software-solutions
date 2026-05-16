import Link from "next/link";

const links = [
  { href: "#build", label: "What we build" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-surface py-12 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="page-container">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Simple Software Solutions
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              MVP engineering for early-stage teams—fast feedback loops,
              production-quality foundations.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs font-medium uppercase tracking-widest text-muted"
            aria-label="Footer"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-slate-200/80 pt-8 dark:border-slate-800/80">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Simple Software Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

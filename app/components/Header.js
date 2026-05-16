import Link from "next/link";

const nav = [
  { href: "#build", label: "What we build" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-surface-elevated/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/70 dark:shadow-black/20">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:h-16 sm:flex-nowrap sm:py-0 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="order-1 font-mono text-base font-bold tracking-tight text-foreground sm:text-lg"
        >
          <span className="max-w-[12rem] leading-tight sm:max-w-none">
            Simple <span className="text-accent">Softwares</span>
          </span>
        </Link>
        <nav
          className="order-3 flex w-full basis-full flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] font-medium uppercase tracking-widest text-muted sm:order-2 sm:flex-1 sm:basis-auto sm:gap-x-5 sm:px-2 sm:text-[11px] md:gap-x-6"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="order-2 inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 ring-1 ring-white/20 transition hover:bg-accent-hover hover:shadow-accent/40 sm:order-3 sm:px-4 sm:text-xs dark:ring-slate-950/30 dark:text-slate-950"
        >
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Book a call</span>
        </Link>
      </div>
    </header>
  );
}

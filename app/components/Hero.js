import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/3 top-[-20%] h-[min(560px,80vw)] w-[min(560px,80vw)] rounded-full bg-gradient-to-br from-accent/25 via-sky-400/10 to-transparent blur-3xl dark:from-accent/20" />
        <div className="absolute -right-1/4 bottom-[-30%] h-[min(480px,70vw)] w-[min(480px,70vw)] rounded-full bg-gradient-to-tl from-indigo-500/15 via-accent/10 to-transparent blur-3xl dark:from-indigo-400/10" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          For founders from idea → first paying users
        </p>
        <h1 className="font-display mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          Production-ready MVPs.
          <br />
          Built for how your startup
          <br />
          <span className="text-gradient">actually ships.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          We design and build the software your runway needs —{" "}
          <strong className="font-semibold text-foreground">
            not a bloated platform with your logo pasted on top.
          </strong>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-accent/30 ring-1 ring-white/25 transition hover:bg-accent-hover hover:shadow-accent/50 dark:text-slate-950 dark:ring-slate-950/20"
          >
            Book a free call
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300/90 bg-surface-elevated px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm transition hover:border-accent/50 hover:text-accent dark:border-slate-600 dark:bg-slate-900/50 dark:hover:border-accent/40"
          >
            See our work
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

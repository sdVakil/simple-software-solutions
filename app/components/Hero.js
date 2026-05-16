import Link from "next/link";
import CalBookButton from "./CalBookButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/3 top-[-20%] h-[min(560px,80vw)] w-[min(560px,80vw)] rounded-full bg-gradient-to-br from-accent/25 via-sky-400/10 to-transparent blur-3xl dark:from-accent/20" />
        <div className="absolute -right-1/4 bottom-[-30%] h-[min(480px,70vw)] w-[min(480px,70vw)] rounded-full bg-gradient-to-tl from-indigo-500/15 via-accent/10 to-transparent blur-3xl dark:from-indigo-400/10" />
      </div>
      <div className="page-container relative py-14 sm:py-20 lg:py-24 2xl:py-28">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent sm:text-xs sm:tracking-[0.2em]">
          For founders from idea → first paying users
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(1.875rem,4.5vw+1rem,3.75rem)] font-bold leading-[1.12] tracking-tight text-foreground sm:mt-5 sm:leading-[1.1] lg:leading-[1.08]">
          Production-ready MVPs.{" "}
          <span className="sm:block">
            Built for how your startup{" "}
            <span className="text-gradient">actually ships.</span>
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:text-xl">
          We design and build the software your runway needs —{" "}
          <strong className="font-semibold text-foreground">
            not a bloated platform with your logo pasted on top.
          </strong>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <CalBookButton className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-accent/30 ring-1 ring-white/25 transition hover:bg-accent-hover hover:shadow-accent/50 sm:w-auto dark:text-slate-950 dark:ring-slate-950/20">
            Book a free call
            <span aria-hidden>→</span>
          </CalBookButton>
          <Link
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300/90 bg-surface-elevated px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm transition hover:border-accent/50 hover:text-accent sm:w-auto dark:border-slate-600 dark:bg-slate-900/50 dark:hover:border-accent/40"
          >
            See our work
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

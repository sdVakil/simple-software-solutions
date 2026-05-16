import Link from "next/link";

export default function Founder() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/90 py-20 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Simple Software Solutions
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for founders who need leverage, not theater.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We focus on early-stage MVPs because that is where scope discipline
            matters most: every week counts, every feature competes with runway,
            and “almost done” is expensive. Our process is designed to keep you
            shipping working software—not managing a black box.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Small senior-led team, tight feedback loops, and documentation your
            next hire can actually use.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex font-mono text-sm font-semibold uppercase tracking-wide text-accent hover:text-accent-hover"
          >
            Start with a free call →
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-surface p-8 shadow-lg dark:border-slate-700/80 dark:bg-slate-950/80">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
            Direct line
          </p>
          <p className="font-display mt-4 text-lg font-semibold text-foreground">
            Questions before you book?
          </p>
          <p className="mt-2 text-sm text-muted">
            Email us—we reply within one business day with next steps (or an
            honest “not a fit” if that saves you time).
          </p>
          <Link
            href="mailto:info@simple-softwares.net"
            className="mt-6 inline-block font-mono text-sm font-medium text-accent hover:underline"
          >
            info@simple-softwares.net
          </Link>
        </div>
      </div>
    </section>
  );
}

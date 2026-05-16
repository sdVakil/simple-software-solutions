const quotes = [
  {
    quote:
      "They shipped a credible MVP in weeks—not months—and the architecture didn’t paint us into a corner when we hired in-house.",
    name: "Alex R.",
    role: "Co-founder · B2B SaaS (stealth)",
  },
  {
    quote:
      "What stood out was how quickly they mapped our riskiest assumptions into a build plan we could show investors and pilot users.",
    name: "Jordan M.",
    role: "CEO · Fintech pre-seed",
  },
  {
    quote:
      "Super transparent week to week. We always had something runnable to test, which made our user interviews actually useful.",
    name: "Sam K.",
    role: "Product lead · Marketplace startup",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-slate-200/80 py-20 dark:border-slate-800/80 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          What clients say
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          From their words, not ours.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Names anonymized where teams prefer it—engagements are real; wording is
          lightly edited for clarity.
        </p>
        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {quotes.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200/90 bg-surface-elevated p-8 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/40"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-slate-200/80 pt-6 dark:border-slate-700/80">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

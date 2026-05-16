const steps = [
  {
    n: "01",
    title: "Free call",
    body: "About 30 minutes. We map your riskiest assumptions, bottlenecks, and what “MVP” needs to prove for the next stage.",
  },
  {
    n: "02",
    title: "Discovery sprint",
    body: "Short, fixed scope: user flows, technical risks, and a phased plan with trade-offs spelled out. Yours to keep even if you do not continue.",
  },
  {
    n: "03",
    title: "Build in the open",
    body: "Weekly runnable increments, written updates, and a shared backlog. No big reveal after months of silence—you test continuously.",
  },
  {
    n: "04",
    title: "Launch & stabilize",
    body: "Production release, monitoring, and a tight punch list for early-user feedback. Optional follow-on for iteration when you are ready.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden border-b border-slate-200/80 bg-slate-100/80 py-20 dark:border-slate-800/80 dark:bg-slate-950/80 sm:py-24"
    >
      <div
        className="bg-tech-grid pointer-events-none absolute inset-0 opacity-50 dark:opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How we work
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Working software every week. No surprises.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Borrowing the rhythm that keeps complex builds honest—adapted for
            early-stage speed and runway reality.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-slate-200/90 bg-surface p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/50"
            >
              <span className="font-mono text-xs font-bold text-accent">
                {step.n}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

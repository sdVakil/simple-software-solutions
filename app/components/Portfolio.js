const projects = [
  {
    name: "Rentflair",
    tag: "Fashion · SaaS",
    summary:
      "Ecommerce platform MVP for renting and selling preloved modest fashion dresses in the UK. Delivered with an admin dashboard for insights and control, in eight weeks.",
    stack: "Next.js · MongoDB · Vercel",
  },
  {
    name: "Simple Trade Signals",
    tag: "Fintech · SaaS",
    summary:
      "MVP for a financial trading insights community. Complex mathematical calculations presented in simple tabular views with a journal to keep track of user's actions and emotions.",
    stack: "Next.js · Rest APIs · Auth",
  },
  {
    name: "Manageaze",
    tag: "Compliance · SaaS",
    summary:
      "The all-in-one platform leveraging AI for policy management and governance—built for compliance-heavy, fast-moving organizations.",
    stack: "Full-stack · OpenAI · Payments-ready",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-b border-slate-200/80 py-20 dark:border-slate-800/80 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Case studies
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Snapshots of the kind of MVPs we ship—names anonymized where
              needed. Each engagement focused on something customers could use,
              not a slide deck.
            </p>
          </div>
        </div>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-b from-surface to-slate-50/80 p-8 shadow-sm transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/10 dark:border-slate-700/80 dark:from-slate-900/80 dark:to-slate-950/80 dark:hover:shadow-accent/15"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
              <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {project.tag}
              </p>
              <h3 className="font-display relative mt-3 text-2xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="relative mt-4 flex-1 leading-relaxed text-muted">
                {project.summary}
              </p>
              <p className="relative mt-6 border-t border-slate-200/80 pt-4 font-mono text-xs font-medium text-foreground/90 dark:border-slate-700/80">
                {project.stack}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

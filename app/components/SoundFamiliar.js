const pains = [
  {
    title: "You’ve outgrown the prototype",
    body: "The Notion doc and no-code stack got you here—but they won’t survive real concurrency, roles, or compliance conversations with your first real customer.",
  },
  {
    title: "Your team is the “integration layer”",
    body: "Tools don’t talk to each other. People copy data between tabs, chase status in Slack, and babysit spreadsheets that should have been product months ago.",
  },
  {
    title: "Investors want traction, not another deck",
    body: "You need something customers can log into: onboarding, core workflows, and basic admin—not a clickable mock that falls over under real usage.",
  },
  {
    title: "Your last build stalled halfway",
    body: "Scope crept, handoffs broke, or the agency optimized for hours billed instead of a shippable slice. You still need working software on a startup clock.",
  },
  {
    title: "Nobody can take a holiday",
    body: "Critical flows live in one person’s head—or one fragile script. Your business shouldn’t break when someone steps away for a week.",
  },
];

export default function SoundFamiliar() {
  return (
    <section className="border-b border-slate-200/80 py-16 dark:border-slate-800/80 sm:py-20 lg:py-24 2xl:py-28">
      <div className="page-container">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Sound familiar?
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Your roadmap doesn’t fit into an off-the-shelf template.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          If you’re racing to prove the business, this probably hits close to home.
        </p>
        <ul className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {pains.map((item) => (
            <li
              key={item.title}
              className="max-w-3xl border-l-2 border-accent/40 pl-4 sm:pl-6 lg:pl-8"
            >
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

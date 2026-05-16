const faqs = [
  {
    q: "How long does a typical MVP take?",
    a: "Most focused MVPs land in roughly four to ten weeks depending on surface area, integrations, and compliance needs. You are not waiting until the end to see progress—we aim for runnable slices every week once build is underway. We will give you a specific timeline before you commit.",
  },
  {
    q: "What does it cost?",
    a: "We usually start with a short discovery engagement: fixed scope, fixed price, and tangible outputs (flows, technical risks, and a phased plan). Full build is typically structured as a milestone-based engagement aligned to your runway. We will give you a clear number before you commit—no surprise invoices mid-flight.",
  },
  {
    q: "We already have a prototype / no-code tool. Can you work with that?",
    a: "Yes. We can harden what is working, replace brittle pieces, and integrate with the services you already rely on. We will not force a rip-and-replace on day one if it does not serve your timeline.",
  },
  {
    q: "What happens after launch?",
    a: "Launch includes stabilization support so your first users do not get stuck. After that, many teams continue with light retainers for iteration, performance, and new workflows—your call, documented up front.",
  },
  {
    q: "How is this different from a freelancer or a big agency?",
    a: "Freelancers can be great—but solo context switching is risky at MVP pace. Big agencies often optimize for process overhead. We sit in the middle: senior execution, a single accountable thread, and weekly working increments so nothing goes sideways for months in silence.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-b border-slate-200/80 py-16 dark:border-slate-800/80 sm:py-20 lg:py-24 2xl:py-28"
    >
      <div className="page-container max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Common questions
        </p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Before you book the call.
        </h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Straight answers—if we are not the right partner, we will say so.
        </p>
        <div className="mt-12 border-t border-slate-200 divide-y divide-slate-200 dark:border-slate-800 dark:divide-slate-800">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group py-1 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-base font-semibold text-foreground transition hover:text-accent sm:items-center sm:text-lg">
                <span className="min-w-0 pr-2">{item.q}</span>
                <span
                  className="faq-chevron mt-0.5 shrink-0 font-mono text-lg text-accent sm:mt-0"
                  aria-hidden
                >
                  ▸
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

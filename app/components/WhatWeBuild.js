import Link from "next/link";

const cards = [
  {
    eyebrow: "Need users in-product fast?",
    title: "Onboarding & core workflows",
    body: "Auth, roles, and the happy path your pitch promises—implemented so your first cohort isn’t fighting the tool.",
    cta: "See a similar build",
    href: "#work",
  },
  {
    eyebrow: "Drowning in admin before PMF?",
    title: "Internal ops dashboards",
    body: "Replace brittle sheets with a focused admin: approvals, status, exports—wired to how your team already works.",
    cta: "Read case study",
    href: "#work",
  },
  {
    eyebrow: "Data stuck in five tabs?",
    title: "Integrations & single pane",
    body: "Pull from the APIs and tools you already use into one place so decisions aren’t archaeology.",
    cta: "Explore integrations angle",
    href: "#work",
  },
  {
    eyebrow: "Need AI that does work?",
    title: "Practical automation",
    body: "Not a generic chatbot—routing, summaries, and triggers connected to your product data with guardrails.",
    cta: "Talk to us",
    href: "#contact",
  },
];

export default function WhatWeBuild() {
  return (
    <section
      id="build"
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-100/80 py-16 dark:border-slate-800/80 dark:bg-slate-950/50 sm:py-20 lg:py-24 2xl:py-28"
    >
      <div className="page-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What we build
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              MVPs that match how your startup actually runs.
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              We don’t resell a platform. We build yours—scoped for runway, ready
              for real users.
            </p>
          </div>
          <Link
            href="#work"
            className="shrink-0 font-mono text-sm font-semibold uppercase tracking-wide text-accent transition hover:text-accent-hover"
          >
            All case studies →
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="group flex flex-col rounded-xl border border-slate-200/90 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lg sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/50"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{card.body}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex font-mono text-xs font-semibold uppercase tracking-wide text-accent transition group-hover:gap-1"
              >
                {card.cta}
                <span aria-hidden className="ml-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

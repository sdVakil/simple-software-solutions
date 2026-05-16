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
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-100/80 py-20 dark:border-slate-800/80 dark:bg-slate-950/50 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What we build
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              MVPs that match how your startup actually runs.
            </h2>
            <p className="mt-4 text-lg text-muted">
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
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="group flex flex-col rounded-xl border border-slate-200/90 bg-surface p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-900/50"
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

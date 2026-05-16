import Link from "next/link";
import CalBookButton from "./CalBookButton";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24 2xl:py-28"
    >
      <div className="absolute inset-0 bg-slate-950" />
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-indigo-600/20"
        aria-hidden
      />
      <div className="page-container relative">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-center shadow-2xl shadow-black/40 backdrop-blur-md sm:p-10 lg:p-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            Get started
          </p>
          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
            Stop selling a product you cannot ship yet.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            One free call. We will look at your users, constraints, and timeline—and
            tell you straight whether we are the right team. If it makes sense, the
            next step is a short discovery sprint with tangible outputs you can keep.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalBookButton className="inline-flex w-full max-w-sm cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30 ring-1 ring-white/20 transition hover:bg-accent-hover hover:shadow-accent/50 sm:max-w-none sm:w-auto dark:text-slate-950">
              Book a free call
              <span aria-hidden>→</span>
            </CalBookButton>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate-500">
            Prefer email first?{" "}
            <Link
              href="mailto:info@simple-softwares.net"
              className="break-all font-mono text-accent-bright hover:underline sm:break-normal"
            >
              info@simple-softwares.net
            </Link>
            {" — "}we reply within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}

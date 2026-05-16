const NAMES = [
  "Manageaze",
  "Simple Trade Signals",
  "Rentflair",
  "Sortitt",
];

export default function LogoMarquee() {
  return (
    <section
      className="border-b border-slate-200/80 bg-surface py-8 dark:border-slate-800/80 dark:bg-slate-950"
      aria-label="Recently shipped products"
    >
      <p className="mx-auto max-w-6xl px-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:px-6 lg:px-8">
        Recently Shipped Products
      </p>
      <div className="mx-auto mt-5 flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 sm:gap-x-14 sm:px-6 lg:px-8">
        {NAMES.map((name) => (
          <span
            key={name}
            className="shrink-0 text-center font-mono text-sm font-medium text-slate-400 dark:text-slate-500"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

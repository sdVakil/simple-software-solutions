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
      <p className="page-container text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:tracking-[0.25em]">
        Recently Shipped Products
      </p>
      <div className="page-container mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 md:gap-x-14">
        {NAMES.map((name) => (
          <span
            key={name}
            className="shrink-0 text-center font-mono text-xs font-medium text-slate-400 sm:text-sm dark:text-slate-500"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CalBookButton from "./CalBookButton";

const nav = [
  { href: "#build", label: "What we build" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setMenuOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-surface-elevated/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/70 dark:shadow-black/20">
      <div className="page-container flex h-14 items-center justify-between gap-3 sm:h-16">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-bold tracking-tight text-foreground sm:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Simple <span className="text-accent">Softwares</span>
        </Link>

        <nav
          className="hidden items-center gap-x-5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted md:flex lg:gap-x-6 lg:text-xs"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <CalBookButton
            className="hidden cursor-pointer items-center justify-center rounded-lg bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 ring-1 ring-white/20 transition hover:bg-accent-hover hover:shadow-accent/40 sm:inline-flex dark:ring-slate-950/30 dark:text-slate-950"
            onClick={() => setMenuOpen(false)}
          >
            Book a call
          </CalBookButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/90 bg-surface text-foreground transition hover:border-accent/40 md:hidden dark:border-slate-700/80 dark:bg-slate-900/50"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-slate-200/80 bg-surface-elevated/95 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/95 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="page-container flex flex-col gap-1 py-4"
          aria-label="Mobile primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 font-mono text-sm font-medium uppercase tracking-widest text-muted transition hover:bg-slate-100/80 hover:text-accent dark:hover:bg-slate-800/80"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CalBookButton
            className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-lg bg-accent px-4 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover dark:text-slate-950"
            onClick={() => setMenuOpen(false)}
          >
            Book a call
          </CalBookButton>
        </nav>
      </div>
    </header>
  );
}

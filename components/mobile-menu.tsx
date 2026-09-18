"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type Item = { label: string; href: string };

export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex size-8 items-center justify-center rounded-full border border-border text-subtle transition-colors hover:border-border-strong hover:text-fg"
      >
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
          {open ? (
            <path
              d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-bg"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] sm:px-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-subtle transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-1 flex items-center border-t border-border py-3">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}

"use client";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    // Light is the site default; dark only when explicitly set.
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private browsing — theme still applies for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="flex size-8 items-center justify-center rounded-full border border-border text-subtle transition-colors hover:border-border-strong hover:text-fg"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
        <circle
          cx="8"
          cy="8"
          r="6.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5Z" fill="currentColor" />
      </svg>
    </button>
  );
}

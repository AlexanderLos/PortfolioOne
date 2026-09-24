export type NavItem = { label: string; href: string; accent?: boolean };

export const navLinkClass = (accent?: boolean) =>
  accent
    ? "text-accent transition-[color,text-shadow] hover:text-accent-bright hover:[text-shadow:0_0_12px_var(--accent)]"
    : "text-subtle transition-colors hover:text-fg";

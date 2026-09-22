export type NavItem = { label: string; href: string; accent?: boolean };

export const navLinkClass = (accent?: boolean) =>
  accent
    ? "text-teal transition-[color,text-shadow] hover:text-teal-bright hover:[text-shadow:0_0_12px_var(--teal)]"
    : "text-subtle transition-colors hover:text-fg";

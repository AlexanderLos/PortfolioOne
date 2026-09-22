import { MobileMenu } from "@/components/mobile-menu";
import { navLinkClass, type NavItem } from "@/components/nav-links";

export function Nav() {
  const items: NavItem[] = [
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Skills", href: "/#skills" },
    { label: "Blog", href: "/blog", accent: true },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="/"
          className="whitespace-nowrap font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-fg transition-colors hover:text-teal-bright"
        >
          A. De Los Santos
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-6 font-mono text-[0.6875rem] uppercase tracking-[0.18em] md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={navLinkClass(item.accent)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <MobileMenu items={items} />
          <a
            href="/#contact"
            className="whitespace-nowrap rounded-md bg-fg px-4 py-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-bg transition-opacity hover:opacity-75"
          >
            Open to work
          </a>
        </div>
      </nav>
    </header>
  );
}

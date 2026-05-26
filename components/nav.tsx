export function Nav() {
  const items: { label: string; href: string }[] = [
    { label: "about", href: "#about" },
    { label: "work", href: "#work" },
    { label: "contact", href: "#contact" },
    { label: "resume", href: "/resume.pdf" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-border/60">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-2xl px-6 sm:px-8 h-14 flex items-center justify-between"
      >
        <a
          href="#top"
          className="font-mono text-xs tracking-wider text-fg hover:text-accent transition-colors"
        >
          AdLS
        </a>
        <ul className="flex items-center gap-5 sm:gap-7 font-mono text-xs">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                {...(item.href.startsWith("/")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-muted hover:text-fg transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import { profile } from "@/lib/data";

export function Contact() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, emphasis: true },
    { label: "github.com/AlexanderLos", href: profile.github },
    { label: "linkedin.com/in/alexander-de-los-santos", href: profile.linkedin },
    { label: "resume.pdf", href: profile.resume },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-label"
      className="border-t border-border pt-16 pb-24 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-6 sm:gap-10"
    >
      <p
        id="contact-label"
        className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-subtle pt-1"
      >
        Contact
      </p>
      <div className="max-w-[34rem]">
        <p className="text-[1.0625rem] leading-[1.7] text-fg/90 mb-6">
          The best way to reach me is email. I&rsquo;m open to senior software
          roles, contract work, and meaningful conversations about
          infrastructure, healthcare, or anything you&rsquo;re building.
        </p>
        <ul className="space-y-2.5">
          {links.map((link) => {
            const newTab = !link.href.startsWith("mailto:");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group inline-flex items-center gap-2 font-mono text-sm transition-colors ${
                    link.emphasis ? "text-fg hover:text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  <span className="border-b border-current/30 group-hover:border-current pb-0.5">
                    {link.label}
                  </span>
                  <span aria-hidden className="text-subtle group-hover:text-current">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

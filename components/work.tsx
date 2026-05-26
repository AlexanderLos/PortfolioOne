import { work } from "@/lib/data";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-label"
      className="border-t border-border pt-16 pb-24 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-6 sm:gap-10"
    >
      <p
        id="work-label"
        className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-subtle pt-1"
      >
        Work
      </p>
      <ol className="space-y-12 max-w-[34rem]">
        {work.map((entry) => (
          <li key={entry.org} className="group">
            <div className="flex items-baseline justify-between gap-6 mb-2">
              <h3 className="text-[1.0625rem] text-fg font-medium tracking-tight">
                {entry.org}
              </h3>
              <span className="font-mono text-[0.7rem] text-subtle uppercase tracking-wider whitespace-nowrap">
                {entry.period}
              </span>
            </div>
            <p className="text-sm text-muted mb-3 italic">{entry.role}</p>
            <p className="text-[0.975rem] leading-[1.7] text-fg/85">
              {entry.description}
            </p>
            {entry.links && entry.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
                  >
                    <span className="border-b border-current/40 group-hover/link:border-current pb-0.5">
                      {link.label.toLowerCase()}
                    </span>
                    <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

import { experience } from "@/lib/data";
import { Eyebrow, Section } from "@/components/ui";

export function Experience() {
  return (
    <Section id="experience" flush>
      <div className="grid gap-10 md:grid-cols-[11rem_1fr]">
        <div>
          <div className="md:sticky md:top-24">
            <Eyebrow as="h2" index="01" label="Experience" />
          </div>
        </div>
        <ol>
          {experience.map((entry) => (
            <li
              key={entry.company}
              className="group border-t border-border first:border-t-0"
            >
              <div className="-mx-4 gap-6 rounded-lg px-4 py-8 transition-colors group-first:pt-0 md:grid md:grid-cols-[10.5rem_1fr] hover:bg-raised/60">
                <p className="pt-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] tabular-nums text-subtle">
                  {entry.period}
                </p>
                <div className="mt-3 md:mt-0">
                  <h3 className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 text-[1.0625rem] font-medium text-fg transition-transform duration-200 group-hover:translate-x-1">
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      {entry.current && (
                        <span
                          aria-hidden
                          className="size-1.5 shrink-0 rounded-full bg-teal"
                        />
                      )}
                      {entry.company}
                    </span>
                    <span className="font-normal text-muted">
                      {entry.role}
                    </span>
                  </h3>
                  <ul className="mt-3.5 space-y-2.5">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-4 text-[0.9375rem] leading-[1.65] text-muted before:absolute before:left-0 before:top-[0.62em] before:size-1 before:rounded-full before:bg-border-strong"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

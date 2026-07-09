import { certifications, education, languages } from "@/lib/data";
import { Eyebrow, Section } from "@/components/ui";

export function Education() {
  return (
    <Section id="education">
      <div className="grid gap-10 md:grid-cols-[11rem_1fr]">
        <div>
          <div className="md:sticky md:top-24">
            <Eyebrow as="h2" index="04" label="Education & Credentials" />
          </div>
        </div>
        <div>
          <div className="divide-y divide-border border-y border-border">
            {education.map((entry) => (
              <div
                key={entry.institution}
                className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="flex flex-wrap items-center gap-2.5 text-[1.0625rem] font-medium text-fg">
                    {entry.institution}
                    {entry.note && (
                      <span className="rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-teal-bright">
                        {entry.note}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted">{entry.credential}</p>
                </div>
                <p className="whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.14em] tabular-nums text-subtle">
                  {entry.period}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="rounded-md border border-border bg-panel px-3 py-1.5 font-mono text-[0.6875rem] tabular-nums text-muted"
              >
                {cert.name} · {cert.year}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-subtle">
            Languages — {languages.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}

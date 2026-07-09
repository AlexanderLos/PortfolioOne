import { skillGroups } from "@/lib/data";
import { Eyebrow, Section } from "@/components/ui";

export function Skills() {
  return (
    <Section id="skills">
      <Eyebrow as="h2" index="03" label="Capabilities" />
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const isHero = i === 0;
          const isLast = i === skillGroups.length - 1;
          return (
            <div
              key={group.label}
              className={`bg-bg p-6 ${
                isHero
                  ? "border-t-2 border-t-teal sm:col-span-2 lg:col-span-3"
                  : ""
              } ${isLast ? "sm:col-span-2" : ""}`}
            >
              <h3 className="flex items-baseline justify-between gap-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-teal">
                {group.label}
                <span className="tabular-nums text-subtle">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </h3>
              <p
                className={`mt-3.5 text-[0.9375rem] leading-[1.8] ${
                  isHero ? "text-fg" : "text-muted"
                }`}
              >
                {group.skills.join(" · ")}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import { profile } from "@/lib/data";
import { Eyebrow } from "@/components/ui";

const cells = [
  {
    label: "GitHub",
    value: "AlexanderLos",
    href: profile.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "View PDF",
    href: profile.resume,
    external: true,
  },
] as const;

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <Eyebrow label={`${profile.location} — ${profile.title}`} />
        <h1 className="mt-8 font-display text-[clamp(2.75rem,7.5vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em] text-balance text-fg">
          Alexander
          <br />
          De Los Santos
        </h1>
        <p className="mt-8 max-w-[38rem] text-lg leading-[1.7] text-muted">
          AI product engineer who ships LLM-powered SaaS end to end. Solo
          founder of{" "}
          <a
            href="#work"
            className="font-medium text-fg underline decoration-teal/50 decoration-1 underline-offset-4 transition-colors hover:decoration-teal-bright"
          >
            Oakrift
          </a>{" "}
          — a <span className="text-coral">revenue-generating</span> media
          intelligence platform, built and operated with agentic development
          workflows. Enterprise backend foundation in healthcare.
        </p>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
          <div className="bg-bg p-4">
            <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-subtle">
              Status
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-fg">
              <span aria-hidden className="pulse size-2 rounded-full bg-teal" />
              Open to work
            </p>
          </div>
          {cells.map((cell) => (
            <a
              key={cell.label}
              href={cell.href}
              {...(cell.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group bg-bg p-4 transition-colors hover:bg-raised"
            >
              <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-subtle">
                {cell.label}
              </p>
              <p className="mt-2 truncate text-sm text-fg">
                {cell.value}{" "}
                <span
                  aria-hidden
                  className="text-subtle transition-colors group-hover:text-teal-bright"
                >
                  ↗
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="relative h-px w-full bg-border" aria-hidden>
        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-linear-to-r from-transparent via-teal to-transparent sm:left-[max(2rem,calc((100vw-72rem)/2+2rem))] sm:translate-x-0" />
      </div>
    </section>
  );
}

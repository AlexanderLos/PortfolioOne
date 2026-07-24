import Image from "next/image";
import { oakrift } from "@/lib/data";
import { Eyebrow, Section } from "@/components/ui";

function Frame({
  src,
  alt,
  width,
  height,
  fig,
  desc,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  fig: string;
  desc: string;
  sizes: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-border border-t-2 border-t-teal bg-raised [box-shadow:var(--frame-shadow)] transition-transform duration-300 hover:-translate-y-[3px] ${className}`}
    >
      <figcaption className="flex items-baseline justify-between gap-4 border-b border-border bg-raised px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
        <span className="whitespace-nowrap text-muted">{fig}</span>
        <span className="hidden truncate text-subtle sm:block">{desc}</span>
      </figcaption>
      <a
        href={oakrift.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={90}
          className="block h-auto w-full"
        />
      </a>
    </figure>
  );
}

export function Oakrift() {
  const [, desk] = oakrift.screenshots;

  return (
    <Section id="work">
      <div className="reveal">
        <Eyebrow index="02" label="Featured work · 2025 — Present" />
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-fg">
          Oakrift — media intelligence, built solo.
        </h2>

        <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="space-y-5 text-[1.0625rem] leading-[1.7] text-muted lg:col-span-7">
            <p>{oakrift.description}</p>
            <p>
              Built and operated with Claude Code agents directed across the
              full codebase — multi-agent orchestration, dynamic workflows, and
              pre-tool-use governance hooks.
            </p>
          </div>
          <dl className="self-start lg:col-span-5">
            {[
              {
                k: "Status",
                v: "Revenue-generating",
                cls: "text-coral",
              },
              { k: "Team", v: "1 — design, code, ops", cls: "text-fg" },
              {
                k: "Stack",
                v: "Next.js · LLM pipelines · Postgres",
                cls: "text-fg",
              },
            ].map((row) => (
              <div
                key={row.k}
                className="flex items-baseline justify-between gap-6 border-t border-border py-3.5 last:border-b"
              >
                <dt className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-subtle">
                  {row.k}
                </dt>
                <dd
                  className={`text-right font-display text-[0.9375rem] font-semibold tabular-nums ${row.cls}`}
                >
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16">
        <Frame
          src={desk.src}
          alt={desk.alt}
          width={desk.width}
          height={desk.height}
          fig="The Briefing"
          desc="Coverage window → executive brief"
          sizes="(min-width: 1280px) 1088px, calc(100vw - 2.5rem)"
          className="reveal"
        />
      </div>

      <div className="reveal mt-16 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {oakrift.features.map((feature, i) => (
          <div key={feature.title}>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-[0.9375rem] font-medium text-fg">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-sm leading-[1.65] text-muted">
              {feature.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-4">
        <a
          href={oakrift.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-teal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-bg transition-colors hover:bg-teal-bright"
        >
          Visit oakrift.com <span aria-hidden>↗</span>
        </a>
        <a
          href="#experience"
          className="rounded-lg border border-border px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-border-strong hover:text-fg"
        >
          How it was built <span aria-hidden>↑</span>
        </a>
      </div>
    </Section>
  );
}

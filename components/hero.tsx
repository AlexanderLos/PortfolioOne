import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-32 pb-28">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle mb-8">
        Miami, FL · Available for senior software roles
      </p>
      <h1 className="font-display text-[clamp(3.25rem,9vw,6rem)] leading-[0.92] tracking-[-0.015em] text-fg">
        Alexander
        <br />
        De Los Santos.
      </h1>
      <p className="mt-10 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-fg/90">
        Software engineer working on healthcare claims infrastructure at{" "}
        <span className="text-fg">Optum</span>, and building{" "}
        <span className="text-fg">Oakrift</span> — a B2B media intelligence
        platform — on the side.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-1.5 text-fg hover:text-accent transition-colors"
        >
          <span className="border-b border-current/40 group-hover:border-current pb-0.5">
            {profile.email}
          </span>
          <span aria-hidden>↗</span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
        >
          <span className="border-b border-current/40 group-hover:border-current pb-0.5">
            github
          </span>
          <span aria-hidden>↗</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
        >
          <span className="border-b border-current/40 group-hover:border-current pb-0.5">
            linkedin
          </span>
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}

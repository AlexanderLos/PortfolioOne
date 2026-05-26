export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="border-t border-border pt-16 pb-24 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-6 sm:gap-10"
    >
      <p
        id="about-label"
        className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-subtle pt-1"
      >
        About
      </p>
      <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-fg/90 max-w-[34rem]">
        <p>
          I work on platform infrastructure at Optum — .NET services on
          Kubernetes, deployed to Azure Government Cloud — where the code I
          ship moves healthcare claims for tens of millions of people.
        </p>
        <p>
          On the side I&rsquo;m building Oakrift, a B2B media intelligence
          product. Designing the data pipeline, the schema, and the surface
          that engineers and analysts actually use.
        </p>
        <p>
          Before software I studied economics at Florida International
          University. The transition wasn&rsquo;t a pivot so much as a
          continuation: I&rsquo;m drawn to systems where decisions carry
          weight — capital flows, healthcare delivery, signal pulled out of
          noise — and to building tools that make those systems legible to
          the people acting on them.
        </p>
        <p className="text-muted">
          Originally from Ponce, Puerto Rico. Now in Miami.
        </p>
      </div>
    </section>
  );
}

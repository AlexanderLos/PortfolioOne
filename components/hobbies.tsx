import { Eyebrow, Section } from "@/components/ui";

const spots = [
  { name: "Hometown Barbecue", place: "Miami" },
  { name: "Heritage", place: "Fort Lauderdale" },
  { name: "Anthony's Runway 84", place: "Fort Lauderdale" },
];

const stamps = ["China", "Spain", "Japan", "North America"];

export function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="reveal">
        <Eyebrow as="h2" index="06" label="Off the clock" />
        <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-3">
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              01
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Traveling
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              Three years, four regions. Nothing recalibrates how you see
              problems like being somewhere you can&apos;t read the menu.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stamps.map((stamp) => (
                <li
                  key={stamp}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted"
                >
                  {stamp}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              02
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Hiking &amp; nature trails
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              The hard problems untangle a few miles from the nearest outlet.
              Exhibit A: the photo at the top of this page.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              03
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Food
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              On a long-running search for South Florida&apos;s best plates. If
              you&apos;re reading this and ever in town, start here:
            </p>
            <ul className="mt-4 border-b border-border">
              {spots.map((spot) => (
                <li
                  key={spot.name}
                  className="flex items-baseline justify-between gap-4 border-t border-border py-2.5"
                >
                  <span className="text-sm font-medium text-fg">
                    {spot.name}
                  </span>
                  <span className="whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
                    {spot.place}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

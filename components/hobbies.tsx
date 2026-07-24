import { Eyebrow, Section } from "@/components/ui";

const spots = [
  { name: "Hometown Barbecue", place: "Miami" },
  { name: "Heritage", place: "Fort Lauderdale" },
  { name: "Anthony's Runway 84", place: "Fort Lauderdale" },
];

export function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="reveal">
        <Eyebrow as="h2" index="06" label="Off the clock" />
        <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              01
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Traveling
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              Been to China, Spain, and Japan recently, and traveled all over
              North America — mainly looking for pizza (Chicago, New York,
              Philadelphia, California, Massachusetts).
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              02
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Hiking &amp; nature trails
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              I love long walks on the beach as much as I love rainforests and
              parks.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              03
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Golf
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              It&apos;d be a crime to live in Florida and not play golf.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] font-medium tabular-nums tracking-[0.18em] text-subtle">
              04
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">
              Food
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted">
              On a long-running search for South Florida&apos;s best plates. If
              you&apos;re reading this and ever in the area, start here:
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

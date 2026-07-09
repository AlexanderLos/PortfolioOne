export function Eyebrow({
  index,
  label,
  centered = false,
  as: Tag = "p",
}: {
  index?: string;
  label: string;
  centered?: boolean;
  as?: "p" | "h2";
}) {
  return (
    <Tag
      className={`flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-subtle ${
        centered ? "justify-center" : ""
      }`}
    >
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-teal" />
      {index && (
        <span className="tabular-nums">
          {index}
          <span aria-hidden> —</span>
        </span>
      )}
      <span>{label}</span>
    </Tag>
  );
}

export function Section({
  id,
  flush = false,
  children,
}: {
  id?: string;
  flush?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={flush ? "" : "border-t border-border"}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        {children}
      </div>
    </section>
  );
}

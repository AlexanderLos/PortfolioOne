import type { PostBlock } from "@/lib/posts";

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-muted">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-4 font-display text-[1.375rem] font-semibold leading-[1.25] tracking-[-0.02em] text-fg"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-5 font-display text-[1.375rem] font-medium leading-[1.35] tracking-[-0.015em] text-fg"
              >
                {block.text}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-lg border border-border bg-raised px-4 py-3.5 font-mono text-[0.8125rem] leading-[1.6] text-fg"
              >
                <code>{block.code}</code>
              </pre>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}

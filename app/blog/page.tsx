import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow, Section } from "@/components/ui";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Alexander De Los Santos on career status, tools and workflows for directing coding agents, resources, and ideas.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-border focus:bg-bg focus:px-3 focus:py-2 focus:text-fg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Section flush>
          <Eyebrow label="Blog" />
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">
            Notes.
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-muted">
            Where I&apos;m at in my career, tools and workflows for directing
            coding agents, resources worth sharing, and whatever else is on my
            mind.
          </p>

          <ol className="mt-16 border-t border-border">
            {posts.map((post) => (
              <li key={post.slug} className="group border-b border-border">
                <Link
                  href={`/blog/${post.slug}`}
                  className="-mx-4 block rounded-lg px-4 py-8 transition-colors hover:bg-raised/60 md:grid md:grid-cols-[10.5rem_1fr] md:gap-6"
                >
                  <p className="pt-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] tabular-nums text-subtle">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <div className="mt-3 md:mt-0">
                    <h2 className="text-[1.125rem] font-medium text-fg transition-transform duration-200 group-hover:translate-x-1">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-[0.9375rem] leading-[1.65] text-muted">
                      {post.summary}
                    </p>
                    <p className="mt-3.5 flex flex-wrap gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-subtle">
                      {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          {posts.length === 0 && (
            <p className="mt-16 border-t border-border pt-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle">
              Nothing published yet.
            </p>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}

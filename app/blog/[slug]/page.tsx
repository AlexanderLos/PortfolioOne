import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PostBody } from "@/components/post-body";
import { Eyebrow, Section } from "@/components/ui";
import { formatDate, getPost, getPosts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

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
          <article className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-fg"
            >
              <span aria-hidden>← </span>Blog
            </Link>

            <div className="mt-10">
              <Eyebrow label={formatDate(post.date)} />
            </div>
            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-fg">
              {post.title}
            </h1>
            <p className="mt-5 text-[1.125rem] leading-[1.7] text-muted">
              {post.summary}
            </p>
            <p className="mt-6 flex flex-wrap gap-2 border-b border-border pb-8 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-subtle">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>

            <div className="mt-10">
              <PostBody blocks={post.body} />
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/blog"
                className="rounded-lg border border-border px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-border-strong hover:text-fg"
              >
                <span aria-hidden>← </span>All posts
              </Link>
            </div>
          </article>
        </Section>
      </main>
      <Footer />
    </>
  );
}

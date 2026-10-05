import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow, Section } from "@/components/ui";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Alexander De Los Santos, full stack software engineer working in .NET, Azure, TypeScript, and React.",
  alternates: { canonical: "/resume" },
};

// public/resume-preview.png is rendered from the PDF. Regenerate it with
// `npm run resume:preview` whenever the PDF changes.
export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Section flush>
          <div className="mx-auto max-w-[52rem]">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow label="Resume" />
                <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-fg">
                  Resume.
                </h1>
              </div>
              <a
                href={profile.resume}
                download="Alexander_De_Los_Santos_Resume.pdf"
                className="self-start whitespace-nowrap rounded-lg bg-accent px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.14em] text-bg transition-colors hover:bg-accent-bright sm:self-auto"
              >
                Download PDF <span aria-hidden>↓</span>
              </a>
            </div>

            <div className="mt-12 overflow-hidden rounded-xl border border-border bg-white [box-shadow:var(--frame-shadow)]">
              <Image
                src="/resume-preview.png"
                alt="One page resume of Alexander De Los Santos"
                width={1700}
                height={2200}
                priority
                quality={90}
                sizes="(min-width: 896px) 832px, calc(100vw - 2.5rem)"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

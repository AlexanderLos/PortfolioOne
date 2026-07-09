import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Oakrift } from "@/components/oakrift";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
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
        <Hero />
        <Experience />
        <Oakrift />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

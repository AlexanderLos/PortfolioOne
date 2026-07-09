import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {year} Alexander De Los Santos</span>
        <span>{profile.location}</span>
        <span className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-subtle transition-colors hover:text-teal-bright"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-subtle transition-colors hover:text-teal-bright"
          >
            <LinkedInIcon />
          </a>
        </span>
      </div>
    </footer>
  );
}

import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexanderdelossantos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alexander De Los Santos — Full Stack Software Engineer",
    template: "%s — Alexander De Los Santos",
  },
  description:
    "Full stack software engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a media intelligence platform. Enterprise backend foundation in healthcare (.NET, Azure, Kubernetes).",
  keywords: [
    "Alexander De Los Santos",
    "Full Stack Software Engineer",
    "Full-Stack SaaS",
    "LLM",
    "Oakrift",
    "Claude Code",
    "Next.js",
    "TypeScript",
    "Miramar",
  ],
  authors: [{ name: "Alexander De Los Santos" }],
  creator: "Alexander De Los Santos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Alexander De Los Santos",
    title: "Alexander De Los Santos — Full Stack Software Engineer",
    description:
      "Full stack software engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a media intelligence platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander De Los Santos — Full Stack Software Engineer",
    description:
      "Full stack software engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a media intelligence platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

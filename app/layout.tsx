import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
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
      className={`${figtree.variable} ${fraunces.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

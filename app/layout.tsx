import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexanderdelossantos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alexander De Los Santos — AI Product Engineer",
    template: "%s — Alexander De Los Santos",
  },
  description:
    "AI product engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a revenue-generating media intelligence platform. Enterprise backend foundation in healthcare (.NET, Azure, Kubernetes).",
  keywords: [
    "Alexander De Los Santos",
    "AI Product Engineer",
    "Full-Stack SaaS",
    "LLM",
    "Oakrift",
    "Claude Code",
    "Next.js",
    "TypeScript",
    "Miami",
  ],
  authors: [{ name: "Alexander De Los Santos" }],
  creator: "Alexander De Los Santos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Alexander De Los Santos",
    title: "Alexander De Los Santos — AI Product Engineer",
    description:
      "AI product engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a revenue-generating media intelligence platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander De Los Santos — AI Product Engineer",
    description:
      "AI product engineer shipping LLM-powered SaaS end to end. Founder of Oakrift — a revenue-generating media intelligence platform.",
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
  themeColor: "#f7f8f9",
  width: "device-width",
  initialScale: 1,
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexanderdelossantos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alexander De Los Santos — Software Engineer",
    template: "%s — Alexander De Los Santos",
  },
  description:
    "Software engineer in Miami. Healthcare infrastructure at Optum, and building Oakrift — a B2B media intelligence platform.",
  keywords: ["Alexander De Los Santos", "Software Engineer", "Miami", "Optum", "Oakrift", "Next.js", "TypeScript"],
  authors: [{ name: "Alexander De Los Santos" }],
  creator: "Alexander De Los Santos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Alexander De Los Santos",
    title: "Alexander De Los Santos — Software Engineer",
    description:
      "Software engineer in Miami. Healthcare infrastructure at Optum, and building Oakrift.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander De Los Santos — Software Engineer",
    description:
      "Software engineer in Miami. Healthcare infrastructure at Optum, and building Oakrift.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

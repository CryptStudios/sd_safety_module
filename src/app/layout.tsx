import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Roboto_Slab } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-roboto-slab",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Submit Daily Safety Module",
  description:
    "Access required safety topics, review important information, and complete acknowledgments through company-approved forms.",
  applicationName: "Submit Daily Safety Module",
  authors: [{ name: "Maxwell Jung" }],
  creator: "Maxwell Jung",
  publisher: "Maxwell Jung",
  keywords: [
    "Submit Daily Safety Module",
    "construction safety",
    "toolbox talks",
    "safety training",
    "workplace safety",
    "Maxwell Jung"
  ],
  openGraph: {
    title: "Submit Daily Safety Module",
    description:
      "Internal safety training articles, topic browsing, and external acknowledgment forms for workers and supervisors.",
    siteName: "Submit Daily Safety Module",
    type: "website"
  },
  icons: {
    icon: "/submit-daily-safety-logo.png",
    apple: "/submit-daily-safety-logo.png"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${robotoSlab.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

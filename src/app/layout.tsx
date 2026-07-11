import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "SD Safety Module",
  description:
    "Access required safety topics, review important information, and complete acknowledgments through company-approved forms.",
  applicationName: "SD Safety Module",
  authors: [{ name: "Maxwell Jung" }],
  creator: "Maxwell Jung",
  publisher: "Maxwell Jung",
  keywords: [
    "SD Safety Module",
    "construction safety",
    "toolbox talks",
    "safety training",
    "workplace safety",
    "Maxwell Jung"
  ],
  openGraph: {
    title: "SD Safety Module",
    description:
      "Internal safety training articles, topic browsing, and external acknowledgment forms for workers and supervisors.",
    siteName: "SD Safety Module",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

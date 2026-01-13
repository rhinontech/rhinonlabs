import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/Common/Header/Header";
import Footer from "@/components/Pages/Home/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhinonweb.com"),
  title: {
    default: "Rhinon Web | Internal Systems & Dashboards for Enterprises",
    template: "%s | Rhinon Web",
  },
  description:
    "Fix broken internal tools and dashboards. We build custom admin panels, internal systems, and operational tools for scaling enterprises — without bloated agencies or generic software.",
  keywords: [
    "Internal Tools Development",
    "Enterprise Dashboards",
    "Admin Panel Design",
    "Internal Systems",
    "Custom Dashboard Development",
    "Operations Tools",
    "Enterprise Web Applications",
    "Workflow Automation",
  ],
  authors: [{ name: "Rhinon Tech" }],
  creator: "Rhinon Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhinonweb.com",
    title: "Rhinon Web | Internal Systems & Dashboards for Enterprises",
    description:
      "Fix broken internal tools and dashboards. We build custom admin panels, internal systems, and operational tools for scaling enterprises.",
    siteName: "Rhinon Web",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add an og-image.jpg to public folder later if needed, or use a remote URL
        width: 1200,
        height: 630,
        alt: "Rhinon Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhinon Web | Internal Systems & Dashboards for Enterprises",
    description:
      "Fix broken internal tools and dashboards. We build custom admin panels, internal systems, and operational tools for scaling enterprises.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

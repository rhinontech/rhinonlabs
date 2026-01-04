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
    default: "Rhinon Web | Premium Design & Development Agency",
    template: "%s | Rhinon Web",
  },
  description:
    "Rhinon Web builds powerful, enterprise-grade dashboards, web apps, and digital platforms. Tailored solutions, no templates.",
  keywords: [
    "Web Design Agency",
    "Web Development",
    "Next.js Development",
    "UI/UX Design",
    "Enterprise Web Apps",
    "Digital Product Design",
    "Dashboard Design",
  ],
  authors: [{ name: "Rhinon Tech" }],
  creator: "Rhinon Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhinonweb.com",
    title: "Rhinon Web | Premium Design & Development Agency",
    description:
      "Rhinon Web builds powerful, enterprise-grade dashboards, web apps, and digital platforms. Tailored solutions, no templates.",
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
    title: "Rhinon Web | Premium Design & Development Agency",
    description:
      "Rhinon Web builds powerful, enterprise-grade dashboards, web apps, and digital platforms. Tailored solutions, no templates.",
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

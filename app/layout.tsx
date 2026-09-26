import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RJ BUSINESS | B2B Global Trade & Export Support",
  description:
    "RJ BUSINESS connects Indian exporters, manufacturers and suppliers with international buyers and provides sourcing, verification, export and EXIM business support.",
  keywords: [
    "RJ Business",
    "B2B Global Trade",
    "Indian Exporters",
    "Indian Suppliers",
    "Buyer Sourcing India",
    "Export Support India",
    "Supplier Verification India",
    "International Buyer Research",
    "Export Consultancy",
    "EXIM Consultancy",
    "India UAE Trade",
    "Fresh Ginger Export",
    "Turmeric Export",
    "Green Chilli Export",
    "Coriander Seeds Export",
  ],
  openGraph: {
    title: "RJ BUSINESS | B2B Global Trade & Export Support",
    description:
      "Connecting Indian Businesses with Global Opportunities — sourcing, verification, export and EXIM support.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "RJ BUSINESS — B2B Global Trade & Sourcing Partner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ BUSINESS | B2B Global Trade & Export Support",
    description:
      "RJ BUSINESS connects Indian exporters, manufacturers and suppliers with international buyers.",
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1f44",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important}"}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

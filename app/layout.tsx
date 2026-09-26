import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Maya Rao — Developer & Creative Technologist",
  description: "Portfolio of Maya Rao — developer, designer and creative technologist.",
  openGraph: {
    title: "Maya Rao — Developer & Creative Technologist",
    description: "Selected work, skills and experience.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Maya Rao portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maya Rao Portfolio",
    description: "Selected work, skills and experience.",
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17241f",
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

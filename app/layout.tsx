import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Maya Rao — Developer & Creative Technologist",
  description: "Portfolio of Maya Rao — developer, designer and creative technologist.",
  openGraph: { title: "Maya Rao — Developer & Creative Technologist", description: "Selected work, skills and experience.", type: "website", images: ["/og.svg"] },
  twitter: { card: "summary_large_image", title: "Maya Rao Portfolio" }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
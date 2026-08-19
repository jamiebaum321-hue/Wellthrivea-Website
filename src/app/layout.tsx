import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { EmergencyRibbon } from "@/components/site/emergency-ribbon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wellthrivea.com"),
  title: {
    default: "Wellthrivea Urgent Care — Coming Soon to Canarsie, Brooklyn",
    template: "%s | Wellthrivea Urgent Care",
  },
  description:
    "A new, modern walk-in urgent care for non-life-threatening illnesses and injuries is coming soon to Canarsie, Brooklyn — serving the greater five boroughs through community outreach.",
  openGraph: {
    siteName: "Wellthrivea Urgent Care",
    type: "website",
    images: ["/img/hero-building.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      {/* Privacy note: this site intentionally ships with NO analytics, NO ad
          pixels, NO session replay, and NO third-party trackers. Any vendor
          added that collects visitor data must first pass a HIPAA review. */}
      <body className="antialiased">
        <EmergencyRibbon />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

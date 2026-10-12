import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Tiro_Devanagari_Hindi } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const tiroHindi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  display: "swap",
  variable: "--font-tiro-hindi",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "loans",
    "investments",
    "tax planning",
    "insurance",
    "GST filing",
    "IT returns",
    "financial services",
    "Mumbai",
    "India",
    "ग्रोइंग फाइनेंस",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${playfair.variable} ${tiroHindi.variable} antialiased bg-cream-50 text-navy-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

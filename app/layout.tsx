import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fiona Mei | Kluang Property Specialist",
    template: "%s | Fiona Mei",
  },
  description:
    "Certified Real Estate Negotiator (REN 59021) specializing in residential properties in Kluang, Johor.",
  keywords: [
    "Kluang property",
    "Kluang real estate agent",
    "Johor property",
    "Fiona Mei",
    "REN 59021",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Fiona Mei",
        jobTitle: "Certified Real Estate Negotiator",
        identifier: "REN 59021",
        areaServed: "Kluang, Johor, Malaysia",
      },
      {
        "@type": "RealEstateAgent",
        name: "Fiona Mei",
        areaServed: "Kluang, Johor, Malaysia",
        telephone: "+60 16-710 0902",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kluang",
          addressRegion: "Johor",
          addressCountry: "MY",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Fiona Mei Property Specialist",
        areaServed: "Kluang, Johor, Malaysia",
        telephone: "+60 16-710 0902",
      },
    ],
  };

  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

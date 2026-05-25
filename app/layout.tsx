import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://excellentpcbuilding.com"),
  title: {
    default: "Excellent PC Building | Custom PC Builder in Springfield, MO",
    template: "%s | Excellent PC Building",
  },
  description:
    "Springfield, Missouri's trusted custom PC building service. We build high-performance gaming PCs, workstations, and more. Parts sourcing available. Serving Springfield, Nixa, Ozark, Branson, and all of Southwest Missouri.",
  keywords: [
    "PC builder Springfield MO",
    "custom PC building Springfield Missouri",
    "gaming PC build Springfield",
    "computer builder Springfield MO",
    "PC assembly service Missouri",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Excellent PC Building",
    title: "Excellent PC Building | Custom PC Builder in Springfield, MO",
    description:
      "Springfield's trusted custom PC building service. Professional assembly, parts sourcing, and expert consultation.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Excellent PC Building" }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Excellent PC Building",
  description:
    "Custom PC building and parts sourcing service in Springfield, Missouri. Serving Southwest Missouri communities.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Springfield",
    addressRegion: "MO",
    addressCountry: "US",
  },
  areaServed: [
    "Springfield, MO",
    "Battlefield, MO",
    "Republic, MO",
    "Nixa, MO",
    "Ozark, MO",
    "Willard, MO",
    "Branson, MO",
    "Bolivar, MO",
    "Ava, MO",
    "Forsyth, MO",
    "Monett, MO",
    "Sparta, MO",
    "Clever, MO",
    "Billings, MO",
  ],
  priceRange: "$$",
  serviceType: ["PC Building", "Custom Computer Assembly", "Parts Sourcing"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

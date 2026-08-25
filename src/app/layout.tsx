import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { faqItems, services, site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ola — korepetycje online",
    template: "%s · Ola",
  },
  description: site.description,
  keywords: [
    "korepetycje online",
    "angielski online",
    "matematyka online",
    "korepetycje angielski",
    "korepetycje matematyka",
    "matura angielski",
    "egzamin ósmoklasisty",
    "korepetycje dla dzieci",
    "nauczanie online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: site.name,
    title: `${site.tutorName} · ${site.headline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.tutorName} · ${site.headline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f52ea",
};

const educationalJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.tutorName,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "PL",
  knowsLanguage: ["pl", "en"],
  sameAs: [site.facebook, site.instagram],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    name: s.title,
    description: s.description,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-5 focus:py-3 focus:text-ink focus:shadow-soft"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  );
}

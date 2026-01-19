import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/Whatsapp";
import Script from "next/script";

export const metadata: Metadata = {
  
  title: "Muhammad Islamic School | Online Quran Academy & Islamic Education",
  description:
    "Muhammad Islamic School offers online Quran classes, Islamic education, Tajweed, Hifz, and Islamic studies for kids and adults worldwide.",
  
  keywords: [
    "Muhammad Islamic School", 
    "Online Quran Classes", 
    "Islamic Education Online", 
    "Learn Quran Online", 
    "Tajweed Classes for kids"
  ],

  metadataBase: new URL("https://muhammadislamicschool.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Muhammad Islamic School | Online Quran Academy",
    description: "Expert Quran & Islamic tutors for kids and adults globally.",
    url: "https://muhammadislamicschool.com",
    siteName: "Muhammad Islamic School",
    images: [
      {
        url: "/noman-logo.jpeg", // Apni website ka ek image path yahan lazmi den
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Islamic School",
    description: "Online Quran & Islamic Education",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- Schema Markup (JSON-LD) ---
  // Ye Google ko aapka data samajhne mein madad karega
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Muhammad Islamic School",
    "url": "https://muhammadislamicschool.com",
    "logo": "https://muhammadislamicschool.com/logo.png", // Apna logo URL check kar len
    "description": "Online Quran and Islamic Education for kids and adults worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK" 
    },
    "sameAs": [
      "https://facebook.com/yourpage", // Apne social links yahan dalen
      "https://instagram.com/yourpage"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8LVE77G6N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8LVE77G6N');
          `}
        </Script>

        {/* Structured Data (Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <header className="sticky -top-12 z-10">
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
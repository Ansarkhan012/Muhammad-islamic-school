import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/Whatsapp";
import Script from "next/script";
// 1. Ye import line add karen


export const metadata: Metadata = {
  title: "Muhammad Islamic School | Online Quran & Islamic Education",
  description:
    "Muhammad Islamic School offers online Quran classes, Islamic education, Tajweed, Hifz, and Islamic studies for kids and adults worldwide.",
  
  keywords: ["Online Quran Classes", "Islamic Education", "Learn Quran Online", "Tajweed Classes"],

  metadataBase: new URL("https://muhammadislamicschool.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Muhammad Islamic School | Online Quran & Islamic Education",
    description: "Expert Quran & Islamic tutors for kids and adults.",
    url: "https://muhammadislamicschool.com",
    siteName: "Muhammad Islamic School",
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
  return (
    <html lang="en">
      <head>
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

        {/* 2. Ye line body ke bilkul end mein add karen */}
        {/* "G-XXXXXXXXXX" ki jagah apni asal Measurement ID likhen */}
        
      </body>
    </html>
  );
}
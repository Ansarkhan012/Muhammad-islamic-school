import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Muhammad Islamic School | Online Quran & Islamic Education",
  description:
    "Muhammad Islamic School offers online Quran classes, Islamic education, Tajweed, Hifz, and Islamic studies for kids and adults worldwide.",

  keywords: [
    "Muhammad Islamic School",
    "online Quran classes",
    "Islamic school online",
    "Quran learning online",
    "Quran classes for kids",
    "Quran classes for adults",
    "Islamic education online",
    "Tajweed classes",
    "Hifz Quran",
    "Islamic studies",
    "learn Quran online",
    "online madrasa",
    "Islamic learning platform",
    "Quran teacher online",
  ],

  metadataBase: new URL("https://muhammadislamicschool.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

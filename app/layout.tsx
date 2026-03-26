import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Royale Nigelle | Nutri-Thérapie par Toufik",
  description:
    "Découvrez les bienfaits de la Nigella Sativa avec Royale Nigelle. Accompagnement nutritionnel personnalisé, programmes sur-mesure et nutri-thérapie spécialisée.",
  keywords: [
    "nutri-thérapie",
    "nigelle",
    "nigella sativa",
    "nutrition",
    "santé",
    "bien-être",
    "Royale Nigelle",
    "Toufik",
  ],
  openGraph: {
    title: "Royale Nigelle | Nutri-Thérapie par Toufik",
    description:
      "Accompagnement nutritionnel personnalisé à base de Nigella Sativa.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

// src/app/layout.tsx

import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { AntiCopyHandler } from "@/components/layout/AntiCopyHandler";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollingBanner } from "@/components/layout/ScrollingBanner";
import { siteMetadata } from "@/config/site"; // Importamos la metadata centralizada
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
});

// Usamos directamente la metadata exportada desde nuestro archivo de configuración
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${robotoCondensed.variable} antialiased`}>
      {/* La clase 'no-copy' para deshabilitar selección se aplica directamente aquí */}
      <body className="font-sans no-copy bg-white text-gray-900">
        <AntiCopyHandler>
          <div className="flex flex-col min-h-screen">
            <ScrollingBanner />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AntiCopyHandler>
      </body>
    </html>
  );
}

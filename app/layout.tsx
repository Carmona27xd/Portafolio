import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos la fuente original
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import "./globals.css";
import Navbar from "@/components/navbar"; 

// Configuramos la fuente
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Carmona | Portfolio",
  description: "Portafolio de Ingeniero de Software",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Le pedimos a next-intl que nos dé el idioma y los textos basados en la cookie
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <div className="pt-16"> 
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

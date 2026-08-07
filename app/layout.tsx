import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Mi portafolio | Software Engineer",
  description: "Portafolio profesional de desarrollo de software",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es" className="scroll-smooth">
        <body className={inter.className}>
          <Navbar></Navbar>
          <main className="pt-16">
            {children}
          </main>
        </body>
      </html>
    );
  }


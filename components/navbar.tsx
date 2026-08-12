"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";

// Componente para cambiar el idioma
function LanguageSwitch() {
  const currentLocale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLang = currentLocale === "es" ? "en" : "es";
    document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <button onClick={toggleLanguage}
    className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
    >
      {currentLocale === "es" ? "EN 🇺🇸" : "ES 🇲🇽"}
    </button>
  );
}

export default function Navbar() {

  const t = useTranslations('Navbar');
  
  const navLinks = [
    { name: t('start') , path: "#" },
    { name: t('experience'), path: "#experiencia" },
    { name: t('proyects'), path: "#habilidades" },
    { name: t('contact'), path: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Usamos grid de 3 columnas para un centrado absoluto */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
          
          {/* 1. Logo (Izquierda) */}
          <div className="flex justify-start">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="text-blue-600 font-mono font-bold">{"<"}</span>
              Emmanuel Carmona
              <span className="text-blue-600 font-mono font-bold">{"/>"}</span>
            </Link>
          </div>

          {/* 2. Enlaces de navegación (Centro) */}
          <nav className="hidden md:flex justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Botón de contacto (Derecha) */}
          <div className="hidden md:flex justify-end gap-4">
            <LanguageSwitch/>
            <a
              href="https://www.linkedin.com/in/martin-emmanuel-cruz-carmona-381ab7348/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
            >
              LinkedIn
            </a>
          </div>

          {/* Menú móvil (Se muestra en pantallas pequeñas, a la derecha) */}
          <div className="flex justify-end md:hidden">
            <button className="text-slate-600 dark:text-slate-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </motion.header>
  );
}
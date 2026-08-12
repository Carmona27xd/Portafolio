"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Background3D from "@/components/background3d";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations('Hero');
  const t2 = useTranslations('Experience');
  const tkuantik = useTranslations('Kuantik');
  const tweb = useTranslations('Webcreeck');
  const theb = useTranslations('Herbarium');
  const tpharma = useTranslations('Pharmacy');
  const tvideo = useTranslations('Videogames');

  // Definicion de proyectos 
  const experiencia_laboral = [
    {
      tittle: tkuantik('title'),
      description: tkuantik('description'),
      tecnologies: ["Python", "Celery", "Redis", "MongoDB", "Selenium"],
      dates: tkuantik('dates'),
      slug: "sistema-web-scrapping",
      company: tkuantik('company')
    },
    {
      tittle: tweb('title'),
      description: tweb('description'),
      tecnologies: ["C#", ".NET", "T-SQL", "SQL Server"],
      dates: tweb('dates'),
      slug: "sistema-ordenes-compra",
      company: tweb('company')
    },
    {
      tittle: theb('title'),
      description: theb('description'),
      tecnologies: ["PHP", "JavaScript", "CSS", "HTML", "Bootstrap", "MySQL", "Apache"],
      dates: theb('dates'),
      slug: "herbario-virtual",
      company: theb('company')
    },
    {
      tittle: tpharma('title'),
      description: tpharma('description'),
      tecnologies: ["Python", "JavaScript", "CSS", "HTML", "Angular", "MongoDB"],
      dates: tpharma('dates'),
      slug: "sistema-gestion-farmacia",
      company: tpharma('company')
    },
    {
      tittle: tvideo('title'),
      description: tvideo('description'),
      tecnologies: [".NET", "C#", "GRPC", "API REST", "MySQL"],
      dates: tvideo('dates'),
      slug: "sistema-IMDb",
      company: tvideo('company')
    }
  ]
  return (
    <main>
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-8 border border-emerald-200 dark:border-emerald-800/50"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              {t('badge')}
            </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
            >
              {t('greeting')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Emmanuel</span>
              <br/>
              {t('role')}
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t('description')}
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
              href="#experiencia"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                {t2('title')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- SECCIÓN DE EXPERIENCIA PROFESIONAL (TIMELINE) --- */}
      {/* 1. Corrección: Agregamos "relative overflow-hidden" para que el 3D no se rompa ni desaparezca */}
      <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden">
        
        {/* Tu fondo 3D */}
        <Background3D />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="mb-20 text-center p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-2 border-slate-300 dark:border-slate-600 max-w-3xl mx-auto relative z-10 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 relative z-10">
              {t2('title')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto relative z-10">
              {t2('subtitle')}
            </p>
          </div>

          {/* CONTENEDOR DE LA LÍNEA DEL TIEMPO */}
          <div className="relative">
            {/* Línea azul central */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/10 via-blue-500/40 to-blue-500/10"></div>

            {experiencia_laboral.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Espaciador vacío para empujar la tarjeta a un lado en desktop */}
                <div className="hidden md:block w-5/12"></div>

                {/* Nodo de la línea de tiempo (El punto brillante) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] border-2 border-white dark:border-slate-900 z-10"></div>
                </div>

                {/* 2. Corrección: Contenedor con límite de ancho para las tarjetas */}
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Aquí está el truco: max-w-lg (ancho máximo grande) evita que la tarjeta se estire */}
                  <div className="w-full max-w-lg">
                    <Link href={`/experiencia/${exp.slug}`} className="block group">
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                        className="p-5 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:bg-white/80 dark:hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:to-blue-500/5 transition-all duration-500"></div>

                        <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2 block">
                          {exp.dates}
                        </span>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors relative z-10">
                          {exp.tittle}
                        </h3>
                        
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 relative z-10">
                          {exp.company}
                        </p>
                        
                        <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6 relative z-10">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                          {exp.tecnologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 text-xs font-medium rounded-md bg-white/50 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
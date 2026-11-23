"use client";

import React, { createContext, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { resumeDataEs, resumeDataEn, uiLabels, ResumeData } from '@/data/resume';
import { projectsEs, projectsEn, projectLabels, Project } from '@/data/projects';

export type Language = 'es' | 'en';

const PATHS: Record<Language, string> = { en: '/', es: '/es' };
const STORAGE_KEY = 'preferred-language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resumeData: ResumeData;
  labels: typeof uiLabels.es;
  projects: Project[];
  projectLabels: typeof projectLabels.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * El idioma lo define la ruta (/ = inglés, /es = español), así cada versión se
 * exporta como HTML estático propio e indexable. Cambiar de idioma navega a la otra ruta.
 */
export const LanguageProvider = ({ language, children }: { language: Language; children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Almacenamiento no disponible: solo se omite recordar la preferencia.
    }
    if (lang !== language) router.push(PATHS[lang]);
  };

  // Primera visita a la versión en inglés con navegador en español: redirigir a /es.
  useEffect(() => {
    if (language !== 'en' || pathname !== '/') return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (!stored && navigator.language.split('-')[0] === 'es') {
      router.replace(PATHS.es);
    }
  }, [language, pathname, router]);

  const value = {
    language,
    setLanguage,
    resumeData: language === 'es' ? resumeDataEs : resumeDataEn,
    labels: language === 'es' ? uiLabels.es : uiLabels.en,
    projects: language === 'es' ? projectsEs : projectsEn,
    projectLabels: language === 'es' ? projectLabels.es : projectLabels.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

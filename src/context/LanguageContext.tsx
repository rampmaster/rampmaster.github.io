"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { resumeDataEs, resumeDataEn, uiLabels, ResumeData } from '@/data/resume';
import { projectsEs, projectsEn, projectLabels, Project } from '@/data/projects';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resumeData: ResumeData;
  labels: typeof uiLabels.es;
  projects: Project[];
  projectLabels: typeof projectLabels.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Default language set to English for SEO priority
  const [language, setLanguage] = useState<Language>('en');

  // Opcional: Detectar idioma del navegador al cargar (pero priorizando EN si no es ES explícito)
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      setLanguage('es');
    }
  }, []);

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

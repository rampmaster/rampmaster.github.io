"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { resumeDataEs, resumeDataEn, uiLabels, ResumeData } from '@/data/resume';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resumeData: ResumeData;
  labels: typeof uiLabels.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Opcional: Detectar idioma del navegador al cargar
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
    }
  }, []);

  const value = {
    language,
    setLanguage,
    resumeData: language === 'es' ? resumeDataEs : resumeDataEn,
    labels: language === 'es' ? uiLabels.es : uiLabels.en,
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

"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
          language === 'es'
            ? 'bg-white dark:bg-gray-600 shadow-sm text-black dark:text-white'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
          language === 'en'
            ? 'bg-white dark:bg-gray-600 shadow-sm text-black dark:text-white'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};

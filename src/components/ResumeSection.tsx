"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PrinterIcon } from '@heroicons/react/24/outline';

export const ResumeSection = () => {
  const { resumeData, labels } = useLanguage();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 print:py-0 print:px-0 print:max-w-none">
      {/* Header del CV */}
      <div className="mb-12 text-center sm:text-left print:mb-8 print:text-left relative break-inside-avoid">
        
        {/* Botón de Imprimir / Descargar PDF */}
        <button
          onClick={() => window.print()}
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors print:hidden"
          title="Download PDF / Print"
          aria-label="Print Resume"
        >
          <PrinterIcon className="w-6 h-6" />
        </button>

        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white print:text-black print:text-3xl pr-10">
          {resumeData.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 print:text-gray-800 print:text-lg print:mb-2">
          {resumeData.location}
        </p>
        <p className="text-lg leading-relaxed max-w-2xl mb-6 text-gray-700 dark:text-gray-300 print:text-black print:text-base print:max-w-none print:mb-4">
          {resumeData.summary}
        </p>
        
        {/* Enlaces Sociales - Optimizados para impresión */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start print:justify-start print:gap-4 print:text-sm">
          {resumeData.social.linkedin && (
            <a 
              href={resumeData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium print:bg-transparent print:text-black print:p-0 print:underline"
            >
              LinkedIn
            </a>
          )}
          {resumeData.social.medium && (
            <a 
              href={resumeData.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-sm font-medium print:hidden"
            >
              Medium
            </a>
          )}
          {resumeData.social.github && (
            <a 
              href={resumeData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium print:bg-transparent print:text-black print:border-0 print:p-0 print:underline"
            >
              GitHub
            </a>
          )}
          {resumeData.social.email && (
            <a 
              href={`mailto:${resumeData.social.email}`}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium print:bg-transparent print:text-black print:border-0 print:p-0 print:underline"
            >
              {resumeData.social.email}
            </a>
          )}
        </div>
      </div>

      {/* Layout Principal: Grid en pantalla, Una columna en impresión */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:block print:space-y-8">
        
        {/* Columna Izquierda (Skills, Educación) -> Ahora arriba en impresión */}
        <div className="space-y-12 print:space-y-6 print:mb-8">
          
          {/* Skills */}
          <div className="break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white print:text-black print:text-xl print:mb-2 print:border-gray-400 print:uppercase print:tracking-wide">
              {labels.resume.skills}
            </h2>
            <div className="flex flex-wrap gap-2 print:block">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium print:bg-transparent print:text-black print:p-0 print:inline-block print:mr-3 print:mb-1"
                >
                  {skill}{index < resumeData.skills.length - 1 ? <span className="hidden print:inline">,</span> : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div className="break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white print:text-black print:text-xl print:mb-2 print:border-gray-400 print:uppercase print:tracking-wide">
              {labels.resume.education}
            </h2>
            <div className="space-y-6 print:space-y-3">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white print:text-black print:text-base print:font-bold">{edu.institution}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-gray-600 dark:text-gray-400 print:text-black print:flex-row print:gap-2">
                    <p className="print:text-sm">{edu.degree}</p>
                    <span className="hidden print:inline text-gray-400 print:text-black">-</span>
                    <p className="text-sm text-gray-500 dark:text-gray-500 print:text-black print:text-sm">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white print:text-black print:text-xl print:mb-2 print:border-gray-400 print:uppercase print:tracking-wide">
              {labels.resume.certifications}
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 print:text-black print:text-sm">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna Derecha (Experiencia) -> Ahora abajo en impresión */}
        <div className="md:col-span-2 print:w-full">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white print:text-black print:text-xl print:mb-4 print:border-gray-400 print:uppercase print:tracking-wide">
            {labels.resume.experience}
          </h2>
          <div className="space-y-10 print:space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 print:border-l-0 print:pl-0 break-inside-avoid">
                {/* Punto de línea de tiempo (Oculto en impresión para ahorrar espacio y tinta) */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 print:hidden"></div>
                
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black print:text-lg">{job.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mb-2 print:text-black print:flex-row print:gap-2 print:mb-1">
                    <span className="font-medium text-black dark:text-white print:text-black print:font-bold">{job.company}</span>
                    <span className="hidden sm:inline text-gray-400 print:inline print:text-black">•</span>
                    <span className="text-sm print:text-black">{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed print:text-black print:text-sm print:leading-snug print:text-justify">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

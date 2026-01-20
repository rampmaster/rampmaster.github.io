"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ResumeSection = () => {
  const { resumeData, labels } = useLanguage();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Header del CV */}
      <div className="mb-12 text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{resumeData.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{resumeData.location}</p>
        <p className="text-lg leading-relaxed max-w-2xl mb-6 text-gray-700 dark:text-gray-300">
          {resumeData.summary}
        </p>
        
        {/* Enlaces Sociales */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {resumeData.social.linkedin && (
            <a 
              href={resumeData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
          )}
          {resumeData.social.medium && (
            <a 
              href={resumeData.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
            >
              Medium
            </a>
          )}
          {resumeData.social.github && (
            <a 
              href={resumeData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
          {resumeData.social.email && (
            <a 
              href={`mailto:${resumeData.social.email}`}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Email
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna Izquierda: Skills, Educación, Certificaciones */}
        <div className="space-y-12">
          
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
              {labels.resume.skills}
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
              {labels.resume.education}
            </h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
              {labels.resume.certifications}
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna Derecha: Experiencia Profesional */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
            {labels.resume.experience}
          </h2>
          <div className="space-y-10">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0">
                {/* Punto de línea de tiempo */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>
                
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium text-black dark:text-white">{job.company}</span>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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

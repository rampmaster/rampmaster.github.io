"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export const ProjectsSection = () => {
  const { projects, projectLabels } = useLanguage();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 print:hidden" id="projects">
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {projectLabels.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          {projectLabels.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={projectLabels.viewProject}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

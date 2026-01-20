"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/context/LanguageContext';

export const ContactSection = () => {
  const { labels } = useLanguage();
  // REEMPLAZA "TU_FORM_ID_AQUI" CON EL ID QUE TE DE FORMSPREE
  const [state, handleSubmit] = useForm("mqeeddoq");
  
  if (state.succeeded) {
    return (
      <section className="w-full max-w-4xl mx-auto px-4 py-16 text-center print:hidden">
        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-100 dark:border-green-800">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
            {labels.contact.successTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {labels.contact.successMessage}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            {labels.contact.sendAnother}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 print:hidden" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{labels.contact.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          {labels.contact.subtitle}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {labels.contact.name}
              </label>
              <input
                id="name"
                type="text" 
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder={labels.contact.name}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {labels.contact.email}
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="tu@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              {labels.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
              placeholder={labels.contact.message}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            >
              {state.submitting ? labels.contact.sending : labels.contact.send}
            </button>
          </div>
          
          {state.errors && (
             <p className="text-red-500 text-center text-sm mt-2">{labels.contact.error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

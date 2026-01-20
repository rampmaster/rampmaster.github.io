import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full mt-16 py-12 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex gap-8 flex-wrap justify-center">
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors hover:underline hover:underline-offset-4"
          href="mailto:rmorenp@computer.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors hover:underline hover:underline-offset-4"
          href="https://ieee-collabratec.ieee.org/app/p/rmorenp"
          target="_blank"
          rel="noopener noreferrer"
        >
          IEEE Collabratec
        </a>
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors hover:underline hover:underline-offset-4"
          href="https://github.com/rampmaster"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} Roberto Moreno. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
};

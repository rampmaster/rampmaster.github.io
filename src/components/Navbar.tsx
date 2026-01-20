import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 sm:p-8 border-b border-gray-100 dark:border-gray-800 print:hidden">
      <Link href="/" className="flex items-center gap-2">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Rampmaster logo"
          width={150}
          height={24}
          priority
        />
      </Link>
      
      <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
      </div>
    </nav>
  );
};

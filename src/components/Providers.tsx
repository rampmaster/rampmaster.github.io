"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider, type Language } from "@/context/LanguageContext";

export function Providers({ language, children }: { language: Language; children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider language={language}>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  );
}

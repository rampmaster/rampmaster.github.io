import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "@/components/Providers";
import type { Language } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const skipLabel: Record<Language, string> = {
  en: "Skip to main content",
  es: "Saltar al contenido principal",
};

/**
 * Estructura raíz (<html>/<body>) compartida por las versiones en inglés y español.
 * Cada idioma tiene su propio root layout para que el HTML estático salga con el `lang` correcto.
 */
export function RootShell({
  lang,
  children,
}: Readonly<{ lang: Language; children: React.ReactNode }>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers language={lang}>
          {/* Enlace de accesibilidad para saltar navegación */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:font-bold transition-transform"
          >
            {skipLabel[lang]}
          </a>

          {children}
        </Providers>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}

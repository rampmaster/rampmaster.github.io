import type { Metadata, Viewport } from "next";
import type { Language } from "@/context/LanguageContext";

export const SITE_URL = "https://rampmaster.dev";

/** Rutas públicas de cada idioma. */
export const languagePaths: Record<Language, string> = {
  en: "/",
  es: "/es",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const copy: Record<Language, { title: string; description: string; ogDescription: string; ogLocale: string }> = {
  en: {
    title: "Roberto Moreno | Software Engineer & Educator",
    description:
      "Professional portfolio of Roberto Andrés Moreno Pérez. Software engineer, Software Engineering instructor at DUOC UC and former Technical Lead and CTO, with expertise in Symfony, PHP, Python and team leadership.",
    ogDescription: "Software engineer, educator and technical leader. Discover my career and projects.",
    ogLocale: "en_US",
  },
  es: {
    title: "Roberto Moreno | Ingeniero de Software y Docente",
    description:
      "Portafolio profesional de Roberto Andrés Moreno Pérez. Ingeniero de software, docente de Ingeniería de Software en DUOC UC y ex Jefe Técnico y CTO, con experiencia en Symfony, PHP, Python y liderazgo de equipos.",
    ogDescription: "Ingeniero de software, docente y líder técnico. Conoce mi trayectoria y proyectos.",
    ogLocale: "es_CL",
  },
};

export function buildMetadata(lang: Language): Metadata {
  const c = copy[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: c.title,
      template: "%s | Roberto Moreno",
    },
    description: c.description,
    keywords: ["Roberto Moreno", "Software Engineer", "Technical Lead", "CTO", "DUOC UC", "Symfony", "PHP", "Python", "Full Stack", "Chile"],
    authors: [{ name: "Roberto Moreno", url: SITE_URL }],
    creator: "Roberto Moreno",
    alternates: {
      canonical: languagePaths[lang],
      languages: {
        en: languagePaths.en,
        es: languagePaths.es,
        "x-default": languagePaths.en,
      },
    },
    openGraph: {
      type: "website",
      locale: c.ogLocale,
      alternateLocale: lang === "en" ? copy.es.ogLocale : copy.en.ogLocale,
      url: languagePaths[lang],
      title: c.title,
      description: c.ogDescription,
      siteName: "Roberto Moreno Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Roberto Moreno Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.ogDescription,
    },
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

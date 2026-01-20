import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Roberto Moreno | Jefe Técnico & CTO",
    template: "%s | Roberto Moreno",
  },
  description: "Portafolio profesional de Roberto Andrés Moreno Pérez. Jefe Técnico de Ingeniería de Software y CTO con experiencia en Symfony, PHP, Python y liderazgo de equipos.",
  keywords: ["Roberto Moreno", "CTO", "Jefe Técnico", "Software Engineer", "Symfony", "PHP", "Python", "Full Stack", "Chile"],
  authors: [{ name: "Roberto Moreno", url: "https://rampmaster.dev" }],
  creator: "Roberto Moreno",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://rampmaster.dev",
    title: "Roberto Moreno | Jefe Técnico & CTO",
    description: "Explorador de nuevas tecnologías y líder técnico. Descubre mi trayectoria y proyectos.",
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
    title: "Roberto Moreno | Jefe Técnico & CTO",
    description: "Portafolio profesional y CV de Roberto Moreno.",
    creator: "@rampmaster",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

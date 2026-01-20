import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
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
    default: "Roberto Moreno | Technical Lead & CTO",
    template: "%s | Roberto Moreno",
  },
  description: "Professional portfolio of Roberto Andrés Moreno Pérez. Technical Lead Software Engineering and CTO with expertise in Symfony, PHP, Python, and team leadership.",
  keywords: ["Roberto Moreno", "CTO", "Technical Lead", "Software Engineer", "Symfony", "PHP", "Python", "Full Stack", "Chile", "Remote"],
  authors: [{ name: "Roberto Moreno", url: "https://rampmaster.dev" }],
  creator: "Roberto Moreno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rampmaster.dev",
    title: "Roberto Moreno | Technical Lead & CTO",
    description: "Explorer of new technologies and technical leader. Discover my career and projects.",
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
    title: "Roberto Moreno | Technical Lead & CTO",
    description: "Professional portfolio and CV of Roberto Moreno.",
    creator: "@rampmaster",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers>
            {/* Enlace de accesibilidad para saltar navegación */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:font-bold transition-transform"
            >
              Skip to main content
            </a>

            {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}

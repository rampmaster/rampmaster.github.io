import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ResumeSection } from "@/components/ResumeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

/**
 * Página de inicio (Home).
 *
 * Muestra el portafolio profesional completo, incluyendo CV, Proyectos y Contacto.
 *
 * @returns {JSX.Element} El componente de la página de inicio.
 */
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
            
            <Navbar />

            <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
                {/* Sección de CV integrada */}
                <ResumeSection />

                {/* Separador visual */}
                <div className="w-full max-w-4xl mx-auto px-4">
                    <hr className="border-gray-200 dark:border-gray-800" />
                </div>

                {/* Sección de Proyectos */}
                <ProjectsSection />

                {/* Separador visual */}
                <div className="w-full max-w-4xl mx-auto px-4">
                    <hr className="border-gray-200 dark:border-gray-800" />
                </div>

                {/* Sección de Contacto */}
                <ContactSection />
            </main>
            
            <Footer />
        </div>
    );
}

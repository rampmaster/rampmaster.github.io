export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string; // Ruta a la imagen en /public
  link?: string;  // Link al sitio en vivo
  github?: string; // Link al repositorio
}

export const projectsEs: Project[] = [
  {
    title: "Plataforma IoT SENSOLABS",
    description: "Diseño e implementación de la estructura técnica y procesos para la gestión de dispositivos IoT. Creación de productos y conformación del equipo de desarrollo.",
    tags: ["Python", "IoT", "Cloud Architecture", "Team Leadership"],
    link: "https://sensolabs.com", // Placeholder
  },
  {
    title: "Fidelizador 3.0",
    description: "Desarrollo y mantenimiento de plataforma de Email Marketing. Migración a arquitectura moderna y optimización de rendimiento para alto volumen de envíos.",
    tags: ["Symfony", "PHP", "Redis", "MySQL", "Big Data"],
    link: "https://fidelizador.com",
  },
  {
    title: "Gestión AgenciaSur",
    description: "Sistema de coordinación para equipos internos y externos. Desarrollo de soluciones complejas a medida para clientes corporativos.",
    tags: ["Symfony", "React", "SQL", "Project Management"],
  }
];

export const projectsEn: Project[] = [
  {
    title: "SENSOLABS IoT Platform",
    description: "Design and implementation of technical structure and processes for IoT device management. Product creation and development team formation.",
    tags: ["Python", "IoT", "Cloud Architecture", "Team Leadership"],
    link: "https://sensolabs.com",
  },
  {
    title: "Fidelizador 3.0",
    description: "Development and maintenance of Email Marketing platform. Migration to modern architecture and performance optimization for high-volume sending.",
    tags: ["Symfony", "PHP", "Redis", "MySQL", "Big Data"],
    link: "https://fidelizador.com",
  },
  {
    title: "AgenciaSur Management",
    description: "Coordination system for internal and external teams. Development of complex custom solutions for corporate clients.",
    tags: ["Symfony", "React", "SQL", "Project Management"],
  }
];

export const projectLabels = {
  es: {
    title: "Proyectos Destacados",
    subtitle: "Una selección de iniciativas técnicas y liderazgos clave en mi trayectoria.",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código"
  },
  en: {
    title: "Featured Projects",
    subtitle: "A selection of technical initiatives and key leadership roles in my career.",
    viewProject: "View Project",
    viewCode: "View Code"
  }
};

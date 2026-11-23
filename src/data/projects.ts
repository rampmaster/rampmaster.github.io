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
    title: "Sistema de Licitaciones BEX",
    description: "Plataforma de licitaciones, auditoría y compras menores para BancoEstado Express, con más de 14.000 usuarios entre personal del banco y proveedores. Arquitectura cloud híbrida en AWS e infraestructura privada.",
    tags: ["AWS", "MySQL", "Cloud híbrido", "Banca", "Liderazgo técnico"],
  },
  {
    title: "UnaCola — SENSOLABS",
    description: "Sistema dinámico de gestión de filas de espera. En su prueba de concepto en Costanera Center atendió a más de 25.000 usuarios en la semana previa a Navidad con un SLA superior al 99 %.",
    tags: ["AWS Lambda", "Amplify", "Serverless", "Startup"],
  },
  {
    title: "Fidelizador Relay",
    description: "Servicio de despachos de correo personalizados dentro de Fidelizador 3.0, plataforma de email marketing con capacidad instalada de más de 20 millones de correos por día. Lideré esta iniciativa junto al desarrollo de los módulos de envío masivo.",
    tags: ["Symfony", "PHP", "Python", "Redis", "MySQL"],
    link: "https://fidelizador.com",
  }
];

export const projectsEn: Project[] = [
  {
    title: "BEX Procurement System",
    description: "Procurement, audit and minor-purchase platform for BancoEstado Express, serving over 14,000 bank staff and vendor users. Hybrid cloud architecture on AWS and private infrastructure.",
    tags: ["AWS", "MySQL", "Hybrid Cloud", "Banking", "Technical Leadership"],
  },
  {
    title: "UnaCola — SENSOLABS",
    description: "Dynamic queue management system. Its proof of concept at Costanera Center served over 25,000 users in the week before Christmas with an SLA above 99%.",
    tags: ["AWS Lambda", "Amplify", "Serverless", "Startup"],
  },
  {
    title: "Fidelizador Relay",
    description: "Customized email dispatch service within Fidelizador 3.0, an email marketing platform with an installed capacity of over 20 million emails per day. I led this initiative alongside the development of the bulk-sending modules.",
    tags: ["Symfony", "PHP", "Python", "Redis", "MySQL"],
    link: "https://fidelizador.com",
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

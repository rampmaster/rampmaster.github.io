export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  /** Logros destacados, se muestran como viñetas bajo la descripción. */
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  period: string;
  description?: string;
}

export interface SocialLinks {
  linkedin?: string;
  medium?: string;
  github?: string;
  email?: string;
}

export interface ResumeData {
  name: string;
  location: string;
  languages: string[];
  summary: string;
  social: SocialLinks;
  skills: string[];
  certifications: string[];
  experience: Experience[];
  volunteering: Volunteering[];
  education: Education[];
}

// --- ESPAÑOL ---
export const resumeDataEs: ResumeData = {
  name: "Roberto Andrés Moreno Pérez",
  location: "Gran Santiago, Chile",
  languages: ["Español (nativo)", "Inglés (nivel limitado)"],
  summary: "Ingeniero de software y docente de Ingeniería de Software en DUOC UC. Más de 15 años desarrollando soluciones backend robustas y liderando equipos técnicos, con interés en sistemas de gestión y optimización de procesos de información.",
  social: {
    linkedin: "https://linkedin.com/in/rmorenp",
    medium: "https://medium.com/@rampmaster",
    github: "https://github.com/rampmaster",
    email: "rmorenp@gmail.com"
  },
  skills: [
    "SQL",
    "Git / GitHub",
    "Symfony",
    "PHP",
    "Python",
    "MySQL",
    "Redis",
    "Sistemas de colas / AMQP",
    "Java / Spring Boot",
    "React",
    "Docker",
    "Desarrollo Backend",
    "Coordinación de equipos técnicos"
  ],
  certifications: [
    "Global AI Bootcamp 2024 – Bogotá",
    "30 Days with LAST Stack",
    "GitHub Foundations",
    "Aprende a programar con Qiskit (Escuela de computación cuántica)"
  ],
  experience: [
    {
      company: "DUOC UC",
      role: "Docente",
      period: "2026 – Actualidad",
      description: "Docente de las asignaturas de la especialidad de Ingeniería de Software."
    },
    {
      company: "AgenciaSur SpA",
      role: "Jefe técnico de ingeniería de software",
      period: "2018 – 2025",
      description: "Coordinación de equipos internos y externos. Desarrollo de soluciones complejas utilizando Symfony, PHP, Python, MySQL y Redis."
    },
    {
      company: "SENSOLABS",
      role: "Chief Technology Officer (CTO)",
      period: "2019 – 2023",
      description: "Implementación de estructura técnica, creación de procesos, definición de productos y conformación del equipo de trabajo."
    },
    {
      company: "Rampmaster SpA",
      role: "Socio Técnico",
      period: "2012 – 2023",
      description: "Responsable técnico y cofundador."
    },
    {
      company: "Fidelizador",
      role: "Analista Programador",
      period: "2012 – 2018",
      description: "Desarrollo y mantenimiento de plataforma 3.0. Tecnologías: Symfony, PHP, Python, Pear, Bash, SQL y NoSQL."
    },
    {
      company: "Universidad Andrés Bello",
      role: "Cátedra de Programación",
      period: "2014",
      description: "Ayudantía práctica en laboratorio docente."
    },
    {
      company: "The Pegasus Group",
      role: "Consultor",
      period: "2011 – 2012",
      description: "Desarrollo y asesoría en sistemas ERP."
    },
    {
      company: "RHISCOM",
      role: "Consultor",
      period: "2012",
      description: "Desarrollo e integraciones en CRM Vtiger."
    },
    {
      company: "Bithost Ltda.",
      role: "Jefe de Proyectos",
      period: "2010",
      description: "Gestión de proyectos informáticos y soporte técnico."
    },
    {
      company: "Conferencia Episcopal Mexicana",
      role: "Consultor en Nuevas Tecnologías",
      period: "2009",
      description: "Reorganización de servicios, optimización de infraestructura y auditoría de seguridad."
    },
    {
      company: "Jóvenes Líderes",
      role: "Webmaster",
      period: "2007 – 2009",
      description: "Desarrollo web utilizando PHP y MySQL."
    },
    {
      company: "Obras Misionales Pontificias",
      role: "Webmaster",
      period: "2008 – 2009",
      description: "Práctica industrial enfocada en PHP, MySQL y JavaScript."
    }
  ],
  volunteering: [
    {
      organization: "IEEE Computer Society",
      role: "Vice Chair — Partnerships & Operations (GSAMD)",
      period: "Hasta dic. 2026",
      description: "Coordinación de alianzas y operaciones de la iniciativa GSAMD."
    }
  ],
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Magíster en Ciencias de la Computación (MCS)",
      period: "2024 – 2026"
    },
    {
      institution: "Universidad Andrés Bello",
      degree: "Ingeniería en Computación e Informática",
      period: "2013 – 2017"
    },
    {
      institution: "Universidad Técnica Federico Santa María",
      degree: "Informática",
      period: "2006 – 2012"
    }
  ]
};

// --- ENGLISH ---
export const resumeDataEn: ResumeData = {
  name: "Roberto Andrés Moreno Pérez",
  location: "Greater Santiago, Chile",
  languages: ["Spanish (Native)", "English (Limited working proficiency)"],
  summary: "Software engineer and Software Engineering instructor at DUOC UC. Over 15 years building robust backend solutions and leading technical teams, with an interest in management systems and information process optimization.",
  social: resumeDataEs.social, // Mismos enlaces
  skills: [
    "SQL",
    "Git / GitHub",
    "Symfony",
    "PHP",
    "Python",
    "MySQL",
    "Redis",
    "Queue Systems / AMQP",
    "Java / Spring Boot",
    "React",
    "Docker",
    "Backend Development",
    "Technical Team Coordination"
  ],
  certifications: [
    "Global AI Bootcamp 2024 – Bogotá",
    "30 Days with LAST Stack",
    "GitHub Foundations",
    "Learn to program with Qiskit (Quantum Computing School)"
  ],
  experience: [
    {
      company: "DUOC UC",
      role: "Instructor",
      period: "2026 – Present",
      description: "Instructor for courses in the Software Engineering specialization."
    },
    {
      company: "AgenciaSur SpA",
      role: "Technical Lead Software Engineering",
      period: "2018 – 2025",
      description: "Coordination of internal and external teams. Development of complex solutions using Symfony, PHP, Python, MySQL, and Redis."
    },
    {
      company: "SENSOLABS",
      role: "Chief Technology Officer (CTO)",
      period: "2019 – 2023",
      description: "Implementation of technical structure, process creation, product definition, and team building."
    },
    {
      company: "Rampmaster SpA",
      role: "Technical Partner",
      period: "2012 – 2023",
      description: "Technical lead and co-founder."
    },
    {
      company: "Fidelizador",
      role: "Programmer Analyst",
      period: "2012 – 2018",
      description: "Development and maintenance of platform 3.0. Technologies: Symfony, PHP, Python, Pear, Bash, SQL, and NoSQL."
    },
    {
      company: "Universidad Andrés Bello",
      role: "Programming Chair (Teaching Assistant)",
      period: "2014",
      description: "Practical teaching assistantship in laboratory."
    },
    {
      company: "The Pegasus Group",
      role: "Consultant",
      period: "2011 – 2012",
      description: "Development and consulting in ERP systems."
    },
    {
      company: "RHISCOM",
      role: "Consultant",
      period: "2012",
      description: "Development and integrations in Vtiger CRM."
    },
    {
      company: "Bithost Ltda.",
      role: "Project Manager",
      period: "2010",
      description: "IT project management and technical support."
    },
    {
      company: "Conferencia Episcopal Mexicana",
      role: "New Technologies Consultant",
      period: "2009",
      description: "Service reorganization, infrastructure optimization, and security audit."
    },
    {
      company: "Jóvenes Líderes",
      role: "Webmaster",
      period: "2007 – 2009",
      description: "Web development using PHP and MySQL."
    },
    {
      company: "Obras Misionales Pontificias",
      role: "Webmaster",
      period: "2008 – 2009",
      description: "Industrial internship focused on PHP, MySQL, and JavaScript."
    }
  ],
  volunteering: [
    {
      organization: "IEEE Computer Society",
      role: "Vice Chair — Partnerships & Operations (GSAMD)",
      period: "Through Dec. 2026",
      description: "Coordination of partnerships and operations for the GSAMD initiative."
    }
  ],
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Master of Computer Sciences (MCS)",
      period: "2024 – 2026"
    },
    {
      institution: "Universidad Andrés Bello",
      degree: "Computer Science Engineering",
      period: "2013 – 2017"
    },
    {
      institution: "Universidad Técnica Federico Santa María",
      degree: "Informatics",
      period: "2006 – 2012"
    }
  ]
};

// --- UI LABELS ---
export const uiLabels = {
  es: {
    nav: {
      home: "Inicio",
      contact: "Contacto"
    },
    resume: {
      skills: "Aptitudes",
      education: "Educación",
      certifications: "Certificaciones",
      experience: "Experiencia Profesional",
      volunteering: "Voluntariado",
      languages: "Idiomas"
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente o quieres conversar sobre tecnología? Envíame un mensaje directo.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successMessage: "Gracias por contactarme. Te responderé a la brevedad posible.",
      sendAnother: "Enviar otro mensaje",
      error: "Hubo un error al enviar el formulario. Por favor intenta nuevamente."
    }
  },
  en: {
    nav: {
      home: "Home",
      contact: "Contact"
    },
    resume: {
      skills: "Skills",
      education: "Education",
      certifications: "Certifications",
      experience: "Professional Experience",
      volunteering: "Volunteering",
      languages: "Languages"
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind or want to discuss technology? Send me a direct message.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thanks for contacting me. I will reply as soon as possible.",
      sendAnother: "Send another message",
      error: "There was an error sending the form. Please try again."
    }
  }
};

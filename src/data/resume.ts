export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
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
  education: Education[];
}

// --- ESPAÑOL ---
export const resumeDataEs: ResumeData = {
  name: "Roberto Andrés Moreno Pérez",
  location: "Gran Santiago, Chile",
  languages: ["Español (nativo)", "Inglés (nivel limitado)"],
  summary: "Explorador de nuevas tecnologías, con interés en sistemas de gestión y optimización de procesos de información. Experiencia sólida en educación, capacitación e investigación, liderando equipos técnicos y desarrollando soluciones backend robustas.",
  social: {
    linkedin: "https://linkedin.com/in/rmorenp/?locale=en_US",
    medium: "https://medium.com/@rampmaster",
    github: "https://github.com/rampmaster",
    email: "rmorenp@computer.org"
  },
  skills: [
    "SQL",
    "Git / GitHub",
    "Symfony",
    "PHP",
    "Python",
    "MySQL",
    "Redis",
    "Sistemas de colas / AMQL",
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
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Master of Computer Sciences (MCS)",
      period: "2024 – 2025 (En curso)"
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
  summary: "Explorer of new technologies, interested in management systems and information process optimization. Solid experience in education, training, and research, leading technical teams and developing robust backend solutions.",
  social: resumeDataEs.social, // Mismos enlaces
  skills: [
    "SQL",
    "Git / GitHub",
    "Symfony",
    "PHP",
    "Python",
    "MySQL",
    "Redis",
    "Queue Systems / AMQL",
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
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Master of Computer Sciences (MCS)",
      period: "2024 – 2025 (In progress)"
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
      experience: "Experiencia Profesional"
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
      experience: "Professional Experience"
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

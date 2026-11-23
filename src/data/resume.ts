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
  /** Detalle opcional (tesis, mención, estado). */
  detail?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  period: string;
  description?: string;
  highlights?: string[];
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
  languages: ["Español (nativo)", "Inglés (B2, nivel universitario)"],
  summary: "Ingeniero de software y docente de Ingeniería de Software en DUOC UC. Más de 15 años desarrollando soluciones backend robustas y liderando equipos técnicos de hasta 15 personas, con experiencia en el sector bancario, startups y arquitecturas cloud en AWS.",
  social: {
    linkedin: "https://linkedin.com/in/rmorenp",
    medium: "https://medium.com/@rampmaster",
    github: "https://github.com/rampmaster",
    email: "rmorenp@gmail.com"
  },
  skills: [
    "PHP",
    "Symfony",
    "Laravel",
    "Python",
    "Java / Spring Boot",
    "TypeScript",
    "React",
    "SQL",
    "MySQL",
    "Redis",
    "Sistemas de colas / AMQP",
    "AWS (EC2, S3, RDS, Lambda, Amplify)",
    "Docker",
    "Linux",
    "Git / GitHub",
    "CI/CD",
    "Scrum / metodologías ágiles",
    "Liderazgo de equipos técnicos"
  ],
  certifications: [
    "Scrum Foundation Professional Certification (SFPC) – CertiProf, 2026",
    "Scrum Developer Professional Certification (SDPC) – CertiProf, 2026",
    "DevOps Essentials Professional Certification (DEPC) – CertiProf, 2026",
    "Artificial Intelligence Professional Certification (CAIPC) – CertiProf, 2026",
    "Cybersecurity Awareness Professional Certification (CAPC) – CertiProf, 2026",
    "Diplomado en Diseño y Gestión Ágil de Proyectos – Fundación Telefónica Movistar, SENCE y Universidad de Playa Ancha",
    "GitHub Foundations",
    "Global AI Bootcamp 2024 – Bogotá",
    "30 Days with LAST Stack",
    "Aprende a programar con Qiskit (Escuela de computación cuántica)"
  ],
  experience: [
    {
      company: "DUOC UC",
      role: "Docente",
      period: "2026 – Actualidad",
      description: "Docente de la especialidad de Ingeniería de Software: Desarrollo Orientado a Objetos (DSY1102), Desarrollo Fullstack I, II y III (DSY1103, DSY1104, DSY1106) e Ingeniería de Software (RQY1102).",
      highlights: [
        "Imparto 5–6 secciones por semestre, de 15 a 30 estudiantes cada una.",
        "Creé material de apoyo abierto para los estudiantes, publicado en el repositorio DonKiwiCL en GitHub.",
        "Participo en tracks del CITT (Centro de Innovación y Transferencia Tecnológica)."
      ]
    },
    {
      company: "AgenciaSur SpA",
      role: "Jefe técnico de ingeniería de software",
      period: "2018 – 2025",
      description: "Liderazgo técnico de proyectos para el sector bancario, en especial BancoEstado y BancoEstado Express.",
      highlights: [
        "Coordiné equipos de hasta 15 personas, entre desarrolladores internos y proveedores externos.",
        "Lideré el Sistema de Desarrollo Corporativo y el Sistema de Licitaciones BEX, con más de 14.000 usuarios entre personal del banco y proveedores para procesos de auditoría y compras menores.",
        "Implementé una arquitectura cloud híbrida en AWS (EC2, S3, MySQL) integrada con infraestructura privada.",
        "Ordené el ciclo de desarrollo en ventanas de entrega mensuales y reemplacé proveedores de bajo rendimiento.",
        "Introduje metodologías ágiles, revisión de código y los primeros pasos de CI/CD y testing automatizado."
      ]
    },
    {
      company: "SENSOLABS",
      role: "Chief Technology Officer (CTO)",
      period: "2019 – 2023",
      description: "Emprendimiento propio, desarrollado en paralelo a AgenciaSur. Definición de productos, estructura técnica y equipo de una startup tecnológica.",
      highlights: [
        "Lideré el desarrollo de UnaCola, un sistema dinámico de gestión de filas de espera, con un equipo de hasta 5 personas.",
        "Prueba de concepto de empaque de regalos en Costanera Center: más de 25.000 usuarios en la semana previa a Navidad, con un SLA de atención superior al 99 %.",
        "Migré la plataforma de una arquitectura clásica en AWS (EC2, RDS, S3) a un modelo serverless con Lambda y Amplify.",
        "Participamos en el programa de aceleración de AWS y en la incubadora ImagineLabs; desarrollamos además un prototipo de basureros inteligentes (IoT)."
      ]
    },
    {
      company: "Rampmaster SpA",
      role: "Socio técnico y cofundador",
      period: "2012 – 2023",
      description: "Desarrollo de soluciones de software a medida, con dedicación parcial. Equipo de 2 personas fijas y hasta 10 por proyecto.",
      highlights: [
        "Proyecto ASELA, financiado por el BID.",
        "Implementación de una red de vigilancia para el Obispado de San Bernardo.",
        "Creación de RadioFranja sobre infraestructura híbrida."
      ]
    },
    {
      company: "Fidelizador",
      role: "Analista programador",
      period: "2012 – 2018",
      description: "Desarrollo de la plataforma de email marketing Fidelizador 3.0 con Symfony, PHP, Python, Bash, SQL y NoSQL, en un equipo de hasta 5 personas.",
      highlights: [
        "Plataforma con capacidad instalada de más de 20 millones de correos por día.",
        "Desarrollé los módulos de envío masivo y mejoré el soporte de envíos con múltiples fuentes de datos.",
        "Lideré la creación de Fidelizador Relay, servicio para despachos personalizados.",
        "Implementé el flujo de correo personalizado bajo demanda."
      ]
    },
    {
      company: "Varias organizaciones",
      role: "Experiencia previa — consultoría, desarrollo web y docencia",
      period: "2007 – 2014",
      description: "Consultor, jefe de proyectos y webmaster en distintas organizaciones.",
      highlights: [
        "The Pegasus Group: desarrollo del sistema personalizado Mypymetec (ERP).",
        "RHISCOM: implementación de soporte e integraciones para la plataforma vTiger CRM.",
        "Bithost: gestión de 3 proyectos informáticos con un equipo de 2 personas.",
        "Conferencia Episcopal Mexicana: implementación de sitios web aprovechando infraestructura cPanel/WHM subutilizada, reorganización de servicios y auditoría de seguridad.",
        "Universidad Andrés Bello: ayudante de la cátedra de Programación (2014).",
        "Jóvenes Líderes y Obras Misionales Pontificias: webmaster con PHP, MySQL y JavaScript."
      ]
    }
  ],
  volunteering: [
    {
      organization: "IEEE Computer Society",
      role: "Vice Chair — Partnerships & Operations (GSAMD)",
      period: "Hasta dic. 2026",
      description: "Coordinación de alianzas y operaciones de la iniciativa GSAMD."
    },
    {
      organization: "IEEE Computer Society",
      role: "Region 9 Coordinator (Latinoamérica)",
      period: "2022 – 2025",
      highlights: [
        "Apoyé la creación de cerca de 1 capítulo profesional y 10 capítulos estudiantiles por año."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Magíster en Ciencias de la Computación (MCS)",
      period: "2024 – 2026",
      detail: "Tesis: optimización de listas de espera de cirugía electiva considerando pacientes GES y no GES (en proceso de publicación)."
    },
    {
      institution: "Universidad Andrés Bello",
      degree: "Ingeniería en Computación e Informática",
      period: "2013 – 2017"
    },
    {
      institution: "Universidad Técnica Federico Santa María",
      degree: "Informática (estudios incompletos)",
      period: "2006 – 2012"
    }
  ]
};

// --- ENGLISH ---
export const resumeDataEn: ResumeData = {
  name: "Roberto Andrés Moreno Pérez",
  location: "Greater Santiago, Chile",
  languages: ["Spanish (Native)", "English (B2, university level)"],
  summary: "Software engineer and Software Engineering instructor at DUOC UC. Over 15 years building robust backend solutions and leading technical teams of up to 15 people, with experience in banking, startups and AWS cloud architectures.",
  social: resumeDataEs.social, // Mismos enlaces
  skills: [
    "PHP",
    "Symfony",
    "Laravel",
    "Python",
    "Java / Spring Boot",
    "TypeScript",
    "React",
    "SQL",
    "MySQL",
    "Redis",
    "Queue Systems / AMQP",
    "AWS (EC2, S3, RDS, Lambda, Amplify)",
    "Docker",
    "Linux",
    "Git / GitHub",
    "CI/CD",
    "Scrum / Agile",
    "Technical Team Leadership"
  ],
  certifications: [
    "Scrum Foundation Professional Certification (SFPC) – CertiProf, 2026",
    "Scrum Developer Professional Certification (SDPC) – CertiProf, 2026",
    "DevOps Essentials Professional Certification (DEPC) – CertiProf, 2026",
    "Artificial Intelligence Professional Certification (CAIPC) – CertiProf, 2026",
    "Cybersecurity Awareness Professional Certification (CAPC) – CertiProf, 2026",
    "Diploma in Agile Project Design and Management – Fundación Telefónica Movistar, SENCE and Universidad de Playa Ancha",
    "GitHub Foundations",
    "Global AI Bootcamp 2024 – Bogotá",
    "30 Days with LAST Stack",
    "Learn to program with Qiskit (Quantum Computing School)"
  ],
  experience: [
    {
      company: "DUOC UC",
      role: "Instructor",
      period: "2026 – Present",
      description: "Instructor in the Software Engineering program: Object-Oriented Development (DSY1102), Fullstack Development I, II and III (DSY1103, DSY1104, DSY1106) and Software Engineering (RQY1102).",
      highlights: [
        "Teach 5–6 sections per semester, with 15 to 30 students each.",
        "Created open learning materials for students, published in the DonKiwiCL repository on GitHub.",
        "Take part in CITT (Center for Innovation and Technology Transfer) tracks."
      ]
    },
    {
      company: "AgenciaSur SpA",
      role: "Technical Lead Software Engineering",
      period: "2018 – 2025",
      description: "Technical leadership of projects for the banking sector, especially BancoEstado and BancoEstado Express.",
      highlights: [
        "Coordinated teams of up to 15 people, combining in-house developers and external vendors.",
        "Led the Corporate Development System and the BEX Procurement System, serving over 14,000 bank staff and vendor users for audit and minor-purchase processes.",
        "Implemented a hybrid cloud architecture on AWS (EC2, S3, MySQL) integrated with private infrastructure.",
        "Organized the development cycle into monthly release windows and replaced underperforming vendors.",
        "Introduced agile practices, code reviews and the first steps of CI/CD and automated testing."
      ]
    },
    {
      company: "SENSOLABS",
      role: "Chief Technology Officer (CTO)",
      period: "2019 – 2023",
      description: "Own startup, run in parallel with AgenciaSur. Product definition, technical structure and team building.",
      highlights: [
        "Led the development of UnaCola, a dynamic queue management system, with a team of up to 5 people.",
        "Gift-wrapping proof of concept at Costanera Center: over 25,000 users in the week before Christmas with a service SLA above 99%.",
        "Migrated the platform from a classic AWS architecture (EC2, RDS, S3) to a serverless model with Lambda and Amplify.",
        "Took part in the AWS acceleration program and the ImagineLabs incubator; also built a smart waste bin prototype (IoT)."
      ]
    },
    {
      company: "Rampmaster SpA",
      role: "Technical Partner and Co-founder",
      period: "2012 – 2023",
      description: "Custom software development, part-time. Core team of 2 and up to 10 people per project.",
      highlights: [
        "ASELA project, funded by the Inter-American Development Bank (IDB).",
        "Deployed a surveillance network for the Diocese of San Bernardo.",
        "Built RadioFranja on hybrid infrastructure."
      ]
    },
    {
      company: "Fidelizador",
      role: "Programmer Analyst",
      period: "2012 – 2018",
      description: "Development of the Fidelizador 3.0 email marketing platform with Symfony, PHP, Python, Bash, SQL and NoSQL, in a team of up to 5 people.",
      highlights: [
        "Platform with an installed capacity of over 20 million emails per day.",
        "Developed the bulk-sending modules and improved support for sends with multiple data sources.",
        "Led the creation of Fidelizador Relay, a service for customized email dispatches.",
        "Implemented the on-demand personalized email flow."
      ]
    },
    {
      company: "Various organizations",
      role: "Earlier experience — consulting, web development and teaching",
      period: "2007 – 2014",
      description: "Consultant, project manager and webmaster across several organizations.",
      highlights: [
        "The Pegasus Group: developed the custom Mypymetec ERP system.",
        "RHISCOM: implemented support and integrations for the vTiger CRM platform.",
        "Bithost: managed 3 IT projects with a team of 2.",
        "Conferencia Episcopal Mexicana: deployed websites on underused cPanel/WHM infrastructure, reorganized services and performed a security audit.",
        "Universidad Andrés Bello: Programming teaching assistant (2014).",
        "Jóvenes Líderes and Obras Misionales Pontificias: webmaster with PHP, MySQL and JavaScript."
      ]
    }
  ],
  volunteering: [
    {
      organization: "IEEE Computer Society",
      role: "Vice Chair — Partnerships & Operations (GSAMD)",
      period: "Through Dec. 2026",
      description: "Coordination of partnerships and operations for the GSAMD initiative."
    },
    {
      organization: "IEEE Computer Society",
      role: "Region 9 Coordinator (Latin America)",
      period: "2022 – 2025",
      highlights: [
        "Supported the creation of about 1 professional chapter and 10 student chapters per year."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Andrés Bello",
      degree: "Master of Computer Science (MCS)",
      period: "2024 – 2026",
      detail: "Thesis: optimization of elective surgery waiting lists considering GES and non-GES patients (publication in progress)."
    },
    {
      institution: "Universidad Andrés Bello",
      degree: "Computer Science Engineering",
      period: "2013 – 2017"
    },
    {
      institution: "Universidad Técnica Federico Santa María",
      degree: "Informatics (incomplete studies)",
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

export const SITE_CONFIG = {
  languages: ["en", "es"],
  defaultLanguage: "es",
  theme: "industrial-brutalist",
};

export interface Hotspot {
  id: string;
  type: "metallurgical" | "workflow" | "ux";
  label: { es: string; en: string };
  problem: { es: string; en: string };
  solution: { es: string; en: string };
  x: string;
  y: string;
}

export const CONTENT = {
  hero: {
    title: {
      es: "Futura Ingeniera de Materiales",
      en: "Future Materials Engineer",
    },
    subline: {
      es: "UX Researcher Industrial",
      en: "Industrial UX Researcher",
    },
    uvp_hammer: {
      es: "Elimino errores y mermas mediante protocollos operativos intuitivos.",
      en: "Eliminating errors and waste through intuitive operating protocols.",
    },
  },

  caseStudy: {
    title: {
      es: "Transformación: Del Caos a la Eficiencia",
      en: "Transformation: From Chaos to Efficiency",
    },
    subtitle: {
      es: "El Puente de Integridad Estructural: Soldadura en Estructuras Industriales",
      en: "The Structural Integrity Bridge: Welding in Industrial Frameworks",
    },
    image_ref: "/assets/images/industrial-setup-raw.jpg",
    hotspots: [
      {
        id: "technical",
        type: "metallurgical",
        label: { es: "Punto Técnico", en: "Technical Point" },
        problem: {
          es: "Formación de grietas en frío (Cold Cracking) por tiempos de enfriamiento inadecuados.",
          en: "Cold cracking formation due to improper cooling times.",
        },
        solution: {
          es: "Análisis microestructural preventivo con diagrama TTT específico para la aleación.",
          en: "Preventive microstructural analysis with TTT diagram specific to the alloy.",
        },
        x: "25%",
        y: "35%",
      },
      {
        id: "process",
        type: "workflow",
        label: { es: "Punto de Proceso", en: "Process Point" },
        problem: {
          es: "Cuello de botella en control de calidad: defectos detectados solo al final.",
          en: "Quality control bottleneck: defects detected only at final inspection.",
        },
        solution: {
          es: "Checkpoint visual obligatorio post-soldadura antes de pintura.",
          en: "Post-weld visual checkpoint before painting stage.",
        },
        x: "50%",
        y: "50%",
      },
      {
        id: "human",
        type: "ux",
        label: { es: "Punto Humano", en: "Human Point" },
        problem: {
          es: "Instrucciones ambiguas: operario salta fase de precalentamiento sin entender el 'por qué'.",
          en: "Ambiguous instructions: operator skips preheating without understanding why.",
        },
        solution: {
          es: "Protocolo visual UX 'Zero-Error' que correlaciona precalentamiento con seguridad del componente.",
          en: "'Zero-Error' visual UX protocol linking preheating to component safety.",
        },
        x: "75%",
        y: "30%",
      },
    ] as Hotspot[],
  },

  technicalVault: {
    access_code: "STAINLESS",
    title: { es: "Bóveda Técnica", en: "Technical Vault" },
    subtitle: {
      es: "Evidencia Científica: Análisis de Grano y Microdureza",
      en: "Scientific Evidence: Grain Analysis and Microhardness",
    },
    datasets: [
      {
        title: "Stress-Strain Analysis",
        file_type: "graph",
        image_ref: "/assets/images/vickers-chart.jpg",
        description: {
          es: "Curvas de deformación técnica a través de la zona termicamente afectada (HAZ) de la soldadura.",
          en: "Technical strain curves across the heat-affected zone (HAZ) of the weld.",
        },
      },
      {
        title: "Microstructural Evidence",
        file_type: "micrograph",
        image_ref: "/assets/images/micrograph.jpg",
        description: {
          es: "Micrografía mostrando la estructura martensitica frágil en el punto de rotura.",
          en: "Micrograph showing brittle martensitic structure at the fracture point.",
        },
      },
    ],
  },

  bio: {
    title: { es: "Sobre Mí", en: "About Me" },
    content: {
      es: "Soy Giulia, estudiante de tercer año de Ingeniería de Materiales con especialización en UX Research Industrial. Mi misión es traducir la complejidad científica de los metales en protocolos operativos intuitivos que eliminen errores, mermas y estrés en línea de producción.",
      en: "I'm Giulia, third-year Materials Engineering student with a specialization in Industrial UX Research. My mission is to translate the scientific complexity of metallurgy into intuitive operating protocols that eliminate errors, waste, and stress on production lines.",
    },
  },

  cta_widget: {
    text: { es: "¿Hablamos en LinkedIn?", en: "Let's talk on LinkedIn" },
    subtext: {
      es: "Incerteza en línea? Resolvámosla en LinkedIn",
      en: "Quality issues? Let's solve them on LinkedIn",
    },
    link: "/connect",
    blinkAnimation: true,
  },

  downloads: {
    cv: {
      label: { es: "Descargar Portfolio de Proyectos (PDF)", en: "Download Project Portfolio (PDF)" },
      filename: "portfolio.pdf",
      path: "/documents/portfolio.pdf",
    },
  },

  footer: {
    privacy: {
      es: "Privacidad por Diseño: Sin cookies, sin tracking, solo ciencia.",
      en: "Privacy by Design: No cookies, no tracking, just science.",
    },
    ticker: {
      es: "ZERO AMBIGUITÀ • MASSIMA EFFICIENZA • PROTOCOLLI INTUITIVI",
      en: "ZERO AMBIGUITY • MAXIMUM EFFICIENCY • INTUITIVE PROTOCOLS",
    },
  },

  audio: {
    engine: {
      muted: true,
      volume: 0.5,
    },
    sounds: {
      click: {
        path: "/assets/sounds/click-metallic.mp3",
        label: "Metallic Click",
      },
      hover: {
        path: "/assets/sounds/hydraulic-soft.mp3",
        label: "Hydraulic Soft",
      },
      ambient: {
        path: "/assets/sounds/industrial-ambient.mp3",
        label: "Industrial Ambient",
      },
    },
  },
};

export const LINKEDIN_PROFILE = process.env.NEXT_PUBLIC_LINKEDIN_URL || 
  "https://linkedin.com/in/giulia-profile";

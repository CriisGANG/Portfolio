export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Estudiante de Grado Superior · DAW',
      title: 'Cristofol Comas Llompart',
      subtitle:
        'Desarrollo web con React, tiendas online y mantenimiento. Catalán y castellano nativos · inglés B1.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy estudiante del ciclo superior de Desarrollo de Aplicaciones Web (DAW). Combino formación académica con prácticas en el sector hotelero y proyectos reales de comercio electrónico y webs corporativas.',
      p2: 'Me gusta tocar de todo: front con React, entornos WordPress y Shopify, integraciones y puesta en marcha. Busco seguir aprendiendo en equipos que valoren el código claro y la mejora continua.',
      langs: 'Idiomas',
      langsVal: 'Catalán y castellano (nativos) · Inglés (B1)',
      location: 'Ubicación',
      locationVal: 'Mallorca, España',
      age: 'Edad',
      ageVal: '20 años',
    },
    experience: {
      title: 'Experiencia',
      hotel: {
        role: 'Astoria Playa Adults Only · Alcúdia',
        desc: 'Desarrollador Web (DAW) en prácticas en hotel Astoria Playa Adults Only de referencia en Alcúdia, con alta demanda internacional y estándares premium, colaborando en entornos digitales orientados a la experiencia del cliente y la optimización de la gestión interna.',
      },
      ecommerce: {
        role: 'E‑commerce y webs en producción',
        desc: 'Participación en proyectos con Shopify y WordPress: catálogos, contenidos, ajustes de tema y buenas prácticas orientadas a conversión y rendimiento.',
      },
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Sitios en producción en los que he colaborado.',
      visit: 'Visitar',
      items: {
        regional: {
          name: 'Regional Products Mallorca',
          desc: 'Tienda Shopify con productos gourmet y región Balear: navegación multilingüe, ofertas y experiencia de compra orientada al retail.',
          tag: 'Shopify',
        },
        agrai: {
          name: 'Agrai Gourmet',
          desc: 'Web corporativa en WordPress para marca de sales gourmet: storytelling de marca, secciones de producto y contacto.',
          tag: 'WordPress',
        },
      },
    },
    stack: {
      title: 'Stack y herramientas',
      subtitle: 'Lo que uso en clase y en proyectos reales.',
      tags: [
        'React',
        'JavaScript',
        'TypeScript',
        'HTML / CSS',
        'WordPress',
        'Shopify',
        'Git',
        'Node.js (básico)',
      ],
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        'Si buscas refuerzo en desarrollo web, e‑commerce o mantenimiento, escríbeme.',
      email: 'Correo',
      copy: 'Copiar',
      copied: 'Copiado',
    },
    footer: {
      rights: 'Portfolio académico y profesional.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
    },
    hero: {
      badge: 'Higher Vocational Training · Web Apps (DAW)',
      title: 'Cristofol Comas Llompart',
      subtitle:
        'Web development with React, online stores and maintenance. Native Catalan & Spanish · English B1.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
    },
    about: {
      title: 'About',
      p1: 'I am a student of the Higher Vocational Training cycle in Web Application Development (DAW). I combine coursework with internships in the hotel industry and real-world e‑commerce and corporate website projects.',
      p2: 'I like wearing many hats: React on the front end, WordPress and Shopify environments, integrations and go‑live. I want to keep learning with teams that value clean code and continuous improvement.',
      langs: 'Languages',
      langsVal: 'Catalan & Spanish (native) · English (B1)',
      location: 'Location',
      locationVal: 'Mallorca, Spain',
      age: 'Age',
      ageVal: '20',
    },
    experience: {
      title: 'Experience',
      hotel: {
        role: 'Astoria Playa Adults Only · Alcúdia',
        desc: 'Web Developer (DAW) intern at Astoria Playa Adults Only, a benchmark hotel in Alcúdia with strong international demand and premium standards. Working on digital initiatives focused on guest experience and internal operations optimization.',
      },
      ecommerce: {
        role: 'Live e‑commerce & websites',
        desc: 'Contributing to Shopify and WordPress projects: catalogues, content, theme tweaks and practices focused on conversion and performance.',
      },
    },
    projects: {
      title: 'Highlighted projects',
      subtitle: 'Live production sites I have contributed to.',
      visit: 'Visit',
      items: {
        regional: {
          name: 'Regional Products Mallorca',
          desc: 'Shopify store for gourmet regional products: multilingual UX, promos and a retail‑focused checkout flow.',
          tag: 'Shopify',
        },
        agrai: {
          name: 'Agrai Gourmet',
          desc: 'WordPress corporate site for a gourmet salt brand: brand story, product sections and contact.',
          tag: 'WordPress',
        },
      },
    },
    stack: {
      title: 'Stack & tools',
      subtitle: 'What I use in class and in production work.',
      tags: [
        'React',
        'JavaScript',
        'TypeScript',
        'HTML / CSS',
        'WordPress',
        'Shopify',
        'Git',
        'Node.js (basics)',
      ],
    },
    contact: {
      title: "Let's talk",
      subtitle:
        'If you need help with web development, e‑commerce or maintenance, send me a message.',
      email: 'Email',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      rights: 'Academic & professional portfolio.',
    },
  },
} as const

export type TranslationKey = typeof translations.es

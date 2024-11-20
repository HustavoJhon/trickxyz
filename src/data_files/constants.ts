import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "TrickXYZ",
  tagline: "Tutores expertos para tu éxito universitario",
  description:
    "TrickXYZ conecta a estudiantes con tutores especializados que te guiarán en las materias clave de la universidad. Ofrecemos una experiencia educativa accesible, confiable y diseñada para impulsar tu aprendizaje. ¡Comienza ahora y alcanza tus objetivos académicos!",
  description_short:
    "TrickXYZ conecta estudiantes con tutores expertos para triunfar en la universidad.",
  url: "https://screwfast.uk",
  author: "@hustavojhon, @yupanquidev",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Capacitar a estudiantes en habilidades prácticas y conocimientos técnicos`,
  description:
    "Transforma tu aprendizaje con TrickXYZ: una plataforma educativa donde tutores expertos te guían en temas universitarios clave. Diseñada para ofrecer accesibilidad, confiabilidad y una experiencia centrada en el estudiante. ¡Empieza a dominar tus materias hoy mismo!",
  image: ogImageSrc,
};

export type Application = {
  index: string;
  title: string;
  /** Cómo se nombra la aplicación dentro del mensaje de WhatsApp. */
  messageKey: string;
  description: string;
  image: { src: string; alt: string };
};

export const applications: Application[] = [
  {
    index: "A·01",
    title: "Canalizaciones e infraestructura",
    messageKey: "canalización e infraestructura",
    description: "Conducción y protección en obras de infraestructura, según las especificaciones de cada proyecto.",
    image: {
      src: "/images/ilustraciones/app-canalizacion.svg",
      alt: "Sección técnica de una zanja con tubería HDPE sobre cama de apoyo",
    },
  },
  {
    index: "A·02",
    title: "Sistemas de drenaje",
    messageKey: "sistemas de drenaje",
    description: "Captación y evacuación de aguas en terrenos, caminos y obras civiles.",
    image: {
      src: "/images/ilustraciones/app-drenaje.svg",
      alt: "Sección técnica de una zanja drenante con geotextil, material drenante y tubería HDPE",
    },
  },
  {
    index: "A·03",
    title: "Manejo de aguas lluvias",
    messageKey: "manejo de aguas lluvias",
    description: "Colectores, sumideros y redes de evacuación en urbanizaciones y vialidad.",
    image: {
      src: "/images/ilustraciones/app-aguaslluvias.svg",
      alt: "Sección técnica de calle con sumidero conectado a un colector de aguas lluvias",
    },
  },
  {
    index: "A·04",
    title: "Obras civiles y urbanización",
    messageKey: "obras civiles y urbanización",
    description: "Atraviesos, alcantarillas y redes para loteos, caminos y proyectos inmobiliarios.",
    image: {
      src: "/images/ilustraciones/app-urbanizacion.svg",
      alt: "Sección técnica de un terraplén vial con atravieso de tubería HDPE",
    },
  },
];

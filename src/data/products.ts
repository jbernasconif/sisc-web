/**
 * Catálogo centralizado.
 * Para agregar un producto, suma un objeto a `products`. Para reemplazar una
 * ilustración por una foto real, cambia `image.src` y pon `image.kind: "photo"`.
 *
 * No inventar marcas, modelos, stock, precios ni fichas técnicas.
 */

export type ProductId = "corrugada" | "lisa" | "geotextil" | "geomembrana" | "cubodren";
export type QuoteProductId = ProductId | "varios";
export type Unit = "metros" | "unidades" | "rollos";

export type Product = {
  id: ProductId;
  index: string;
  category: string;
  name: string;
  /** Etiqueta corta para el selector del cotizador. */
  shortName: string;
  /** Nombre como aparece en el mensaje de cotización. */
  quoteName: string;
  description: string;
  /** Línea de especificación visible en la tarjeta (opcional). */
  spec?: string;
  applications: string[];
  cta: string;
  featured: boolean;
  /** Las tuberías piden diámetro en el cotizador. */
  requiresDiameter: boolean;
  defaultUnit: Unit;
  /** Rango referencial; siempre sujeto a disponibilidad. */
  diameterRangeMm?: { min: number; max: number };
  /** Futuro: enlace a ficha técnica descargable (PDF). */
  datasheetUrl?: string;
  image: {
    src: string;
    alt: string;
    kind: "photo" | "illustration";
    width: number;
    height: number;
  };
};

export const products: Product[] = [
  {
    id: "corrugada",
    index: "01",
    category: "Tubería HDPE",
    name: "Tuberías HDPE Corrugadas",
    shortName: "HDPE corrugada",
    quoteName: "Tuberías HDPE corrugadas",
    description:
      "Tubería de polietileno de alta densidad con pared corrugada: liviana, de fácil instalación y pensada para conducir y evacuar aguas en obras civiles.",
    spec: "Ø 200 – 2400 mm, sujeto a disponibilidad",
    applications: ["Drenajes", "Aguas lluvias", "Canalizaciones", "Obras civiles"],
    cta: "Cotizar producto",
    featured: true,
    requiresDiameter: true,
    defaultUnit: "metros",
    diameterRangeMm: { min: 200, max: 2400 },
    image: {
      src: "/images/fotos/corrugada.jpg",
      alt: "Tuberías HDPE corrugadas negras de gran diámetro apiladas",
      kind: "photo",
      width: 1600,
      height: 688,
    },
  },
  {
    id: "lisa",
    index: "02",
    category: "Tubería HDPE",
    name: "Tuberías HDPE Lisas",
    shortName: "HDPE lisa",
    quoteName: "Tuberías HDPE lisas",
    description:
      "Tubería HDPE de pared lisa para proyectos de infraestructura y canalización, definida según las especificaciones técnicas de cada obra.",
    spec: "Diámetros y configuraciones según disponibilidad",
    applications: ["Canalización", "Infraestructura", "Según especificación"],
    cta: "Cotizar producto",
    featured: true,
    requiresDiameter: true,
    defaultUnit: "metros",
    image: {
      src: "/images/ilustraciones/ilus-lisa.svg",
      alt: "Ilustración técnica referencial de una tubería HDPE de pared lisa",
      kind: "illustration",
      width: 640,
      height: 360,
    },
  },
  {
    id: "geotextil",
    index: "03",
    category: "Geosintético",
    name: "Geotextiles",
    shortName: "Geotextil",
    quoteName: "Geotextiles",
    description:
      "Mantos para separación de suelos, filtración y drenaje, con desempeño según el tipo de producto.",
    applications: ["Separación", "Filtración", "Drenaje"],
    cta: "Consultar disponibilidad",
    featured: false,
    requiresDiameter: false,
    defaultUnit: "rollos",
    image: {
      src: "/images/ilustraciones/ilus-geotextil.svg",
      alt: "Ilustración técnica referencial de un rollo de geotextil",
      kind: "illustration",
      width: 640,
      height: 360,
    },
  },
  {
    id: "geomembrana",
    index: "04",
    category: "Geosintético",
    name: "Geomembranas",
    shortName: "Geomembrana",
    quoteName: "Geomembranas",
    description:
      "Láminas para impermeabilización y obras de contención, seleccionadas según los requerimientos del proyecto.",
    applications: ["Impermeabilización", "Contención"],
    cta: "Consultar disponibilidad",
    featured: false,
    requiresDiameter: false,
    defaultUnit: "rollos",
    image: {
      src: "/images/ilustraciones/ilus-geomembrana.svg",
      alt: "Ilustración técnica referencial de una geomembrana instalada en una obra de contención",
      kind: "illustration",
      width: 640,
      height: 360,
    },
  },
  {
    id: "cubodren",
    index: "05",
    category: "Drenaje modular",
    name: "Cubodren",
    shortName: "Cubodren",
    quoteName: "Cubodren (sistema modular de drenaje)",
    description:
      "Sistema modular de cubos drenantes para el manejo de aguas lluvias bajo superficie, configurado según el diseño de cada proyecto.",
    applications: ["Aguas lluvias", "Infiltración", "Drenaje"],
    cta: "Consultar disponibilidad",
    featured: false,
    requiresDiameter: false,
    defaultUnit: "unidades",
    image: {
      src: "/images/ilustraciones/ilus-cubodren.svg",
      alt: "Ilustración técnica referencial de módulos Cubodren para drenaje",
      kind: "illustration",
      width: 640,
      height: 360,
    },
  },
];

/** Opción extra del cotizador para pedidos combinados. */
export const variosOption = {
  id: "varios" as const,
  shortName: "Varios productos",
  quoteName: "Varios productos (detalle en comentarios)",
};

export function getQuoteOption(id: QuoteProductId | "") {
  if (!id) return null;
  if (id === "varios") return { ...variosOption, requiresDiameter: false, defaultUnit: undefined as Unit | undefined, diameterRangeMm: undefined };
  const p = products.find((x) => x.id === id);
  return p ?? null;
}

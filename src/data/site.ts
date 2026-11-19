/**
 * Datos generales de la empresa.
 * Edita aquí contacto, navegación y SEO: todo el sitio los toma de este archivo.
 *
 * Regla del proyecto: no agregar dirección, sucursales, certificaciones,
 * marcas, años de experiencia ni clientes que SISC no haya confirmado.
 */

export const company = {
  name: "SISC SpA",
  shortName: "SISC",
  tagline: "Materiales para Construcción",
  description: "Comercializadora de materiales para construcción e infraestructura.",
  coverage: "Chile",
} as const;

export const contact = {
  /** Número en formato internacional, sin "+" ni espacios (para wa.me). */
  whatsappNumber: "56996398081",
  whatsappDisplay: "+56 9 9639 8081",
  email: "contactowarmehaus@gmail.com",
} as const;

/**
 * URL pública del sitio (canonical, Open Graph, sitemap).
 * Define NEXT_PUBLIC_SITE_URL con tu dominio al publicar (ej: https://www.tudominio.cl).
 * En Vercel, si no la defines, se usa el dominio de producción del proyecto.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Aplicaciones", href: "#aplicaciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#cotizar" },
] as const;

/** Mensajes prellenados de WhatsApp por punto de contacto. */
export const whatsappMessages = {
  generic: "Hola, quisiera solicitar una cotización de materiales con SISC SpA.",
  coverage: "Hola, quisiera consultar el despacho de materiales a mi obra. La obra está en la comuna de: ",
  finalCta: "Hola, tengo un proyecto en desarrollo y quisiera hablar con un asesor de SISC SpA.",
  application: (aplicacion: string) =>
    `Hola, quisiera asesoría y cotización de materiales para un proyecto de ${aplicacion}.`,
} as const;

export const seo = {
  title: "Tuberías HDPE en Chile | SISC SpA — Materiales para Construcción",
  description:
    "Tuberías HDPE corrugadas y lisas desde 200 hasta 2400 mm, geotextiles, geomembranas y Cubodren. Despacho directo a obra en todo Chile. Cotiza por WhatsApp con SISC SpA.",
  keywords: [
    "tuberías HDPE Chile",
    "tubos HDPE corrugados",
    "tuberías HDPE lisas",
    "tubos corrugados 200 mm",
    "tuberías HDPE de gran diámetro",
    "tubos para drenaje",
    "tuberías aguas lluvias",
    "geotextiles Chile",
    "geomembranas Chile",
    "materiales para obras civiles",
  ],
} as const;

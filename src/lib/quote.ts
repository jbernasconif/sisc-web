import { getQuoteOption, type QuoteProductId, type Unit } from "@/data/products";

export type QuoteForm = {
  nombre: string;
  empresa: string;
  telefono: string;
  correo: string;
  producto: QuoteProductId | "";
  diametro: string;
  cantidad: string;
  unidad: Unit | "";
  ubicacion: string;
  comentarios: string;
};

export type QuoteField = keyof QuoteForm;
export type QuoteErrors = Partial<Record<QuoteField, string>>;

export const emptyQuote: QuoteForm = {
  nombre: "",
  empresa: "",
  telefono: "",
  correo: "",
  producto: "",
  diametro: "",
  cantidad: "",
  unidad: "",
  ubicacion: "",
  comentarios: "",
};

/** Orden en que se enfoca el primer campo con error. */
export const fieldOrder: QuoteField[] = ["nombre", "telefono", "correo", "producto", "diametro", "cantidad", "unidad", "ubicacion"];

const toNumber = (v: string) => Number(v.trim().replace(",", "."));

export function validateQuote(form: QuoteForm): QuoteErrors {
  const e: QuoteErrors = {};
  const option = getQuoteOption(form.producto);

  if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";

  const digits = form.telefono.replace(/\D/g, "");
  if (!form.telefono.trim()) e.telefono = "Ingresa un número de WhatsApp o teléfono.";
  else if (digits.length < 8) e.telefono = "Revisa el número: debe tener al menos 8 dígitos.";

  if (!form.correo.trim()) e.correo = "Ingresa tu correo electrónico.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.correo.trim()))
    e.correo = "El correo no parece válido. Ej: nombre@empresa.cl";

  if (!option) e.producto = "Selecciona el tipo de producto.";

  const d = form.diametro.trim();
  if (option?.requiresDiameter && !d) e.diametro = "Indica el diámetro requerido en mm.";
  else if (d && !(toNumber(d) > 0)) e.diametro = "Ingresa el diámetro en milímetros, solo con números.";

  const q = form.cantidad.trim();
  if (!q) e.cantidad = "Indica la cantidad requerida.";
  else if (!(toNumber(q) > 0)) e.cantidad = "La cantidad debe ser un número mayor a 0.";

  if (!form.unidad) e.unidad = "Selecciona la unidad de medida.";
  if (!form.ubicacion.trim()) e.ubicacion = "Indica la región o comuna de entrega.";

  return e;
}

export function unitLabel(qty: string, unit: Unit | "") {
  const one = toNumber(qty) === 1;
  const map: Record<Unit, string> = {
    metros: one ? "metro" : "metros",
    unidades: one ? "unidad" : "unidades",
    rollos: one ? "rollo" : "rollos",
  };
  return unit ? map[unit] : "";
}

/** Mensaje estructurado que se envía por WhatsApp o correo. */
export function buildQuoteMessage(form: QuoteForm) {
  const option = getQuoteOption(form.producto);
  const nombre = form.nombre.trim();
  const empresa = form.empresa.trim();
  const lines = [
    empresa ? `Hola, soy ${nombre} de ${empresa}.` : `Hola, soy ${nombre}.`,
    "",
    "Quisiera solicitar una cotización en SISC SpA.",
    "",
    `Producto: ${option?.quoteName ?? ""}`,
  ];
  if (form.diametro.trim()) lines.push(`Diámetro: ${form.diametro.trim()} mm`);
  lines.push(`Cantidad: ${form.cantidad.trim()} ${unitLabel(form.cantidad, form.unidad)}`);
  lines.push(`Lugar de entrega: ${form.ubicacion.trim()}`);
  if (form.comentarios.trim()) lines.push(`Comentarios: ${form.comentarios.trim()}`);
  lines.push("", "Mis datos de contacto son:", `Teléfono: ${form.telefono.trim()}`, `Correo: ${form.correo.trim()}`);
  return lines.join("\n");
}

export function buildQuoteSubject(form: QuoteForm) {
  const option = getQuoteOption(form.producto);
  const nombre = form.nombre.trim();
  return `Solicitud de cotización – ${option?.shortName ?? "Materiales"}${nombre ? ` – ${nombre}` : ""}`;
}

import { contact } from "@/data/site";

/** Enlace wa.me con mensaje prellenado. */
export function whatsappLink(text: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Enlace mailto con asunto y cuerpo. Abre el cliente de correo del visitante (no envía). */
export function mailtoLink(subject: string, body = "") {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${contact.email}?${params.join("&")}`;
}

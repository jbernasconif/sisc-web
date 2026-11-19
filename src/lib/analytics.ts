/**
 * Punto único para medir conversiones.
 * Hoy no envía datos a ningún servicio: si en el futuro se instala
 * Google Tag Manager / GA4 (window.dataLayer), los eventos empiezan a registrarse
 * sin tocar los componentes.
 */
type EventName = "quote_whatsapp" | "quote_email" | "whatsapp_click" | "email_click" | "product_select";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: EventName, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event, ...params });
}

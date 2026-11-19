"use client";

/** Año dinámico para el copyright (se actualiza en el navegador aunque el sitio sea estático). */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

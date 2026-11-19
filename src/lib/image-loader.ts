/**
 * Loader de imágenes para la exportación estática bajo un subdirectorio
 * (GitHub Pages: /sisc-web). Solo se activa cuando PAGES_BASE_PATH está definido.
 * Antepone el basePath a las rutas locales; no redimensiona (hosting estático).
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${base}${src}` : src;
}

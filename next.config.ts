import type { NextConfig } from "next";

/**
 * `npm run build:static` genera una versión 100 % estática en /out
 * (para subir por FTP a cualquier hosting: cPanel, Hostinger, Netlify, etc.).
 * `npm run build` funciona en modo normal (ideal para Vercel).
 * Funciona igual en Windows, macOS y Linux (no requiere variables de entorno).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1" || process.env.npm_lifecycle_event === "build:static";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    // La exportación estática no puede usar el optimizador de imágenes de Next.
    unoptimized: isStaticExport,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

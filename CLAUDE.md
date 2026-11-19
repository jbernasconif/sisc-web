@AGENTS.md

# SISC SpA — sitio web comercial

Sitio de una sola página para captar cotizaciones B2B de SISC SpA, empresa chilena que
comercializa tuberías HDPE corrugadas y lisas, geotextiles, geomembranas y Cubodren.
La conversión principal es **"Cotizar por WhatsApp"** (+56 9 9639 8081) y el formulario del cotizador.
Idioma: español de Chile, tono comercial, profesional y directo.

## Comandos

- `npm run dev` — desarrollo en http://localhost:3000
- `npm run build` — build para Vercel
- `npm run build:static` — exportación estática en `out/` (hosting por FTP)
- `npm run lint` · `npx tsc --noEmit`

## Estructura

- `src/data/` — contenido centralizado (site, products, applications). Editar textos aquí, no en los componentes.
- `src/lib/quote.ts` — validación y armado del mensaje de cotización. `src/lib/contact.ts` — enlaces wa.me y mailto.
- `src/lib/analytics.ts` — `trackEvent()` empuja a `window.dataLayer` si existe (GTM/GA4 a futuro).
- `src/components/sections/` — una sección por archivo, en el orden de `src/app/page.tsx`.
- `src/components/quote/` — estado compartido del cotizador (`QuoteProvider`); `QuoteLink` preselecciona un producto.
- `public/images/fotos/` — fotos reales de SISC (marca de agua del celular ya recortada).
- `public/images/ilustraciones/` — dibujos técnicos referenciales (reemplazables por fotos reales).

## Reglas de contenido (obligatorias)

- NO inventar: dirección, sucursales, certificaciones, marcas representadas, años de experiencia,
  clientes, proyectos realizados, testimonios, precios, stock, plazos de entrega ni fichas técnicas.
- No afirmar que todos los diámetros (200–2400 mm) están disponibles para todos los tipos de tubería.
- No confundir HDPE con PVC u otros materiales.
- Los indicadores (200–2400 mm, Todo Chile, HDPE) no son certificaciones ni garantía de inventario.
- La venta se orienta a **solicitar cotización**. Sin carrito ni pagos en esta versión.
- El correo abre `mailto:`; nunca mostrar "enviado" si solo se abrió el cliente de correo.

## Reglas de diseño

- Dirección visual "Precisión industrial": tokens en `@theme` de `globals.css`.
- Petróleo `#102B3F` institucional; botones con texto blanco en `accion-aa` `#0773AE`
  (el `#087FC1` original no alcanza contraste AA con texto blanco a 16 px; se usa en logo y acentos).
- Tipografías self-hosted: Archivo Variable (títulos condensados con `[font-stretch:78%–84%]`) y JetBrains Mono (etiquetas técnicas).
- Sin degradados decorativos, emojis ni íconos genéricos repetidos. Animaciones discretas y respetando `prefers-reduced-motion`.
- Accesibilidad: `<button>`/`<a>`/`<label>` reales, contraste 4.5:1, objetivos táctiles ≥ 44 px.

## Hoja de ruta prevista

Fichas técnicas descargables (`datasheetUrl` en `Product`), catálogo por categorías, filtro de diámetros,
panel de administración de productos, formulario conectado a correo/CRM/base de datos (requiere despliegue
con servidor, no `build:static`), medición de conversiones vía `trackEvent`.

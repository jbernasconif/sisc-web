# SISC SpA — Sitio web comercial

Sitio de captación de cotizaciones para SISC SpA (tuberías HDPE y productos complementarios).
Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Lucide · Motion.

---

## 1. Ponerlo a correr en tu computador

Requisito: **Node.js 20.9 o superior** (descárgalo en nodejs.org, versión LTS).

```bash
cd sisc-web
npm install
npm run dev
```

Abre http://localhost:3000.

## 2. Abrirlo en Claude Code

```bash
cd sisc-web
claude
```

Claude Code lee `CLAUDE.md` automáticamente (reglas del proyecto, estructura y qué no inventar).
Ejemplos de lo que puedes pedirle:

- "Reemplaza la ilustración de geotextiles por esta foto: ./fotos/geotextil.jpg"
- "Inicializa git y sube este proyecto a un repositorio nuevo de GitHub llamado sisc-web"
- "Despliégalo en Vercel"
- "Agrega Google Analytics 4 con el ID G-XXXX"

## 3. Publicarlo

### Opción A — Vercel (recomendada, gratis para empezar)

1. Sube el proyecto a GitHub (puedes pedírselo a Claude Code, o usar GitHub Desktop).
2. Entra a vercel.com → **Add New… → Project** → importa el repositorio → **Deploy**.
3. En **Settings → Environment Variables** agrega
   `NEXT_PUBLIC_SITE_URL = https://www.tudominio.cl` (tu dominio real) y vuelve a desplegar.
4. En **Settings → Domains** conecta tu dominio `.cl` (Vercel te indica los registros DNS
   que debes configurar en NIC Chile o donde tengas el dominio).

Cada cambio que subas a GitHub se publica solo.

### Opción B — Hosting tradicional (cPanel, Hostinger, FTP)

```bash
npm run build:static
```

Sube **el contenido** de la carpeta `out/` a `public_html/` (o la carpeta raíz de tu hosting).
Antes, crea un archivo `.env.production` con `NEXT_PUBLIC_SITE_URL=https://www.tudominio.cl`.

## 4. Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| WhatsApp, correo, menú, SEO, mensajes prellenados | `src/data/site.ts` |
| Productos (textos, aplicaciones, imágenes) | `src/data/products.ts` |
| Aplicaciones | `src/data/applications.ts` |
| Colores y tipografías | `src/app/globals.css` (bloque `@theme`) |
| Logotipo provisional | `src/components/ui/Logo.tsx` y `src/app/icon.svg` |
| Lógica del cotizador (validación y mensaje) | `src/lib/quote.ts` |
| Fotos e ilustraciones | `public/images/` |

## 5. Pendientes antes de publicar

- [ ] Definir el dominio y configurar `NEXT_PUBLIC_SITE_URL`.
- [ ] Fotos reales de: tubería lisa, geotextil, geomembrana, Cubodren y aplicaciones
      (hoy son ilustraciones técnicas referenciales).
- [ ] Logotipo oficial (el actual es una propuesta provisional).

## Cómo funciona el cotizador

No hay servidor ni base de datos: el formulario valida los campos y arma un mensaje
estructurado que se abre en WhatsApp (`wa.me`) o en el correo del visitante (`mailto`).
El visitante es quien presiona **Enviar**; el sitio nunca simula que algo fue enviado.

Para conectar el formulario a un correo real, CRM o base de datos, el punto de entrada es
`src/components/quote/QuoteForm.tsx` (requiere usar la Opción A de despliegue).

import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { company, contact, seo, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: company.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: `${siteUrl}/images/og.jpg`, width: 1200, height: 630, alt: "Tuberías HDPE para proyectos que perduran — SISC SpA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${siteUrl}/images/og.jpg`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102B3F",
};

/** Datos estructurados: solo información confirmada por la empresa. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: contact.email,
  telephone: contact.whatsappDisplay.replace(/\s/g, ""),
  areaServed: { "@type": "Country", name: "Chile" },
  description: company.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CL">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

import Image from "next/image";
import { ArrowRight, Ruler } from "lucide-react";
import { products, type Product } from "@/data/products";
import { btn, Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { QuoteLink } from "@/components/quote/QuoteLink";
import { Reveal } from "@/components/ui/Reveal";

function Chips({ items, small = false }: { items: string[]; small?: boolean }) {
  return (
    <ul aria-label="Aplicaciones" className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-[3px] border border-[#E1E8ED] bg-claro font-medium text-grafito ${small ? "px-2.5 py-1.5 text-[13px]" : "px-[11px] py-[7px] text-[13.5px]"}`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProductCard({ product, featured }: { product: Product; featured: boolean }) {
  const isPhoto = product.image.kind === "photo";
  return (
    <Reveal
      as="article"
      className="group flex flex-col overflow-hidden rounded-md border border-linea bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-30px_rgba(16,43,63,0.45)]"
    >
      <div className={`blueprint relative overflow-hidden bg-fondo-ilus ${featured ? "h-[clamp(220px,24vw,310px)]" : "h-[220px]"}`}>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 1024px) 100vw, 400px"}
          className={`transition-transform duration-700 group-hover:scale-[1.035] ${isPhoto ? "object-cover object-[center_40%]" : "object-contain"}`}
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "gap-4 p-[clamp(24px,2.6vw,34px)]" : "gap-3.5 px-[26px] pt-[26px] pb-7"}`}>
        <p className="m-0 flex gap-3 font-mono text-[11.5px] font-medium tracking-[0.14em] text-industrial uppercase">
          <span>{product.index}</span>
          <span className="text-tenue">{product.category}</span>
        </p>
        <h3
          className={`m-0 font-extrabold text-petroleo [font-stretch:84%] ${featured ? "text-[clamp(25px,2.3vw,30px)] leading-[1.08]" : "text-2xl leading-[1.1]"}`}
        >
          {product.name}
        </h3>
        <p className={`m-0 text-pretty leading-relaxed text-texto ${featured ? "text-base" : "text-[15.5px]"}`}>{product.description}</p>
        {featured && product.spec && (
          <p className="m-0 flex items-center gap-2.5 rounded border border-dashed border-[#B9CAD5] px-3.5 py-[11px] font-mono text-[12.5px] text-grafito">
            <Ruler size={17} className="shrink-0 text-industrial" aria-hidden="true" />
            {product.spec}
          </p>
        )}
        {featured ? (
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-tenue uppercase">Aplicaciones</span>
            <Chips items={product.applications} />
          </div>
        ) : (
          <Chips items={product.applications} small />
        )}
        <QuoteLink
          product={product.id}
          className={`${btn.base} mt-auto justify-between px-5 ${featured ? `${btn.dark} h-[52px] text-base` : `${btn.outlineDark} h-[50px] text-[15.5px]`}`}
        >
          {product.cta}
          <ArrowRight size={18} aria-hidden="true" />
        </QuoteLink>
      </div>
    </Reveal>
  );
}

export function Products() {
  const featured = products.filter((p) => p.featured);
  const others = products.filter((p) => !p.featured);
  return (
    <section id="productos" aria-labelledby="prod-title" className="bg-white pt-[clamp(72px,9vw,120px)] pb-[clamp(80px,9vw,128px)]">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div className="flex max-w-[720px] flex-[1_1_520px] flex-col gap-[18px]">
            <Eyebrow>Catálogo</Eyebrow>
            <SectionTitle id="prod-title">Soluciones para cada proyecto</SectionTitle>
            <p className="m-0 text-pretty text-lg leading-relaxed text-texto">
              Materiales diseñados para responder a las exigencias de la construcción y la infraestructura moderna.
            </p>
          </div>
          <QuoteLink product="varios" className={`${btn.base} ${btn.outlineDark} ${btn.md}`}>
            Cotizar varios productos
            <ArrowRight size={18} aria-hidden="true" />
          </QuoteLink>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))] gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} featured />
          ))}
        </div>
        <div className="-mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(310px,100%),1fr))] gap-6">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} featured={false} />
          ))}
        </div>
        <p className="-mt-4 mb-0 text-[13px] text-tenue">
          Ilustraciones técnicas referenciales. Medidas, modelos y disponibilidad se confirman en cada cotización.
        </p>
      </Container>
    </section>
  );
}

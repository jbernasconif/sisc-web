import { company, contact, nav, whatsappMessages } from "@/data/site";
import { products } from "@/data/products";
import { whatsappLink } from "@/lib/contact";
import { Logo } from "@/components/ui/Logo";
import { btn, Container } from "@/components/ui/primitives";
import { QuoteLink } from "@/components/quote/QuoteLink";
import { CurrentYear } from "./CurrentYear";

const heading = "mb-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-hielo";
const link = "flex min-h-[34px] items-center text-[15px] text-white/75 no-underline transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-noche text-white/75">
      <Container className="flex flex-col gap-14 pt-[72px] pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-10">
          <div className="flex flex-col gap-[18px]">
            <a href="#inicio" aria-label="SISC SpA, ir al inicio" className="no-underline">
              <Logo label={company.name} />
            </a>
            <p className="m-0 max-w-[280px] text-[15px] leading-relaxed">{company.description}</p>
          </div>

          <nav aria-label="Productos" className="flex flex-col gap-1">
            <span className={heading}>Productos</span>
            {products.map((p) => (
              <QuoteLink key={p.id} product={p.id} className={link}>
                {p.name}
              </QuoteLink>
            ))}
          </nav>

          <nav aria-label="Navegación" className="flex flex-col gap-1">
            <span className={heading}>Navegación</span>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={link}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-1">
            <span className={heading}>Contacto</span>
            <a href={whatsappLink(whatsappMessages.generic)} target="_blank" rel="noopener noreferrer" className={`${link} gap-2.5`}>
              <span className="text-[13px] text-white/55">WhatsApp</span>
              {contact.whatsappDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className={`${link} gap-2.5 break-all`}>
              <span className="text-[13px] text-white/55">Email</span>
              {contact.email}
            </a>
            <span className="flex min-h-[34px] items-center gap-2.5 text-[15px]">
              <span className="text-[13px] text-white/55">Cobertura</span>
              {company.coverage}
            </span>
            <a href="#cotizar" className={`${btn.base} ${btn.primary} mt-3.5 h-[46px] self-start px-[18px] text-[15px]`}>
              Solicitar cotización
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13.5px] text-white/60">
          <span>
            © <CurrentYear /> {company.name}. Todos los derechos reservados.
          </span>
          <span>Precios, stock y plazos sujetos a cotización.</span>
        </div>
      </Container>
    </footer>
  );
}

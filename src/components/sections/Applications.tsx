import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { applications } from "@/data/applications";
import { whatsappMessages } from "@/data/site";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Applications() {
  return (
    <section id="aplicaciones" aria-labelledby="apps-title" className="bg-white py-[clamp(80px,9vw,128px)]">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex max-w-[760px] flex-col gap-[18px]">
          <Eyebrow>Aplicaciones</Eyebrow>
          <SectionTitle id="apps-title">Soluciones para múltiples industrias</SectionTitle>
          <p className="m-0 text-pretty text-lg leading-relaxed text-texto">
            Elige el escenario de tu proyecto y conversa directo con nuestro equipo para definir los materiales.
          </p>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-5">
          {applications.map((app) => (
            <Reveal
              as="article"
              key={app.index}
              className="group flex flex-col overflow-hidden rounded-md bg-petroleo text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(8,30,46,0.7)]"
            >
              <div className="gridlines border-b border-white/[0.08]">
                <Image src={app.image.src} alt={app.image.alt} width={600} height={380} className="block h-auto w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-[26px] pt-6 pb-[26px]">
                <span className="font-mono text-[11.5px] font-medium tracking-[0.14em] text-hielo">{app.index}</span>
                <h3 className="m-0 text-balance text-[22px] leading-[1.12] font-bold text-white [font-stretch:86%]">{app.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-white/75">{app.description}</p>
                <WhatsAppLink
                  message={whatsappMessages.application(app.messageKey)}
                  location={`aplicacion-${app.index}`}
                  className="mt-auto inline-flex min-h-11 items-center gap-2.5 pt-2.5 text-[15.5px] font-semibold text-hielo no-underline"
                >
                  Consultar por esta aplicación
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </WhatsAppLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

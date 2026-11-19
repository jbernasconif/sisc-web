import Image from "next/image";
import { Check, MapPin, MessageCircle, Truck } from "lucide-react";
import { whatsappMessages } from "@/data/site";
import { btn, Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const points = [
  { icon: Truck, text: "Despacho directo a obra, de norte a sur." },
  { icon: MapPin, text: "Coordinación según ubicación, volumen y acceso a la obra." },
  { icon: Check, text: "Disponibilidad y plazos se confirman en cada cotización." },
];

export function Coverage() {
  return (
    <section
      id="cobertura"
      aria-labelledby="cob-title"
      className="gridlines relative overflow-hidden bg-petroleo py-[clamp(80px,9vw,128px)] text-white"
    >
      <Container className="flex flex-wrap items-center gap-[clamp(40px,6vw,72px)]">
        <Reveal className="flex max-w-[520px] flex-[1_1_400px] flex-col gap-[22px]">
          <Eyebrow dark>Cobertura nacional</Eyebrow>
          <SectionTitle id="cob-title" dark>
            Donde esté tu proyecto, llegamos a tu obra
          </SectionTitle>
          <p className="m-0 text-pretty text-lg leading-relaxed text-white/80">
            En SISC SpA coordinamos el despacho de materiales para proyectos de construcción e infraestructura a lo largo de Chile.
          </p>
          <ul className="mt-1 mb-0 flex list-none flex-col gap-3.5 p-0">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3.5 text-base leading-normal text-white/90">
                <Icon size={22} strokeWidth={1.8} className="mt-px shrink-0 text-hielo" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-2.5">
            <WhatsAppLink message={whatsappMessages.coverage} location="cobertura" className={`${btn.base} ${btn.primary} ${btn.lg}`}>
              <MessageCircle size={20} aria-hidden="true" />
              Consultar despacho a mi obra
            </WhatsAppLink>
          </div>
        </Reveal>

        <Reveal className="flex flex-[1_1_520px] flex-wrap items-center justify-center gap-8">
          <figure className="m-0 flex max-w-[380px] flex-[1_1_260px] flex-col gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/[0.12]">
              <Image
                src="/images/fotos/despacho.jpg"
                alt="Camión cargado con tuberías HDPE corrugadas para despacho a obra"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-[38%_50%]"
              />
            </div>
            <figcaption className="font-mono text-[11px] tracking-[0.12em] text-white/70 uppercase">Despacho de tuberías HDPE corrugadas</figcaption>
          </figure>
          <Image
            src="/images/ilustraciones/mapa-chile.svg"
            alt="Mapa estilizado de Chile con regiones de referencia, desde Arica y Parinacota hasta Magallanes"
            width={360}
            height={900}
            className="block h-auto w-[clamp(200px,21vw,280px)]"
          />
        </Reveal>
      </Container>
    </section>
  );
}

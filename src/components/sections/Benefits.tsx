import Image from "next/image";
import { Hourglass, Split } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { LightPipeIcon, PressureIcon } from "@/components/ui/TechIcons";
import { Reveal } from "@/components/ui/Reveal";

const benefits: { title: string; text: string; icon: ReactNode }[] = [
  { title: "Alta resistencia", text: "Material apto para aplicaciones exigentes, según especificaciones del producto.", icon: <PressureIcon /> },
  {
    title: "Larga vida útil",
    text: "Soluciones duraderas que ayudan a reducir las necesidades de mantenimiento.",
    icon: <Hourglass size={28} strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    title: "Instalación eficiente",
    text: "Su menor peso relativo frente a alternativas tradicionales puede facilitar transporte y manipulación.",
    icon: <LightPipeIcon />,
  },
  {
    title: "Versatilidad",
    text: "Alternativas para drenajes, canalizaciones y evacuación de aguas lluvias.",
    icon: <Split size={28} strokeWidth={1.6} aria-hidden="true" />,
  },
];

export function Benefits() {
  return (
    <section id="ventajas" aria-labelledby="vent-title" className="bg-claro py-[clamp(80px,9vw,128px)]">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(470px,100%),1fr))] items-center gap-[clamp(40px,6vw,80px)]">
        <Reveal className="flex flex-col gap-[22px]">
          <Eyebrow>Por qué HDPE</Eyebrow>
          <SectionTitle id="vent-title">Resistencia y eficiencia para tu obra</SectionTitle>
          <p className="m-0 max-w-[520px] text-pretty text-[17.5px] leading-relaxed text-texto">
            El polietileno de alta densidad es una alternativa versátil para drenaje, canalización y evacuación de aguas lluvias en obras
            de todo tamaño.
          </p>
          <figure className="relative mt-2.5 mb-0 aspect-[16/10] overflow-hidden rounded-md bg-petroleo">
            <Image
              src="/images/fotos/ventajas.jpg"
              alt="Interior de una tubería HDPE corrugada de gran diámetro"
              fill
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover object-[60%_50%]"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-[3px] bg-petroleo/90 px-3 py-2 font-mono text-[11px] tracking-[0.12em] text-white uppercase">
              Tubería HDPE corrugada · gran diámetro
            </figcaption>
          </figure>
        </Reveal>
        <Reveal as="ul" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4 p-0">
          {benefits.map((b, i) => (
            <li key={b.title} className="flex flex-col gap-4 rounded-md border border-linea bg-white px-7 py-[30px]">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded bg-[#E6F1F8] text-industrial">{b.icon}</span>
                <span className="font-mono text-xs text-tenue">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="m-0 text-[21px] font-bold text-petroleo [font-stretch:88%]">{b.title}</h3>
              <p className="m-0 text-[15.5px] leading-relaxed text-texto">{b.text}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

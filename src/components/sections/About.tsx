import Image from "next/image";
import { ClipboardCheck, FileText, Truck } from "lucide-react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

/** Sección institucional. No agregar trayectoria, clientes ni certificaciones sin confirmar. */
const points = [
  { icon: ClipboardCheck, title: "Atención por proyecto", text: "Revisamos cada requerimiento según especificación, cantidad y lugar de entrega." },
  { icon: FileText, title: "Cotización a la medida", text: "Propuestas según producto, medida, volumen y condiciones de despacho." },
  { icon: Truck, title: "Despacho coordinado", text: "Entrega directa en obra en todo Chile, según disponibilidad logística." },
];

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nos-title" className="bg-white py-[clamp(80px,9vw,128px)]">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-center gap-[clamp(40px,6vw,80px)]">
        <Reveal as="figure" className="relative m-0 p-3.5">
          <div aria-hidden="true" className="absolute top-0 left-0 h-11 w-11 border-t-2 border-l-2 border-accion" />
          <div aria-hidden="true" className="absolute right-0 bottom-0 h-11 w-11 border-r-2 border-b-2 border-accion" />
          <div className="relative aspect-[5/4] overflow-hidden rounded bg-petroleo">
            <Image
              src="/images/fotos/nosotros.jpg"
              alt="Acopio de tuberías HDPE corrugadas de gran diámetro"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-[22px]">
          <Eyebrow>Nosotros</Eyebrow>
          <SectionTitle id="nos-title">Tu aliado en materiales para infraestructura</SectionTitle>
          <p className="m-0 text-pretty text-[17.5px] leading-[1.65] text-texto">
            SISC SpA es una empresa chilena dedicada a la comercialización de materiales para construcción. Nuestro foco es facilitar el
            abastecimiento de cada proyecto con tuberías HDPE corrugadas y lisas, y productos complementarios como geotextiles,
            geomembranas y sistemas modulares de drenaje.
          </p>
          <ul className="mt-1.5 mb-0 flex list-none flex-col border-t border-[#E6ECF0] p-0">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-[18px] border-b border-[#E6ECF0] py-[18px]">
                <Icon size={24} strokeWidth={1.7} className="mt-0.5 shrink-0 text-industrial" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <strong className="text-[17px] font-bold text-petroleo">{title}</strong>
                  <span className="text-[15.5px] leading-normal text-texto">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

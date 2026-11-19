import { Mail, MessageCircle } from "lucide-react";
import { contact, whatsappMessages } from "@/data/site";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/primitives";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const steps = [
  { n: "01", title: "Elige el producto", text: "Tuberías HDPE, geosintéticos o drenaje modular." },
  { n: "02", title: "Indica medidas y cantidad", text: "Diámetro en mm, metros, unidades o rollos." },
  { n: "03", title: "Envía tu solicitud", text: "Te respondemos con una propuesta para tu obra." },
];

export function QuoteSection() {
  return (
    <section id="cotizar" aria-labelledby="cot-title" className="bg-claro py-[clamp(80px,9vw,128px)]">
      <Container className="flex flex-wrap items-start gap-[clamp(36px,5vw,64px)]">
        <Reveal className="flex max-w-[430px] flex-[1_1_320px] flex-col gap-[22px]">
          <Eyebrow>Cotizador</Eyebrow>
          <SectionTitle id="cot-title">Cotiza los materiales de tu proyecto</SectionTitle>
          <p className="m-0 text-pretty text-[17px] leading-relaxed text-texto">
            Completa los datos y genera tu solicitud con toda la información ordenada para cotizar. Tú eliges si la envías por WhatsApp o
            por correo.
          </p>
          <ol className="mt-2 mb-0 flex list-none flex-col gap-[22px] p-0">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-[18px]">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-petroleo font-mono text-[13px] font-semibold text-white">
                  {s.n}
                </span>
                <span className="flex flex-col gap-1 pt-0.5">
                  <strong className="text-[17px] font-bold text-petroleo">{s.title}</strong>
                  <span className="text-[15px] leading-normal text-texto">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-2 flex flex-col gap-3 rounded-md border border-linea bg-white px-6 py-[22px]">
            <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-tenue uppercase">¿Prefieres escribirnos directo?</span>
            <WhatsAppLink
              message={whatsappMessages.generic}
              location="cotizador-directo"
              className="flex min-h-10 items-center gap-3 text-[17px] font-bold text-petroleo no-underline"
            >
              <MessageCircle size={20} className="text-accion-aa" aria-hidden="true" />
              {contact.whatsappDisplay}
            </WhatsAppLink>
            <a href={`mailto:${contact.email}`} className="flex min-h-10 items-center gap-3 text-[15.5px] font-semibold break-all text-petroleo no-underline">
              <Mail size={20} className="shrink-0 text-accion-aa" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </Reveal>
        <QuoteForm />
      </Container>
    </section>
  );
}

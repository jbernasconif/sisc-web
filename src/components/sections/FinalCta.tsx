import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { whatsappMessages } from "@/data/site";
import { mailtoLink } from "@/lib/contact";
import { btn } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const mailBody =
  "Hola equipo SISC,\n\nTengo un proyecto en desarrollo y quisiera cotizar materiales.\n\nNombre:\nEmpresa:\nTeléfono:\nMateriales requeridos:\nLugar de entrega:\n\nSaludos.";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-petroleo text-white">
      <Image src="/images/fotos/cta.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_60%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-petroleo/[0.86]" />
      <Reveal className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-[22px] px-[clamp(20px,4vw,40px)] py-[clamp(88px,10vw,136px)] text-center">
        <h2
          id="cta-title"
          className="m-0 max-w-[820px] text-balance text-[clamp(36px,5vw,66px)] leading-none font-[850] tracking-[-0.005em] text-white [font-stretch:78%]"
        >
          ¿Tienes un proyecto en desarrollo?
        </h2>
        <p className="m-0 max-w-[600px] text-[clamp(17px,1.5vw,20px)] leading-relaxed text-white/85">
          Cuéntanos qué materiales necesitas y solicita una cotización para tu obra.
        </p>
        <div className="mt-2.5 flex flex-wrap justify-center gap-3">
          <WhatsAppLink message={whatsappMessages.finalCta} location="cta-final" className={`${btn.base} ${btn.primary} ${btn.lg}`}>
            <MessageCircle size={20} aria-hidden="true" />
            Hablar con un asesor por WhatsApp
          </WhatsAppLink>
          <a href={mailtoLink("Consulta comercial – SISC SpA", mailBody)} className={`${btn.base} ${btn.outlineLight} ${btn.lg}`}>
            <Mail size={20} aria-hidden="true" />
            Enviar correo
          </a>
        </div>
      </Reveal>
    </section>
  );
}

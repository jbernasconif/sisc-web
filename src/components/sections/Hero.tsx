import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { whatsappMessages } from "@/data/site";
import { btn } from "@/components/ui/primitives";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[clamp(640px,54vw,780px)] items-center overflow-hidden bg-petroleo"
    >
      <Image
        src="/images/fotos/hero.jpg"
        alt="Tuberías HDPE corrugadas de gran diámetro acopiadas en un patio industrial"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[70%_55%]"
      />
      <div aria-hidden="true" className="hero-overlay absolute inset-0 opacity-[0.94]" />

      {/* Cota técnica decorativa (solo escritorio) */}
      <div
        aria-hidden="true"
        className="absolute top-[120px] right-[clamp(28px,4vw,64px)] bottom-[170px] hidden items-center gap-3.5 text-white/80 md:flex"
      >
        <div className="relative h-full w-4 border-y border-white/60">
          <div className="absolute inset-y-0 left-[7.5px] w-px bg-white/45" />
        </div>
        <span className="rotate-180 font-mono text-xs font-medium tracking-[0.22em] [writing-mode:vertical-rl]">Ø 200 — 2400 MM</span>
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-[clamp(20px,4vw,40px)] pt-24 pb-[168px]">
        <div className="flex max-w-[760px] flex-col gap-[26px]">
          <p className="m-0 flex animate-rise items-center gap-3 font-mono text-[12.5px] font-medium uppercase tracking-[0.16em] text-hielo">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Tuberías HDPE corrugadas y lisas
          </p>
          <h1
            id="hero-title"
            className="m-0 animate-rise text-balance text-[clamp(42px,6.4vw,92px)] leading-[0.94] font-[850] tracking-[-0.005em] text-white uppercase [animation-delay:80ms] [font-stretch:78%]"
          >
            Tuberías HDPE para proyectos <span className="text-hielo">que perduran</span>
          </h1>
          <p className="m-0 max-w-[580px] animate-rise text-pretty text-[clamp(17px,1.5vw,20px)] leading-relaxed text-white/85 [animation-delay:180ms]">
            Soluciones en tuberías corrugadas y lisas, desde 200 hasta 2400 mm. Alta resistencia, fácil instalación y despacho
            directo a obra en todo Chile.
          </p>
          <div className="mt-1.5 flex animate-rise flex-wrap gap-3 [animation-delay:280ms]">
            <WhatsAppLink message={whatsappMessages.generic} location="hero" className={`${btn.base} ${btn.primary} ${btn.lg}`}>
              <MessageCircle size={20} aria-hidden="true" />
              Cotizar por WhatsApp
            </WhatsAppLink>
            <a href="#productos" className={`${btn.base} ${btn.outlineLight} ${btn.lg}`}>
              Explorar productos
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <p className="absolute right-[clamp(28px,4vw,64px)] bottom-[104px] m-0 hidden font-mono text-[11px] tracking-[0.12em] text-white/70 uppercase md:block">
        Tuberías HDPE corrugadas de gran diámetro
      </p>
    </section>
  );
}

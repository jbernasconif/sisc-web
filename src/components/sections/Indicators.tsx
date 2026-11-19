import { Container } from "@/components/ui/primitives";

const items = [
  { label: "01 · Rango de diámetros", value: "200–2400", unit: "mm" },
  { label: "02 · Despacho a obra", value: "Todo Chile" },
  { label: "03 · Alta resistencia y durabilidad", value: "HDPE" },
];

/** Indicadores comerciales (no son certificaciones ni garantía de inventario). */
export function Indicators() {
  return (
    <section aria-label="Indicadores comerciales" className="relative z-[3] bg-white">
      <Container>
        <div className="-mt-[76px] grid animate-rise grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-px overflow-hidden rounded-md border border-linea bg-linea shadow-[0_30px_60px_-34px_rgba(16,43,63,0.5)] [animation-delay:400ms]">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col gap-2.5 bg-white px-[34px] py-[30px]">
              <span className="font-mono text-[11.5px] font-medium tracking-[0.14em] text-tenue uppercase">{it.label}</span>
              <span className="text-[clamp(34px,3.4vw,44px)] leading-none font-extrabold text-petroleo [font-stretch:80%]">
                {it.value} {it.unit && <span className="text-[0.5em] font-bold text-industrial">{it.unit}</span>}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3.5 mb-0 text-right text-[13px] text-tenue">
          Diámetros, stock y despacho sujetos a disponibilidad y coordinación comercial.
        </p>
      </Container>
    </section>
  );
}

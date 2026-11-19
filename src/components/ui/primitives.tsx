import type { ReactNode } from "react";

/** Clases de botones reutilizables (petróleo + un color de acción). */
export const btn = {
  base: "inline-flex items-center justify-center gap-3 rounded font-semibold no-underline transition duration-200 hover:-translate-y-px active:translate-y-0",
  primary: "bg-accion-aa text-white hover:shadow-[0_12px_26px_-14px_rgba(7,115,174,0.75)]",
  dark: "bg-petroleo text-white hover:shadow-[0_12px_26px_-14px_rgba(16,43,63,0.7)]",
  outlineDark: "border-[1.5px] border-petroleo text-petroleo hover:bg-[#EAF0F4]",
  outlineLight: "border-[1.5px] border-white/55 text-white hover:bg-white/10",
  lg: "h-14 px-6 text-[16.5px]",
  md: "h-[50px] px-5 text-[15.5px]",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-[clamp(20px,4vw,40px)] ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`m-0 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.16em] ${
        dark ? "text-hielo" : "text-industrial"
      }`}
    >
      <span aria-hidden="true" className="h-px w-7 bg-current" />
      {children}
    </p>
  );
}

export function SectionTitle({ id, children, dark = false }: { id: string; children: ReactNode; dark?: boolean }) {
  return (
    <h2
      id={id}
      className={`m-0 text-balance text-[clamp(34px,4.4vw,56px)] leading-[1.02] font-extrabold tracking-[-0.01em] [font-stretch:80%] ${
        dark ? "text-white" : "text-petroleo"
      }`}
    >
      {children}
    </h2>
  );
}

export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] ${className}`}>{children}</span>
  );
}

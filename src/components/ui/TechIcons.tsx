import type { SVGProps } from "react";

/** Íconos técnicos propios (complementan Lucide). Trazo 1.6 px, color heredado. */
const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Sección de tubería bajo carga. */
export function PressureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
      <path d="m10.5 4 1.5 1.5L13.5 4M10.5 20l1.5-1.5 1.5 1.5M4 10.5 5.5 12 4 13.5M20 10.5 18.5 12l1.5 1.5" />
    </svg>
  );
}

/** Tubería liviana (se levanta con facilidad). */
export function LightPipeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13h12" />
      <path d="M5 21h12" />
      <ellipse cx="5" cy="17" rx="1.8" ry="4" />
      <path d="M17 13a1.8 4 0 0 1 0 8" />
      <path d="M12 9V2" />
      <path d="m9 5 3-3 3 3" />
    </svg>
  );
}

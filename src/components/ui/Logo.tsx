import { company } from "@/data/site";

/**
 * Logotipo PROVISIONAL de SISC (ícono "sección de tubería" + wordmark).
 * Cuando exista el logo oficial, reemplaza este componente por un <Image>
 * con el archivo de marca: todo el sitio lo usa desde aquí.
 */
export function LogoMark({ size = 40, inverted = false }: { size?: number; inverted?: boolean }) {
  const bg = inverted ? "#FFFFFF" : "#087FC1";
  const fg = inverted ? "#102B3F" : "#FFFFFF";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
      <rect x="0.5" y="0.5" width="39" height="39" rx="3" fill={bg} />
      <path d="M31 20 A11 11 0 1 1 20 9" fill="none" stroke={fg} strokeWidth="3.4" />
      <path d="M26 20 A6 6 0 1 1 20 14" fill="none" stroke={fg} strokeWidth="1.8" />
      <rect x="25" y="9" width="6" height="6" fill={fg} />
    </svg>
  );
}

export function Logo({ withTagline = true, label = company.shortName }: { withTagline?: boolean; label?: string }) {
  return (
    <span className="flex items-center gap-3 text-white">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[25px] font-[850] tracking-[0.08em] [font-stretch:82%]">{label}</span>
        {withTagline && (
          <span className="mt-[5px] font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/70 max-sm:hidden">
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  );
}

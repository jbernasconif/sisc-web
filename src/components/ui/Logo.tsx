import Image from "next/image";

/**
 * Logo oficial de SISC (public/images/logo-sisc.png, PNG transparente con texto azul oscuro).
 * Se muestra sobre una placa blanca para mantener contraste en los fondos oscuros del sitio.
 * `Logo` se usa en cabecera y pie; `label` se conserva por compatibilidad (texto alternativo).
 */
export function Logo({ label = "SISC" }: { withTagline?: boolean; label?: string }) {
  return (
    <span className="inline-flex items-center rounded bg-white px-3 py-1.5">
      <Image
        src="/images/logo-sisc.png"
        alt={label}
        width={900}
        height={313}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </span>
  );
}

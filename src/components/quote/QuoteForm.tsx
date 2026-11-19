"use client";

import { Check, CircleAlert, Mail, MessageCircle } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { contact } from "@/data/site";
import { getQuoteOption, products, variosOption, type QuoteProductId } from "@/data/products";
import { mailtoLink, whatsappLink } from "@/lib/contact";
import { buildQuoteMessage, buildQuoteSubject, fieldOrder, validateQuote, type QuoteField } from "@/lib/quote";
import { trackEvent } from "@/lib/analytics";
import { btn } from "@/components/ui/primitives";
import { useQuote } from "./QuoteContext";

const inputBase =
  "h-[50px] w-full rounded border bg-white px-3.5 text-base text-grafito placeholder:text-[#8796A2] focus:border-accion focus:shadow-[0_0_0_3px_rgba(8,127,193,0.28)] focus:outline-none";

const chipOptions: { id: QuoteProductId; label: string }[] = [
  ...products.map((p) => ({ id: p.id, label: p.shortName })),
  { id: variosOption.id, label: variosOption.shortName },
];

function Req() {
  return (
    <span aria-hidden="true" className="text-accion-aa">
      *
    </span>
  );
}

function Optional({ children = "(opcional)" }: { children?: ReactNode }) {
  return <span className="font-medium text-tenue">{children}</span>;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="m-0 text-[13.5px] text-error">
      {message}
    </p>
  );
}

export function QuoteForm() {
  const { form, errors, status, setField, selectProduct, setErrors, setStatus } = useQuote();
  const option = getQuoteOption(form.producto);
  const isPipe = !!option?.requiresDiameter;
  const isVarios = form.producto === "varios";
  const showDiameter = !form.producto || isPipe || isVarios;
  const hasErrors = Object.values(errors).some(Boolean);

  const message = buildQuoteMessage(form);
  const waHref = whatsappLink(message);
  const mailHref = mailtoLink(buildQuoteSubject(form), message);

  let diameterHint = "Indica el diámetro interior o nominal que pide tu proyecto.";
  if (form.producto === "corrugada") diameterHint = "Rango referencial: 200 a 2400 mm, sujeto a disponibilidad.";
  if (form.producto === "lisa") diameterHint = "Según especificación técnica del proyecto y disponibilidad.";
  if (isVarios) diameterHint = "Si incluyes tuberías, indica el diámetro; detalla el resto en comentarios.";

  const border = (k: QuoteField) => (errors[k] ? "border-error" : "border-campo");
  const aria = (k: QuoteField, required = true) => ({
    "aria-required": required,
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });

  function focusFirstError(errs: Partial<Record<QuoteField, string>>) {
    const key = fieldOrder.find((k) => errs[k]);
    if (!key) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(key === "producto" ? "chip-corrugada" : `f-${key}`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  /** Valida antes de abrir WhatsApp o el correo. Si hay errores, cancela la navegación. */
  function guard(kind: "whatsapp" | "email") {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      const errs = validateQuote(form);
      if (Object.keys(errs).length) {
        e.preventDefault();
        setErrors(errs);
        setStatus("");
        focusFirstError(errs);
        return;
      }
      setErrors({});
      setStatus(kind);
      trackEvent(kind === "whatsapp" ? "quote_whatsapp" : "quote_email", { product: form.producto });
    };
  }

  return (
    <form
      aria-labelledby="cot-title"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const errs = validateQuote(form);
        if (Object.keys(errs).length) {
          setErrors(errs);
          focusFirstError(errs);
          return;
        }
        window.open(waHref, "_blank", "noopener");
        setStatus("whatsapp");
        trackEvent("quote_whatsapp", { product: form.producto });
      }}
      className="flex min-w-0 flex-[1.7_1_560px] flex-col gap-[22px] rounded-lg border border-linea bg-white p-[clamp(22px,3.6vw,44px)] shadow-[0_40px_80px_-50px_rgba(16,43,63,0.45)]"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E6ECF0] pb-[18px]">
        <span className="text-xl font-bold text-petroleo [font-stretch:88%]">Solicitud de cotización</span>
        <span className="text-[13px] text-tenue">
          <span aria-hidden="true" className="font-bold text-accion-aa">
            *
          </span>{" "}
          Campo obligatorio
        </span>
      </div>

      {hasErrors && (
        <div role="alert" className="flex items-start gap-3 rounded border border-[#F6C7C2] bg-[#FEF3F2] px-4 py-3.5 text-[15px] leading-normal text-[#8E1D14]">
          <CircleAlert size={20} className="mt-px shrink-0" aria-hidden="true" />
          <span>Revisa los campos marcados para generar tu solicitud.</span>
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-x-5 gap-y-[18px]">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-nombre" className="text-[14.5px] font-semibold text-petroleo">
            Nombre de contacto <Req />
          </label>
          <input id="f-nombre" type="text" autoComplete="name" placeholder="Ej: María González" value={form.nombre}
            onChange={(e) => setField("nombre", e.target.value)} className={`${inputBase} ${border("nombre")}`} {...aria("nombre")} />
          <FieldError id="e-nombre" message={errors.nombre} />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-empresa" className="text-[14.5px] font-semibold text-petroleo">
            Empresa <Optional />
          </label>
          <input id="f-empresa" type="text" autoComplete="organization" placeholder="Ej: Constructora del Sur" value={form.empresa}
            onChange={(e) => setField("empresa", e.target.value)} className={`${inputBase} border-campo`} />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-telefono" className="text-[14.5px] font-semibold text-petroleo">
            WhatsApp o teléfono <Req />
          </label>
          <input id="f-telefono" type="tel" inputMode="tel" autoComplete="tel" placeholder="+56 9 1234 5678" value={form.telefono}
            onChange={(e) => setField("telefono", e.target.value)} className={`${inputBase} ${border("telefono")}`} {...aria("telefono")} />
          <FieldError id="e-telefono" message={errors.telefono} />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-correo" className="text-[14.5px] font-semibold text-petroleo">
            Correo electrónico <Req />
          </label>
          <input id="f-correo" type="email" inputMode="email" autoComplete="email" placeholder="nombre@empresa.cl" value={form.correo}
            onChange={(e) => setField("correo", e.target.value)} className={`${inputBase} ${border("correo")}`} {...aria("correo")} />
          <FieldError id="e-correo" message={errors.correo} />
        </div>
      </div>

      <fieldset className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-0" aria-describedby={errors.producto ? "e-producto" : undefined}>
        <legend className="mb-2.5 p-0 text-[14.5px] font-semibold text-petroleo">
          Tipo de producto <Req />
        </legend>
        <div className="flex flex-wrap gap-2">
          {chipOptions.map((c) => {
            const on = form.producto === c.id;
            return (
              <button
                key={c.id}
                id={`chip-${c.id}`}
                type="button"
                aria-pressed={on}
                onClick={() => selectProduct(c.id)}
                className={`inline-flex min-h-[46px] cursor-pointer items-center rounded border px-4 text-[15px] font-semibold transition-colors hover:border-industrial ${
                  on ? "border-petroleo bg-petroleo text-white" : `bg-white text-grafito ${errors.producto ? "border-error" : "border-campo"}`
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        <FieldError id="e-producto" message={errors.producto} />
      </fieldset>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(170px,100%),1fr))] gap-x-5 gap-y-[18px]">
        {showDiameter && (
          <div className="flex flex-col gap-[7px]">
            <label htmlFor="f-diametro" className="text-[14.5px] font-semibold text-petroleo">
              Diámetro requerido (mm) {isPipe ? <Req /> : <Optional>(si corresponde)</Optional>}
            </label>
            <input id="f-diametro" type="text" inputMode="numeric" placeholder="Ej: 600" value={form.diametro}
              onChange={(e) => setField("diametro", e.target.value)} className={`${inputBase} ${border("diametro")}`}
              aria-required={isPipe} aria-invalid={!!errors.diametro}
              aria-describedby={`h-diametro${errors.diametro ? " e-diametro" : ""}`} />
            <span id="h-diametro" className="text-[12.5px] leading-snug text-tenue">{diameterHint}</span>
            <FieldError id="e-diametro" message={errors.diametro} />
          </div>
        )}
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-cantidad" className="text-[14.5px] font-semibold text-petroleo">
            Cantidad requerida <Req />
          </label>
          <input id="f-cantidad" type="text" inputMode="decimal" placeholder="Ej: 120" value={form.cantidad}
            onChange={(e) => setField("cantidad", e.target.value)} className={`${inputBase} ${border("cantidad")}`} {...aria("cantidad")} />
          <FieldError id="e-cantidad" message={errors.cantidad} />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-unidad" className="text-[14.5px] font-semibold text-petroleo">
            Unidad de medida <Req />
          </label>
          <select id="f-unidad" value={form.unidad} onChange={(e) => setField("unidad", e.target.value)}
            className={`${inputBase} px-3 ${border("unidad")}`} {...aria("unidad")}>
            <option value="">Selecciona…</option>
            <option value="metros">Metros</option>
            <option value="unidades">Unidades</option>
            <option value="rollos">Rollos</option>
          </select>
          <FieldError id="e-unidad" message={errors.unidad} />
        </div>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-ubicacion" className="text-[14.5px] font-semibold text-petroleo">
          Región o comuna de entrega <Req />
        </label>
        <input id="f-ubicacion" type="text" autoComplete="address-level2" placeholder="Ej: Puerto Montt, Región de Los Lagos" value={form.ubicacion}
          onChange={(e) => setField("ubicacion", e.target.value)} className={`${inputBase} ${border("ubicacion")}`} {...aria("ubicacion")} />
        <FieldError id="e-ubicacion" message={errors.ubicacion} />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-comentarios" className="text-[14.5px] font-semibold text-petroleo">
          Comentarios adicionales <Optional />
        </label>
        <textarea id="f-comentarios" rows={4} value={form.comentarios} onChange={(e) => setField("comentarios", e.target.value)}
          placeholder="Ej: especificación técnica, plazo estimado de la obra o condiciones de acceso para el despacho."
          className="w-full resize-y rounded border border-campo bg-white px-3.5 py-3 text-base leading-normal text-grafito placeholder:text-[#8796A2] focus:border-accion focus:shadow-[0_0_0_3px_rgba(8,127,193,0.28)] focus:outline-none" />
      </div>

      <div className="flex flex-wrap gap-3 pt-1.5">
        <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={guard("whatsapp")}
          className={`${btn.base} ${btn.primary} min-h-14 flex-[1_1_280px] px-[22px] text-center text-[16.5px]`}>
          <MessageCircle size={20} aria-hidden="true" />
          Enviar cotización por WhatsApp
        </a>
        <a href={mailHref} onClick={guard("email")}
          className={`${btn.base} ${btn.outlineDark} min-h-14 flex-[1_1_240px] px-[22px] text-center text-base`}>
          <Mail size={20} aria-hidden="true" />
          Enviar solicitud por correo
        </a>
      </div>

      <div aria-live="polite">
        {status === "whatsapp" && (
          <div className="flex items-start gap-3 rounded border border-[#B7DDF3] bg-[#EAF4FB] px-[18px] py-4 text-[15px] leading-relaxed text-[#0B4F78]">
            <Check size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              Abrimos WhatsApp con tu solicitud lista. Para completar el envío, presiona <strong>Enviar</strong> en WhatsApp. ¿No se abrió?{" "}
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0B4F78]">Abrir WhatsApp</a>.
            </span>
          </div>
        )}
        {status === "email" && (
          <div className="flex items-start gap-3 rounded border border-[#B7DDF3] bg-[#EAF4FB] px-[18px] py-4 text-[15px] leading-relaxed text-[#0B4F78]">
            <Mail size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              Abrimos tu aplicación de correo con la solicitud redactada. El correo aún no ha sido enviado: revísalo y presiona{" "}
              <strong>Enviar</strong> desde tu correo. Si no se abrió, escríbenos a{" "}
              <a href={`mailto:${contact.email}`} className="font-bold text-[#0B4F78]">{contact.email}</a>.
            </span>
          </div>
        )}
      </div>

      <p className="m-0 text-[13px] leading-normal text-tenue">
        Este formulario no almacena tus datos: solo arma el mensaje que tú envías por WhatsApp o correo.
      </p>
    </form>
  );
}

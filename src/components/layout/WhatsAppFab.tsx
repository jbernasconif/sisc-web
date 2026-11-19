"use client";

import { MessageCircle } from "lucide-react";
import { whatsappMessages } from "@/data/site";
import { whatsappLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/** Botón flotante de WhatsApp: píldora en escritorio, círculo en móvil. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(whatsappMessages.generic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "fab" })}
      className="fixed right-5 bottom-5 z-[60] inline-flex h-[58px] w-[58px] items-center justify-center gap-2.5 rounded-full bg-accion-aa text-[15.5px] font-semibold text-white no-underline shadow-[0_16px_34px_-12px_rgba(8,30,46,0.6)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:pr-[22px] sm:pl-[18px]"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden sm:inline">Cotizar por WhatsApp</span>
    </a>
  );
}

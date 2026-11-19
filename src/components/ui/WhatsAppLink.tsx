"use client";

import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/** Enlace a WhatsApp con mensaje prellenado y medición de clic. */
export function WhatsAppLink({
  message,
  location,
  className,
  children,
}: {
  message: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("whatsapp_click", { location })}
    >
      {children}
    </a>
  );
}

"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { btn } from "@/components/ui/primitives";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-petroleo/[0.96] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,4vw,40px)]">
        <a href="#inicio" aria-label="SISC SpA, ir al inicio" onClick={close} className="no-underline">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-[34px] lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="navlink text-[15px] font-medium text-white/85 no-underline hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#cotizar" className={`${btn.base} ${btn.primary} h-[46px] px-5 text-[15px] max-lg:hidden`}>
            Solicitar cotización
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-white/25 bg-transparent text-white lg:hidden"
            aria-controls="menu-movil"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="absolute inset-x-0 top-full flex flex-col border-t border-white/[0.08] bg-petroleo px-[clamp(20px,4vw,40px)] pt-3 pb-7 shadow-[0_24px_40px_-16px_rgba(0,0,0,0.5)] lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex min-h-[54px] items-center border-b border-white/[0.08] text-[19px] font-semibold text-white no-underline"
            >
              {item.label}
            </a>
          ))}
          <a href="#cotizar" onClick={close} className={`${btn.base} ${btn.primary} mt-5 h-[54px] text-[17px]`}>
            Solicitar cotización
          </a>
        </nav>
      )}
    </header>
  );
}

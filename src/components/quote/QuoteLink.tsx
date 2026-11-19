"use client";

import type { ReactNode } from "react";
import type { QuoteProductId } from "@/data/products";
import { useQuote } from "./QuoteContext";

/** Enlace que preselecciona un producto en el cotizador y baja hasta él. */
export function QuoteLink({
  product,
  className,
  children,
  onNavigate,
}: {
  product: QuoteProductId;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const { selectProduct } = useQuote();
  return (
    <a
      href="#cotizar"
      className={className}
      onClick={() => {
        selectProduct(product);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

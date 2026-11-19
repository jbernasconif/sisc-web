"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { getQuoteOption, type QuoteProductId } from "@/data/products";
import { emptyQuote, type QuoteErrors, type QuoteField, type QuoteForm } from "@/lib/quote";
import { trackEvent } from "@/lib/analytics";

type Status = "" | "whatsapp" | "email";

type QuoteState = {
  form: QuoteForm;
  errors: QuoteErrors;
  status: Status;
  setField: (key: QuoteField, value: string) => void;
  selectProduct: (id: QuoteProductId) => void;
  setErrors: (errors: QuoteErrors) => void;
  setStatus: (status: Status) => void;
};

const QuoteCtx = createContext<QuoteState | null>(null);

/** Estado compartido del cotizador: las tarjetas de producto preseleccionan aquí. */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<QuoteForm>(emptyQuote);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("");
  const [unitAuto, setUnitAuto] = useState(true);

  const setField = useCallback((key: QuoteField, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
    setStatus("");
    if (key === "unidad") setUnitAuto(false);
  }, []);

  const selectProduct = useCallback(
    (id: QuoteProductId) => {
      const option = getQuoteOption(id);
      setForm((prev) => {
        const next: QuoteForm = { ...prev, producto: id };
        if (unitAuto && option?.defaultUnit) next.unidad = option.defaultUnit;
        if (option && !option.requiresDiameter && id !== "varios") next.diametro = "";
        return next;
      });
      setErrors((prev) => ({ ...prev, producto: "", diametro: "", ...(option?.defaultUnit ? { unidad: "" } : {}) }));
      setStatus("");
      trackEvent("product_select", { product: id });
    },
    [unitAuto],
  );

  const value = useMemo(
    () => ({ form, errors, status, setField, selectProduct, setErrors, setStatus }),
    [form, errors, status, setField, selectProduct],
  );

  return <QuoteCtx.Provider value={value}>{children}</QuoteCtx.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteCtx);
  if (!ctx) throw new Error("useQuote debe usarse dentro de <QuoteProvider>");
  return ctx;
}

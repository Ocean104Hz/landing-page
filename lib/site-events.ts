"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";
import type { CategoryId } from "@/data/content";

export type InquiryDetail = { crop?: string; message?: string };

export const emitCategory = (id: CategoryId | "all") =>
  window.dispatchEvent(new CustomEvent("ionique:category", { detail: id }));

export const emitInquiry = (detail: InquiryDetail) =>
  window.dispatchEvent(new CustomEvent("ionique:inquiry", { detail }));

export function useScrollTo() {
  const lenis = useLenis();
  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: id === "home" ? 0 : -72, duration: 1.4 });
      else el.scrollIntoView({ behavior: "smooth" });
    },
    [lenis],
  );
}

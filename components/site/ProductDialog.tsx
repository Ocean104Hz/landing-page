"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/site/ui/dialog";
import { categories, type Product } from "@/data/content";
import { emitInquiry, useScrollTo } from "@/lib/site-events";
import { PendingBadge } from "./PendingBadge";

export function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const scrollTo = useScrollTo();
  const ask = () => {
    if (!product) return;
    emitInquiry({ message: `สนใจสอบถามข้อมูลผลิตภัณฑ์: ${product.name}` });
    onClose();
    setTimeout(() => scrollTo("contact"), 250);
  };

  return (
    <Dialog open={!!product} onOpenChange={(o: boolean) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-3xl overflow-hidden rounded-3xl border-0 p-0" data-testid="product-dialog">
        {product && (
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-square bg-mist sm:aspect-auto">
              <Image src={product.image} alt={`${product.name} (ภาพตัวอย่าง)`} fill sizes="400px" className="object-cover mix-blend-multiply" />
            </div>
            <div className="flex flex-col p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">{categories.find((c) => c.id === product.category)?.label}</p>
              <DialogTitle className="mt-3 font-display text-2xl font-semibold text-navy">{product.name}</DialogTitle>
              <span className="mt-3 w-fit rounded-md bg-lime-soft px-2.5 py-1 font-mono text-xs text-navy-ink">{product.formula}</span>
              <DialogDescription className="mt-4 text-sm leading-relaxed text-muted">{product.description}</DialogDescription>
              <dl className="mt-6 space-y-3 border-t border-navy/10 pt-5 text-sm">
                {["อัตราการใช้", "ขนาดบรรจุ", "เลขทะเบียน"].map((k) => (
                  <div key={k} className="flex justify-between gap-4"><dt className="text-muted">{k}</dt><dd className="text-navy">รอการยืนยัน</dd></div>
                ))}
              </dl>
              <div className="mt-6"><PendingBadge label="ข้อมูลผลิตภัณฑ์รอการยืนยัน" /></div>
              <button type="button" onClick={ask} data-testid="product-dialog-inquire-btn" className="mt-auto pt-6">
                <span className="flex h-12 items-center justify-center rounded-full bg-navy text-sm font-medium text-white transition-colors duration-300 hover:bg-navy-deep">สอบถามผลิตภัณฑ์นี้</span>
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

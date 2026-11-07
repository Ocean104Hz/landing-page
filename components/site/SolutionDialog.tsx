"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/site/ui/dialog";
import type { Solution } from "@/data/content";
import { emitCategory, emitInquiry, useScrollTo } from "@/lib/site-events";
import { PendingBadge } from "./PendingBadge";

export function SolutionDialog({ solution, onClose }: { solution: Solution | null; onClose: () => void }) {
  const scrollTo = useScrollTo();
  const then = (fn: () => void) => { onClose(); setTimeout(fn, 250); };

  return (
    <Dialog open={!!solution} onOpenChange={(o: boolean) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl border-0 p-0" data-testid="solution-dialog">
        {solution && (
          <>
            <div className="relative h-56">
              <Image src={solution.image} alt={solution.label} fill sizes="672px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent" />
              <div className="absolute bottom-5 left-7">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime">{solution.en}</p>
                <DialogTitle className="font-display text-3xl font-semibold text-white">โซลูชันสำหรับ{solution.label}</DialogTitle>
              </div>
            </div>
            <div className="p-7">
              <PendingBadge label="ข้อมูลโซลูชันรอการยืนยันจากผู้เชี่ยวชาญ" />
              <DialogDescription className="mt-4 text-sm leading-relaxed text-muted">
                ข้อมูลแนวทางการจัดการธาตุอาหารสำหรับ{solution.label}อยู่ระหว่างจัดเตรียม เราไม่แนะนำสูตรปุ๋ยโดยไม่มีข้อมูลที่ได้รับการยืนยัน กรุณาปรึกษาผู้เชี่ยวชาญเพื่อรับคำแนะนำที่เหมาะกับแปลงของคุณ
              </DialogDescription>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button type="button" data-testid="solution-dialog-consult-btn" onClick={() => then(() => { emitInquiry({ crop: solution.label }); scrollTo("contact"); })} className="h-12 flex-1 rounded-full bg-navy text-sm font-medium text-white transition-colors duration-300 hover:bg-navy-deep">
                  ปรึกษาเรื่อง{solution.label}
                </button>
                <button type="button" data-testid="solution-dialog-products-btn" onClick={() => then(() => { emitCategory("all"); scrollTo("products"); })} className="h-12 flex-1 rounded-full border border-navy/20 text-sm font-medium text-navy transition-colors duration-300 hover:border-lime hover:bg-lime-soft">
                  ดูผลิตภัณฑ์ทั้งหมด
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

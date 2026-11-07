"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "@/data/content";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/site/ui/dialog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PendingBadge } from "./PendingBadge";

export function Insights() {
  const [open, setOpen] = useState<Article | null>(null);
  return (
    <section id="insights" data-testid="insights-section" className="bg-white py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Knowledge & Insights" title="ความรู้และข้อมูลด้านการเกษตร" intro="บทความทั้งหมดต้องมีแหล่งที่มาหรือได้รับการตรวจสอบก่อนเผยแพร่" testId="insights-heading" />
        <ul className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.1}>
              <li className="group flex h-full flex-col" data-testid={`article-card-${a.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={a.image} alt={a.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-navy">{a.category}</span>
                </div>
                <div className="mt-6 flex flex-1 flex-col">
                  <PendingBadge label="รอตรวจสอบแหล่งที่มา" />
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-navy-deep">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                  <button type="button" onClick={() => setOpen(a)} data-testid={`article-read-more-${a.id}`} className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-lime pb-1 text-sm font-medium text-navy">
                    อ่านต่อ <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
      <Dialog open={!!open} onOpenChange={(o: boolean) => { if (!o) setOpen(null); }}>
        <DialogContent className="max-w-lg rounded-3xl" data-testid="article-dialog">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">{open?.category}</p>
          <DialogTitle className="font-display text-2xl font-semibold text-navy">{open?.title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted">เนื้อหาบทความฉบับเต็มอยู่ระหว่างการเรียบเรียงและตรวจสอบแหล่งที่มา จะเผยแพร่เมื่อได้รับการยืนยัน</DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}

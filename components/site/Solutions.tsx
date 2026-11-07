"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { solutions, type Solution } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SolutionDialog } from "./SolutionDialog";

export function Solutions() {
  const [selected, setSelected] = useState<Solution | null>(null);
  return (
    <section id="solutions" data-testid="solutions-section" className="bg-white py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Agricultural Solutions" title="โซลูชันที่เหมาะกับการเพาะปลูกของคุณ" intro="เลือกประเภทการเพาะปลูกเพื่อดูข้อมูลและปรึกษาผู้เชี่ยวชาญ" testId="solutions-heading" />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[680px] lg:grid-cols-6 lg:grid-rows-2">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07} className={`${s.area} ${i === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}>
              <button
                type="button"
                onClick={() => setSelected(s)}
                data-testid={`solution-card-${s.id}`}
                className="group relative block h-72 w-full overflow-hidden rounded-3xl text-left md:h-80 lg:h-full"
              >
                <Image src={s.image} alt={s.label} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute left-5 top-5 font-mono text-xs text-white/80">0{i + 1}</span>
                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-[background-color,color,transform] duration-500 group-hover:rotate-45 group-hover:bg-lime group-hover:text-navy-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">{s.en}</p>
                  <p className={`mt-1 font-display font-semibold text-white ${i === 0 ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}>{s.label}</p>
                  <span className="mt-3 block h-[2px] w-10 bg-lime transition-[width] duration-500 group-hover:w-24" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <SolutionDialog solution={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

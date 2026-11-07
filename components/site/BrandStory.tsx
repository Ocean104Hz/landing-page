"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLines, Reveal } from "./Reveal";

export function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} data-testid="brand-story-section" className="grain relative isolate flex min-h-[85svh] items-center overflow-hidden py-28 text-white">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 -z-20">
        <Image src="/images/story.webp" alt="รถแทรกเตอร์ทำงานในแปลงเพาะปลูกมุมสูง" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-navy/85" />
      <div className="container-x">
        <Reveal><p className="eyebrow text-lime"><span className="h-px w-10 bg-lime" />Brand Story</p></Reveal>
        <h2 data-testid="brand-story-heading" className="mt-8 font-display text-4xl font-semibold leading-[1.2] tracking-tight sm:text-6xl lg:text-8xl">
          <MaskLines inView lines={["เพราะทุกการเติบโต", <><span className="text-lime">คืออนาคต</span>ที่เราร่วมสร้าง</>]} />
        </h2>
        <Reveal delay={0.3} className="mt-10 flex max-w-xl items-start gap-5">
          <span className="mt-3 h-px w-12 shrink-0 bg-lime" />
          <p className="text-base text-white/80 md:text-lg">[ข้อความตัวอย่าง] พื้นที่สำหรับเรื่องราวของแบรนด์ — รอการยืนยันเนื้อหาจากบริษัท</p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useScrollTo } from "@/lib/site-events";
import { MaskLines, ease } from "./Reveal";
import { HeroCard } from "./HeroCard";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="grain relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-navy-deep text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <motion.div initial={{ scale: 1.25, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.2, ease }} className="absolute inset-0">
          <Image src="/images/hero.webp" alt="พื้นที่นาขั้นบันไดสีเขียวมุมสูง" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy/70 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-navy-deep/90 to-transparent" />

      <motion.p style={{ x: wordX }} aria-hidden className="text-outline pointer-events-none opacity-50 absolute -bottom-[0.18em] left-0 -z-10 whitespace-nowrap font-display text-[28vw] font-semibold leading-none tracking-tighter">
        iONIQUE
      </motion.p>

      <div className="container-x grid w-full gap-12 pb-16 pt-24 lg:grid-cols-12 lg:items-end lg:pb-24">
        <div className="lg:col-span-8">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }} className="eyebrow text-white/85">
            <span className="h-2 w-2 rounded-full bg-lime" /> Plant Nutrition &amp; Agri Solutions
          </motion.p>
          <h1 data-testid="hero-headline" className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.18] tracking-tight sm:text-6xl lg:text-7xl">
            <MaskLines
              delay={0.25}
              lines={[
                "นวัตกรรมเพื่อการเติบโต",
                <>
                  <span className="relative inline-block text-lime">
                    ยกระดับ
                    <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease, delay: 1.25 }} className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-lime" />
                  </span>
                  ทุกการเพาะปลูก
                </>,
              ]}
            />
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.75 }} className="mt-7 max-w-2xl text-base text-white/80 md:text-lg" data-testid="hero-subheading">
            โซลูชันด้านปุ๋ยและธาตุอาหารพืช เพื่อสนับสนุนการจัดการเพาะปลูกอย่างเหมาะสม
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.95 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => scrollTo("products")} data-testid="hero-explore-products-btn" className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-lime px-8 font-medium text-navy-ink transition-[background-color,transform] duration-300 hover:bg-white active:scale-95">
              สำรวจผลิตภัณฑ์ <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => scrollTo("contact")} data-testid="hero-contact-expert-btn" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-8 font-medium text-white backdrop-blur-md transition-[background-color,border-color] duration-300 hover:border-white hover:bg-white/20">
              ติดต่อผู้เชี่ยวชาญ
            </button>
          </motion.div>
        </div>
        <div className="hidden justify-end lg:col-span-4 lg:flex">
          <HeroCard />
        </div>
      </div>

      <button type="button" onClick={() => scrollTo("about")} aria-label="เลื่อนลง" data-testid="hero-scroll-cue" className="absolute bottom-6 right-5 hidden h-12 w-12 place-items-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-lime hover:text-lime md:grid lg:right-10">
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}

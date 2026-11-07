"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal, ease } from "./Reveal";
import { PendingBadge } from "./PendingBadge";

const pillars = [
  { k: "01", t: "ประวัติบริษัท", d: "รอข้อมูลประวัติและความเป็นมาที่ได้รับการยืนยัน" },
  { k: "02", t: "แนวคิดของแบรนด์", d: "รอข้อมูลวิสัยทัศน์และแนวคิดที่ได้รับการยืนยัน" },
  { k: "03", t: "ความมุ่งมั่นด้านผลิตภัณฑ์", d: "รอข้อมูลพันธกิจด้านผลิตภัณฑ์ที่ได้รับการยืนยัน" },
];

export function About() {
  return (
    <section id="about" data-testid="about-section" className="bg-white py-24 lg:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <motion.div initial="hide" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="relative lg:col-span-6">
          <motion.div
            variants={{ hide: { clipPath: "inset(10% 10% 10% 10% round 28px)" }, show: { clipPath: "inset(0% 0% 0% 0% round 28px)" } }}
            transition={{ duration: 1.4, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/5]"
          >
            <motion.div variants={{ hide: { scale: 1.2 }, show: { scale: 1 } }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
              <Image src="/images/about.webp" alt="ทีมงานดูแลต้นกล้าในห้องปฏิบัติการ (ภาพประกอบ)" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
          </motion.div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy px-6 py-5 text-white shadow-lift sm:left-auto sm:right-[-1.5rem]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">About iONIQUE</p>
            <p className="mt-1 font-display text-lg">ภาพประกอบ — รอภาพจริง</p>
          </div>
        </motion.div>

        <div className="lg:col-span-6">
          <SectionHeading index="01" eyebrow="About iONIQUE" title="พัฒนาเพื่อทุกการเติบโต" testId="about-heading" />
          <Reveal delay={0.1} className="mt-6">
            <PendingBadge />
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              [ข้อความตัวอย่าง] พื้นที่นี้สำหรับแนะนำบริษัท แนวคิด และความมุ่งมั่นด้านผลิตภัณฑ์การเกษตรของ iONIQUE กรุณาแทนที่ด้วยข้อมูลจริงที่ได้รับการยืนยันก่อนเผยแพร่
            </p>
          </Reveal>
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {pillars.map((p, i) => (
              <Reveal key={p.k} delay={0.15 + i * 0.08}>
                <li className="group flex gap-6 py-6" data-testid={`about-pillar-${p.k}`}>
                  <span className="font-mono text-sm text-lime">{p.k}</span>
                  <div>
                    <p className="font-display text-xl font-medium text-navy transition-transform duration-500 group-hover:translate-x-1">{p.t}</p>
                    <p className="mt-1 text-sm text-muted">{p.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

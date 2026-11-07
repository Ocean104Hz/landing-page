"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MaskLines, Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function ContactCta() {
  const { lineUrl } = siteConfig.contact;
  const focusForm = () => document.getElementById("contact-name")?.focus({ preventScroll: false });

  return (
    <section id="contact" data-testid="contact-section" className="grain relative isolate overflow-hidden bg-navy py-24 text-white lg:py-36">
      <div aria-hidden className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full border border-white/10" />
      <div aria-hidden className="absolute -right-20 -top-20 -z-10 h-[360px] w-[360px] rounded-full border border-lime/25" />
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal><p className="eyebrow text-lime"><span className="text-lime">06</span><span className="h-px w-10 bg-white/40" />Contact</p></Reveal>
          <h2 data-testid="contact-heading" className="mt-6 font-display text-3xl font-semibold leading-[1.25] tracking-tight sm:text-5xl">
            <MaskLines inView lines={["ร่วมสร้างอนาคตการเกษตร", <>ไปกับ <span className="text-lime">iONIQUE</span></>]} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base text-white/80 md:text-lg">ติดต่อเราเพื่อรับข้อมูลผลิตภัณฑ์และคำแนะนำเพิ่มเติม</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={focusForm} data-testid="contact-sales-btn" className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-lime px-8 font-medium text-navy-ink transition-[background-color,transform] duration-300 hover:bg-white active:scale-95">
                ติดต่อฝ่ายขาย <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {lineUrl && (
                <a href={lineUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-line-btn" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/30 px-8 font-medium transition-colors duration-300 hover:border-lime hover:text-lime">
                  <MessageCircle className="h-4 w-4" /> LINE Official Account
                </a>
              )}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

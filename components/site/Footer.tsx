"use client";

import Link from "next/link";
import { siteConfig, navItems } from "@/config/site";
import { categories } from "@/data/content";
import { emitCategory, useScrollTo } from "@/lib/site-events";
import { Logo } from "./Logo";

const pending = <span className="text-white/60">รอการยืนยัน</span>;

export function Footer() {
  const scrollTo = useScrollTo();
  const { company, contact, social } = siteConfig;
  const activeSocial = social.filter((s) => s.href);
  const link = "text-white/75 transition-colors duration-300 hover:text-lime";

  return (
    <footer data-testid="site-footer" className="bg-navy-deep pt-20 text-white">
      <div className="container-x grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
          <p className="mt-5 text-sm text-white/75">{company.legalName ?? "[ชื่อบริษัท — รอการยืนยัน]"}</p>
          <p className="mt-1 text-sm text-white/75">{company.address ?? "[ที่อยู่ — รอการยืนยัน]"}</p>
        </div>
        <FooterCol title="เมนู">
          {navItems.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollTo(n.id); }} className={link} data-testid={`footer-nav-${n.id}`}>{n.label}</a></li>
          ))}
        </FooterCol>
        <FooterCol title="ผลิตภัณฑ์">
          {categories.map((c) => (
            <li key={c.id}><a href="#products" onClick={(e) => { e.preventDefault(); emitCategory(c.id); scrollTo("products"); }} className={link} data-testid={`footer-product-${c.id}`}>{c.label}</a></li>
          ))}
        </FooterCol>
        <FooterCol title="ติดต่อ">
          <li>โทร: {contact.phone ? <a href={`tel:${contact.phone}`} className={link}>{contact.phone}</a> : pending}</li>
          <li>อีเมล: {contact.email ? <a href={`mailto:${contact.email}`} className={link}>{contact.email}</a> : pending}</li>
          <li>LINE: {contact.lineUrl ? <a href={contact.lineUrl} target="_blank" rel="noopener noreferrer" className={link}>{contact.lineId ?? "LINE OA"}</a> : pending}</li>
          <li>โซเชียล: {activeSocial.length ? activeSocial.map((s) => <a key={s.label} href={s.href as string} target="_blank" rel="noopener noreferrer" className={`${link} mr-3`}>{s.label}</a>) : pending}</li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p data-testid="footer-copyright">© 2026 {siteConfig.name}. All rights reserved.</p>
          <Link href="/privacy" className={link} data-testid="footer-privacy-link">นโยบายความเป็นส่วนตัว</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2 lg:[&:last-child]:col-span-4">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-white/75">{children}</ul>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/config/site";
import { useScrollTo } from "@/lib/site-events";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => { setOpen(false); scrollTo(id); };

  return (
    <header data-testid="site-navbar" className={`sticky top-0 z-50 bg-white/95 backdrop-blur-xl transition-[box-shadow,height] duration-500 ${scrolled ? "shadow-[0_8px_30px_rgba(23,32,51,0.07)]" : ""}`}>
      <div className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} data-testid="nav-logo-link" className="rounded-md">
          <Logo />
        </a>
        <nav aria-label="เมนูหลัก" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.slice(0, 5).map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => { e.preventDefault(); go(n.id); }}
                  data-testid={`nav-link-${n.id}`}
                  className={`group relative px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${active === n.id ? "text-navy" : "text-navy-ink/70 hover:text-navy"}`}
                >
                  {n.label}
                  <span className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left bg-lime transition-transform duration-500 ${active === n.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go("contact"); }}
            data-testid="nav-cta-contact"
            className="group hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-[background-color,transform] duration-300 hover:bg-navy-deep active:scale-95 sm:inline-flex"
          >
            ติดต่อเรา
            <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-navy-ink transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            data-testid="nav-mobile-toggle"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-lime" aria-hidden />
      <MobileMenu open={open} active={active} onGo={go} />
    </header>
  );
}

function MobileMenu({ open, active, onGo }: { open: boolean; active: string; onGo: (id: string) => void }) {
  return (
    <motion.nav
      id="mobile-menu"
      aria-label="เมนูมือถือ"
      initial={false}
      animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
      data-testid="mobile-menu"
      inert={!open}
    >
      <ul className="container-x py-4">
        {navItems.map((n, i) => (
          <li key={n.id} className="border-b border-navy/5 last:border-0">
            <a
              href={`#${n.id}`}
              onClick={(e) => { e.preventDefault(); onGo(n.id); }}
              data-testid={`mobile-nav-link-${n.id}`}
              className={`flex items-center justify-between py-4 font-display text-xl ${active === n.id ? "text-navy" : "text-navy-ink/70"}`}
            >
              <span><span className="mr-4 font-mono text-xs text-lime">0{i + 1}</span>{n.label}</span>
              <ArrowUpRight className="h-4 w-4 text-navy/40" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

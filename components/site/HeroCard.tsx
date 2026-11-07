"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ease } from "./Reveal";

export function HeroCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 140, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 140, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease, delay: 1.1 }}
      style={{ perspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      data-testid="hero-product-card"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-72 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,#ffffff_0%,#F0F2F5_55%,#dfe4ea_100%)]" />
          <Image src="/images/product-special.webp" alt="ภาพตัวอย่างบรรจุภัณฑ์" fill sizes="288px" className="object-cover mix-blend-multiply" style={{ transform: "translateZ(40px)" }} />
        </div>
        <div className="mt-4 flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">Product Line</p>
            <p className="mt-1 font-display text-lg">iONIQUE Collection</p>
          </div>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-white/15 px-3 py-1 text-xs text-white/85">ภาพตัวอย่าง</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

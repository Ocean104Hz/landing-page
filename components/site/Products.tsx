"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products, type CategoryId, type Product } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { ProductDialog } from "./ProductDialog";
import { PendingBadge } from "./PendingBadge";

type Filter = CategoryId | "all";
const tabs: { id: Filter; label: string }[] = [{ id: "all", label: "ทั้งหมด" }, ...categories];

export function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  useEffect(() => {
    const onCat = (e: Event) => setFilter((e as CustomEvent<Filter>).detail);
    window.addEventListener("ionique:category", onCat);
    return () => window.removeEventListener("ionique:category", onCat);
  }, []);

  return (
    <section id="products" data-testid="products-section" className="bg-mist py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading index="02" eyebrow="Product Collection" title={<>ผลิตภัณฑ์ <span className="text-lime">iONIQUE</span></>} intro="รายการและหมวดหมู่เป็นโครงสร้างตัวอย่าง ต้องยืนยันกับรายการสินค้าที่มีจริงก่อนเผยแพร่" testId="products-heading" />
          <Reveal delay={0.1}><PendingBadge label="ภาพและข้อมูลสินค้าเป็น Placeholder" /></Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div role="tablist" aria-label="หมวดหมู่ผลิตภัณฑ์" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={filter === t.id}
                onClick={() => setFilter(t.id)}
                data-testid={`product-tab-${t.id}`}
                className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 ${filter === t.id ? "text-white" : "bg-white text-navy hover:text-navy-deep"}`}
              >
                {filter === t.id && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-testid="product-grid">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onOpen={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

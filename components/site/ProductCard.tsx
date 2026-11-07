"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, type Product } from "@/data/content";
import { ease } from "./Reveal";

export function ProductCard({ product, index, onOpen }: { product: Product; index: number; onOpen: () => void }) {
  const cat = categories.find((c) => c.id === product.category)?.label;
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-[box-shadow,transform] duration-500 hover:-translate-y-1.5 hover:shadow-lift"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#ffffff_0%,#F0F2F5_60%,#e2e7ee_100%)]" />
        <Image src={product.image} alt={`${product.name} (ภาพตัวอย่าง)`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.07]" />
        <span className="absolute left-4 top-4 font-mono text-xs text-navy/60">{String(index + 1).padStart(2, "0")}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-navy backdrop-blur">{cat}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-md bg-lime-soft px-2.5 py-1 font-mono text-xs text-navy-ink" data-testid={`product-formula-${product.id}`}>{product.formula}</span>
        <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <button
          type="button"
          onClick={onOpen}
          data-testid={`product-details-btn-${product.id}`}
          className="mt-6 inline-flex items-center justify-between rounded-full border border-navy/15 py-2.5 pl-5 pr-2 text-sm font-medium text-navy transition-[background-color,color,border-color] duration-300 hover:border-navy hover:bg-navy hover:text-white"
        >
          ดูรายละเอียด
          <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-navy-ink transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-3.5 w-3.5" /></span>
        </button>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
    </motion.li>
  );
}

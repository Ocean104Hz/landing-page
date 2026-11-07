"use client";

import { motion } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

type Props = { children: React.ReactNode; delay?: number; className?: string; y?: number };

export function Reveal({ children, delay = 0, className, y = 28 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLines({ lines, className, delay = 0, inView = false }: { lines: React.ReactNode[]; className?: string; delay?: number; inView?: boolean }) {
  const trigger = inView ? { whileInView: "show", viewport: { once: true, amount: 0.1 } } : { animate: "show" };
  return (
    <motion.span className="block" initial="hide" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em] pt-[0.08em]">
          <motion.span
            className={`block ${className ?? ""}`}
            variants={{ hide: { y: "115%" }, show: { y: "0%" } }}
            transition={{ duration: 1.15, ease, delay: delay + i * 0.14 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

import Image from "next/image";
import { siteConfig } from "@/config/site";

// Text placeholder until the official logo file is set in siteConfig.logo.src
export function Logo({ light = false }: { light?: boolean }) {
  const { src, width, height } = siteConfig.logo;
  if (src) return <Image src={src} alt={siteConfig.name} width={width} height={height} priority className="h-9 w-auto" />;
  return (
    <span className={`font-display text-2xl font-semibold tracking-tight ${light ? "text-white" : "text-navy"}`} aria-label={siteConfig.name}>
      {siteConfig.name}
    </span>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/b86b71495302ed8f-s.p.woff2", weight: "400 700" },
    { path: "./fonts/d877add5adc7a711-s.p.woff2", weight: "400 700" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/672d4d9b9d8d459a-s.p.woff2", weight: "300" },
    { path: "./fonts/b88b793517a9d83f-s.p.woff2", weight: "300" },
    { path: "./fonts/4e2312c98e240c05-s.p.woff2", weight: "400" },
    { path: "./fonts/f83e5507ec3854fa-s.p.woff2", weight: "400" },
    { path: "./fonts/bfdf244a9384e8b2-s.p.woff2", weight: "500" },
    { path: "./fonts/d13ab8ed065835e4-s.p.woff2", weight: "500" },
    { path: "./fonts/5fcb63deed33aab6-s.p.woff2", weight: "600" },
    { path: "./fonts/861fabf8a4ffc042-s.p.woff2", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/558ca1a6aa3cb55e-s.p.woff2",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iONIQUE — นวัตกรรมเพื่อการเติบโต ยกระดับทุกการเพาะปลูก",
  description: "โซลูชันด้านปุ๋ยและธาตุอาหารพืช เพื่อสนับสนุนการจัดการเพาะปลูกอย่างเหมาะสม",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

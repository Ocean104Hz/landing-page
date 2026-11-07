import { FileText, Headset, MessagesSquare, Sprout } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { About } from "@/components/site/About";
import { BrandStory } from "@/components/site/BrandStory";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Insights } from "@/components/site/Insights";
import { Navbar } from "@/components/site/Navbar";
import { Products } from "@/components/site/Products";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Solutions } from "@/components/site/Solutions";

const marquee = ["Plant Nutrition", "นวัตกรรมเพื่อการเติบโต", "Agri Solutions", "ยกระดับทุกการเพาะปลูก", "iONIQUE"];

const reasons = [
  [FileText, "ข้อมูลผลิตภัณฑ์ที่ชัดเจน", "นำเสนอสูตร ส่วนประกอบ และวิธีใช้ในรูปแบบที่เข้าใจง่าย"],
  [Sprout, "โซลูชันสำหรับการเกษตร", "จัดกลุ่มข้อมูลตามประเภทการเพาะปลูก เพื่อค้นหาสิ่งที่เกี่ยวข้องได้เร็ว"],
  [Headset, "การให้คำปรึกษา", "ติดต่อทีมงานเพื่อสอบถามข้อมูลผลิตภัณฑ์และการใช้งานเพิ่มเติม"],
  [MessagesSquare, "ช่องทางการติดต่อที่สะดวก", "ส่งข้อความผ่านแบบฟอร์ม แล้วทีมงานจะติดต่อกลับ"],
] as const;

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar />
      <main>
        <Hero />
        <div className="overflow-hidden border-b border-navy/10 bg-white py-8 md:py-10" aria-hidden="true" data-testid="editorial-marquee">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {[...marquee, ...marquee].map((label, index) => (
                  <span key={`${copy}-${index}`} className="flex items-center">
                    <span className={`px-8 font-display text-4xl font-semibold tracking-tight md:text-6xl ${index % 2 ? "text-outline-navy" : "text-navy"}`}>{label}</span>
                    <span className="h-3 w-3 rotate-45 bg-lime" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <About />
        <Products />
        <Solutions />
        <section data-testid="why-section" className="bg-mist py-24 lg:py-36">
          <div className="container-x">
            <SectionHeading index="04" eyebrow="Why iONIQUE" title={<>ทำไมต้อง <span className="text-lime">iONIQUE</span></>} intro="จุดเด่นด้านล่างเป็นหัวข้อตัวอย่าง — แสดงเฉพาะจุดเด่นที่บริษัทสามารถยืนยันได้" testId="why-heading" />
            <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(([Icon, title, description], index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <li className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-lift" data-testid={`why-card-${index + 1}`}>
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border border-navy/10 text-navy transition-colors duration-500 group-hover:border-lime group-hover:bg-lime"><Icon className="h-6 w-6" strokeWidth={1.5} /></span>
                      <span className="font-mono text-xs text-navy/40">0{index + 1}</span>
                    </div>
                    <h3 className="mt-10 font-display text-xl font-semibold text-navy">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <BrandStory />
        <Insights />
        <ContactCta />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </ReactLenis>
  );
}

"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Check } from "lucide-react";
import { solutions } from "@/data/content";
import type { InquiryDetail } from "@/lib/site-events";

const empty = { name: "", phone: "", email: "", crop: "", message: "" };
const field = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy-ink placeholder:text-muted/70 transition-[border-color,box-shadow] focus:border-navy focus:outline-none focus:ring-4 focus:ring-lime/30";

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onInquiry = (e: Event) => {
      const d = (e as CustomEvent<InquiryDetail>).detail;
      setSent(false);
      setForm((f) => ({ ...f, crop: d?.crop ?? f.crop, message: d?.message ?? f.message }));
    };
    window.addEventListener("ionique:inquiry", onInquiry);
    return () => window.removeEventListener("ionique:inquiry", onInquiry);
  }, []);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const base = process.env.REACT_APP_BACKEND_URL;
    if (!base) { toast.error("ยังไม่ได้ตั้งค่าระบบรับข้อมูล"); return; }
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, email: form.email || null, crop: form.crop || null }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
      setForm(empty);
      toast.success("ส่งข้อความเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว");
    } catch {
      toast.error("ส่งข้อความไม่สำเร็จ กรุณาตรวจสอบข้อมูลแล้วลองอีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} data-testid="contact-form" className="rounded-[28px] bg-white p-6 text-navy-ink shadow-lift sm:p-9">
      <p className="font-display text-2xl font-semibold text-navy">ส่งข้อความถึงฝ่ายขาย</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-navy">ชื่อ-นามสกุล *
          <input id="contact-name" required minLength={2} value={form.name} onChange={set("name")} className={field} placeholder="ชื่อของคุณ" data-testid="contact-input-name" />
        </label>
        <label className="text-sm font-medium text-navy">เบอร์โทรศัพท์ *
          <input required type="tel" minLength={6} value={form.phone} onChange={set("phone")} className={field} placeholder="08x-xxx-xxxx" data-testid="contact-input-phone" />
        </label>
        <label className="text-sm font-medium text-navy">อีเมล
          <input type="email" value={form.email} onChange={set("email")} className={field} placeholder="name@email.com" data-testid="contact-input-email" />
        </label>
        <label className="text-sm font-medium text-navy">ประเภทการเพาะปลูก
          <select value={form.crop} onChange={set("crop")} className={field} data-testid="contact-select-crop">
            <option value="">เลือก (ไม่บังคับ)</option>
            {solutions.map((s) => <option key={s.id} value={s.label}>{s.label}</option>)}
            <option value="อื่น ๆ">อื่น ๆ</option>
          </select>
        </label>
        <label className="text-sm font-medium text-navy sm:col-span-2">ข้อความ *
          <textarea required minLength={5} rows={4} value={form.message} onChange={set("message")} className={`${field} resize-none`} placeholder="รายละเอียดที่ต้องการสอบถาม" data-testid="contact-input-message" />
        </label>
      </div>
      <button type="submit" disabled={loading} data-testid="contact-submit-btn" className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-navy font-medium text-white transition-[background-color,transform] duration-300 hover:bg-navy-deep active:scale-[0.98] disabled:opacity-70">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : sent ? <Check className="h-4 w-4 text-lime" /> : null}
        {loading ? "กำลังส่ง..." : sent ? "ส่งแล้ว — ส่งอีกครั้งได้" : "ส่งข้อความ"}
      </button>
      <p className="mt-4 text-xs text-muted">การส่งข้อมูลถือว่ายอมรับ <a href="/privacy" className="underline decoration-lime underline-offset-4" data-testid="contact-privacy-link">นโยบายความเป็นส่วนตัว</a></p>
    </form>
  );
}

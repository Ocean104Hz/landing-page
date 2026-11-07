// Replace null values with confirmed company data. Null channels are hidden on the site.
export const siteConfig = {
  name: "iONIQUE",
  tagline: "นวัตกรรมเพื่อการเติบโต ยกระดับทุกการเพาะปลูก",
  description:
    "iONIQUE โซลูชันด้านปุ๋ยและธาตุอาหารพืช เพื่อสนับสนุนการจัดการเพาะปลูกอย่างเหมาะสม",
  logo: {
    src: null as string | null,
    width: 148,
    height: 40,
  },
  company: {
    legalName: null as string | null,
    address: null as string | null,
  },
  contact: {
    phone: null as string | null,
    email: null as string | null,
    lineUrl: null as string | null,
    lineId: null as string | null,
  },
  social: [
    { label: "Facebook", href: null as string | null },
    { label: "YouTube", href: null as string | null },
    { label: "TikTok", href: null as string | null },
  ],
};

export const navItems = [
  { id: "home", label: "หน้าแรก" },
  { id: "about", label: "เกี่ยวกับเรา" },
  { id: "products", label: "ผลิตภัณฑ์" },
  { id: "solutions", label: "โซลูชันการเกษตร" },
  { id: "insights", label: "บทความ" },
  { id: "contact", label: "ติดต่อเรา" },
];

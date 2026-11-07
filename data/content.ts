// All entries are sample structure only. Replace with confirmed product, crop and article data before publishing.
export type CategoryId = "granular" | "specialty" | "organic" | "other";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "granular", label: "ปุ๋ยเม็ด" },
  { id: "specialty", label: "ปุ๋ยสูตรเฉพาะ" },
  { id: "organic", label: "ปุ๋ยอินทรีย์" },
  { id: "other", label: "ผลิตภัณฑ์บำรุงพืชอื่น ๆ" },
];

export type Product = {
  id: string;
  category: CategoryId;
  name: string;
  formula: string;
  description: string;
  image: string;
};

const pending = "คำอธิบายสั้นของผลิตภัณฑ์ — รอข้อมูลที่ได้รับการยืนยันจากฝ่ายผลิตภัณฑ์";

export const products: Product[] = [
  { id: "p01", category: "granular", name: "[ชื่อผลิตภัณฑ์] ปุ๋ยเม็ด 01", formula: "N-P-K xx-xx-xx", description: pending, image: "/images/product-granular.webp" },
  { id: "p02", category: "granular", name: "[ชื่อผลิตภัณฑ์] ปุ๋ยเม็ด 02", formula: "N-P-K xx-xx-xx", description: pending, image: "/images/product-granular.webp" },
  { id: "p03", category: "specialty", name: "[ชื่อผลิตภัณฑ์] สูตรเฉพาะ 01", formula: "สูตร รอยืนยัน", description: pending, image: "/images/product-special.webp" },
  { id: "p04", category: "specialty", name: "[ชื่อผลิตภัณฑ์] สูตรเฉพาะ 02", formula: "สูตร รอยืนยัน", description: pending, image: "/images/product-special.webp" },
  { id: "p05", category: "organic", name: "[ชื่อผลิตภัณฑ์] อินทรีย์ 01", formula: "อินทรียวัตถุ รอยืนยัน", description: pending, image: "/images/product-organic.webp" },
  { id: "p06", category: "organic", name: "[ชื่อผลิตภัณฑ์] อินทรีย์ 02", formula: "อินทรียวัตถุ รอยืนยัน", description: pending, image: "/images/product-organic.webp" },
  { id: "p07", category: "other", name: "[ชื่อผลิตภัณฑ์] บำรุงพืช 01", formula: "ส่วนประกอบ รอยืนยัน", description: pending, image: "/images/product-liquid.webp" },
  { id: "p08", category: "other", name: "[ชื่อผลิตภัณฑ์] บำรุงพืช 02", formula: "ส่วนประกอบ รอยืนยัน", description: pending, image: "/images/product-liquid.webp" },
];

export type Solution = { id: string; label: string; en: string; image: string; area: string };

export const solutions: Solution[] = [
  { id: "rice", label: "นาข้าว", en: "Rice Paddy", image: "/images/sol-rice.webp", area: "lg:col-span-3 lg:row-span-2" },
  { id: "orchard", label: "สวนผลไม้", en: "Orchard", image: "/images/sol-orchard.webp", area: "lg:col-span-2" },
  { id: "field", label: "พืชไร่", en: "Field Crops", image: "/images/sol-field.webp", area: "lg:col-span-1" },
  { id: "vegetable", label: "พืชผัก", en: "Vegetables", image: "/images/sol-veg.webp", area: "lg:col-span-1" },
  { id: "horticulture", label: "พืชสวน", en: "Horticulture", image: "/images/sol-horti.webp", area: "lg:col-span-2" },
];

export type Article = { id: string; category: string; title: string; excerpt: string; image: string };

export const articles: Article[] = [
  { id: "a01", category: "การจัดการดิน", title: "[หัวข้อบทความ] พื้นฐานการดูแลดินก่อนการเพาะปลูก", excerpt: "เนื้อหาตัวอย่างสำหรับจัดวาง — รอการเรียบเรียงและตรวจสอบแหล่งที่มาก่อนเผยแพร่", image: "/images/article-soil.webp" },
  { id: "a02", category: "ธาตุอาหารพืช", title: "[หัวข้อบทความ] ทำความเข้าใจฉลากและสูตรปุ๋ย", excerpt: "เนื้อหาตัวอย่างสำหรับจัดวาง — รอการเรียบเรียงและตรวจสอบแหล่งที่มาก่อนเผยแพร่", image: "/images/article-rice.webp" },
  { id: "a03", category: "การวางแผนเพาะปลูก", title: "[หัวข้อบทความ] การวางแผนแปลงตามฤดูกาล", excerpt: "เนื้อหาตัวอย่างสำหรับจัดวาง — รอการเรียบเรียงและตรวจสอบแหล่งที่มาก่อนเผยแพร่", image: "/images/article-plan.webp" },
];

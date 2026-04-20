# AI Page Publisher

> เผยแพร่หน้า React ที่สร้างด้วย AI ขึ้นเว็บได้ในการ push ครั้งเดียว

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

สร้างหน้าเว็บด้วย Claude, ChatGPT หรือ AI ตัวไหนก็ได้ วางลงใน `src/App.jsx` แล้ว push เท่านั้นเอง

## เริ่มต้นอย่างรวดเร็ว

1. **ขอ JSX จาก AI** — บอก Claude, ChatGPT หรือ AI ตัวไหนก็ได้ให้สร้างหน้าเว็บที่ต้องการเป็น React component ใน**รูปแบบ JSX**
2. **ใช้เทมเพลตนี้**สร้าง repository ของคุณเอง
3. **เปิดใช้งาน GitHub Pages** — ไปที่ **Settings → Pages** แล้วตั้ง Source เป็น **GitHub Actions**
4. **แทนที่** [`src/App.jsx`](../src/App.jsx) ด้วย JSX ที่ AI สร้างให้
5. **Push** ไปที่ `main` — เว็บไซต์ของคุณจะอยู่ที่ `https://<ชื่อผู้ใช้>.github.io/<ชื่อ-repo>/`

## ปรับแต่ง (ไม่บังคับ)

| อะไร | ทำอย่างไร |
| :-- | :-- |
| ชื่อและคำอธิบายหน้า | แก้ไข `<title>` และ `<meta name="description">` ใน [`index.html`](../index.html) |
| โดเมนที่กำหนดเอง | แทนที่ placeholder ใน [`public/CNAME`](../public/CNAME) ด้วยโดเมนของคุณ (เช่น `mysite.com`) ตั้งค่า DNS ให้ชี้ไปที่ GitHub Pages แล้วใส่โดเมนเดียวกันใน **Settings → Pages → Custom domain** หรือสร้าง repository variable ชื่อ `CUSTOM_DOMAIN` ใน **Settings → Secrets and variables → Actions → Variables** |

## มีอะไรบ้าง

เทมเพลตนี้ติดตั้งทุกอย่างที่หน้าเว็บจาก AI มักใช้มาให้พร้อมแล้ว:

- **React 18 + Vite + Tailwind CSS 3** — บิลด์ทันสมัย เร็ว ไม่ต้องตั้งค่า
- **คอมโพเนนต์ shadcn/ui กว่า 40 ตัว** ติดตั้งไว้แล้วใน `src/components/ui/`
- **Radix UI primitives ครบทุกตัว** สำหรับการโต้ตอบที่เข้าถึงได้
- **ไอคอน** — `lucide-react`, `react-icons`, `@heroicons/react`
- **กราฟ** — `recharts`, `chart.js` + `react-chartjs-2`
- **แอนิเมชัน** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **ฟอร์ม** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **ยูทิลิตี้** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` และอีกมากมาย

> Tree-shaking รับประกันว่ามีเฉพาะแพ็กเกจที่ใช้จริงเท่านั้นในไฟล์สุดท้าย

## ตรวจสอบ import ที่ขาดหาย

หากโค้ดจาก AI ใช้แพ็กเกจที่ยังไม่ได้ติดตั้ง ให้รัน:

```bash
npm run check
```

คำสั่งนี้จะสแกนไฟล์ซอร์สและแจ้ง dependency ที่ขาดหาย พร้อมคำสั่ง `npm install` ที่ถูกต้องให้เลย

## Base path ทำงานอย่างไร

ระบบบิลด์จะตรวจจับ base path ที่ถูกต้องโดยอัตโนมัติ:

| สถานการณ์ | Base path |
| :-- | :-- |
| โดเมนที่กำหนดเอง (CNAME มีโดเมน) | `/` |
| GitHub Pages (ไม่มีโดเมนที่กำหนดเอง) | `/<ชื่อ-repo>/` |
| พัฒนาบนเครื่อง | `/` |

ไม่ต้องตั้งค่าอะไรเอง

## โครงสร้างไฟล์

```
├── src/
│   ├── App.jsx              ← แทนที่ไฟล์นี้
│   ├── main.jsx             ← จุดเริ่มต้น (อย่าแตะ)
│   ├── index.css            ← Tailwind + ธีม shadcn
│   ├── lib/utils.js         ← ยูทิลิตี้ cn()
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← คอมโพเนนต์ shadcn/ui
├── public/
│   ├── CNAME                ← โดเมนที่กำหนดเอง (ไม่บังคับ)
│   └── favicon.svg          ← ไอคอนเว็บไซต์
├── scripts/
│   └── check-imports.js     ← ตรวจจับ dependency ที่ขาด
├── .github/workflows/
│   └── deploy.yml           ← ดีพลอยด้วย GitHub Actions
├── index.html               ← ชื่อหน้าและ meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## เพิ่มคอมโพเนนต์ shadcn/ui

เทมเพลตมีคอมโพเนนต์ shadcn กว่า 40 ตัว ถ้าต้องการเพิ่ม:

```bash
npx shadcn@latest add <ชื่อคอมโพเนนต์>
```

`components.json` ตั้งค่าไว้แล้ว

## พัฒนาบนเครื่อง

```bash
npm install
npm run dev
```

เปิด `http://localhost:5173` ในเบราว์เซอร์

## แก้ไขปัญหา

**บิลด์ล้มเหลวเพราะ import error**
รัน `npm run check` เพื่อดูว่าขาดแพ็กเกจอะไร แล้วติดตั้ง

**หน้าว่างเปล่าหลังดีพลอย**
ตรวจสอบว่า Source ของ GitHub Pages ตั้งเป็น **GitHub Actions** ไม่ใช่ "Deploy from a branch"

**โดเมนที่กำหนดเองไม่ทำงาน**
ตรวจสอบว่า `public/CNAME` มีเฉพาะโดเมนของคุณ ตรวจสอบ DNS records ด้วย

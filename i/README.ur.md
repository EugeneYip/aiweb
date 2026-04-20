<div dir="rtl">

# AI Page Publisher

> AI سے بنائے گئے React صفحات کو ایک push میں ویب پر شائع کریں۔

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Claude، ChatGPT یا کسی بھی AI سے صفحہ بنوائیں۔ `src/App.jsx` میں چسپاں کریں۔ Push کریں۔ ہو گیا۔

## فوری آغاز

1. **AI سے JSX مانگیں** — Claude، ChatGPT یا کسی بھی AI سے اپنا صفحہ **JSX فارمیٹ** میں React کمپوننٹ کے طور پر بنوائیں
2. **یہ ٹیمپلیٹ استعمال کریں** اپنا ذخیرہ بنانے کے لیے
3. **GitHub Pages فعال کریں** — **Settings → Pages** میں جائیں اور Source کو **GitHub Actions** پر سیٹ کریں
4. [`src/App.jsx`](../src/App.jsx) کو AI کے بنائے ہوئے JSX سے **بدلیں**
5. `main` پر **push کریں** — آپ کی سائٹ `https://<صارف-نام>.github.io/<ذخیرہ-نام>/` پر لائیو ہو جائے گی

## حسب ضرورت تبدیلی (اختیاری)

| کیا | کیسے |
| :-- | :-- |
| صفحے کا عنوان اور تفصیل | [`index.html`](../index.html) میں `<title>` اور `<meta name="description">` میں ترمیم کریں |
| حسب ضرورت ڈومین | [`public/CNAME`](../public/CNAME) میں placeholder کو اپنے ڈومین سے بدلیں (مثلاً `mysite.com`)، DNS کو GitHub Pages کی طرف پوائنٹ کریں، اور وہی ڈومین **Settings → Pages → Custom domain** میں درج کریں۔ یا **Settings → Secrets and variables → Actions → Variables** میں `CUSTOM_DOMAIN` نام کا repository variable بنائیں |

## کیا شامل ہے

یہ ٹیمپلیٹ AI سے بنے صفحات میں عام طور پر استعمال ہونے والی ہر چیز کے ساتھ پہلے سے تیار ہے:

- **React 18 + Vite + Tailwind CSS 3** — جدید، تیز، بغیر سیٹ اپ کے بلڈ
- **40+ shadcn/ui کمپوننٹ** `src/components/ui/` میں پہلے سے نصب
- **تمام Radix UI پرائمیٹوز** قابل رسائی تعاملات کے لیے
- **آئیکنز** — `lucide-react`، `react-icons`، `@heroicons/react`
- **چارٹس** — `recharts`، `chart.js` + `react-chartjs-2`
- **اینیمیشن** — `framer-motion`، `react-spring`، `tailwindcss-animate`
- **فارمز** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`، `@react-three/fiber`، `@react-three/drei`
- **یوٹیلیٹیز** — `date-fns`، `lodash`، `axios`، `zustand`، `react-router-dom` اور بہت کچھ

> Tree-shaking یقینی بناتا ہے کہ صرف وہی پیکجز فائنل بنڈل میں شامل ہوں جو آپ واقعی استعمال کرتے ہیں۔

## گمشدہ امپورٹس کی جانچ

اگر AI کا کوڈ ایسا پیکج استعمال کرتا ہے جو پہلے سے نصب نہیں ہے تو چلائیں:

```bash
npm run check
```

یہ آپ کی سورس فائلوں کو اسکین کرتا ہے اور گمشدہ ڈیپنڈنسیز بتاتا ہے، ساتھ میں `npm install` کا صحیح کمانڈ بھی دیتا ہے۔

## Base path کیسے کام کرتا ہے

بلڈ خود بخود صحیح base path پہچانتا ہے:

| صورتحال | Base path |
| :-- | :-- |
| حسب ضرورت ڈومین (CNAME میں ڈومین ہے) | `/` |
| GitHub Pages (حسب ضرورت ڈومین نہیں) | `/<ذخیرہ-نام>/` |
| مقامی ترقی | `/` |

کسی دستی سیٹنگ کی ضرورت نہیں۔

## فائل کا ڈھانچہ

```
├── src/
│   ├── App.jsx              ← یہ فائل بدلیں
│   ├── main.jsx             ← انٹری پوائنٹ (تبدیل نہ کریں)
│   ├── index.css            ← Tailwind + shadcn تھیم
│   ├── lib/utils.js         ← cn() یوٹیلیٹی
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui کمپوننٹس
├── public/
│   ├── CNAME                ← حسب ضرورت ڈومین (اختیاری)
│   └── favicon.svg          ← سائٹ آئیکن
├── scripts/
│   └── check-imports.js     ← گمشدہ ڈیپنڈنسیز کا پتہ لگائیں
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions ڈیپلائمنٹ
├── index.html               ← صفحے کا عنوان اور meta ٹیگز
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## مزید shadcn/ui کمپوننٹس شامل کریں

ٹیمپلیٹ میں 40+ shadcn کمپوننٹس شامل ہیں۔ مزید درکار ہوں تو:

```bash
npx shadcn@latest add <کمپوننٹ-نام>
```

`components.json` پہلے سے ترتیب دیا گیا ہے۔

## مقامی ترقی

```bash
npm install
npm run dev
```

براؤزر میں `http://localhost:5173` کھولیں۔

## مسائل کا حل

**امپورٹ غلطیوں سے بلڈ ناکام۔**
`npm run check` چلائیں، دیکھیں کون سے پیکجز غائب ہیں، پھر انسٹال کریں۔

**ڈیپلائے کے بعد صفحہ خالی۔**
یقینی بنائیں کہ GitHub Pages کا Source **GitHub Actions** پر سیٹ ہے، "Deploy from a branch" پر نہیں۔

**حسب ضرورت ڈومین کام نہیں کر رہا۔**
جانچیں کہ `public/CNAME` میں صرف آپ کا ڈومین ہے۔ DNS ریکارڈز بھی چیک کریں۔

</div>

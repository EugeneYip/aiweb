<div dir="rtl">

# AI Page Publisher

> פרסם דפי React שנוצרו על ידי בינה מלאכותית לאינטרנט בדחיפה אחת.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

צור דף עם Claude, ChatGPT או כל בינה מלאכותית. הדבק אותו ב-`src/App.jsx`. דחוף. סיום.

## התחלה מהירה

1. **בקש JSX מהבינה המלאכותית** — אמור ל-Claude, ל-ChatGPT או לכל בינה מלאכותית ליצור את הדף שאתה רוצה כרכיב React ב**פורמט JSX**
2. **השתמש בתבנית זו** ליצירת המאגר שלך
3. **הפעל את GitHub Pages** — עבור אל **Settings → Pages** והגדר את Source ל-**GitHub Actions**
4. **החלף** את [`src/App.jsx`](../src/App.jsx) ב-JSX שנוצר על ידי הבינה המלאכותית
5. **דחוף** ל-`main` — האתר שלך יהיה פעיל בכתובת `https://<שם-משתמש>.github.io/<שם-repo>/`

## התאמה אישית (אופציונלי)

| מה | כיצד |
| :-- | :-- |
| כותרת הדף ותיאורו | ערוך את `<title>` ואת `<meta name="description">` ב-[`index.html`](../index.html) |
| דומיין מותאם אישית | החלף את ה-placeholder ב-[`public/CNAME`](../public/CNAME) בדומיין שלך (למשל `mysite.com`), הגדר DNS ל-GitHub Pages, והכנס את אותו הדומיין ב-**Settings → Pages → Custom domain**. לחלופין, צור משתנה מאגר בשם `CUSTOM_DOMAIN` ב-**Settings → Secrets and variables → Actions → Variables** |

## מה כלול

תבנית זו מוגדרת מראש עם כל מה שארטיפקטים של בינה מלאכותית משתמשים בו בדרך כלל:

- **React 18 + Vite + Tailwind CSS 3** — בנייה מודרנית, מהירה, ללא הגדרה
- **מעל 40 רכיבי shadcn/ui** מותקנים מראש ב-`src/components/ui/`
- **כל ה-Radix UI primitives** לאינטראקציות נגישות
- **אייקונים** — `lucide-react`, `react-icons`, `@heroicons/react`
- **גרפים** — `recharts`, `chart.js` + `react-chartjs-2`
- **אנימציה** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **טפסים** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **תלת-ממד** — `three`, `@react-three/fiber`, `@react-three/drei`
- **כלים** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom`, ועוד רבים

> Tree-shaking מבטיח שרק החבילות שבהן הארטיפקט שלך משתמש בפועל ייכנסו לחבילה הסופית.

## בדיקת ייבואים חסרים

אם הקוד שנוצר על ידי הבינה המלאכותית משתמש בחבילה שאינה מותקנת מראש, הפעל:

```bash
npm run check
```

פעולה זו סורקת את קבצי המקור שלך ומדווחת על תלויות חסרות, עם פקודת `npm install` המדויקת לתיקונן.

## כיצד עובד נתיב הבסיס

הבנייה מזהה אוטומטית את נתיב הבסיס הנכון:

| תרחיש | נתיב הבסיס |
| :-- | :-- |
| דומיין מותאם אישית (ב-CNAME יש דומיין) | `/` |
| GitHub Pages (ללא דומיין מותאם אישית) | `/<שם-repo>/` |
| פיתוח מקומי | `/` |

אין צורך בהגדרה ידנית.

## מבנה הקבצים

```
├── src/
│   ├── App.jsx              ← החלף קובץ זה
│   ├── main.jsx             ← נקודת כניסה (אל תיגע)
│   ├── index.css            ← Tailwind + ערכת נושא shadcn
│   ├── lib/utils.js         ← כלי עזר cn()
│   ├── hooks/use-toast.js   ← Hook לטוסט
│   └── components/ui/       ← רכיבי shadcn/ui
├── public/
│   ├── CNAME                ← דומיין מותאם אישית (אופציונלי)
│   └── favicon.svg          ← אייקון האתר
├── scripts/
│   └── check-imports.js     ← זיהוי תלויות חסרות
├── .github/workflows/
│   └── deploy.yml           ← פריסה עם GitHub Actions
├── index.html               ← כותרת הדף ותגי meta
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## הוספת רכיבי shadcn/ui נוספים

התבנית כוללת מעל 40 רכיבי shadcn. אם אתה זקוק לעוד:

```bash
npx shadcn@latest add <שם-רכיב>
```

קובץ `components.json` כבר מוגדר מראש.

## פיתוח מקומי

```bash
npm install
npm run dev
```

פתח את `http://localhost:5173` בדפדפן.

## פתרון בעיות

**הבנייה נכשלת עם שגיאות ייבוא.**
הפעל את `npm run check` כדי לראות אילו חבילות חסרות, ולאחר מכן התקן אותן.

**הדף ריק לאחר הפריסה.**
ודא שמקור GitHub Pages מוגדר ל-**GitHub Actions**, ולא ל-"Deploy from a branch".

**הדומיין המותאם אישית אינו פועל.**
ודא ש-`public/CNAME` מכיל רק את הדומיין שלך. בדוק את רשומות ה-DNS שלך.

</div>

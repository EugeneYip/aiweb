# AI Page Publisher

> Terbitkan halaman React buatan AI ke web hanya dengan satu push.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Buat halaman dengan Claude, ChatGPT, atau AI mana pun. Tempel ke `src/App.jsx`. Push. Selesai.

## Mulai Cepat

1. **Minta JSX dari AI** — minta Claude, ChatGPT, atau AI mana pun untuk membuat halaman yang kamu inginkan sebagai komponen React dalam **format JSX**
2. **Gunakan template ini** untuk membuat repositori kamu sendiri
3. **Aktifkan GitHub Pages** — buka **Settings → Pages** dan atur Source ke **GitHub Actions**
4. **Ganti** [`src/App.jsx`](../src/App.jsx) dengan JSX yang dibuat oleh AI
5. **Push** ke `main` — situsmu akan aktif di `https://<username>.github.io/<repo-name>/`

## Kustomisasi (Opsional)

| Apa | Cara |
| :-- | :-- |
| Judul dan deskripsi halaman | Edit `<title>` dan `<meta name="description">` di [`index.html`](../index.html) |
| Domain kustom | Ganti placeholder di [`public/CNAME`](../public/CNAME) dengan domainmu (mis. `situsaku.com`), konfigurasikan DNS ke GitHub Pages, lalu masukkan domain yang sama di **Settings → Pages → Custom domain**. Atau buat variabel repositori bernama `CUSTOM_DOMAIN` di **Settings → Secrets and variables → Actions → Variables** |

## Yang Sudah Disertakan

Template ini sudah dikonfigurasi dengan semua yang biasa digunakan oleh artefak AI:

- **React 18 + Vite + Tailwind CSS 3** — build modern, cepat, tanpa konfigurasi
- **Lebih dari 40 komponen shadcn/ui** yang sudah terpasang di `src/components/ui/`
- **Semua Radix UI primitives** untuk interaksi yang aksesibel
- **Ikon** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafik** — `recharts`, `chart.js` + `react-chartjs-2`
- **Animasi** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Formulir** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Utilitas** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom`, dan banyak lagi

> Tree-shaking memastikan hanya paket yang benar-benar kamu gunakan yang masuk ke dalam bundle akhir.

## Periksa Import yang Hilang

Jika kode buatan AI menggunakan paket yang belum terpasang, jalankan:

```bash
npm run check
```

Ini akan memindai file sumbermu dan melaporkan dependensi yang hilang, beserta perintah `npm install` yang tepat untuk memperbaikinya.

## Cara Kerja Base Path

Build secara otomatis mendeteksi base path yang tepat:

| Skenario | Base Path |
| :-- | :-- |
| Domain kustom (CNAME berisi domain) | `/` |
| GitHub Pages (tanpa domain kustom) | `/<repo-name>/` |
| Pengembangan lokal | `/` |

Tidak perlu konfigurasi manual.

## Struktur File

```
├── src/
│   ├── App.jsx              ← GANTI FILE INI
│   ├── main.jsx             ← Titik masuk (jangan diubah)
│   ├── index.css            ← Tailwind + tema shadcn
│   ├── lib/utils.js         ← Utilitas cn()
│   ├── hooks/use-toast.js   ← Hook toast
│   └── components/ui/       ← Komponen shadcn/ui
├── public/
│   ├── CNAME                ← Domain kustom (opsional)
│   └── favicon.svg          ← Ikon situs
├── scripts/
│   └── check-imports.js     ← Deteksi dependensi yang hilang
├── .github/workflows/
│   └── deploy.yml           ← Deployment GitHub Actions
├── index.html               ← Judul halaman dan meta tag
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Menambahkan Komponen shadcn/ui

Template sudah mencakup lebih dari 40 komponen shadcn. Jika butuh lebih:

```bash
npx shadcn@latest add <nama-komponen>
```

`components.json` sudah dikonfigurasi.

## Pengembangan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Pemecahan Masalah

**Build gagal karena error import.**
Jalankan `npm run check` untuk melihat paket yang hilang, lalu pasang.

**Halaman kosong setelah deploy.**
Pastikan source GitHub Pages diatur ke **GitHub Actions**, bukan "Deploy from a branch".

**Domain kustom tidak berfungsi.**
Verifikasi bahwa `public/CNAME` hanya berisi domainmu. Periksa catatan DNS-mu.

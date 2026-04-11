# AI Page Publisher

> Đưa trang React do AI sinh ra lên web chỉ với một lần push.

| [English](README.md) · [中文（臺灣）](README.zh-TW.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português (Brasil)](README.pt-BR.md) · [Español (México)](README.es-MX.md) · [العربية (السعودية)](README.ar-SA.md) · [اردو (پاکستان)](README.ur-PK.md) · [ไทย](README.th.md) · [Italiano](README.it.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) |
| :-- |

Nhờ Claude, ChatGPT hay AI nào cũng được sinh cho bạn một trang, dán vào `src/App.jsx`, push lên là xong.

## Bắt đầu nhanh

1. **Dùng template này** để tạo repo của riêng bạn
2. **Thay** `src/App.jsx` bằng code AI vừa sinh ra
3. **Push** lên `main` — GitHub Actions sẽ tự build và deploy

Site của bạn sẽ lên ở `https://<tên-user>.github.io/<tên-repo>/`.

## Có những gì

Template đã setup sẵn mọi thứ mà trang AI thường dùng:

- **React 18 + Vite + Tailwind CSS 3** — build hiện đại, nhanh, không cần config
- **Hơn 40 component shadcn/ui** đã cài sẵn trong `src/components/ui/`
- **Toàn bộ Radix UI primitives** cho tương tác accessible
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Charts** — `recharts`, `chart.js` với `react-chartjs-2`
- **Animation** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Forms** — `react-hook-form` với `@hookform/resolvers` và `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Tiện ích** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` và nhiều nữa

> Tree-shaking đảm bảo chỉ những package bạn thực sự dùng mới có mặt trong bundle cuối.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:5173` trên trình duyệt.

## Kiểm tra import còn thiếu

Nếu code AI sinh ra dùng một package chưa được cài sẵn, chạy:

```bash
npm run check
```

Lệnh này sẽ quét file source và liệt kê các dependency còn thiếu, kèm câu lệnh `npm install` chính xác để bạn cài ngay.

## Custom domain

1. Sửa `public/CNAME` — thay placeholder bằng domain của bạn (ví dụ `mysite.com`)
2. Trỏ DNS về GitHub Pages
3. Vào repo: **Settings → Pages → Custom domain** — nhập cùng domain
4. Nếu muốn thì verify domain ở **Settings → Verified domains**

Không cần custom domain thì xóa `public/CNAME` hoặc để nguyên cũng được — comment trong file sẽ bị bỏ qua.

## Base path hoạt động thế nào

Build sẽ tự detect đúng base path:

| Trường hợp | Base path |
| :-- | :-- |
| Custom domain (CNAME có domain) | `/` |
| GitHub Pages (không có custom domain) | `/<tên-repo>/` |
| Chạy local | `/` |

Không cần config thủ công.

## Bật GitHub Pages

1. Vào **Settings → Pages** trong repo
2. Đặt **Source** là **GitHub Actions**
3. Push lên `main` — workflow sẽ tự chạy

## Cấu trúc file

```
├── src/
│   ├── App.jsx              ← THAY FILE NÀY
│   ├── main.jsx             ← Entry point (đừng đụng vào)
│   ├── index.css            ← Tailwind + shadcn theme
│   ├── lib/utils.js         ← Utility cn()
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← Component shadcn/ui
├── public/
│   ├── CNAME                ← Custom domain (tùy chọn)
│   └── favicon.svg          ← Site icon
├── scripts/
│   └── check-imports.js     ← Phát hiện dependency còn thiếu
├── .github/workflows/
│   └── deploy.yml           ← Deploy bằng GitHub Actions
├── index.html               ← HTML entry của Vite (có SEO tags)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Thêm component shadcn/ui

Template đã gồm hơn 40 component shadcn. Nếu cần thêm:

```bash
npx shadcn@latest add <tên-component>
```

`components.json` đã được config sẵn.

## Khi gặp sự cố

**Build fail vì lỗi import.**
Chạy `npm run check` để xem thiếu package nào rồi cài chúng.

**Trang trắng trơn sau khi deploy.**
Kiểm tra xem Source của GitHub Pages đã chọn **GitHub Actions** chưa, đừng để ở "Deploy from a branch".

**Custom domain không chạy.**
Xem lại `public/CNAME` có đúng chỉ chứa domain của bạn không, rồi kiểm tra DNS records.

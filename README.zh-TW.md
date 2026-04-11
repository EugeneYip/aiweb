# AI Page Publisher

> 一次推送，將 AI 生成的 React 頁面發佈至網路。

| [English](README.md) · [中文（臺灣）](README.zh-TW.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português (Brasil)](README.pt-BR.md) · [Español (México)](README.es-MX.md) · [العربية (السعودية)](README.ar-SA.md) · [اردو (پاکستان)](README.ur-PK.md) · [ไทย](README.th.md) · [Italiano](README.it.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) |
| :-- |

請使用 Claude、ChatGPT 或任何大型語言模型生成您的頁面，將其貼入 `src/App.jsx`，推送即可完成。

## 快速開始

1. **使用此範本**建立您自己的儲存庫
2. **替換** `src/App.jsx` 為您 AI 生成的成果
3. **推送**至 `main` 分支 — GitHub Actions 將自動建置並部署

您的網站將上線於 `https://<使用者名稱>.github.io/<儲存庫名稱>/`。

## 內建項目

本範本已預先配置 AI 成果常用的所有元件：

- **React 18 + Vite + Tailwind CSS 3** — 現代、快速、零設定的建置流程
- **40 個以上的 shadcn/ui 元件** 已預先安裝於 `src/components/ui/`
- **所有 Radix UI 基礎元件**，提供無障礙互動
- **圖示** — `lucide-react`、`react-icons`、`@heroicons/react`
- **圖表** — `recharts`、`chart.js` 搭配 `react-chartjs-2`
- **動畫** — `framer-motion`、`react-spring`、`tailwindcss-animate`
- **表單** — `react-hook-form` 搭配 `@hookform/resolvers` 與 `zod`
- **3D** — `three`、`@react-three/fiber`、`@react-three/drei`
- **工具** — `date-fns`、`lodash`、`axios`、`zustand`、`react-router-dom` 等

> Tree-shaking 確保只有您實際使用的套件會包含於最終建置產物中。

## 本機開發

```bash
npm install
npm run dev
```

請於瀏覽器開啟 `http://localhost:5173`。

## 檢查缺失的相依套件

若您 AI 生成的成果使用了未預先安裝的套件，請執行：

```bash
npm run check
```

此指令會掃描您的原始檔案，回報所有缺失的相依套件，並提供完整的 `npm install` 指令以供安裝。

## 自訂網域

1. 編輯 `public/CNAME` — 將預留內容替換為您的網域（例如 `mysite.com`）
2. 設定您的 DNS 指向 GitHub Pages
3. 在儲存庫中：**Settings → Pages → Custom domain** — 輸入相同的網域
4. 可選擇於 **Settings → Verified domains** 中驗證該網域

若您不需要自訂網域，請刪除 `public/CNAME` 或保留原樣，檔案中的註解將被忽略。

## Base Path 自動偵測機制

建置流程會自動判斷正確的 base path：

| 情境 | Base Path |
| :-- | :-- |
| 自訂網域（CNAME 已填入網域） | `/` |
| GitHub Pages（無自訂網域） | `/<儲存庫名稱>/` |
| 本機開發 | `/` |

無需任何手動設定。

## 啟用 GitHub Pages

1. 前往儲存庫的 **Settings → Pages**
2. 將 **Source** 設為 **GitHub Actions**
3. 推送至 `main` — 工作流程將自動觸發

## 檔案結構

```
├── src/
│   ├── App.jsx              ← 替換此檔案
│   ├── main.jsx             ← 進入點（請勿更動）
│   ├── index.css            ← Tailwind 與 shadcn 主題
│   ├── lib/utils.js         ← cn() 工具函式
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui 元件
├── public/
│   ├── CNAME                ← 自訂網域（選用）
│   └── favicon.svg          ← 網站圖示
├── scripts/
│   └── check-imports.js     ← 偵測缺失相依套件
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions 部署
├── index.html               ← Vite 進入 HTML（含 SEO 標籤）
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 新增更多 shadcn/ui 元件

範本已包含 40 個以上的 shadcn 元件。若您需要更多，請執行：

```bash
npx shadcn@latest add <元件名稱>
```

`components.json` 已預先配置完成。

## 疑難排解

**建置因匯入錯誤而失敗。**
請執行 `npm run check` 查看缺失的套件，並依指示安裝。

**部署後頁面顯示空白。**
請確認 GitHub Pages 來源已設為 **GitHub Actions**，而非「Deploy from a branch」。

**自訂網域無法運作。**
請確認 `public/CNAME` 僅包含您的網域，並檢查 DNS 設定。

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Settings, Upload, Globe, ArrowUpRight, CheckCircle2, Lightbulb, Anchor, Sun, Moon, Copy, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const translations = {
  en: {
    badge: "AI Page Publisher",
    heroTitle: ["Publish AI pages", "in one push."],
    heroSubtitle:
      "A clean template for turning any AI-generated React artifact into a live website. Replace one file. Push to GitHub. Done.",
    ctaPrimary: "Use this template",
    ctaSecondary: "Read the README",
    readmeUrl: "https://github.com/EugeneYip/aiweb#readme",
    includedLabel: "Included",
    includedTitle: "What you get",
    includes: [
      "40+ shadcn/ui components",
      "160+ pre-installed packages",
      "Tailwind CSS, ready to use",
      "GitHub Actions deployment",
      "Custom domain support",
      "Auto base path detection",
    ],
    howItWorksLabel: "How it works",
    howItWorksTitle: "Three steps to go live",
    howItWorksSubtitle:
      "No coding experience needed. Ask any AI for JSX, paste it, push, done.",
    steps: [
      {
        number: "01",
        title: "Ask your AI for JSX",
        body: "Tell Claude, ChatGPT, or any AI to generate the page you want as a React component in JSX format.",
      },
      {
        number: "02",
        title: "Set up your repo",
        body: "On the GitHub page, click “Use this template” → “Create a new repository” to create your own repo. Your GitHub username and repo name will determine your site URL. Then go to Settings → Pages and set Source to GitHub Actions.",
      },
      {
        number: "03",
        title: "Paste and save",
        body: "Paste the AI-generated JSX into src/App.jsx — delete and replace all existing content — then save the file. GitHub Actions will automatically build and publish your site.",
      },
    ],
    filesLabel: "Your files",
    filesTitle: "What you'll change",
    filesSubtitle:
      "Most of the time you only touch one file. The other two are optional.",
    files: [
      { name: "src/App.jsx", tag: "Required", desc: "Paste your AI-generated JSX here. This is the only file you need to change.", required: true },
      { name: "index.html", tag: "Optional", desc: "Update the page title, meta description, and Google Analytics to match your site.", required: false },
      { name: "public/CNAME", tag: "Optional", desc: "Set your custom domain. Leave as-is if you don't need one.", required: false },
    ],
    tipLabel: "Tip",
    tipText: "If your AI code uses a package not included in the template, run",
    tipCommand: "npm run check",
    tipAfter: "to find and fix missing dependencies.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "Language",
    promptLabel: "Starter Prompt",
    promptHint: "Copy this prompt template into your AI tool, then fill in the blanks.",
    promptVariants: [
      { label: "Landing Page", template: `Create a landing page in JSX format that I can use as src/App.jsx.

Purpose: [promote your product/service — e.g. fitness app, local bakery, consulting firm]
Style: [design style — e.g. minimal, modern, bold, corporate]

Sections to include:
- Hero with headline, subheadline, and CTA button
- Features or benefits (3–4 items with icons)
- Testimonials or social proof
- Pricing or plans
- Final call-to-action
- Footer with links

Requirements:
- Use Tailwind CSS for all styling
- Use shadcn/ui components (import from @/components/ui/) when suitable
- Use lucide-react for icons
- Make it responsive for both mobile and desktop
- Export as: export default function App()
- Single file, no additional CSS files or CDN scripts` },
      { label: "Portfolio", template: `Create a personal portfolio page in JSX format that I can use as src/App.jsx.

Name: [your name]
Role: [your title — e.g. frontend developer, designer, photographer]
Style: [design style — e.g. minimal, creative, elegant, dark]

Sections to include:
- Hero with name, title, and short bio
- Featured projects (3–6 items with images and descriptions)
- Skills or tools
- Experience or education timeline
- Contact form or links

Requirements:
- Use Tailwind CSS for all styling
- Use shadcn/ui components (import from @/components/ui/) when suitable
- Use lucide-react for icons
- Make it responsive for both mobile and desktop
- Export as: export default function App()
- Single file, no additional CSS files or CDN scripts` },
      { label: "Dashboard", template: `Create an admin dashboard page in JSX format that I can use as src/App.jsx.

Purpose: [dashboard purpose — e.g. sales analytics, project management, user metrics]
Style: [design style — e.g. clean, data-dense, modern, corporate]

Sections to include:
- Top navigation bar with search and user menu
- Sidebar with navigation links
- Stats cards (4 KPI cards with icons and trends)
- Charts area (line chart or bar chart using recharts)
- Data table with recent activity

Requirements:
- Use Tailwind CSS for all styling
- Use shadcn/ui components (import from @/components/ui/) when suitable
- Use lucide-react for icons
- Make it responsive for both mobile and desktop
- Export as: export default function App()
- Single file, no additional CSS files or CDN scripts` },
      { label: "Blog", template: `Create a blog homepage in JSX format that I can use as src/App.jsx.

Topic: [blog topic — e.g. tech, travel, cooking, personal journal]
Style: [design style — e.g. minimal, magazine, editorial, cozy]

Sections to include:
- Header with blog name and navigation
- Featured post with large image
- Recent posts grid (6–9 cards with title, excerpt, date, category)
- Newsletter signup section
- Footer with links

Requirements:
- Use Tailwind CSS for all styling
- Use shadcn/ui components (import from @/components/ui/) when suitable
- Use lucide-react for icons
- Make it responsive for both mobile and desktop
- Export as: export default function App()
- Single file, no additional CSS files or CDN scripts` },
      { label: "SaaS", template: `Create a SaaS product page in JSX format that I can use as src/App.jsx.

Product: [your SaaS product — e.g. project management tool, email platform, AI assistant]
Style: [design style — e.g. modern, professional, playful, enterprise]

Sections to include:
- Hero with product name, tagline, CTA, and product mockup
- Trusted-by logos bar
- Key features (3–4 with icons and descriptions)
- How it works (3 steps)
- Pricing table (3 tiers: Free, Pro, Enterprise)
- FAQ section
- Final CTA with signup

Requirements:
- Use Tailwind CSS for all styling
- Use shadcn/ui components (import from @/components/ui/) when suitable
- Use lucide-react for icons
- Make it responsive for both mobile and desktop
- Export as: export default function App()
- Single file, no additional CSS files or CDN scripts` },
    ],
    promptCopy: "Copy",
    promptCopied: "Copied!",
  },
  zh: {
    badge: "AI Page Publisher",
    heroTitle: ["Push 一次", "AI 頁面就上線"],
    heroSubtitle:
      "把 AI 生成的 React 成品直接變成線上網站的簡潔範本。換掉一個檔案，push 到 GitHub，就完成了。",
    ctaPrimary: "使用這個範本",
    ctaSecondary: "閱讀 README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.zh.md",
    includedLabel: "內建項目",
    includedTitle: "範本包含甚麼",
    includes: [
      "40+ 個 shadcn/ui 元件",
      "160+ 個預裝套件",
      "Tailwind CSS，開箱即用",
      "GitHub Actions 自動部署",
      "支援自訂網域",
      "自動偵測 base path",
    ],
    howItWorksLabel: "運作方式",
    howItWorksTitle: "三步就上線",
    howItWorksSubtitle:
      "不需要寫程式經驗。請 AI 生成 JSX，貼上，push，即可上線。",
    steps: [
      {
        number: "01",
        title: "請 AI 生成 JSX",
        body: "告訴 Claude、ChatGPT 或任何 AI，請它用 JSX 格式幫你生成想要的 React 頁面。",
      },
      {
        number: "02",
        title: "建立你的 repo",
        body: "在 GitHub 頁面點選「Use this template」→「Create a new repository」建立自己的 repo。註冊 GitHub 時的使用者名稱與新 repo 名稱都會影響網站網址。接著到 Settings → Pages 把 Source 設成 GitHub Actions。",
      },
      {
        number: "03",
        title: "貼上並儲存",
        body: "將 AI 生成的 JSX 貼進 src/App.jsx——刪除並取代原本裡面的所有內容——然後儲存檔案即可。GitHub Actions 會自動 build 並發佈你的網站。",
      },
    ],
    filesLabel: "你的檔案",
    filesTitle: "需要改的檔案",
    filesSubtitle: "通常只需要修改一個檔案，其餘兩個是進階選用。",
    files: [
      { name: "src/App.jsx", tag: "必要", desc: "把 AI 生成的 JSX 貼到這裡。這是唯一需要改的檔案。", required: true },
      { name: "index.html", tag: "選用", desc: "更新頁面標題、描述和 Google Analytics，讓它符合你的網站。", required: false },
      { name: "public/CNAME", tag: "選用", desc: "設定你的自訂網域。不需要的話維持原樣即可。", required: false },
    ],
    tipLabel: "小提示",
    tipText: "如果 AI 的程式碼用到了範本沒預裝的套件，執行",
    tipCommand: "npm run check",
    tipAfter: "就能找到並修復缺少的相依套件。",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "版權所有。",
    langLabel: "語言",
    promptLabel: "Prompt 範本",
    promptHint: "複製以下 prompt 貼到你的 AI 工具中，填入空白處即可。",
    promptVariants: [
      { label: "落地頁", template: `請用 JSX 格式製作一個落地頁，可以直接替換 src/App.jsx。

目的：[推廣的產品或服務——例如：健身 App、在地麵包店、顧問公司]
風格：[設計風格——例如：簡約、現代、大膽、企業專業]

需要包含的區塊:
- 主視覺（標題、副標題與 CTA 按鈕）
- 特色或優勢（3–4 項搭配圖示）
- 客戶評價或社會認證
- 定價或方案
- 最終行動呼籲
- 頁尾連結

技術要求：
- 使用 Tailwind CSS 處理所有樣式
- 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
- 使用 lucide-react 圖示
- 必須支援手機與桌面響應式
- 匯出方式：export default function App()
- 單一檔案，不要額外的 CSS 檔或 CDN 腳本` },
      { label: "作品集", template: `請用 JSX 格式製作一個個人作品集頁面，可以直接替換 src/App.jsx。

姓名：[你的名字]
角色：[你的職稱——例如：前端工程師、設計師、攝影師]
風格：[設計風格——例如：簡約、創意、優雅、深色]

需要包含的區塊:
- 個人介紹（姓名、職稱、簡短自我介紹）
- 精選作品（3–6 項，搭配圖片與說明）
- 技能或工具
- 經歷或學歷時間軸
- 聯絡表單或連結

技術要求：
- 使用 Tailwind CSS 處理所有樣式
- 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
- 使用 lucide-react 圖示
- 必須支援手機與桌面響應式
- 匯出方式：export default function App()
- 單一檔案，不要額外的 CSS 檔或 CDN 腳本` },
      { label: "儀表板", template: `請用 JSX 格式製作一個後台儀表板頁面，可以直接替換 src/App.jsx。

目的：[儀表板用途——例如：銷售分析、專案管理、用戶數據]
風格：[設計風格——例如：簡潔、資料密集、現代、企業專業]

需要包含的區塊:
- 頂部導覽列（搜尋與使用者選單）
- 側邊欄導覽連結
- 統計卡片（4 個 KPI 卡片搭配圖示與趨勢）
- 圖表區（使用 recharts 的折線圖或柱狀圖）
- 近期活動資料表

技術要求：
- 使用 Tailwind CSS 處理所有樣式
- 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
- 使用 lucide-react 圖示
- 必須支援手機與桌面響應式
- 匯出方式：export default function App()
- 單一檔案，不要額外的 CSS 檔或 CDN 腳本` },
      { label: "部落格", template: `請用 JSX 格式製作一個部落格首頁，可以直接替換 src/App.jsx。

主題：[部落格主題——例如：科技、旅遊、烹飪、個人日誌]
風格：[設計風格——例如：簡約、雜誌風、編輯風、溫馨]

需要包含的區塊:
- 頁首（部落格名稱與導覽）
- 精選文章（大圖展示）
- 最新文章區（6–9 張卡片，含標題、摘要、日期、分類）
- 電子報訂閱區
- 頁尾連結

技術要求：
- 使用 Tailwind CSS 處理所有樣式
- 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
- 使用 lucide-react 圖示
- 必須支援手機與桌面響應式
- 匯出方式：export default function App()
- 單一檔案，不要額外的 CSS 檔或 CDN 腳本` },
      { label: "SaaS 產品", template: `請用 JSX 格式製作一個 SaaS 產品頁面，可以直接替換 src/App.jsx。

產品：[你的 SaaS 產品——例如：專案管理工具、Email 平台、AI 助手]
風格：[設計風格——例如：現代、專業、活潑、企業級]

需要包含的區塊:
- 主視覺（產品名稱、標語、CTA 與產品截圖）
- 合作品牌 logo 列
- 核心功能（3–4 項搭配圖示與說明）
- 使用流程（3 個步驟）
- 定價表（3 個方案：免費、專業、企業）
- 常見問題
- 最終 CTA 與註冊

技術要求：
- 使用 Tailwind CSS 處理所有樣式
- 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
- 使用 lucide-react 圖示
- 必須支援手機與桌面響應式
- 匯出方式：export default function App()
- 單一檔案，不要額外的 CSS 檔或 CDN 腳本` },
    ],
    promptCopy: "複製",
    promptCopied: "已複製！",
  },
  "zh-CN": {
    badge: "AI Page Publisher",
    heroTitle: ["Push 一次", "AI 页面就上线"],
    heroSubtitle:
      "把 AI 生成的 React 成品直接变成线上网站的简洁模板。换掉一个文件，push 到 GitHub，就完成了。",
    ctaPrimary: "使用这个模板",
    ctaSecondary: "阅读 README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.zh-CN.md",
    includedLabel: "内置项目",
    includedTitle: "模板包含什么",
    includes: [
      "40+ 个 shadcn/ui 组件",
      "160+ 个预装包",
      "Tailwind CSS，开箱即用",
      "GitHub Actions 自动部署",
      "支持自定义域名",
      "自动检测 base path",
    ],
    howItWorksLabel: "运作方式",
    howItWorksTitle: "三步就上线",
    howItWorksSubtitle:
      "不需要编程经验。让 AI 生成 JSX，粘贴，push，即可上线。",
    steps: [
      {
        number: "01",
        title: "让 AI 生成 JSX",
        body: "告诉 Claude、ChatGPT 或任何 AI，让它用 JSX 格式帮你生成想要的 React 页面。",
      },
      {
        number: "02",
        title: "创建你的 repo",
        body: "在 GitHub 页面点击「Use this template」→「Create a new repository」创建自己的 repo。注册 GitHub 时的用户名和新 repo 名称都会影响网站网址。然后到 Settings → Pages 把 Source 设成 GitHub Actions。",
      },
      {
        number: "03",
        title: "粘贴并保存",
        body: "将 AI 生成的 JSX 粘贴到 src/App.jsx——删除并替换原来的所有内容——然后保存文件即可。GitHub Actions 会自动 build 并发布你的网站。",
      },
    ],
    filesLabel: "你的文件",
    filesTitle: "需要改的文件",
    filesSubtitle: "通常只需要修改一个文件，其余两个是进阶选用。",
    files: [
      { name: "src/App.jsx", tag: "必要", desc: "把 AI 生成的 JSX 粘贴到这里。这是唯一需要改的文件。", required: true },
      { name: "index.html", tag: "选用", desc: "更新页面标题、描述和 Google Analytics，让它符合你的网站。", required: false },
      { name: "public/CNAME", tag: "选用", desc: "设置你的自定义域名。不需要的话保持原样即可。", required: false },
    ],
    tipLabel: "小提示",
    tipText: "如果 AI 的代码用到了模板没预装的包，执行",
    tipCommand: "npm run check",
    tipAfter: "就能找到并修复缺少的依赖包。",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "保留所有权利。",
    langLabel: "语言",
    promptLabel: "Prompt 模板",
    promptHint: "复制以下 prompt 粘贴到你的 AI 工具中，填入空白处即可。",
    promptVariants: [
      { label: "落地页", template: `请用 JSX 格式制作一个落地页，可以直接替换 src/App.jsx。

目的：[推广的产品或服务——例如：健身 App、本地面包店、咨询公司]
风格：[设计风格——例如：简约、现代、大胆、企业专业]

需要包含的区块:
- 主视觉（标题、副标题与 CTA 按钮）
- 特色或优势（3–4 项搭配图标）
- 客户评价或社会认证
- 定价或方案
- 最终行动呼吁
- 页脚链接

技术要求：
- 使用 Tailwind CSS 处理所有样式
- 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
- 使用 lucide-react 图标
- 必须支持手机与桌面响应式
- 导出方式：export default function App()
- 单一文件，不要额外的 CSS 文件或 CDN 脚本` },
      { label: "作品集", template: `请用 JSX 格式制作一个个人作品集页面，可以直接替换 src/App.jsx。

姓名：[你的名字]
角色：[你的职称——例如：前端工程师、设计师、摄影师]
风格：[设计风格——例如：简约、创意、优雅、深色]

需要包含的区块:
- 个人介绍（姓名、职称、简短自我介绍）
- 精选作品（3–6 项，搭配图片与说明）
- 技能或工具
- 经历或学历时间轴
- 联系表单或链接

技术要求：
- 使用 Tailwind CSS 处理所有样式
- 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
- 使用 lucide-react 图标
- 必须支持手机与桌面响应式
- 导出方式：export default function App()
- 单一文件，不要额外的 CSS 文件或 CDN 脚本` },
      { label: "仪表板", template: `请用 JSX 格式制作一个后台仪表板页面，可以直接替换 src/App.jsx。

目的：[仪表板用途——例如：销售分析、项目管理、用户数据]
风格：[设计风格——例如：简洁、数据密集、现代、企业专业]

需要包含的区块:
- 顶部导航栏（搜索与用户菜单）
- 侧边栏导航链接
- 统计卡片（4 个 KPI 卡片搭配图标与趋势）
- 图表区（使用 recharts 的折线图或柱状图）
- 近期活动数据表

技术要求：
- 使用 Tailwind CSS 处理所有样式
- 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
- 使用 lucide-react 图标
- 必须支持手机与桌面响应式
- 导出方式：export default function App()
- 单一文件，不要额外的 CSS 文件或 CDN 脚本` },
      { label: "博客", template: `请用 JSX 格式制作一个博客首页，可以直接替换 src/App.jsx。

主题：[博客主题——例如：科技、旅游、烹饪、个人日志]
风格：[设计风格——例如：简约、杂志风、编辑风、温馨]

需要包含的区块:
- 页头（博客名称与导航）
- 精选文章（大图展示）
- 最新文章区（6–9 张卡片，含标题、摘要、日期、分类）
- 邮件订阅区
- 页脚链接

技术要求：
- 使用 Tailwind CSS 处理所有样式
- 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
- 使用 lucide-react 图标
- 必须支持手机与桌面响应式
- 导出方式：export default function App()
- 单一文件，不要额外的 CSS 文件或 CDN 脚本` },
      { label: "SaaS 产品", template: `请用 JSX 格式制作一个 SaaS 产品页面，可以直接替换 src/App.jsx。

产品：[你的 SaaS 产品——例如：项目管理工具、Email 平台、AI 助手]
风格：[设计风格——例如：现代、专业、活泼、企业级]

需要包含的区块:
- 主视觉（产品名称、标语、CTA 与产品截图）
- 合作品牌 logo 列
- 核心功能（3–4 项搭配图标与说明）
- 使用流程（3 个步骤）
- 定价表（3 个方案：免费、专业、企业）
- 常见问题
- 最终 CTA 与注册

技术要求：
- 使用 Tailwind CSS 处理所有样式
- 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
- 使用 lucide-react 图标
- 必须支持手机与桌面响应式
- 导出方式：export default function App()
- 单一文件，不要额外的 CSS 文件或 CDN 脚本` },
    ],
    promptCopy: "复制",
    promptCopied: "已复制！",
  },
  es: {
    badge: "AI Page Publisher",
    heroTitle: ["Publica páginas de IA", "con un solo push."],
    heroSubtitle:
      "Una plantilla sencilla para llevar cualquier componente de React generado por IA directo a la web. Cambias un archivo, haces push a GitHub y listo.",
    ctaPrimary: "Usar esta plantilla",
    ctaSecondary: "Leer el README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.es.md",
    includedLabel: "Incluido",
    includedTitle: "Lo que obtienes",
    includes: [
      "Más de 40 componentes de shadcn/ui",
      "Más de 160 paquetes preinstalados",
      "Tailwind CSS, listo para usar",
      "Despliegue con GitHub Actions",
      "Soporte para dominio personalizado",
      "Detección automática de base path",
    ],
    howItWorksLabel: "Cómo funciona",
    howItWorksTitle: "Tres pasos y listo",
    howItWorksSubtitle:
      "No necesitas saber programar. Pide JSX a la IA, pégalo, haz push y ya.",
    steps: [
      {
        number: "01",
        title: "Pide JSX a tu IA",
        body: "Dile a Claude, ChatGPT o la IA que prefieras que te genere la página que quieres como componente React en formato JSX.",
      },
      {
        number: "02",
        title: "Configura tu repo",
        body: "En la página de GitHub, haz clic en “Use this template” → “Create a new repository” para crear tu propio repo. Tu nombre de usuario de GitHub y el nombre del repo determinarán la URL de tu sitio. Luego ve a Settings → Pages y pon Source en GitHub Actions.",
      },
      {
        number: "03",
        title: "Pega y guarda",
        body: "Pega el JSX generado por la IA en src/App.jsx — borra y reemplaza todo el contenido existente — y guarda el archivo. GitHub Actions se encarga de compilar y publicar tu sitio automáticamente.",
      },
    ],
    filesLabel: "Tus archivos",
    filesTitle: "Qué vas a cambiar",
    filesSubtitle:
      "Casi siempre solo tocas un archivo. Los otros dos son opcionales.",
    files: [
      { name: "src/App.jsx", tag: "Obligatorio", desc: "Pega aquí el JSX que te generó la IA. Es el único archivo que tienes que cambiar.", required: true },
      { name: "index.html", tag: "Opcional", desc: "Actualiza el título, la descripción y Google Analytics para que coincidan con tu sitio.", required: false },
      { name: "public/CNAME", tag: "Opcional", desc: "Configura tu dominio personalizado. Si no lo necesitas, déjalo como está.", required: false },
    ],
    tipLabel: "Tip",
    tipText: "Si el código de tu IA usa un paquete que no viene en la plantilla, ejecuta",
    tipCommand: "npm run check",
    tipAfter: "para encontrar y arreglar las dependencias que faltan.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Todos los derechos reservados.",
    langLabel: "Idioma",
    promptLabel: "Prompt inicial",
    promptHint: "Copia este prompt y pégalo en tu herramienta de IA. Rellena los espacios en blanco.",
    promptVariants: [
      { label: "Landing Page", template: `Crea una landing page en formato JSX que pueda usar como src/App.jsx.

Propósito: [lo que promocionas — ej. app de fitness, panadería local, consultora]
Estilo: [estilo de diseño — ej. minimalista, moderno, llamativo, corporativo]

Secciones a incluir:
- Hero con título, subtítulo y botón CTA
- Características o beneficios (3–4 elementos con iconos)
- Testimonios o prueba social
- Precios o planes
- Llamada a la acción final
- Footer con enlaces

Requisitos:
- Usa Tailwind CSS para todos los estilos
- Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
- Usa lucide-react para los iconos
- Hazlo responsivo para móvil y escritorio
- Exportar como: export default function App()
- Un solo archivo, sin archivos CSS adicionales ni scripts de CDN` },
      { label: "Portafolio", template: `Crea una página de portafolio personal en formato JSX que pueda usar como src/App.jsx.

Nombre: [tu nombre]
Rol: [tu título — ej. desarrollador frontend, diseñador, fotógrafo]
Estilo: [estilo de diseño — ej. minimalista, creativo, elegante, oscuro]

Secciones a incluir:
- Hero con nombre, título y breve biografía
- Proyectos destacados (3–6 con imágenes y descripciones)
- Habilidades o herramientas
- Experiencia o educación (línea de tiempo)
- Formulario de contacto o enlaces

Requisitos:
- Usa Tailwind CSS para todos los estilos
- Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
- Usa lucide-react para los iconos
- Hazlo responsivo para móvil y escritorio
- Exportar como: export default function App()
- Un solo archivo, sin archivos CSS adicionales ni scripts de CDN` },
      { label: "Dashboard", template: `Crea un panel de administración (dashboard) en formato JSX que pueda usar como src/App.jsx.

Propósito: [propósito del dashboard — ej. análisis de ventas, gestión de proyectos, métricas de usuarios]
Estilo: [estilo de diseño — ej. limpio, denso en datos, moderno, corporativo]

Secciones a incluir:
- Barra de navegación superior con búsqueda y menú de usuario
- Barra lateral con enlaces de navegación
- Tarjetas de estadísticas (4 KPIs con iconos y tendencias)
- Área de gráficos (gráfico de líneas o barras usando recharts)
- Tabla de datos con actividad reciente

Requisitos:
- Usa Tailwind CSS para todos los estilos
- Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
- Usa lucide-react para los iconos
- Hazlo responsivo para móvil y escritorio
- Exportar como: export default function App()
- Un solo archivo, sin archivos CSS adicionales ni scripts de CDN` },
      { label: "Blog", template: `Crea una página de inicio de blog en formato JSX que pueda usar como src/App.jsx.

Tema: [tema del blog — ej. tecnología, viajes, cocina, diario personal]
Estilo: [estilo de diseño — ej. minimalista, revista, editorial, acogedor]

Secciones a incluir:
- Encabezado con nombre del blog y navegación
- Post destacado con imagen grande
- Grid de posts recientes (6–9 tarjetas con título, extracto, fecha, categoría)
- Sección de suscripción al newsletter
- Footer con enlaces

Requisitos:
- Usa Tailwind CSS para todos los estilos
- Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
- Usa lucide-react para los iconos
- Hazlo responsivo para móvil y escritorio
- Exportar como: export default function App()
- Un solo archivo, sin archivos CSS adicionales ni scripts de CDN` },
      { label: "SaaS", template: `Crea una página de producto SaaS en formato JSX que pueda usar como src/App.jsx.

Producto: [tu producto SaaS — ej. herramienta de gestión, plataforma de email, asistente IA]
Estilo: [estilo de diseño — ej. moderno, profesional, divertido, empresarial]

Secciones a incluir:
- Hero con nombre del producto, eslogan, CTA y mockup
- Barra de logos de empresas que lo usan
- Funcionalidades clave (3–4 con iconos y descripciones)
- Cómo funciona (3 pasos)
- Tabla de precios (3 niveles: Gratis, Pro, Empresa)
- Sección de preguntas frecuentes
- CTA final con registro

Requisitos:
- Usa Tailwind CSS para todos los estilos
- Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
- Usa lucide-react para los iconos
- Hazlo responsivo para móvil y escritorio
- Exportar como: export default function App()
- Un solo archivo, sin archivos CSS adicionales ni scripts de CDN` },
    ],
    promptCopy: "Copiar",
    promptCopied: "¡Copiado!",
  },
  ja: {
    badge: "AI Page Publisher",
    heroTitle: ["ワンプッシュで", "AIページを公開。"],
    heroSubtitle:
      "AI が生成した React コードを、そのままウェブサイトとして公開できるシンプルなテンプレート。ファイルを 1 つ差し替えて、GitHub に push するだけ。",
    ctaPrimary: "このテンプレートを使う",
    ctaSecondary: "README を読む",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ja.md",
    includedLabel: "含まれるもの",
    includedTitle: "テンプレートの中身",
    includes: [
      "shadcn/ui コンポーネント 40 種以上",
      "160 以上のパッケージをプリインストール",
      "Tailwind CSS をそのまま利用可能",
      "GitHub Actions で自動デプロイ",
      "カスタムドメイン対応",
      "ベースパスを自動検出",
    ],
    howItWorksLabel: "仕組み",
    howItWorksTitle: "3 ステップで公開",
    howItWorksSubtitle:
      "プログラミングの経験は不要。AI に JSX を頼んで、貼り付けて、push するだけ。",
    steps: [
      {
        number: "01",
        title: "AI に JSX を頼む",
        body: "Claude、ChatGPT、お好きな AI に、作りたいページを JSX 形式の React コンポーネントとして書いてもらいます。",
      },
      {
        number: "02",
        title: "リポジトリを準備",
        body: "GitHub ページで「Use this template」→「Create a new repository」をクリックして自分のリポジトリを作成。GitHub のユーザー名とリポジトリ名がサイトの URL に影響します。次に Settings → Pages で Source を GitHub Actions に設定。",
      },
      {
        number: "03",
        title: "貼り付けて保存",
        body: "AI が生成した JSX を src/App.jsx に貼り付けます。既存の内容をすべて削除して置き換えてから、ファイルを保存してください。GitHub Actions が自動でビルドして公開してくれます。",
      },
    ],
    filesLabel: "ファイル",
    filesTitle: "変更するファイル",
    filesSubtitle:
      "ほとんどの場合、触るのは 1 ファイルだけ。残り 2 つは任意です。",
    files: [
      { name: "src/App.jsx", tag: "必須", desc: "AI が生成した JSX をここに貼り付けます。変更が必要なのはこのファイルだけです。", required: true },
      { name: "index.html", tag: "任意", desc: "ページのタイトル、説明、Google Analytics を自分のサイトに合わせて変更します。", required: false },
      { name: "public/CNAME", tag: "任意", desc: "カスタムドメインを設定します。不要ならそのままで OK。", required: false },
    ],
    tipLabel: "ヒント",
    tipText: "AI のコードがテンプレートに含まれないパッケージを使っている場合は",
    tipCommand: "npm run check",
    tipAfter: "を実行すれば、足りない依存を見つけて修正できます。",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "言語",
    promptLabel: "プロンプトテンプレート",
    promptHint: "以下のプロンプトをAIツールにコピー＆ペーストし、空欄を埋めてください。",
    promptVariants: [
      { label: "LP", template: `src/App.jsx として使えるランディングページを JSX 形式で作成してください。

目的：[宣伝する商品やサービス — 例：フィットネスアプリ、地元のパン屋、コンサルティング会社]
スタイル：[デザインスタイル — 例：ミニマル、モダン、インパクト重視、コーポレート]

含めるセクション:
- ヒーロー（見出し、サブ見出し、CTA ボタン）
- 特徴やメリット（3–4 項目、アイコン付き）
- お客様の声・社会的証明
- 料金プラン
- 最終 CTA
- フッターリンク

技術要件：
- スタイリングはすべて Tailwind CSS を使用
- 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
- アイコンは lucide-react を使用
- モバイルとデスクトップの両方に対応（レスポンシブ）
- エクスポート形式：export default function App()
- 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要` },
      { label: "ポートフォリオ", template: `src/App.jsx として使えるポートフォリオページを JSX 形式で作成してください。

名前：[あなたの名前]
肩書き：[あなたの職種 — 例：フロントエンドエンジニア、デザイナー、フォトグラファー]
スタイル：[デザインスタイル — 例：ミニマル、クリエイティブ、エレガント、ダーク]

含めるセクション:
- ヒーロー（名前、肩書き、短い自己紹介）
- 代表作品（3–6 件、画像と説明付き）
- スキル・ツール
- 経歴・学歴タイムライン
- お問い合わせフォームまたはリンク

技術要件：
- スタイリングはすべて Tailwind CSS を使用
- 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
- アイコンは lucide-react を使用
- モバイルとデスクトップの両方に対応（レスポンシブ）
- エクスポート形式：export default function App()
- 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要` },
      { label: "ダッシュボード", template: `src/App.jsx として使える管理ダッシュボードを JSX 形式で作成してください。

目的：[ダッシュボードの用途 — 例：売上分析、プロジェクト管理、ユーザー指標]
スタイル：[デザインスタイル — 例：クリーン、データ密度高め、モダン、コーポレート]

含めるセクション:
- 上部ナビゲーションバー（検索とユーザーメニュー）
- サイドバーナビゲーション
- 統計カード（4 つの KPI カード、アイコンとトレンド付き）
- チャートエリア（recharts による折れ線または棒グラフ）
- 最近のアクティビティテーブル

技術要件：
- スタイリングはすべて Tailwind CSS を使用
- 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
- アイコンは lucide-react を使用
- モバイルとデスクトップの両方に対応（レスポンシブ）
- エクスポート形式：export default function App()
- 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要` },
      { label: "ブログ", template: `src/App.jsx として使えるブログトップページを JSX 形式で作成してください。

テーマ：[ブログのテーマ — 例：テック、旅行、料理、個人日記]
スタイル：[デザインスタイル — 例：ミニマル、マガジン風、エディトリアル、温かみのある]

含めるセクション:
- ヘッダー（ブログ名とナビゲーション）
- 注目記事（大きな画像付き）
- 最新記事グリッド（6–9 枚のカード、タイトル・抜粋・日付・カテゴリ付き）
- ニュースレター登録セクション
- フッターリンク

技術要件：
- スタイリングはすべて Tailwind CSS を使用
- 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
- アイコンは lucide-react を使用
- モバイルとデスクトップの両方に対応（レスポンシブ）
- エクスポート形式：export default function App()
- 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要` },
      { label: "SaaS", template: `src/App.jsx として使える SaaS プロダクトページを JSX 形式で作成してください。

プロダクト：[あなたの SaaS 製品 — 例：プロジェクト管理ツール、メールプラットフォーム、AI アシスタント]
スタイル：[デザインスタイル — 例：モダン、プロフェッショナル、ポップ、エンタープライズ]

含めるセクション:
- ヒーロー（プロダクト名、キャッチコピー、CTA、スクリーンショット）
- 導入企業のロゴバー
- 主要機能（3–4 つ、アイコンと説明付き）
- 使い方（3 ステップ）
- 料金表（3 プラン：無料、プロ、エンタープライズ）
- よくある質問
- 最終 CTA・登録

技術要件：
- スタイリングはすべて Tailwind CSS を使用
- 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
- アイコンは lucide-react を使用
- モバイルとデスクトップの両方に対応（レスポンシブ）
- エクスポート形式：export default function App()
- 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要` },
    ],
    promptCopy: "コピー",
    promptCopied: "コピーしました！",
  },
  pt: {
    badge: "AI Page Publisher",
    heroTitle: ["Publique páginas de IA", "com um único push."],
    heroSubtitle:
      "Um template simples para transformar qualquer componente React gerado por IA em um site no ar. Troque um arquivo. Faça push no GitHub. Pronto.",
    ctaPrimary: "Usar este template",
    ctaSecondary: "Ler o README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.pt.md",
    includedLabel: "Incluído",
    includedTitle: "O que você recebe",
    includes: [
      "40+ componentes shadcn/ui",
      "160+ pacotes pré-instalados",
      "Tailwind CSS, pronto para usar",
      "Deploy com GitHub Actions",
      "Suporte a domínio personalizado",
      "Detecção automática de base path",
    ],
    howItWorksLabel: "Como funciona",
    howItWorksTitle: "Três passos para o ar",
    howItWorksSubtitle:
      "Não precisa saber programar. Peça JSX à IA, cole, faça push e pronto.",
    steps: [
      {
        number: "01",
        title: "Peça JSX à sua IA",
        body: "Diga ao Claude, ChatGPT ou qualquer IA para gerar a página que você quer como componente React em formato JSX.",
      },
      {
        number: "02",
        title: "Configure seu repo",
        body: "Na página do GitHub, clique em “Use this template” → “Create a new repository” para criar seu repositório. Seu nome de usuário do GitHub e o nome do repo determinarão a URL do seu site. Depois vá em Settings → Pages e defina Source como GitHub Actions.",
      },
      {
        number: "03",
        title: "Cole e salve",
        body: "Cole o JSX gerado pela IA em src/App.jsx — apague e substitua todo o conteúdo existente — e salve o arquivo. O GitHub Actions compila e publica seu site automaticamente.",
      },
    ],
    filesLabel: "Seus arquivos",
    filesTitle: "O que você vai mudar",
    filesSubtitle:
      "Na maioria das vezes você só altera um arquivo. Os outros dois são opcionais.",
    files: [
      { name: "src/App.jsx", tag: "Obrigatório", desc: "Cole o JSX gerado pela IA aqui. Este é o único arquivo que você precisa mudar.", required: true },
      { name: "index.html", tag: "Opcional", desc: "Atualize o título, a descrição e o Google Analytics para combinar com seu site.", required: false },
      { name: "public/CNAME", tag: "Opcional", desc: "Configure seu domínio personalizado. Se não precisar, deixe como está.", required: false },
    ],
    tipLabel: "Dica",
    tipText: "Se o código da IA usa um pacote que não está no template, execute",
    tipCommand: "npm run check",
    tipAfter: "para encontrar e corrigir dependências faltantes.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Todos os direitos reservados.",
    langLabel: "Idioma",
    promptLabel: "Prompt inicial",
    promptHint: "Copie este prompt e cole na sua ferramenta de IA. Preencha os espaços em branco.",
    promptVariants: [
      { label: "Landing Page", template: `Crie uma landing page em formato JSX que eu possa usar como src/App.jsx.

Propósito: [o que você promove — ex: app de fitness, padaria local, consultoria]
Estilo: [estilo de design — ex: minimalista, moderno, ousado, corporativo]

Seções a incluir:
- Hero com título, subtítulo e botão CTA
- Funcionalidades ou benefícios (3–4 itens com ícones)
- Depoimentos ou prova social
- Preços ou planos
- Chamada final para ação
- Footer com links

Requisitos:
- Use Tailwind CSS para toda a estilização
- Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
- Use lucide-react para ícones
- Torne responsivo para mobile e desktop
- Exportar como: export default function App()
- Arquivo único, sem arquivos CSS adicionais ou scripts de CDN` },
      { label: "Portfólio", template: `Crie uma página de portfólio pessoal em formato JSX que eu possa usar como src/App.jsx.

Nome: [seu nome]
Cargo: [seu título — ex: desenvolvedor frontend, designer, fotógrafo]
Estilo: [estilo de design — ex: minimalista, criativo, elegante, escuro]

Seções a incluir:
- Hero com nome, título e breve biografia
- Projetos em destaque (3–6 com imagens e descrições)
- Habilidades ou ferramentas
- Experiência ou formação (linha do tempo)
- Formulário de contato ou links

Requisitos:
- Use Tailwind CSS para toda a estilização
- Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
- Use lucide-react para ícones
- Torne responsivo para mobile e desktop
- Exportar como: export default function App()
- Arquivo único, sem arquivos CSS adicionais ou scripts de CDN` },
      { label: "Dashboard", template: `Crie uma página de dashboard administrativo em formato JSX que eu possa usar como src/App.jsx.

Propósito: [propósito do dashboard — ex: análise de vendas, gestão de projetos, métricas de usuários]
Estilo: [estilo de design — ex: limpo, denso em dados, moderno, corporativo]

Seções a incluir:
- Barra de navegação superior com busca e menu do usuário
- Barra lateral com links de navegação
- Cards de estatísticas (4 KPIs com ícones e tendências)
- Área de gráficos (gráfico de linha ou barras usando recharts)
- Tabela de dados com atividade recente

Requisitos:
- Use Tailwind CSS para toda a estilização
- Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
- Use lucide-react para ícones
- Torne responsivo para mobile e desktop
- Exportar como: export default function App()
- Arquivo único, sem arquivos CSS adicionais ou scripts de CDN` },
      { label: "Blog", template: `Crie uma página inicial de blog em formato JSX que eu possa usar como src/App.jsx.

Tema: [tema do blog — ex: tecnologia, viagem, culinária, diário pessoal]
Estilo: [estilo de design — ex: minimalista, revista, editorial, aconchegante]

Seções a incluir:
- Cabeçalho com nome do blog e navegação
- Post em destaque com imagem grande
- Grid de posts recentes (6–9 cards com título, resumo, data, categoria)
- Seção de inscrição na newsletter
- Footer com links

Requisitos:
- Use Tailwind CSS para toda a estilização
- Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
- Use lucide-react para ícones
- Torne responsivo para mobile e desktop
- Exportar como: export default function App()
- Arquivo único, sem arquivos CSS adicionais ou scripts de CDN` },
      { label: "SaaS", template: `Crie uma página de produto SaaS em formato JSX que eu possa usar como src/App.jsx.

Produto: [seu produto SaaS — ex: ferramenta de gestão, plataforma de email, assistente IA]
Estilo: [estilo de design — ex: moderno, profissional, divertido, empresarial]

Seções a incluir:
- Hero com nome do produto, slogan, CTA e mockup
- Barra de logos de empresas parceiras
- Funcionalidades-chave (3–4 com ícones e descrições)
- Como funciona (3 passos)
- Tabela de preços (3 planos: Grátis, Pro, Empresa)
- Seção de perguntas frequentes
- CTA final com cadastro

Requisitos:
- Use Tailwind CSS para toda a estilização
- Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
- Use lucide-react para ícones
- Torne responsivo para mobile e desktop
- Exportar como: export default function App()
- Arquivo único, sem arquivos CSS adicionais ou scripts de CDN` },
    ],
    promptCopy: "Copiar",
    promptCopied: "Copiado!",
  },
  ar: {
    badge: "AI Page Publisher",
    heroTitle: ["انشر صفحات الذكاء الاصطناعي", "بضغطة واحدة."],
    heroSubtitle:
      "قالب بسيط لتحويل أي مكوّن React مولّد بالذكاء الاصطناعي إلى موقع ويب. استبدل ملفاً واحداً. ادفع إلى GitHub. انتهى.",
    ctaPrimary: "استخدم هذا القالب",
    ctaSecondary: "اقرأ الـ README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ar.md",
    includedLabel: "مُتضمَّن",
    includedTitle: "ما الذي تحصل عليه",
    includes: [
      "أكثر من 40 مكوّن shadcn/ui",
      "أكثر من 160 حزمة مثبّتة مسبقاً",
      "Tailwind CSS جاهز للاستخدام",
      "نشر تلقائي عبر GitHub Actions",
      "دعم النطاق المخصص",
      "اكتشاف تلقائي لمسار القاعدة",
    ],
    howItWorksLabel: "كيف يعمل",
    howItWorksTitle: "ثلاث خطوات للنشر",
    howItWorksSubtitle:
      "لا تحتاج خبرة في البرمجة. اطلب JSX من الذكاء الاصطناعي، الصقه، ادفعه، انتهى.",
    steps: [
      {
        number: "01",
        title: "اطلب JSX من الذكاء الاصطناعي",
        body: "اطلب من Claude أو ChatGPT أو أي ذكاء اصطناعي أن يولّد صفحتك كمكوّن React بتنسيق JSX.",
      },
      {
        number: "02",
        title: "أعدّ مستودعك",
        body: "في صفحة GitHub، اضغط على “Use this template” ← “Create a new repository” لإنشاء مستودعك الخاص. اسم المستخدم واسم المستودع الجديد سيحددان رابط موقعك. ثم اذهب إلى Settings ← Pages واضبط Source على GitHub Actions.",
      },
      {
        number: "03",
        title: "الصق واحفظ",
        body: "الصق كود JSX الذي أنشأه الذكاء الاصطناعي في src/App.jsx — احذف كل المحتوى الموجود واستبدله — ثم احفظ الملف. سيقوم GitHub Actions بالبناء والنشر تلقائياً.",
      },
    ],
    filesLabel: "ملفاتك",
    filesTitle: "ما الذي ستغيّره",
    filesSubtitle:
      "في أغلب الأحيان ستعدّل ملفاً واحداً فقط. الملفان الآخران اختياريان.",
    files: [
      { name: "src/App.jsx", tag: "مطلوب", desc: "الصق كود JSX المولّد بالذكاء الاصطناعي هنا. هذا هو الملف الوحيد الذي تحتاج تغييره.", required: true },
      { name: "index.html", tag: "اختياري", desc: "حدّث عنوان الصفحة والوصف وGoogle Analytics ليتوافقوا مع موقعك.", required: false },
      { name: "public/CNAME", tag: "اختياري", desc: "اضبط نطاقك المخصص. اتركه كما هو إن لم تحتج واحداً.", required: false },
    ],
    tipLabel: "نصيحة",
    tipText: "إذا استخدم كود الذكاء الاصطناعي حزمة غير موجودة في القالب، نفّذ",
    tipCommand: "npm run check",
    tipAfter: "لاكتشاف وإصلاح التبعيات المفقودة.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "جميع الحقوق محفوظة.",
    langLabel: "اللغة",
    promptLabel: "قالب البرومبت",
    promptHint: "انسخ هذا البرومبت والصقه في أداة الذكاء الاصطناعي، ثم املأ الفراغات.",
    promptVariants: [
      { label: "صفحة هبوط", template: `أنشئ صفحة هبوط بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

الغرض: [ما تروّج له — مثلاً: تطبيق لياقة، مخبز محلي، شركة استشارات]
الأسلوب: [أسلوب التصميم — مثلاً: بسيط، عصري، جريء، مؤسسي]

الأقسام المطلوبة:
- بطل الصفحة (عنوان رئيسي، عنوان فرعي، زر CTA)
- الميزات أو الفوائد (3–4 عناصر بأيقونات)
- شهادات العملاء أو الإثبات الاجتماعي
- الأسعار أو الخطط
- دعوة أخيرة لاتخاذ إجراء
- تذييل مع روابط

المتطلبات التقنية:
- استخدم Tailwind CSS لجميع الأنماط
- استخدم مكونات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
- استخدم lucide-react للأيقونات
- اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
- صدّرها كـ: export default function App()
- ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN` },
      { label: "معرض أعمال", template: `أنشئ صفحة معرض أعمال شخصي بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

الاسم: [اسمك]
الدور: [مسماك الوظيفي — مثلاً: مطور واجهات، مصمم، مصور]
الأسلوب: [أسلوب التصميم — مثلاً: بسيط، إبداعي، أنيق، داكن]

الأقسام المطلوبة:
- مقدمة (الاسم، المسمى الوظيفي، نبذة مختصرة)
- أعمال مميزة (3–6 مع صور وأوصاف)
- المهارات أو الأدوات
- الخبرات أو التعليم (خط زمني)
- نموذج تواصل أو روابط

المتطلبات التقنية:
- استخدم Tailwind CSS لجميع الأنماط
- استخدم مكونات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
- استخدم lucide-react للأيقونات
- اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
- صدّرها كـ: export default function App()
- ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN` },
      { label: "لوحة تحكم", template: `أنشئ لوحة تحكم إدارية بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

الغرض: [غرض اللوحة — مثلاً: تحليلات المبيعات، إدارة المشاريع، مقاييس المستخدمين]
الأسلوب: [أسلوب التصميم — مثلاً: نظيف، كثيف البيانات، عصري، مؤسسي]

الأقسام المطلوبة:
- شريط تنقل علوي مع بحث وقائمة المستخدم
- شريط جانبي مع روابط التنقل
- بطاقات إحصائيات (4 مؤشرات KPI بأيقونات واتجاهات)
- منطقة الرسوم البيانية (خطي أو أعمدة باستخدام recharts)
- جدول بيانات النشاط الأخير

المتطلبات التقنية:
- استخدم Tailwind CSS لجميع الأنماط
- استخدم مكونات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
- استخدم lucide-react للأيقونات
- اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
- صدّرها كـ: export default function App()
- ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN` },
      { label: "مدوّنة", template: `أنشئ صفحة رئيسية لمدوّنة بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

الموضوع: [موضوع المدوّنة — مثلاً: تقنية، سفر، طبخ، يوميات شخصية]
الأسلوب: [أسلوب التصميم — مثلاً: بسيط، مجلة، تحريري، دافئ]

الأقسام المطلوبة:
- رأس الصفحة (اسم المدوّنة والتنقل)
- مقال مميز بصورة كبيرة
- شبكة المقالات الأخيرة (6–9 بطاقات بعنوان وملخص وتاريخ وتصنيف)
- قسم الاشتراك في النشرة البريدية
- تذييل مع روابط

المتطلبات التقنية:
- استخدم Tailwind CSS لجميع الأنماط
- استخدم مكونات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
- استخدم lucide-react للأيقونات
- اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
- صدّرها كـ: export default function App()
- ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN` },
      { label: "SaaS", template: `أنشئ صفحة منتج SaaS بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

المنتج: [منتجك SaaS — مثلاً: أداة إدارة مشاريع، منصة بريد إلكتروني، مساعد ذكاء اصطناعي]
الأسلوب: [أسلوب التصميم — مثلاً: عصري، احترافي، مرح، مؤسسي]

الأقسام المطلوبة:
- بطل الصفحة (اسم المنتج، شعار، CTA، نموذج المنتج)
- شريط شعارات الشركات المستخدمة
- الميزات الرئيسية (3–4 بأيقونات وأوصاف)
- كيف يعمل (3 خطوات)
- جدول الأسعار (3 مستويات: مجاني، احترافي، مؤسسي)
- قسم الأسئلة الشائعة
- CTA أخير مع التسجيل

المتطلبات التقنية:
- استخدم Tailwind CSS لجميع الأنماط
- استخدم مكونات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
- استخدم lucide-react للأيقونات
- اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
- صدّرها كـ: export default function App()
- ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN` },
    ],
    promptCopy: "نسخ",
    promptCopied: "تم النسخ!",
  },
  fr: {
    badge: "AI Page Publisher",
    heroTitle: ["Publiez des pages IA", "en un seul push."],
    heroSubtitle:
      "Un template simple pour transformer n'importe quel composant React généré par IA en site web. Remplacez un fichier. Pushez sur GitHub. C'est fait.",
    ctaPrimary: "Utiliser ce template",
    ctaSecondary: "Lire le README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.fr.md",
    includedLabel: "Inclus",
    includedTitle: "Ce que vous obtenez",
    includes: [
      "Plus de 40 composants shadcn/ui",
      "Plus de 160 paquets préinstallés",
      "Tailwind CSS, prêt à l'emploi",
      "Déploiement via GitHub Actions",
      "Support de domaine personnalisé",
      "Détection automatique du base path",
    ],
    howItWorksLabel: "Comment ça marche",
    howItWorksTitle: "Trois étapes pour publier",
    howItWorksSubtitle:
      "Aucune expérience en programmation requise. Demandez du JSX à l'IA, collez-le, pushez, c'est fait.",
    steps: [
      {
        number: "01",
        title: "Demandez du JSX à votre IA",
        body: "Dites à Claude, ChatGPT ou n'importe quelle IA de générer la page que vous voulez en tant que composant React au format JSX.",
      },
      {
        number: "02",
        title: "Configurez votre dépôt",
        body: "Sur la page GitHub, cliquez sur « Use this template » → « Create a new repository » pour créer votre dépôt. Votre nom d'utilisateur GitHub et le nom du repo détermineront l'URL de votre site. Ensuite, allez dans Settings → Pages et définissez Source sur GitHub Actions.",
      },
      {
        number: "03",
        title: "Collez et enregistrez",
        body: "Collez le JSX généré par l'IA dans src/App.jsx — supprimez et remplacez tout le contenu existant — puis enregistrez le fichier. GitHub Actions compile et publie votre site automatiquement.",
      },
    ],
    filesLabel: "Vos fichiers",
    filesTitle: "Ce que vous allez modifier",
    filesSubtitle:
      "La plupart du temps, vous ne touchez qu'un seul fichier. Les deux autres sont optionnels.",
    files: [
      { name: "src/App.jsx", tag: "Requis", desc: "Collez le JSX généré par l'IA ici. C'est le seul fichier que vous devez modifier.", required: true },
      { name: "index.html", tag: "Optionnel", desc: "Mettez à jour le titre, la description et Google Analytics pour correspondre à votre site.", required: false },
      { name: "public/CNAME", tag: "Optionnel", desc: "Configurez votre domaine personnalisé. Laissez tel quel si vous n'en avez pas besoin.", required: false },
    ],
    tipLabel: "Astuce",
    tipText: "Si le code de l'IA utilise un paquet non inclus dans le template, exécutez",
    tipCommand: "npm run check",
    tipAfter: "pour trouver et corriger les dépendances manquantes.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Tous droits réservés.",
    langLabel: "Langue",
    promptLabel: "Prompt de départ",
    promptHint: "Copiez ce prompt et collez-le dans votre outil IA. Remplissez les champs vides.",
    promptVariants: [
      { label: "Landing Page", template: `Créez une landing page en format JSX que je puisse utiliser comme src/App.jsx.

Objectif : [ce que vous promouvez — ex : appli fitness, boulangerie locale, cabinet de conseil]
Style : [style de design — ex : minimaliste, moderne, audacieux, corporate]

Sections à inclure:
- Hero avec titre, sous-titre et bouton CTA
- Fonctionnalités ou avantages (3–4 éléments avec icônes)
- Témoignages ou preuve sociale
- Tarifs ou plans
- Appel à l'action final
- Footer avec liens

Exigences :
- Utilisez Tailwind CSS pour tout le style
- Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
- Utilisez lucide-react pour les icônes
- Rendez la page responsive pour mobile et desktop
- Exportez comme : export default function App()
- Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN` },
      { label: "Portfolio", template: `Créez une page portfolio personnelle en format JSX que je puisse utiliser comme src/App.jsx.

Nom : [votre nom]
Rôle : [votre titre — ex : développeur frontend, designer, photographe]
Style : [style de design — ex : minimaliste, créatif, élégant, sombre]

Sections à inclure:
- Hero avec nom, titre et courte bio
- Projets phares (3–6 avec images et descriptions)
- Compétences ou outils
- Expérience ou formation (chronologie)
- Formulaire de contact ou liens

Exigences :
- Utilisez Tailwind CSS pour tout le style
- Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
- Utilisez lucide-react pour les icônes
- Rendez la page responsive pour mobile et desktop
- Exportez comme : export default function App()
- Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN` },
      { label: "Tableau de bord", template: `Créez un tableau de bord administratif en format JSX que je puisse utiliser comme src/App.jsx.

Objectif : [objectif du dashboard — ex : analyses de ventes, gestion de projets, métriques utilisateurs]
Style : [style de design — ex : épuré, dense en données, moderne, corporate]

Sections à inclure:
- Barre de navigation supérieure avec recherche et menu utilisateur
- Barre latérale avec liens de navigation
- Cartes de statistiques (4 KPIs avec icônes et tendances)
- Zone de graphiques (courbes ou barres avec recharts)
- Tableau de données avec activité récente

Exigences :
- Utilisez Tailwind CSS pour tout le style
- Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
- Utilisez lucide-react pour les icônes
- Rendez la page responsive pour mobile et desktop
- Exportez comme : export default function App()
- Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN` },
      { label: "Blog", template: `Créez une page d'accueil de blog en format JSX que je puisse utiliser comme src/App.jsx.

Thème : [thème du blog — ex : tech, voyage, cuisine, journal personnel]
Style : [style de design — ex : minimaliste, magazine, éditorial, chaleureux]

Sections à inclure:
- En-tête avec nom du blog et navigation
- Article à la une avec grande image
- Grille d'articles récents (6–9 cartes avec titre, extrait, date, catégorie)
- Section inscription newsletter
- Footer avec liens

Exigences :
- Utilisez Tailwind CSS pour tout le style
- Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
- Utilisez lucide-react pour les icônes
- Rendez la page responsive pour mobile et desktop
- Exportez comme : export default function App()
- Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN` },
      { label: "SaaS", template: `Créez une page produit SaaS en format JSX que je puisse utiliser comme src/App.jsx.

Produit : [votre produit SaaS — ex : outil de gestion, plateforme email, assistant IA]
Style : [style de design — ex : moderne, professionnel, ludique, entreprise]

Sections à inclure:
- Hero avec nom du produit, slogan, CTA et mockup
- Barre de logos partenaires
- Fonctionnalités clés (3–4 avec icônes et descriptions)
- Comment ça marche (3 étapes)
- Tableau de prix (3 niveaux : Gratuit, Pro, Entreprise)
- Section FAQ
- CTA final avec inscription

Exigences :
- Utilisez Tailwind CSS pour tout le style
- Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
- Utilisez lucide-react pour les icônes
- Rendez la page responsive pour mobile et desktop
- Exportez comme : export default function App()
- Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN` },
    ],
    promptCopy: "Copier",
    promptCopied: "Copié !",
  },
  hi: {
    badge: "AI Page Publisher",
    heroTitle: ["AI पेज पब्लिश करें", "एक ही push में।"],
    heroSubtitle:
      "AI से बना कोई भी React कंपोनेंट सीधे लाइव वेबसाइट में बदलने का आसान टेम्पलेट। एक फ़ाइल बदलें। GitHub पर push करें। बस।",
    ctaPrimary: "यह टेम्पलेट इस्तेमाल करें",
    ctaSecondary: "README पढ़ें",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.hi.md",
    includedLabel: "शामिल है",
    includedTitle: "आपको क्या मिलता है",
    includes: [
      "40+ shadcn/ui कंपोनेंट",
      "160+ पैकेज पहले से इंस्टॉल",
      "Tailwind CSS, तुरंत इस्तेमाल के लिए तैयार",
      "GitHub Actions से डिप्लॉयमेंट",
      "कस्टम डोमेन सपोर्ट",
      "ऑटो base path डिटेक्शन",
    ],
    howItWorksLabel: "कैसे काम करता है",
    howItWorksTitle: "तीन स्टेप में लाइव",
    howItWorksSubtitle:
      "कोडिंग का अनुभव ज़रूरी नहीं। AI से JSX माँगें, पेस्ट करें, push करें, बस।",
    steps: [
      {
        number: "01",
        title: "AI से JSX माँगें",
        body: "Claude, ChatGPT या किसी भी AI से अपना पेज JSX फ़ॉर्मेट में React कंपोनेंट के रूप में बनवाएँ।",
      },
      {
        number: "02",
        title: "अपना repo सेट करें",
        body: "GitHub पेज पर “Use this template” → “Create a new repository” पर क्लिक करके अपना repo बनाएँ। आपका GitHub यूज़रनेम और repo का नाम आपकी साइट का URL तय करेगा। फिर Settings → Pages में जाकर Source को GitHub Actions पर सेट करें।",
      },
      {
        number: "03",
        title: "पेस्ट करें और सेव करें",
        body: "AI द्वारा जनरेट किया गया JSX src/App.jsx में पेस्ट करें — पहले से मौजूद सभी कंटेंट को डिलीट करके रिप्लेस करें — फिर फ़ाइल सेव करें। GitHub Actions ऑटोमैटिक बिल्ड और पब्लिश कर देगा।",
      },
    ],
    filesLabel: "आपकी फ़ाइलें",
    filesTitle: "क्या बदलना है",
    filesSubtitle:
      "ज़्यादातर सिर्फ़ एक फ़ाइल बदलनी होती है। बाकी दो वैकल्पिक हैं।",
    files: [
      { name: "src/App.jsx", tag: "ज़रूरी", desc: "AI द्वारा बनाया गया JSX यहाँ पेस्ट करें। बस यही एक फ़ाइल बदलनी है।", required: true },
      { name: "index.html", tag: "वैकल्पिक", desc: "पेज का टाइटल, विवरण और Google Analytics अपनी साइट के अनुसार अपडेट करें।", required: false },
      { name: "public/CNAME", tag: "वैकल्पिक", desc: "अपना कस्टम डोमेन सेट करें। ज़रूरत न हो तो ऐसे ही छोड़ दें।", required: false },
    ],
    tipLabel: "सुझाव",
    tipText: "अगर AI का कोड ऐसा पैकेज इस्तेमाल करता है जो टेम्पलेट में नहीं है, तो चलाएँ",
    tipCommand: "npm run check",
    tipAfter: "गायब डिपेंडेंसी खोजने और ठीक करने के लिए।",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "सर्वाधिकार सुरक्षित।",
    langLabel: "भाषा",
    promptLabel: "शुरुआती प्रॉम्प्ट",
    promptHint: "इस प्रॉम्प्ट को कॉपी करके अपने AI टूल में पेस्ट करें। खाली जगहें भरें।",
    promptVariants: [
      { label: "लैंडिंग पेज", template: `src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक लैंडिंग पेज बनाएं।

उद्देश्य: [किसका प्रचार — उदा: फिटनेस ऐप, लोकल बेकरी, कंसल्टिंग फर्म]
शैली: [डिज़ाइन शैली — उदा: न्यूनतम, आधुनिक, बोल्ड, कॉर्पोरेट]

शामिल करने के सेक्शन:
- हेडलाइन, सब-हेडलाइन और CTA बटन के साथ हीरो
- फ़ीचर्स या फ़ायदे (3–4 आइटम आइकन के साथ)
- ग्राहक प्रशंसापत्र या सोशल प्रूफ
- प्राइसिंग या प्लान
- अंतिम कॉल-टू-एक्शन
- फ़ुटर लिंक

तकनीकी आवश्यकताएं:
- सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
- उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
- आइकन के लिए lucide-react का उपयोग करें
- मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएं
- एक्सपोर्ट: export default function App()
- एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं` },
      { label: "पोर्टफोलियो", template: `src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक पोर्टफोलियो पेज बनाएं।

नाम: [आपका नाम]
भूमिका: [आपकी उपाधि — उदा: फ्रंटएंड डेवलपर, डिज़ाइनर, फ़ोटोग्राफ़र]
शैली: [डिज़ाइन शैली — उदा: न्यूनतम, रचनात्मक, सुरुचिपूर्ण, डार्क]

शामिल करने के सेक्शन:
- नाम, उपाधि और संक्षिप्त परिचय के साथ हीरो
- प्रमुख प्रोजेक्ट (3–6, चित्र और विवरण के साथ)
- कौशल या टूल्स
- अनुभव या शिक्षा टाइमलाइन
- संपर्क फ़ॉर्म या लिंक

तकनीकी आवश्यकताएं:
- सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
- उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
- आइकन के लिए lucide-react का उपयोग करें
- मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएं
- एक्सपोर्ट: export default function App()
- एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं` },
      { label: "डैशबोर्ड", template: `src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक एडमिन डैशबोर्ड बनाएं।

उद्देश्य: [डैशबोर्ड का उद्देश्य — उदा: बिक्री विश्लेषण, प्रोजेक्ट प्रबंधन, यूज़र मेट्रिक्स]
शैली: [डिज़ाइन शैली — उदा: साफ़, डेटा-सघन, आधुनिक, कॉर्पोरेट]

शामिल करने के सेक्शन:
- सर्च और यूज़र मेनू के साथ टॉप नेविगेशन बार
- साइडबार नेविगेशन लिंक
- स्टैट्स कार्ड (4 KPI कार्ड, आइकन और ट्रेंड के साथ)
- चार्ट एरिया (recharts का उपयोग करके लाइन या बार चार्ट)
- हाल की गतिविधि डेटा टेबल

तकनीकी आवश्यकताएं:
- सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
- उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
- आइकन के लिए lucide-react का उपयोग करें
- मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएं
- एक्सपोर्ट: export default function App()
- एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं` },
      { label: "ब्लॉग", template: `src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक ब्लॉग होमपेज बनाएं।

विषय: [ब्लॉग का विषय — उदा: टेक, यात्रा, खाना पकाना, व्यक्तिगत डायरी]
शैली: [डिज़ाइन शैली — उदा: न्यूनतम, मैगज़ीन, एडिटोरियल, आरामदायक]

शामिल करने के सेक्शन:
- ब्लॉग नाम और नेविगेशन के साथ हेडर
- बड़ी छवि के साथ फ़ीचर्ड पोस्ट
- हाल के पोस्ट ग्रिड (6–9 कार्ड, शीर्षक, सारांश, तारीख, श्रेणी)
- न्यूज़लेटर सब्सक्रिप्शन सेक्शन
- फ़ुटर लिंक

तकनीकी आवश्यकताएं:
- सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
- उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
- आइकन के लिए lucide-react का उपयोग करें
- मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएं
- एक्सपोर्ट: export default function App()
- एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं` },
      { label: "SaaS", template: `src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक SaaS प्रोडक्ट पेज बनाएं।

प्रोडक्ट: [आपका SaaS प्रोडक्ट — उदा: प्रोजेक्ट मैनेजमेंट टूल, ईमेल प्लेटफ़ॉर्म, AI असिस्टेंट]
शैली: [डिज़ाइन शैली — उदा: आधुनिक, पेशेवर, चंचल, एंटरप्राइज़]

शामिल करने के सेक्शन:
- प्रोडक्ट नाम, टैगलाइन, CTA और मॉकअप के साथ हीरो
- भरोसेमंद ब्रांड लोगो बार
- मुख्य फ़ीचर्स (3–4, आइकन और विवरण के साथ)
- कैसे काम करता है (3 स्टेप्स)
- प्राइसिंग टेबल (3 टियर: फ्री, प्रो, एंटरप्राइज़)
- FAQ सेक्शन
- अंतिम CTA और साइनअप

तकनीकी आवश्यकताएं:
- सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
- उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
- आइकन के लिए lucide-react का उपयोग करें
- मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएं
- एक्सपोर्ट: export default function App()
- एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं` },
    ],
    promptCopy: "कॉपी करें",
    promptCopied: "कॉपी हो गया!",
  },
  ko: {
    badge: "AI Page Publisher",
    heroTitle: ["AI 페이지를 배포하세요,", "단 한 번의 push로."],
    heroSubtitle:
      "AI가 생성한 React 컴포넌트를 바로 라이브 웹사이트로 만드는 간결한 템플릿. 파일 하나만 교체하고 GitHub에 push하면 끝.",
    ctaPrimary: "이 템플릿 사용하기",
    ctaSecondary: "README 읽기",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ko.md",
    includedLabel: "포함 항목",
    includedTitle: "무엇이 들어있나요",
    includes: [
      "40개 이상의 shadcn/ui 컴포넌트",
      "160개 이상의 사전 설치 패키지",
      "Tailwind CSS, 바로 사용 가능",
      "GitHub Actions 자동 배포",
      "커스텀 도메인 지원",
      "자동 base path 감지",
    ],
    howItWorksLabel: "작동 방식",
    howItWorksTitle: "세 단계로 배포",
    howItWorksSubtitle:
      "코딩 경험이 없어도 됩니다. AI에게 JSX를 요청하고, 붙여넣고, push하면 끝.",
    steps: [
      {
        number: "01",
        title: "AI에게 JSX 요청",
        body: "Claude, ChatGPT 또는 아무 AI에게 원하는 페이지를 JSX 형식의 React 컴포넌트로 생성해 달라고 하세요.",
      },
      {
        number: "02",
        title: "저장소 설정",
        body: "GitHub 페이지에서 “Use this template” → “Create a new repository”를 클릭하여 저장소를 만드세요. GitHub 사용자 이름과 저장소 이름이 사이트 URL에 반영됩니다. 그런 다음 Settings → Pages에서 Source를 GitHub Actions로 설정하세요.",
      },
      {
        number: "03",
        title: "붙여넣고 저장",
        body: "AI가 생성한 JSX를 src/App.jsx에 붙여넣으세요 — 기존 내용을 모두 삭제하고 교체한 후 — 파일을 저장하세요. GitHub Actions가 자동으로 빌드하고 배포합니다.",
      },
    ],
    filesLabel: "파일",
    filesTitle: "변경할 파일",
    filesSubtitle:
      "대부분의 경우 파일 하나만 수정하면 됩니다. 나머지 둘은 선택사항입니다.",
    files: [
      { name: "src/App.jsx", tag: "필수", desc: "AI가 생성한 JSX를 여기에 붙여넣으세요. 변경이 필요한 유일한 파일입니다.", required: true },
      { name: "index.html", tag: "선택", desc: "페이지 제목, 설명, Google Analytics를 사이트에 맞게 수정하세요.", required: false },
      { name: "public/CNAME", tag: "선택", desc: "커스텀 도메인을 설정하세요. 필요 없으면 그대로 두세요.", required: false },
    ],
    tipLabel: "팁",
    tipText: "AI 코드가 템플릿에 포함되지 않은 패키지를 사용한다면",
    tipCommand: "npm run check",
    tipAfter: "을 실행하여 누락된 의존성을 찾아 수정할 수 있습니다.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "언어",
    promptLabel: "시작 프롬프트",
    promptHint: "이 프롬프트를 복사하여 AI 도구에 붙여넣고 빈칸을 채우세요.",
    promptVariants: [
      { label: "랜딩 페이지", template: `src/App.jsx로 바로 사용할 수 있는 랜딩 페이지를 JSX 형식으로 만들어 주세요.

목적: [홍보할 제품/서비스 — 예: 피트니스 앱, 동네 빵집, 컨설팅 회사]
스타일: [디자인 스타일 — 예: 미니멀, 모던, 강렬한, 기업형]

포함할 섹션:
- 헤드라인, 서브 헤드라인, CTA 버튼이 있는 히어로
- 특징 또는 장점 (3–4개, 아이콘 포함)
- 고객 후기 또는 소셜 프루프
- 요금제 또는 플랜
- 최종 CTA
- 푸터 링크

기술 요구사항:
- 모든 스타일링에 Tailwind CSS 사용
- 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
- 아이콘은 lucide-react 사용
- 모바일과 데스크톱 모두 반응형으로 제작
- 내보내기 형식: export default function App()
- 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이` },
      { label: "포트폴리오", template: `src/App.jsx로 바로 사용할 수 있는 포트폴리오 페이지를 JSX 형식으로 만들어 주세요.

이름: [본인 이름]
역할: [직함 — 예: 프론트엔드 개발자, 디자이너, 포토그래퍼]
스타일: [디자인 스타일 — 예: 미니멀, 크리에이티브, 우아한, 다크]

포함할 섹션:
- 이름, 직함, 짧은 소개가 있는 히어로
- 대표 프로젝트 (3–6개, 이미지와 설명 포함)
- 스킬 또는 도구
- 경력 또는 학력 타임라인
- 연락처 폼 또는 링크

기술 요구사항:
- 모든 스타일링에 Tailwind CSS 사용
- 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
- 아이콘은 lucide-react 사용
- 모바일과 데스크톱 모두 반응형으로 제작
- 내보내기 형식: export default function App()
- 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이` },
      { label: "대시보드", template: `src/App.jsx로 바로 사용할 수 있는 관리자 대시보드를 JSX 형식으로 만들어 주세요.

목적: [대시보드 용도 — 예: 매출 분석, 프로젝트 관리, 사용자 지표]
스타일: [디자인 스타일 — 예: 깔끔한, 데이터 밀집, 모던, 기업형]

포함할 섹션:
- 검색과 사용자 메뉴가 있는 상단 내비게이션 바
- 사이드바 내비게이션 링크
- 통계 카드 (4개 KPI 카드, 아이콘 및 추세 포함)
- 차트 영역 (recharts를 사용한 라인 또는 바 차트)
- 최근 활동 데이터 테이블

기술 요구사항:
- 모든 스타일링에 Tailwind CSS 사용
- 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
- 아이콘은 lucide-react 사용
- 모바일과 데스크톱 모두 반응형으로 제작
- 내보내기 형식: export default function App()
- 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이` },
      { label: "블로그", template: `src/App.jsx로 바로 사용할 수 있는 블로그 홈페이지를 JSX 형식으로 만들어 주세요.

주제: [블로그 주제 — 예: 기술, 여행, 요리, 개인 일기]
스타일: [디자인 스타일 — 예: 미니멀, 매거진, 에디토리얼, 아늑한]

포함할 섹션:
- 블로그 이름과 내비게이션이 있는 헤더
- 큰 이미지가 있는 추천 게시물
- 최근 게시물 그리드 (6–9개 카드, 제목/발췌/날짜/카테고리)
- 뉴스레터 구독 섹션
- 푸터 링크

기술 요구사항:
- 모든 스타일링에 Tailwind CSS 사용
- 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
- 아이콘은 lucide-react 사용
- 모바일과 데스크톱 모두 반응형으로 제작
- 내보내기 형식: export default function App()
- 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이` },
      { label: "SaaS", template: `src/App.jsx로 바로 사용할 수 있는 SaaS 제품 페이지를 JSX 형식으로 만들어 주세요.

제품: [SaaS 제품 — 예: 프로젝트 관리 도구, 이메일 플랫폼, AI 어시스턴트]
스타일: [디자인 스타일 — 예: 모던, 프로페셔널, 플레이풀, 엔터프라이즈]

포함할 섹션:
- 제품명, 태그라인, CTA, 제품 목업이 있는 히어로
- 신뢰 기업 로고 바
- 핵심 기능 (3–4개, 아이콘 및 설명 포함)
- 사용 방법 (3단계)
- 가격표 (3단계: 무료, 프로, 엔터프라이즈)
- FAQ 섹션
- 최종 CTA 및 가입

기술 요구사항:
- 모든 스타일링에 Tailwind CSS 사용
- 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
- 아이콘은 lucide-react 사용
- 모바일과 데스크톱 모두 반응형으로 제작
- 내보내기 형식: export default function App()
- 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이` },
    ],
    promptCopy: "복사",
    promptCopied: "복사됨!",
  },
  ur: {
    badge: "AI Page Publisher",
    heroTitle: ["AI صفحات شائع کریں", "ایک push میں۔"],
    heroSubtitle:
      "AI سے بنے کسی بھی React کمپوننٹ کو لائیو ویب سائٹ میں بدلنے کا آسان ٹیمپلیٹ۔ ایک فائل بدلیں۔ GitHub پر push کریں۔ ہو گیا۔",
    ctaPrimary: "یہ ٹیمپلیٹ استعمال کریں",
    ctaSecondary: "README پڑھیں",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ur.md",
    includedLabel: "شامل ہے",
    includedTitle: "آپ کو کیا ملتا ہے",
    includes: [
      "40+ shadcn/ui کمپوننٹس",
      "160+ پہلے سے نصب پیکجز",
      "Tailwind CSS، فوری استعمال کے لیے تیار",
      "GitHub Actions سے ڈیپلائمنٹ",
      "حسب ضرورت ڈومین سپورٹ",
      "خودکار base path کی شناخت",
    ],
    howItWorksLabel: "کیسے کام کرتا ہے",
    howItWorksTitle: "تین قدم میں لائیو",
    howItWorksSubtitle:
      "کوڈنگ کا تجربہ ضروری نہیں۔ AI سے JSX مانگیں، چسپاں کریں، push کریں، بس۔",
    steps: [
      {
        number: "01",
        title: "AI سے JSX مانگیں",
        body: "Claude، ChatGPT یا کسی بھی AI سے اپنا صفحہ JSX فارمیٹ میں React کمپوننٹ کے طور پر بنوائیں۔",
      },
      {
        number: "02",
        title: "اپنا repo تیار کریں",
        body: "GitHub صفحے پر “Use this template” ← “Create a new repository” پر کلک کر کے اپنا repo بنائیں۔ آپ کا GitHub صارف نام اور repo کا نام آپ کی سائٹ کا URL طے کرے گا۔ پھر Settings ← Pages میں جا کر Source کو GitHub Actions پر سیٹ کریں۔",
      },
      {
        number: "03",
        title: "چسپاں کریں اور محفوظ کریں",
        body: "AI سے بنایا گیا JSX src/App.jsx میں چسپاں کریں — پہلے سے موجود تمام مواد حذف کر کے بدل دیں — پھر فائل محفوظ کریں۔ GitHub Actions خود بخود بلڈ اور شائع کر دے گا۔",
      },
    ],
    filesLabel: "آپ کی فائلز",
    filesTitle: "کیا بدلنا ہے",
    filesSubtitle:
      "اکثر صرف ایک فائل بدلنی ہوتی ہے۔ باقی دو اختیاری ہیں۔",
    files: [
      { name: "src/App.jsx", tag: "ضروری", desc: "AI کا بنایا ہوا JSX یہاں چسپاں کریں۔ صرف یہی ایک فائل بدلنی ہے۔", required: true },
      { name: "index.html", tag: "اختیاری", desc: "صفحے کا عنوان، تفصیل اور Google Analytics اپنی سائٹ کے مطابق بدلیں۔", required: false },
      { name: "public/CNAME", tag: "اختیاری", desc: "اپنا حسب ضرورت ڈومین سیٹ کریں۔ ضرورت نہ ہو تو ایسے ہی چھوڑ دیں۔", required: false },
    ],
    tipLabel: "مشورہ",
    tipText: "اگر AI کا کوڈ ایسا پیکج استعمال کرتا ہے جو ٹیمپلیٹ میں نہیں ہے تو چلائیں",
    tipCommand: "npm run check",
    tipAfter: "گمشدہ ڈیپنڈنسیز تلاش اور ٹھیک کرنے کے لیے۔",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "جملہ حقوق محفوظ ہیں۔",
    langLabel: "زبان",
    promptLabel: "شروعاتی پرامپٹ",
    promptHint: "اس پرامپٹ کو کاپی کر کے اپنے AI ٹول میں پیسٹ کریں۔ خالی جگہیں پُر کریں۔",
    promptVariants: [
      { label: "لینڈنگ پیج", template: `src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک لینڈنگ پیج بنائیں۔

مقصد: [آپ کیا پروموٹ کر رہے ہیں — مثلاً: فٹنس ایپ، مقامی بیکری، مشاورتی فرم]
انداز: [ڈیزائن اسٹائل — مثلاً: سادہ، جدید، نمایاں، کارپوریٹ]

شامل کرنے کے سیکشنز:
- ہیرو (ہیڈ لائن، سب ہیڈ لائن، CTA بٹن)
- خصوصیات یا فوائد (3–4 آئیکنز کے ساتھ)
- کسٹمر تعریفیں یا سماجی ثبوت
- قیمتیں یا پلانز
- آخری CTA
- فوٹر لنکس

تکنیکی تقاضے:
- تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
- ضرورت پر shadcn/ui اجزاء استعمال کریں (@/components/ui/ سے درآمد)
- آئیکنز کے لیے lucide-react استعمال کریں
- موبائل اور ڈیسک ٹاپ دونوں کے لیے ریسپانسو بنائیں
- ایکسپورٹ: export default function App()
- ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں` },
      { label: "پورٹ فولیو", template: `src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک ذاتی پورٹ فولیو پیج بنائیں۔

نام: [آپ کا نام]
کردار: [آپ کا عہدہ — مثلاً: فرنٹ اینڈ ڈویلپر، ڈیزائنر، فوٹوگرافر]
انداز: [ڈیزائن اسٹائل — مثلاً: سادہ، تخلیقی، خوبصورت، ڈارک]

شامل کرنے کے سیکشنز:
- نام، عہدہ اور مختصر تعارف کے ساتھ ہیرو
- نمایاں پروجیکٹس (3–6، تصاویر اور تفصیل کے ساتھ)
- مہارتیں یا ٹولز
- تجربہ یا تعلیم ٹائم لائن
- رابطہ فارم یا لنکس

تکنیکی تقاضے:
- تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
- ضرورت پر shadcn/ui اجزاء استعمال کریں (@/components/ui/ سے درآمد)
- آئیکنز کے لیے lucide-react استعمال کریں
- موبائل اور ڈیسک ٹاپ دونوں کے لیے ریسپانسو بنائیں
- ایکسپورٹ: export default function App()
- ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں` },
      { label: "ڈیش بورڈ", template: `src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک ایڈمن ڈیش بورڈ بنائیں۔

مقصد: [ڈیش بورڈ کا مقصد — مثلاً: سیلز تجزیہ، پروجیکٹ مینجمنٹ، یوزر میٹرکس]
انداز: [ڈیزائن اسٹائل — مثلاً: صاف، ڈیٹا سے بھرپور، جدید، کارپوریٹ]

شامل کرنے کے سیکشنز:
- سرچ اور یوزر مینو کے ساتھ ٹاپ نیویگیشن بار
- سائیڈ بار نیویگیشن لنکس
- اسٹیٹس کارڈز (4 KPI کارڈز، آئیکنز اور ٹرینڈز کے ساتھ)
- چارٹ ایریا (recharts استعمال کرتے ہوئے لائن یا بار چارٹ)
- حالیہ سرگرمی ڈیٹا ٹیبل

تکنیکی تقاضے:
- تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
- ضرورت پر shadcn/ui اجزاء استعمال کریں (@/components/ui/ سے درآمد)
- آئیکنز کے لیے lucide-react استعمال کریں
- موبائل اور ڈیسک ٹاپ دونوں کے لیے ریسپانسو بنائیں
- ایکسپورٹ: export default function App()
- ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں` },
      { label: "بلاگ", template: `src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک بلاگ ہوم پیج بنائیں۔

موضوع: [بلاگ کا موضوع — مثلاً: ٹیکنالوجی، سفر، کھانا پکانا، ذاتی ڈائری]
انداز: [ڈیزائن اسٹائل — مثلاً: سادہ، میگزین، ایڈیٹوریل، پرسکون]

شامل کرنے کے سیکشنز:
- بلاگ نام اور نیویگیشن کے ساتھ ہیڈر
- بڑی تصویر کے ساتھ نمایاں پوسٹ
- حالیہ پوسٹس گرڈ (6–9 کارڈز، عنوان، خلاصہ، تاریخ، زمرہ)
- نیوز لیٹر سبسکرپشن سیکشن
- فوٹر لنکس

تکنیکی تقاضے:
- تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
- ضرورت پر shadcn/ui اجزاء استعمال کریں (@/components/ui/ سے درآمد)
- آئیکنز کے لیے lucide-react استعمال کریں
- موبائل اور ڈیسک ٹاپ دونوں کے لیے ریسپانسو بنائیں
- ایکسپورٹ: export default function App()
- ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں` },
      { label: "SaaS", template: `src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک SaaS پروڈکٹ پیج بنائیں۔

پروڈکٹ: [آپ کا SaaS پروڈکٹ — مثلاً: پروجیکٹ مینجمنٹ ٹول، ای میل پلیٹ فارم، AI اسسٹنٹ]
انداز: [ڈیزائن اسٹائل — مثلاً: جدید، پیشہ ورانہ، دلچسپ، انٹرپرائز]

شامل کرنے کے سیکشنز:
- پروڈکٹ نام، ٹیگ لائن، CTA اور ماک اپ کے ساتھ ہیرو
- اعتماد کرنے والی کمپنیوں کے لوگو بار
- اہم خصوصیات (3–4، آئیکنز اور تفصیل کے ساتھ)
- کیسے کام کرتا ہے (3 مراحل)
- قیمت ٹیبل (3 درجے: مفت، پرو، انٹرپرائز)
- FAQ سیکشن
- آخری CTA اور سائن اپ

تکنیکی تقاضے:
- تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
- ضرورت پر shadcn/ui اجزاء استعمال کریں (@/components/ui/ سے درآمد)
- آئیکنز کے لیے lucide-react استعمال کریں
- موبائل اور ڈیسک ٹاپ دونوں کے لیے ریسپانسو بنائیں
- ایکسپورٹ: export default function App()
- ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں` },
    ],
    promptCopy: "کاپی",
    promptCopied: "کاپی ہو گیا!",
  },
  th: {
    badge: "AI Page Publisher",
    heroTitle: ["เผยแพร่หน้า AI", "แค่ push ครั้งเดียว"],
    heroSubtitle:
      "เทมเพลตง่าย ๆ สำหรับเปลี่ยน React component ที่ AI สร้างให้เป็นเว็บไซต์จริง เปลี่ยนไฟล์เดียว Push ขึ้น GitHub เสร็จ",
    ctaPrimary: "ใช้เทมเพลตนี้",
    ctaSecondary: "อ่าน README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.th.md",
    includedLabel: "รวมมาให้แล้ว",
    includedTitle: "มีอะไรบ้าง",
    includes: [
      "คอมโพเนนต์ shadcn/ui กว่า 40 ตัว",
      "แพ็กเกจติดตั้งล่วงหน้ากว่า 160 ตัว",
      "Tailwind CSS พร้อมใช้งาน",
      "ดีพลอยด้วย GitHub Actions",
      "รองรับโดเมนที่กำหนดเอง",
      "ตรวจจับ base path อัตโนมัติ",
    ],
    howItWorksLabel: "วิธีการทำงาน",
    howItWorksTitle: "สามขั้นตอนสู่การเผยแพร่",
    howItWorksSubtitle:
      "ไม่ต้องมีประสบการณ์เขียนโค้ด ขอ JSX จาก AI วางลงไป push แค่นั้น",
    steps: [
      {
        number: "01",
        title: "ขอ JSX จาก AI",
        body: "บอก Claude, ChatGPT หรือ AI ตัวไหนก็ได้ให้สร้างหน้าเว็บที่ต้องการเป็น React component ในรูปแบบ JSX",
      },
      {
        number: "02",
        title: "ตั้งค่า repo ของคุณ",
        body: "ที่หน้า GitHub คลิก “Use this template” → “Create a new repository” เพื่อสร้าง repo ของตัวเอง ชื่อผู้ใช้ GitHub และชื่อ repo จะเป็นส่วนหนึ่งของ URL เว็บไซต์ จากนั้นไปที่ Settings → Pages แล้วตั้ง Source เป็น GitHub Actions",
      },
      {
        number: "03",
        title: "วางแล้วบันทึก",
        body: "วาง JSX ที่ AI สร้างขึ้นลงใน src/App.jsx — ลบเนื้อหาเดิมทั้งหมดแล้วแทนที่ — จากนั้นบันทึกไฟล์ GitHub Actions จะบิลด์และเผยแพร่เว็บไซต์ให้อัตโนมัติ",
      },
    ],
    filesLabel: "ไฟล์ของคุณ",
    filesTitle: "ต้องเปลี่ยนอะไร",
    filesSubtitle:
      "ส่วนใหญ่แค่แก้ไฟล์เดียว อีกสองไฟล์เป็นตัวเลือกเพิ่มเติม",
    files: [
      { name: "src/App.jsx", tag: "จำเป็น", desc: "วาง JSX ที่ AI สร้างให้ตรงนี้ นี่คือไฟล์เดียวที่ต้องเปลี่ยน", required: true },
      { name: "index.html", tag: "ไม่บังคับ", desc: "อัปเดตชื่อหน้า คำอธิบาย และ Google Analytics ให้ตรงกับเว็บไซต์ของคุณ", required: false },
      { name: "public/CNAME", tag: "ไม่บังคับ", desc: "ตั้งค่าโดเมนที่กำหนดเอง ไม่ต้องการก็ปล่อยไว้ตามเดิม", required: false },
    ],
    tipLabel: "เคล็ดลับ",
    tipText: "หากโค้ดจาก AI ใช้แพ็กเกจที่ไม่ได้รวมมาในเทมเพลต ให้รัน",
    tipCommand: "npm run check",
    tipAfter: "เพื่อค้นหาและแก้ไข dependency ที่ขาดหาย",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "สงวนลิขสิทธิ์",
    langLabel: "ภาษา",
    promptLabel: "เทมเพลตพรอมต์",
    promptHint: "คัดลอกพรอมต์นี้ไปวางในเครื่องมือ AI ของคุณ แล้วเติมข้อมูลในช่องว่าง",
    promptVariants: [
      { label: "แลนดิ้งเพจ", template: `สร้างแลนดิ้งเพจในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

จุดประสงค์: [สิ่งที่โปรโมท — เช่น แอปฟิตเนส, เบเกอรี่ท้องถิ่น, บริษัทที่ปรึกษา]
สไตล์: [สไตล์การออกแบบ — เช่น มินิมอล, โมเดิร์น, โดดเด่น, องค์กร]

ส่วนที่ต้องรวม:
- ฮีโร่ (หัวข้อหลัก, หัวข้อรอง, ปุ่ม CTA)
- ฟีเจอร์หรือจุดเด่น (3–4 รายการพร้อมไอคอน)
- รีวิวจากลูกค้า
- ราคาหรือแพ็กเกจ
- CTA สุดท้าย
- ฟุตเตอร์พร้อมลิงก์

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
- ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
- ใช้ lucide-react สำหรับไอคอน
- ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
- Export เป็น: export default function App()
- ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN` },
      { label: "พอร์ตโฟลิโอ", template: `สร้างหน้าพอร์ตโฟลิโอส่วนตัวในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

ชื่อ: [ชื่อของคุณ]
บทบาท: [ตำแหน่ง — เช่น นักพัฒนาฟรอนต์เอนด์, นักออกแบบ, ช่างภาพ]
สไตล์: [สไตล์การออกแบบ — เช่น มินิมอล, สร้างสรรค์, หรูหรา, โทนมืด]

ส่วนที่ต้องรวม:
- ฮีโร่ (ชื่อ, ตำแหน่ง, แนะนำตัวสั้นๆ)
- ผลงานเด่น (3–6 ชิ้น พร้อมภาพและคำอธิบาย)
- ทักษะหรือเครื่องมือ
- ประสบการณ์หรือการศึกษา (ไทม์ไลน์)
- แบบฟอร์มติดต่อหรือลิงก์

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
- ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
- ใช้ lucide-react สำหรับไอคอน
- ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
- Export เป็น: export default function App()
- ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN` },
      { label: "แดชบอร์ด", template: `สร้างหน้าแดชบอร์ดผู้ดูแลในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

จุดประสงค์: [จุดประสงค์ของแดชบอร์ด — เช่น วิเคราะห์ยอดขาย, จัดการโปรเจกต์, ตัวชี้วัดผู้ใช้]
สไตล์: [สไตล์การออกแบบ — เช่น สะอาด, ข้อมูลหนาแน่น, โมเดิร์น, องค์กร]

ส่วนที่ต้องรวม:
- แถบนำทางด้านบน (ค้นหาและเมนูผู้ใช้)
- แถบด้านข้างพร้อมลิงก์นำทาง
- การ์ดสถิติ (4 การ์ด KPI พร้อมไอคอนและแนวโน้ม)
- พื้นที่กราฟ (กราฟเส้นหรือแท่งโดยใช้ recharts)
- ตารางข้อมูลกิจกรรมล่าสุด

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
- ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
- ใช้ lucide-react สำหรับไอคอน
- ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
- Export เป็น: export default function App()
- ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN` },
      { label: "บล็อก", template: `สร้างหน้าแรกบล็อกในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

หัวข้อ: [หัวข้อบล็อก — เช่น เทคโนโลยี, ท่องเที่ยว, ทำอาหาร, ไดอารี่]
สไตล์: [สไตล์การออกแบบ — เช่น มินิมอล, แมกกาซีน, บรรณาธิการ, อบอุ่น]

ส่วนที่ต้องรวม:
- ส่วนหัว (ชื่อบล็อกและการนำทาง)
- โพสต์เด่นพร้อมรูปภาพขนาดใหญ่
- กริดโพสต์ล่าสุด (6–9 การ์ด มีชื่อ/บทคัดย่อ/วันที่/หมวดหมู่)
- ส่วนสมัครรับข่าวสาร
- ฟุตเตอร์พร้อมลิงก์

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
- ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
- ใช้ lucide-react สำหรับไอคอน
- ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
- Export เป็น: export default function App()
- ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN` },
      { label: "SaaS", template: `สร้างหน้าผลิตภัณฑ์ SaaS ในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

ผลิตภัณฑ์: [ผลิตภัณฑ์ SaaS ของคุณ — เช่น เครื่องมือจัดการโปรเจกต์, แพลตฟอร์มอีเมล, ผู้ช่วย AI]
สไตล์: [สไตล์การออกแบบ — เช่น โมเดิร์น, มืออาชีพ, สนุกสนาน, องค์กร]

ส่วนที่ต้องรวม:
- ฮีโร่ (ชื่อผลิตภัณฑ์, สโลแกน, CTA, ม็อกอัพ)
- แถบโลโก้บริษัทที่ไว้วางใจ
- ฟีเจอร์หลัก (3–4 พร้อมไอคอนและคำอธิบาย)
- วิธีการทำงาน (3 ขั้นตอน)
- ตารางราคา (3 ระดับ: ฟรี/โปร/องค์กร)
- ส่วนคำถามที่พบบ่อย
- CTA สุดท้ายพร้อมสมัครสมาชิก

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
- ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
- ใช้ lucide-react สำหรับไอคอน
- ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
- Export เป็น: export default function App()
- ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN` },
    ],
    promptCopy: "คัดลอก",
    promptCopied: "คัดลอกแล้ว!",
  },
  de: {
    badge: "AI Page Publisher",
    heroTitle: ["KI-Seiten veröffentlichen", "mit einem Push."],
    heroSubtitle:
      "Ein schlankes Template, um jedes KI-generierte React-Artefakt in eine Live-Website zu verwandeln. Eine Datei ersetzen. Auf GitHub pushen. Fertig.",
    ctaPrimary: "Dieses Template verwenden",
    ctaSecondary: "README lesen",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.de.md",
    includedLabel: "Enthalten",
    includedTitle: "Was du bekommst",
    includes: [
      "Über 40 shadcn/ui-Komponenten",
      "Über 160 vorinstallierte Pakete",
      "Tailwind CSS, sofort einsatzbereit",
      "Deployment mit GitHub Actions",
      "Eigene Domain wird unterstützt",
      "Automatische Base-Path-Erkennung",
    ],
    howItWorksLabel: "So funktioniert's",
    howItWorksTitle: "In drei Schritten online",
    howItWorksSubtitle:
      "Keine Programmierkenntnisse nötig. Frag eine KI nach JSX, füge es ein, push, fertig.",
    steps: [
      {
        number: "01",
        title: "Frag deine KI nach JSX",
        body: "Bitte Claude, ChatGPT oder eine beliebige KI, die gewünschte Seite als React-Komponente im JSX-Format zu erstellen.",
      },
      {
        number: "02",
        title: "Richte dein Repo ein",
        body: "Klicke auf der GitHub-Seite auf „Use this template“ → „Create a new repository”, um dein eigenes Repo zu erstellen. Dein GitHub-Benutzername und der Repo-Name bestimmen die URL deiner Seite. Gehe dann zu Settings → Pages und setze Source auf GitHub Actions.",
      },
      {
        number: "03",
        title: "Einfügen und speichern",
        body: "Füge das von der KI generierte JSX in src/App.jsx ein — lösche den gesamten vorhandenen Inhalt und ersetze ihn — und speichere die Datei. GitHub Actions baut und veröffentlicht deine Seite automatisch.",
      },
    ],
    filesLabel: "Deine Dateien",
    filesTitle: "Was du änderst",
    filesSubtitle:
      "Meistens änderst du nur eine Datei. Die anderen beiden sind optional.",
    files: [
      { name: "src/App.jsx", tag: "Erforderlich", desc: "Füge das KI-generierte JSX hier ein. Das ist die einzige Datei, die du ändern musst.", required: true },
      { name: "index.html", tag: "Optional", desc: "Aktualisiere Seitentitel, Beschreibung und Google Analytics passend zu deiner Seite.", required: false },
      { name: "public/CNAME", tag: "Optional", desc: "Richte deine eigene Domain ein. Lass es wie es ist, wenn du keine brauchst.", required: false },
    ],
    tipLabel: "Tipp",
    tipText: "Falls dein KI-Code ein Paket verwendet, das nicht im Template enthalten ist, führe",
    tipCommand: "npm run check",
    tipAfter: "aus, um fehlende Abhängigkeiten zu finden und zu beheben.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Alle Rechte vorbehalten.",
    langLabel: "Sprache",
    promptLabel: "Starter-Prompt",
    promptHint: "Kopiere diesen Prompt und füge ihn in dein KI-Tool ein. Fülle die Lücken aus.",
    promptVariants: [
      { label: "Landingpage", template: `Erstelle eine Landingpage im JSX-Format, die ich als src/App.jsx verwenden kann.

Zweck: [was du bewirbst — z.B. Fitness-App, lokale Bäckerei, Beratungsfirma]
Stil: [Designstil — z.B. minimalistisch, modern, markant, geschäftlich]

Abschnitte:
- Hero mit Überschrift/Unterzeile/CTA-Button
- Features oder Vorteile (3–4 Punkte mit Icons)
- Testimonials oder Social Proof
- Preise oder Pläne
- Abschließender Call-to-Action
- Footer mit Links

Technische Anforderungen:
- Verwende Tailwind CSS für alle Styles
- Verwende shadcn/ui-Komponenten (Import von @/components/ui/) wenn passend
- Verwende lucide-react für Icons
- Mach die Seite responsiv für Mobil und Desktop
- Export als: export default function App()
- Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte` },
      { label: "Portfolio", template: `Erstelle eine persönliche Portfolio-Seite im JSX-Format, die ich als src/App.jsx verwenden kann.

Name: [dein Name]
Rolle: [dein Titel — z.B. Frontend-Entwickler, Designer, Fotograf]
Stil: [Designstil — z.B. minimalistisch, kreativ, elegant, dunkel]

Abschnitte:
- Hero mit Name/Titel/kurzer Bio
- Ausgewählte Projekte (3–6 mit Bildern und Beschreibungen)
- Fähigkeiten oder Tools
- Berufserfahrung oder Ausbildung (Zeitleiste)
- Kontaktformular oder Links

Technische Anforderungen:
- Verwende Tailwind CSS für alle Styles
- Verwende shadcn/ui-Komponenten (Import von @/components/ui/) wenn passend
- Verwende lucide-react für Icons
- Mach die Seite responsiv für Mobil und Desktop
- Export als: export default function App()
- Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte` },
      { label: "Dashboard", template: `Erstelle ein Admin-Dashboard im JSX-Format, das ich als src/App.jsx verwenden kann.

Zweck: [Zweck des Dashboards — z.B. Vertriebsanalyse, Projektmanagement, Nutzer-Metriken]
Stil: [Designstil — z.B. aufgeräumt, datendicht, modern, geschäftlich]

Abschnitte:
- Obere Navigationsleiste mit Suche und Benutzermenü
- Seitenleiste mit Navigationslinks
- Statistik-Karten (4 KPI-Karten mit Icons und Trends)
- Diagrammbereich (Linien- oder Balkendiagramm mit recharts)
- Datentabelle mit aktueller Aktivität

Technische Anforderungen:
- Verwende Tailwind CSS für alle Styles
- Verwende shadcn/ui-Komponenten (Import von @/components/ui/) wenn passend
- Verwende lucide-react für Icons
- Mach die Seite responsiv für Mobil und Desktop
- Export als: export default function App()
- Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte` },
      { label: "Blog", template: `Erstelle eine Blog-Startseite im JSX-Format, die ich als src/App.jsx verwenden kann.

Thema: [Blog-Thema — z.B. Tech, Reisen, Kochen, persönliches Tagebuch]
Stil: [Designstil — z.B. minimalistisch, Magazin, Editorial, gemütlich]

Abschnitte:
- Header mit Blogname und Navigation
- Hervorgehobener Beitrag mit großem Bild
- Raster aktueller Beiträge (6–9 Karten mit Titel/Auszug/Datum/Kategorie)
- Newsletter-Anmeldung
- Footer mit Links

Technische Anforderungen:
- Verwende Tailwind CSS für alle Styles
- Verwende shadcn/ui-Komponenten (Import von @/components/ui/) wenn passend
- Verwende lucide-react für Icons
- Mach die Seite responsiv für Mobil und Desktop
- Export als: export default function App()
- Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte` },
      { label: "SaaS", template: `Erstelle eine SaaS-Produktseite im JSX-Format, die ich als src/App.jsx verwenden kann.

Produkt: [dein SaaS-Produkt — z.B. Projektmanagement-Tool, E-Mail-Plattform, KI-Assistent]
Stil: [Designstil — z.B. modern, professionell, verspielt, Enterprise]

Abschnitte:
- Hero mit Produktname/Slogan/CTA/Produktmockup
- Logo-Leiste vertrauender Unternehmen
- Kernfunktionen (3–4 mit Icons und Beschreibungen)
- So funktioniert's (3 Schritte)
- Preistabelle (3 Stufen: Kostenlos/Pro/Enterprise)
- FAQ-Bereich
- Abschließender CTA mit Registrierung

Technische Anforderungen:
- Verwende Tailwind CSS für alle Styles
- Verwende shadcn/ui-Komponenten (Import von @/components/ui/) wenn passend
- Verwende lucide-react für Icons
- Mach die Seite responsiv für Mobil und Desktop
- Export als: export default function App()
- Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte` },
    ],
    promptCopy: "Kopieren",
    promptCopied: "Kopiert!",
  },
  tr: {
    badge: "AI Page Publisher",
    heroTitle: ["AI sayfalarını yayınlayın,", "tek bir push ile."],
    heroSubtitle:
      "Yapay zeka tarafından oluşturulan her React bileşenini canlı bir web sitesine dönüştürmek için sade bir şablon. Bir dosyayı değiştirin. GitHub'a push edin. Bitti.",
    ctaPrimary: "Bu şablonu kullan",
    ctaSecondary: "README'yi oku",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.tr.md",
    includedLabel: "Dahil",
    includedTitle: "Neler geliyor",
    includes: [
      "40'tan fazla shadcn/ui bileşeni",
      "160'dan fazla önceden kurulu paket",
      "Tailwind CSS, kullanıma hazır",
      "GitHub Actions ile dağıtım",
      "Özel alan adı desteği",
      "Otomatik base path algılama",
    ],
    howItWorksLabel: "Nasıl çalışır",
    howItWorksTitle: "Üç adımda yayına girin",
    howItWorksSubtitle:
      "Programlama deneyimine gerek yok. Yapay zekadan JSX isteyin, yapıştırın, push edin, bitti.",
    steps: [
      {
        number: "01",
        title: "Yapay zekadan JSX isteyin",
        body: "Claude, ChatGPT veya herhangi bir yapay zekadan istediğiniz sayfayı JSX formatında React bileşeni olarak oluşturmasını isteyin.",
      },
      {
        number: "02",
        title: "Deponuzu kurun",
        body: "GitHub sayfasında “Use this template” → “Create a new repository” tıklayarak kendi reponuzu oluşturun. GitHub kullanıcı adınız ve repo adı sitenizin URL'sini belirleyecektir. Sonra Settings → Pages'e gidin ve Source'u GitHub Actions olarak ayarlayın.",
      },
      {
        number: "03",
        title: "Yapıştırın ve kaydedin",
        body: "Yapay zekanın oluşturduğu JSX'i src/App.jsx dosyasına yapıştırın — mevcut tüm içeriği silip değiştirin — ardından dosyayı kaydedin. GitHub Actions sitenizi otomatik olarak derleyip yayınlar.",
      },
    ],
    filesLabel: "Dosyalarınız",
    filesTitle: "Neyi değiştireceksiniz",
    filesSubtitle:
      "Çoğu zaman yalnızca bir dosyaya dokunursunuz. Diğer ikisi isteğe bağlıdır.",
    files: [
      { name: "src/App.jsx", tag: "Zorunlu", desc: "Yapay zekanın oluşturduğu JSX'i buraya yapıştırın. Değiştirmeniz gereken tek dosya budur.", required: true },
      { name: "index.html", tag: "İsteğe bağlı", desc: "Sayfa başlığını, açıklamasını ve Google Analytics'i sitenize uygun şekilde güncelleyin.", required: false },
      { name: "public/CNAME", tag: "İsteğe bağlı", desc: "Özel alan adınızı ayarlayın. Gerekmiyorsa olduğu gibi bırakın.", required: false },
    ],
    tipLabel: "İpucu",
    tipText: "Yapay zekanın kodu şablonda bulunmayan bir paket kullanıyorsa şunu çalıştırın:",
    tipCommand: "npm run check",
    tipAfter: "Eksik bağımlılıkları bulup düzeltmek için.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Tüm hakları saklıdır.",
    langLabel: "Dil",
    promptLabel: "Başlangıç Promptu",
    promptHint: "Bu promptu kopyalayıp AI aracınıza yapıştırın. Boşlukları doldurun.",
    promptVariants: [
      { label: "Landing", template: `src/App.jsx olarak kullanabileceğim JSX formatında bir landing page oluşturun.

Amaç: [ne tanıtıyorsunuz — örn: fitness uygulaması, yerel fırın, danışmanlık firması]
Stil: [tasarım stili — örn: minimalist, modern, cesur, kurumsal]

Dahil edilecek bölümler:
- Başlık/alt başlık/CTA butonu içeren hero
- Özellikler veya avantajlar (3–4 madde ikonlu)
- Müşteri yorumları veya sosyal kanıt
- Fiyatlandırma veya planlar
- Son CTA
- Footer linkleri

Teknik gereksinimler:
- Tüm stillendirme için Tailwind CSS kullanın
- Uygun olduğunda shadcn/ui bileşenlerini kullanın (@/components/ui/ üzerinden import)
- İkonlar için lucide-react kullanın
- Mobil ve masaüstü için responsive yapın
- Dışa aktarım: export default function App()
- Tek dosya, ek CSS dosyası veya CDN script'i yok` },
      { label: "Portföy", template: `src/App.jsx olarak kullanabileceğim JSX formatında bir kişisel portföy sayfası oluşturun.

İsim: [adınız]
Rol: [unvanınız — örn: frontend geliştirici, tasarımcı, fotoğrafçı]
Stil: [tasarım stili — örn: minimalist, yaratıcı, zarif, koyu]

Dahil edilecek bölümler:
- İsim/unvan/kısa biyografi içeren hero
- Öne çıkan projeler (3–6 görseller ve açıklamalarla)
- Yetenekler veya araçlar
- Deneyim veya eğitim zaman çizelgesi
- İletişim formu veya linkler

Teknik gereksinimler:
- Tüm stillendirme için Tailwind CSS kullanın
- Uygun olduğunda shadcn/ui bileşenlerini kullanın (@/components/ui/ üzerinden import)
- İkonlar için lucide-react kullanın
- Mobil ve masaüstü için responsive yapın
- Dışa aktarım: export default function App()
- Tek dosya, ek CSS dosyası veya CDN script'i yok` },
      { label: "Panel", template: `src/App.jsx olarak kullanabileceğim JSX formatında bir yönetim paneli oluşturun.

Amaç: [panel amacı — örn: satış analitiği, proje yönetimi, kullanıcı metrikleri]
Stil: [tasarım stili — örn: temiz, veri yoğun, modern, kurumsal]

Dahil edilecek bölümler:
- Arama ve kullanıcı menüsü içeren üst navigasyon çubuğu
- Navigasyon linkleri olan kenar çubuğu
- İstatistik kartları (4 KPI kartı ikon ve trendlerle)
- Grafik alanı (recharts ile çizgi veya çubuk grafik)
- Son aktivite veri tablosu

Teknik gereksinimler:
- Tüm stillendirme için Tailwind CSS kullanın
- Uygun olduğunda shadcn/ui bileşenlerini kullanın (@/components/ui/ üzerinden import)
- İkonlar için lucide-react kullanın
- Mobil ve masaüstü için responsive yapın
- Dışa aktarım: export default function App()
- Tek dosya, ek CSS dosyası veya CDN script'i yok` },
      { label: "Blog", template: `src/App.jsx olarak kullanabileceğim JSX formatında bir blog ana sayfası oluşturun.

Konu: [blog konusu — örn: teknoloji, seyahat, yemek, kişisel günlük]
Stil: [tasarım stili — örn: minimalist, dergi, editöryal, sıcak]

Dahil edilecek bölümler:
- Blog adı ve navigasyon içeren başlık
- Büyük görselli öne çıkan yazı
- Son yazılar ızgarası (6–9 kart: başlık/özet/tarih/kategori)
- Bülten abonelik bölümü
- Footer linkleri

Teknik gereksinimler:
- Tüm stillendirme için Tailwind CSS kullanın
- Uygun olduğunda shadcn/ui bileşenlerini kullanın (@/components/ui/ üzerinden import)
- İkonlar için lucide-react kullanın
- Mobil ve masaüstü için responsive yapın
- Dışa aktarım: export default function App()
- Tek dosya, ek CSS dosyası veya CDN script'i yok` },
      { label: "SaaS", template: `src/App.jsx olarak kullanabileceğim JSX formatında bir SaaS ürün sayfası oluşturun.

Ürün: [SaaS ürününüz — örn: proje yönetim aracı, e-posta platformu, AI asistan]
Stil: [tasarım stili — örn: modern, profesyonel, eğlenceli, kurumsal]

Dahil edilecek bölümler:
- Ürün adı/slogan/CTA/mockup içeren hero
- Güvenilen şirket logoları çubuğu
- Temel özellikler (3–4 ikon ve açıklamalarla)
- Nasıl çalışır (3 adım)
- Fiyat tablosu (3 seviye: Ücretsiz/Pro/Kurumsal)
- SSS bölümü
- Son CTA ve kayıt

Teknik gereksinimler:
- Tüm stillendirme için Tailwind CSS kullanın
- Uygun olduğunda shadcn/ui bileşenlerini kullanın (@/components/ui/ üzerinden import)
- İkonlar için lucide-react kullanın
- Mobil ve masaüstü için responsive yapın
- Dışa aktarım: export default function App()
- Tek dosya, ek CSS dosyası veya CDN script'i yok` },
    ],
    promptCopy: "Kopyala",
    promptCopied: "Kopyalandı!",
  },
  ru: {
    badge: "AI Page Publisher",
    heroTitle: ["Публикуйте страницы ИИ", "одним push."],
    heroSubtitle:
      "Простой шаблон для превращения любого React-компонента, сгенерированного ИИ, в работающий сайт. Замените один файл. Сделайте push на GitHub. Готово.",
    ctaPrimary: "Использовать шаблон",
    ctaSecondary: "Читать README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ru.md",
    includedLabel: "Включено",
    includedTitle: "Что вы получаете",
    includes: [
      "Более 40 компонентов shadcn/ui",
      "Более 160 предустановленных пакетов",
      "Tailwind CSS, готов к использованию",
      "Деплой через GitHub Actions",
      "Поддержка своего домена",
      "Автоматическое определение base path",
    ],
    howItWorksLabel: "Как это работает",
    howItWorksTitle: "Три шага до публикации",
    howItWorksSubtitle:
      "Опыт программирования не нужен. Попросите ИИ сгенерировать JSX, вставьте, сделайте push, готово.",
    steps: [
      {
        number: "01",
        title: "Попросите ИИ создать JSX",
        body: "Попросите Claude, ChatGPT или любой ИИ сгенерировать нужную страницу как React-компонент в формате JSX.",
      },
      {
        number: "02",
        title: "Настройте свой репозиторий",
        body: "На странице GitHub нажмите «Use this template» → «Create a new repository», чтобы создать свой репозиторий. Ваше имя пользователя GitHub и название репозитория определят URL вашего сайта. Затем перейдите в Settings → Pages и установите Source на GitHub Actions.",
      },
      {
        number: "03",
        title: "Вставьте и сохраните",
        body: "Вставьте JSX, сгенерированный ИИ, в src/App.jsx — удалите и замените всё существующее содержимое — затем сохраните файл. GitHub Actions автоматически соберёт и опубликует ваш сайт.",
      },
    ],
    filesLabel: "Ваши файлы",
    filesTitle: "Что вы измените",
    filesSubtitle:
      "Обычно вы меняете только один файл. Остальные два — необязательные.",
    files: [
      { name: "src/App.jsx", tag: "Обязательно", desc: "Вставьте сюда JSX, сгенерированный ИИ. Это единственный файл, который нужно изменить.", required: true },
      { name: "index.html", tag: "Необязательно", desc: "Обновите заголовок, описание страницы и Google Analytics под ваш сайт.", required: false },
      { name: "public/CNAME", tag: "Необязательно", desc: "Укажите свой домен. Оставьте как есть, если он не нужен.", required: false },
    ],
    tipLabel: "Совет",
    tipText: "Если код ИИ использует пакет, не включённый в шаблон, выполните",
    tipCommand: "npm run check",
    tipAfter: "чтобы найти и исправить отсутствующие зависимости.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Все права защищены.",
    langLabel: "Язык",
    promptLabel: "Шаблон промпта",
    promptHint: "Скопируйте этот промпт и вставьте его в ваш AI-инструмент. Заполните пропуски.",
    promptVariants: [
      { label: "Лендинг", template: `Создайте лендинг в формате JSX, который можно использовать как src/App.jsx.

Цель: [что вы продвигаете — напр.: фитнес-приложение, местная пекарня, консалтинговая фирма]
Стиль: [стиль дизайна — напр.: минималистичный, современный, яркий, корпоративный]

Разделы:
- Hero с заголовком/подзаголовком/кнопкой CTA
- Преимущества или возможности (3–4 пункта с иконками)
- Отзывы клиентов или социальное доказательство
- Цены или тарифы
- Финальный призыв к действию
- Футер со ссылками

Технические требования:
- Используйте Tailwind CSS для всех стилей
- Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
- Используйте lucide-react для иконок
- Сделайте адаптивную вёрстку для мобильных и десктопа
- Экспорт: export default function App()
- Один файл, без дополнительных CSS-файлов или CDN-скриптов` },
      { label: "Портфолио", template: `Создайте страницу портфолио в формате JSX, которую можно использовать как src/App.jsx.

Имя: [ваше имя]
Роль: [ваша должность — напр.: фронтенд-разработчик, дизайнер, фотограф]
Стиль: [стиль дизайна — напр.: минималистичный, креативный, элегантный, тёмный]

Разделы:
- Hero с именем/должностью/краткой биографией
- Избранные проекты (3–6 с изображениями и описаниями)
- Навыки или инструменты
- Опыт работы или образование (таймлайн)
- Форма обратной связи или ссылки

Технические требования:
- Используйте Tailwind CSS для всех стилей
- Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
- Используйте lucide-react для иконок
- Сделайте адаптивную вёрстку для мобильных и десктопа
- Экспорт: export default function App()
- Один файл, без дополнительных CSS-файлов или CDN-скриптов` },
      { label: "Дашборд", template: `Создайте административный дашборд в формате JSX, который можно использовать как src/App.jsx.

Цель: [назначение дашборда — напр.: аналитика продаж, управление проектами, метрики пользователей]
Стиль: [стиль дизайна — напр.: чистый, насыщенный данными, современный, корпоративный]

Разделы:
- Верхняя навигационная панель с поиском и меню пользователя
- Боковая панель с навигацией
- Карточки статистики (4 KPI-карточки с иконками и трендами)
- Область графиков (линейный или столбчатый с recharts)
- Таблица данных с последней активностью

Технические требования:
- Используйте Tailwind CSS для всех стилей
- Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
- Используйте lucide-react для иконок
- Сделайте адаптивную вёрстку для мобильных и десктопа
- Экспорт: export default function App()
- Один файл, без дополнительных CSS-файлов или CDN-скриптов` },
      { label: "Блог", template: `Создайте главную страницу блога в формате JSX, которую можно использовать как src/App.jsx.

Тема: [тема блога — напр.: технологии, путешествия, кулинария, личный дневник]
Стиль: [стиль дизайна — напр.: минималистичный, журнальный, редакторский, уютный]

Разделы:
- Шапка с названием блога и навигацией
- Избранная статья с крупным изображением
- Сетка последних статей (6–9 карточек с заголовком/выдержкой/датой/категорией)
- Блок подписки на рассылку
- Футер со ссылками

Технические требования:
- Используйте Tailwind CSS для всех стилей
- Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
- Используйте lucide-react для иконок
- Сделайте адаптивную вёрстку для мобильных и десктопа
- Экспорт: export default function App()
- Один файл, без дополнительных CSS-файлов или CDN-скриптов` },
      { label: "SaaS", template: `Создайте страницу SaaS-продукта в формате JSX, которую можно использовать как src/App.jsx.

Продукт: [ваш SaaS-продукт — напр.: инструмент управления проектами, почтовая платформа, ИИ-ассистент]
Стиль: [стиль дизайна — напр.: современный, профессиональный, игривый, корпоративный]

Разделы:
- Hero с названием продукта/слоганом/CTA/мокапом
- Логобар компаний-клиентов
- Ключевые возможности (3–4 с иконками и описаниями)
- Как это работает (3 шага)
- Таблица цен (3 тарифа: Бесплатный/Про/Корпоративный)
- Раздел FAQ
- Финальный CTA и регистрация

Технические требования:
- Используйте Tailwind CSS для всех стилей
- Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
- Используйте lucide-react для иконок
- Сделайте адаптивную вёрстку для мобильных и десктопа
- Экспорт: export default function App()
- Один файл, без дополнительных CSS-файлов или CDN-скриптов` },
    ],
    promptCopy: "Копировать",
    promptCopied: "Скопировано!",
  },
  he: {
    badge: "AI Page Publisher",
    heroTitle: ["פרסם דפי AI", "בדחיפה אחת."],
    heroSubtitle:
      "תבנית פשוטה להפיכת כל רכיב React שנוצר על ידי בינה מלאכותית לאתר חי. החלף קובץ אחד. דחוף ל-GitHub. סיום.",
    ctaPrimary: "השתמש בתבנית זו",
    ctaSecondary: "קרא את ה-README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.he.md",
    includedLabel: "כלול",
    includedTitle: "מה אתה מקבל",
    includes: [
      "מעל 40 רכיבי shadcn/ui",
      "מעל 160 חבילות מותקנות מראש",
      "Tailwind CSS, מוכן לשימוש",
      "פריסה עם GitHub Actions",
      "תמיכה בדומיין מותאם אישית",
      "זיהוי אוטומטי של נתיב בסיס",
    ],
    howItWorksLabel: "כיצד זה עובד",
    howItWorksTitle: "שלושה שלבים לעלייה לאוויר",
    howItWorksSubtitle:
      "אין צורך בניסיון בתכנות. בקש JSX מהבינה המלאכותית, הדבק, דחוף, סיום.",
    steps: [
      {
        number: "01",
        title: "בקש JSX מהבינה המלאכותית",
        body: "אמור ל-Claude, ל-ChatGPT או לכל בינה מלאכותית ליצור את הדף שאתה רוצה כרכיב React בפורמט JSX.",
      },
      {
        number: "02",
        title: "הגדר את ה-repo שלך",
        body: "בדף GitHub לחץ על “Use this template” ← “Create a new repository” כדי ליצור מאגר משלך. שם המשתמש ושם המאגר ב-GitHub יקבעו את כתובת האתר שלך. לאחר מכן עבור אל Settings ← Pages והגדר את Source ל-GitHub Actions.",
      },
      {
        number: "03",
        title: "הדבק ושמור",
        body: "הדבק את ה-JSX שה-AI יצר ב-src/App.jsx — מחק והחלף את כל התוכן הקיים — ואז שמור את הקובץ. GitHub Actions יבנה וייפרס את האתר שלך אוטומטית.",
      },
    ],
    filesLabel: "הקבצים שלך",
    filesTitle: "מה תשנה",
    filesSubtitle:
      "ברוב המקרים אתה נוגע בקובץ אחד בלבד. שני הקבצים האחרים הם אופציונליים.",
    files: [
      { name: "src/App.jsx", tag: "נדרש", desc: "הדבק כאן את ה-JSX שנוצר על ידי בינה מלאכותית. זהו הקובץ היחיד שעליך לשנות.", required: true },
      { name: "index.html", tag: "אופציונלי", desc: "עדכן את כותרת הדף, התיאור ו-Google Analytics כך שיתאימו לאתר שלך.", required: false },
      { name: "public/CNAME", tag: "אופציונלי", desc: "הגדר את הדומיין המותאם אישית שלך. השאר כפי שהוא אם אינך זקוק לאחד.", required: false },
    ],
    tipLabel: "טיפ",
    tipText: "אם קוד הבינה המלאכותית משתמש בחבילה שאינה כלולה בתבנית, הפעל",
    tipCommand: "npm run check",
    tipAfter: "כדי למצוא ולתקן תלויות חסרות.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "כל הזכויות שמורות.",
    langLabel: "שפה",
    promptLabel: "תבנית פרומפט",
    promptHint: "העתק את הפרומפט הזה והדבק אותו בכלי ה-AI שלך. מלא את השדות הריקים.",
    promptVariants: [
      { label: "דף נחיתה", template: `צור דף נחיתה בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

מטרה: [מה אתה מקדם — למשל: אפליקציית כושר, מאפייה מקומית, חברת ייעוץ]
סגנון: [סגנון עיצוב — למשל: מינימליסטי, מודרני, בולט, עסקי]

סקשנים לכלול:
- Hero עם כותרת, תת-כותרת וכפתור CTA
- תכונות או יתרונות (3–4 פריטים עם אייקונים)
- המלצות לקוחות או הוכחה חברתית
- תמחור או תוכניות
- קריאה לפעולה אחרונה
- פוטר עם קישורים

דרישות טכניות:
- השתמש ב-Tailwind CSS לכל העיצוב
- השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
- השתמש ב-lucide-react לאייקונים
- הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
- ייצוא כ: export default function App()
- קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN` },
      { label: "תיק עבודות", template: `צור דף תיק עבודות אישי בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

שם: [השם שלך]
תפקיד: [התואר שלך — למשל: מפתח פרונטאנד, מעצב, צלם]
סגנון: [סגנון עיצוב — למשל: מינימליסטי, יצירתי, אלגנטי, כהה]

סקשנים לכלול:
- Hero עם שם, תואר וביו קצר
- פרויקטים נבחרים (3–6 עם תמונות ותיאורים)
- כישורים או כלים
- ניסיון או השכלה (ציר זמן)
- טופס יצירת קשר או קישורים

דרישות טכניות:
- השתמש ב-Tailwind CSS לכל העיצוב
- השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
- השתמש ב-lucide-react לאייקונים
- הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
- ייצוא כ: export default function App()
- קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN` },
      { label: "דשבורד", template: `צור דשבורד ניהולי בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

מטרה: [מטרת הדשבורד — למשל: אנליטיקת מכירות, ניהול פרויקטים, מדדי משתמשים]
סגנון: [סגנון עיצוב — למשל: נקי, עתיר נתונים, מודרני, עסקי]

סקשנים לכלול:
- סרגל ניווט עליון עם חיפוש ותפריט משתמש
- סרגל צד עם קישורי ניווט
- כרטיסיות סטטיסטיקה (4 כרטיסיות KPI עם אייקונים ומגמות)
- אזור גרפים (קו או עמודות עם recharts)
- טבלת נתונים עם פעילות אחרונה

דרישות טכניות:
- השתמש ב-Tailwind CSS לכל העיצוב
- השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
- השתמש ב-lucide-react לאייקונים
- הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
- ייצוא כ: export default function App()
- קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN` },
      { label: "בלוג", template: `צור דף בית לבלוג בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

נושא: [נושא הבלוג — למשל: טכנולוגיה, טיולים, בישול, יומן אישי]
סגנון: [סגנון עיצוב — למשל: מינימליסטי, מגזין, עריכתי, חמים]

סקשנים לכלול:
- כותרת עם שם הבלוג וניווט
- פוסט מומלץ עם תמונה גדולה
- רשת פוסטים אחרונים (6–9 כרטיסיות עם כותרת, תקציר, תאריך, קטגוריה)
- אזור הרשמה לניוזלטר
- פוטר עם קישורים

דרישות טכניות:
- השתמש ב-Tailwind CSS לכל העיצוב
- השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
- השתמש ב-lucide-react לאייקונים
- הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
- ייצוא כ: export default function App()
- קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN` },
      { label: "SaaS", template: `צור דף מוצר SaaS בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

מוצר: [מוצר ה-SaaS שלך — למשל: כלי ניהול פרויקטים, פלטפורמת אימייל, עוזר AI]
סגנון: [סגנון עיצוב — למשל: מודרני, מקצועי, שובב, ארגוני]

סקשנים לכלול:
- Hero עם שם המוצר, סלוגן, CTA ומוקאפ
- שורת לוגואים של חברות
- תכונות מפתח (3–4 עם אייקונים ותיאורים)
- איך זה עובד (3 שלבים)
- טבלת מחירים (3 רמות: חינם, פרו, ארגוני)
- אזור שאלות נפוצות
- CTA אחרון עם הרשמה

דרישות טכניות:
- השתמש ב-Tailwind CSS לכל העיצוב
- השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
- השתמש ב-lucide-react לאייקונים
- הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
- ייצוא כ: export default function App()
- קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN` },
    ],
    promptCopy: "העתקה",
    promptCopied: "הועתק!",
  },
  it: {
    badge: "AI Page Publisher",
    heroTitle: ["Pubblica pagine AI", "con un solo push."],
    heroSubtitle:
      "Un template semplice per trasformare qualsiasi componente React generato dall'AI in un sito web live. Sostituisci un file. Fai push su GitHub. Fatto.",
    ctaPrimary: "Usa questo template",
    ctaSecondary: "Leggi il README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.it.md",
    includedLabel: "Incluso",
    includedTitle: "Cosa ottieni",
    includes: [
      "Oltre 40 componenti shadcn/ui",
      "Oltre 160 pacchetti preinstallati",
      "Tailwind CSS, pronto all'uso",
      "Deployment con GitHub Actions",
      "Supporto dominio personalizzato",
      "Rilevamento automatico del base path",
    ],
    howItWorksLabel: "Come funziona",
    howItWorksTitle: "Tre passi per andare live",
    howItWorksSubtitle:
      "Non serve esperienza di programmazione. Chiedi il JSX all'AI, incollalo, fai push, fatto.",
    steps: [
      {
        number: "01",
        title: "Chiedi il JSX alla tua AI",
        body: "Di' a Claude, ChatGPT o qualsiasi AI di generare la pagina che vuoi come componente React in formato JSX.",
      },
      {
        number: "02",
        title: "Configura il tuo repo",
        body: "Nella pagina GitHub, clicca su “Use this template” → “Create a new repository” per creare il tuo repo. Il tuo nome utente GitHub e il nome del repo determineranno l'URL del tuo sito. Poi vai su Settings → Pages e imposta Source su GitHub Actions.",
      },
      {
        number: "03",
        title: "Incolla e salva",
        body: "Incolla il JSX generato dall'IA in src/App.jsx — cancella e sostituisci tutto il contenuto esistente — poi salva il file. GitHub Actions compila e pubblica il tuo sito automaticamente.",
      },
    ],
    filesLabel: "I tuoi file",
    filesTitle: "Cosa cambierai",
    filesSubtitle:
      "Nella maggior parte dei casi tocchi solo un file. Gli altri due sono opzionali.",
    files: [
      { name: "src/App.jsx", tag: "Obbligatorio", desc: "Incolla qui il JSX generato dall'AI. È l'unico file che devi modificare.", required: true },
      { name: "index.html", tag: "Opzionale", desc: "Aggiorna il titolo, la descrizione e Google Analytics per il tuo sito.", required: false },
      { name: "public/CNAME", tag: "Opzionale", desc: "Imposta il tuo dominio personalizzato. Lascia com'è se non ne hai bisogno.", required: false },
    ],
    tipLabel: "Suggerimento",
    tipText: "Se il codice dell'AI usa un pacchetto non incluso nel template, esegui",
    tipCommand: "npm run check",
    tipAfter: "per trovare e correggere le dipendenze mancanti.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Tutti i diritti riservati.",
    langLabel: "Lingua",
    promptLabel: "Prompt iniziale",
    promptHint: "Copia questo prompt e incollalo nel tuo strumento AI. Compila gli spazi vuoti.",
    promptVariants: [
      { label: "Landing Page", template: `Crea una landing page in formato JSX che io possa usare come src/App.jsx.

Scopo: [cosa promuovi — es: app fitness, panetteria locale, società di consulenza]
Stile: [stile di design — es: minimalista, moderno, audace, aziendale]

Sezioni da includere:
- Hero con titolo, sottotitolo e pulsante CTA
- Funzionalità o vantaggi (3–4 elementi con icone)
- Testimonianze o prova sociale
- Prezzi o piani
- Call-to-action finale
- Footer con link

Requisiti tecnici:
- Usa Tailwind CSS per tutti gli stili
- Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
- Usa lucide-react per le icone
- Rendilo responsive per mobile e desktop
- Esportare come: export default function App()
- File singolo, nessun file CSS aggiuntivo o script CDN` },
      { label: "Portfolio", template: `Crea una pagina portfolio personale in formato JSX che io possa usare come src/App.jsx.

Nome: [il tuo nome]
Ruolo: [il tuo titolo — es: sviluppatore frontend, designer, fotografo]
Stile: [stile di design — es: minimalista, creativo, elegante, scuro]

Sezioni da includere:
- Hero con nome, titolo e breve bio
- Progetti in evidenza (3–6 con immagini e descrizioni)
- Competenze o strumenti
- Esperienza o formazione (cronologia)
- Modulo di contatto o link

Requisiti tecnici:
- Usa Tailwind CSS per tutti gli stili
- Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
- Usa lucide-react per le icone
- Rendilo responsive per mobile e desktop
- Esportare come: export default function App()
- File singolo, nessun file CSS aggiuntivo o script CDN` },
      { label: "Dashboard", template: `Crea un dashboard amministrativo in formato JSX che io possa usare come src/App.jsx.

Scopo: [scopo del dashboard — es: analisi vendite, gestione progetti, metriche utenti]
Stile: [stile di design — es: pulito, ricco di dati, moderno, aziendale]

Sezioni da includere:
- Barra di navigazione superiore con ricerca e menu utente
- Barra laterale con link di navigazione
- Card di statistiche (4 KPI con icone e trend)
- Area grafici (grafico a linee o barre con recharts)
- Tabella dati con attività recente

Requisiti tecnici:
- Usa Tailwind CSS per tutti gli stili
- Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
- Usa lucide-react per le icone
- Rendilo responsive per mobile e desktop
- Esportare come: export default function App()
- File singolo, nessun file CSS aggiuntivo o script CDN` },
      { label: "Blog", template: `Crea una homepage del blog in formato JSX che io possa usare come src/App.jsx.

Tema: [tema del blog — es: tech, viaggi, cucina, diario personale]
Stile: [stile di design — es: minimalista, magazine, editoriale, accogliente]

Sezioni da includere:
- Header con nome del blog e navigazione
- Post in evidenza con immagine grande
- Griglia post recenti (6–9 card con titolo, estratto, data, categoria)
- Sezione iscrizione newsletter
- Footer con link

Requisiti tecnici:
- Usa Tailwind CSS per tutti gli stili
- Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
- Usa lucide-react per le icone
- Rendilo responsive per mobile e desktop
- Esportare come: export default function App()
- File singolo, nessun file CSS aggiuntivo o script CDN` },
      { label: "SaaS", template: `Crea una pagina prodotto SaaS in formato JSX che io possa usare come src/App.jsx.

Prodotto: [il tuo prodotto SaaS — es: tool di gestione, piattaforma email, assistente AI]
Stile: [stile di design — es: moderno, professionale, giocoso, enterprise]

Sezioni da includere:
- Hero con nome prodotto, slogan, CTA e mockup
- Barra loghi aziende partner
- Funzionalità chiave (3–4 con icone e descrizioni)
- Come funziona (3 passaggi)
- Tabella prezzi (3 livelli: Gratis, Pro, Enterprise)
- Sezione FAQ
- CTA finale con registrazione

Requisiti tecnici:
- Usa Tailwind CSS per tutti gli stili
- Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
- Usa lucide-react per le icone
- Rendilo responsive per mobile e desktop
- Esportare come: export default function App()
- File singolo, nessun file CSS aggiuntivo o script CDN` },
    ],
    promptCopy: "Copia",
    promptCopied: "Copiato!",
  },
  id: {
    badge: "AI Page Publisher",
    heroTitle: ["Terbitkan halaman AI", "hanya satu push."],
    heroSubtitle:
      "Template sederhana untuk mengubah komponen React buatan AI menjadi website langsung. Ganti satu file. Push ke GitHub. Selesai.",
    ctaPrimary: "Gunakan template ini",
    ctaSecondary: "Baca README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.id.md",
    includedLabel: "Sudah Disertakan",
    includedTitle: "Yang kamu dapatkan",
    includes: [
      "Lebih dari 40 komponen shadcn/ui",
      "Lebih dari 160 paket yang sudah terpasang",
      "Tailwind CSS, siap digunakan",
      "Deployment dengan GitHub Actions",
      "Dukungan domain kustom",
      "Deteksi base path otomatis",
    ],
    howItWorksLabel: "Cara kerjanya",
    howItWorksTitle: "Tiga langkah untuk online",
    howItWorksSubtitle:
      "Tidak perlu pengalaman coding. Minta JSX dari AI, tempel, push, selesai.",
    steps: [
      {
        number: "01",
        title: "Minta JSX dari AI",
        body: "Minta Claude, ChatGPT, atau AI mana pun untuk membuat halaman yang kamu inginkan sebagai komponen React dalam format JSX.",
      },
      {
        number: "02",
        title: "Siapkan repo-mu",
        body: "Di halaman GitHub, klik “Use this template” → “Create a new repository” untuk membuat repo sendiri. Username GitHub dan nama repo akan menentukan URL situsmu. Lalu buka Settings → Pages dan atur Source ke GitHub Actions.",
      },
      {
        number: "03",
        title: "Tempel dan simpan",
        body: "Tempel JSX yang dibuat AI ke src/App.jsx — hapus dan ganti semua konten yang ada — lalu simpan file. GitHub Actions akan mem-build dan menerbitkan situsmu secara otomatis.",
      },
    ],
    filesLabel: "File-mu",
    filesTitle: "Yang akan kamu ubah",
    filesSubtitle:
      "Biasanya kamu hanya mengubah satu file. Dua file lainnya bersifat opsional.",
    files: [
      { name: "src/App.jsx", tag: "Wajib", desc: "Tempel JSX buatan AI di sini. Ini satu-satunya file yang perlu kamu ubah.", required: true },
      { name: "index.html", tag: "Opsional", desc: "Perbarui judul, deskripsi halaman, dan Google Analytics agar sesuai dengan situsmu.", required: false },
      { name: "public/CNAME", tag: "Opsional", desc: "Atur domain kustom-mu. Biarkan apa adanya jika tidak membutuhkannya.", required: false },
    ],
    tipLabel: "Tips",
    tipText: "Jika kode AI menggunakan paket yang tidak ada di template, jalankan",
    tipCommand: "npm run check",
    tipAfter: "untuk menemukan dan memperbaiki dependensi yang hilang.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Semua hak dilindungi.",
    langLabel: "Bahasa",
    promptLabel: "Prompt Awal",
    promptHint: "Salin prompt ini dan tempelkan ke alat AI-mu. Isi bagian yang kosong.",
    promptVariants: [
      { label: "Landing Page", template: `Buatkan landing page dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

Tujuan: [apa yang dipromosikan — mis: aplikasi fitness, toko roti lokal, firma konsultan]
Gaya: [gaya desain — mis: minimalis, modern, berani, korporat]

Bagian yang perlu disertakan:
- Hero dengan judul, subjudul dan tombol CTA
- Fitur atau keunggulan (3–4 item dengan ikon)
- Testimoni atau bukti sosial
- Harga atau paket
- CTA terakhir
- Footer dengan tautan

Persyaratan teknis:
- Gunakan Tailwind CSS untuk semua styling
- Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
- Gunakan lucide-react untuk ikon
- Buat responsif untuk mobile dan desktop
- Ekspor sebagai: export default function App()
- Satu file saja, tanpa file CSS tambahan atau skrip CDN` },
      { label: "Portofolio", template: `Buatkan halaman portofolio pribadi dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

Nama: [nama Anda]
Peran: [jabatan Anda — mis: developer frontend, desainer, fotografer]
Gaya: [gaya desain — mis: minimalis, kreatif, elegan, gelap]

Bagian yang perlu disertakan:
- Hero dengan nama, jabatan dan bio singkat
- Proyek unggulan (3–6 dengan gambar dan deskripsi)
- Keahlian atau alat
- Pengalaman atau pendidikan (timeline)
- Formulir kontak atau tautan

Persyaratan teknis:
- Gunakan Tailwind CSS untuk semua styling
- Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
- Gunakan lucide-react untuk ikon
- Buat responsif untuk mobile dan desktop
- Ekspor sebagai: export default function App()
- Satu file saja, tanpa file CSS tambahan atau skrip CDN` },
      { label: "Dashboard", template: `Buatkan halaman dashboard admin dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

Tujuan: [tujuan dashboard — mis: analisis penjualan, manajemen proyek, metrik pengguna]
Gaya: [gaya desain — mis: bersih, padat data, modern, korporat]

Bagian yang perlu disertakan:
- Bilah navigasi atas dengan pencarian dan menu pengguna
- Bilah samping dengan tautan navigasi
- Kartu statistik (4 kartu KPI dengan ikon dan tren)
- Area grafik (grafik garis atau batang menggunakan recharts)
- Tabel data dengan aktivitas terbaru

Persyaratan teknis:
- Gunakan Tailwind CSS untuk semua styling
- Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
- Gunakan lucide-react untuk ikon
- Buat responsif untuk mobile dan desktop
- Ekspor sebagai: export default function App()
- Satu file saja, tanpa file CSS tambahan atau skrip CDN` },
      { label: "Blog", template: `Buatkan halaman utama blog dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

Topik: [topik blog — mis: teknologi, travel, masakan, jurnal pribadi]
Gaya: [gaya desain — mis: minimalis, majalah, editorial, nyaman]

Bagian yang perlu disertakan:
- Header dengan nama blog dan navigasi
- Post unggulan dengan gambar besar
- Grid post terbaru (6–9 kartu dengan judul, cuplikan, tanggal, kategori)
- Bagian langganan newsletter
- Footer dengan tautan

Persyaratan teknis:
- Gunakan Tailwind CSS untuk semua styling
- Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
- Gunakan lucide-react untuk ikon
- Buat responsif untuk mobile dan desktop
- Ekspor sebagai: export default function App()
- Satu file saja, tanpa file CSS tambahan atau skrip CDN` },
      { label: "SaaS", template: `Buatkan halaman produk SaaS dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

Produk: [produk SaaS Anda — mis: alat manajemen proyek, platform email, asisten AI]
Gaya: [gaya desain — mis: modern, profesional, playful, enterprise]

Bagian yang perlu disertakan:
- Hero dengan nama produk, slogan, CTA dan mockup
- Baris logo perusahaan tepercaya
- Fitur utama (3–4 dengan ikon dan deskripsi)
- Cara kerja (3 langkah)
- Tabel harga (3 tingkat: Gratis, Pro, Enterprise)
- Bagian FAQ
- CTA akhir dengan pendaftaran

Persyaratan teknis:
- Gunakan Tailwind CSS untuk semua styling
- Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
- Gunakan lucide-react untuk ikon
- Buat responsif untuk mobile dan desktop
- Ekspor sebagai: export default function App()
- Satu file saja, tanpa file CSS tambahan atau skrip CDN` },
    ],
    promptCopy: "Salin",
    promptCopied: "Tersalin!",
  },
  vi: {
    badge: "AI Page Publisher",
    heroTitle: ["Một lần push,", "trang AI đã lên web."],
    heroSubtitle:
      "Một template gọn gàng để biến code React do AI sinh ra thành website đang chạy. Thay đúng một file, push lên GitHub, xong.",
    ctaPrimary: "Dùng template này",
    ctaSecondary: "Đọc README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.vi.md",
    includedLabel: "Có sẵn",
    includedTitle: "Trong template có gì",
    includes: [
      "40+ component shadcn/ui",
      "160+ package cài sẵn",
      "Tailwind CSS, dùng được ngay",
      "Deploy bằng GitHub Actions",
      "Hỗ trợ custom domain",
      "Tự detect base path",
    ],
    howItWorksLabel: "Cách hoạt động",
    howItWorksTitle: "Ba bước là lên web",
    howItWorksSubtitle:
      "Không cần biết lập trình. Nhờ AI sinh JSX, dán vào, push, xong.",
    steps: [
      {
        number: "01",
        title: "Nhờ AI sinh JSX",
        body: "Bảo Claude, ChatGPT hay AI nào đó sinh trang bạn muốn dưới dạng component React định dạng JSX.",
      },
      {
        number: "02",
        title: "Tạo repo của bạn",
        body: "Trên trang GitHub, nhấn “Use this template” → “Create a new repository” để tạo repo riêng. Tên người dùng GitHub và tên repo sẽ quyết định URL trang web của bạn. Sau đó vào Settings → Pages đặt Source là GitHub Actions.",
      },
      {
        number: "03",
        title: "Dán vào, lưu lại",
        body: "Dán JSX do AI tạo vào src/App.jsx — xóa và thay thế toàn bộ nội dung hiện có — rồi lưu file. GitHub Actions sẽ tự build và publish site cho bạn.",
      },
    ],
    filesLabel: "File của bạn",
    filesTitle: "Cần thay đổi gì",
    filesSubtitle:
      "Hầu hết bạn chỉ cần đổi một file. Hai file còn lại là tuỳ chọn.",
    files: [
      { name: "src/App.jsx", tag: "Bắt buộc", desc: "Dán JSX do AI sinh ra vào đây. Đây là file duy nhất bạn cần thay.", required: true },
      { name: "index.html", tag: "Tuỳ chọn", desc: "Đổi tiêu đề, mô tả trang và Google Analytics cho phù hợp với site của bạn.", required: false },
      { name: "public/CNAME", tag: "Tuỳ chọn", desc: "Cài custom domain. Không cần thì để nguyên.", required: false },
    ],
    tipLabel: "Mẹo",
    tipText: "Nếu code AI dùng package chưa có sẵn trong template, chạy",
    tipCommand: "npm run check",
    tipAfter: "để tìm và sửa các dependency còn thiếu.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "Ngôn ngữ",
    promptLabel: "Prompt mẫu",
    promptHint: "Sao chép prompt này và dán vào công cụ AI của bạn. Điền vào chỗ trống.",
    promptVariants: [
      { label: "Landing Page", template: `Tạo một landing page dạng JSX mà tôi có thể dùng làm src/App.jsx.

Mục đích: [quảng bá sản phẩm/dịch vụ — VD: ứng dụng fitness, tiệm bánh, công ty tư vấn]
Phong cách: [phong cách thiết kế — VD: tối giản, hiện đại, nổi bật, doanh nghiệp]

Các phần cần có:
- Hero với tiêu đề, phụ đề và nút CTA
- Tính năng hoặc lợi ích (3–4 mục có icon)
- Đánh giá khách hàng
- Bảng giá hoặc gói dịch vụ
- CTA cuối cùng
- Footer với liên kết

Yêu cầu kỹ thuật:
- Sử dụng Tailwind CSS cho toàn bộ styling
- Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
- Sử dụng lucide-react cho icon
- Làm responsive cho cả mobile và desktop
- Export dạng: export default function App()
- Một file duy nhất, không thêm file CSS hay script CDN` },
      { label: "Portfolio", template: `Tạo một trang portfolio cá nhân dạng JSX mà tôi có thể dùng làm src/App.jsx.

Tên: [tên của bạn]
Vai trò: [chức danh — VD: lập trình viên frontend, nhà thiết kế, nhiếp ảnh gia]
Phong cách: [phong cách thiết kế — VD: tối giản, sáng tạo, thanh lịch, tối]

Các phần cần có:
- Hero với tên, chức danh và giới thiệu ngắn
- Dự án nổi bật (3–6 có hình ảnh và mô tả)
- Kỹ năng hoặc công cụ
- Kinh nghiệm hoặc học vấn (dòng thời gian)
- Form liên hệ hoặc liên kết

Yêu cầu kỹ thuật:
- Sử dụng Tailwind CSS cho toàn bộ styling
- Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
- Sử dụng lucide-react cho icon
- Làm responsive cho cả mobile và desktop
- Export dạng: export default function App()
- Một file duy nhất, không thêm file CSS hay script CDN` },
      { label: "Dashboard", template: `Tạo một trang dashboard quản trị dạng JSX mà tôi có thể dùng làm src/App.jsx.

Mục đích: [mục đích dashboard — VD: phân tích doanh thu, quản lý dự án, chỉ số người dùng]
Phong cách: [phong cách thiết kế — VD: gọn gàng, nhiều dữ liệu, hiện đại, doanh nghiệp]

Các phần cần có:
- Thanh điều hướng trên cùng với tìm kiếm và menu người dùng
- Thanh bên với liên kết điều hướng
- Thẻ thống kê (4 thẻ KPI có icon và xu hướng)
- Khu vực biểu đồ (biểu đồ đường hoặc cột bằng recharts)
- Bảng dữ liệu hoạt động gần đây

Yêu cầu kỹ thuật:
- Sử dụng Tailwind CSS cho toàn bộ styling
- Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
- Sử dụng lucide-react cho icon
- Làm responsive cho cả mobile và desktop
- Export dạng: export default function App()
- Một file duy nhất, không thêm file CSS hay script CDN` },
      { label: "Blog", template: `Tạo một trang chủ blog dạng JSX mà tôi có thể dùng làm src/App.jsx.

Chủ đề: [chủ đề blog — VD: công nghệ, du lịch, nấu ăn, nhật ký cá nhân]
Phong cách: [phong cách thiết kế — VD: tối giản, tạp chí, biên tập, ấm cúng]

Các phần cần có:
- Header với tên blog và điều hướng
- Bài viết nổi bật với hình lớn
- Lưới bài viết gần đây (6–9 thẻ có tiêu đề, trích đoạn, ngày, danh mục)
- Phần đăng ký nhận tin
- Footer với liên kết

Yêu cầu kỹ thuật:
- Sử dụng Tailwind CSS cho toàn bộ styling
- Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
- Sử dụng lucide-react cho icon
- Làm responsive cho cả mobile và desktop
- Export dạng: export default function App()
- Một file duy nhất, không thêm file CSS hay script CDN` },
      { label: "SaaS", template: `Tạo một trang sản phẩm SaaS dạng JSX mà tôi có thể dùng làm src/App.jsx.

Sản phẩm: [sản phẩm SaaS — VD: công cụ quản lý dự án, nền tảng email, trợ lý AI]
Phong cách: [phong cách thiết kế — VD: hiện đại, chuyên nghiệp, vui nhộn, doanh nghiệp]

Các phần cần có:
- Hero với tên sản phẩm, slogan, CTA và mockup
- Thanh logo đối tác
- Tính năng chính (3–4 có icon và mô tả)
- Cách hoạt động (3 bước)
- Bảng giá (3 gói: Miễn phí, Pro, Doanh nghiệp)
- Phần FAQ
- CTA cuối cùng với đăng ký

Yêu cầu kỹ thuật:
- Sử dụng Tailwind CSS cho toàn bộ styling
- Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
- Sử dụng lucide-react cho icon
- Làm responsive cho cả mobile và desktop
- Export dạng: export default function App()
- Một file duy nhất, không thêm file CSS hay script CDN` },
    ],
    promptCopy: "Sao chép",
    promptCopied: "Đã sao chép!",
  },
};

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "zh-CN", label: "简体", short: "简" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ja", label: "日本語", short: "日" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "ع" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "ko", label: "한국어", short: "한" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "tr", label: "Türkçe", short: "TR" },
  { code: "ur", label: "اردو", short: "ار" },
  { code: "th", label: "ไทย", short: "ไท" },
  { code: "he", label: "עברית", short: "עב" },
];

const RTL_LANGS = new Set(["ar", "ur", "he"]);

const STEP_ICONS = [
  <Sparkles className="h-5 w-5" />,
  <Settings className="h-5 w-5" />,
  <Upload className="h-5 w-5" />,
];

const HTML_LANG = {
  en: "en",
  zh: "zh",
  "zh-CN": "zh-Hans",
  es: "es",
  ja: "ja",
  pt: "pt",
  ar: "ar",
  fr: "fr",
  hi: "hi",
  ko: "ko",
  ur: "ur",
  th: "th",
  de: "de",
  id: "id",
  it: "it",
  he: "he",
  tr: "tr",
  ru: "ru",
  vi: "vi",
};

function detectInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem("aiweb-lang");
    if (stored && translations[stored]) return stored;
  } catch (_) {
    // ignore storage errors
  }
  const browser = (window.navigator.language || "en").toLowerCase();
  if (browser.startsWith("zh")) {
    if (browser === "zh-cn" || browser === "zh-hans" || browser.startsWith("zh-hans")) return "zh-CN";
    return "zh";
  }
  if (browser.startsWith("es")) return "es";
  if (browser.startsWith("ja")) return "ja";
  if (browser.startsWith("pt")) return "pt";
  if (browser.startsWith("ar")) return "ar";
  if (browser.startsWith("fr")) return "fr";
  if (browser.startsWith("hi")) return "hi";
  if (browser.startsWith("ko")) return "ko";
  if (browser.startsWith("ur")) return "ur";
  if (browser.startsWith("th")) return "th";
  if (browser.startsWith("de")) return "de";
  if (browser.startsWith("id")) return "id";
  if (browser.startsWith("it")) return "it";
  if (browser.startsWith("he")) return "he";
  if (browser.startsWith("tr")) return "tr";
  if (browser.startsWith("ru")) return "ru";
  if (browser.startsWith("vi")) return "vi";
  return "en";
}

function detectInitialDarkMode() {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem("aiweb-theme");
    if (stored) return stored === "dark";
  } catch (_) {
    // ignore storage errors
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function App() {
  const [lang, setLang] = useState(detectInitialLang);
  const [darkMode, setDarkMode] = useState(detectInitialDarkMode);
  const [langOpen, setLangOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);
  const [promptCopied, setPromptCopied] = useState(false);
  const [variantIdx, setVariantIdx] = useState(0);
  const switcherRef = useRef(null);
  const listRef = useRef(null);
  const triggerRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.setAttribute("content", darkMode ? "#1A1816" : "#FCFAF2");
    });
  }, [darkMode]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("aiweb-theme")) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("aiweb-lang", lang);
    } catch (_) {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[lang] || "en";
      document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
    }
  }, [lang]);

  useEffect(() => {
    if (langOpen) {
      setFocusIdx(LANGUAGES.findIndex((l) => l.code === lang));
    }
  }, [langOpen, lang]);

  useEffect(() => {
    if (!langOpen || focusIdx < 0) return;
    const list = listRef.current;
    if (!list) return;
    const items = list.querySelectorAll("[role=option]");
    if (items[focusIdx]) items[focusIdx].scrollIntoView({ block: "nearest" });
  }, [focusIdx, langOpen]);

  const handleSwitcherKey = useCallback(
    (e) => {
      if (!langOpen) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setLangOpen(true);
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusIdx((i) => (i + 1) % LANGUAGES.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusIdx((i) => (i - 1 + LANGUAGES.length) % LANGUAGES.length);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusIdx >= 0) {
            setLang(LANGUAGES[focusIdx].code);
            setVariantIdx(0);
            setLangOpen(false);
            triggerRef.current?.focus();
          }
          break;
        case "Escape":
          e.preventDefault();
          setLangOpen(false);
          triggerRef.current?.focus();
          break;
      }
    },
    [langOpen, focusIdx],
  );

  useEffect(() => {
    if (!langOpen) return;
    function onClickAway(e) {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [langOpen]);

  const t = translations[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-body)] antialiased">
      <main className="mx-auto max-w-6xl px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="overflow-hidden rounded-[2rem] border border-[var(--lp-border)] bg-[image:var(--lp-hero-grad)] shadow-[0_18px_70px_rgba(var(--lp-shadow-rgb),0.08)]"
        >
          <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.85)] px-3 py-1.5 text-xs font-medium text-[var(--lp-subtle)]">
                <Anchor className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                {t.badge}
              </div>

              <h1 className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-[var(--lp-heading)] sm:text-5xl lg:text-[3.5rem]">
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]}
              </h1>

              <p className="mt-5 max-w-xl text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base sm:leading-8">
                {t.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/EugeneYip/aiweb"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--lp-cta-bg)] px-5 py-3 text-sm font-medium text-[var(--lp-cta-fg)] shadow-sm transition-all hover:bg-[var(--lp-cta-hover)] hover:shadow-md"
                >
                  {t.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={t.readmeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.80)] px-5 py-3 text-sm font-medium text-[var(--lp-body)] transition-all hover:bg-[var(--lp-surface-solid)] hover:border-[var(--lp-border-hover)]"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.80)] p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-[var(--lp-divider)] pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--lp-muted)]">{t.includedLabel}</p>
                  <h2 className="mt-1.5 text-lg font-semibold text-[var(--lp-heading)]">{t.includedTitle}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--lp-raised)] text-[var(--lp-subtle)]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-[var(--lp-bg)] px-3.5 py-2.5 transition-colors hover:bg-[var(--lp-raised)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--lp-accent)]" />
                    <span className="text-sm font-medium text-[var(--lp-heading)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.howItWorksLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[var(--lp-heading)] sm:text-3xl">
              {t.howItWorksTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {t.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative overflow-hidden rounded-2xl border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.80)] p-5 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.05)] transition-all hover:shadow-[0_12px_40px_rgba(var(--lp-shadow-rgb),0.1)] hover:border-[var(--lp-border-hover)]"
              >
                <span className="pointer-events-none absolute end-3 top-1 select-none font-mono text-6xl font-bold text-[var(--lp-watermark)]">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lp-raised)] text-[var(--lp-subtle)]">
                  {STEP_ICONS[idx]}
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--lp-heading)] sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--lp-text)]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Prompt Template */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.promptLabel}</p>
            <p className="mt-2.5 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.promptHint}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={t.promptLabel}
            className="mt-4 flex flex-wrap gap-2"
            onKeyDown={(e) => {
              if (e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Home" && e.key !== "End") return;
              e.preventDefault();
              const count = t.promptVariants.length;
              const forward = RTL_LANGS.has(lang) ? "ArrowLeft" : "ArrowRight";
              let next = variantIdx;
              if (e.key === "Home") next = 0;
              else if (e.key === "End") next = count - 1;
              else if (e.key === forward) next = (variantIdx + 1) % count;
              else next = (variantIdx - 1 + count) % count;
              setVariantIdx(next);
              setPromptCopied(false);
              const tabs = e.currentTarget.querySelectorAll('[role="tab"]');
              tabs[next]?.focus();
            }}
          >
            {t.promptVariants.map((v, i) => {
              const selected = i === variantIdx;
              return (
                <button
                  key={v.label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => { setVariantIdx(i); setPromptCopied(false); }}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    selected
                      ? "border-[var(--lp-accent)] bg-[var(--lp-accent)] text-white shadow-sm"
                      : "border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.6)] text-[var(--lp-subtle)] hover:border-[var(--lp-border-hover)] hover:bg-[var(--lp-surface-solid)]"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-4 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-bg)] p-4 sm:p-5">
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(t.promptVariants[variantIdx].template)
                  .then(() => {
                    setPromptCopied(true);
                    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
                    copyTimeoutRef.current = setTimeout(() => {
                      setPromptCopied(false);
                      copyTimeoutRef.current = null;
                    }, 2000);
                  })
                  .catch(() => {
                    // clipboard unavailable (non-HTTPS, denied, unsupported) — silently no-op
                  });
              }}
              className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.85)] px-3 py-1.5 text-xs font-medium text-[var(--lp-subtle)] transition-all hover:bg-[var(--lp-surface-solid)] hover:border-[var(--lp-border-hover)]"
            >
              {promptCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {promptCopied ? t.promptCopied : t.promptCopy}
            </button>
            <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-[var(--lp-text)] sm:text-sm sm:leading-7 pe-20">{t.promptVariants[variantIdx].template}</pre>
          </div>
        </motion.section>

        {/* Files You'll Change */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.filesLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[var(--lp-heading)] sm:text-3xl">
              {t.filesTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.filesSubtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {t.files.map((file) => (
              <div
                key={file.name}
                className={`relative overflow-hidden rounded-2xl border p-5 transition-all ${
                  file.required
                    ? "border-[var(--lp-border-accent)] bg-[rgba(var(--lp-surface-rgb),0.90)] shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.06)] hover:shadow-[0_12px_40px_rgba(var(--lp-shadow-rgb),0.1)]"
                    : "border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.60)] hover:bg-[rgba(var(--lp-surface-rgb),0.80)] hover:border-[var(--lp-border-hover)]"
                }`}
              >
                {file.required && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--lp-accent-bar)]" />
                )}
                <div className="flex items-center justify-between gap-2">
                  <code className="rounded-lg bg-[var(--lp-raised)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--lp-heading)]">
                    {file.name}
                  </code>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      file.required
                        ? "bg-[var(--lp-accent-soft)] text-[var(--lp-accent)]"
                        : "bg-[var(--lp-border-tag)] text-[var(--lp-dim)]"
                    }`}
                  >
                    {file.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--lp-text)]">{file.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--lp-border-tip)] border-s-[3px] border-s-[var(--lp-accent-tint-soft)] bg-[var(--lp-hover)] px-4 py-3.5">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lp-accent)]" />
            <p className="text-sm leading-6 text-[var(--lp-text)]">
              <span className="font-semibold text-[var(--lp-heading)]">{t.tipLabel}</span>
              {" — "}
              {t.tipText}{" "}
              <code className="rounded bg-[var(--lp-raised)] px-1.5 py-0.5 font-mono text-xs text-[var(--lp-heading)]">
                {t.tipCommand}
              </code>{" "}
              {t.tipAfter}
            </p>
          </div>
        </motion.section>

        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 pb-24 text-center text-sm text-[var(--lp-muted)]"
        >
          <Anchor className="mx-auto mb-2.5 h-4 w-4 text-[var(--lp-footer-icon)]" />
          {t.footerLine1} <br className="sm:hidden" />
          {t.footerLine2}
        </motion.footer>
      </main>

      {/* Controls */}
      <div className="fixed bottom-4 end-4 z-50 flex items-center gap-2 sm:bottom-6 sm:end-6">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => {
            const next = !darkMode;
            setDarkMode(next);
            localStorage.setItem("aiweb-theme", next ? "dark" : "light");
          }}
          aria-label={darkMode ? "Light mode" : "Dark mode"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.90)] text-[var(--lp-subtle)] shadow-[0_10px_30px_rgba(var(--lp-shadow-rgb),0.12)] backdrop-blur-sm transition hover:bg-[var(--lp-surface-solid)]"
        >
          {darkMode ? <Sun className="h-[1.125rem] w-[1.125rem]" /> : <Moon className="h-[1.125rem] w-[1.125rem]" />}
        </button>

        {/* Language switcher */}
        <div ref={switcherRef} className="relative" onKeyDown={handleSwitcherKey}>
          {langOpen && (
            <div
              ref={listRef}
              role="listbox"
              aria-label={t.langLabel}
              aria-activedescendant={focusIdx >= 0 ? `lang-opt-${LANGUAGES[focusIdx].code}` : undefined}
              className="absolute bottom-[calc(100%+0.625rem)] end-0 min-w-[9.5rem] max-h-[min(20rem,60vh)] overflow-y-auto rounded-2xl border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.95)] shadow-[0_18px_50px_rgba(var(--lp-shadow-rgb),0.15)] backdrop-blur-sm"
            >
              {LANGUAGES.map((l, i) => {
                const active = l.code === lang;
                const focused = i === focusIdx;
                return (
                  <button
                    key={l.code}
                    id={`lang-opt-${l.code}`}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onMouseEnter={() => setFocusIdx(i)}
                    onClick={() => {
                      setLang(l.code);
                      setVariantIdx(0);
                      setLangOpen(false);
                      triggerRef.current?.focus();
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-start text-sm transition ${
                      active
                        ? "bg-[var(--lp-raised)] font-semibold text-[var(--lp-heading)]"
                        : focused
                          ? "bg-[var(--lp-hover)] text-[var(--lp-heading)]"
                          : "text-[var(--lp-text)] hover:bg-[var(--lp-bg)]"
                    }${focused ? " ring-1 ring-inset ring-[var(--lp-ring)]" : ""}`}
                  >
                    <span className="w-4 font-mono text-[11px] text-[var(--lp-hint)]">{l.short}</span>
                    <span>{l.label}</span>
                    {active && <CheckCircle2 className="ms-auto h-4 w-4 text-[var(--lp-accent)]" />}
                  </button>
                );
              })}
            </div>
          )}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            aria-label={t.langLabel}
            aria-expanded={langOpen}
            aria-haspopup="listbox"
            className="flex h-11 items-center gap-2 rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.90)] px-3.5 text-[var(--lp-subtle)] shadow-[0_10px_30px_rgba(var(--lp-shadow-rgb),0.12)] backdrop-blur-sm transition hover:bg-[var(--lp-surface-solid)]"
          >
            <Globe className="h-4.5 w-4.5" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[var(--lp-subtle)]">
              {currentLang.short}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Sparkles, Settings, Upload, Globe, ArrowUpRight, CheckCircle2, Lightbulb } from "lucide-react";

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
      "80+ pre-installed packages",
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
        body: "Use this template to create your own repository. Go to Settings → Pages and set Source to GitHub Actions.",
      },
      {
        number: "03",
        title: "Replace and push",
        body: "Paste the JSX into src/App.jsx and push to main. GitHub Actions builds and publishes your site automatically.",
      },
    ],
    filesLabel: "Your files",
    filesTitle: "What you'll change",
    filesSubtitle:
      "Most of the time you only touch one file. The other two are optional.",
    files: [
      { name: "src/App.jsx", tag: "Required", desc: "Paste your AI-generated JSX here. This is the only file you need to change.", required: true },
      { name: "index.html", tag: "Optional", desc: "Update the page title and meta description to match your site.", required: false },
      { name: "public/CNAME", tag: "Optional", desc: "Set your custom domain. Leave as-is if you don't need one.", required: false },
    ],
    tipLabel: "Tip",
    tipText: "If your AI code uses a package not included in the template, run",
    tipCommand: "npm run check",
    tipAfter: "to find and fix missing dependencies.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "Language",
  },
  zh: {
    badge: "AI Page Publisher",
    heroTitle: ["Push 一次", "AI 頁面就上線"],
    heroSubtitle:
      "把 AI 生成的 React 成品直接變成線上網站的簡潔範本。換掉一個檔案，push 到 GitHub，就這樣。",
    ctaPrimary: "使用這個範本",
    ctaSecondary: "看 README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/README.zh.md",
    includedLabel: "內建項目",
    includedTitle: "範本包含甚麼",
    includes: [
      "40+ 個 shadcn/ui 元件",
      "80+ 個預裝套件",
      "Tailwind CSS，開箱即用",
      "GitHub Actions 自動部署",
      "支援自訂網域",
      "自動偵測 base path",
    ],
    howItWorksLabel: "運作方式",
    howItWorksTitle: "三步就上線",
    howItWorksSubtitle:
      "不需要寫程式經驗。請 AI 生成 JSX，貼上，push，搞定。",
    steps: [
      {
        number: "01",
        title: "請 AI 生成 JSX",
        body: "告訴 Claude、ChatGPT 或任何 AI，請它用 JSX 格式幫你生成想要的 React 頁面。",
      },
      {
        number: "02",
        title: "建立你的 repo",
        body: "用這個範本建立自己的 repo。到 Settings → Pages 把 Source 設成 GitHub Actions。",
      },
      {
        number: "03",
        title: "貼上、push",
        body: "把 JSX 貼進 src/App.jsx，push 到 main。GitHub Actions 會自動 build 並把網站發佈出去。",
      },
    ],
    filesLabel: "你的檔案",
    filesTitle: "需要改的檔案",
    filesSubtitle: "通常只需要動一個檔案，其餘兩個是進階選用。",
    files: [
      { name: "src/App.jsx", tag: "必要", desc: "把 AI 生成的 JSX 貼到這裡。這是唯一需要改的檔案。", required: true },
      { name: "index.html", tag: "選用", desc: "改一下頁面標題和描述，讓它符合你的網站。", required: false },
      { name: "public/CNAME", tag: "選用", desc: "設定你的自訂網域。不需要的話就不用動。", required: false },
    ],
    tipLabel: "小提示",
    tipText: "如果 AI 的程式碼用到了範本沒預裝的套件，執行",
    tipCommand: "npm run check",
    tipAfter: "就能找到並修復缺少的相依套件。",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "版權所有。",
    langLabel: "語言",
  },
  es: {
    badge: "AI Page Publisher",
    heroTitle: ["Publica páginas de IA", "con un solo push."],
    heroSubtitle:
      "Una plantilla sencilla para llevar cualquier componente de React generado por IA directo a la web. Cambias un archivo, haces push a GitHub y listo.",
    ctaPrimary: "Usar esta plantilla",
    ctaSecondary: "Leer el README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/README.es.md",
    includedLabel: "Incluido",
    includedTitle: "Lo que obtienes",
    includes: [
      "Más de 40 componentes de shadcn/ui",
      "Más de 80 paquetes preinstalados",
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
        title: "Arma tu repo",
        body: "Usa esta plantilla para crear tu propio repo. Ve a Settings → Pages y pon Source en GitHub Actions.",
      },
      {
        number: "03",
        title: "Pega y haz push",
        body: "Pega el JSX en src/App.jsx y haz push a main. GitHub Actions se encarga de compilar y publicar tu sitio solito.",
      },
    ],
    filesLabel: "Tus archivos",
    filesTitle: "Qué vas a cambiar",
    filesSubtitle:
      "Casi siempre solo tocas un archivo. Los otros dos son opcionales.",
    files: [
      { name: "src/App.jsx", tag: "Obligatorio", desc: "Pega aquí el JSX que te generó la IA. Es el único archivo que tienes que cambiar.", required: true },
      { name: "index.html", tag: "Opcional", desc: "Cambia el título y la descripción de la página para que vayan con tu sitio.", required: false },
      { name: "public/CNAME", tag: "Opcional", desc: "Configura tu dominio personalizado. Si no lo necesitas, déjalo como está.", required: false },
    ],
    tipLabel: "Tip",
    tipText: "Si el código de tu IA usa un paquete que no viene en la plantilla, corre",
    tipCommand: "npm run check",
    tipAfter: "para encontrar y arreglar las dependencias que faltan.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "Todos los derechos reservados.",
    langLabel: "Idioma",
  },
  ja: {
    badge: "AI Page Publisher",
    heroTitle: ["ワンプッシュで", "AIページを公開。"],
    heroSubtitle:
      "AI が生成した React コードを、そのままウェブサイトとして公開できるシンプルなテンプレート。ファイルを 1 つ差し替えて、GitHub に push するだけ。",
    ctaPrimary: "このテンプレートを使う",
    ctaSecondary: "README を読む",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/README.ja.md",
    includedLabel: "含まれるもの",
    includedTitle: "テンプレートの中身",
    includes: [
      "shadcn/ui コンポーネント 40 種以上",
      "80 以上のパッケージをプリインストール",
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
        body: "このテンプレートで自分のリポジトリを作成。Settings → Pages で Source を GitHub Actions に設定。",
      },
      {
        number: "03",
        title: "貼り付けて push",
        body: "JSX を src/App.jsx に貼り付けて main に push。GitHub Actions が自動でビルドして公開してくれます。",
      },
    ],
    filesLabel: "ファイル",
    filesTitle: "変更するファイル",
    filesSubtitle:
      "ほとんどの場合、触るのは 1 ファイルだけ。残り 2 つは任意です。",
    files: [
      { name: "src/App.jsx", tag: "必須", desc: "AI が生成した JSX をここに貼り付けます。変更が必要なのはこのファイルだけです。", required: true },
      { name: "index.html", tag: "任意", desc: "ページのタイトルや説明を自分のサイトに合わせて変更します。", required: false },
      { name: "public/CNAME", tag: "任意", desc: "カスタムドメインを設定します。不要ならそのままで OK。", required: false },
    ],
    tipLabel: "ヒント",
    tipText: "AI のコードがテンプレートに含まれないパッケージを使っている場合は",
    tipCommand: "npm run check",
    tipAfter: "を実行すれば、足りない依存を見つけて修正できます。",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "言語",
  },
  vi: {
    badge: "AI Page Publisher",
    heroTitle: ["Một lần push,", "trang AI đã lên web."],
    heroSubtitle:
      "Một template gọn gàng để biến code React do AI sinh ra thành website đang chạy. Thay đúng một file, push lên GitHub, xong.",
    ctaPrimary: "Dùng template này",
    ctaSecondary: "Đọc README",
    readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/README.vi.md",
    includedLabel: "Có sẵn",
    includedTitle: "Trong template có gì",
    includes: [
      "40+ component shadcn/ui",
      "80+ package cài sẵn",
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
        body: "Dùng template này để tạo repo riêng. Vào Settings → Pages đặt Source là GitHub Actions.",
      },
      {
        number: "03",
        title: "Dán vào, push",
        body: "Dán JSX vào src/App.jsx rồi push lên main. GitHub Actions sẽ tự build và publish site cho bạn.",
      },
    ],
    filesLabel: "File của bạn",
    filesTitle: "Cần thay đổi gì",
    filesSubtitle:
      "Hầu hết bạn chỉ cần đổi một file. Hai file còn lại là tuỳ chọn.",
    files: [
      { name: "src/App.jsx", tag: "Bắt buộc", desc: "Dán JSX do AI sinh ra vào đây. Đây là file duy nhất bạn cần thay.", required: true },
      { name: "index.html", tag: "Tuỳ chọn", desc: "Đổi tiêu đề và mô tả trang cho phù hợp với site của bạn.", required: false },
      { name: "public/CNAME", tag: "Tuỳ chọn", desc: "Cài custom domain. Không cần thì để nguyên.", required: false },
    ],
    tipLabel: "Mẹo",
    tipText: "Nếu code AI dùng package chưa có sẵn trong template, chạy",
    tipCommand: "npm run check",
    tipAfter: "để tìm và sửa các dependency còn thiếu.",
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "Ngôn ngữ",
  },
};

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ja", label: "日本語", short: "日" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
];

const STEP_ICONS = [
  <Sparkles className="h-5 w-5" />,
  <Settings className="h-5 w-5" />,
  <Upload className="h-5 w-5" />,
];

const HTML_LANG = {
  en: "en",
  zh: "zh",
  es: "es",
  ja: "ja",
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
  if (browser.startsWith("zh")) return "zh";
  if (browser.startsWith("es")) return "es";
  if (browser.startsWith("ja")) return "ja";
  if (browser.startsWith("vi")) return "vi";
  return "en";
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [langOpen, setLangOpen] = useState(false);
  const switcherRef = useRef(null);

  useEffect(() => {
    setLang(detectInitialLang());
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
    }
  }, [lang]);

  useEffect(() => {
    if (!langOpen) return;
    function onClickAway(e) {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setLangOpen(false);
    }
    document.addEventListener("mousedown", onClickAway);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const t = translations[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="min-h-screen bg-[#FCFAF2] text-[#2F2A24] antialiased">
      <main className="mx-auto max-w-6xl px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-[#E9E0D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(252,250,242,0.92)_100%)] shadow-[0_18px_70px_rgba(54,42,27,0.08)]">
          <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D8C7] bg-white/85 px-3 py-1.5 text-xs font-medium text-[#5E564C]">
                <span className="h-2 w-2 rounded-full bg-[#A67B5B]" />
                {t.badge}
              </div>

              <h1 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-[#241F1A] sm:text-5xl lg:text-6xl">
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]}
              </h1>

              <p className="mt-5 max-w-xl text-[0.938rem] leading-7 text-[#4B443C] sm:text-base sm:leading-8">
                {t.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/EugeneYip/aiweb"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F2A24] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1F1A16]"
                >
                  {t.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={t.readmeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9CEBD] bg-white/80 px-5 py-3 text-sm font-medium text-[#2F2A24] transition hover:bg-white"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#E9E0D2] bg-white/80 p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-[#F0E7DA] pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7A6F63]">{t.includedLabel}</p>
                  <h2 className="mt-1.5 text-lg font-semibold text-[#241F1A]">{t.includedTitle}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4EEE1] text-[#5C5247]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-[#FCFAF2] px-3.5 py-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A67B5B]" />
                    <span className="text-sm font-medium text-[#241F1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-6 rounded-[2rem] border border-[#E9E0D2] bg-white/65 px-5 py-6 shadow-[0_8px_30px_rgba(54,42,27,0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">{t.howItWorksLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              {t.howItWorksTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[#4B443C] sm:text-base">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {t.steps.map((step, idx) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#E9E0D2] bg-white/75 p-5 shadow-[0_8px_30px_rgba(54,42,27,0.05)] backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4EEE1] text-[#5C5247]">
                    {STEP_ICONS[idx]}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#A89A87]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#241F1A] sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4B443C]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Files You'll Change */}
        <section className="mt-6 rounded-[2rem] border border-[#E9E0D2] bg-white/65 px-5 py-6 shadow-[0_8px_30px_rgba(54,42,27,0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">{t.filesLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              {t.filesTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[#4B443C] sm:text-base">
              {t.filesSubtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {t.files.map((file) => (
              <div
                key={file.name}
                className={`rounded-2xl border p-5 ${
                  file.required
                    ? "border-[#D4C4AB] bg-white/90 shadow-[0_8px_30px_rgba(54,42,27,0.06)]"
                    : "border-[#E9E0D2] bg-white/60"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <code className="rounded-lg bg-[#F4EEE1] px-2.5 py-1 font-mono text-xs font-medium text-[#241F1A]">
                    {file.name}
                  </code>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      file.required
                        ? "bg-[#A67B5B]/15 text-[#A67B5B]"
                        : "bg-[#E9E0D2]/70 text-[#8A7F72]"
                    }`}
                  >
                    {file.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4B443C]">{file.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#EFE5D8] bg-[#FCFAF2] px-4 py-3">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#A67B5B]" />
            <p className="text-sm leading-6 text-[#4B443C]">
              <span className="font-semibold text-[#241F1A]">{t.tipLabel}</span>
              {" — "}
              {t.tipText}{" "}
              <code className="rounded bg-[#F4EEE1] px-1.5 py-0.5 font-mono text-xs text-[#241F1A]">
                {t.tipCommand}
              </code>{" "}
              {t.tipAfter}
            </p>
          </div>
        </section>

        <footer className="mt-8 pb-20 text-center text-sm text-[#6B6257]">
          {t.footerLine1} <br className="sm:hidden" />
          {t.footerLine2}
        </footer>
      </main>

      {/* Language switcher */}
      <div ref={switcherRef} className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        {langOpen && (
          <div
            role="listbox"
            aria-label={t.langLabel}
            className="mb-2.5 min-w-[9.5rem] overflow-hidden rounded-2xl border border-[#E9E0D2] bg-white/95 shadow-[0_18px_50px_rgba(54,42,27,0.15)] backdrop-blur-sm"
          >
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition ${
                    active
                      ? "bg-[#F4EEE1] font-semibold text-[#241F1A]"
                      : "text-[#4B443C] hover:bg-[#FCFAF2]"
                  }`}
                >
                  <span className="w-4 font-mono text-[11px] text-[#A89A87]">{l.short}</span>
                  <span>{l.label}</span>
                  {active && <CheckCircle2 className="ml-auto h-4 w-4 text-[#A67B5B]" />}
                </button>
              );
            })}
          </div>
        )}
        <button
          type="button"
          onClick={() => setLangOpen((v) => !v)}
          aria-label={t.langLabel}
          aria-expanded={langOpen}
          className="flex h-11 items-center gap-2 rounded-full border border-[#E3D8C7] bg-white/90 px-3.5 text-[#5C5247] shadow-[0_10px_30px_rgba(54,42,27,0.12)] backdrop-blur-sm transition hover:bg-white"
        >
          <Globe className="h-4.5 w-4.5" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[#5C5247]">
            {currentLang.short}
          </span>
        </button>
      </div>
    </div>
  );
}

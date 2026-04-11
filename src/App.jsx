import { useEffect, useRef, useState } from "react";
import { Sparkles, FileCode, GitBranch, Globe, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

const translations = {
  en: {
    badge: "AI Page Publisher",
    heroTitle: ["Publish AI pages", "in one push."],
    heroSubtitle:
      "A clean template for turning any AI-generated React artifact into a live website. Replace one file. Push to GitHub. Done.",
    ctaPrimary: "Use this template",
    ctaSecondary: "Read the README",
    details: [
      { label: "Main file", value: "src/App.jsx" },
      { label: "Check imports", value: "npm run check" },
      { label: "Local dev", value: "npm run dev" },
    ],
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
    howItWorksTitle: "A simple three-step flow",
    howItWorksSubtitle:
      "The whole process is intentionally short. Generate, replace, push. Your page is live.",
    steps: [
      {
        number: "01",
        title: "Generate with AI",
        body: "Ask Claude, ChatGPT, or any AI to generate a React JSX component for the page you want.",
      },
      {
        number: "02",
        title: "Replace one file",
        body: "Open src/App.jsx and replace its content with the JSX you just generated. That is the only file you need to change.",
      },
      {
        number: "03",
        title: "Push to deploy",
        body: "Commit and push to the main branch. The included GitHub Actions workflow builds and publishes your site automatically.",
      },
    ],
    quickStartLabel: "Quick start",
    quickStartTitle: "Run it locally",
    quickStartSubtitle:
      "Clone your new repository, install the dependencies, and start the dev server.",
    terminalLabel: "terminal",
    replaceLabel: "Replace",
    replaceTitle: "Where the magic happens",
    replaceBodyBefore:
      "Most updates only require changing one file. Paste your AI-generated JSX into ",
    replaceBodyAfter: " and you are done.",
    replaceSteps: [
      "Generate a React component with any AI tool",
      "Replace src/App.jsx with the generated code",
      "Run npm run check if any imports are missing",
      "Commit and push to deploy automatically",
    ],
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
    details: [
      { label: "主要檔案", value: "src/App.jsx" },
      { label: "檢查 import", value: "npm run check" },
      { label: "本機開發", value: "npm run dev" },
    ],
    includedLabel: "內建項目",
    includedTitle: "範本包含什麼",
    includes: [
      "40+ 個 shadcn/ui 元件",
      "80+ 個預裝套件",
      "Tailwind CSS，開箱即用",
      "GitHub Actions 自動部署",
      "支援自訂網域",
      "自動偵測 base path",
    ],
    howItWorksLabel: "運作方式",
    howItWorksTitle: "簡單三步驟",
    howItWorksSubtitle:
      "整個流程刻意設計得很短。生成、替換、push，頁面就上線了。",
    steps: [
      {
        number: "01",
        title: "用 AI 生成",
        body: "請 Claude、ChatGPT 或任何一個 AI 幫你生成想要頁面的 React JSX 元件。",
      },
      {
        number: "02",
        title: "換掉一個檔案",
        body: "打開 src/App.jsx，把內容換成剛剛生成的 JSX。整個過程只需要改這一個檔案。",
      },
      {
        number: "03",
        title: "Push 就部署",
        body: "commit 後 push 到 main 分支，內建的 GitHub Actions 會自動 build 並把網站發佈出去。",
      },
    ],
    quickStartLabel: "快速開始",
    quickStartTitle: "在本機跑起來",
    quickStartSubtitle: "clone 你的新 repo、裝好相依套件，然後啟動開發伺服器。",
    terminalLabel: "終端機",
    replaceLabel: "替換",
    replaceTitle: "魔法就發生在這裡",
    replaceBodyBefore: "大部分的更新只需要動一個檔案。把 AI 生成的 JSX 貼到 ",
    replaceBodyAfter: " 就完成了。",
    replaceSteps: [
      "用任何 AI 工具生成 React 元件",
      "把生成的程式碼貼到 src/App.jsx",
      "若有缺少的 import，執行 npm run check",
      "commit、push，自動部署",
    ],
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
    details: [
      { label: "Archivo principal", value: "src/App.jsx" },
      { label: "Verificar imports", value: "npm run check" },
      { label: "Desarrollo local", value: "npm run dev" },
    ],
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
    howItWorksTitle: "Un flujo simple de tres pasos",
    howItWorksSubtitle:
      "Todo el proceso es deliberadamente corto. Generas, reemplazas, haces push. Y tu página queda en línea.",
    steps: [
      {
        number: "01",
        title: "Genera con IA",
        body: "Pídele a Claude, ChatGPT o la IA que prefieras que te arme un componente React JSX con la página que quieres.",
      },
      {
        number: "02",
        title: "Reemplaza un archivo",
        body: "Abre src/App.jsx y pega ahí el JSX que acabas de generar. Es el único archivo que tienes que tocar.",
      },
      {
        number: "03",
        title: "Haz push para desplegar",
        body: "Haz commit y push a la rama main. El workflow de GitHub Actions incluido se encarga de compilar y publicar tu sitio solito.",
      },
    ],
    quickStartLabel: "Inicio rápido",
    quickStartTitle: "Ejecútalo localmente",
    quickStartSubtitle:
      "Clona tu nuevo repo, instala las dependencias y arranca el servidor de desarrollo.",
    terminalLabel: "terminal",
    replaceLabel: "Reemplazar",
    replaceTitle: "Aquí ocurre la magia",
    replaceBodyBefore:
      "La mayoría de los cambios se reducen a tocar un solo archivo. Pega tu JSX generado por IA en ",
    replaceBodyAfter: " y ya.",
    replaceSteps: [
      "Genera un componente de React con la herramienta de IA que uses",
      "Pega el código generado en src/App.jsx",
      "Si te faltan imports, corre npm run check",
      "Haz commit y push, y se despliega solo",
    ],
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
    details: [
      { label: "メインファイル", value: "src/App.jsx" },
      { label: "インポート確認", value: "npm run check" },
      { label: "ローカル開発", value: "npm run dev" },
    ],
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
    howItWorksTitle: "たった 3 ステップ",
    howItWorksSubtitle:
      "全体の流れは意図的に短くしてあります。生成して、差し替えて、push。それだけでページが公開されます。",
    steps: [
      {
        number: "01",
        title: "AI で生成",
        body: "Claude、ChatGPT、お好きな AI に、作りたいページの React コンポーネントを書いてもらいます。",
      },
      {
        number: "02",
        title: "ファイルを 1 つ差し替え",
        body: "src/App.jsx を開いて、中身を先ほどの JSX に差し替えるだけ。触るのはこのファイルだけで OK です。",
      },
      {
        number: "03",
        title: "push でデプロイ",
        body: "main ブランチに commit して push するだけ。同梱の GitHub Actions が自動でビルドして公開してくれます。",
      },
    ],
    quickStartLabel: "クイックスタート",
    quickStartTitle: "ローカルで動かす",
    quickStartSubtitle:
      "新しいリポジトリを clone して、依存関係をインストールし、開発サーバーを立ち上げます。",
    terminalLabel: "ターミナル",
    replaceLabel: "差し替え",
    replaceTitle: "いちばん大事なところ",
    replaceBodyBefore:
      "ほとんどの更新は、ファイルを 1 つ書き換えるだけ。AI が生成した JSX を ",
    replaceBodyAfter: " に貼り付ければそれで完了です。",
    replaceSteps: [
      "お好きな AI ツールで React コンポーネントを生成",
      "生成したコードで src/App.jsx を差し替え",
      "import が足りないときは npm run check を実行",
      "commit して push すれば自動でデプロイ",
    ],
    footerLine1: "© 2026 Eugene Yip.",
    footerLine2: "All Rights Reserved.",
    langLabel: "言語",
  },
};

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ja", label: "日本語", short: "日" },
];

const STEP_ICONS = [
  <Sparkles className="h-5 w-5" />,
  <FileCode className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
];

const HTML_LANG = {
  en: "en",
  zh: "zh-TW",
  es: "es",
  ja: "ja",
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
      <main className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-[#E9E0D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(252,250,242,0.92)_100%)] shadow-[0_18px_70px_rgba(54,42,27,0.08)]">
          <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D8C7] bg-white/85 px-3 py-1.5 text-xs font-medium text-[#5E564C]">
                <span className="h-2 w-2 rounded-full bg-[#A67B5B]" />
                {t.badge}
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#241F1A] sm:text-5xl lg:text-6xl">
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4B443C] sm:text-base">
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
                  href="https://github.com/EugeneYip/aiweb#readme"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9CEBD] bg-white/80 px-5 py-3 text-sm font-medium text-[#2F2A24] transition hover:bg-white"
                >
                  {t.ctaSecondary}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.details.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E9E0D2] bg-white/70 px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[#7A6F63]">{item.label}</p>
                    <p className="mt-2 break-all font-mono text-sm font-medium text-[#241F1A]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#E9E0D2] bg-white/80 p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-[#F0E7DA] pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7A6F63]">{t.includedLabel}</p>
                  <h2 className="mt-2 text-lg font-semibold text-[#241F1A]">{t.includedTitle}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4EEE1] text-[#5C5247]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#FCFAF2] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A67B5B]" />
                    <span className="text-sm font-medium text-[#241F1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-8 rounded-[2rem] border border-[#E9E0D2] bg-white/65 px-5 py-7 shadow-[0_8px_30px_rgba(54,42,27,0.04)] sm:px-8 sm:py-9 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">{t.howItWorksLabel}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              {t.howItWorksTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C] sm:text-base">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {t.steps.map((step, idx) => (
              <div
                key={step.number}
                className="rounded-3xl border border-[#E9E0D2] bg-white/75 p-5 shadow-[0_8px_30px_rgba(54,42,27,0.05)] backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4EEE1] text-[#5C5247]">
                    {STEP_ICONS[idx]}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#A89A87]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#241F1A]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4B443C]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start */}
        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#E9E0D2] bg-white/70 p-5 shadow-[0_8px_30px_rgba(54,42,27,0.04)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">{t.quickStartLabel}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              {t.quickStartTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C]">
              {t.quickStartSubtitle}
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[#ECE2D4] bg-[#1F1A16] text-[#F8F2E8]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-[#CBBEAF]">
                <Terminal className="h-3.5 w-3.5" />
                <span className="font-mono">{t.terminalLabel}</span>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <pre className="overflow-x-auto text-xs leading-7 sm:text-sm">
                  <code>{`# 1. install dependencies
npm install

# 2. start dev server
npm run dev

# 3. (optional) check for missing imports
npm run check`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E9E0D2] bg-white/70 p-5 shadow-[0_8px_30px_rgba(54,42,27,0.04)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">{t.replaceLabel}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              {t.replaceTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C]">
              {t.replaceBodyBefore}
              <code className="rounded bg-[#F4EEE1] px-1.5 py-0.5 font-mono text-xs text-[#241F1A]">src/App.jsx</code>
              {t.replaceBodyAfter}
            </p>

            <div className="mt-6 space-y-3">
              {t.replaceSteps.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#EFE5D8] bg-[#FCFAF2] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A67B5B]" />
                  <p className="text-sm leading-7 text-[#3F382F]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 pb-24 text-center text-sm text-[#6B6257]">
          {t.footerLine1} <br className="sm:hidden" />
          {t.footerLine2}
        </footer>
      </main>

      {/* Language switcher — persistent, tucked into bottom-right */}
      <div ref={switcherRef} className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
        {langOpen && (
          <div
            role="listbox"
            aria-label={t.langLabel}
            className="mb-3 min-w-[9.5rem] overflow-hidden rounded-2xl border border-[#E9E0D2] bg-white/95 shadow-[0_18px_50px_rgba(54,42,27,0.15)] backdrop-blur-sm"
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
          className="flex h-12 items-center gap-2 rounded-full border border-[#E3D8C7] bg-white/90 px-4 text-[#5C5247] shadow-[0_10px_30px_rgba(54,42,27,0.12)] backdrop-blur-sm transition hover:bg-white"
        >
          <Globe className="h-5 w-5" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[#5C5247]">
            {currentLang.short}
          </span>
        </button>
      </div>
    </div>
  );
}

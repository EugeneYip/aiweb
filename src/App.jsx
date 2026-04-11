import { Sparkles, FileCode, GitBranch, Globe, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "01",
    title: "Generate with AI",
    body: "Ask Claude, ChatGPT, or any AI to generate a React JSX component for the page you want.",
  },
  {
    icon: <FileCode className="h-5 w-5" />,
    number: "02",
    title: "Replace one file",
    body: "Open src/App.jsx and replace its content with the JSX you just generated. That is the only file you need to change.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    number: "03",
    title: "Push to deploy",
    body: "Commit and push to the main branch. The included GitHub Actions workflow builds and publishes your site automatically.",
  },
];

const includes = [
  "40+ shadcn/ui components",
  "80+ pre-installed packages",
  "Tailwind CSS, ready to use",
  "GitHub Actions deployment",
  "Custom domain support",
  "Auto base path detection",
];

const details = [
  { label: "Main file", value: "src/App.jsx" },
  { label: "Check imports", value: "npm run check" },
  { label: "Local dev", value: "npm run dev" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF2] text-[#2F2A24] antialiased">
      <main className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-[#E9E0D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(252,250,242,0.92)_100%)] shadow-[0_18px_70px_rgba(54,42,27,0.08)]">
          <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D8C7] bg-white/85 px-3 py-1.5 text-xs font-medium text-[#5E564C]">
                <span className="h-2 w-2 rounded-full bg-[#A67B5B]" />
                AI Page Publisher
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#241F1A] sm:text-5xl lg:text-6xl">
                Publish AI pages
                <br />
                in one push.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4B443C] sm:text-base">
                A clean template for turning any AI-generated React artifact into a live website. Replace one file. Push to GitHub. Done.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/EugeneYip/aiweb"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F2A24] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1F1A16]"
                >
                  Use this template
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/EugeneYip/aiweb#readme"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9CEBD] bg-white/80 px-5 py-3 text-sm font-medium text-[#2F2A24] transition hover:bg-white"
                >
                  Read the README
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {details.map((item) => (
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
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7A6F63]">Included</p>
                  <h2 className="mt-2 text-lg font-semibold text-[#241F1A]">What you get</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4EEE1] text-[#5C5247]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {includes.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">How it works</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              A simple three-step flow
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C] sm:text-base">
              The whole process is intentionally short. Generate, replace, push. Your page is live.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-[#E9E0D2] bg-white/75 p-5 shadow-[0_8px_30px_rgba(54,42,27,0.05)] backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4EEE1] text-[#5C5247]">
                    {step.icon}
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">Quick start</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              Run it locally
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C]">
              Clone your new repository, install the dependencies, and start the dev server.
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[#ECE2D4] bg-[#1F1A16] text-[#F8F2E8]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-[#CBBEAF]">
                <Terminal className="h-3.5 w-3.5" />
                <span className="font-mono">terminal</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6257]">Replace</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#241F1A] sm:text-3xl">
              Where the magic happens
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B443C]">
              Most updates only require changing one file. Paste your AI-generated JSX into <code className="rounded bg-[#F4EEE1] px-1.5 py-0.5 font-mono text-xs text-[#241F1A]">src/App.jsx</code> and you are done.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Generate a React component with any AI tool",
                "Replace src/App.jsx with the generated code",
                "Run npm run check if any imports are missing",
                "Commit and push to deploy automatically",
              ].map((item) => (
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

        <footer className="mt-10 pb-2 text-center text-sm text-[#6B6257]">
          © 2026 Eugene Yip. <br className="sm:hidden" />All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}

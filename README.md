# AI Page Publisher

> Publish AI-generated React pages to the web in one push.

| [English](README.md) · [中文](README.zh-TW.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt-BR.md) · [Español](README.es-MX.md) · [العربية](README.ar-SA.md) · [اردو](README.ur-PK.md) · [ไทย](README.th.md) · [Italiano](README.it.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) |
| :-- |

Generate a page with Claude, ChatGPT, or any LLM. Paste it into `src/App.jsx`. Push. Done.

## Quick Start

1. **Use this template** to create your own repository
2. **Replace** `src/App.jsx` with your AI-generated artifact
3. **Push** to `main` — GitHub Actions builds and deploys automatically

Your site will be live at `https://<username>.github.io/<repo-name>/`.

## What's Included

This template comes pre-configured with everything AI artifacts commonly use:

- **React 18 + Vite + Tailwind CSS 3** — modern, fast, zero-config build
- **40+ shadcn/ui components** pre-installed in `src/components/ui/`
- **All Radix UI primitives** for accessible interactions
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Charts** — `recharts`, `chart.js` + `react-chartjs-2`
- **Animation** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Forms** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Utilities** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom`, and many more

> Tree-shaking ensures only the packages your artifact actually uses end up in the final bundle.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Check for Missing Imports

If your AI-generated artifact uses a package that is not pre-installed, run:

```bash
npm run check
```

This scans your source files and reports any missing dependencies, with the exact `npm install` command to fix them.

## Custom Domain

1. Edit `public/CNAME` — replace the placeholder with your domain (for example, `mysite.com`)
2. Configure your DNS to point to GitHub Pages
3. In your repository: **Settings → Pages → Custom domain** — enter the same domain
4. Optionally verify the domain under **Settings → Verified domains**

If you don't need a custom domain, delete `public/CNAME` or leave it alone. Comments in the file are ignored.

## How the Base Path Works

The build automatically detects the correct base path:

| Scenario | Base Path |
| :-- | :-- |
| Custom domain (CNAME has a domain) | `/` |
| GitHub Pages (no custom domain) | `/<repo-name>/` |
| Local development | `/` |

No manual configuration is needed.

## Enable GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow triggers automatically

## File Structure

```
├── src/
│   ├── App.jsx              ← REPLACE THIS FILE
│   ├── main.jsx             ← Entry point (do not touch)
│   ├── index.css            ← Tailwind + shadcn theme
│   ├── lib/utils.js         ← cn() utility
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui components
├── public/
│   ├── CNAME                ← Custom domain (optional)
│   └── favicon.svg          ← Site icon
├── scripts/
│   └── check-imports.js     ← Detect missing dependencies
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions deployment
├── index.html               ← Vite entry HTML with SEO tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Adding More shadcn/ui Components

The template includes 40+ shadcn components. If you need more:

```bash
npx shadcn@latest add <component-name>
```

The `components.json` is pre-configured.

## Troubleshooting

**Build fails with import errors.**
Run `npm run check` to see which packages are missing, then install them.

**Page is blank after deploy.**
Make sure GitHub Pages source is set to **GitHub Actions**, not "Deploy from a branch".

**Custom domain not working.**
Verify `public/CNAME` contains only your domain. Check your DNS records.

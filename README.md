# AI Page Publisher

Publish AI-generated React artifacts to the web with one push.

Generate a page with Claude, ChatGPT, or any LLM. Paste it into `src/App.jsx`. Push. Done.

## Quick Start

1. **Use this template** to create your own repository
2. **Replace** `src/App.jsx` with your AI-generated artifact
3. **Push** to `main` — GitHub Actions builds and deploys automatically

Your site will be live at `https://<username>.github.io/<repo-name>/`

## What's Included

This template comes pre-configured with everything AI artifacts commonly use:

### UI Framework
- **React 18** + **Tailwind CSS 3** + **Vite**
- **shadcn/ui** components (40+ pre-installed in `src/components/ui/`)
- All **Radix UI** primitives
- `cn()` utility at `@/lib/utils`

### Icons & Visuals
- `lucide-react` — most common in Claude artifacts
- `react-icons` — 40+ icon sets
- `@heroicons/react`

### Charts & Data
- `recharts`
- `chart.js` + `react-chartjs-2`

### Animation
- `framer-motion`
- `react-spring`
- `tailwindcss-animate`

### Forms & Validation
- `react-hook-form` + `@hookform/resolvers`
- `zod`

### 3D
- `three` + `@react-three/fiber` + `@react-three/drei`

### Utilities
- `date-fns`, `lodash`, `uuid`, `axios`, `zustand`
- `react-router-dom`, `react-markdown`, `react-syntax-highlighter`
- `sonner`, `react-hot-toast`
- `@tanstack/react-table`, `@tanstack/react-query`
- `@dnd-kit/core`, `@dnd-kit/sortable`
- `react-day-picker`, `cmdk`, `vaul`, `embla-carousel-react`
- `katex`, `react-katex`, `prismjs`
- `html2canvas`, `qrcode.react`, `react-countup`, `react-dropzone`

> Tree-shaking ensures only the packages your artifact actually uses end up in the final bundle.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Custom Domain

1. Edit `public/CNAME` — replace the placeholder with your domain (e.g. `mysite.com`)
2. Configure your DNS to point to GitHub Pages
3. In your repo: **Settings → Pages → Custom domain** — enter the same domain
4. Optionally verify the domain under **Settings → Verified domains**

If you don't need a custom domain, delete `public/CNAME` or leave it as-is (comments are ignored).

## How the Base Path Works

The build automatically detects the correct base path:

| Scenario | Base Path |
|----------|-----------|
| Custom domain (CNAME has a domain) | `/` |
| GitHub Pages (no custom domain) | `/<repo-name>/` |
| Local development | `/` |

No manual configuration needed.

## Enable GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow triggers automatically

## Updating the Page Title

Edit the `<title>` tag in:
- `index.html`
- `docs/index.html`
- `docs/404.html`

## Adding More shadcn/ui Components

The template includes 40+ shadcn components. If you need more:

```bash
npx shadcn@latest add <component-name>
```

The `components.json` is pre-configured.

## File Structure

```
├── src/
│   ├── App.jsx              ← REPLACE THIS FILE
│   ├── main.jsx             ← Entry point (don't touch)
│   ├── index.css            ← Tailwind + shadcn theme
│   ├── lib/utils.js         ← cn() utility
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui components
├── public/
│   ├── CNAME                ← Custom domain (optional)
│   └── favicon.svg          ← Site icon
├── docs/
│   ├── index.html           ← Redirect page
│   └── 404.html             ← SPA fallback for client-side routing
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions deployment
├── index.html               ← Vite entry HTML
├── package.json             ← All dependencies
├── vite.config.js           ← Build config with auto base path
├── tailwind.config.js       ← Tailwind + shadcn theme config
├── components.json          ← shadcn/ui config
└── README.md
```

## Troubleshooting

**Build fails with import errors**
Your artifact may import a package not included in the template. Install it:
```bash
npm install <package-name>
```

**Page is blank after deploy**
Check that GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch").

**Styles look wrong**
Make sure your artifact uses Tailwind CSS classes. The template uses Tailwind v3 — most AI models generate v3-compatible output.

**Custom domain not working**
Verify `public/CNAME` contains only your domain (no comments, no extra lines). Check DNS settings.

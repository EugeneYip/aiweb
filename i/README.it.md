# AI Page Publisher

> Pubblica pagine React generate dall'AI sul web con un solo push.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Genera una pagina con Claude, ChatGPT o qualsiasi AI. Incollala in `src/App.jsx`. Fai push. Fatto.

## Avvio rapido

1. **Chiedi il JSX alla tua AI** — di' a Claude, ChatGPT o qualsiasi AI di generare la pagina che vuoi come componente React in **formato JSX**
2. **Usa questo template** per creare il tuo repository
3. **Abilita GitHub Pages** — vai su **Settings → Pages** e imposta Source su **GitHub Actions**
4. **Sostituisci** [`src/App.jsx`](../src/App.jsx) con il JSX generato dall'AI
5. **Fai push** su `main` — il tuo sito sarà live su `https://<username>.github.io/<repo-name>/`

## Personalizzazione (Opzionale)

| Cosa | Come |
| :-- | :-- |
| Titolo e descrizione della pagina | Modifica `<title>` e `<meta name="description">` in [`index.html`](../index.html) |
| Dominio personalizzato | Sostituisci il placeholder in [`public/CNAME`](../public/CNAME) con il tuo dominio (es. `miosito.com`), configura il DNS per GitHub Pages e inserisci lo stesso dominio in **Settings → Pages → Custom domain**. In alternativa, crea una variabile di repository chiamata `CUSTOM_DOMAIN` in **Settings → Secrets and variables → Actions → Variables** |

## Cosa è incluso

Questo template è preconfigurato con tutto ciò che gli artefatti AI usano comunemente:

- **React 18 + Vite + Tailwind CSS 3** — build moderno, veloce, zero configurazione
- **Oltre 40 componenti shadcn/ui** preinstallati in `src/components/ui/`
- **Tutti i primitivi Radix UI** per interazioni accessibili
- **Icone** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafici** — `recharts`, `chart.js` + `react-chartjs-2`
- **Animazioni** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Form** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Utilità** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` e molti altri

> Il tree-shaking garantisce che solo i pacchetti effettivamente utilizzati finiscano nel bundle finale.

## Verifica gli import mancanti

Se il codice generato dall'AI usa un pacchetto non preinstallato, esegui:

```bash
npm run check
```

Questo analizza i file sorgente e segnala le dipendenze mancanti, con il comando `npm install` esatto per correggerle.

## Come funziona il base path

Il build rileva automaticamente il base path corretto:

| Scenario | Base Path |
| :-- | :-- |
| Dominio personalizzato (CNAME con un dominio) | `/` |
| GitHub Pages (senza dominio personalizzato) | `/<repo-name>/` |
| Sviluppo locale | `/` |

Nessuna configurazione manuale necessaria.

## Struttura dei file

```
├── src/
│   ├── App.jsx              ← SOSTITUISCI QUESTO FILE
│   ├── main.jsx             ← Punto di ingresso (non toccare)
│   ├── index.css            ← Tailwind + tema shadcn
│   ├── lib/utils.js         ← Utilità cn()
│   ├── hooks/use-toast.js   ← Hook toast
│   └── components/ui/       ← Componenti shadcn/ui
├── public/
│   ├── CNAME                ← Dominio personalizzato (opzionale)
│   └── favicon.svg          ← Icona del sito
├── scripts/
│   └── check-imports.js     ← Rileva dipendenze mancanti
├── .github/workflows/
│   └── deploy.yml           ← Deployment con GitHub Actions
├── index.html               ← Titolo della pagina e meta tag
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Aggiungere altri componenti shadcn/ui

Il template include oltre 40 componenti shadcn. Se ne hai bisogno di altri:

```bash
npx shadcn@latest add <nome-componente>
```

Il file `components.json` è già preconfigurato.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:5173` nel browser.

## Risoluzione dei problemi

**Il build fallisce con errori di import.**
Esegui `npm run check` per vedere quali pacchetti mancano, poi installali.

**La pagina è vuota dopo il deploy.**
Assicurati che la sorgente di GitHub Pages sia impostata su **GitHub Actions**, non su "Deploy from a branch".

**Il dominio personalizzato non funziona.**
Verifica che `public/CNAME` contenga solo il tuo dominio. Controlla anche i record DNS.

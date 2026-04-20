# AI Page Publisher

> Veröffentliche KI-generierte React-Seiten mit einem einzigen Push im Web.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Generiere eine Seite mit Claude, ChatGPT oder einer beliebigen KI. Füge sie in `src/App.jsx` ein. Push. Fertig.

## Schnellstart

1. **Frag deine KI nach JSX** — bitte Claude, ChatGPT oder eine beliebige KI, deine Seite als React-Komponente im **JSX-Format** zu generieren
2. **Verwende dieses Template**, um dein eigenes Repository zu erstellen
3. **Aktiviere GitHub Pages** — gehe zu **Settings → Pages** und setze Source auf **GitHub Actions**
4. **Ersetze** [`src/App.jsx`](../src/App.jsx) durch das von der KI generierte JSX
5. **Push** nach `main` — deine Seite ist dann unter `https://<benutzername>.github.io/<repo-name>/` erreichbar

## Anpassen (Optional)

| Was | Wie |
| :-- | :-- |
| Seitentitel und Beschreibung | Bearbeite `<title>` und `<meta name="description">` in [`index.html`](../index.html) |
| Eigene Domain | Ersetze den Platzhalter in [`public/CNAME`](../public/CNAME) durch deine Domain (z. B. `meineseite.com`), konfiguriere DNS für GitHub Pages und trage dieselbe Domain unter **Settings → Pages → Custom domain** ein. Alternativ kannst du eine Repository-Variable namens `CUSTOM_DOMAIN` unter **Settings → Secrets and variables → Actions → Variables** erstellen |

## Was enthalten ist

Dieses Template ist mit allem vorkonfiguriert, was KI-generierte Seiten typischerweise verwenden:

- **React 18 + Vite + Tailwind CSS 3** — moderner, schneller Build ohne Konfiguration
- **Über 40 shadcn/ui-Komponenten** vorinstalliert in `src/components/ui/`
- **Alle Radix UI Primitives** für barrierefreie Interaktionen
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Diagramme** — `recharts`, `chart.js` + `react-chartjs-2`
- **Animation** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Formulare** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Hilfsbibliotheken** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` und viele mehr

> Tree-Shaking stellt sicher, dass nur die Pakete, die du tatsächlich verwendest, im finalen Bundle landen.

## Fehlende Imports prüfen

Falls dein KI-generierter Code ein Paket verwendet, das nicht vorinstalliert ist, führe aus:

```bash
npm run check
```

Dies scannt deine Quelldateien und meldet fehlende Abhängigkeiten, mit dem passenden `npm install`-Befehl zur Behebung.

## Wie der Base Path funktioniert

Der Build erkennt automatisch den richtigen Base Path:

| Szenario | Base Path |
| :-- | :-- |
| Eigene Domain (CNAME enthält eine Domain) | `/` |
| GitHub Pages (keine eigene Domain) | `/<repo-name>/` |
| Lokale Entwicklung | `/` |

Keine manuelle Konfiguration erforderlich.

## Dateistruktur

```
├── src/
│   ├── App.jsx              ← DIESE DATEI ERSETZEN
│   ├── main.jsx             ← Einstiegspunkt (nicht ändern)
│   ├── index.css            ← Tailwind + shadcn-Theme
│   ├── lib/utils.js         ← cn()-Hilfsfunktion
│   ├── hooks/use-toast.js   ← Toast-Hook
│   └── components/ui/       ← shadcn/ui-Komponenten
├── public/
│   ├── CNAME                ← Eigene Domain (optional)
│   └── favicon.svg          ← Website-Icon
├── scripts/
│   └── check-imports.js     ← Fehlende Abhängigkeiten erkennen
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions Deployment
├── index.html               ← Seitentitel und Meta-Tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Weitere shadcn/ui-Komponenten hinzufügen

Das Template enthält über 40 shadcn-Komponenten. Falls du mehr brauchst:

```bash
npx shadcn@latest add <komponentenname>
```

Die `components.json` ist bereits vorkonfiguriert.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne `http://localhost:5173` im Browser.

## Fehlerbehebung

**Build schlägt mit Import-Fehlern fehl.**
Führe `npm run check` aus, um fehlende Pakete zu finden, und installiere sie.

**Seite ist nach dem Deploy leer.**
Stelle sicher, dass die GitHub Pages-Quelle auf **GitHub Actions** gesetzt ist, nicht auf „Deploy from a branch".

**Eigene Domain funktioniert nicht.**
Überprüfe, ob `public/CNAME` nur deine Domain enthält. Prüfe deine DNS-Einträge.

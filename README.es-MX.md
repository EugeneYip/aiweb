# AI Page Publisher

> Publica páginas de React generadas por IA en la web con un solo push.

| [English](README.md) · [中文（臺灣）](README.zh-TW.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português (Brasil)](README.pt-BR.md) · [Español (México)](README.es-MX.md) · [العربية (السعودية)](README.ar-SA.md) · [اردو (پاکستان)](README.ur-PK.md) · [ไทย](README.th.md) · [Italiano](README.it.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) |
| :-- |

Genera una página con Claude, ChatGPT o cualquier modelo de lenguaje. Pégala en `src/App.jsx`. Haz push. Listo.

## Inicio rápido

1. **Usa esta plantilla** para crear tu propio repositorio
2. **Reemplaza** `src/App.jsx` con tu artefacto generado por IA
3. **Haz push** a `main` — GitHub Actions construye y despliega automáticamente

Tu sitio estará disponible en `https://<usuario>.github.io/<nombre-del-repositorio>/`.

## Qué incluye

Esta plantilla viene preconfigurada con todo lo que los artefactos de IA suelen utilizar:

- **React 18 + Vite + Tailwind CSS 3** — compilación moderna, rápida y sin configuración
- **Más de 40 componentes de shadcn/ui** preinstalados en `src/components/ui/`
- **Todas las primitivas de Radix UI** para interacciones accesibles
- **Iconos** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Gráficas** — `recharts`, `chart.js` con `react-chartjs-2`
- **Animación** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Formularios** — `react-hook-form` con `@hookform/resolvers` y `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Utilidades** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` y muchas más

> El tree-shaking garantiza que solo los paquetes que realmente utiliza tu artefacto terminen en el bundle final.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Verificar dependencias faltantes

Si tu artefacto generado por IA utiliza un paquete que no está preinstalado, ejecuta:

```bash
npm run check
```

Este comando analiza tus archivos fuente y reporta cualquier dependencia faltante, junto con el comando exacto de `npm install` para resolverla.

## Dominio personalizado

1. Edita `public/CNAME` — sustituye el contenido de marcador por tu dominio (por ejemplo, `misitio.com`)
2. Configura tu DNS para que apunte a GitHub Pages
3. En tu repositorio: **Settings → Pages → Custom domain** — ingresa el mismo dominio
4. Opcionalmente, verifica el dominio en **Settings → Verified domains**

Si no necesitas un dominio personalizado, elimina `public/CNAME` o déjalo tal cual. Los comentarios dentro del archivo se ignoran.

## Cómo funciona la ruta base

La compilación detecta automáticamente la ruta base correcta:

| Escenario | Ruta base |
| :-- | :-- |
| Dominio personalizado (CNAME tiene un dominio) | `/` |
| GitHub Pages (sin dominio personalizado) | `/<nombre-del-repositorio>/` |
| Desarrollo local | `/` |

No requiere configuración manual.

## Activar GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio
2. Establece **Source** en **GitHub Actions**
3. Haz push a `main` — el workflow se activará automáticamente

## Estructura de archivos

```
├── src/
│   ├── App.jsx              ← REEMPLAZA ESTE ARCHIVO
│   ├── main.jsx             ← Punto de entrada (no modificar)
│   ├── index.css            ← Tailwind y tema de shadcn
│   ├── lib/utils.js         ← Función utilitaria cn()
│   ├── hooks/use-toast.js   ← Hook de toast
│   └── components/ui/       ← Componentes de shadcn/ui
├── public/
│   ├── CNAME                ← Dominio personalizado (opcional)
│   └── favicon.svg          ← Icono del sitio
├── scripts/
│   └── check-imports.js     ← Detecta dependencias faltantes
├── .github/workflows/
│   └── deploy.yml           ← Despliegue con GitHub Actions
├── index.html               ← HTML de entrada de Vite con etiquetas SEO
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Agregar más componentes de shadcn/ui

La plantilla incluye más de 40 componentes de shadcn. Si necesitas más:

```bash
npx shadcn@latest add <nombre-del-componente>
```

El archivo `components.json` ya está preconfigurado.

## Solución de problemas

**La compilación falla con errores de importación.**
Ejecuta `npm run check` para identificar los paquetes faltantes y luego instálalos.

**La página aparece en blanco después del despliegue.**
Asegúrate de que la fuente de GitHub Pages esté configurada como **GitHub Actions**, no como "Deploy from a branch".

**El dominio personalizado no funciona.**
Verifica que `public/CNAME` contenga únicamente tu dominio. Revisa la configuración de tu DNS.

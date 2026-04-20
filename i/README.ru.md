# AI Page Publisher

> Публикуйте сгенерированные ИИ React-страницы в веб одним push.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Сгенерируйте страницу с помощью Claude, ChatGPT или любого ИИ. Вставьте её в `src/App.jsx`. Сделайте push. Готово.

## Быстрый старт

1. **Попросите ИИ сгенерировать JSX** — скажите Claude, ChatGPT или любому ИИ создать нужную страницу как React-компонент в **формате JSX**
2. **Используйте этот шаблон** для создания собственного репозитория
3. **Включите GitHub Pages** — перейдите в **Settings → Pages** и установите Source на **GitHub Actions**
4. **Замените** [`src/App.jsx`](../src/App.jsx) на JSX, сгенерированный ИИ
5. **Сделайте push** в `main` — ваш сайт будет доступен по адресу `https://<имя-пользователя>.github.io/<имя-репо>/`

## Настройка (Необязательно)

| Что | Как |
| :-- | :-- |
| Заголовок и описание страницы | Измените `<title>` и `<meta name="description">` в [`index.html`](../index.html) |
| Свой домен | Замените заглушку в [`public/CNAME`](../public/CNAME) на свой домен (например, `mysite.com`), настройте DNS для GitHub Pages и введите тот же домен в **Settings → Pages → Custom domain**. Или создайте переменную репозитория `CUSTOM_DOMAIN` в **Settings → Secrets and variables → Actions → Variables** |

## Что включено

Этот шаблон предварительно настроен со всем, что обычно используют сгенерированные ИИ страницы:

- **React 18 + Vite + Tailwind CSS 3** — современная, быстрая сборка без настройки
- **Более 40 компонентов shadcn/ui** предустановлены в `src/components/ui/`
- **Все примитивы Radix UI** для доступных интерактивных элементов
- **Иконки** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Графики** — `recharts`, `chart.js` + `react-chartjs-2`
- **Анимация** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Формы** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Утилиты** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` и многое другое

> Tree-shaking гарантирует, что в финальную сборку попадут только те пакеты, которые вы реально используете.

## Проверка отсутствующих импортов

Если сгенерированный ИИ код использует пакет, который не предустановлен, выполните:

```bash
npm run check
```

Эта команда сканирует ваши исходные файлы и сообщает об отсутствующих зависимостях с точной командой `npm install` для их установки.

## Как работает base path

Сборка автоматически определяет правильный base path:

| Сценарий | Base Path |
| :-- | :-- |
| Свой домен (в CNAME указан домен) | `/` |
| GitHub Pages (без своего домена) | `/<имя-репо>/` |
| Локальная разработка | `/` |

Ручная настройка не требуется.

## Структура файлов

```
├── src/
│   ├── App.jsx              ← ЗАМЕНИТЕ ЭТОТ ФАЙЛ
│   ├── main.jsx             ← Точка входа (не трогать)
│   ├── index.css            ← Tailwind + тема shadcn
│   ├── lib/utils.js         ← Утилита cn()
│   ├── hooks/use-toast.js   ← Хук toast
│   └── components/ui/       ← Компоненты shadcn/ui
├── public/
│   ├── CNAME                ← Свой домен (необязательно)
│   └── favicon.svg          ← Иконка сайта
├── scripts/
│   └── check-imports.js     ← Обнаружение отсутствующих зависимостей
├── .github/workflows/
│   └── deploy.yml           ← Деплой через GitHub Actions
├── index.html               ← Заголовок страницы и мета-теги
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Добавление компонентов shadcn/ui

Шаблон включает более 40 компонентов shadcn. Если вам нужно больше:

```bash
npx shadcn@latest add <имя-компонента>
```

Файл `components.json` уже настроен.

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте `http://localhost:5173` в браузере.

## Решение проблем

**Сборка падает с ошибками импорта.**
Выполните `npm run check`, чтобы увидеть какие пакеты отсутствуют, затем установите их.

**Страница пустая после деплоя.**
Убедитесь, что источник GitHub Pages установлен на **GitHub Actions**, а не на «Deploy from a branch».

**Свой домен не работает.**
Проверьте, что `public/CNAME` содержит только ваш домен. Проверьте DNS-записи.

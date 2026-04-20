# AI Page Publisher

> AI tarafından oluşturulan React sayfalarını tek bir push ile web'de yayınlayın.

| [English](../README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português](README.pt.md) · [Español](README.es.md) · [العربية](README.ar.md) · [Français](README.fr.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [עברית](README.he.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) |
| :-- |

Claude, ChatGPT veya herhangi bir yapay zeka ile sayfa oluşturun. `src/App.jsx` dosyasına yapıştırın. Push edin. Bitti.

## Hızlı Başlangıç

1. **Yapay zekadan JSX isteyin** — Claude, ChatGPT veya herhangi bir yapay zekadan istediğiniz sayfayı **JSX formatında** React bileşeni olarak oluşturmasını isteyin
2. **Bu şablonu kullanarak** kendi deponuzu oluşturun
3. **GitHub Pages'i etkinleştirin** — **Settings → Pages** sayfasına gidin ve Source'u **GitHub Actions** olarak ayarlayın
4. [`src/App.jsx`](../src/App.jsx) dosyasını yapay zekanın oluşturduğu JSX ile **değiştirin**
5. `main` dalına **push edin** — siteniz `https://<kullanıcı-adı>.github.io/<repo-adı>/` adresinde yayına girecektir

## Özelleştirme (İsteğe Bağlı)

| Ne | Nasıl |
| :-- | :-- |
| Sayfa başlığı ve açıklaması | [`index.html`](../index.html) dosyasındaki `<title>` ve `<meta name="description">` etiketlerini düzenleyin |
| Özel alan adı | [`public/CNAME`](../public/CNAME) dosyasındaki yer tutucuyu alan adınızla değiştirin (ör. `sitenim.com`), DNS'i GitHub Pages'e yönlendirin ve aynı alan adını **Settings → Pages → Custom domain** bölümüne girin. Alternatif olarak **Settings → Secrets and variables → Actions → Variables** bölümünde `CUSTOM_DOMAIN` adında bir depo değişkeni oluşturun |

## Neler Dahil

Bu şablon, yapay zeka tarafından oluşturulan sayfalarda yaygın olarak kullanılan her şeyle önceden yapılandırılmış olarak gelir:

- **React 18 + Vite + Tailwind CSS 3** — modern, hızlı, sıfır yapılandırmalı derleme
- **40'tan fazla shadcn/ui bileşeni** `src/components/ui/` dizininde önceden kurulu
- **Tüm Radix UI primitifleri** erişilebilir etkileşimler için
- **İkonlar** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafikler** — `recharts`, `chart.js` + `react-chartjs-2`
- **Animasyon** — `framer-motion`, `react-spring`, `tailwindcss-animate`
- **Formlar** — `react-hook-form` + `@hookform/resolvers` + `zod`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Yardımcı araçlar** — `date-fns`, `lodash`, `axios`, `zustand`, `react-router-dom` ve daha fazlası

> Tree-shaking, yalnızca gerçekten kullandığınız paketlerin son pakete dahil edilmesini sağlar.

## Eksik Import'ları Kontrol Etme

Yapay zekanın oluşturduğu kod önceden kurulu olmayan bir paket kullanıyorsa şunu çalıştırın:

```bash
npm run check
```

Bu komut kaynak dosyalarınızı tarar ve eksik bağımlılıkları, bunları düzeltmek için gereken `npm install` komutuyla birlikte raporlar.

## Base Path Nasıl Çalışır

Derleme, doğru base path'i otomatik olarak algılar:

| Senaryo | Base Path |
| :-- | :-- |
| Özel alan adı (CNAME'de alan adı var) | `/` |
| GitHub Pages (özel alan adı yok) | `/<repo-adı>/` |
| Yerel geliştirme | `/` |

Manuel yapılandırma gerekmez.

## Dosya Yapısı

```
├── src/
│   ├── App.jsx              ← BU DOSYAYI DEĞİŞTİRİN
│   ├── main.jsx             ← Giriş noktası (dokunmayın)
│   ├── index.css            ← Tailwind + shadcn teması
│   ├── lib/utils.js         ← cn() yardımcı fonksiyonu
│   ├── hooks/use-toast.js   ← Toast hook'u
│   └── components/ui/       ← shadcn/ui bileşenleri
├── public/
│   ├── CNAME                ← Özel alan adı (isteğe bağlı)
│   └── favicon.svg          ← Site ikonu
├── scripts/
│   └── check-imports.js     ← Eksik bağımlılıkları tespit et
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions ile dağıtım
├── index.html               ← Sayfa başlığı ve meta etiketleri
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Daha Fazla shadcn/ui Bileşeni Ekleme

Şablon 40'tan fazla shadcn bileşeni içerir. Daha fazlasına ihtiyaç duyarsanız:

```bash
npx shadcn@latest add <bileşen-adı>
```

`components.json` dosyası önceden yapılandırılmıştır.

## Yerel Geliştirme

```bash
npm install
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## Sorun Giderme

**Derleme import hataları nedeniyle başarısız oluyor.**
Hangi paketlerin eksik olduğunu görmek için `npm run check` komutunu çalıştırın, ardından bunları yükleyin.

**Deploy sonrası sayfa boş görünüyor.**
GitHub Pages kaynağının "Deploy from a branch" değil **GitHub Actions** olarak ayarlandığından emin olun.

**Özel alan adı çalışmıyor.**
`public/CNAME` dosyasının yalnızca alan adınızı içerdiğini doğrulayın. DNS kayıtlarınızı kontrol edin.

# AI Page Publisher

> AIが生成したReactページを、たった一度のpushでウェブに公開します。

| [English](README.md) · [中文（臺灣）](README.zh-TW.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md) · [Português (Brasil)](README.pt-BR.md) · [Español (México)](README.es-MX.md) · [العربية (السعودية)](README.ar-SA.md) · [اردو (پاکستان)](README.ur-PK.md) · [ไทย](README.th.md) · [Italiano](README.it.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) |
| :-- |

Claude、ChatGPT、その他のLLMでページを生成し、`src/App.jsx`に貼り付けてpushするだけで完了します。

## クイックスタート

1. **このテンプレートを使用**して、ご自身のリポジトリを作成してください
2. `src/App.jsx`をAIが生成した成果物に**置き換えて**ください
3. `main`ブランチに**push**してください — GitHub Actionsが自動的にビルドとデプロイを行います

サイトは`https://<ユーザー名>.github.io/<リポジトリ名>/`で公開されます。

## 含まれているもの

このテンプレートには、AI成果物でよく使用される要素がすべて事前設定されています：

- **React 18 + Vite + Tailwind CSS 3** — モダンで高速、設定不要のビルド環境
- **40以上のshadcn/uiコンポーネント**を`src/components/ui/`に事前インストール済み
- **すべてのRadix UIプリミティブ**によるアクセシブルなインタラクション
- **アイコン** — `lucide-react`、`react-icons`、`@heroicons/react`
- **チャート** — `recharts`、`chart.js`と`react-chartjs-2`
- **アニメーション** — `framer-motion`、`react-spring`、`tailwindcss-animate`
- **フォーム** — `react-hook-form`と`@hookform/resolvers`、`zod`
- **3D** — `three`、`@react-three/fiber`、`@react-three/drei`
- **ユーティリティ** — `date-fns`、`lodash`、`axios`、`zustand`、`react-router-dom`など多数

> Tree-shakingにより、実際に使用しているパッケージのみが最終バンドルに含まれます。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで`http://localhost:5173`を開いてください。

## 不足している依存関係の確認

AIが生成した成果物が事前にインストールされていないパッケージを使用している場合、以下を実行してください：

```bash
npm run check
```

このコマンドはソースファイルをスキャンし、不足している依存関係を、修正に必要な`npm install`コマンドとともに報告します。

## カスタムドメイン

1. `public/CNAME`を編集し、プレースホルダーをご自身のドメイン（例：`mysite.com`）に置き換えてください
2. DNSをGitHub Pagesに向けて設定してください
3. リポジトリの**Settings → Pages → Custom domain**に同じドメインを入力してください
4. 任意で**Settings → Verified domains**でドメインを検証してください

カスタムドメインが不要な場合は、`public/CNAME`を削除するか、そのままにしておいてください。ファイル内のコメントは無視されます。

## ベースパスの動作

ビルド時に正しいベースパスが自動的に検出されます：

| シナリオ | ベースパス |
| :-- | :-- |
| カスタムドメイン（CNAMEにドメインあり） | `/` |
| GitHub Pages（カスタムドメインなし） | `/<リポジトリ名>/` |
| ローカル開発 | `/` |

手動設定は不要です。

## GitHub Pagesの有効化

1. リポジトリの**Settings → Pages**を開いてください
2. **Source**を**GitHub Actions**に設定してください
3. `main`ブランチにpushしてください — ワークフローが自動的に起動します

## ファイル構造

```
├── src/
│   ├── App.jsx              ← このファイルを置き換えてください
│   ├── main.jsx             ← エントリーポイント（変更しないでください）
│   ├── index.css            ← Tailwindとshadcnテーマ
│   ├── lib/utils.js         ← cn()ユーティリティ
│   ├── hooks/use-toast.js   ← トーストフック
│   └── components/ui/       ← shadcn/uiコンポーネント
├── public/
│   ├── CNAME                ← カスタムドメイン（任意）
│   └── favicon.svg          ← サイトアイコン
├── scripts/
│   └── check-imports.js     ← 不足依存関係の検出
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actionsデプロイ
├── index.html               ← Viteエントリ HTML（SEOタグ付き）
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## shadcn/uiコンポーネントの追加

テンプレートには40以上のshadcnコンポーネントが含まれています。さらに必要な場合は、以下を実行してください：

```bash
npx shadcn@latest add <コンポーネント名>
```

`components.json`は事前に設定済みです。

## トラブルシューティング

**ビルドがインポートエラーで失敗する場合**
`npm run check`を実行して不足しているパッケージを確認し、インストールしてください。

**デプロイ後にページが空白になる場合**
GitHub Pagesのソースが「Deploy from a branch」ではなく、**GitHub Actions**に設定されていることをご確認ください。

**カスタムドメインが機能しない場合**
`public/CNAME`にご自身のドメインのみが記載されていることを確認し、DNSレコードをご確認ください。

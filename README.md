# 株式会社Human Beings 公式ホームページ

> 人類を労働から解放し、好きなことにフルコミットできる社会を実現する

## 🚀 ビジョン

**人類を労働から解放する 〜AIで経済を回し、人間の余暇を増やす〜**

当社は、人間の自由な時間を増やし、創造性を最大限に発揮できる社会の実現を目指します。

## 🎯 ミッション

**人間1名 × AI社員100人で月商1億円を達成する**

人間とAIが協働することで、すべての人が非生産的な時間から解放され、自分の興味関心を追求し、経済的な自由と時間を手に入れられる未来を創造します。当社はその時代の先頭を走り、社会にノウハウを提供し、人類の発展を促します。

## 💎 バリュー

- **ヒューマンファースト**: すべての自動化は「人がより人間らしく生きる」ための手段にすぎない
- **オールオートメーション**: 人にしかできない判断以外は全てAIに委ねる
- **オープンソースノウハウ**: 知識を独占せず社会に還元する

## ✨ 実装済み機能

### 🏠 ランディングページ
- **ヒーローセクション**: 2カラムレイアウト、人間とロボットの握手画像
- **ビジョンセクション**: 企業理念の詳細説明
- **ミッションセクション**: 3つのカード（人間1名、AI社員100人、月商1億円）
- **バリューセクション**: 3つの価値観
- **vibe経営セクション**: 4層構造の詳細説明（目的層、戦略層、実行層、結果層）

### 🧭 ナビゲーション
- **レスポンシブ対応**: モバイル・デスクトップ
- **メニュー項目**: ビジョン、ミッション、バリュー
- **スムーススクロール**: アンカーリンク

### 📧 お問い合わせフォーム
- **フィールド**: 名前、メール、件名、メッセージ
- **バリデーション**: 必須項目チェック
- **デザイン**: モダンなグラデーション背景、アイコン付きラベル

### 📱 レスポンシブデザイン
- **モバイルファースト**: 320px〜対応
- **ブレークポイント**: 640px, 768px, 1024px, 1280px
- **タッチ操作**: 最適化済み

### 🎬 アニメーション
- **Framer Motion**: 滑らかなインタラクション
- **エフェクト**: フェードイン、スライドイン、ホバーエフェクト
- **パフォーマンス**: GPU加速対応

## 🛠 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Hosting**: Vercel

## 🚀 開発環境のセットアップ

### 必要な環境
- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/[your-username]/human-beings-website.git
cd human-beings-website

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### 利用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動  
npm start

# リンターチェック
npm run lint
```

## 📁 プロジェクト構成

```
human-beings-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # グローバルスタイル
│   │   ├── layout.tsx           # ルートレイアウト
│   │   └── page.tsx             # メインページ ✅ 実装済み
│   └── components/
│       ├── navigation.tsx       # ナビゲーション ✅ 実装済み
│       ├── contact-form.tsx     # お問い合わせフォーム ✅ 実装済み
│       ├── counter.tsx          # カウンターコンポーネント ✅ 実装済み
│       └── ui/                  # shadcn/uiコンポーネント
├── public/
│   └── images/                  # 画像ファイル
├── REQUIREMENTS.md              # 要件定義書
├── USER_STORIES.md              # ユーザーストーリー
├── TECHNICAL_SPECIFICATIONS.md  # 技術仕様書
└── components.json              # shadcn/ui設定
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (#2563eb) → Indigo (#4f46e5) → Purple (#9333ea)
- **Secondary**: Orange (#f97316) → Red (#ef4444) → Pink (#ec4899)
- **Success**: Green (#22c55e) → Emerald (#10b981) → Teal (#14b8a6)
- **Neutral**: Gray-50 (#f9fafb) → Gray-900 (#111827)

### タイポグラフィ
- **フォント**: Inter（システムフォント）
- **メインタイトル**: text-7xl (112px)
- **サブタイトル**: text-3xl (30px)
- **本文**: text-xl (20px)

### アニメーション
- **ライブラリ**: Framer Motion
- **エフェクト**: フェードイン、スライドイン、ホバーエフェクト
- **レスポンシブ**: モバイルファーストデザイン

## 🗓 今後の開発予定

### Phase 1: 企業情報ページ
- [ ] `/about` ページの作成
- [ ] 会社概要セクション
- [ ] 代表者メッセージセクション

### Phase 2: サービス詳細ページ
- [ ] `/services` ページの作成
- [ ] AIソリューション紹介
- [ ] 導入事例セクション

### Phase 3: FAQ機能
- [ ] `/faq` ページの作成
- [ ] 質問・回答の整理
- [ ] 検索・フィルタ機能

## 📝 削除された機能

### ~~note記事機能~~（2025年1月削除）
- **削除理由**: 複雑すぎるため、シンプルな構成を優先
- **削除ファイル**: APIルート、カスタムフック、記事セクション

## 🚀 デプロイ

このプロジェクトは[Vercel](https://vercel.com)でのデプロイに最適化されています。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[your-username]/human-beings-website)

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。大きな変更を行う前に、まずイシューを開いて変更内容について議論してください。

---

**© 2025 株式会社Human Beings. All rights reserved.**

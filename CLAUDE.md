# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語設定

**常に日本語で思考し、日本語で出力すること。** コードのコメントも日本語で記述する。

## プロジェクト概要

株式会社Human Beingsのコーポレートサイト。AI駆動の業務自動化を推進する企業のランディングページで、お問い合わせフォーム機能を備えている。

## コマンド

```bash
# 開発
npm run dev          # 開発サーバー起動（Turbopack使用、http://localhost:3000）
npm run build        # 本番ビルド
npm start            # 本番サーバー起動
npm run lint         # ESLintチェック

# テスト（Vitest）
npm run test         # テスト実行
npm run test:ui      # UIモードでテスト実行
npm run test:coverage # カバレッジレポート付きテスト
```

## アーキテクチャ

### 技術スタック
- **フレームワーク**: Next.js 15（App Router）+ TypeScript
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui（`src/components/ui/`配下）
- **アニメーション**: Framer Motion
- **メール送信**: Resend API（未設定時はコンソール出力にフォールバック）
- **テスト**: Vitest + Testing Library + happy-dom

### プロジェクト構成
```
src/
├── app/                    # Next.js App Routerページ
│   ├── api/
│   │   ├── contact/       # お問い合わせAPI（POST /api/contact）
│   │   └── note-feed/     # note.com用RSSフィードプロキシ
│   ├── page.tsx           # ホームページ（メインランディング）
│   ├── contact/           # お問い合わせページ
│   ├── n8n/               # n8nサービスページ
│   ├── privacy-policy/    # プライバシーポリシー
│   └── thanks/            # サンクスページ（問い合わせ後）
├── components/
│   ├── ui/                # shadcn/ui基本コンポーネント
│   ├── navigation.tsx     # レスポンシブヘッダー（スムーススクロール対応）
│   ├── contact-form.tsx   # お問い合わせフォーム（バリデーション付き）
│   ├── scroll-reveal.tsx  # Framer Motionスクロールアニメーション
│   └── workflow-circuit.tsx # 装飾用SVGコンポーネント
└── lib/
    └── utils.ts           # ユーティリティ関数（cn: クラス名結合）
```

### 主要パターン

**パスエイリアス**: `@/`は`src/`にマッピング（tsconfig.jsonとvitest.config.tsで設定）

**クライアントコンポーネント**: Framer Motionアニメーション用に`"use client"`ディレクティブを使用

**CSS変数**: `globals.css`でカスタムプロパティ定義（例: `--background`, `--electric`）

**お問い合わせフロー**: フォーム送信 → `/api/contact` → Resend APIでメール送信 → `/thanks`へリダイレクト

### 環境変数（メール送信用）
```
RESEND_API_KEY=        # Resend APIキー
RESEND_FROM_EMAIL=     # 送信元メールアドレス（デフォルト: onboarding@resend.dev）
CONTACT_TO_EMAIL=      # 受信先メールアドレス
```

## UIテスト（Chrome拡張）

ClaudeのChrome拡張（claude-in-chrome MCP）を使ってUIテストを行う。

### テスト手順
1. `npm run dev`で開発サーバーを起動
2. Chrome拡張でブラウザを開き、`http://localhost:3000`にアクセス
3. 以下の観点でUIを検証：
   - レイアウトが崩れていないか
   - アニメーションが正常に動作するか
   - レスポンシブ対応（モバイル・デスクトップ）
   - ナビゲーションのスムーススクロール
   - お問い合わせフォームの動作
4. 問題があればコードを修正し、再度検証
5. UXが「いい感じ」になるまで改善を繰り返す

### 検証ページ
- `/` - ホームページ（メインランディング）
- `/n8n` - n8nサービスページ
- `/contact` - お問い合わせページ
- `/privacy-policy` - プライバシーポリシー

## 長時間タスクの検証ルール

ビルド、大規模リファクタリング、複数ファイルの変更など長時間実行されるタスクの場合、**タスク完了後にバックグラウンドエージェントで結果を検証すること**。

例：
- コード変更後 → バックグラウンドエージェントで `npm run lint && npm run build` を実行して検証
- UI変更後 → バックグラウンドエージェントでChrome拡張を使ってUIテストを実行

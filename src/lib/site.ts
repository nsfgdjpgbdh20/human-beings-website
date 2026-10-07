// サイト全体で使う会社情報とナビゲーション。
// 未確認の情報（所在地・実績・効果の数値など）は推測で埋めない。

export const SITE_URL = "https://www.humanbeings.co.jp";

export const COMPANY = {
  name: "株式会社Human Beings",
  nameEn: "Human Beings Inc.",
  representative: "中山 舜",
  business: "AIコンサルティング・エンジニアリング（業務整理、AIエージェント・業務自動化の開発、導入支援・研修、運用改善）",
} as const;

export const NAV_ITEMS = [
  { name: "支援内容", href: "/#services" },
  { name: "AI社員くん", href: "/ai-shain" },
  { name: "進め方", href: "/#process" },
  { name: "会社情報", href: "/#company" },
] as const;

export const CONTACT_HREF = "/contact";

export const EXTERNAL_LINKS = {
  n8nCreator: "https://n8n.io/creators/nakayama/",
  note: "https://note.com/humanbeings_ai",
  instagram: "https://www.instagram.com/humanbeings_ai/",
} as const;

import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { COMPANY, CONTACT_HREF, EXTERNAL_LINKS } from "@/lib/site";

const FOOTER_LINKS = [
  { name: "支援内容", href: "/#services" },
  { name: "AI社員くん", href: "/ai-shain" },
  { name: "n8n導入・構築支援", href: "/n8n" },
  { name: "進め方", href: "/#process" },
  { name: "会社情報", href: "/#company" },
  { name: "ご相談窓口", href: CONTACT_HREF },
  { name: "プライバシーポリシー", href: "/privacy-policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-7 w-7" />
            <span className="text-[15px] font-bold text-ink">{COMPANY.name}</span>
          </div>
          <p className="max-w-md text-sm leading-[1.9] text-muted-ink">
            AIコンサルティング・エンジニアリング。業務の整理から、AIの設計・開発、現場への導入と運用改善までを支援します。
          </p>
        </div>
        <nav aria-label="フッターメニュー">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={EXTERNAL_LINKS.note} target="_blank" rel="noopener noreferrer" className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                note<span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </li>
            <li>
              <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                Instagram<span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="wrap py-5 text-xs text-muted-ink">© {new Date().getFullYear()} {COMPANY.name}</p>
      </div>
    </footer>
  );
}

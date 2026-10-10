import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ご相談窓口",
  description:
    "AI活用の相談・研修、業務自動化、企業専用AIエージェント「AI社員くん」の導入についてのご相談はこちらから。通常1〜2営業日以内にご返信します。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "ご相談窓口 | 株式会社Human Beings",
    description: "AI活用の相談、業務自動化、AI社員くんの導入についてのご相談窓口です。",
    url: `${SITE_URL}/contact`,
  },
};

// 遷移元の導線ごとに件名の初期値を入れる。取得項目と送信先は変えない
const TOPIC_SUBJECTS: Record<string, string> = {
  "ai-shain": "AI社員くんについての相談",
  n8n: "n8nによる業務自動化についての相談",
};

const NEXT_STEPS = [
  ["内容の確認", "いただいた内容を確認し、通常1〜2営業日以内にメールでご返信します。"],
  ["オンラインでのご相談", "必要に応じて、30分ほどオンラインでお話を伺います。"],
  ["範囲とお見積もり", "任せる範囲・受入の条件・費用と期間を文書でご提案します。"],
] as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const { topic } = await searchParams;
  const key = Array.isArray(topic) ? topic[0] : topic;
  const defaultSubject = (key && TOPIC_SUBJECTS[key]) || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "ご相談窓口", item: `${SITE_URL}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main id="main" className="py-14 lg:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="kicker">Contact</p>
              <h1 className="text-[2rem] font-bold leading-[1.4] text-ink sm:text-[2.5rem]">ご相談窓口</h1>
              <p className="lead">
                AI活用の相談・研修、業務の自動化、AI社員くんの導入など、AIを業務に取り入れるご相談を受け付けています。何を任せるか決まっていない段階でも大丈夫です。
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-[16px] font-bold text-ink">ご相談のあとの流れ</h2>
              <ol className="mt-4 space-y-4">
                {NEXT_STEPS.map(([t, b], i) => (
                  <li key={t} className="grid grid-cols-[1.75rem_1fr] gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-mono text-[12px] font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{t}</p>
                      <p className="text-[14px] leading-[1.8] text-muted-ink">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="space-y-2 text-[14px] leading-[1.8] text-ink-soft">
              <li>・このページからのご相談は、株式会社Human Beingsが窓口となります。</li>
              <li>・秘密保持契約（NDA）の締結にも対応します。</li>
              <li>・営業目的のご連絡にはご返信できない場合があります。</li>
            </ul>
          </div>

          <div className="card p-6 sm:p-8">
            <ContactForm defaultSubject={defaultSubject} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

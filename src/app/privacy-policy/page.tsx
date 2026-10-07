import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { COMPANY, CONTACT_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  alternates: { canonical: "/privacy-policy" },
};

// 実際の取扱い（問い合わせフォームのみで個人情報を取得し、計測タグ・広告タグは使っていない）に合わせた内容。
// 取扱いを変える（計測の導入、取得項目の追加、委託先の変更など）ときは、先にこの本文を更新する。
const ENACTED = "2026年10月7日";

type Section = { title: string; body?: string[]; items?: string[] };

const SECTIONS: Section[] = [
  {
    title: "取得する情報",
    body: ["当社は、本ウェブサイトのお問い合わせフォームを通じて、次の情報を取得します。"],
    items: ["お名前（会社名・部署名をご記入いただいた場合はそれを含みます）", "メールアドレス", "件名", "ご相談内容としてご記入いただいた事項"],
  },
  {
    title: "利用目的",
    body: ["取得した個人情報は、次の目的の範囲で利用します。"],
    items: [
      "お問い合わせ・ご相談への回答と、そのためのご連絡",
      "ご相談いただいたサービスの提案、お見積もり、契約の締結と履行に関するご連絡",
      "上記に付随する事務",
    ],
  },
  {
    title: "第三者への提供",
    body: [
      "当社は、法令に基づく場合を除き、ご本人の同意を得ずに個人情報を第三者に提供しません。",
      "ただし、利用目的の達成に必要な範囲で、個人情報の取扱いを外部に委託することがあります。この場合、委託先を適切に選び、必要かつ適切な監督を行います。",
    ],
  },
  {
    title: "取扱いの委託",
    body: ["当社は、次の業務について個人情報の取扱いを委託しています。"],
    items: [
      "お問い合わせ内容を担当者へ届けるメール送信サービス（Resend, Inc.／米国）",
      "本ウェブサイトの配信（Vercel Inc.／米国）",
      "企業専用AIエージェント「AI社員くん」に関するご相談への対応のため、当社が業務を委託する協業パートナー",
    ],
  },
  {
    title: "外国にある事業者の利用",
    body: [
      "上記のメール送信サービスおよびウェブサイトの配信サービスは、米国の事業者が提供するものです。米国には、日本の個人情報保護法と同等の包括的な個人情報保護の法律は連邦レベルでは定められていません。当社は、各事業者の利用規約・プライバシーに関する方針を確認したうえで利用しています。",
    ],
  },
  {
    title: "安全管理のための措置",
    body: [
      "当社は、個人情報の漏えい、滅失または毀損を防ぐため、アクセスできる者の限定、認証情報の適切な管理、通信の暗号化など、必要かつ適切な措置を講じます。お問い合わせの内容は、回答と契約に関するご連絡に必要な期間保管し、不要になった情報は削除します。",
    ],
  },
  {
    title: "アクセス情報とCookie",
    body: [
      "本ウェブサイトは、アクセス解析ツールや広告配信のためのCookieを使用していません。ウェブサイトの配信のために、配信事業者のサーバーにアクセスの記録（IPアドレス、閲覧日時、ブラウザの種類など）が一時的に記録されることがあります。",
      "今後アクセス解析などを導入する場合は、導入前に本ポリシーを改定してお知らせします。",
    ],
  },
  {
    title: "開示・訂正・利用停止などのご請求",
    body: [
      "ご本人から、保有個人データの利用目的の通知、開示、訂正・追加・削除、利用の停止・消去、第三者提供の停止、第三者提供記録の開示のご請求があった場合は、ご本人であることを確認したうえで、法令に従い遅滞なく対応します。ご請求は下記の窓口までご連絡ください。",
    ],
  },
  {
    title: "本ポリシーの変更",
    body: ["法令の改正や取扱いの変更に応じて、本ポリシーを変更することがあります。変更後の内容は、本ウェブサイトに掲載した時点から適用します。"],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="py-14 lg:py-20">
        <article className="wrap max-w-3xl">
          <header className="space-y-4 border-b border-line pb-8">
            <p className="kicker">Privacy Policy</p>
            <h1 className="text-[2rem] font-bold leading-[1.4] text-ink sm:text-[2.5rem]">プライバシーポリシー</h1>
            <p className="text-[15px] leading-[1.9] text-muted-ink">
              {COMPANY.name}（以下「当社」）は、本ウェブサイトでお預かりする個人情報を、個人情報の保護に関する法律その他の法令を守り、以下のとおり取り扱います。
            </p>
          </header>

          <ol className="divide-y divide-line">
            {SECTIONS.map((section, i) => (
              <li key={section.title} className="py-8">
                <h2 className="text-[18px] font-bold text-ink">
                  {i + 1}. {section.title}
                </h2>
                {section.body?.map((p) => (
                  <p key={p} className="mt-3 text-[15px] leading-[1.95] text-ink-soft">
                    {p}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-3 space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[15px] leading-[1.85] text-ink-soft">
                        <span aria-hidden className="mt-[0.8rem] h-px w-3 shrink-0 bg-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-8">
              <h2 className="text-[18px] font-bold text-ink">{SECTIONS.length + 1}. お問い合わせ窓口</h2>
              <p className="mt-3 text-[15px] leading-[1.95] text-ink-soft">
                個人情報の取扱いに関するご質問・ご請求は、
                <Link href={CONTACT_HREF} className="text-ai underline underline-offset-4">
                  ご相談窓口
                </Link>
                のフォームからご連絡ください。
              </p>
              <dl className="card mt-5 grid gap-2 p-5 text-[15px] leading-[1.8] sm:grid-cols-[7rem_1fr]">
                <dt className="font-semibold text-ink">事業者名</dt>
                <dd className="text-ink-soft">{COMPANY.name}</dd>
                <dt className="font-semibold text-ink">代表者</dt>
                <dd className="text-ink-soft">{COMPANY.representative}</dd>
                <dt className="font-semibold text-ink">所在地</dt>
                <dd className="text-ink-soft">ご請求に応じて遅滞なくお知らせします</dd>
              </dl>
            </li>
          </ol>

          <p className="border-t border-line pt-6 text-[13px] text-muted-ink">制定：{ENACTED}</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

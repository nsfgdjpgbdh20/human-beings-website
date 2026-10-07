import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { FlowDiagram } from "@/components/flow-diagram";
import { ChatSample } from "@/components/chat-sample";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { COMPANY, CONTACT_HREF, EXTERNAL_LINKS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const PROBLEMS = [
  {
    title: "試したけれど、現場で使われない",
    body: "AIチャットを契約しても、使う人と使い方が人によってばらばら。業務の手順に組み込まれず、試しただけで止まってしまう。",
  },
  {
    title: "必要な情報が、あちこちに分かれている",
    body: "広告、アクセス解析、表計算、チャット。数字や資料が別々の場所にあり、AIに渡す前の準備に時間がかかる。",
  },
  {
    title: "集計と報告が、毎回手作業",
    body: "週次・月次のレポート、数字の転記、定型の文章づくり。判断の前の作業に、担当者の時間が取られている。",
  },
] as const;

const SERVICES = [
  {
    no: "01",
    title: "業務整理・設計",
    body: "いまの手順とツールを一緒に洗い出し、AIに任せる作業と、人が判断・確認する点を分けます。",
    outputs: ["業務の洗い出しと優先順位", "AIに任せる範囲と人の確認点", "最初に検証する業務と受入の条件"],
  },
  {
    no: "02",
    title: "開発・連携",
    body: "合意した範囲で、AIエージェントやワークフローを構築し、既存のチャットや業務ツールにつなぎます。",
    outputs: ["AIエージェント・自動化の構築", "既存ツールとの接続と権限設計", "通知と承認の流れ"],
  },
  {
    no: "03",
    title: "導入・運用改善",
    body: "現場で使い続けられるよう、説明会や研修を行い、稼働の確認と改善を続けます。",
    outputs: ["経営陣向け説明会・現場研修", "手順書と操作説明", "稼働確認・不具合対応・月次の振り返り"],
  },
] as const;

type MenuItem = {
  name: string;
  scope: string;
  done: string;
  price: string;
  featured?: boolean;
};

const MENU: MenuItem[] = [
  {
    name: "AI活用の相談・研修",
    scope: "1部門・1テーマから。現状を整理し、使いどころと注意点をお伝えします。",
    done: "活用候補と優先順位、次に検証する範囲を文書にしてお渡しします。",
    price: "範囲を決めて個別にお見積もり",
  },
  {
    name: "小さな業務自動化",
    scope: "対象を一つの業務に絞り、接続先と人が承認する操作を事前に決めて構築します。",
    done: "合意した入力例で動くこと、失敗したときに人へ戻せることを確認して完了です。",
    price: "範囲を決めて個別にお見積もり",
  },
  {
    name: "AI社員くん",
    scope: "チャットで報告し、依頼を受けて動く、会社専用のAIエージェントを設計・構築します。",
    done: "受入項目・権限・通知・手順書・操作説明まで揃えて引き渡します。",
    price: "初期構築 100万円〜／運用 月5万円〜（税別）",
    featured: true,
  },
  {
    name: "運用・改善",
    scope: "稼働の確認、不具合の切り分けと対応、合意した範囲の保守を行います。",
    done: "毎月のレポートで、処理した仕事と気づいた点を共有します。",
    price: "新しい機能・接続先の追加は別にお見積もり",
  },
];

const PROCESS = [
  {
    no: "01",
    title: "課題の確認",
    body: "オンラインでお話を伺います。対象の業務、頻度、使っているツール、誤動作したときの影響を確認します。",
    ours: "論点の整理と、AIに向く・向かないの見立て",
    yours: "いまの作業の流れを教えていただく",
  },
  {
    no: "02",
    title: "範囲と見積もり",
    body: "任せる作業と人が確認する点、接続先、受入の条件を決め、費用と期間をご提案します。",
    ours: "範囲・受入条件・お見積もりの文書",
    yours: "社内の確認者と、必要な権限の確認",
  },
  {
    no: "03",
    title: "実装・受入",
    body: "合意した範囲で構築し、実際の業務に近い条件で動作を確かめます。",
    ours: "構築・接続・検証と、受入項目の確認",
    yours: "試しの結果の確認と、受入の判断",
  },
  {
    no: "04",
    title: "導入・運用",
    body: "説明会と研修を行い、現場で使い始めます。稼働を確認し、改善点を振り返ります。",
    ours: "研修・手順書・稼働確認・月次の振り返り",
    yours: "日々の依頼と、上がってきた結果の確認",
  },
] as const;

const COMPANY_ROWS = [
  ["会社名", COMPANY.name],
  ["代表者", COMPANY.representative],
  ["事業内容", COMPANY.business],
  ["ご相談・契約", "このサイトからのご相談は、当社が窓口となり、当社が契約の当事者としてお引き受けします。"],
  ["AI社員くんについて", "AI社員くんは、当社代表の中山と協業パートナーが共同で運営するサービスです。構築と運用は中山が担当します。"],
  ["行っていないこと", "常駐、24時間対応、成果や削減率の保証、無制限の修正"],
] as const;

const FAQ = [
  [
    "まだ何をAIに任せたらよいか決まっていません。相談できますか？",
    "できます。いまの業務や困っていることを伺い、AIに任せられそうな作業と、人が判断したほうがよい作業を一緒に分けるところから始めます。",
  ],
  [
    "社内にAIやITに詳しい人がいなくても大丈夫ですか？",
    "大丈夫です。導入のときに、経営陣向けの説明と、現場の方向けの使い方の研修を行います。ただし、ツールの権限発行や結果の確認など、御社にお願いする作業はあります。事前にお伝えします。",
  ],
  [
    "社内のデータやアカウントはどう扱いますか？",
    "必要な範囲に絞った権限で接続します。利用する外部のAI、アクセスする情報の範囲、秘密保持の条件を、構築の前に確認します。秘密保持契約（NDA）の締結にも対応します。",
  ],
  [
    "効果や削減時間は保証されますか？",
    "特定の削減率や売上の増加はお約束していません。受入の条件と、運用中に確認する項目を事前に決め、実際の動きを見ながら改善します。",
  ],
  [
    "常駐や24時間の対応はできますか？",
    "常駐と24時間対応は行っていません。サポートの曜日・時間帯や、最初の対応までの目安は、契約のときに決めます。",
  ],
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.nameEn,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: "AIコンサルティング・エンジニアリング。業務整理からAIの設計・開発、導入・運用改善までを支援します。",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main id="main">
        {/* ヒーロー */}
        <section className="border-b border-line">
          <div className="wrap grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
            <div className="space-y-7">
              <p className="kicker">AI Consulting &amp; Engineering</p>
              <h1 className="text-[2.25rem] font-bold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[3rem] xl:text-[3.5rem]">
                AIを、
                <br />
                <span className="inline-block">現場で働く</span>
                <span className="inline-block">仕組みに。</span>
              </h1>
              <p className="max-w-xl text-[16px] leading-[1.95] text-muted-ink sm:text-[17px]">
                業務の整理から、AIの設計・開発、現場への導入と運用改善まで。株式会社Human Beingsは、会社ごとの仕事に合わせたAIエージェントをつくり、使い続けられる状態まで支援します。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={CONTACT_HREF} className="btn-primary">
                  相談する
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link href="/ai-shain" className="btn-secondary">
                  主力サービス「AI社員くん」を見る
                </Link>
              </div>
              <ul className="flex flex-col gap-2 text-[14px] text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6">
                <li className="flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ai" />
                  一つの業務から相談できます
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-human" />
                  送信・変更は人が確認する設計
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink" />
                  秘密保持契約に対応
                </li>
              </ul>
            </div>
            <FlowDiagram />
          </div>
        </section>

        {/* 課題 */}
        <section aria-labelledby="problems-title" className="py-20 lg:py-28">
          <div className="wrap space-y-12">
            <div className="max-w-3xl space-y-4">
              <p className="kicker">Problems</p>
              <h2 id="problems-title" className="section-title">
                AIの導入は、
                <br />
                使い始めた後で止まりやすい。
              </h2>
              <p className="lead">
                ツールを入れることより、毎日の仕事の中でAIが動き、人が安心して任せられる状態をつくることのほうが難しい。私たちはそこを支援します。
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
              {PROBLEMS.map((p, i) => (
                <li key={p.title} className="space-y-3 bg-surface p-7">
                  <p className="font-mono text-[12px] font-semibold text-human">課題 {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[18px] font-bold leading-[1.6] text-ink">{p.title}</h3>
                  <p className="text-[15px] leading-[1.9] text-muted-ink">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 支援内容 */}
        <section id="services" aria-labelledby="services-title" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="wrap space-y-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="space-y-4">
                <p className="kicker">Services</p>
                <h2 id="services-title" className="section-title">
                  考えるところから、
                  <br />
                  動かし続けるところまで。
                </h2>
              </div>
              <p className="lead">
                コンサルティングだけ、開発だけで終わらせず、業務の現場に入り込んで仕組みをつくる進め方です。担当者と一緒に手順を確かめながら、設計・実装・定着までを一続きで支援します。
              </p>
            </div>

            <ol className="grid gap-6 md:grid-cols-3">
              {SERVICES.map((s) => (
                <li key={s.no} className="card flex flex-col bg-paper p-7">
                  <p className="font-mono text-[13px] font-semibold text-ai">{s.no}</p>
                  <h3 className="mt-2 text-[20px] font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-muted-ink">{s.body}</p>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-[12px] font-semibold tracking-[0.06em] text-muted-ink">お渡しするもの</p>
                    <ul className="mt-2 space-y-1.5">
                      {s.outputs.map((o) => (
                        <li key={o} className="flex gap-2 text-[14px] leading-[1.7] text-ink-soft">
                          <span aria-hidden className="mt-[0.75rem] h-px w-3 shrink-0 bg-ink" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="space-y-5">
              <h3 className="text-[18px] font-bold text-ink">ご依頼の入口</h3>
              <div className="overflow-hidden rounded-lg border border-line">
                <table className="w-full border-collapse text-left text-[14px] leading-[1.8]">
                  <caption className="sr-only">ご依頼の種類ごとの範囲・完了の条件・費用</caption>
                  <thead className="hidden bg-paper text-[12px] font-semibold tracking-[0.06em] text-muted-ink md:table-header-group">
                    <tr>
                      <th scope="col" className="w-[19%] px-5 py-3">メニュー</th>
                      <th scope="col" className="px-5 py-3">範囲</th>
                      <th scope="col" className="px-5 py-3">完了の条件</th>
                      <th scope="col" className="w-[21%] px-5 py-3">費用</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {MENU.map((m) => (
                      <tr key={m.name} className={m.featured ? "bg-ai-soft/60" : "bg-surface"}>
                        <th scope="row" className="block px-5 pt-5 align-top font-bold text-ink md:table-cell md:py-5">
                          {m.name}
                          {m.featured && <span className="tag-ai ml-2 align-middle">主力</span>}
                        </th>
                        <td className="block px-5 pt-2 align-top text-ink-soft md:table-cell md:py-5">
                          <span className="mr-2 text-[12px] font-semibold text-muted-ink md:hidden">範囲</span>
                          {m.scope}
                        </td>
                        <td className="block px-5 pt-2 align-top text-ink-soft md:table-cell md:py-5">
                          <span className="mr-2 text-[12px] font-semibold text-muted-ink md:hidden">完了</span>
                          {m.done}
                        </td>
                        <td className="block px-5 pb-5 pt-2 align-top font-medium text-ink md:table-cell md:py-5">
                          <span className="mr-2 text-[12px] font-semibold text-muted-ink md:hidden">費用</span>
                          {m.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="note">
                費用は、対象業務・接続するツール・承認の流れを確認してからお見積もりします。AIの利用料は、お客様に直接ご契約いただく形を基本とします。n8nを使った業務自動化は
                <Link href="/n8n" className="text-ai underline underline-offset-4">
                  n8n導入・構築支援
                </Link>
                のページでも紹介しています。
              </p>
            </div>
          </div>
        </section>

        {/* AI社員くん */}
        <section id="ai-shain" aria-labelledby="ai-shain-title" className="bg-ink py-20 text-white lg:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#9aa6b1]">
                <span aria-hidden className="inline-block h-[2px] w-5 bg-[#38c4f0]" />
                Main Service
              </p>
              <h2 id="ai-shain-title" className="text-[1.75rem] font-bold leading-[1.45] sm:text-[2.25rem]">
                主力サービス
                <br />
                <span className="text-[#7fd8f5]">AI社員くん</span>
              </h2>
              <p className="text-[16px] leading-[1.95] text-[#c9d2da]">
                会社ごとに設計・構築し、いつものチャットに配属するAIエージェントです。名前と担当業務、確認する人を決め、決まった時間に数字を集めて報告し、頼まれた作業の下書きをつくります。
              </p>
              <ul className="space-y-4 border-t border-white/10 pt-6">
                {[
                  ["自分から動く", "聞かれるのを待たず、決まった時間や出来事に合わせて作業を進めます。"],
                  ["いつものツールの中で", "Slack・Microsoft Teams・Chatworkなど、お使いのチャットで報告と依頼を受けます。"],
                  ["人の確認を前提に", "送信・設定変更・支払いなどは、担当者の確認を経てから行う設計にします。"],
                ].map(([t, b]) => (
                  <li key={t} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-[15px] leading-[1.85] text-[#c9d2da]">{b}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/ai-shain" className="btn-on-dark">
                  AI社員くんの詳細
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  href={`${CONTACT_HREF}?topic=ai-shain`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white"
                >
                  AI社員くんについて相談する
                </Link>
              </div>
            </div>
            <ChatSample tone="dark" />
          </div>
        </section>

        {/* 進め方 */}
        <section id="process" aria-labelledby="process-title" className="py-20 lg:py-28">
          <div className="wrap space-y-12">
            <div className="max-w-3xl space-y-4">
              <p className="kicker">Process</p>
              <h2 id="process-title" className="section-title">進め方</h2>
              <p className="lead">
                各段階で、何をお渡しし、御社に何をお願いするかを先に決めます。範囲と受入の条件が決まってから構築に入ります。
              </p>
            </div>
            <ol className="grid gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <li key={p.no} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[13px] font-semibold text-white">
                      {p.no}
                    </span>
                    {i < PROCESS.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-line-strong lg:block" />}
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.85] text-muted-ink">{p.body}</p>
                  <dl className="mt-4 space-y-3 border-t border-line pt-4 text-[14px] leading-[1.7]">
                    <div>
                      <dt className="tag-ai">当社</dt>
                      <dd className="mt-1 text-ink-soft">{p.ours}</dd>
                    </div>
                    <div>
                      <dt className="tag-human">御社にお願いすること</dt>
                      <dd className="mt-1 text-ink-soft">{p.yours}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 会社と提供体制 */}
        <section id="company" aria-labelledby="company-title" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="kicker">Company</p>
              <h2 id="company-title" className="section-title">会社と提供体制</h2>
              <p className="lead">
                品質を保つため、同時にお引き受けする構築案件の数を限っています。お引き受けが難しい場合や、既製のツールのほうが合う場合は、その旨を正直にお伝えします。
              </p>
            </div>
            <dl className="divide-y divide-line border-y border-line text-[15px] leading-[1.85]">
              {COMPANY_ROWS.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-ink">{k}</dt>
                  <dd className="text-ink-soft">{v}</dd>
                </div>
              ))}
              <div className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <dt className="font-semibold text-ink">公開している制作物</dt>
                <dd className="text-ink-soft">
                  ワークフロー自動化ツールn8nの公式テンプレート集に、代表の中山が作成したワークフローを公開しています。
                  <a
                    href={EXTERNAL_LINKS.n8nCreator}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-0.5 text-ai underline underline-offset-4"
                  >
                    n8n.io で見る
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                    <span className="sr-only">（新しいタブで開きます）</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-title" className="py-20 lg:py-28">
          <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="kicker">FAQ</p>
              <h2 id="faq-title" className="section-title">よくある質問</h2>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}

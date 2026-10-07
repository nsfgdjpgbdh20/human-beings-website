import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ChatSample } from "@/components/chat-sample";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { CONTACT_HREF, SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "AI社員くんは、会社ごとに設計・構築し、いつものチャットに配属するAIエージェントです。集計・調査・レポートの下書きなどを任せ、判断と確認は人が行います。株式会社Human Beingsが設計から運用まで支援します。";

export const metadata: Metadata = {
  title: "AI社員くん｜会社専用のAIエージェント",
  description: DESCRIPTION,
  alternates: { canonical: "/ai-shain" },
  openGraph: {
    title: "AI社員くん｜会社専用のAIエージェント | 株式会社Human Beings",
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-shain`,
    type: "website",
  },
};

const CONTACT_AI = `${CONTACT_HREF}?topic=ai-shain`;

// 任せられる仕事の例。ai：AI社員がやること / human：人に残すこと
const TASKS = [
  {
    name: "週次・月次のレポート",
    ai: "広告やアクセス解析の数字を集めてレポートの下書きをつくり、チャットで知らせる",
    human: "内容の確認と、社内・取引先への共有",
  },
  {
    name: "数字の見張り",
    ai: "毎日の数字を確認し、いつもと違う動きがあれば報告。考えられる理由と対応案の下書きを添える",
    human: "配信や予算などを変えるかどうかの判断",
  },
  {
    name: "競合・市場の調査",
    ai: "決めたサイトや情報源の更新を確認し、変化を要約して共有",
    human: "どの情報を次の施策に使うか",
  },
  {
    name: "メールや文章の下書き",
    ai: "問い合わせへの返信や社内向けの文章を、社内の言い回しに合わせて下書き",
    human: "内容の確認と送信",
  },
  {
    name: "入力・集計",
    ai: "スプレッドシートへの転記や集計を、いつものツールから直接処理",
    human: "結果の確認",
  },
] as const;

// AI社員の1日（例）。human がある行は人が確認・判断する場面
const DAY = [
  { time: "7:30", title: "数字を集める", text: "前日の広告とアクセス解析の数字を取り込み、スプレッドシートに記入。" },
  { time: "8:00", title: "朝の報告", text: "前日の要点をチャットに投稿。" },
  { time: "11:20", title: "変化に気づく", text: "広告の1件あたりの費用が急に上がったことを知らせ、確認を依頼。", human: "担当者が配信を止めるか判断" },
  { time: "14:00", title: "競合を調べる", text: "競合サイトの新しいキャンペーンを見つけ、内容をまとめて共有。" },
  { time: "16:30", title: "返信を下書き", text: "問い合わせへの返信を、社内の言い回しで下書き。", human: "担当者が確認して送信" },
  { time: "月曜 8:00", title: "週次レポート", text: "先週分のレポートの下書きを置き、改善案を添える。", human: "担当者が案を選ぶ" },
] as const;

const TOOLS = [
  { group: "チャット", items: ["Slack", "Microsoft Teams", "Chatwork", "LINE WORKS", "Google Chat"] },
  { group: "業務・マーケティング", items: ["GA4", "Googleタグマネージャー", "Microsoft Clarity", "Google広告", "Meta広告", "スプレッドシート"] },
] as const;

const DELIVERABLES = [
  ["業務の整理シート", "AI社員に任せる仕事、人が確認する点、扱うデータの範囲をまとめたもの"],
  ["AI社員の本体と接続設定", "合意した担当業務で動くAI社員と、チャット・業務ツールとの接続"],
  ["権限と通知の設計", "必要な範囲に絞ったアクセス権、報告のタイミング、確認を求める操作の一覧"],
  ["受入の記録", "事前に決めた受入項目を、実際の業務に近い条件で確認した結果"],
  ["手順書と操作説明", "頼み方、確認のしかた、止めたいときの手順"],
  ["説明会・研修", "経営陣向けの説明会と、現場の方向けの使い方の研修"],
] as const;

const FAQ = [
  [
    "どんな会社に向いていますか？",
    "同じ作業を毎週・毎月くり返していて、その手順がある程度決まっている会社です。作業が月に数回しかない場合や、AIチャットで十分こなせている場合は、既製のツールのほうが早いこともあります。その場合は正直にお伝えします。",
  ],
  [
    "どのチャットツールで使えますか？",
    "Slack・Microsoft Teams・Chatwork・LINE WORKS・Google Chatなど、お使いのツールと必要な権限を確認して、対応できるかをご案内します。",
  ],
  [
    "AI社員に名前をつけられますか？",
    "つけられます。社内で呼びやすい名前をつけてください。名前と担当が決まっていると、仕事を割り振りやすくなります。",
  ],
  [
    "社内のアカウントやデータはどう扱いますか？",
    "必要最小限の権限で接続します。利用する外部のAI、アクセスする情報の範囲、秘密保持の条件を導入前に確認します。",
  ],
  [
    "月額料金には何が含まれますか？",
    "稼働の確認、不具合の対応、使い方の相談、月次レポート、基本1台分の端末・環境の維持費です。AIの利用料は、お客様に直接ご契約・お支払いいただきます。",
  ],
  [
    "任せたい仕事が増えたり、ツールの仕様が変わったりしたら？",
    "すでにある機能の不具合の修正と、新しい仕事・機能・連携の追加は分けて扱い、追加や改善は別にお見積もりします。連携先の仕様変更にどこまで対応するかは、契約前にお伝えします。",
  ],
  [
    "最低契約期間や解約の条件は？",
    "契約前に個別にご案内します。サポートする曜日・時間帯や、最初の対応までの目安も、契約のときに決めます。",
  ],
] as const;

export default function AiShainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI社員くん",
    serviceType: "AIエージェントの設計・構築・運用支援",
    provider: { "@type": "Organization", name: "株式会社Human Beings", url: SITE_URL },
    areaServed: "JP",
    description: DESCRIPTION,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main id="main">
        {/* ヒーロー */}
        <section className="border-b border-line">
          <div className="wrap grid gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
            <div className="space-y-7">
              <nav aria-label="パンくずリスト" className="text-[13px] text-muted-ink">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="underline-offset-4 hover:underline">
                      トップ
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li aria-current="page">AI社員くん</li>
                </ol>
              </nav>
              <p className="kicker">Main Service</p>
              <h1 className="text-[2.25rem] font-bold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[3rem]">
                いつものチャットに、
                <br />
                会社専用のAI社員を。
              </h1>
              <p className="max-w-xl text-[16px] leading-[1.95] text-muted-ink sm:text-[17px]">
                AI社員くんは、会社ごとに設計・構築するAIエージェントです。名前と担当業務、確認する人を決めてチャットに配属し、集計・調査・レポートの下書きなどの定型業務を任せます。判断と確認は、人が行います。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={CONTACT_AI} className="btn-primary">
                  AI社員くんについて相談する
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <a href="#pricing" className="btn-secondary">
                  料金の考え方を見る
                </a>
              </div>
            </div>
            <ChatSample />
          </div>
        </section>

        {/* AI社員とは */}
        <section aria-labelledby="about-title" className="py-20 lg:py-24">
          <div className="wrap space-y-12">
            <div className="max-w-3xl space-y-4">
              <p className="kicker">What it is</p>
              <h2 id="about-title" className="section-title">名前と担当と、確認する人がいるAI。</h2>
              <p className="lead">
                AIチャットは、人が話しかけて初めて動きます。AI社員は、担当業務と動くタイミングを決めておくことで、頼まれる前に決まった仕事を進め、結果をチャットで報告します。
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {[
                ["同僚に頼むように", "チャットで「〇〇さん、先週の数字まとめて」と頼めます。AIの使い方を覚える必要はありません。"],
                ["担当が決まっているから、自分から動く", "決まった時間に数字を集め、いつもと違う動きに気づいたら報告します。"],
                ["確認する人がいるから、任せられる", "送信・設定変更・支払いは担当者の確認を経てから。どこまで任せるかは会社ごとに決めます。"],
              ].map(([t, b]) => (
                <li key={t} className="card p-7">
                  <h3 className="text-[18px] font-bold leading-[1.6] text-ink">{t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-muted-ink">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 任せられる仕事 */}
        <section aria-labelledby="tasks-title" className="border-t border-line bg-surface py-20 lg:py-24">
          <div className="wrap space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="kicker">Tasks</p>
              <h2 id="tasks-title" className="section-title">
                下書きと集計はAI社員が。
                <br />
                判断と確認は人が。
              </h2>
              <p className="lead">はじめはマーケティングまわりの集計・調査・レポート作成から検討するのがおすすめです。</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-line">
              <table className="w-full border-collapse text-left text-[14px] leading-[1.8]">
                <caption className="sr-only">任せられる仕事の例と、AI社員と人の分担</caption>
                <thead className="hidden bg-paper text-[12px] font-semibold tracking-[0.06em] md:table-header-group">
                  <tr>
                    <th scope="col" className="w-[22%] px-5 py-3 text-muted-ink">仕事</th>
                    <th scope="col" className="px-5 py-3 text-ai">AI社員がやること</th>
                    <th scope="col" className="w-[30%] px-5 py-3 text-human">人に残すこと</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-surface">
                  {TASKS.map((t) => (
                    <tr key={t.name}>
                      <th scope="row" className="block px-5 pt-5 align-top font-bold text-ink md:table-cell md:py-5">
                        {t.name}
                      </th>
                      <td className="block px-5 pt-2 align-top text-ink-soft md:table-cell md:py-5">
                        <span className="tag-ai mr-2 md:hidden">AI社員</span>
                        {t.ai}
                      </td>
                      <td className="block px-5 pb-5 pt-2 align-top text-ink-soft md:table-cell md:py-5">
                        <span className="tag-human mr-2 md:hidden">人</span>
                        {t.human}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">掲載は業務の例です。実現の方法と範囲は、業務を確認してからご提案します。</p>
          </div>
        </section>

        {/* 1日の例 */}
        <section aria-labelledby="day-title" className="py-20 lg:py-24">
          <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="kicker">A day</p>
              <h2 id="day-title" className="section-title">AI社員の1日（例）</h2>
              <p className="lead">朝の数字集めから、気づいたことの報告まで。人は、判断と確認に集中できます。</p>
              <p className="note">架空の例です。動く時間と担当業務は会社ごとに決めます。</p>
            </div>
            <ol className="border-l border-line-strong">
              {DAY.map((d) => (
                <li key={d.time} className="relative pb-8 pl-7 last:pb-0">
                  <span aria-hidden className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-ai" />
                  <p className="font-mono text-[13px] font-semibold text-ai">{d.time}</p>
                  <h3 className="mt-0.5 text-[16px] font-bold text-ink">{d.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.85] text-muted-ink">{d.text}</p>
                  {"human" in d && (
                    <p className="mt-2">
                      <span className="tag-human">人の確認：{d.human}</span>
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 接続と納品物 */}
        <section aria-labelledby="delivery-title" className="border-t border-line bg-surface py-20 lg:py-24">
          <div className="wrap grid gap-14 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="kicker">Integrations</p>
              <h2 className="section-title">つなげられるツール</h2>
              <p className="lead">
                お使いのツールの仕様・契約・権限を確認して、対応できるかをご案内します。下記は検討の多い例です。
              </p>
              <div className="space-y-5">
                {TOOLS.map((g) => (
                  <div key={g.group}>
                    <p className="text-[13px] font-semibold text-muted-ink">{g.group}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li key={item} className="rounded-md border border-line bg-paper px-3 py-1.5 text-[14px] text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="note">記載のツール名は各社の商標です。各社との提携や認定を示すものではありません。</p>
            </div>
            <div className="space-y-6">
              <p className="kicker">Deliverables</p>
              <h2 id="delivery-title" className="section-title">お渡しするもの</h2>
              <dl className="divide-y divide-line border-y border-line">
                {DELIVERABLES.map(([k, v]) => (
                  <div key={k} className="py-4">
                    <dt className="text-[15px] font-bold text-ink">{k}</dt>
                    <dd className="mt-1 text-[14px] leading-[1.85] text-muted-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 料金 */}
        <section id="pricing" aria-labelledby="pricing-title" className="py-20 lg:py-24">
          <div className="wrap space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="kicker">Pricing</p>
              <h2 id="pricing-title" className="section-title">料金の考え方</h2>
              <p className="lead">
                会社ごとにつくるため、下記は目安です。対象の業務、つなげるツール、承認の流れを確認し、範囲と費用を事前にご案内します。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card p-7">
                <p className="text-[13px] font-semibold text-muted-ink">最初に一度</p>
                <h3 className="mt-1 text-[18px] font-bold text-ink">初期構築</h3>
                <p className="mt-4 text-ink">
                  <span className="text-[2.25rem] font-bold tracking-[-0.02em]">100</span>
                  <span className="ml-1 text-[16px] font-semibold">万円〜</span>
                  <span className="ml-2 text-[13px] text-muted-ink">税別</span>
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[14px] leading-[1.7] text-ink-soft">
                  {["業務の洗い出し・設計", "AI社員の構築・ツールとの接続", "実際の業務に近い条件での検証", "経営陣向け説明会・現場向け研修"].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-7">
                <p className="text-[13px] font-semibold text-muted-ink">配属後、毎月</p>
                <h3 className="mt-1 text-[18px] font-bold text-ink">運用・保守</h3>
                <p className="mt-4 text-ink">
                  <span className="text-[2.25rem] font-bold tracking-[-0.02em]">5</span>
                  <span className="ml-1 text-[16px] font-semibold">万円〜 / 月</span>
                  <span className="ml-2 text-[13px] text-muted-ink">税別</span>
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[14px] leading-[1.7] text-ink-soft">
                  {["稼働の確認・不具合の対応", "使い方の相談", "月次レポート", "基本1台分の端末・環境の維持費"].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="space-y-1.5 text-[13px] leading-[1.8] text-muted-ink">
              <li>・AIの利用料は、お客様に直接ご契約・お支払いいただきます。</li>
              <li>・対象の業務やつなげるツールが増える場合、承認の流れが複雑な場合は、初期構築の費用が上がります。</li>
              <li>・新しい仕事・機能・連携の追加は、別にお見積もりします。</li>
              <li>・研修のみ、小さな業務自動化のみのご依頼は、範囲を決めて個別にお見積もりします。</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-title" className="border-t border-line bg-surface py-20 lg:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="kicker">FAQ</p>
              <h2 id="faq-title" className="section-title">よくある質問</h2>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <CtaBand
          title="任せたい作業を、一つ教えてください。"
          body="いまの手順と使っているツールを伺い、AI社員に任せられる範囲と、人が確認すべき点を整理します。費用と期間は、範囲が決まってからご提案します。"
          href={CONTACT_AI}
        />
      </main>
      <SiteFooter />
    </>
  );
}

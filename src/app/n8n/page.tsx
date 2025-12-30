import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { NoteFeed } from "@/components/note-feed";
import { WorkflowCircuit } from "@/components/workflow-circuit";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle, ArrowRight, Zap, Shield, Database, Layout, ExternalLink, Sparkles, MessageSquare, Music, Image, FileText, Bot, Instagram, Twitter, Search, Table } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "n8nコンサル・導入/構築支援 | Human Beings",
  description: "n8nで業務自動化を最短で。要件定義〜設計・構築・運用まで支援。セルフホスト/Docker/各種SaaS連携にも対応。法人向け。",
  openGraph: {
    title: "n8nコンサル・導入/構築支援 | Human Beings",
    description: "n8nで業務自動化を最短で。要件定義〜設計・構築・運用まで支援。セルフホスト/Docker/各種SaaS連携にも対応。法人向け。",
    type: "website",
    url: "https://humanbeings.co.jp/n8n/", // Assuming domain, should be adjusted if different
  },
};

export default function N8nPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "n8n導入・構築コンサルティング",
    "provider": {
      "@type": "Organization",
      "name": "株式会社Human Beings",
      "url": "https://humanbeings.co.jp"
    },
    "description": "n8nを用いた業務自動化の要件定義から設計・構築・運用までを一貫して支援します。",
    "areaServed": "JP",
    "serviceType": "IT Consulting"
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,18,18,0.06),transparent_60%)]" />
        <div className="relative container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-6 max-w-4xl">
                 <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  n8n Verified Creator
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    n8n導入・構築<br/>コンサルティング
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-500 mt-4">
                        業務自動化を、最短距離で。
                    </span>
                </h1>
                 <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
                    世界中で急成長中のワークフロー自動化ツール「n8n」を活用し、
                    貴社の業務フローを劇的に効率化します。<br className="hidden sm:block" />
                    n8n認定クリエイターが要件定義から実装、内製化支援まで伴走します。
                </p>
                 <div className="flex flex-wrap gap-4 pt-4">
                     <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105">
                        無料相談・お問い合わせ
                        <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="relative section-spacing bg-gray-50/50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-12">
                 <div className="flex flex-col items-center gap-6 text-center">
                    <div className="eyebrow"><span>ISSUES</span></div>
                     <h2 className="text-3xl font-bold text-gray-900">こんな課題を解決します</h2>
                     <p className="max-w-3xl text-gray-600">部門を横断した複雑な業務フローも、n8nなら柔軟に自動化可能です。</p>
                 </div>
                 <div className="grid md:grid-cols-3 gap-8">
                     {[
                         {
                             title: "マーケティング・営業",
                             items: ["リード獲得後の自動メール配信", "CRM(Salesforce/HubSpot)連携", "SNS投稿・分析の自動化", "フォーム回答のSlack通知"]
                         },
                         {
                             title: "カスタマーサポート",
                             items: ["問い合わせの一次自動回答", "チケット管理ツールへの起票", "解約予兆のアラート通知", "FAQチャットボット連携"]
                         },
                         {
                             title: "情シス・バックオフィス",
                             items: ["アカウント発行・削除の自動化", "経費精算フローの自動化", "請求書発行・送付の自動化", "日報・週報の集計"]
                         }
                     ].map((area, idx) => (
                         <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                 <CheckCircle className="h-5 w-5 text-green-500" />
                                 {area.title}
                             </h3>
                             <ul className="space-y-3">
                                 {area.items.map((item, i) => (
                                     <li key={i} className="text-gray-600 text-sm pl-2 border-l-2 border-gray-100">{item}</li>
                                 ))}
                             </ul>
                         </div>
                     ))}
                 </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Scope of Support */}
      <section className="relative section-spacing">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
             <ScrollReveal className="flex flex-col gap-16">
                 <div className="text-center space-y-4">
                    <div className="eyebrow justify-center"><span>SERVICE</span></div>
                     <h2 className="text-3xl font-bold text-gray-900">支援範囲</h2>
                     <p className="text-gray-600">単なるツール導入ではなく、業務プロセスの再設計から運用定着までサポートします。</p>
                 </div>

                 <WorkflowCircuit className="hidden w-full md:block" variant="section" />

                 <div className="grid md:grid-cols-4 gap-6">
                     {[
                         { icon: Layout, title: "01. 要件定義", desc: "現状の業務フローを可視化し、自動化すべき箇所と人がやるべき箇所を切り分けます。" },
                         { icon: Database, title: "02. 設計", desc: "拡張性と保守性を考慮したn8nワークフロー設計を行います。エラーハンドリングも考慮します。" },
                         { icon: Zap, title: "03. 構築・実装", desc: "実際のワークフローを構築します。Docker/セルフホスト環境の構築支援も可能です。" },
                         { icon: Shield, title: "04. 運用・保守", desc: "稼働後の監視、エラー対応、仕様変更に伴う改修など、安定稼働をサポートします。" }
                     ].map((step, idx) => (
                         <div key={idx} className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-gray-200">
                             <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900">
                                 <step.icon className="h-6 w-6" />
                             </div>
                             <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                             <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                         </div>
                     ))}
                 </div>
             </ScrollReveal>
        </div>
      </section>

       {/* Achievements - Redesigned n8n Templates Section */}
       <section className="relative section-spacing n8n-section-bg" id="works">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
             <ScrollReveal className="flex flex-col gap-12">
                 {/* Section Header */}
                 <div className="text-center space-y-6">
                     <div className="eyebrow justify-center"><span>WORKS</span></div>
                     <h2 className="text-3xl font-bold text-gray-900">構築実績・テンプレート</h2>
                     <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                       n8n公式クリエーターとして認定されたワークフローテンプレート。<br className="hidden sm:block" />
                       Google Sheets、Slack、AIなど、最新技術を組み合わせた7つの実例を公開。
                     </p>
                     {/* n8n Verified Creator Badge */}
                     <div className="flex justify-center pt-2">
                       <div className="n8n-verified-badge">
                         <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                         </svg>
                         n8n Verified Creator
                       </div>
                     </div>
                 </div>

                 {/* Workflow Cards Grid */}
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                         {
                           title: "Instagramハッシュタグ最適化",
                           desc: "AIによるエンゲージメント分析でハッシュタグを自動最適化",
                           url: "https://n8n.io/workflows/11994-optimize-instagram-hashtags-with-gpt-4o-and-real-engagement-data-via-graph-api/",
                           techs: [
                             { name: "Google Sheets", icon: Table },
                             { name: "Instagram API", icon: Instagram },
                             { name: "GPT-4o", icon: Bot }
                           ]
                         },
                         {
                           title: "SEOトラフィック自動監視",
                           desc: "Search Consoleの急落をAIが検知しSlackへ即座にアラート",
                           url: "https://n8n.io/workflows/11401-auto-audit-seo-traffic-drops-with-ai-and-google-search-console-to-slack/",
                           techs: [
                             { name: "Search Console", icon: Search },
                             { name: "AI", icon: Sparkles },
                             { name: "Slack", icon: MessageSquare }
                           ]
                         },
                         {
                           title: "Podcast自動要約・投稿",
                           desc: "Whisperで文字起こし、GPT-4oで要約、Slackで承認後X投稿",
                           url: "https://n8n.io/workflows/9710-podcast-to-x-twitter-pipeline-with-openai-whisper-gpt-4o-and-slack-approval/",
                           techs: [
                             { name: "Whisper", icon: Music },
                             { name: "GPT-4o", icon: Bot },
                             { name: "X/Twitter", icon: Twitter }
                           ]
                         },
                         {
                           title: "Instagramカルーセル自動作成",
                           desc: "AIリサーチからデザイン生成、承認後に自動投稿まで一貫対応",
                           url: "https://n8n.io/workflows/11694-create-and-publish-instagram-carousels-with-ai-research-nano-banana-pro-and-slack/",
                           techs: [
                             { name: "AI Research", icon: Sparkles },
                             { name: "Creatomate", icon: Image },
                             { name: "Instagram", icon: Instagram }
                           ]
                         },
                         {
                           title: "アイデア具現化AIアシスタント",
                           desc: "Google Sheetsのメモを実装計画に変換しSlackへ提案通知",
                           url: "https://n8n.io/workflows/11362-convert-task-ideas-to-implementation-plans-with-gpt-4o-slack-and-google-sheets/",
                           techs: [
                             { name: "Google Sheets", icon: Table },
                             { name: "GPT-4o", icon: Bot },
                             { name: "Slack", icon: MessageSquare }
                           ]
                         },
                         {
                           title: "AIプロンプト自動最適化",
                           desc: "OPRO・DSPy手法で評価→改善ループを自動化し最適解を導出",
                           url: "https://n8n.io/workflows/11495-automatically-optimize-ai-prompts-with-openai-using-opro-and-dspy-methodology/",
                           techs: [
                             { name: "OpenAI", icon: Bot },
                             { name: "DSPy", icon: Sparkles },
                             { name: "OPRO", icon: Zap }
                           ]
                         },
                         {
                           title: "Instagramリール自動制作",
                           desc: "GPTでコンテンツ企画、Creatomateで動画生成、自動投稿",
                           url: "https://n8n.io/workflows/11631-ai-driven-instagram-reels-creation-and-publishing-with-gpt-creatomate-and-slack/",
                           techs: [
                             { name: "GPT-4", icon: Bot },
                             { name: "Creatomate", icon: Image },
                             { name: "Instagram", icon: Instagram }
                           ]
                         }
                     ].map((item, idx) => (
                         <Link
                           key={idx}
                           href={item.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="n8n-workflow-card group cursor-pointer block"
                         >
                             <div className="flex flex-col h-full">
                                 {/* Card Header */}
                                 <div className="flex items-start justify-between gap-3 mb-3">
                                     <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[var(--n8n-orange)] transition-colors">
                                       {item.title}
                                     </h3>
                                     <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-[var(--n8n-orange)] transition-colors flex-shrink-0 mt-0.5" />
                                 </div>

                                 {/* Description */}
                                 <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                                   {item.desc}
                                 </p>

                                 {/* Tech Badges */}
                                 <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                                     {item.techs.map((tech, techIdx) => (
                                         <span key={techIdx} className="n8n-tech-badge">
                                             <tech.icon className="h-3 w-3" />
                                             {tech.name}
                                         </span>
                                     ))}
                                 </div>
                             </div>
                         </Link>
                     ))}
                 </div>

                 {/* Bottom CTAs */}
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                     <Link
                       href="https://n8n.io/creators/nakayama/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="n8n-cta-button"
                     >
                        すべてのテンプレートを見る
                        <ExternalLink className="h-4 w-4" />
                     </Link>
                     <Link
                       href="/contact"
                       className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 bg-transparent px-8 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
                     >
                        実績について詳しく聞く
                        <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                 </div>
             </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative section-spacing">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-12">
                 <div className="text-center space-y-4">
                     <div className="eyebrow justify-center"><span>PRICE</span></div>
                     <h2 className="text-3xl font-bold text-gray-900">料金プラン</h2>
                     <p className="text-gray-600">課題の規模やフェーズに合わせて最適なプランをご提案します。</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                     <div className="p-8 rounded-3xl border border-gray-200 bg-white">
                         <h3 className="text-xl font-bold text-gray-900 mb-2">スポット開発</h3>
                         <div className="text-3xl font-bold text-gray-900 mb-6">¥300,000<span className="text-base font-normal text-gray-500">〜</span></div>
                         <p className="text-sm text-gray-600 mb-8 h-12">
                             特定の業務フローを単発で自動化したい場合に最適です。要件定義から実装、納品までを行います。
                         </p>
                         <ul className="space-y-3 mb-8">
                             <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-gray-900"/> 要件定義・設計</li>
                             <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-gray-900"/> n8nワークフロー構築</li>
                             <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-gray-900"/> 導入マニュアル作成</li>
                             <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-gray-900"/> 納品後1ヶ月間のサポート</li>
                         </ul>
                         <Link href="/contact" className="block w-full py-3 rounded-xl border border-gray-200 text-center text-sm font-semibold hover:bg-gray-50 transition-colors">
                             見積もりを依頼する
                         </Link>
                     </div>

                     <div className="p-8 rounded-3xl border border-gray-900 bg-gray-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gray-800 text-xs px-3 py-1 rounded-bl-xl font-medium tracking-wider">POPULAR</div>
                         <h3 className="text-xl font-bold mb-2">月額顧問・内製化支援</h3>
                         <div className="text-3xl font-bold mb-6">¥50,000<span className="text-base font-normal text-gray-400">〜 /月</span></div>
                         <p className="text-sm text-gray-300 mb-8 h-12">
                             継続的な改善や、社内メンバーへのレクチャーを通じて、自動化の内製化を支援します。
                         </p>
                         <ul className="space-y-3 mb-8">
                             <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="h-4 w-4 text-white"/> 月次の定例ミーティング</li>
                             <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="h-4 w-4 text-white"/> チャットでのQ&A対応</li>
                             <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="h-4 w-4 text-white"/> エラー監視・修正対応</li>
                             <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="h-4 w-4 text-white"/> スタッフ向けレクチャー</li>
                         </ul>
                         <Link href="/contact" className="block w-full py-3 rounded-xl bg-white text-gray-900 text-center text-sm font-semibold hover:bg-gray-100 transition-colors">
                             相談してみる
                         </Link>
                     </div>
                 </div>
            </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative section-spacing bg-gray-50">
          <div className="container mx-auto max-w-4xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-12">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="eyebrow"><span>FAQ</span></div>
                     <h2 className="text-3xl font-bold text-gray-900">よくある質問</h2>
                </div>
                <div className="space-y-6">
                    {[
                        { q: "n8nとZapierの違いは何ですか？", a: "n8nはZapierと比較して、より複雑な条件分岐やデータ処理が得意です。また、セルフホスト（自社サーバーでの運用）が可能で、ランニングコストを大幅に抑えられる点が最大の特徴です。" },
                        { q: "セキュリティ面が心配です。", a: "n8nはオンプレミス（自社サーバー）環境への構築が可能です。データが外部のSaaSを経由せず、自社内ネットワークで完結するため、高いセキュリティ要件にも対応可能です。" },
                        { q: "どのようなツールと連携できますか？", a: "Google Workspace, Slack, Chatwork, Salesforce, HubSpot, kintoneなど、APIが公開されているツールであれば基本的に何でも連携可能です。" },
                        { q: "契約期間の縛りはありますか？", a: "スポット開発の場合は納品までとなります。月額支援の場合は最低3ヶ月〜のご契約をお願いしておりますが、柔軟にご相談可能です。" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                                <span className="text-gray-400">Q.</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-600 text-sm pl-8 leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
          </div>
      </section>

      {/* Note Feed */}
      <section className="relative section-spacing">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-12">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="eyebrow"><span>BLOG</span></div>
                    <h2 className="text-3xl font-bold text-gray-900">Note</h2>
                    <p className="max-w-3xl text-gray-600">自動化のナレッジや最新情報を発信しています。</p>
                </div>
                <NoteFeed feedUrl="https://note.com/humanbeings_ai/m/md605f12236e4/rss" />
                 <div className="flex justify-center">
                      <Link href="https://note.com/humanbeings_ai" target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 pb-0.5 hover:border-gray-600">
                          View All Note <ArrowRight className="h-3 w-3" />
                      </Link>
                 </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
             <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    自動化で、<br/>
                    人間らしい仕事に時間を使いましょう。
                </h2>
                <p className="text-gray-400 text-lg">
                    まずは貴社の現状の課題をお聞かせください。<br/>
                    最適な自動化プランをご提案します。
                </p>
                <div className="pt-4">
                     <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-gray-900 transition-all hover:bg-gray-100 hover:scale-105 shadow-xl">
                        無料相談を申し込む
                     </Link>
                     <p className="mt-4 text-sm text-gray-500">※ 無理な営業は一切いたしません</p>
                </div>
             </div>
        </div>
      </section>

      {/* Footer (Simplified for LP) */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto text-center px-6">
             <p className="text-xs tracking-[0.2em] text-gray-500">© 2025 Human Beings Inc.</p>
        </div>
      </footer>
    </div>
  );
}

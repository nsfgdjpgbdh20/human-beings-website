"use client";

import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WorkflowCircuit } from "@/components/workflow-circuit";
import { Bot, Users, TrendingUp, Heart, Lightbulb, Cpu, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,18,18,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 rotate-[18deg] bg-gradient-to-tr from-[var(--electric)]/14 via-transparent to-transparent lg:block" />
        <div className="pointer-events-none absolute -top-28 right-[-160px] hidden h-[360px] w-[360px] rotate-[28deg] rounded-[3rem] bg-gradient-to-bl from-[var(--electric)]/10 via-white to-transparent lg:block" />

        <div className="relative">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <div className="space-y-6 max-w-3xl text-left">
              <h1 className="text-[clamp(3rem,7vw,6rem)] leading-tight text-gray-900">
                <span className="block whitespace-nowrap">人間の「余白」を、</span>
                <span className="block whitespace-nowrap">取り戻す。</span>
              </h1>
              <p className="text-lg text-gray-500">Restore humanity’s white space.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="relative section-spacing">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent" />

        <div className="relative z-10">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-16">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="eyebrow">
                                    <span>Mission</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900">ミッション</h2>
                <p className="max-w-3xl text-xl leading-relaxed text-gray-600">
                完全自動運転の株式会社を完成させる
                </p>
              </div>

              <WorkflowCircuit className="hidden w-full md:block" variant="section" />

              <div className="grid gap-8 md:grid-cols-3">
                <ScrollReveal delay={0.1} className="brand-pane p-10 text-left">
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-500">Human Director</span>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300/70">
                        <Users className="h-6 w-6 text-gray-800" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">人間の再定義</h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      人間は課題を発見し、最後までやり切る責任を持つ仕事を担う。
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="brand-pane p-10 text-left">
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-500">AI Workforce</span>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300/70">
                        <Bot className="h-6 w-6 text-gray-800" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">自己進化</h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      学習と改善のサイクルを自律的に回し続け、目標達成を継続する。
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} className="brand-pane p-10 text-left">
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-500">Profitable</span>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300/70">
                        <TrendingUp className="h-6 w-6 text-gray-800" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">黒字経営</h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      社会にとって必要な事業を倫理観をもって提供し、経済効果を生み出す。
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="relative section-spacing">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent" />

        <div className="relative z-10">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <ScrollReveal className="flex flex-col gap-16">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="eyebrow">
                  <span>Business</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900">事業内容</h2>
                <p className="max-w-3xl text-xl leading-relaxed text-gray-600">
                  自社事業・クライアントワークのいずれも、
                  <br />
                  AIで「時間を取り戻す」ことにフォーカスしています。
                </p>
              </div>

              <WorkflowCircuit className="hidden w-full md:block" variant="section" />

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {[{
                  logo: '/images/ai-workflow.png',
                  name: 'AI Workflow Design',
                  description: '業務自動化のためのAIワークフロー設計から導入、ナレッジベースの構築や運用など代行します。n8nなどのツールを用いて安全に再現性のある自動化を実現します。',
                  href: 'https://n8n.io/creators/nakayama/',
                  isExternal: true
                }, {
                  logo: '/images/shefit-home.jpg',
                  name: 'Shefit-Home（旧PATTORE）',
                  description: 'AIを用いた効率化されたビジネスも展開。女性向け出張パーソナルトレーニングのShefit-Homeは、初回のトレーナーとのマッチングをAIがサポートし、少人数で高品質を維持します。',
                  href: 'https://www.pattore.com/',
                  isExternal: true
                }, {
                  logo: '/images/ai-dev-app.png',
                  name: 'App Development',
                  description: 'AIを用いた高速アプリ開発により世の中のためになるアプリを生産。現在はAIによって作成した「G検定合格アプリ」などがあります。',
                  href: 'https://apps.apple.com/jp/app/g%E6%A4%9C%E5%AE%9A%E5%90%88%E6%A0%BC%E3%83%89%E3%83%AA%E3%83%AB/id6745340601',
                  isExternal: true
                }].map((item, idx) => {
                  const cardBody = (
                    <>
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white">
                        <Image
                          src={item.logo}
                          alt={`${item.name} ロゴ`}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-base leading-relaxed text-gray-600">{item.description}</p>
                    </>
                  );

                  const wrapperClass =
                    "flex h-full flex-col items-start gap-4 text-left";

                  return (
                    <ScrollReveal
                      key={item.name}
                      delay={idx * 0.1}
                      className="brand-pane flex flex-col items-start gap-4 p-8 text-left"
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          {...(item.isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                          className={wrapperClass}
                          aria-label={`${item.name}の詳細リンク`}
                        >
                          {cardBody}
                        </Link>
                      ) : (
                        <div className={wrapperClass}>{cardBody}</div>
                      )}
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
{/* Values Section */}
<section id="values" className="relative section-spacing">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent" />

  <div className="relative z-10">
    <div className="container mx-auto max-w-6xl px-6 lg:px-12">
      <ScrollReveal className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="eyebrow">
                        <span>Value</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900">バリュー</h2>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-600">
            以下の3つは、弊社が大事にする意思決定の軸です。
          </p>
        </div>

        <WorkflowCircuit className="hidden w-full md:block" variant="section" />

        <div className="grid gap-8 md:grid-cols-3">
          <ScrollReveal delay={0.1} className="brand-pane p-10 text-left">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-500">
                <Heart className="h-4 w-4" />
                HUMAN FIRST
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">ヒューマンファースト</h3>
              <p className="text-base leading-relaxed text-gray-600">
                すべての自動化は「人がより人間らしく生きる」ための手段に過ぎない。目的に沿わないなら自動化しない。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="brand-pane p-10 text-left">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-500">
                <Cpu className="h-4 w-4" />
                FULL AUTOMATION
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">オールオートメーション</h3>
              <p className="text-base leading-relaxed text-gray-600">
                人にしかできない判断以外はすべてAIへ。人が問いと創造に集中できる環境をつくる。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="brand-pane p-10 text-left">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-500">
                <Lightbulb className="h-4 w-4" />
                OPEN PLAYBOOK
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">オープンソースノウハウ</h3>
              <p className="text-base leading-relaxed text-gray-600">
                得られたノウハウを社会に共有し、共創する仲間を増やす。連鎖を生み、人類全体のアップデートを促します。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section id="contact" className="relative section-spacing">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent" />

        <div className="relative z-10">
          <div className="container mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal className="brand-pane px-10 py-12">
              <div className="flex flex-col gap-8 text-center">
                <div className="eyebrow justify-center">
                                    <span>Contact</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-medium text-gray-900">お問い合わせ</h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                お問い合わせの内容を確認し、折り返しご連絡させていただきます。
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative border-t border-gray-300/60 bg-white/80 py-12">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm tracking-[0.35em] text-gray-500">
            © 2025 株式会社Human Beings
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-xs tracking-wider text-gray-500">
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                プライバシーポリシー
              </Link>
            </div>
            <a
              href="https://www.instagram.com/humanbeings_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { Instagram } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | 株式会社Human Beings",
  description: "n8n導入支援、業務自動化のご相談はこちらから。通常1〜2営業日以内に返信いたします。",
  openGraph: {
    title: "お問い合わせ | 株式会社Human Beings",
    description: "n8n導入支援、業務自動化のご相談はこちらから。",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://humanbeings.co.jp/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://humanbeings.co.jp/contact/"
    }]
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
            <div className="text-center mb-12 space-y-4">
                 <h1 className="text-3xl sm:text-4xl font-medium text-gray-900">お問い合わせ</h1>
                 <p className="text-gray-600">
                    業務自動化、n8n導入に関するご相談など、お気軽にお問い合わせください。<br/>
                    秘密保持契約（NDA）の締結も可能です。
                 </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                 <ContactForm />
            </div>
        </div>
      </main>

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

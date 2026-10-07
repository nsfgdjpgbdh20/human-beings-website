import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "送信完了",
  description: "ご相談ありがとうございます。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="py-20 lg:py-28">
        <div className="wrap max-w-2xl">
          <div className="card flex flex-col items-start gap-5 p-8 sm:p-10">
            <CheckCircle2 aria-hidden className="h-10 w-10 text-ai" />
            <h1 className="text-[1.75rem] font-bold text-ink">送信が完了しました</h1>
            <p className="text-[15px] leading-[1.9] text-muted-ink">
              ご相談ありがとうございます。内容を確認のうえ、通常1〜2営業日以内に、ご入力いただいたメールアドレスへご返信します。数日たっても返信が届かない場合は、迷惑メールフォルダをご確認のうえ、お手数ですが再度ご連絡ください。
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link href="/" className="btn-secondary">
                トップページへ戻る
              </Link>
              <Link href="/ai-shain" className="btn-secondary">
                AI社員くんについて見る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

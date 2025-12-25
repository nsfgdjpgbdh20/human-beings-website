import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "送信完了 | 株式会社Human Beings",
  description: "お問い合わせありがとうございます。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto max-w-2xl px-6 lg:px-12 text-center">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center gap-6">
                <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">送信完了</h1>
                <p className="text-gray-600 leading-relaxed">
                    お問い合わせありがとうございます。<br/>
                    内容を確認の上、担当者よりご連絡させていただきます。<br/>
                    （通常1〜2営業日以内）
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        トップページへ戻る
                    </Link>
                    <Link
                        href="/n8n"
                        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                    >
                        n8n支援の詳細を見る
                    </Link>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const TITLE = "株式会社Human Beings | AIコンサルティング・エンジニアリング";
const DESCRIPTION =
  "業務の整理から、AIの設計・開発、現場への導入と運用改善まで。株式会社Human Beingsは、企業専用のAIエージェント「AI社員くん」を中心に、AIを現場で働く仕組みにする支援を行います。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | 株式会社Human Beings",
  },
  description: DESCRIPTION,
  keywords: "AIコンサルティング,AI導入支援,AIエージェント,業務自動化,FDE,AI社員くん,n8n,Human Beings,ヒューマンビーイングス",
  authors: [{ name: "株式会社Human Beings" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社Human Beings",
    images: [
      {
        url: "/og-image.png",
        alt: "Human Beings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "latX6bY3OPEjCCmdl4OjuwrVW4qRqpB9ybla3Q3nEKM",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          本文へ移動
        </a>
        {children}
      </body>
    </html>
  );
}

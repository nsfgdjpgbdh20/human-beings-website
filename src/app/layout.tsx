import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社Human Beings (ヒューマンビーイングス) | AI導入・業務自動化コンサルティング",
  description: "AIとn8nを活用した業務自動化・効率化ならHuman Beings。要件定義から構築・運用まで、認定クリエイターが伴走支援。単純作業を自動化し、企業の生産性向上を実現します。",
  keywords: "業務自動化,AI導入,n8n,DX支援,Human Beings,ヒューマンビーイングス,働き方改革",
  authors: [{ name: "株式会社Human Beings" }],
  openGraph: {
    title: "株式会社Human Beings (ヒューマンビーイングス) | AI導入・業務自動化コンサルティング",
    description: "AIとn8nを活用した業務自動化・効率化ならHuman Beings。要件定義から構築・運用まで、認定クリエイターが伴走支援。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Human Beings (ヒューマンビーイングス) | AI導入・業務自動化コンサルティング",
    description: "AIとn8nを活用した業務自動化・効率化ならHuman Beings。要件定義から構築・運用まで、認定クリエイターが伴走支援。",
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

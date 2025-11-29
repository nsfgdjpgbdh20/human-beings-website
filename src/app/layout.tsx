import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社Human Beings | 人類を労働から解放する",
  description: "AIと人間の協働で、好きなことにフルコミットできる社会を実現。社長1名×AI従業員100体で月商1億円を目指します。",
  keywords: "AI,自動化,働き方改革,Human Beings,人工知能,労働解放",
  authors: [{ name: "株式会社Human Beings" }],
  openGraph: {
    title: "株式会社Human Beings | 人類を労働から解放する",
    description: "AIと人間の協働で、好きなことにフルコミットできる社会を実現",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Human Beings | 人類を労働から解放する",
    description: "AIと人間の協働で、好きなことにフルコミットできる社会を実現",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "latX6bY3OPEjCCmdl4OjuwrVW4qRqpB9ybla3Q3nEKM",
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

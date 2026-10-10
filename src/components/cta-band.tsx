import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_HREF } from "@/lib/site";

export function CtaBand({
  title = "まずは、一つの業務から。",
  body = "いまの作業、使っているツール、困っていることを伺い、AIに任せられる範囲と、人が確認すべき点を一緒に整理します。まだ何を任せるか決まっていない段階でもご相談いただけます。",
  href = CONTACT_HREF,
}: {
  title?: string;
  body?: string;
  href?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-ink text-white">
      <div className="wrap grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-end md:py-20">
        <div className="space-y-4">
          <h2 id="cta-title" className="text-[1.75rem] font-bold leading-[1.45] sm:text-[2.25rem]">
            {title}
          </h2>
          <p className="max-w-2xl text-[15px] leading-[1.9] text-[#c9d2da] sm:text-base">{body}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link href={href} className="btn-on-dark w-full md:w-auto">
            相談内容を送る
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <p className="text-[13px] text-[#9aa6b1]">通常1〜2営業日以内にメールでご返信します</p>
        </div>
      </div>
    </section>
  );
}

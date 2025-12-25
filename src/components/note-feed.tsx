import { getLatestNoteArticles } from "@/lib/note";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface NoteFeedProps {
  feedUrl: string;
}

export async function NoteFeed({ feedUrl }: NoteFeedProps) {
  const articles = await getLatestNoteArticles(feedUrl);

  if (articles.length === 0) {
    return (
        <div className="w-full py-12 text-center border border-dashed border-gray-300 rounded-2xl bg-gray-50/50">
            <p className="text-gray-500">記事の取得に失敗したか、まだ記事が投稿されていません。</p>
            <Link href="https://note.com/humanbeings_ai" target="_blank" className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block">
                Noteで直接見る &rarr;
            </Link>
        </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {articles.map((article, index) => (
        <Link
          key={index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg"
        >
          {article.thumbnail ? (
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
               <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
          ) : (
             <div className="relative aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-sm">No Image</span>
             </div>
          )}

          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="space-y-3">
              <h3 className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="line-clamp-3 text-sm text-gray-600 leading-relaxed">
                {article.contentSnippet}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-500">
                {new Date(article.pubDate).toLocaleDateString("ja-JP")}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-gray-900">
                Read Note <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

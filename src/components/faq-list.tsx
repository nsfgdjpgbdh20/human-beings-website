import { Plus } from "lucide-react";

// details/summary を使い、JavaScriptなしでキーボード操作できる開閉式のFAQ
export function FaqList({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a]) => (
        <details key={q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-[16px] font-semibold leading-[1.7] text-ink [&::-webkit-details-marker]:hidden">
            <span>{q}</span>
            <Plus aria-hidden className="mt-1 h-5 w-5 shrink-0 text-muted-ink transition-transform group-open:rotate-45" />
          </summary>
          <p className="pb-6 pr-10 text-[15px] leading-[1.9] text-muted-ink">{a}</p>
        </details>
      ))}
    </div>
  );
}

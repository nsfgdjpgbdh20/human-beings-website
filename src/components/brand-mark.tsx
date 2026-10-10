import { cn } from "@/lib/utils";

// ロゴの「HB＋回路」を小さく単純化した記号。ヘッダー・フッター用
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("shrink-0", className)} aria-hidden="true" focusable="false">
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6" fill="#0f1419" />
      <path d="M8 8v16M8 16h9M17 8v16" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M17 9h3.5a3.4 3.4 0 0 1 0 6.8H17M17 16h4.2a3.9 3.9 0 0 1 0 7.8H17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="12.5" cy="16" r="1.7" fill="#38c4f0" />
    </svg>
  );
}

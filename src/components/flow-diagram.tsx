import { cn } from "@/lib/utils";

type Step = {
  kind: "input" | "ai" | "human" | "output";
  label: string;
  title: string;
  detail: string;
  chips?: string[];
};

// 表示例：週次レポートを題材にした、入力→AIの処理→人の確認→出力の流れ
const STEPS: Step[] = [
  {
    kind: "input",
    label: "入力",
    title: "いつものツールから数字を集める",
    detail: "許可した範囲のデータだけを読み取ります",
    chips: ["広告管理画面", "アクセス解析", "スプレッドシート"],
  },
  {
    kind: "ai",
    label: "AIが処理",
    title: "集計して、先週と比べ、下書きをつくる",
    detail: "気になる変化には理由の候補を添えます",
  },
  {
    kind: "human",
    label: "人が確認",
    title: "担当者が内容を見て、進めるか判断",
    detail: "送信・設定変更・支払いは確認後に行う設計",
  },
  {
    kind: "output",
    label: "出力",
    title: "チャットへ報告し、決まった場所へ保存",
    detail: "誰が何を確認したかが残ります",
  },
];

const KIND_STYLE: Record<Step["kind"], { dot: string; label: string }> = {
  input: { dot: "border-line-strong bg-surface", label: "text-muted-ink" },
  ai: { dot: "border-ai bg-ai", label: "text-ai" },
  human: { dot: "border-human bg-human", label: "text-human" },
  output: { dot: "border-ink bg-surface", label: "text-ink" },
};

export function FlowDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("card overflow-hidden shadow-[0_24px_60px_-40px_rgba(15,20,25,0.45)]", className)}>
      <div className="flex items-center justify-between border-b border-line bg-[#fafaf7] px-5 py-3">
        <span className="font-mono text-[12px] font-medium tracking-[0.08em] text-muted-ink">WORKFLOW / 週次レポート</span>
        <span className="rounded-sm border border-line px-1.5 py-0.5 text-[11px] text-muted-ink">表示例</span>
      </div>
      <ol className="relative px-5 py-6 sm:px-6">
        {STEPS.map((step, i) => {
          const style = KIND_STYLE[step.kind];
          const last = i === STEPS.length - 1;
          return (
            <li key={step.label} className="relative grid grid-cols-[1.25rem_1fr] gap-x-4 pb-6 last:pb-0">
              {!last && <span aria-hidden className="absolute left-[0.6rem] top-5 bottom-0 w-px bg-line-strong" />}
              <span aria-hidden className={cn("relative mt-1.5 h-[1.15rem] w-[1.15rem] rounded-full border-2", style.dot)} />
              <div className="min-w-0">
                <p className={cn("font-mono text-[12px] font-semibold tracking-[0.06em]", style.label)}>
                  {String(i + 1).padStart(2, "0")} {step.label}
                </p>
                <p className="mt-0.5 text-[15px] font-semibold leading-[1.6] text-ink">{step.title}</p>
                <p className="text-[13px] leading-[1.7] text-muted-ink">{step.detail}</p>
                {step.chips && (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {step.chips.map((chip) => (
                      <li key={chip} className="rounded-sm border border-line bg-paper px-2 py-0.5 text-[12px] text-ink-soft">
                        {chip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <figcaption className="border-t border-line px-5 py-3 text-[12px] leading-[1.7] text-muted-ink">
        仕組みの説明のための例です。対象業務・接続するツール・確認の流れは、ご相談内容に合わせて設計します。
      </figcaption>
    </figure>
  );
}

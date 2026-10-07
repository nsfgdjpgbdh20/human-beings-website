import { cn } from "@/lib/utils";

// チャットでAI社員が報告し、人が判断する様子の表示例。名前・数値は架空
export function ChatSample({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border",
        dark ? "border-white/15 bg-[#151c23]" : "border-line bg-surface",
        className,
      )}
    >
      <div className={cn("flex items-center justify-between border-b px-4 py-2.5", dark ? "border-white/10" : "border-line")}>
        <span className={cn("text-[13px] font-semibold", dark ? "text-white" : "text-ink")}># マーケ-週次</span>
        <span className={cn("rounded-sm border px-1.5 py-0.5 text-[11px]", dark ? "border-white/20 text-[#b9c3cc]" : "border-line text-muted-ink")}>
          表示例
        </span>
      </div>
      <div className="space-y-4 p-4 text-[14px] leading-[1.75]">
        <Message
          dark={dark}
          avatar="ミ"
          avatarClass="bg-[#38c4f0] text-[#0f1419]"
          name="ミナト"
          badge="AI社員"
          time="8:02"
        >
          <p>おはようございます。先週分の広告レポートの下書きを、いつものシートに置きました。</p>
          <ul className={cn("mt-2 space-y-1 border-l-2 pl-3", dark ? "border-[#38c4f0]/60 text-[#d5dde3]" : "border-ai/50 text-ink-soft")}>
            <li>問い合わせは前の週より3件増えています</li>
            <li>SNS広告の1件あたりの費用が上がっています</li>
          </ul>
          <p className="mt-2">配分を変える案を2つ用意しました。どちらで進めるか確認をお願いします。</p>
        </Message>
        <Message dark={dark} avatar="佐" avatarClass="bg-[#f2c48d] text-[#3d2200]" name="佐藤" time="9:15">
          <p>ありがとう。案Aで進めてください。</p>
        </Message>
        <Message dark={dark} avatar="ミ" avatarClass="bg-[#38c4f0] text-[#0f1419]" name="ミナト" badge="AI社員" time="9:16">
          <p>承知しました。変更内容を貼ります。「OK」をいただいてから反映します。</p>
        </Message>
      </div>
      <figcaption className={cn("border-t px-4 py-2.5 text-[12px]", dark ? "border-white/10 text-[#b9c3cc]" : "border-line text-muted-ink")}>
        名前・数値は架空の例です。実際の画面とは異なります。
      </figcaption>
    </figure>
  );
}

function Message({
  dark,
  avatar,
  avatarClass,
  name,
  badge,
  time,
  children,
}: {
  dark: boolean;
  avatar: string;
  avatarClass: string;
  name: string;
  badge?: string;
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-3">
      <span aria-hidden className={cn("flex h-8 w-8 items-center justify-center rounded-md text-[13px] font-bold", avatarClass)}>
        {avatar}
      </span>
      <div className={cn("min-w-0", dark ? "text-[#e9eef2]" : "text-ink")}>
        <p className="flex flex-wrap items-center gap-x-2 text-[13px]">
          <span className="font-bold">{name}</span>
          {badge && (
            <span className={cn("rounded-sm px-1.5 text-[11px] font-semibold", dark ? "bg-[#38c4f0]/15 text-[#7fd8f5]" : "bg-ai-soft text-ai")}>
              {badge}
            </span>
          )}
          <span className={dark ? "text-[#9aa6b1]" : "text-muted-ink"}>{time}</span>
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}

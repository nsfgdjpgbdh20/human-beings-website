"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FIELD_CLASS =
  "block w-full rounded-md border border-line-strong bg-surface px-4 text-[16px] text-ink placeholder:text-[#6b737c] transition-colors focus:border-ai focus:outline-none focus:ring-2 focus:ring-ai/25";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = "/thanks";
        return;
      }
      setSubmitError(true);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <Field id="name" label="お名前" hint="会社名・部署名もあわせてご記入いただけると、ご案内がスムーズです。">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="例：株式会社〇〇 山田太郎"
          required
          aria-describedby="name-hint"
          className={`${FIELD_CLASS} h-12`}
        />
      </Field>

      <Field id="email" label="メールアドレス" hint="ご返信はこのアドレスにお送りします。">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="例：yamada@example.co.jp"
          required
          aria-describedby="email-hint"
          className={`${FIELD_CLASS} h-12`}
        />
      </Field>

      <Field id="subject" label="件名" hint="例：週次レポート作成の自動化について">
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          aria-describedby="subject-hint"
          className={`${FIELD_CLASS} h-12`}
        />
      </Field>

      <Field
        id="message"
        label="ご相談内容"
        hint="対象の業務、使っているツール、作業の頻度、ご希望の時期などを分かる範囲でお書きください。機密情報や個人情報は書かないでください。"
      >
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={8}
          aria-describedby="message-hint"
          placeholder={"例：毎週月曜に、広告とアクセス解析の数字をスプレッドシートにまとめて社内チャットで共有しています。1回2時間ほどかかっており、下書きまでをAIに任せたいです。"}
          className={`${FIELD_CLASS} min-h-[200px] py-3 leading-[1.8]`}
        />
      </Field>

      {submitError && (
        <div role="alert" className="rounded-md border border-[#f1b8b2] bg-[#fdf0ee] px-4 py-3 text-[14px] leading-[1.8] text-destructive">
          送信できませんでした。入力内容をご確認のうえ、時間をおいて再度お試しください。
        </div>
      )}

      <div className="space-y-4 border-t border-line pt-6">
        <p className="text-[13px] leading-[1.8] text-muted-ink">
          ご入力いただいた情報は、お問い合わせへの回答とご連絡のために利用します。取り扱いは
          <Link href="/privacy-policy" className="text-ai underline underline-offset-4">
            プライバシーポリシー
          </Link>
          をご確認ください。
        </p>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10">
          {isSubmitting ? (
            <span>送信中…</span>
          ) : (
            <>
              <Send aria-hidden className="h-4 w-4" />
              送信する
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({ id, label, hint, children }: { id: string; label: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-2 text-[15px] font-semibold text-ink">
        {label}
        <span className="rounded-sm bg-human-soft px-1.5 text-[11px] font-semibold text-human">必須</span>
      </label>
      {children}
      <p id={`${id}-hint`} className="text-[13px] leading-[1.7] text-muted-ink">
        {hint}
      </p>
    </div>
  );
}

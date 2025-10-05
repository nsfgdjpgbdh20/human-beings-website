"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-10 text-left">
      <div className="space-y-8">
        <div className="space-y-3">
          <label htmlFor="name" className="form-label">
            <span className="form-label-en">NAME</span>
            <span className="form-label-jp">お名前</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田太郎"
            required
            className="form-input"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="form-label">
            <span className="form-label-en">EMAIL</span>
            <span className="form-label-jp">メールアドレス</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="form-input"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="subject" className="form-label">
            <span className="form-label-en">SUBJECT</span>
            <span className="form-label-jp">件名</span>
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="お問い合わせの件名"
            required
            className="form-input"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="form-label">
            <span className="form-label-en">MESSAGE</span>
            <span className="form-label-jp">メッセージ</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="お問い合わせ内容をお書きください"
            required
            rows={8}
            className="form-textarea"
          />
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="form-status form-status-success">
          メッセージが送信されました。24時間以内に担当者よりご連絡いたします。
        </div>
      )}

      {submitStatus === "error" && (
        <div className="form-status form-status-error">
          送信中にエラーが発生しました。お手数ですが、しばらく時間を置いてから再度お試しください。
        </div>
      )}

      <div className="flex flex-col items-center gap-5 text-center">
        <p className="text-xs tracking-[0.25em] text-gray-500">返信は24時間以内を目安に行っております</p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-4 rounded-[1.75rem] border border-gray-900 bg-gray-900 px-16 py-7 text-base font-semibold tracking-[0.28em] text-white transition-all duration-200 hover:bg-gray-800"
        >
          {isSubmitting ? (
            <span>送信中...</span>
          ) : (
            <span className="flex items-center gap-3">
              <Send className="h-4 w-4" />
              送信する
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}

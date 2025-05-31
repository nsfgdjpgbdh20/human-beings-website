"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
        setFormData({ name: "", email: "", message: "" });
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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-10">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <label htmlFor="name" className="text-xl font-black text-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-300/50">
                  <User className="w-5 h-5 text-white" />
                </div>
                お名前
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="山田太郎"
                required
                className="h-16 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/90 backdrop-blur-sm font-medium placeholder:text-slate-400"
              />
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="email" className="text-xl font-black text-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-300/50">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                メールアドレス
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="h-16 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/90 backdrop-blur-sm font-medium placeholder:text-slate-400"
              />
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label htmlFor="message" className="text-xl font-black text-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/50">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                メッセージ
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="お問い合わせ内容をお書きください..."
                required
                rows={6}
                className="text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none font-medium placeholder:text-slate-400"
              />
            </motion.div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative p-8 bg-white/90 backdrop-blur-xl border border-green-200/50 rounded-2xl text-green-700 text-center text-xl font-black shadow-xl">
                  ✨ メッセージが正常に送信されました。ありがとうございます！
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative p-8 bg-white/90 backdrop-blur-xl border border-red-200/50 rounded-2xl text-red-700 text-center text-xl font-black shadow-xl">
                  ❌ 送信中にエラーが発生しました。もう一度お試しください。
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-18 text-xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-2xl border-0 shadow-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    送信中...
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Send className="w-7 h-7" />
                    送信する
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
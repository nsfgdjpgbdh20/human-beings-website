"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Counter } from "@/components/counter";
import { ArrowRight, Bot, Users, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 pt-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 mb-8">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-bold">人類を労働から解放する革新的企業</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              人類を労働から
              <br />
              解放する
            </motion.h1>
            
            <motion.p 
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              好きなことにフルコミットできる社会へ
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link 
                href="/vision" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ビジョンを見る
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center bg-white text-gray-800 text-xl font-bold px-12 py-5 rounded-2xl border-3 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transform hover:scale-105 transition-all duration-300"
              >
                AIソリューション
              </Link>
            </motion.div>

            {/* Mission Statement */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-12 shadow-xl mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-2xl text-blue-700 mb-6 font-bold">ミッション</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">
                社長1名 × AI従業員100体
                <br />
                で月商1億円を実現
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 floating">
                    <Counter end={1} />
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-bold">社長</p>
                </div>
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4 floating" style={{ animationDelay: '0.5s' }}>
                    <Counter end={100} />
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-bold">AI従業員</p>
                </div>
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-4 floating" style={{ animationDelay: '1s' }}>
                    <Counter end={1} suffix="億円" />
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-bold">月商</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">ビジョン</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-16">
                人類を労働から解放する
                <br />
                好きなことにフルコミットできる社会へ
              </h3>
              
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-6">
                  私たちは、人間が本来持つ創造性、感情、直感といった
                  <strong className="text-blue-700">人間らしさ</strong>を最大限に発揮できる社会の実現を目指しています。
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                  AIと人間が協働することで、単純作業や繰り返し業務から解放され、
                  すべての人が自分の情熱を追求し、好きなことに集中できる未来を創造します。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">ミッション詳細</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              1名×100体→1億円の実現
            </h3>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-300/50 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800">社長1名</h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                人間にしかできない
                <br />
                戦略的判断と創造的思考に集中
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-300/50 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800">AI従業員100体</h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                24時間365日稼働する
                <br />
                高度な自動化システム
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-300/50 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800">月商1億円</h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                効率性と創造性の
                <br />
                完璧な融合による成果
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">バリュー</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              私たちの3つの価値観
            </h3>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ヒューマンファースト
              </h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                すべての自動化は「人がより人間らしく生きる」
                ための手段にすぎない
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                オールオートメーション
              </h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                人にしかできない判断以外は
                全てAIに委ねる
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                オープンソースノウハウ
              </h4>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                知識を独占せず
                社会に還元する
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
              未来の働き方を
              <br />
              一緒に創造しませんか？
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed mb-16 max-w-3xl mx-auto opacity-95">
              Human Beingsと共に、人類の可能性を最大限に引き出す
              新しい社会を築きましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white text-2xl font-bold px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
                >
                  お問い合わせ
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/careers" 
                  className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-2xl font-bold px-16 py-6 rounded-2xl hover:bg-white/30 transition-all duration-300"
                >
                  採用情報
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-300/50">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-bold">Human Beings</span>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            人類を労働から解放し、好きなことにフルコミットできる社会を実現する
          </p>
          <p className="text-gray-400 text-lg">
            © 2024 株式会社Human Beings. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

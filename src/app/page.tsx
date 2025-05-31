"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { ArrowRight, Bot, Users, TrendingUp, Sparkles, Zap, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 pt-48 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-8 border border-blue-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-semibold text-sm">革新的なAI協働企業</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                人類を労働から
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  解放する
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                AIで経済を回し、人間の余暇を増やす
                <span className="block text-lg sm:text-xl lg:text-2xl text-slate-500 mt-4">
                  新しい働き方の未来を、今ここから
                </span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <a
                  href="#mission"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  ミッションを見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-bold text-lg rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-300"
                >
                  お問い合わせ
                </a>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Image 
                  src="/images/human-robot-handshake.jpg" 
                  alt="人間とロボットの握手 - Human Beingsの協働ビジョン"
                  className="relative w-full max-w-lg h-auto rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 border border-white/20"
                  width={500}
                  height={333}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative py-32 lg:py-40 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-8 border border-blue-200/50">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-semibold text-sm">Our Vision</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8">ビジョン</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mb-16 leading-tight max-w-4xl mx-auto">
                人類を労働から解放する
                <span className="block text-xl sm:text-2xl lg:text-3xl text-slate-500 mt-4 font-medium">
                  〜AIで経済を回し、人間の余暇を増やす〜
                </span>
              </h3>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-5xl mx-auto">
                  <p className="text-xl sm:text-2xl leading-relaxed text-slate-700 mb-8 font-medium">
                    当社は、人間の自由な時間を増やし、創造性を最大限に発揮できる社会の実現を目指します。
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed text-slate-600">
                    人間とAIが協働することで、すべての人が非生産的な時間から解放され、自分の興味関心を追求し、経済的な自由と時間を手に入れられる未来を創造します。当社はその時代の先頭を走り、社会にノウハウを提供し、人類の発展を促します。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-8 border border-blue-200/50">
              <Zap className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold text-sm">Our Mission</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8">ミッション</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 leading-tight max-w-4xl mx-auto">
              人間1名 × AI社員100人で月商1億円を達成する
            </h3>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-300/50 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black mb-6 text-slate-800">人間1名</h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  仕事は1日1時間の業務レビュー、意思決定のみ。より創造的な仕事に専念します。
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-300/50 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black mb-6 text-slate-800">AI社員100人</h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  24時間自動化されたワークフローと自律的なタスク作成で人間の負担を減らします。
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-300/50 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black mb-6 text-slate-800">月商1億円</h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  マーケットに投入しフィードバックを得ながら、社会に役立つプロダクトで黒字化を目指します。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative py-32 lg:py-40 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8 border border-purple-200/50">
              <Heart className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Our Values</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent mb-8">バリュー</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 max-w-4xl mx-auto">
              私たちの3つの価値観
            </h3>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <h4 className="text-2xl lg:text-3xl font-black mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ヒューマンファースト
                </h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  すべての自動化は「人がより人間らしく生きる」ための手段にすぎない
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <h4 className="text-2xl lg:text-3xl font-black mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  オールオートメーション
                </h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  人にしかできない判断以外は全てAIに委ねる
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                <h4 className="text-2xl lg:text-3xl font-black mb-8 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  オープンソースノウハウ
                </h4>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  知識を独占せず社会に還元する
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Management Section */}
      <section id="vibe-management" className="relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-8 border border-purple-200/50">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Vibe Management</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent mb-8">vibe経営</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 leading-tight max-w-4xl mx-auto">
              人間とAIの役割を明確に分けた<br />新しい経営手法
            </h3>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Layer 1: Purpose */}
            <motion.div 
              className="group relative mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/50">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2">目的層（Why / What）</h4>
                    <p className="text-lg text-slate-600 font-medium">人間が決定</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  ビジョン、ミッション、目標設定など、企業の根幹となる「なぜ」と「何を」を人間が決定します。
                </p>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Layer 2: Strategy */}
            <motion.div 
              className="group relative mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-300/50">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2">戦略層（How設計型）</h4>
                    <p className="text-lg text-slate-600 font-medium">人間が型を作る or AIと共同設計</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  目的を達成するための戦略設計。人間が基本的な型を作り、AIと協働してより詳細な戦略を構築します。
                </p>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Layer 3: Execution */}
            <motion.div 
              className="group relative mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-300/50">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2">実行層（How実行型）</h4>
                    <p className="text-lg text-slate-600 font-medium">AIが反復実行＆微調整</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  戦略に基づいた具体的な実行をAIが担当。24時間体制で反復実行し、データに基づいて微調整を行います。
                </p>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Layer 4: Outcome */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-300/50">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2">結果層（Outcome）</h4>
                    <p className="text-lg text-slate-600 font-medium">人間が承認・修正</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-slate-600 font-medium">
                  AIの実行結果を人間が評価・承認し、必要に応じて戦略や目的の修正を行います。継続的な改善サイクルを実現。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-8 border border-blue-200/50">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold text-sm">Contact Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8">
              お問い合わせ
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              ご質問やご相談がございましたら、こちらからお送りください
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <p className="text-slate-400 text-lg font-medium">
            © 2025 株式会社Human Beings. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

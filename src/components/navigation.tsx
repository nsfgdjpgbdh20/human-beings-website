"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ビジョン", href: "#vision" },
    { name: "ミッション", href: "#mission" },
    { name: "バリュー", href: "#values" },
    { name: "vibe経営", href: "#vibe-management" },
    { name: "note記事", href: "#note-articles" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // ヘッダーの高さを考慮
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl border-b border-slate-200/50 shadow-xl shadow-slate-900/5" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-300/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Bot className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-2xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent whitespace-nowrap">Human Beings</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-base font-bold text-slate-700 hover:text-blue-600 transition-all duration-300 px-6 py-3 rounded-2xl hover:bg-blue-50/80 backdrop-blur-sm whitespace-nowrap cursor-pointer border border-transparent hover:border-blue-200/50"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-base font-bold px-8 py-3 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer border border-transparent hover:border-white/20"
              >
                お問い合わせ
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-2xl hover:bg-blue-50/80 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-blue-200/50"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/50 rounded-b-3xl shadow-2xl shadow-slate-900/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-8 px-6 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block text-2xl font-bold text-slate-700 hover:text-blue-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-blue-50/80 backdrop-blur-sm cursor-pointer border border-transparent hover:border-blue-200/50"
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    お問い合わせ
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 
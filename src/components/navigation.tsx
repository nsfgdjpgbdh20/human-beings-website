"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    { name: "MISSION", href: "#mission" },
    { name: "BUSINESS", href: "#business" },
    { name: "VALUES", href: "#values" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    e.preventDefault();

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    setIsOpen(false);

    if (!targetElement) {
      return;
    }

    const headerOffset = 96;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(elementPosition - headerOffset, 0);

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const delay = isMobile ? 350 : 0;

    const scrollToTarget = () => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    if (delay) {
      window.setTimeout(scrollToTarget, delay);
    } else {
      requestAnimationFrame(scrollToTarget);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[var(--background)]/95 backdrop-blur-2xl border-b border-gray-300/50 shadow-[0_12px_40px_-32px_rgba(15,23,42,0.35)]" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-[13px] font-semibold tracking-[0.42em] text-gray-800 uppercase whitespace-nowrap">
              Human Beings Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-[12px] tracking-[0.35em] text-gray-600 hover:text-gray-900 transition-all duration-300 px-5 py-3 rounded-full border border-transparent hover:border-gray-300/70 hover:bg-white/70 backdrop-blur-sm whitespace-nowrap cursor-pointer"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="ml-4"
            >
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex items-center justify-center rounded-full border border-gray-400/60 bg-white/80 px-8 py-3 text-sm tracking-[0.12em] text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white whitespace-nowrap"
              >
                お問い合わせ
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-2xl border border-gray-300/70 bg-white/80 backdrop-blur-md transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-[var(--background)]/95 backdrop-blur-2xl border-t border-gray-300/60 rounded-b-3xl shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)]"
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
                      className="block text-lg font-medium tracking-[0.2em] text-gray-700 hover:text-gray-900 transition-all duration-300 py-3 px-6 rounded-2xl border border-transparent hover:border-gray-300/60 hover:bg-white/70 backdrop-blur-sm cursor-pointer"
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
                    className="block w-full text-center rounded-full border border-gray-400/60 bg-white/80 px-8 py-4 text-sm tracking-[0.12em] text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white cursor-pointer whitespace-nowrap"
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

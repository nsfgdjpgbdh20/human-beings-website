"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Navigation items configuration
const NAV_ITEMS = [
  { name: "MISSION", href: "#mission" },
  { name: "BUSINESS", href: "#business" },
  { name: "VALUES", href: "#values" },
] as const;

const CONTACT_ITEM = { name: "お問い合わせ", href: "#contact" } as const;

// Constants
const HEADER_OFFSET = 96;
const MOBILE_MENU_DELAY = 350;
const SCROLL_THRESHOLD = 50;

// Helper: Check if we're on homepage with anchor link
function isHomepageAnchor(pathname: string, href: string): boolean {
  return pathname === "/" && href.startsWith("#");
}

// Helper: Build correct href based on current pathname
function buildHref(pathname: string, href: string): string {
  return pathname === "/" ? href : `/${href}`;
}

// Helper: Calculate scroll position with header offset
function calculateScrollPosition(element: HTMLElement): number {
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  return Math.max(elementPosition - HEADER_OFFSET, 0);
}

// Helper: Determine if device is mobile
function isMobileDevice(): boolean {
  return window.matchMedia("(max-width: 1023px)").matches;
}

// Helper: Smooth scroll to target position
function scrollToPosition(position: number, delay: number = 0): void {
  const performScroll = () => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  if (delay > 0) {
    window.setTimeout(performScroll, delay);
  } else {
    requestAnimationFrame(performScroll);
  }
}

// Custom hook for smooth scroll handling
function useSmoothScroll(pathname: string, onNavigate: () => void) {
  return (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll on homepage with anchor links
    if (!isHomepageAnchor(pathname, href)) {
      onNavigate();
      return;
    }

    e.preventDefault();
    onNavigate();

    // Find and scroll to target element
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const scrollPosition = calculateScrollPosition(targetElement);
    const delay = isMobileDevice() ? MOBILE_MENU_DELAY : 0;
    scrollToPosition(scrollPosition, delay);
  };
}

// NavLink component for reusable navigation links
interface NavLinkProps {
  item: { name: string; href: string };
  pathname: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}

function NavLink({ item, pathname, onClick, className = "" }: NavLinkProps) {
  return (
    <a
      href={buildHref(pathname, item.href)}
      onClick={(e) => onClick(e, item.href)}
      className={className}
    >
      {item.name}
    </a>
  );
}

// Desktop NavLink with animation wrapper
function DesktopNavLink({ item, pathname, onClick }: NavLinkProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <NavLink
        item={item}
        pathname={pathname}
        onClick={onClick}
        className="text-[12px] tracking-[0.35em] text-gray-600 hover:text-gray-900 transition-all duration-300 px-5 py-3 rounded-full border border-transparent hover:border-gray-300/70 hover:bg-white/70 backdrop-blur-sm whitespace-nowrap cursor-pointer"
      />
    </motion.div>
  );
}

// Mobile NavLink with animation wrapper
interface MobileNavLinkProps extends NavLinkProps {
  index: number;
}

function MobileNavLink({ item, pathname, onClick, index }: MobileNavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <NavLink
        item={item}
        pathname={pathname}
        onClick={onClick}
        className="block text-lg font-medium tracking-[0.2em] text-gray-700 hover:text-gray-900 transition-all duration-300 py-3 px-6 rounded-2xl border border-transparent hover:border-gray-300/60 hover:bg-white/70 backdrop-blur-sm cursor-pointer"
      />
    </motion.div>
  );
}

// Contact button component
interface ContactButtonProps {
  pathname: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  isMobile?: boolean;
}

function ContactButton({ pathname, onClick, isMobile = false }: ContactButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full border border-gray-400/60 bg-white/80 px-8 text-sm tracking-[0.12em] text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white whitespace-nowrap";
  const mobileClasses = isMobile ? "block w-full text-center py-4" : "py-3";

  const content = (
    <a
      href={buildHref(pathname, CONTACT_ITEM.href)}
      onClick={(e) => onClick(e, CONTACT_ITEM.href)}
      className={`${baseClasses} ${mobileClasses} cursor-pointer`}
    >
      {CONTACT_ITEM.name}
    </a>
  );

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="ml-4"
    >
      {content}
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = useSmoothScroll(pathname, () => setIsOpen(false));

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--background)]/95 backdrop-blur-2xl border-b border-gray-300/50 shadow-[0_12px_40px_-32px_rgba(15,23,42,0.35)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[13px] font-semibold tracking-[0.42em] text-gray-800 uppercase whitespace-nowrap">
              Human Beings Inc.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {NAV_ITEMS.map((item) => (
              <DesktopNavLink
                key={item.name}
                item={item}
                pathname={pathname}
                onClick={handleNavClick}
              />
            ))}
            <ContactButton pathname={pathname} onClick={handleNavClick} />
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
                {NAV_ITEMS.map((item, index) => (
                  <MobileNavLink
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    onClick={handleNavClick}
                    index={index}
                  />
                ))}
                <ContactButton pathname={pathname} onClick={handleNavClick} isMobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

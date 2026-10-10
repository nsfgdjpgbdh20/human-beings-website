"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CONTACT_HREF, NAV_ITEMS } from "@/lib/site";
import { BrandMark } from "@/components/brand-mark";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ページ遷移したらモバイルメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escキーでモバイルメニューを閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Human Beings トップページ">
          <BrandMark className="h-7 w-7" />
          <span className="text-[15px] font-bold tracking-[0.02em] text-ink">Human Beings</span>
        </Link>

        <nav aria-label="メインメニュー" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="rounded-md px-3 py-2 text-[14px] font-medium text-ink-soft transition-colors hover:bg-[#ebebe4] hover:text-ink aria-[current=page]:text-ai"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <Link href={CONTACT_HREF} className="btn-primary min-h-10 px-5 text-[14px]">
                相談する
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-[#ebebe4] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="メインメニュー" className="border-t border-line bg-paper lg:hidden">
          <ul className="wrap flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-[#ebebe4]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <Link href={CONTACT_HREF} onClick={() => setOpen(false)} className="btn-primary w-full">
                相談する
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

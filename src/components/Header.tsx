"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-width flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Mediforma ホームへ移動">
          <Image src="/images/logo.svg" alt="Mediforma ロゴ" width={56} height={37} priority />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="メインナビゲーション">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-primaryNavy hover:text-primaryTeal" : "text-white hover:text-teal-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md border p-2 md:hidden ${
            isScrolled ? "border-slate-300" : "border-white/50"
          }`}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">メニュー</span>
          <div className="space-y-1">
            <span className={`block h-0.5 w-5 ${isScrolled ? "bg-primaryNavy" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 ${isScrolled ? "bg-primaryNavy" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 ${isScrolled ? "bg-primaryNavy" : "bg-white"}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.24 }}
            className="absolute right-0 top-16 w-72 border-l border-slate-200 bg-white p-6 shadow-xl md:hidden"
            aria-label="モバイルナビゲーション"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-primaryNavy"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

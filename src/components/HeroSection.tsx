"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const [titlePrefix, titleSuffix] = HERO_CONTENT.title.split("まるごと。");

  return (
    <section className="relative overflow-hidden bg-heroGradient pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-20 h-60 w-60 rounded-full border border-white/40" />
        <div className="absolute right-10 top-1/3 h-52 w-52 rounded-full border border-white/30" />
        <div className="absolute bottom-20 left-1/3 text-[220px] font-bold leading-none text-white/10">M</div>
      </div>

      <div className="container-width relative">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={fadeInUp} className="mb-4 text-sm font-medium tracking-[0.24em] text-teal-100">
            MEDICAL SOLUTIONS COMPANY
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl font-semibold leading-tight md:text-6xl">
            {titlePrefix}
            <span className="whitespace-nowrap">まるごと。</span>
            {titleSuffix}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 text-base leading-relaxed text-slate-100 md:text-lg">
            {HERO_CONTENT.description}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              href={HERO_CONTENT.primaryCta.href}
              className="rounded-full bg-primaryTeal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lightTeal"
            >
              {HERO_CONTENT.primaryCta.label}
            </Link>
            <Link
              href={HERO_CONTENT.secondaryCta.href}
              className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: "society" | "dx" | "education" | "consulting";
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-teal-50">
        <span aria-hidden>{renderIcon(icon)}</span>
      </div>
      <h3 className="text-xl font-semibold text-primaryNavy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-textGray">{description}</p>
      <Link href={href} className="mt-6 inline-block text-sm font-semibold text-primaryTeal hover:text-lightTeal">
        詳しく見る→
      </Link>
    </motion.article>
  );
}

function renderIcon(icon: ServiceCardProps["icon"]) {
  const common = "h-6 w-6";
  switch (icon) {
    case "society":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M4 9h16M6 9V7.5L12 4l6 3.5V9M7 9v8m3-8v8m4-8v8m3-8v8M4 19h16"
            stroke="#13223D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "dx":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <rect x="4" y="5" width="16" height="14" rx="3" stroke="#13223D" strokeWidth="1.8" />
          <path d="M8 11h8M8 14h5" stroke="#1F9993" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M12 5 4 9l8 4 8-4-8-4Zm0 8v6m-8-9v6l8 4 8-4v-6"
            stroke="#13223D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "consulting":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M8.5 12a2.5 2.5 0 1 0-5 0v1.5h5V12Zm12 0a2.5 2.5 0 1 0-5 0v1.5h5V12ZM8.5 13.5h7m-3.5-2v4"
            stroke="#13223D"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M9 16.5c1 .9 2 1.4 3 1.4s2-.5 3-1.4" stroke="#1F9993" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: string;
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
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lightGray text-2xl">
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-primaryNavy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-textGray">{description}</p>
      <Link href={href} className="mt-6 inline-block text-sm font-semibold text-primaryTeal hover:text-lightTeal">
        詳しく見る→
      </Link>
    </motion.article>
  );
}

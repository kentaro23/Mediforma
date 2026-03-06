"use client";

import { motion } from "framer-motion";

type StepFlowProps = {
  steps: readonly string[];
};

export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.32, delay: index * 0.08 }}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-subtleGray">STEP {index + 1}</p>
          <p className="mt-2 text-base font-semibold text-primaryNavy">{step}</p>
        </motion.li>
      ))}
    </ol>
  );
}

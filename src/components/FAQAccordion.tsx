"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article key={item.question} className="rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
            >
              <span className="font-medium text-primaryNavy">{item.question}</span>
              <span className="text-primaryTeal" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div id={`faq-${index}`} className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm text-textGray">
                {item.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "@/lib/constants";

function useCountUp(target: number, shouldStart: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      start = Math.floor(target * progress);
      setValue(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, shouldStart]);

  return value;
}

export default function CountUpSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-lightGray" aria-labelledby="results-heading">
      <div className="container-width" ref={ref}>
        <h2 id="results-heading" className="text-3xl font-semibold text-primaryNavy md:text-4xl">
          実績
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item) => (
            <CountUpCard
              key={item.label}
              label={item.label}
              target={item.value}
              suffix={item.suffix}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpCard({
  label,
  target,
  suffix,
  started
}: {
  label: string;
  target: number;
  suffix: string;
  started: boolean;
}) {
  const count = useCountUp(target, started);
  return (
    <article className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <p className="text-4xl font-semibold text-primaryTeal">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-textGray">{label}</p>
    </article>
  );
}

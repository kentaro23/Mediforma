import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { COMPANY, SERVICES, TIMELINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "会社概要",
  description: "Mediforma（メディフォーマ）の会社概要、事業内容、沿革を掲載しています。"
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">ABOUT</p>
          <h1 className="mt-2 text-4xl font-semibold">会社概要</h1>

          <dl className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">屋号</dt>
              <dd className="text-sm text-textGray">{COMPANY.name}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">形態</dt>
              <dd className="text-sm text-textGray">{COMPANY.type}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">代表</dt>
              <dd className="text-sm text-textGray">{COMPANY.representative}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">所在地</dt>
              <dd className="text-sm text-textGray">{COMPANY.address}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">設立</dt>
              <dd className="text-sm text-textGray">{COMPANY.established}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">メール</dt>
              <dd className="text-sm text-textGray">{COMPANY.mail}</dd>
            </div>
            <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-primaryNavy">電話</dt>
              <dd className="text-sm text-textGray">{COMPANY.tel}</dd>
            </div>
          </dl>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">事業内容</h2>
            <ul className="mt-4 grid gap-3 text-sm text-textGray md:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-primaryNavy">{service.name}</p>
                  <p className="mt-1">{service.summary}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">沿革（プレースホルダー）</h2>
            <ol className="mt-4 space-y-3 border-l-2 border-primaryTeal pl-5">
              {TIMELINE.map((item) => (
                <li key={item.year}>
                  <p className="text-sm font-semibold text-primaryNavy">{item.year}</p>
                  <p className="text-sm text-textGray">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}

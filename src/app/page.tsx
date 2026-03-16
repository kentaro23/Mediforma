import Link from "next/link";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import CountUpSection from "@/components/CountUpSection";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { FAMILY_SITES, MESSAGE, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mediforma | 医療の\"困った\"を、まるごと。",
  description:
    "学会運営代行、医療DX、医学部受験支援、AI導入コンサルティング。医療に関わるすべての課題をワンストップで解決するMediformaの公式サイトです。"
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding">
        <FadeIn className="container-width">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">SERVICES</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">サービス概要</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.name}
                description={service.summary}
                href={service.href}
              />
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="pb-16 md:pb-24">
        <FadeIn className="container-width">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">MEDIFORMA FAMILY</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">グループサイト</h2>
            <p className="mt-3 text-sm text-textGray">公開中のサイトへは下記から移動できます。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {FAMILY_SITES.map((site) =>
              site.href ? (
                <Link
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-primaryTeal">{site.status}</p>
                  <h3 className="mt-2 text-lg font-semibold text-primaryNavy">{site.name}</h3>
                  <p className="mt-1 text-sm text-textGray">{site.description}</p>
                </Link>
              ) : (
                <article
                  key={site.name}
                  className="rounded-2xl border border-dashed border-slate-300 bg-lightGray p-5"
                  aria-label={`${site.name} は準備中`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-subtleGray">{site.status}</p>
                  <h3 className="mt-2 text-lg font-semibold text-primaryNavy">{site.name}</h3>
                  <p className="mt-1 text-sm text-textGray">{site.description}</p>
                </article>
              )
            )}
          </div>
        </FadeIn>
      </section>

      <div className="ecg-divider" />

      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">MESSAGE</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">代表メッセージ</h2>
            <p className="mt-6 text-base leading-relaxed text-textGray">{MESSAGE.body}</p>
            <p className="mt-5 text-sm font-semibold text-primaryNavy">{MESSAGE.name}</p>
          </div>
          <PlaceholderImage label="IMAGE" className="min-h-[320px]" />
        </FadeIn>
      </section>

      <CountUpSection />
      <CTASection />
    </>
  );
}

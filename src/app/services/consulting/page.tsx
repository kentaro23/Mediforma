import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import PlaceholderImage from "@/components/PlaceholderImage";
import { SERVICE_DETAIL_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mediforma Consulting",
  description:
    "AI導入支援、DX戦略コンサルティング、広報支援まで伴走するMediforma Consultingの詳細ページです。"
};

export default function ConsultingPage() {
  return (
    <>
      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">MEDIFORMA CONSULTING</p>
          <h1 className="mt-2 text-4xl font-semibold">{SERVICE_DETAIL_CONTENT.consulting.title}</h1>
          <p className="mt-4 max-w-3xl text-textGray">
            {SERVICE_DETAIL_CONTENT.consulting.description}
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">提供サービス</h2>
            <ul className="mt-4 grid gap-3 text-sm text-textGray sm:grid-cols-2">
              {SERVICE_DETAIL_CONTENT.consulting.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="section-padding">
        <FadeIn className="container-width grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">{SERVICE_DETAIL_CONTENT.consulting.mockTitle}</h2>
            <p className="mt-4 text-textGray">{SERVICE_DETAIL_CONTENT.consulting.mockDescription}</p>
          </div>
          <PlaceholderImage label="IMAGE" className="min-h-[300px]" />
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}

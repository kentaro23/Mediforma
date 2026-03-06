import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import StepFlow from "@/components/StepFlow";
import FadeIn from "@/components/FadeIn";
import { FLOW_STEPS, SERVICE_DETAIL_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mediforma DX",
  description: "予約・問診・導線整備からAI活用まで、医療機関の業務効率化を支援するMediforma DXの詳細ページです。"
};

export default function DxPage() {
  return (
    <>
      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">MEDIFORMA DX</p>
          <h1 className="mt-2 text-4xl font-semibold">{SERVICE_DETAIL_CONTENT.dx.title}</h1>
          <p className="mt-4 max-w-3xl text-textGray">{SERVICE_DETAIL_CONTENT.dx.description}</p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">提供サービス</h2>
            <ul className="mt-4 grid gap-3 text-sm text-textGray sm:grid-cols-2">
              {SERVICE_DETAIL_CONTENT.dx.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="section-padding">
        <FadeIn className="container-width grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">{SERVICE_DETAIL_CONTENT.dx.mockTitle}</h2>
            <p className="mt-4 text-textGray">{SERVICE_DETAIL_CONTENT.dx.mockDescription}</p>
          </div>
          <PlaceholderImage label="IMAGE" className="min-h-[300px]" />
        </FadeIn>
      </section>

      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <h2 className="text-3xl font-semibold">導入の流れ</h2>
          <div className="mt-8">
            <StepFlow steps={FLOW_STEPS} />
          </div>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}

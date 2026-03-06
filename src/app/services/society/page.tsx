import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import StepFlow from "@/components/StepFlow";
import FadeIn from "@/components/FadeIn";
import { FLOW_STEPS, SERVICE_DETAIL_CONTENT, SOCIETY_FAQ } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mediforma Society",
  description: "学会事務局の運営代行、会員管理、会計事務まで。Mediforma Societyの詳細ページです。"
};

export default function SocietyPage() {
  return (
    <>
      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">MEDIFORMA SOCIETY</p>
          <h1 className="mt-2 text-4xl font-semibold">{SERVICE_DETAIL_CONTENT.society.title}</h1>
          <p className="mt-4 max-w-3xl text-textGray">{SERVICE_DETAIL_CONTENT.society.description}</p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">提供サービス</h2>
            <ul className="mt-4 grid gap-3 text-sm text-textGray sm:grid-cols-2">
              {SERVICE_DETAIL_CONTENT.society.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="section-padding">
        <FadeIn className="container-width">
          <h2 className="text-3xl font-semibold">導入の流れ</h2>
          <div className="mt-8">
            <StepFlow steps={FLOW_STEPS} />
          </div>
        </FadeIn>
      </section>

      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-8">
            <FAQAccordion items={[...SOCIETY_FAQ]} />
          </div>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { SERVICES, SERVICES_PAGE_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "サービス一覧",
  description: "Mediformaが提供する学会運営、医療DX、医学教育、AIコンサルティングの一覧ページです。"
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-lightGray">
        <FadeIn className="container-width">
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">SERVICES</p>
          <h1 className="mt-2 text-4xl font-semibold">{SERVICES_PAGE_CONTENT.title}</h1>
          <p className="mt-4 max-w-3xl text-textGray">{SERVICES_PAGE_CONTENT.description}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
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
      <CTASection />
    </>
  );
}

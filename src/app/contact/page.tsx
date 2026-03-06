import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { CONTACT, CONTACT_PAGE_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Mediformaへのお問い合わせページです。学会運営、医療DX、教育、コンサルティングのご相談を受け付けています。"
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-lightGray">
      <FadeIn className="container-width grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-subtleGray">CONTACT</p>
          <h1 className="mt-2 text-4xl font-semibold">{CONTACT_PAGE_CONTENT.title}</h1>
          <p className="mt-4 text-textGray">{CONTACT_PAGE_CONTENT.description}</p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">連絡先</h2>
            <p className="mt-3 text-sm text-textGray">メール: {CONTACT.email}</p>
            <p className="text-sm text-textGray">電話: {CONTACT.phone}</p>
          </div>
        </div>

        <ContactForm />
      </FadeIn>
    </section>
  );
}

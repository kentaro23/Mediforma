import Link from "next/link";

type CTASectionProps = {
  title?: string;
  buttonLabel?: string;
};

export default function CTASection({
  title = "まずはお気軽にご相談ください",
  buttonLabel = "お問い合わせ"
}: CTASectionProps) {
  return (
    <section className="section-padding bg-primaryNavy">
      <div className="container-width text-center">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-primaryTeal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lightTeal"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

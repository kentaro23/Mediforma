import type { Metadata } from "next";
import { PRIVACY_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Mediformaの個人情報保護方針です。"
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-width max-w-4xl">
        <h1 className="text-3xl font-semibold">プライバシーポリシー</h1>
        <div className="mt-8 space-y-7 text-sm leading-relaxed text-textGray">
          {PRIVACY_CONTENT.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-primaryNavy">{section.title}</h2>
              {"hasBullet" in section && section.hasBullet ? (
                <>
                  <p className="mt-2">{section.body[0]}</p>
                  <ul className="mt-2 list-disc pl-5">
                    {section.body.slice(1).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                section.body.map((line, index) => (
                  <p key={line} className={index === 0 ? "mt-2" : ""}>
                    {line}
                  </p>
                ))
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

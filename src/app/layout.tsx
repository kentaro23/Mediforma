import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mediforma | 医療の\"困った\"を、まるごと。",
    template: `%s | ${SITE_NAME}`
  },
  description:
    "学会運営代行、医療DX、医学部受験支援、AI導入コンサルティング。医療に関わるすべての課題をワンストップで解決するMediformaの公式サイトです。",
  openGraph: {
    type: "website",
    title: "Mediforma | 医療の\"困った\"を、まるごと。",
    description:
      "学会運営代行、医療DX、医学部受験支援、AI導入コンサルティング。医療に関わるすべての課題をワンストップで解決。",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Mediforma" }],
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediforma | 医療の\"困った\"を、まるごと。",
    description:
      "学会運営代行、医療DX、医学部受験支援、AI導入コンサルティング。医療に関わる課題を解決。",
    images: ["/images/og-image.png"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mediforma",
  url: SITE_URL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "080-9322-6024",
    email: "info@mediforma.jp",
    contactType: "customer support",
    availableLanguage: "Japanese"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${poppins.variable} ${notoSansJp.variable}`}>
      <body className="font-[var(--font-noto-sans-jp)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

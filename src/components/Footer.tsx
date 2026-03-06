import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primaryNavy text-white">
      <div className="container-width py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image src="/images/logo-white.svg" alt="Mediforma ロゴ" width={152} height={34} />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-slate-200">Site Map</h2>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-200 transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="text-slate-200 transition-colors hover:text-white" href="/privacy">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-slate-200">Contact</h2>
            <p className="text-sm text-slate-200">Mail: {CONTACT.email}</p>
            <p className="text-sm text-slate-200">Tel: {CONTACT.phone}</p>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-700 pt-6 text-xs text-slate-300">
          © 2026 Mediforma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

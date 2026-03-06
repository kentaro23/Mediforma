"use client";

import { FormEvent, useState } from "react";
import { CONTACT_TYPES } from "@/lib/constants";
import { submitContactForm } from "@/lib/contact";

type FormData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  type: CONTACT_TYPES[0],
  message: ""
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = "お名前は必須です。";
    }
    if (!data.email.trim()) {
      nextErrors.email = "メールアドレスは必須です。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません。";
    }
    if (!data.message.trim()) {
      nextErrors.message = "お問い合わせ内容は必須です。";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    await submitContactForm(data);

    setSubmitted(true);
    setData(initialData);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {submitted ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          お問い合わせありがとうございました。内容を確認のうえ、担当よりご連絡いたします。
        </div>
      ) : null}

      <form noValidate onSubmit={handleSubmit} className="mt-2 space-y-5" aria-label="お問い合わせフォーム">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-primaryNavy">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primaryTeal"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-primaryNavy">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primaryTeal"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primaryNavy">
            電話番号（任意）
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primaryTeal"
          />
        </div>

        <div>
          <label htmlFor="type" className="mb-2 block text-sm font-medium text-primaryNavy">
            お問い合わせ種別
          </label>
          <select
            id="type"
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primaryTeal"
          >
            {CONTACT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-primaryNavy">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primaryTeal"
          />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
        </div>

        <button
          type="submit"
          className="rounded-full bg-primaryTeal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lightTeal"
        >
          送信する
        </button>
      </form>
    </div>
  );
}

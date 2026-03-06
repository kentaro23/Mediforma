export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  type: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload) {
  // TODO: API接続時は `fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })` へ差し替え。
  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true, payload };
}

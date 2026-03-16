export const SITE_URL = "https://mediforma.vercel.app";

export const SITE_NAME = "Mediforma";

export const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス" },
  { href: "/about", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" }
] as const;

export const HERO_CONTENT = {
  title: "未来の医療を、共につくる",
  description:
    "学会運営からDX推進、医学教育、AI導入まで。Mediformaは医療に関わるすべての課題に寄り添います。",
  primaryCta: { label: "サービスを見る", href: "/services" },
  secondaryCta: { label: "お問い合わせ", href: "/contact" }
};

export const SERVICES = [
  {
    slug: "society",
    name: "Mediforma Society",
    heading: "がっかりさせない学会",
    summary: "がっかりさせない学会",
    icon: "society",
    href: "/services/society"
  },
  {
    slug: "dx",
    name: "Mediforma DX",
    heading: "忙しすぎる医療をスマートに",
    summary: "忙しすぎる医療をスマートに",
    icon: "dx",
    href: "/services/dx"
  },
  {
    slug: "education",
    name: "Mediforma Education",
    heading: "未来の医師を、共に育てる",
    summary: "未来の医師を、共に育てる",
    icon: "education",
    href: "/services/education"
  },
  {
    slug: "consulting",
    name: "Mediforma Consulting",
    heading: "医療に戦略とAIを",
    summary: "医療に戦略とAIを",
    icon: "consulting",
    href: "/services/consulting"
  }
] as const;

export const FAMILY_SITES = [
  {
    name: "Mediforma",
    description: "公式コーポレートサイト",
    href: "https://mediforma.jp",
    status: "公開中"
  },
  {
    name: "Mediforma Education",
    description: "医学教育・受験支援サイト",
    href: "https://mediformaedu.com",
    status: "公開中"
  },
  {
    name: "Mediforma Society",
    description: "学会運営支援サイト",
    href: null,
    status: "準備中"
  },
  {
    name: "Mediforma DX",
    description: "医療DX支援サイト",
    href: null,
    status: "準備中"
  },
  {
    name: "Mediforma Consulting",
    description: "AI導入・戦略支援サイト",
    href: null,
    status: "準備中"
  }
] as const;

export const MESSAGE = {
  name: "大原 健太郎（OHARA KENTARO）",
  body: "医療の現場には、まだまだ「もったいない」が溢れています。事務作業に追われる学会、非効率なオペレーションの医療機関、情報格差に悩む受験生。Mediformaは、テクノロジーと人の力で、その一つひとつを解決していきます。"
};

export const ACHIEVEMENTS = [
  { label: "学会運営支援数", value: 25, suffix: "件+" },
  { label: "DX導入実績", value: 18, suffix: "施設+" },
  { label: "受験指導実績", value: 120, suffix: "名+" },
  { label: "AI導入支援", value: 40, suffix: "案件+" }
] as const;

export const FLOW_STEPS = ["ヒアリング", "プラン提案", "運営開始", "定期レポート"];

export const SOCIETY_FAQ = [
  {
    question: "小規模学会でも依頼できますか？",
    answer:
      "はい。会員規模や運営体制に合わせて、必要な業務だけを切り出した支援も可能です。"
  },
  {
    question: "既存事務局からの引き継ぎは対応できますか？",
    answer:
      "運用フローや会員データの整理から並走し、移行期間中の問い合わせ対応も含めて支援します。"
  },
  {
    question: "会計や書類作成だけの依頼は可能ですか？",
    answer:
      "可能です。部分委託にも対応し、業務負担と予算に合わせて柔軟に設計します。"
  }
];

export const CONTACT_TYPES = [
  "学会運営について",
  "医療DXについて",
  "医学教育について",
  "コンサルティングについて",
  "その他"
] as const;

export const CONTACT = {
  email: "info@mediforma.jp",
  phone: "080-9322-6024"
};

export const COMPANY = {
  name: "Mediforma（メディフォーマ）",
  type: "個人事業",
  representative: "大原 健太郎",
  address: "（プレースホルダー）",
  established: "（プレースホルダー）",
  mail: CONTACT.email,
  tel: CONTACT.phone
};

export const TIMELINE = [
  { year: "2024", text: "Mediforma 設立（プレースホルダー）" },
  { year: "2025", text: "医療DX支援事業を拡充（プレースホルダー）" },
  { year: "2026", text: "教育・AI領域の連携体制を強化（プレースホルダー）" }
];

export const SERVICES_PAGE_CONTENT = {
  title: "事業一覧",
  description:
    "Mediformaは医療領域に特化した4つのサービスを展開しています。課題に応じて個別支援も包括支援も選択可能です。"
};

export const SERVICE_DETAIL_CONTENT = {
  society: {
    title: "がっかりさせない学会",
    description:
      "事務局の負担、会員管理の煩雑さ、問い合わせ対応の属人化など、学会運営の課題を一括でサポートします。",
    services: [
      "学会事務局運営代行",
      "総会・理事会運営支援",
      "会員管理 / 会費管理",
      "問い合わせ対応",
      "議事録・書類作成",
      "会計事務支援"
    ]
  },
  dx: {
    title: "忙しすぎる医療をスマートに",
    description:
      "予約が電話だけ、問診が紙、患者導線が非効率など、現場の課題を診療フローに合わせて改善します。",
    services: [
      "医療機関向け業務効率化SaaS",
      "予約 / 問診 / 案内導線整備",
      "LINE連携",
      "AI対応・業務自動化",
      "将来的な院内オペレーション最適化"
    ],
    mockTitle: "画面イメージ",
    mockDescription:
      "予約管理・問診入力・患者案内の一連のUIを想定したモックアップ枠です。実画面は後から差し替え可能です。"
  },
  education: {
    title: "未来の医師を、共に育てる",
    description:
      "医学部を目指す受験生と保護者に向けて、学習戦略・面接対策・教育コンテンツを一体で提供します。",
    services: [
      "医学部受験支援（個別指導）",
      "面接 / 小論文対策",
      "北里医学部特化支援",
      "医学教育コンテンツ開発",
      "教育ツール開発"
    ],
    mockTitle: "合格実績（プレースホルダー）",
    mockDescription:
      "合格実績・受講者の進路データを掲載するエリアです。公開可能な実績に合わせて随時更新できます。"
  },
  consulting: {
    title: "医療に戦略とAIを",
    description:
      "AI活用戦略の策定から運用体制構築まで、医療現場の実装フェーズに合わせて継続的に支援します。",
    services: [
      "AI導入支援・DX戦略コンサルティング",
      "AI活用戦略立案",
      "業務プロセス最適化",
      "医療系SNS運用代行",
      "広報支援",
      "事務代行・バックオフィス支援"
    ],
    mockTitle: "導入事例（プレースホルダー）",
    mockDescription:
      "業態別の導入例・成果指標を掲載予定のエリアです。ケーススタディに差し替えて活用できます。"
  }
} as const;

export const CONTACT_PAGE_CONTENT = {
  title: "お問い合わせ",
  description:
    "ご相談内容を確認後、担当より2営業日以内を目安にご返信します。まずはお気軽にお問い合わせください。"
};

export const PRIVACY_CONTENT = [
  {
    title: "1. 事業者情報",
    body: [
      "事業者名: Mediforma（メディフォーマ）",
      "代表者: 大原 健太郎",
      "連絡先: info@mediforma.jp / 080-9322-6024"
    ]
  },
  {
    title: "2. 個人情報の取得",
    body: [
      "当事業は、お問い合わせ対応およびサービス提供に必要な範囲で、適正かつ公正な手段により個人情報を取得します。"
    ]
  },
  {
    title: "3. 利用目的",
    body: [
      "取得した個人情報は、以下の目的で利用します。",
      "お問い合わせへの回答",
      "サービス提供および運用連絡",
      "サービス品質向上のための分析",
      "法令に基づく対応"
    ],
    hasBullet: true
  },
  {
    title: "4. 第三者提供",
    body: ["法令に定める場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。"]
  },
  {
    title: "5. 安全管理措置",
    body: ["個人情報の漏えい、滅失または毀損の防止等のため、合理的な安全管理措置を講じます。"]
  },
  {
    title: "6. 開示・訂正・削除等",
    body: ["ご本人から個人情報の開示、訂正、利用停止、削除等の請求があった場合、法令に従い適切に対応します。"]
  },
  {
    title: "7. 改定",
    body: ["本ポリシーは必要に応じて改定することがあります。改定後は本ページに掲載します。"]
  },
  {
    title: "8. 制定日",
    body: ["2026年3月6日"]
  }
] as const;

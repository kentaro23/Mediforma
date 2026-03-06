type PlaceholderImageProps = {
  label?: string;
  className?: string;
};

export default function PlaceholderImage({ label = "IMAGE", className = "" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`${label} プレースホルダー`}
      className={`flex min-h-56 items-center justify-center rounded-2xl border border-slate-300 bg-slate-200 text-sm font-semibold tracking-[0.18em] text-slate-500 ${className}`}
    >
      {label}
    </div>
  );
}

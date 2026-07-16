type Props = {
  label: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function PhotoPlaceholder({ label, ratio = "portrait", className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-dashed border-primary/30 bg-secondary/60 ${ratioClass[ratio]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, rgba(139,26,46,0.06) 12px 13px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
          Foto real · pendiente
        </span>
        <span className="font-display text-base text-foreground/80">{label}</span>
      </div>
    </div>
  );
}
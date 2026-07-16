/**
 * Elementos gráficos de marca — Ana M. Rey
 * Basados en el Manual de Identidad Visual (junio 2026).
 * Sello del amanecer + tres conectores (calma, abrigo, vínculo)
 * + isotipo "a" + firma manuscrita "Mia Millery".
 */

type MarkProps = {
  className?: string;
  title?: string;
};

/** Sello fijo de marca: amanecer.
 *  Línea de horizonte + arco naciente + punto centrado (el sol). */
export function AmanecerMark({ className = "", title = "Amanecer" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M20 45 A40 40 0 0 1 100 45"
        stroke="var(--terracotta)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="6" y1="45" x2="114" y2="45"
        stroke="var(--garnet-deep)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="60" cy="45" r="4.2" fill="var(--garnet-deep)" />
    </svg>
  );
}

/** Conector A · Calma — respiración serena. */
export function CalmaMark({ className = "", title = "Calma" }: MarkProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" role="img" aria-label={title} className={className}>
      <circle cx="14" cy="20" r="3.2" fill="var(--terracotta)" />
      <path
        d="M18 20 C 45 4, 65 36, 90 20 S 130 4, 142 20"
        stroke="var(--garnet)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="146" cy="20" r="3.2" fill="var(--terracotta)" />
    </svg>
  );
}

/** Conector B · Abrigo — el gesto que cobija. */
export function AbrigoMark({ className = "", title = "Abrigo" }: MarkProps) {
  return (
    <svg viewBox="0 0 160 60" fill="none" role="img" aria-label={title} className={className}>
      <path
        d="M12 46 Q 80 -6, 148 46"
        stroke="var(--terracotta)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="80" cy="34" r="4" fill="var(--garnet)" />
    </svg>
  );
}

/** Conector C · Vínculo — dos que se unen. */
export function VinculoMark({ className = "", title = "Vínculo" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" role="img" aria-label={title} className={className}>
      <circle cx="46" cy="30" r="22" stroke="var(--garnet)" strokeWidth="1.4" />
      <circle cx="74" cy="30" r="22" stroke="var(--terracotta)" strokeWidth="1.4" />
    </svg>
  );
}

/** Isotipo "a" — Playfair Display, en granate. */
export function IsotipoA({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center font-display text-primary leading-none ${className}`}
      style={{ fontStyle: "italic", fontWeight: 600 }}
    >
      a
    </span>
  );
}

/** Firma manuscrita "Mia Millery" en Allura (pseudónimo de ficción adulta). */
export function MiaMillerySignature({
  className = "",
  as: Tag = "span",
}: {
  className?: string;
  as?: "span" | "h1" | "h2";
}) {
  return (
    <Tag
      className={`font-script text-primary ${className}`}
      style={{ letterSpacing: "0", lineHeight: 1 }}
    >
      Mia Millery
    </Tag>
  );
}

/** Separador de sección con el sello del amanecer al centro. */
export function AmanecerDivider({
  label,
  connector = "amanecer",
  className = "",
}: {
  label?: string;
  connector?: "amanecer" | "calma" | "abrigo" | "vinculo";
  className?: string;
}) {
  const Mark =
    connector === "calma"
      ? CalmaMark
      : connector === "abrigo"
      ? AbrigoMark
      : connector === "vinculo"
      ? VinculoMark
      : AmanecerMark;

  return (
    <div className={`flex flex-col items-center gap-3 py-2 ${className}`}>
      <Mark className="h-10 w-auto md:h-12" />
      {label && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
          {label}
        </span>
      )}
    </div>
  );
}
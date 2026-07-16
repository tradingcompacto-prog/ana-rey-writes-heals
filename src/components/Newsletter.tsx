import { useState } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "light" | "garnet";
};

export function Newsletter({
  eyebrow = "Newsletter",
  title = "Cartas desde el barco",
  description = "Recibe, cada tanto, apuntes sobre neurodesarrollo, avances de los libros y pequeñas historias. Sin ruido, sin urgencia.",
  variant = "light",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(ok ? "ok" : "error");
    if (ok) setEmail("");
  };

  const isGarnet = variant === "garnet";

  return (
    <section
      className={
        isGarnet
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/60 text-foreground"
      }
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p
            className={`text-xs uppercase tracking-[0.25em] ${
              isGarnet ? "text-primary-foreground/70" : "text-primary/80"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
          <p
            className={`mt-4 max-w-md text-sm leading-relaxed ${
              isGarnet ? "text-primary-foreground/85" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        </div>
        <form onSubmit={onSubmit} className="w-full">
          <label htmlFor="nl-email" className="sr-only">
            Correo electrónico
          </label>
          <div
            className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:border sm:p-1.5 ${
              isGarnet
                ? "sm:border-primary-foreground/30 sm:bg-primary-foreground/5"
                : "sm:border-border sm:bg-background"
            }`}
          >
            <input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className={`w-full flex-1 rounded-full bg-transparent px-5 py-3 text-sm outline-none placeholder:opacity-60 ${
                isGarnet ? "text-primary-foreground" : "text-foreground"
              }`}
            />
            <button
              type="submit"
              className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                isGarnet
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Suscribirme
            </button>
          </div>
          <p
            className={`mt-3 min-h-[1.25rem] text-xs ${
              isGarnet ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
            aria-live="polite"
          >
            {status === "ok" && "Gracias. Revisa tu bandeja para confirmar."}
            {status === "error" && "Introduce un correo válido, por favor."}
            {status === "idle" && "Sin spam. Puedes darte de baja cuando quieras."}
          </p>
        </form>
      </div>
    </section>
  );
}
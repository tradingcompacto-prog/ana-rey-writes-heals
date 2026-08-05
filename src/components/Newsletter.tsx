import { useState } from "react";

type Props = {
  variant?: "light" | "garnet";
};

export function Newsletter({ variant = "light" }: Props) {
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
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div>
          <p
            className={`mb-3 text-xs font-medium uppercase tracking-widest ${
              isGarnet ? "text-primary-foreground/80" : "text-primary"
            }`}
          >
            NEWSLETTER semanal
          </p>
          <h2 className="font-display text-2xl md:text-3xl">
            Cada semana, un 1 % hacia un cuerpo que entiendes mejor
          </h2>
          <div
            className={`mt-4 space-y-3 text-sm leading-relaxed ${
              isGarnet ? "text-primary-foreground/85" : "text-muted-foreground"
            }`}
          >
            <p>
              No hace falta cambiarlo todo de golpe. El cuerpo mejora paso a
              paso, con pequeños gestos que se suman sin que apenas te des
              cuenta.
            </p>
            <p>Cada semana te mando dos cosas, cortitas:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Una reflexión que te haga mirar tu cuerpo de otra forma.
              </li>
              <li>
                Y un solo ejercicio, simple, para practicar esa semana.
              </li>
            </ul>
            <p>
              Si te convence, te lo quedas — se suma al anterior. Si no, no
              pasa nada: la semana que viene hay uno nuevo esperándote.
            </p>
            <p>
              Y de vez en cuando, algún apunte sobre mis novelas — porque
              escribir también es parte de cómo entiendo el cuerpo y la mente.
            </p>
            <p>Así, un 1 % cada semana, sin agobios ni promesas imposibles.</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="w-full md:pt-12">
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
              Quiero mi grado semanal →
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
            {status === "idle" && "Un email a la semana. Sin spam. Cancelas cuando quieras."}
          </p>
        </form>
      </div>
    </section>
  );
}
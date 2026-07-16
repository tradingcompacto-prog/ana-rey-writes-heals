import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Ana Muiño" },
      {
        name: "description",
        content:
          "Para consultas sobre los libros o dudas puntuales. Las citas clínicas de fisioterapia no se gestionan por la web.",
      },
      { property: "og:title", content: "Contacto — Ana Muiño" },
      {
        property: "og:description",
        content: "Escribe a Ana para consultas sobre libros o dudas puntuales.",
      },
    ],
  }),
  component: Contacto,
});

const schema = z.object({
  name: z.string().trim().min(1, "Introduce tu nombre").max(100),
  email: z.string().trim().email("Correo no válido").max(255),
  topic: z.enum(["libros", "duda", "prensa", "otro"]),
  message: z.string().trim().min(10, "Cuéntame un poco más").max(1500),
});

function Contacto() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      topic: form.get("topic"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">
          Contacto
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">
          Escríbeme.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Este formulario es para consultas sobre los libros, prensa o dudas
          puntuales. Léelo con calma:
        </p>

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-6 text-sm leading-relaxed">
          <p className="font-display text-lg text-primary">
            No gestiono citas de fisioterapia por la web.
          </p>
          <p className="mt-2 text-muted-foreground">
            Si buscas atención clínica, la vía correcta es contactar
            directamente con el centro donde ejerzo. Aquí solo respondo
            consultas sobre los libros o dudas concretas.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Nombre" error={errors.name}>
              <input
                name="name"
                type="text"
                maxLength={100}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </Field>
            <Field label="Correo electrónico" error={errors.email}>
              <input
                name="email"
                type="email"
                maxLength={255}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </Field>
          </div>
          <Field label="Motivo" error={errors.topic}>
            <select
              name="topic"
              defaultValue="libros"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            >
              <option value="libros">Consulta sobre los libros</option>
              <option value="duda">Duda puntual</option>
              <option value="prensa">Prensa / entrevista</option>
              <option value="otro">Otro</option>
            </select>
          </Field>
          <Field label="Mensaje" error={errors.message}>
            <textarea
              name="message"
              rows={6}
              maxLength={1500}
              className="w-full resize-y rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </Field>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Enviar mensaje
            </button>
            {status === "ok" && (
              <p className="text-sm text-primary">
                Gracias. Te responderé en cuanto pueda.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Revisa los campos marcados.
              </p>
            )}
          </div>
        </form>
      </section>

      <Newsletter />
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
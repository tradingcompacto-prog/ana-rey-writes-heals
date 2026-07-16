import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Newsletter } from "@/components/Newsletter";
import {
  AmanecerMark,
  CalmaMark,
  MiaMillerySignature,
} from "@/components/brand/BrandMarks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Muiño — Fisioterapeuta y escritora" },
      {
        name: "description",
        content:
          "Dos mundos que conviven: la consulta clínica de Ana M. Rey y sus libros para entender la infancia y el cuerpo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO — fisio primero como puerta de entrada */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
          <div>
            <div className="flex items-center gap-4">
              <AmanecerMark className="h-8 w-auto" />
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Ana M. Rey — Fisioterapeuta · Osteópata
              </p>
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Enseñando a entender
              <br />
              y cuidar el cuerpo
              <br />
              <span className="text-primary">desde el nacimiento.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              16 años de práctica clínica especializada en control postural y
              neurodesarrollo — bebés, niños y adultos. Actualmente en el
              Hospital Universitario de Ginebra (HUG).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/fisioterapeuta"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Conocer su trabajo clínico
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Escribir a Ana
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Bloque de madera detrás del retrato — textura sutil */}
            <div
              className="wood-grain absolute -inset-4 -z-0 rounded-2xl opacity-90"
              aria-hidden
            />
            <PhotoPlaceholder
              label="Retrato profesional de Ana en consulta"
              ratio="portrait"
              className="relative shadow-xl shadow-primary/10"
            />
          </div>
        </div>
      </section>

      {/* Mi propósito */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Marca gráfica grande, sin texto, como horizonte de sección */}
          <div className="mb-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-border" />
            <CalmaMark className="h-16 w-auto md:h-24" />
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-14 md:grid-cols-[1fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Manifiesto
              </p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Mi propósito
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Hacer que el conocimiento del cuerpo sea accesible para todas
                las personas, en todas las etapas de la vida — no solo en la
                consulta, sino en el día a día. Democratizar el conocimiento
                clínico que suele quedarse encerrado entre cuatro paredes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PURPOSE_PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <p className="font-display text-xl text-primary">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Descubrimiento: los dos mundos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            Dos mundos, una misma mirada
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            La consulta y los libros conviven en la misma persona.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Todo lo que Ana escribe nace de lo que ve cada semana en la
            consulta: cómo un cuerpo aprende a sostenerse, a moverse, a estar
            en el mundo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <WorldCard
            eyebrow="Ana M. Rey"
            title="Fisioterapeuta"
            body="Control postural y neurodesarrollo, para bebés, niños y adultos. Hospital Universitario de Ginebra."
            cta="Ver trayectoria clínica"
            to="/fisioterapeuta"
            accent
          />
          <WorldCard
            eyebrow="Ana M. Rey"
            title="No ficción e infantil"
            body="La colección El Barco de los Amigos y un ensayo en curso sobre desarrollo motor infantil."
            cta="Descubrir los libros"
            to="/no-ficcion"
          />
          <WorldCard
            eyebrow="Pseudónimo · ficción adulta"
            title="Ficción adulta"
            body="Un heterónimo para novela adulta. Espacio propio, tono propio."
            cta="Entrar en Mia Millery"
            to="/mia-millery"
          />
        </div>
      </section>

      {/* Lema / cita */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <AmanecerMark className="mx-auto h-14 w-auto" />
        <blockquote className="mt-8 font-display text-3xl leading-snug text-foreground md:text-4xl">
          <span className="italic">Entender</span> para{" "}
          <span className="italic">cuidar.</span>
        </blockquote>
      </section>

      <Newsletter variant="garnet" />
    </>
  );
}

const PURPOSE_PILLARS = [
  {
    title: "El cuerpo se aprende",
    body: "Neurodesarrollo desde el nacimiento.",
  },
  {
    title: "Todo conecta",
    body: "Postura, cerebro, parto y suelo pélvico — un mismo sistema.",
  },
  {
    title: "El postparto es fisioterapia",
    body: "El cuerpo de la madre también merece atención.",
  },
  {
    title: "Entender cambia decisiones",
    body: "No se trata de hacer más, sino de saber por qué.",
  },
];

function WorldCard({
  eyebrow,
  title,
  body,
  cta,
  to,
  accent,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: "/fisioterapeuta" | "/no-ficcion" | "/mia-millery";
  accent?: boolean;
}) {
  const isMia = to === "/mia-millery";
  return (
    <Link
      to={to}
      className={`group flex flex-col justify-between rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
        accent
          ? "border-primary/30 bg-background"
          : "border-border bg-background"
      }`}
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80">
          {eyebrow}
        </p>
        {isMia ? (
          <MiaMillerySignature as="h2" className="mt-3 text-4xl leading-none" />
        ) : (
          <h3 className="mt-3 font-display text-2xl">{title}</h3>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
        {cta}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

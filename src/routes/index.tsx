import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Newsletter } from "@/components/Newsletter";
import {
  AmanecerMark,
  MiaMillerySignature,
} from "@/components/brand/BrandMarks";
import dosMundosIcon from "@/assets/dos-mundos.png.asset.json";

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
                Fisioterapeuta · Osteópata
              </p>
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Enseño a entender
              <br />
              y cuidar el cuerpo
              <br />
              <span className="text-primary">desde el nacimiento.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Llevo 16 años de práctica clínica especializada en control postural
              y neurodesarrollo — bebés, niños y adultos. Actualmente en el
              Hospital Universitario de Ginebra (HUG).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/fisioterapeuta"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Conocer mi trabajo clínico
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Escribirme
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

      {/* Mis dos mundos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              src={dosMundosIcon.url}
              alt=""
              className="h-10 w-auto md:h-12"
              aria-hidden
            />
            <h2 className="text-center font-display text-3xl md:text-4xl">
              Mis dos mundos
            </h2>
          </div>
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-border" />
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
              Dos miradas, una misma curiosidad
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <WorldCard
            eyebrow="Mundo 01"
            title="La fisioterapeuta"
            body="Control postural y neurodesarrollo, con 16 años de trayectoria clínica en el Hospital Universitario de Ginebra. Atiendo en el hospital — aquí comparto quién soy y a qué me dedico."
            cta="Conocer mi trayectoria"
            to="/fisioterapeuta"
            accent
          />
          <WorldCard
            eyebrow="Mundo 02 · ¿Sabías esto?"
            title="También soy escritora"
            body="Como Mia Millery escribo ficción — thrillers psicológicos con mucho de resiliencia y de todo lo que no se dice en voz alta. La misma curiosidad por la mente, contada de otra forma."
            cta="Descubrir mis libros"
            to="/mia-millery"
          />
        </div>
      </section>

      {/* Mi propósito — frase suelta */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
          Mi propósito es hacer que el conocimiento del cuerpo sea accesible
          para todas las personas, en todas las etapas de la vida.
        </p>
      </section>

      {/* Quién soy */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Sobre mí
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Quién soy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La fisio que conecta el cuerpo desde el primer día de vida hasta
              la adultez
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_1.25fr]">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy Ana Muiño, fisioterapeuta y osteópata especializada en
                control postural y neurodesarrollo, con 16 años de práctica
                clínica, incluyendo mi paso por el Hospital Universitario de
                Ginebra (HUG). Acompaño a bebés, niños, mujeres embarazadas y
                adultos en procesos de recuperación, aprendizaje y cuidado
                corporal.
              </p>
              <p>
                No solo trato — enseño. Mi objetivo es que entiendas tu cuerpo y
                el de tu familia lo suficiente como para cuidarlo con criterio
                propio, no con miedo ni con reglas impuestas. Hablo desde la
                evidencia y desde 16 años de experiencia real, sin alarmar y
                sin simplificar en exceso.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 font-display text-xl text-foreground">
                "El cuerpo se aprende. Y se puede enseñar."
              </blockquote>
              <p>
                Ejerzo en el Hospital Universitario de Ginebra — no paso
                consulta a través de esta web, es simplemente mi carta de
                presentación. Si tienes una duda puntual, puedes escribirme.
              </p>
              <p>
                Y además de fisio, soy escritora. Fisioterapeuta y escritora —
                no una cosa u otra. Todo lo que escribo, en consulta o en mis
                novelas como Mia Millery, parte del mismo interés: entender el
                cuerpo y la mente.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ABOUT_PILLARS.map((p) => (
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

const ABOUT_PILLARS = [
  {
    title: "Rigor",
    body: "Todo lo que digo está respaldado por la ciencia y la experiencia clínica.",
  },
  {
    title: "Claridad",
    body: "Información compleja, explicada sin sacrificar la verdad.",
  },
  {
    title: "Calma sobre alarma",
    body: "Reduzco la ansiedad. Nunca la genero.",
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


import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Newsletter } from "@/components/Newsletter";
import { AmanecerMark, AmanecerDivider } from "@/components/brand/BrandMarks";
import anaAtendiendo from "@/assets/ana-atendiendo-hug.jpg.asset.json";

export const Route = createFileRoute("/fisioterapeuta")({
  head: () => ({
    meta: [
      { title: "Ana M. Rey — Fisioterapeuta y osteópata" },
      {
        name: "description",
        content:
          "16 años de práctica clínica en control postural y neurodesarrollo. Bebés, niños y adultos. Hospital Universitario de Ginebra (HUG).",
      },
      { property: "og:title", content: "Ana M. Rey — Fisioterapeuta" },
      {
        property: "og:description",
        content:
          "Especialización en control postural y neurodesarrollo. Carta de presentación clínica.",
      },
    ],
  }),
  component: Fisio,
});

function Fisio() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative">
            <div className="wood-grain absolute -inset-4 rounded-2xl" aria-hidden />
            <img
              src={anaAtendiendo.url}
              alt="Ana atendiendo en la consulta del HUG"
              className="relative w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <AmanecerMark className="h-8 w-auto" />
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Fisioterapeuta · Osteópata
              </p>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Mi mirada al cuerpo empieza en la cuna.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Desde hace 16 años acompaño a familias y pacientes a entender cómo
              se construye el movimiento humano. Trabajo con bebés, niños y
              adultos con foco en control postural y neurodesarrollo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Actualmente ejerzo en el Hospital Universitario de Ginebra (HUG),
              donde integro la práctica clínica con la formación continua y el
              trabajo interdisciplinar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <AmanecerDivider connector="calma" className="mb-8" />
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            Especialización
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-4xl">
            Control postural y neurodesarrollo, a cualquier edad.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SPECIALTIES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <p className="font-display text-xl text-primary">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">
          Formación
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-4xl">
          Lo que he estudiado para acompañar mejor.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {TRAINING.map((t) => (
            <div
              key={t.school}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <p className="font-display text-lg text-primary">{t.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">
          Cómo trabajo
        </p>
        <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
          “No es todo blanco o negro.
          <br className="hidden sm:block" /> Yo doy la información, y luego
          cada uno decide.”
        </blockquote>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Mi trabajo no es imponer un camino, sino explicar lo que veo para que
          cada familia o persona pueda tomar decisiones con criterio.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AmanecerDivider connector="abrigo" className="mb-10" />
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Trayectoria
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              16 años entre consulta, hospital y formación.
            </h2>
            <ol className="mt-10 space-y-8 border-l border-border pl-8">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <p className="font-display text-lg">{t.title}</p>
                  <p className="text-xs uppercase tracking-widest text-primary/80">
                    {t.year}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <PhotoPlaceholder label="Detalle de trabajo con un bebé" ratio="square" />
            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 text-sm leading-relaxed text-foreground">
              <p className="font-display text-lg text-primary">Nota importante</p>
              <p className="mt-2 text-muted-foreground">
                Esta página es una carta de presentación profesional. Las citas
                clínicas no se gestionan a través de la web.
              </p>
              <Link
                to="/contacto"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Contactar para dudas puntuales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

const SPECIALTIES = [
  {
    title: "Bebés y primera infancia",
    body: "Acompaño el desarrollo motor temprano, plagiocefalias, tortícolis, retrasos madurativos y dificultades de sostén.",
  },
  {
    title: "Niños y adolescentes",
    body: "Abordo trastornos del neurodesarrollo, coordinación, tono muscular y postura en la etapa escolar.",
  },
  {
    title: "Adultos",
    body: "Trato la rehabilitación neurológica, el control postural, el dolor crónico y el trabajo osteopático integrativo.",
  },
];

const TRAINING = [
  {
    title: "Fisioterapia",
    school: "Universidade da Coruña (UDC)",
  },
  {
    title: "Osteopatía",
    school: "Escuela del Concepto Osteopático",
  },
  {
    title: "Hypnoparto",
    school: "Hypnobirthing Método Mongan",
  },
  {
    title: "Reeducación del suelo pélvico",
    school: "Instituto de pelviperineología de París",
  },
  {
    title: "Control postural y Concepto Bobath",
    school: "Hospital Universitario de Ginebra (HUG)",
  },
];

const TIMELINE = [
  {
    year: "Actualidad",
    title: "Hospital Universitario de Ginebra (HUG)",
    body: "Integro mi práctica clínica en un entorno hospitalario multidisciplinar.",
  },
  {
    year: "Formación continua",
    title: "Osteopatía y neurodesarrollo",
    body: "Me formo específicamente en abordajes centrados en el sistema nervioso central y el desarrollo motor infantil.",
  },
  {
    year: "+16 años",
    title: "Práctica clínica",
    body: "Llevo más de 16 años de trayectoria continuada tratando a familias, bebés, niños y adultos.",
  },
];
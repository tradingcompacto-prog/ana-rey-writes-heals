import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Newsletter } from "@/components/Newsletter";
import { AmanecerMark, AmanecerDivider } from "@/components/brand/BrandMarks";
import anaHero from "@/assets/ana-escritora-1.jpg.asset.json";
import anaRiendo from "@/assets/ana-escritora-2.png.asset.json";

export const Route = createFileRoute("/no-ficcion")({
  head: () => ({
    meta: [
      { title: "Ana M. Rey — No ficción e infantil" },
      {
        name: "description",
        content:
          "La colección infantil El Barco de los Amigos y un libro de no ficción en curso sobre desarrollo motor infantil, firmados por Ana M. Rey.",
      },
      { property: "og:title", content: "Ana M. Rey — Libros" },
      {
        property: "og:description",
        content:
          "Tilo y Mera navegan en un barco mágico ayudando a personajes con dificultades del neurodesarrollo.",
      },
    ],
  }),
  component: NoFiccion,
});

function NoFiccion() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:items-center">
          <div>
            <AmanecerMark className="h-10 w-auto" />
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-primary">
              Ana M. Rey — No ficción
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Escribir para explicar
              <br /> lo que veo en la consulta.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cuentos y ensayo firmados con el mismo nombre con el que atiendo:
              porque nacen del mismo trabajo, del mismo cuidado, de la misma
              mirada al neurodesarrollo.
            </p>
          </div>
          <div className="relative">
            <div className="wood-grain absolute -inset-4 rounded-2xl" aria-hidden />
            <img
              src={anaHero.url}
              alt="Ana con una taza y un ejemplar de Muñeca de Papel"
              className="relative aspect-[3/4] w-full rounded-lg object-cover shadow-xl shadow-primary/10"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AmanecerDivider connector="abrigo" label="Abrigo · el gesto que cobija" className="mb-10" />
        <p className="text-xs uppercase tracking-[0.28em] text-primary">
          Colección infantil
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          El Barco de los Amigos
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tilo y Mera viajan en un barco mágico. En cada puerto encuentran a un
          nuevo personaje con una dificultad del neurodesarrollo y aprenden,
          juntos, a acompañarla.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {BOOKS.map((b) => (
            <article
              key={b.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <PhotoPlaceholder
                label={`Portada — ${b.title}`}
                ratio="portrait"
                className="!rounded-none border-x-0 border-t-0"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary/80">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
                <p className="mt-4 text-xs text-primary">{b.status}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="pt-16">
          <AmanecerDivider connector="calma" label="En proceso" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.15fr] md:items-center">
          <img
            src={anaRiendo.url}
            alt="Ana riendo con una pila de libros entre las manos"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-lg shadow-primary/10"
            loading="lazy"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              En proceso
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Un libro de no ficción sobre desarrollo motor infantil.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un ensayo divulgativo para familias y profesionales, con lo que
              Ana quiere que se sepa desde el nacimiento sobre cómo se aprende
              a moverse.
            </p>
            <p className="mt-3 text-sm text-primary">
              Publicación prevista — próximamente.
            </p>
          </div>
        </div>
      </section>

      <Newsletter
        variant="garnet"
        title="Cartas desde el barco"
        description="Novedades de la colección, lecturas y avances del libro en curso. Directo desde el escritorio de Ana."
      />
    </>
  );
}

const BOOKS = [
  {
    eyebrow: "El Barco de los Amigos · 1",
    title: "Tilo y Mera zarpan",
    body: "El primer viaje. Tilo y Mera descubren el barco mágico y conocen a su primer amigo.",
    status: "Publicado",
  },
  {
    eyebrow: "El Barco de los Amigos · 2",
    title: "El amigo que no encontraba las palabras",
    body: "Una historia sobre el ritmo propio de cada niño para expresarse y ser comprendido.",
    status: "Publicado",
  },
  {
    eyebrow: "El Barco de los Amigos · 3",
    title: "Próximo puerto",
    body: "Un nuevo destino, un nuevo personaje, una nueva forma de acompañar el neurodesarrollo.",
    status: "En preparación",
  },
];
import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Newsletter } from "@/components/Newsletter";
import { MiaMillerySignature, AmanecerDivider } from "@/components/brand/BrandMarks";
import anaMia from "@/assets/ana-escritora-3.png.asset.json";

export const Route = createFileRoute("/mia-millery")({
  head: () => ({
    meta: [
      { title: "Mia Millery — Ficción adulta" },
      {
        name: "description",
        content:
          "Mia Millery es el heterónimo de Ana Muiño para ficción adulta. Un espacio literario propio.",
      },
      { property: "og:title", content: "Mia Millery — Ficción adulta" },
      {
        property: "og:description",
        content: "Novela adulta bajo el heterónimo Mia Millery.",
      },
    ],
  }),
  component: Mia,
});

function Mia() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="wood-grain absolute inset-0 opacity-70" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Heterónimo · Ficción adulta
            </p>
            <MiaMillerySignature
              as="h1"
              className="mt-6 block text-[4.5rem] leading-none md:text-[7rem]"
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Bajo este nombre Ana firma su ficción adulta. Un espacio propio,
              con voz propia — separado de la consulta clínica y de la no
              ficción.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Novelas en las que caben el deseo, la memoria y las decisiones
              adultas que nadie enseña a tomar.
            </p>
          </div>
          <img
            src={anaMia.url}
            alt="Ana apoyada sobre una pila de libros, retrato editorial"
            className="relative aspect-[3/4] w-full rounded-lg object-cover shadow-xl shadow-primary/10"
            loading="eager"
          />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <AmanecerDivider connector="calma" label="Calma" className="mb-6" />
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            Obra
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Próximamente.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Las próximas novelas y publicaciones aparecerán aquí. Si quieres
            enterarte cuando llegue la primera, apúntate abajo.
          </p>
        </div>
      </section>

      <Newsletter
        variant="garnet"
        title="Cartas de Mia Millery"
        description="Aviso cuando salga una nueva novela, adelantos y algún texto escrito solo para quienes están aquí."
      />
    </>
  );
}
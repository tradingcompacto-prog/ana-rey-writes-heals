import { createFileRoute, Link } from "@tanstack/react-router";
import { AmanecerMark } from "@/components/brand/BrandMarks";

export const Route = createFileRoute("/historico")({
  head: () => ({
    meta: [
      { title: "Histórico de la newsletter — Ana M. Rey" },
      {
        name: "description",
        content:
          "Todos los números de la newsletter de Ana M. Rey: retos pequeños, poco a poco, fáciles de aplicar y que siempre sumen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Histórico de la newsletter — Ana M. Rey" },
      {
        property: "og:description",
        content:
          "Retos pequeños, poco a poco, fáciles de aplicar y que siempre sumen. Un 1 % con cada pequeño gesto.",
      },
    ],
  }),
  component: Historico,
});

type Numero = {
  n: string;
  mes: string;
  titulo: string;
  extracto: string;
  disponible: boolean;
};

const NUMEROS: Numero[] = [
  {
    n: "01",
    mes: "Primer número",
    titulo: "Abrazo",
    extracto:
      "El reto de este mes: dar un abrazo de verdad al día. De esos que curan el alma. Como mínimo, veinte segundos.",
    disponible: true,
  },
  {
    n: "02",
    mes: "Próximo mes",
    titulo: "En camino",
    extracto: "Cada mes un reto nuevo que te haga reflexionar. Y que sume.",
    disponible: false,
  },
];

function Historico() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Newsletter · números anteriores
        </p>
        <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
          Histórico de{" "}
          <em className="italic text-primary">newsletter</em>
        </h1>
        <div className="mx-auto mt-8 h-px w-16 bg-primary/30" />
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Aquí van quedando los retos que he ido compartiendo, uno a uno.
          No hace falta un cambio de vida radical: lo simple nos permite
          constancia sin agobios.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="border-y border-border/70">
          {NUMEROS.map((numero, i) => (
            <article
              key={numero.n}
              className={`group px-4 py-10 transition-colors duration-500 md:flex md:items-center md:justify-between ${
                i > 0 ? "border-t border-border/60" : ""
              } ${numero.disponible ? "hover:bg-secondary/40" : ""}`}
            >
              <div className="flex items-start gap-8 md:gap-16">
                <span className="text-2xl font-light tabular-nums text-primary/25">
                  {numero.n}
                </span>
                <div>
                  <p className="mb-1 whitespace-nowrap text-xs uppercase tracking-widest text-muted-foreground">
                    {numero.mes}
                  </p>
                  <h2
                    className={`font-display text-3xl leading-tight md:text-4xl ${
                      numero.disponible
                        ? "group-hover:translate-x-2 transition-transform duration-500"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {numero.titulo}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:hidden">
                    {numero.extracto}
                  </p>
                </div>
              </div>
              <p
                className={`mt-4 max-w-sm text-sm italic leading-relaxed text-muted-foreground md:mt-0 md:text-right ${
                  numero.disponible ? "" : "text-muted-foreground/60"
                }`}
              >
                {numero.extracto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <Link
            to="/"
            hash="newsletter"
            className="border-b border-primary pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary transition-colors hover:text-primary/80"
          >
            Quiero recibirla
          </Link>
          <AmanecerMark className="mt-16 h-16 w-auto opacity-80" />
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — Ana Muiño" },
      { name: "description", content: "Aviso legal del sitio web de Ana Muiño." },
      { property: "og:title", content: "Aviso legal — Ana Muiño" },
      { property: "og:description", content: "Aviso legal del sitio web de Ana Muiño." },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Aviso legal</h1>
      <p className="mt-6 text-muted-foreground">Contenido próximamente.</p>
    </section>
  );
}

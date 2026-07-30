import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Ana Muiño" },
      { name: "description", content: "Política de privacidad del sitio web de Ana Muiño." },
      { property: "og:title", content: "Política de privacidad — Ana Muiño" },
      { property: "og:description", content: "Política de privacidad del sitio web de Ana Muiño." },
    ],
  }),
  component: PoliticaPrivacidad,
});

function PoliticaPrivacidad() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.28em] text-primary">Privacidad</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Política de privacidad</h1>
      <p className="mt-6 text-muted-foreground">Contenido próximamente.</p>
    </section>
  );
}

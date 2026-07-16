import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AmanecerMark, IsotipoA } from "@/components/brand/BrandMarks";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ana Muiño — Fisioterapeuta y escritora" },
      {
        name: "description",
        content:
          "Ana M. Rey: fisioterapeuta especializada en control postural y neurodesarrollo. También escritora de literatura infantil y no ficción.",
      },
      { name: "author", content: "Ana Muiño" },
      { property: "og:title", content: "Ana Muiño — Fisioterapeuta y escritora" },
      {
        property: "og:description",
        content:
          "Dos mundos, una misma mirada al cuerpo y a la infancia: consulta clínica y libros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&family=Allura&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}

function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const linkBase =
    "text-sm text-foreground/70 hover:text-primary transition-colors";
  const activeCls = "text-primary font-medium";
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="font-display text-lg tracking-tight text-primary">
            Ana&nbsp;M.&nbsp;Rey
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: activeCls }} className={linkBase}>
            Inicio
          </Link>
          <Link to="/fisioterapeuta" activeProps={{ className: activeCls }} className={linkBase}>
            Fisioterapeuta
          </Link>
          <Link to="/no-ficcion" activeProps={{ className: activeCls }} className={linkBase}>
            No ficción
          </Link>
          <Link to="/mia-millery" activeProps={{ className: activeCls }} className={linkBase}>
            Mia Millery
          </Link>
          <Link to="/contacto" activeProps={{ className: activeCls }} className={linkBase}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <AmanecerMark className="h-8 w-auto" />
            <p className="font-display text-lg text-primary">Ana&nbsp;M.&nbsp;Rey</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Fisioterapeuta · osteópata · escritora.
          </p>
          <p className="mt-3 font-display italic text-primary/80">
            Claridad y luz, siempre.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium text-foreground">Navegación</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/fisioterapeuta" className="hover:text-primary">Ana M. Rey — Fisioterapeuta</Link></li>
            <li><Link to="/no-ficcion" className="hover:text-primary">Ana M. Rey — No ficción</Link></li>
            <li><Link to="/mia-millery" className="hover:text-primary">Mia Millery — Ficción adulta</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 font-medium text-foreground">Nota</p>
          <p>
            Las citas clínicas no se gestionan desde esta web. Esta página es
            carta de presentación profesional y espacio literario.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ana Muiño. Todos los derechos reservados.
      </div>
    </footer>
  );
}

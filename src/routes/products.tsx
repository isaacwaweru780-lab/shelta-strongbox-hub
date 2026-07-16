import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: ProductsLayout,
});

function ProductsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/products/$slug");
  return isChild ? <Outlet /> : <ProductsIndex />;
}

import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

function ProductsIndex() {
  return (
    <div>
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Products</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight text-foreground md:text-6xl">
            Packaging engineered for every industry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From heavy-duty industrial cartons to ventilated horticulture boxes and custom die-cut
            packaging — explore our full range.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl text-foreground">{p.name}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

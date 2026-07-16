import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Shelta Packaging" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Shelta Packaging Ltd` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} — Shelta Packaging Ltd` },
        { property: "og:description", content: product.short },
        { property: "og:image", content: product.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
        { name: "twitter:image", content: product.image },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-8 pt-6 md:grid-cols-2 md:gap-16 md:px-8 md:pb-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={product.image}
            alt={product.name}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Product</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Typical uses
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.uses.map((u) => (
                <li key={u} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {u}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              search={{ product: product.slug }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="font-display text-3xl text-foreground">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
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
                  <h3 className="font-display text-lg text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

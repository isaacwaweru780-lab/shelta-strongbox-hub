import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Leaf, Truck, Sparkles, Factory, Building2, BadgeCheck, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg.asset.json";
import factoryImg from "@/assets/factory.jpg.asset.json";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const industries = [
  "Horticulture",
  "Pharmaceuticals",
  "Food & Beverage",
  "Industrial",
  "FMCG",
  "Custom Branded",
];

const capabilities = [
  {
    icon: Building2,
    label: "State-of-the-Art Facility",
    body: "High-volume production capacity based in Ruiru–Mugutha, ensuring timely delivery nationwide.",
  },
  {
    icon: BadgeCheck,
    label: "Quality Assurance",
    body: "Rigorous edge-crush and burst-strength testing to meet industry compliance and standards.",
  },
  {
    icon: Globe2,
    label: "Sustainable Materials",
    body: "Committed to eco-friendly, recyclable Kraft paper solutions for a greener supply chain.",
  },
];

const values = [
  { icon: ShieldCheck, label: "Built to protect", body: "Engineered strength across every ply." },
  { icon: Truck, label: "Delivered on time", body: "Reliable schedules from Ruiru." },
  { icon: Leaf, label: "Sustainable stock", body: "Recyclable kraft-based materials." },
  { icon: Sparkles, label: "Custom to your brand", body: "Print, die-cut and finish to spec." },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImg.url}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent ring-1 ring-white/15 backdrop-blur">
              <Factory className="h-3.5 w-3.5" /> East Africa's Trusted Manufacturer
            </span>
            <div className="mx-auto mt-3 h-px w-24 bg-accent/80" />
            <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] text-white md:text-7xl">

              Industrial Strength.
              <br />
              <span className="text-accent">Precision Packaging.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Delivering durable, cost-effective corrugated packaging solutions designed to
              protect your products, enhance your brand, and optimize your supply chain.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                View Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground/5"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Capability cards */}
          <div className="mt-16 grid gap-4 rounded-xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur md:mt-20 md:grid-cols-3 md:gap-8 md:p-8">
            {capabilities.map(({ icon: Icon, label, body }) => (
              <div key={label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-foreground">{label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground md:px-8">
          {industries.map((i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" /> {i}
            </span>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Why Shelta</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Packaging that earns your customer's trust.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {values.map(({ icon: Icon, label, body }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="border-y border-border/60 bg-muted/40 kraft-texture">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">What we make</span>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
                Our packaging range
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent"
            >
              See all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
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
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={factoryImg.url}
            alt="Inside the Shelta Packaging factory"
            width={1400}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Our mission</span>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Deliver packaging that protects products and elevates brands.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Many years of manufacturing experience across horticulture, pharmaceuticals, food and
            beverage, and industrial packaging. We partner with clients to design cartons that
            perform in transit and speak for their brand on arrival.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            About the company <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground md:px-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl">
                Let's build packaging that fits your product perfectly.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/75">
                Send us your spec — dimensions, ply, quantity — and we'll get back with a quote
                within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

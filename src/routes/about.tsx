import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lightbulb,
  Scale,
  ShieldCheck,
  Leaf,
  Layers,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import factoryImg from "@/assets/factory.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shelta Packaging Ltd" },
      {
        name: "description",
        content:
          "Learn about Shelta Packaging Ltd — a Kenyan manufacturer of corrugated carton packaging solutions with many years of experience.",
      },
      { property: "og:title", content: "About Shelta Packaging Ltd" },
      {
        property: "og:description",
        content:
          "Trusted manufacturer of corrugated cartons in Ruiru, Kenya. Our mission, vision and values.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, label: "Innovation & Creativity" },
  { icon: Scale, label: "Equity" },
  { icon: ShieldCheck, label: "Accountability & Integrity" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Layers, label: "Diversification" },
  { icon: BriefcaseBusiness, label: "Professionalism" },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">About us</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight text-foreground md:text-6xl">
            A trusted partner in corrugated packaging.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Shelta Packaging Ltd is a trusted manufacturer of high-quality corrugated carton
            packaging solutions, with many years of experience delivering reliable, durable and
            innovative products.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={factoryImg.url}
              alt="Inside the Shelta Packaging factory"
              width={1400}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="prose prose-neutral max-w-none text-muted-foreground">
            <p>
              Our extensive industry expertise enables us to understand the unique packaging
              requirements of businesses across diverse sectors and provide solutions that combine
              functionality, strength and brand appeal.
            </p>
            <p>
              We specialize in the production of corrugated cartons for a wide range of industries,
              including horticulture, pharmaceuticals, food and beverage, industrial packaging and
              custom-branded packaging. At Shelta Packaging Ltd, quality, customer satisfaction,
              timely delivery and continuous innovation are at the heart of everything we do.
            </p>
            <p>
              We partner with our clients to develop packaging solutions tailored to their specific
              needs, ensuring every carton meets the highest standards of performance and
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Our mission</span>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">
              To deliver durable, cost-effective corrugated packaging that protects products,
              enhances brands, and exceeds customer expectations.
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Our vision</span>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">
              To be the trusted leader in innovative, sustainable and high-quality packaging
              solutions across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Core values</span>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            The principles that guide our work.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Ready to package your product with confidence?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

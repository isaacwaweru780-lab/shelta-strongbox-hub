import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { company, whatsappUrl } from "@/lib/company";
import { products } from "@/lib/products";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contact — Shelta Packaging Ltd" },
      {
        name: "description",
        content:
          "Contact Shelta Packaging Ltd for corrugated carton quotes. Call, WhatsApp, email or visit us in Ruiru, Kenya.",
      },
      { property: "og:title", content: "Contact Shelta Packaging Ltd" },
      { property: "og:description", content: "Get a quote — call, WhatsApp or email us." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter your phone").max(30),
  product: z.string().max(80).optional().or(z.literal("")),
  quantity: z.string().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1500),
});

function ContactPage() {
  const { product: preselected } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const lines = [
      `Hello Shelta Packaging,`,
      ``,
      `Name: ${v.name}`,
      v.company ? `Company: ${v.company}` : null,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      v.product ? `Product: ${v.product}` : null,
      v.quantity ? `Quantity: ${v.quantity}` : null,
      ``,
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappUrl(lines), "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Contact</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight text-foreground md:text-6xl">
            Let's talk about your packaging.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Share your spec — product, dimensions, ply and quantity — and we'll come back with a
            quote. Prefer to chat? WhatsApp or call us directly.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-8">
        {/* Form */}
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl text-foreground">Request a quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill this in and we'll send it directly to our team on WhatsApp.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required error={errors.name} />
            <Field label="Company" name="company" error={errors.company} />
            <Field label="Email" name="email" type="email" required error={errors.email} />
            <Field label="Phone" name="phone" type="tel" required error={errors.phone} />
            <div className="sm:col-span-1">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Product of interest
              </label>
              <select
                name="product"
                defaultValue={preselected ?? ""}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <Field label="Quantity" name="quantity" placeholder="e.g. 5,000 units" error={errors.quantity} />
          </div>

          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Dimensions, ply, print requirements, delivery timeline…"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            <Send className="h-4 w-4" /> Send via WhatsApp
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Prefer email?{" "}
            <a href={`mailto:${company.email}`} className="text-accent underline">
              {company.email}
            </a>
          </p>
        </form>

        {/* Direct contact */}
        <aside className="space-y-4">
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            body="Fastest way to reach us"
            action="Chat now"
            href={whatsappUrl("Hello Shelta Packaging, I'd like a quote.")}
            external
          />
          <ContactCard
            icon={Phone}
            title="Call"
            body={company.phones.join(" · ")}
            action="Call now"
            href={`tel:${company.phones[0]}`}
          />
          <ContactCard
            icon={Mail}
            title="Email"
            body={company.email}
            action="Send email"
            href={`mailto:${company.email}`}
          />
          <ContactCard
            icon={MapPin}
            title="Visit"
            body={`${company.address}, ${company.location}`}
            action="Open in Maps"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              "Mugutha Police Station, Ruiru, Kenya",
            )}`}
            external
          />
        </aside>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            title="Shelta Packaging location"
            src="https://www.google.com/maps?q=Mugutha%20Police%20Station%2C%20Ruiru%2C%20Kenya&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
  action,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  action: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">{body}</p>
        <span className="mt-2 inline-block text-sm font-medium text-accent">{action} →</span>
      </div>
    </a>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Package } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary-foreground/10">
              <Package className="h-4.5 w-4.5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-xl">Shelta Packaging Ltd</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            {company.tagline} Trusted manufacturer of high-quality corrugated carton packaging
            serving businesses across East Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl("Hello Shelta Packaging, I'd like a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={`tel:${company.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-primary-foreground/60">
            Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-primary-foreground/60">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="flex flex-col">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-primary-foreground">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-primary-foreground">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Shelta Packaging Ltd. All rights reserved.</span>
          <span>Ruiru, Kiambu County, Kenya</span>
        </div>
      </div>
    </footer>
  );
}

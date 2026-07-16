# Shelta Packaging Ltd — Website Plan

A polished, multi-page marketing website for a Kenyan corrugated carton manufacturer. Goal: generate inquiries, showcase products, and make the company easy to contact.

## Brand
- **Name:** Shelta Packaging Ltd
- **Tagline:** Strong Packaging. Solid Partnerships.
- **Palette:** Shades of brown (kraft/corrugated tones) pulled from the van imagery — deep chocolate, warm kraft brown, cream/off-white, with a soft accent. Final tokens set in `src/styles.css` as oklch values.
- **Type:** Distinctive pairing (e.g. a strong industrial display face + clean humanist sans) — not Inter/Poppins defaults.

## Site Structure (TanStack Start routes)
```
/                  Home — hero, tagline, value props, product highlights, CTA
/about             Company story, mission, vision, core values, location
/products          Grid of all product categories
/products/$slug    Detail page per product (description, uses, image gallery)
/contact           Contact form + phone/WhatsApp/email/map/location
```
- Each route gets unique `head()` metadata (title, description, og:*).
- Root layout: sticky header with logo + nav + "Get a Quote" CTA; footer with contact, address, quick links.

## Pages in Detail

**Home**
- Hero: tagline, short pitch, primary CTA "Request a Quote", secondary "View Products"
- Trust strip: years of experience, industries served
- Featured products (6 cards linking to detail pages)
- Industries served (horticulture, pharma, food & beverage, industrial, custom)
- Mission snippet + CTA to About
- Contact CTA band with phone/WhatsApp

**About**
- Company description (provided copy)
- Mission, Vision
- Core Values (6 items as icon cards): Innovation, Equity, Accountability & Integrity, Sustainability, Diversification, Professionalism
- Location note

**Products** (index + detail)
Categories:
1. Corrugated Cartons (3ply & 5ply)
2. Regular Slotted Cartons (RSC)
3. Horticulture Product Packaging Boxes
4. Die-cut Boxes
5. SFK / Kraft Paper
6. Heavy-duty Industrial Packaging Boxes
7. Carton Trays
8. Carton Dividers

Each detail page: description, typical uses/industries, image gallery, "Request a Quote for this product" CTA that deep-links to contact form with product pre-selected.

**Contact**
- Form: name, company, email, phone, product of interest (dropdown), quantity, message. Validated with zod.
- Direct contact block: phone (+254720440580, +254703238594), email (Sheltapackagingltd@gmail.com), WhatsApp click-to-chat, physical address (Ruiru–Mugutha, near Mugutha Police Station)
- Embedded Google Map for the location
- Business hours (if provided later)

## Backend
- Contact form: enable Lovable Cloud, store submissions in a `contact_inquiries` table with RLS. Admin retrieval later if needed.
- No auth, no user accounts for v1.
- (Optional later: email notification via an edge integration — flagged, not built in v1.)

## Assets / Images
- Product images: placeholder generation via image tool for each of the 8 product categories, replaceable when the client sends real photos.
- Logo: placeholder wordmark until vector logo is supplied.
- Van/brand imagery: use client's shared images once uploaded; otherwise generated stand-ins.

## SEO
- Unique title + meta description per route.
- JSON-LD Organization schema on root; Product schema on product detail pages.
- Semantic HTML, single H1 per page, alt text on all images, sitemap.xml, robots.txt.
- Local-SEO friendly (Ruiru, Kenya, corrugated cartons keywords).

## Design Approach
After approval, I'll generate 3 distinct design directions (all brown-palette, industrial/premium tone inspired by the reference sites) for you to pick from before building. The picked direction sets typography, layout, and motion.

## Out of scope (v1)
- E-commerce / online checkout
- Multi-language
- Blog/CMS
- Client login area
- Domain purchase (handled separately in Lovable Publish settings)

## Technical Notes
- Stack: TanStack Start + React + Tailwind v4 + shadcn.
- Contact form uses `createServerFn` writing to Lovable Cloud (Supabase) with zod validation.
- All colors as semantic tokens in `src/styles.css`; no hardcoded hex in components.
- Images stored via `lovable-assets`.

Approve this plan and I'll generate 3 design directions for you to choose from before building.
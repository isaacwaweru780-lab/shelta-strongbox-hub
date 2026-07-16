import corrugated from "@/assets/corrugated.jpg.asset.json";
import rsc from "@/assets/rsc.jpg.asset.json";
import horticulture from "@/assets/horticulture.jpg.asset.json";
import diecut from "@/assets/diecut.jpg.asset.json";
import sfk from "@/assets/sfk.jpg.asset.json";
import industrial from "@/assets/industrial.jpg.asset.json";
import trays from "@/assets/trays.jpg.asset.json";
import dividers from "@/assets/dividers.jpg.asset.json";

export interface Product {
  slug: string;
  name: string;
  short: string;
  description: string;
  uses: string[];
  image: string;
}

export const products: Product[] = [
  {
    slug: "corrugated-cartons",
    name: "Corrugated Cartons",
    short: "Durable 3-ply and 5-ply cartons engineered for strength and stackability.",
    description:
      "Our signature corrugated cartons come in both 3-ply and 5-ply constructions, providing the right balance of strength, weight, and cost for every application. Manufactured from high-grade kraft liners with reliable flute profiles, they perform consistently through storage, stacking, and long-distance transit.",
    uses: ["General shipping", "Warehouse storage", "Retail distribution", "Export"],
    image: corrugated.url,
  },
  {
    slug: "regular-slotted-cartons",
    name: "Regular Slotted Cartons (RSC)",
    short: "The most widely used carton — equal flaps that seal cleanly with tape or glue.",
    description:
      "Regular Slotted Cartons are the workhorse of packaging. All four flaps are the same size and meet at the centre, allowing them to be sealed smoothly with tape or glue. Efficient to produce and easy to pack, they suit high-volume operations across industries.",
    uses: ["Food & beverage", "Pharmaceuticals", "Soap & oil companies", "FMCG distribution"],
    image: rsc.url,
  },
  {
    slug: "horticulture-boxes",
    name: "Horticulture Packaging Boxes",
    short: "Ventilated, export-grade boxes built to protect fresh produce and flowers.",
    description:
      "Purpose-built for Kenya's horticulture sector, our boxes feature carefully placed ventilation, moisture-resistant liners, and rigid stacking strength to keep flowers, vegetables and fruit in perfect condition from farm to airport to overseas buyer.",
    uses: ["Cut flowers", "Fresh vegetables", "Fruit exports", "Cold-chain shipments"],
    image: horticulture.url,
  },
  {
    slug: "die-cut-boxes",
    name: "Die-cut Boxes",
    short: "Custom shapes and sizes — precision cut to your exact product spec.",
    description:
      "Die-cut boxes are highly customizable to meet different customer size and shape requirements. From complex retail displays to snug-fit protective packaging, we produce cartons that hold products securely while presenting your brand at its best.",
    uses: ["Agriculture", "Electronics & display", "Horticulture", "Branded retail"],
    image: diecut.url,
  },
  {
    slug: "sfk-kraft-paper",
    name: "SFK / Kraft Paper",
    short: "High-strength semi-extensible kraft paper in bulk rolls.",
    description:
      "We supply SFK (semi-extensible kraft) and standard kraft paper in bulk rolls for wrapping, void fill, interleaving and secondary packaging. Sourced and produced to consistent grammage and tear-strength standards.",
    uses: ["Wrapping & interleaving", "Void fill", "Secondary packaging", "Industrial protection"],
    image: sfk.url,
  },
  {
    slug: "heavy-duty-industrial",
    name: "Heavy-duty Industrial Packaging",
    short: "Reinforced 5-ply and 7-ply cartons for demanding industrial loads.",
    description:
      "Engineered for weight, edge crush and long-haul transit, our heavy-duty industrial cartons protect machinery parts, chemicals, and bulk goods where standard packaging simply won't hold.",
    uses: ["Industrial parts", "Chemicals & lubricants", "Bulk shipments", "Heavy machinery components"],
    image: industrial.url,
  },
  {
    slug: "carton-trays",
    name: "Carton Trays",
    short: "Open-top trays for display, produce, and modular packing.",
    description:
      "Shallow open-top carton trays designed for stacking, display and quick packing lines. Ideal where visibility of the product matters or where cartons are grouped on a pallet.",
    uses: ["Fresh produce", "Retail display", "Bottled goods", "Manufacturing lines"],
    image: trays.url,
  },
  {
    slug: "carton-dividers",
    name: "Carton Dividers",
    short: "Internal partitions that separate, cushion and organise contents.",
    description:
      "Precision-slotted dividers and partitions that lock inside your carton to separate bottles, jars and fragile items. Reduces breakage and helps orderly packing.",
    uses: ["Bottled beverages", "Glassware", "Jars & cosmetics", "Fragile electronics"],
    image: dividers.url,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

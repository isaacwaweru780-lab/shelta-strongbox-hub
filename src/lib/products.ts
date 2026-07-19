import rsc from "@/assets/rsc.jpg.asset.json";
import horticulture from "@/assets/horticulture.jpg.asset.json";
import diecut from "@/assets/diecut.jpg.asset.json";
import sfk from "@/assets/sfk.jpg.asset.json";
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
    slug: "corrugated-cartons-rsc",
    name: "Corrugated Cardboard (RSC)",
    short: "Durable 3-ply and 5-ply Regular Slotted Cartons — the workhorse of packaging.",
    description:
      "Our Regular Slotted Cartons are manufactured from high-grade kraft liners in both 3-ply and 5-ply constructions. All four flaps are equal size and meet at the centre, sealing cleanly with tape or glue. Efficient to produce, easy to pack, and reliable through storage, stacking and long-distance transit.",
    uses: ["Food & beverage", "Pharmaceuticals", "Soap & oil companies", "FMCG distribution", "Export"],
    image: rsc.url,
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
    slug: "die-cut-horticulture-boxes",
    name: "Die-cut Horticulture Boxes",
    short: "Precision die-cut, ventilated export boxes for flowers and fresh produce.",
    description:
      "Purpose-built for Kenya's horticulture sector, our die-cut boxes feature carefully placed ventilation, moisture-resistant liners, and rigid stacking strength — cut to your exact spec to keep flowers, vegetables and fruit in perfect condition from farm to airport to overseas buyer.",
    uses: ["Cut flowers", "Fresh vegetables", "Fruit exports", "Cold-chain shipments", "Branded retail"],
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

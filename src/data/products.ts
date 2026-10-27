import { IMAGES } from "./images";

export interface Product {
  id: string;
  name: string;
  category: "Ring" | "Earrings" | "Bracelets" | "Necklace";
  price: string;
  image: string;
  alt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Bold Huggies",
    category: "Earrings",
    price: "$125",
    image: IMAGES.products.boldHuggies,
    alt: "Sapphire 18k Gold Bold Huggies Earrings",
  },
  {
    id: "p2",
    name: "Crystal Pear Ring",
    category: "Ring",
    price: "$86",
    image: IMAGES.products.crystalPearRing,
    alt: "Handcrafted Crystal Pear Ring in Gold",
  },
  {
    id: "p3",
    name: "Molten Hoops in Gold",
    category: "Earrings",
    price: "$184",
    image: IMAGES.products.moltenHoops,
    alt: "Sculptural Molten Gold Hoop Earrings",
  },
  {
    id: "p4",
    name: "Orbit Crystal Cuff",
    category: "Bracelets",
    price: "$139",
    image: IMAGES.products.orbitCrystalCuff,
    alt: "Minimalist Orbit Crystal Cuff Bangle",
  },
  {
    id: "p5",
    name: "Horseshoe Pendant",
    category: "Necklace",
    price: "$245",
    image: IMAGES.products.horseshoePendant,
    alt: "Delicate Horseshoe Diamond Pendant Necklace",
  },
  {
    id: "p6",
    name: "Signet Solitaire",
    category: "Ring",
    price: "$310",
    image: IMAGES.products.signetSolitaire,
    alt: "Heirloom Signet Solitaire Gold Ring",
  },
  {
    id: "p7",
    name: "Sculpted Choker",
    category: "Necklace",
    price: "$290",
    image: IMAGES.products.sculptedChoker,
    alt: "Liquid Gold Sculpted Choker Chain",
  },
];

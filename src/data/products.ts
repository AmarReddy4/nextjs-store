export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    description: "Clean, adjustable LED desk lamp with touch dimming. Perfect for late night coding sessions.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80",
    category: "Lighting",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description: "75% layout mechanical keyboard with hot-swappable switches and RGB backlight.",
    price: 12999,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    category: "Peripherals",
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    description: "Fast 15W wireless charger with sleek aluminum finish. Works with all Qi devices.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&q=80",
    category: "Accessories",
  },
  {
    id: "4",
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and 100W power delivery.",
    price: 5499,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Monitor Stand",
    description: "Bamboo monitor riser with storage drawer. Elevates screen to ergonomic height.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1616627577385-5c0c4dab53a6?w=600&q=80",
    category: "Furniture",
  },
  {
    id: "6",
    name: "Noise Cancelling Headphones",
    description: "Over-ear wireless headphones with active noise cancellation and 30hr battery life.",
    price: 19999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    category: "Audio",
  },
];

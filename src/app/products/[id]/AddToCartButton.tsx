"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";

export function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-lg font-medium text-white transition-colors ${
        added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-500"
      }`}
    >
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}

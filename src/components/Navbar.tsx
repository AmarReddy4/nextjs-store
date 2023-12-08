"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = getCart();
      setCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    update();
    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          TechStore
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/cart" className="relative text-gray-400 hover:text-white transition-colors">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

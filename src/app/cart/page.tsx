"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem, getCart, removeFromCart, updateQuantity, getCartTotal } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
    const update = () => setCart(getCart());
    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  const total = getCartTotal(cart);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 border border-gray-800 rounded-lg p-4"
            >
              <div className="relative w-20 h-20 bg-gray-900 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{item.product.name}</h3>
                <p className="text-sm text-gray-400">{formatPrice(item.product.price)}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm text-white w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-400 hover:text-red-300 ml-4"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-gray-800 rounded-lg p-6 h-fit">
          <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-800 pt-2 flex justify-between text-white font-semibold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-4 py-3 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

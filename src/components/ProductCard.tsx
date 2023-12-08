"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gray-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-white">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>
          <span className="text-sm font-semibold text-white">{formatPrice(product.price)}</span>
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm text-blue-400 mb-2">{product.category}</p>
        <h1 className="text-3xl font-bold text-white mb-3">{product.name}</h1>
        <p className="text-2xl font-semibold text-white mb-4">
          {formatPrice(product.price)}
        </p>
        <p className="text-gray-400 mb-8 leading-relaxed">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="py-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Tech Store</h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
          Minimal desk accessories and gear for developers.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          Browse Products
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

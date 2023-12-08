import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

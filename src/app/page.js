import Features from "./components/Features";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  // Show only the first 8 products
  const visibleProducts = products.slice(0, 8);

  return (
    <div>
      <Hero />

      <div className="max-w-11/12 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>

        {visibleProducts.length === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </section>
        )}
      </div>
      <Features></Features>
    </div>
  );
}

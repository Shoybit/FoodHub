import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </section>
      </div>
    </div>
  );
}

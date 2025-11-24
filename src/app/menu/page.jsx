import ProductCard from "../components/ProductCard";

export default async function MenuPage() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  return (
    <div className="max-w-11/12 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

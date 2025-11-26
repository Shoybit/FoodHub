"use client";
import { useEffect, useState } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProductCard from "./components/ProductCard";
import Testimonials from "./components/Testimonials";
import Peyment from "./components/Peyment"; 

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    document.title = "Home | FoodHub";
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://foodhub-server.vercel.app/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  const visibleProducts = products.slice(0, 8);

  return (
    <div>
      <Hero />

      <div className="max-w-11/12 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 border-l-5 border-[#ff6900] pl-2">Our Products</h1>

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

      <Features />
      <Testimonials />
      <Peyment/>
    </div>
  );
}

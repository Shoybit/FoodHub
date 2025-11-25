"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaStar, FaRegStar } from "react-icons/fa";
import Loader from "@/app/components/Loader";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // <-- FIXED

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/products/${params.id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // FINALLY STOP LOADER
      }
    }

    fetchProduct();
  }, [params.id]);

  // Show Loader
  if (loading) return <Loader />;

  // If product still not found
  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= roundedRating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-yellow-500" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-black shadow-md rounded-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-400 mt-2">{product.fullDescription}</p>

      <p className="mt-3 text-lg font-bold text-white">
        Price: <span className="text-[#00ff8c]">${product.price.toFixed(2)}</span>
      </p>

      <div className="mt-4 flex items-center justify-between">
        <p className="flex items-center gap-2 text-yellow-500 font-semibold">
          {renderStars(product.rating)}
          <span className="ml-1 text-white">{product.rating.toFixed(1)}/5</span>
        </p>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
}

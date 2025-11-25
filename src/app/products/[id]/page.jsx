"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaStar, FaRegStar } from "react-icons/fa"; 

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`http://localhost:5000/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

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
      <p className="text-gray-500 mt-2">{product.fullDescription}</p>
      <p className="mt-2 font-bold text-lg">
        Price:
        ${product.price.toFixed(2)}</p>

      <div className="mt-2 flex items-center justify-between">
        <p className="flex items-center gap-2 text-yellow-500 font-semibold">
          {renderStars(product.rating)}
          <span className="ml-1 text-white">{product.rating.toFixed(1)}/5</span>
        </p>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
}

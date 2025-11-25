"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaStar } from "react-icons/fa"; 

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-80 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-500 mt-2">{product.fullDescription}</p>
      <p className="mt-2 font-bold text-lg">${product.price.toFixed(2)}</p>
      
      <div className="mt-1 flex items-center justify-between">
        <p className="flex items-center gap-1 text-yellow-500 font-semibold">
        Rating: {product.rating} <FaStar />
        </p>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800 cursor-pointer"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
}

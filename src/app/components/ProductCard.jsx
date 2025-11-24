import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col h-full">
      {/* Image */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-40 w-full object-cover rounded mb-3"
      />

      {/* Title & Description */}
      <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.shortDescription}</p>

      {/* Price & Rating */}
      <div className="mt-auto">
        <p className="font-bold mb-1">${product.price.toFixed(2)}</p>
        <p className="text-yellow-500 mb-2">Rating: {product.rating}</p>

        {/* Details Button */}
        <Link
          href={`/products/${product._id}`}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

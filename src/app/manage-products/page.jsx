"use client";

import { useState, useEffect } from "react";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:5000";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/products`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setMessage("Failed to fetch products");
      }
    } catch (error) {
      setMessage("Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${API}/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessage("Product deleted successfully");
        fetchProducts();
      } else {
        setMessage("Failed to delete product");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 ">Manage Products</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      {loading && <p className="text-gray-600">Loading products...</p>}

      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse shadow-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Price</th>
                <th className="border px-4 py-2 text-left">Rating</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-500">
                  <td className="border px-4 py-2">{p.title}</td>
                  <td className="border px-4 py-2">{p.category}</td>
                  <td className="border px-4 py-2">
                    ${p?.price ? p.price.toFixed(2) : "0.00"}
                  </td>
                  <td className="border px-4 py-2">{p.rating || "N/A"}</td>
                  <td className="border px-4 py-2 flex gap-5 flex-wrap">
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                    >
                      Delete
                    </button>

                    <a
                      href={`/products/${p._id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

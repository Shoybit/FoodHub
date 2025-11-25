"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

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
    if (loading) return <Loader/>;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`${API}/api/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire(
            "Deleted!",
            "The product has been deleted.",
            "success"
          );
              fetchProducts();
        } else {
          Swal.fire("Error!", "Failed to delete product.", "error");
        }
      } catch (err) {
        Swal.fire("Error!", err.message, "error");
      }
    }
    
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 ">Manage Products</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse shadow-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Price</th>
                <th className="border px-4 py-2 text-left">Rating</th>
                <th className="border px-4 py-2 text-left w-45">Actions</th>
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

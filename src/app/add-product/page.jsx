"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/ProtectedRoute";
import Loader from "../components/Loader";

function AddProductForm() {
  const [loading, setLoading] = useState(true); 
  const [submitting, setSubmitting] = useState(false);

      useEffect(() => {
    document.title = "Add Product | FoodHub";
  }, []);


  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    category: "",
    imageUrl: "",
    rating: "",
    priority: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      price: Number(form.price) || 0,
      rating: Number(form.rating) || 0,
      priority: Number(form.priority) || 0,
    };

    try {
      const res = await fetch("https://foodhub-server.vercel.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        toast.error("Invalid response from server");
        setSubmitting(false);
        return;
      }

      if (res.ok && data.success) {
        toast.success(data.message || "Product added successfully!");
        setForm({
          title: "",
          shortDescription: "",
          fullDescription: "",
          price: "",
          category: "",
          imageUrl: "",
          rating: "",
          priority: "",
        });
      } else {
        toast.error(data.message || "Failed to create product!");
      }
    } catch (err) {
      toast.error("Network error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <ToastContainer />
      <h1 className="text-3xl font-semibold mb-6 border-l-5 border-[#ff6900] pl-2">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="shortDescription"
          placeholder="Short Description"
          value={form.shortDescription}
          onChange={handleChange}
          required
          maxLength={160}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="fullDescription"
          placeholder="Full Description"
          value={form.fullDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded bg-black"
        >
          <option value="">Select Category</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
          <option value="Dessert">Dessert</option>
          <option value="Pasta">Pasta</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Fried Chicken">Fried Chicken</option>
          <option value="Drinks">Drinks</option>
        </select>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0–5)"
          value={form.rating}
          onChange={handleChange}
          min="0"
          max="5"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="priority"
          placeholder="Priority (0–10)"
          value={form.priority}
          onChange={handleChange}
          min="0"
          max="10"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-2 rounded text-white ${
            submitting ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {submitting ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <AddProductForm />
    </ProtectedRoute>
  );
}

"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  // handle input 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          rating: Number(form.rating),
          priority: Number(form.priority),
        }),
      });

      if (res.ok) {
        setSuccess("Product added successfully!");
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
      } 
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">Add Product</h1>

      {success && <p className="text-green-600 mb-4">{success}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

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
          className="w-full border p-2 rounded bg-[#0a0a0a]"
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
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="priority"
          placeholder="Priority (0–10)"
          value={form.priority}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

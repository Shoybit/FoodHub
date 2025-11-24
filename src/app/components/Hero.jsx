"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const images = [
    "https://i.ibb.co.com/NdbFVb6S/grilled-steak-with-vegetables-wooden-board-23-2151966849.jpg",
    "https://i.ibb.co.com/NdbFVb6S/grilled-steak-with-vegetables-wooden-board-23-2151966849.jpg",
    "https://i.ibb.co.com/s9dv84Tq/slice-chocolate-brownie-with-walnut-vanilla-ice-cream-114579-903.jpg",
    "https://i.ibb.co.com/Z67Nc8sT/delicious-pizza-wooden-cutting-board-left-side-isolated-dark-surface-with-free-space-close-up-shot-1.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      className="relative w-full h-[450px] bg-cover bg-center flex items-center transition-all duration-700"
      style={{ backgroundImage: `url("${images[current]}")` }}
    >
      {/* Overlay Content */}
      <div className="max-w-7xl mx-auto px-6 text-white backdrop-brightness-75 p-6 rounded-xl">
        <h1 className="text-4xl font-bold mb-3 drop-shadow">
          Discover the Real Taste of Biriyani
        </h1>
        <p className="max-w-xl text-lg mb-4 drop-shadow">
          Freshly cooked, flavorful biriyani with your favorite refreshing drinks — 
          delivered hot & fast to your door.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow">
          Order Now
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}

"use client";

import { FaShippingFast, FaHotdog, FaUtensils, FaSmile } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your favorite food in under 30 minutes.",
      icon: <FaShippingFast className="text-5xl text-orange-500 mb-4" />,
    },
    {
      title: "Fresh & Hot Food",
      description: "Always freshly cooked and delivered hot.",
      icon: <FaHotdog className="text-5xl text-orange-500 mb-4" />,
    },
    {
      title: "Variety of Cuisines",
      description: "From biriyani to desserts, we have it all.",
      icon: <FaUtensils className="text-5xl text-orange-500 mb-4" />,
    },
    {
      title: "Customer Satisfaction",
      description: "We ensure the best quality and taste every time.",
      icon: <FaSmile className="text-5xl text-orange-500 mb-4" />,
    },
  ];

  return (
    <section className="max-w-11/12 mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-xl transition"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

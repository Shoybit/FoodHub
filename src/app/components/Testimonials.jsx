/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "John Doe",
      feedback: "FoodHub delivers hot and tasty food every time! Highly recommended.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bg: "bg-black",
    },
    {
      name: "Jane Smith",
      feedback: "Fast delivery and fresh food. I love their biriyani!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      bg: "bg-black",
    },
    {
      name: "Michael Brown",
      feedback: "Amazing variety and customer service is top-notch!",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      bg: "bg-black",
    },
    {
      name: "Emily Johnson",
      feedback: "I always get my order on time and everything tastes great.",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      bg: "bg-black",
    },
    {
      name: "David Wilson",
      feedback: "The packaging is perfect and food quality is superb.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      bg: "bg-black",
    },
    {
      name: "Sophia Lee",
      feedback: "I love the variety on the menu. Always something new!",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      bg: "bg-black",
    },
    {
      name: "James Taylor",
      feedback: "Quick delivery and the staff is very friendly.",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      bg: "bg-black",
    },
    {
      name: "Olivia Martinez",
      feedback: "The best food experience I’ve had in a long time!",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      bg: "bg-black",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 32; 
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-16">
      <div className="max-w-11/12 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 border-l-5 border-[#ff6900] pl-2">What Our Customers Say</h2>
        <div ref={sliderRef} className="flex gap-8 overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${review.bg} text-white p-6 rounded-lg shadow shrink-0 w-72 flex flex-col items-center text-center border border-white`} // <-- এখানে border যোগ
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-white"
              />
              <p className="text-sm mb-3">{review.feedback}</p>
              <h4 className="font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

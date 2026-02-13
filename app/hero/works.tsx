"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  {
    image: "/milan.jpeg",
    title: "Diploma & Design Career Program",
    description:
      "Internationally valued diploma programs with project-oriented training.",
  },
  {
    image: "/milan2.jpeg",
    title: "Vijaya Offer – Skill Development Discount",
    description:
      "Special festive offer with discounts on diploma courses.",
  },
  {
    image: "/gazpacho.jpeg",
    title: "Site Supervisor Job Vacancy",
    description:
      "Gazpacho Kitchens is hiring Site Supervisors in Calicut.",
  },
  {
    image: "/shamla.jpeg",
    title: "Happy New Year 2026 – Advanced Scan Centre",
    description: "Trusted radiology care with accurate diagnosis.",
  },
  {
    image: "/succesway.jpeg",
    title: "21 Days Habit Building Challenge",
    description:
      "Create powerful habits in just 21 days with Success Way.",
  },
];

export default function WorksCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);  

    return () => clearInterval(timer);
  }, []);

  const visibleWorks = [
    works[index],
    works[(index + 1) % works.length],
    works[(index + 2) % works.length],
  ];

  return (
    
    <section className="relative overflow-hidden w-full py-24 px-6 md:px-20 text-white bg-[#050615]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Our Works
          </span>
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Explore some of our latest branding, digital, and media projects.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-16 max-w-6xl mx-auto overflow-hidden">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleWorks.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="
                  rounded-2xl overflow-hidden
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  shadow-lg hover:shadow-2xl
                  hover:border-blue-500/40
                  transition-all duration-300
                "
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-red-600/10" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-red-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {works.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-10 bg-gradient-to-r from-blue-500 to-red-500"
                : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

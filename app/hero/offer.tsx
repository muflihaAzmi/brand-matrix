"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* =======================
   DATA
======================= */

const photos = [
  { image: "/marketing.jpg", title: "Digital Marketing" },
  { image: "/logobrand.avif", title: "Logo & Design" },
  { image: "/videomarketting.jpg", title: "Video Marketing" },
  { image: "/brand.webp", title: "Brand Strategy" },
  { image: "/ad.webp", title: "Paid Advertising" },
];

/* =======================
   HEADING ANIMATIONS
======================= */

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const headingItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   GRID ANIMATIONS
======================= */

const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.15,
    },
  },
};

const gridItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   COMPONENT
======================= */

function Offer() {
  return (
    <section className="flex flex-col gap-20 bg-gray-100 py-24 w-full">
      
      {/* 🔹 HEADING (scroll animated) */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="flex flex-col items-center gap-5 px-4"
      >
        <motion.span
          variants={headingItem}
          className="text-gray-500 uppercase text-sm tracking-wider"
        >
          About us
        </motion.span>

        <motion.h2
          variants={headingItem}
          className="md:text-5xl text-3xl tracking-tight text-center"
        >
          Marketing Solutions for Modern Brands
        </motion.h2>

        <motion.p
          variants={headingItem}
          className="text-center max-w-xl text-gray-500"
        >
          We help brands stand out in the digital world through strategic
          marketing, creative storytelling, and performance-focused campaigns
          that deliver real business impact.
        </motion.p>
      </motion.div>

      {/* 🔹 GRID (scroll animated, flowing) */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 md:px-10"
      >
        {photos.map((item, index) => (
          <motion.div
            key={index}
            variants={gridItem}
            className="group relative h-[160px] md:h-[300px] rounded-xl overflow-hidden"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            {/* Title */}
            <div
              className="
                absolute bottom-4 left-4 right-4
                translate-y-4
                opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              <h3 className="text-white text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Offer;

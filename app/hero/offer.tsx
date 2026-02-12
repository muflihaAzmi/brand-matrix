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
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Offer() {
  return (
    <section className="relative overflow-hidden flex flex-col md:gap-20 gap-10 py-16 md:py-40 w-full md:px-10 px-4 text-white">
      
      {/* 🔥 Premium Background */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#040b24] via-[#060617] to-[#240404]" /> */}

      {/* Glow Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-220px] left-[-220px] w-[520px] h-[520px] bg-blue-600/25 blur-[170px] rounded-full" />
        <div className="absolute bottom-[-220px] right-[-220px] w-[520px] h-[520px] bg-red-600/25 blur-[170px] rounded-full" />
        <div className="absolute top-[35%] left-[35%] w-[450px] h-[450px] bg-purple-600/15 blur-[200px] rounded-full" />
      </div>

      {/* 🔹 HEADING */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="flex flex-col items-center gap-5 px-4 text-center"
      >
        <motion.span
          variants={headingItem}
          className="uppercase text-sm tracking-wider font-semibold text-blue-300"
        >
          About us
        </motion.span>

        <motion.h2
          variants={headingItem}
          className="md:text-5xl text-3xl tracking-tight font-semibold"
        >
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Marketing Solutions for Modern Brands
          </span>
        </motion.h2>

        <motion.p
          variants={headingItem}
          className="text-center max-w-xl text-gray-300 leading-relaxed"
        >
          We help brands stand out in the digital world through strategic
          marketing, creative storytelling, and performance-focused campaigns
          that deliver real business impact.
        </motion.p>
      </motion.div>

      {/* 🔹 GRID */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-10 md:mx-auto md:container"
      >
        {photos.map((item, index) => (
          <motion.div
            key={index}
            variants={gridItem}
            className="
              group relative h-52 md:h-80
              rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              hover:border-blue-500/40
            "
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
                bg-gradient-to-t from-black/70 via-black/20 to-transparent
                opacity-80
              "
            />

            {/* Hover Glow Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-blue-600/20 via-transparent to-red-600/20
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />

            {/* Title */}
            <div
              className="
                absolute bottom-5 left-5 right-5
                translate-y-4 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500
              "
            >
              <h3 className="text-white text-lg font-semibold tracking-tight">
                {item.title}
              </h3>

              <div className="mt-2 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-red-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Offer;

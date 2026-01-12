"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { motion, Variants } from "framer-motion";


const testimonials = [
  {
    video: "/feed1.mp4",
    name: "Abdul Salam",
    role: "Nayagra Farms, Managing Director",
  },
  {
    video: "/feed2.mp4",
    name: "Anjali Nair",
    role: "Marketing Head, Retail Brand",
  },
  {
    video: "/feed4.mp4",
    name: "Gazpacho",
    role: "Business Owner",
  },
];


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

/* Videos grid */
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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


function VideoTestimonials() {
  return (
    <section className="flex flex-col gap-20 bg-gray-100 py-20 w-full">

      {/* 🔹 HEADING */}
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
          Testimonials
        </motion.span>

        <motion.h2
          variants={headingItem}
          className="md:text-5xl text-3xl tracking-tight text-center text-black"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          variants={headingItem}
          className="text-center max-w-xl text-gray-400"
        >
          Real feedback from brands we’ve helped grow and scale.
        </motion.p>
      </motion.div>

      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={gridItem}
            className="flex flex-col gap-3"
          >
            {/* Video */}
            <div className="h-[220px] md:h-[380px] rounded-xl overflow-hidden">
              <video
                src={item.video}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="px-1">
              <h3 className="text-black text-lg font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        variants={ctaVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="w-full px-6 md:px-10 py-5"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-200 shadow-md rounded-2xl px-6 md:px-10 py-6">
          <p className="text-gray-700 text-center md:text-left text-base md:text-lg">
            Let’s discuss your business goals — schedule your 20-minute
            consultation now.
          </p>

          <button
            className="
              group inline-flex items-center gap-2
              rounded-xl
              bg-black text-white
              hover:bg-white hover:text-black
              px-5 py-2.5
              transition-colors duration-300
              shadow-sm
            "
          >
            <span className="font-medium">Let’s Talk</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.section>
    </section>
  );
}

export default VideoTestimonials;

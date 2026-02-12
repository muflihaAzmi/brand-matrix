"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    video: "/feed1.mp4",
    name: "Abdul Salam",
    role: "Nayagra Farms, Managing Director",
  },
  {
    video: "/feed2.mp4",
    name: "Prijeesh",
    role: "Rajadhani, Civil Engineer",
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
    <section className="relative overflow-hidden w-full py-20 md:py-40 px-4 md:px-10 text-white">
      
      {/* 🔥 Dark Base Background */}
      {/* <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#040b24] via-[#060617] to-[#240404]" /> */}

      {/* Glow Blobs (Your Theme) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>

      {/* Soft Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]" />

      {/* 🔹 HEADING */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="flex flex-col items-center gap-5 md:mx-auto md:container"
      >
        <motion.span
          variants={headingItem}
          className="text-blue-300 uppercase text-sm tracking-wider font-semibold"
        >
          Testimonials
        </motion.span>

        <motion.h2
          variants={headingItem}
          className="md:text-5xl text-3xl tracking-tight text-center font-semibold"
        >
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            What Our Clients Say
          </span>
        </motion.h2>

        <motion.p
          variants={headingItem}
          className="text-center max-w-xl text-gray-800"
        >
          Real feedback from brands we’ve helped grow and scale.
        </motion.p>
      </motion.div>

      {/* 🔹 VIDEO GRID */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mx-auto md:container"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={gridItem}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="
              flex flex-col gap-4
              rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg hover:shadow-2xl
              hover:border-blue-500/40
              transition-all duration-300
              p-4
            "
          >
            {/* Video */}
            <div className="h-55 md:h-95 rounded-xl overflow-hidden">
              <video
                src={item.video}
                controls
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="px-1">
              <h3 className="text-gray-800 text-lg font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm text-gray-800">{item.role}</p>

              <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-red-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 CTA */}
      <motion.section
        variants={ctaVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="w-full mt-16 md:mx-auto md:container"
      >
        <div
          className="
            flex flex-col md:flex-row items-center justify-between gap-6
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-lg rounded-2xl
            px-6 md:px-10 py-8
          "
        >
          <p className="text-gray-800 text-center md:text-left text-base md:text-lg leading-relaxed">
            Let’s discuss your business goals — schedule your 20-minute
            consultation now.
          </p>

          <Link href="/contact">
            <button
              className="
                group inline-flex items-center gap-2
                rounded-xl
                bg-gradient-to-r from-blue-600 to-red-600
                text-white
                hover:from-red-600 hover:to-blue-600
                px-6 py-3
                transition-all duration-300
                shadow-md hover:shadow-xl
              "
            >
              <span className="font-medium">Book A Free Strategy Call</span>
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </motion.section>
    </section>
  );
}

export default VideoTestimonials;

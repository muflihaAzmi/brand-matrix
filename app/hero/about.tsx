"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* =======================
   LEFT CONTENT ANIMATION
======================= */

const leftContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const leftItem: Variants = {
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
   IMAGE ANIMATION
======================= */

const imageVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section className="w-full relative overflow-hidden px-4 sm:px-6 md:py-30 py-10 ">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>
<div className="container mx-auto">


      {/* Small label */}
      <motion.span
        variants={leftItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="text-blue-700 uppercase text-sm tracking-wider font-semibold block "
      >
        our journey
      </motion.span>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6">
        
        {/* 🔹 LEFT CONTENT */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="flex flex-col md:gap-20 gap-12 max-w-3xl"
        >
          {/* Heading & Description */}
          <div className="flex flex-col gap-6">
            
            {/* Heading */}
            <motion.h2
              variants={leftItem}
              className={`${montserrat.className} text-4xl md:text-6xl font-semibold leading-[1.15] tracking-tighter`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Brand Matrix Agency
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={leftItem}
              className="text-gray-700 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              Brand Matrix is a full-service marketing agency built to help
              brands grow, connect, and stay relevant in today’s fast-moving
              digital world. With 8+ years of industry experience, we have
              successfully partnered with businesses across industries,
              delivering creative strategies that turn ideas into impact.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={leftItem}
              className="text-gray-700 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              Founded by{" "}
              <span className="text-red-600 font-bold text-xl">
                Rishvan Vk
              </span>
              , Brand Matrix was created with a clear vision — to blend
              creativity, strategy, and performance-driven marketing under one
              roof. Over the years, we’ve grown into a trusted agency with a
              strong regional presence, operating from our branches in Manjeri
              and Calicut.
            </motion.p>
          </div>

          {/* What We Do */}
          <motion.div
            variants={leftItem}
            className="max-w-xl bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-blue-100"
          >
            <span className="text-sm text-gray-700 font-semibold tracking-wide">
              WHAT WE DO
            </span>

            <motion.ul variants={leftContainer} className="mt-4 space-y-3 grid grid-cols-2">
              {[
                "Digital & Media Marketing",
                "Video & Advertising",
                "Design & Branding",
                "meta Ads",
                "Logo creation & Poster Design",
                "Railway Ads",
                "Radio & Theatre Ads",
                "Consultation",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={leftItem}
                  className="flex items-center gap-3 text-gray-800 "
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-red-600"></span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* 🔹 IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="relative w-full h-125 lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-red-100"
        >
          <Image
            src="/about.jpg"
            alt="About Brand Matrix"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/25 via-transparent to-red-600/20" />
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

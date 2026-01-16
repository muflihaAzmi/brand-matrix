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
   IMAGE ANIMATION
======================= */

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   COMPONENT
======================= */

function About() {
  return (
    <section className="w-full px-4 md:px-20 py-10 md:py-16  mx-auto container">
      
      {/* Small label */}
      <motion.span
        variants={leftItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="text-gray-500 uppercase text-sm tracking-wider block"
      >
        our journey
      </motion.span>

      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4 mx-auto container">
        
        {/* 🔹 LEFT CONTENT */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="flex flex-col md:gap-20 gap-10 max-w-3xl"
        >
          {/* Heading & Description */}
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={leftItem}
              className={`${montserrat.className} text-4xl md:text-6xl font-medium leading-[1.2] tracking-tighter`}
            >
              Brand Matrix Agency
            </motion.h2>

            <motion.p
              variants={leftItem}
              className="text-gray-600 max-w-2xl"
            >
              Brand Matrix is a full-service marketing agency built to help
              brands grow, connect, and stay relevant in today’s fast-moving
              digital world. With 8+ years of industry experience, we have
              successfully partnered with businesses across industries,
              delivering creative strategies that turn ideas into impact.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-gray-600 max-w-2xl"
            >
              Founded by{" "}
              <span className="text-black font-bold text-xl">Rishvan Vk</span>, Brand
              Matrix was created with a clear vision — to blend creativity,
              strategy, and performance-driven marketing under one roof. Over
              the years, we’ve grown into a trusted agency with a strong
              regional presence, operating from our branches in Manjeri and
              Calicut.
            </motion.p>
          </div>

          {/* What We Do */}
          <motion.div variants={leftItem} className="max-w-xl">
            <span className="text-sm text-gray-600 font-medium">
              WHAT WE DO
            </span>

            <motion.ul
              variants={leftContainer}
              className="mt-3 space-y-2"
            >
              {[
                "Digital & Media Marketing",
                "Video & Advertising",
                "Design & Branding",
                "Consultation",
              ].map((item, index) => (
                <motion.li key={index} variants={leftItem}>
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
          className="relative w-full h-[500px] lg:w-1/2 rounded-xl overflow-hidden"
        >
          <Image
            src="/about.jpg"
            alt="About Brand Matrix"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;

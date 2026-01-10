"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";

/* =======================
   DATA
======================= */

const works = [
  {
    image: "/milan.jpeg",
    title: "Diploma & Design Career Program",
    description:
      "Internationally valued diploma programs with project-oriented training, AI-integrated software classes, and 100% placement assistance at Milaan School of Design, Manjeri.",
  },
  {
    image: "/skyblue.jpeg",
    title: "Premium Teak Wood Chairs Offer",
    description:
      "Designed to last generations. Premium teak wood chairs available from ₹13,899 at SkyBlu International Furniture, Empuraan.",
  },
  {
    image: "/milan2.jpeg",
    title: "Vijaya Offer – Skill Development Discount",
    description:
      "Special festive offer with up to 10% discount on diploma courses including BIM, Architectural Visualization, and Interior Designing at Milaan School of Design.",
  },
  {
    image: "/gazpacho.jpeg",
    title: "Site Supervisor Job Vacancy",
    description:
      "Gazpacho Kitchens is hiring Site Supervisors. 1–2 years experience preferred. Freshers are welcome. Apply now in Calicut.",
  },
  {
    image: "/shamla.jpeg",
    title: "Happy New Year 2026 – Advanced Scan Centre",
    description:
      "Wishing a healthy and confident 2026 from Dr. Shamla’s Advanced Scan Centre. Clear images, accurate diagnosis, and trusted radiology care.",
  },
  {
    image: "/succesway.jpeg",
    title: "21 Days Habit Building Challenge",
    description:
      "Create powerful habits in just 21 days. Daily actions that lead to extraordinary results, powered by Success Way.",
  },
];

/* =======================
   ANIMATIONS
======================= */

/* Heading flow */
const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const headingItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Card reveal */
const cardVariant: Variants = {
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

/* =======================
   COMPONENT
======================= */

function Works() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-700 text-white w-full h-[220vh] px-6 md:px-10"
    >
      {/* 🔹 HEADING */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="pt-20 max-w-3xl"
      >
        <motion.h2
          variants={headingItem}
          className="text-white text-3xl tracking-tight"
        >
          Our Works
        </motion.h2>

        <motion.p variants={headingItem} className="mt-4 text-lg text-gray-300">
          A selection of our most impactful branding, digital, and media
          projects.
        </motion.p>

        <motion.button
          variants={headingItem}
          className="
            group inline-flex items-center gap-2
            rounded-xl
            bg-white text-black
            hover:bg-gray-400 hover:text-white
            px-5 py-2.5
            transition-colors duration-300
            shadow-sm mt-4
          "
        >
          <span className="font-medium">View Works</span>
          <MoveRight
            className="
              w-4 h-4
              opacity-0 -translate-x-1
              group-hover:opacity-100 group-hover:translate-x-1
              transition-all duration-300
            "
          />
        </motion.button>
      </motion.div>

      {/* 🔹 HORIZONTAL SCROLL */}
      <div className="sticky top-0 h-[500px] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 mt-20">
          {works.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-120px" }}
              className="min-w-[420px]"
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <div className="relative h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Works;

"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MoveRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* =======================
   DATA
======================= */

const blogs = [
  {
    title: "Why Every Business Needs a Strong Digital Presence",
    content:
      "In today’s digital-first world, a strong online presence builds trust, improves visibility, and helps businesses connect with their ideal audience more effectively.",
  },
  {
    title: "Branding vs Marketing: What’s the Difference?",
    content:
      "Branding defines who you are, while marketing is how you promote it. Understanding the difference helps businesses invest wisely and grow sustainably.",
  },
  {
    title: "Top Digital Marketing Trends to Watch",
    content:
      "From short-form video content to AI-powered campaigns, staying updated with digital trends helps brands stay ahead of the competition.",
  },
  {
    title: "How Social Media Marketing Builds Brand Trust",
    content:
      "Consistent, value-driven content on social platforms builds credibility, engagement, and long-term relationships with customers.",
  },
];

/* =======================
   ANIMATIONS
======================= */

/* Left content */
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

/* Blog list */
const blogContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.15,
    },
  },
};

const blogItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   COMPONENT
======================= */

function Blogs() {
  return (
    <section className="bg-gray-700 py-20 px-6 md:px-10 flex flex-col md:flex-row gap-16">
      
      {/* 🔹 LEFT CONTENT */}
      <motion.div
        variants={leftContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="flex flex-col gap-5 px-4 md:max-w-md"
      >
        <motion.span
          variants={leftItem}
          className="text-gray-100 uppercase text-sm tracking-wider"
        >
          Blogs
        </motion.span>

        <motion.h2
          variants={leftItem}
          className="text-3xl text-white tracking-tight"
        >
          Insights From Our Digital Team
        </motion.h2>

        <motion.p
          variants={leftItem}
          className="max-w-xl text-gray-100"
        >
          Thoughtful articles on branding, marketing, and digital growth.
        </motion.p>

        <motion.button
          variants={leftItem}
          className="
            group inline-flex items-center gap-3
            rounded-xl
            bg-white text-black
            hover:bg-gray-400 hover:text-white
            px-5 py-2.5
            transition-colors duration-300
            shadow-sm mt-4 w-40
          "
        >
          <span className="font-medium">More Blogs</span>
          <MoveRight
            className="
              w-4 h-4
              -translate-x-1
              group-hover:translate-x-1
              transition-transform duration-300
            "
          />
        </motion.button>
      </motion.div>

      {/* 🔹 BLOG LIST */}
      <motion.div
        variants={blogContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        className="max-w-3xl mx-auto space-y-4 w-full"
      >
        {blogs.map((blog, index) => (
          <motion.div key={index} variants={blogItem}>
            <Collapsible className="bg-white rounded-xl border border-gray-200 p-4">
              <CollapsibleTrigger className="w-full text-left font-medium text-lg flex justify-between items-center">
                {blog.title}
                <span className="text-gray-400 ml-6">+</span>
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-3 text-gray-600 text-sm leading-relaxed">
                {blog.content}
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Blogs;

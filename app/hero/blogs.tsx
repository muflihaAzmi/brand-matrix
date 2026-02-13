"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MoveRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

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

function Blogs() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden md:py-42 py-16 px-4 sm:px-6 flex flex-col md:flex-row gap-16 text-white">
      {/* Glow Theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_65%)]" />

      <div className="flex flex-col md:flex-row gap-16 md:mx-auto md:container w-full">
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="flex flex-col gap-10 px-2 md:max-w-md"
        >
          <motion.span
            variants={leftItem}
            className="text-blue-300 uppercase text-sm tracking-wider font-semibold"
          >
            Blogs
          </motion.span>

          <motion.h2
            variants={leftItem}
            className="text-4xl md:text-5xl text-gray-800 font-semibold tracking-tight"
          >
            Insights From Our Digital Team
          </motion.h2>

          <motion.p
            variants={leftItem}
            className="max-w-xl text-gray-800 leading-relaxed"
          >
            Thoughtful articles on branding, marketing, and digital growth.
          </motion.p>

          <motion.button
            variants={leftItem}
            onClick={() => router.push("/blogs")}
            className="
              group inline-flex items-center gap-3
              rounded-xl
              bg-gradient-to-r from-blue-600 to-red-600
              hover:from-red-600 hover:to-blue-600
              px-6 py-3
              transition-all duration-300
              shadow-md hover:shadow-xl
              w-fit
            "
          >
            <span className="font-semibold">More Blogs</span>

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

        <motion.div
          variants={blogContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="max-w-3xl mx-auto space-y-6 w-full"
        >
          {blogs.map((blog, index) => (
            <motion.div key={index} variants={blogItem}>
              <Collapsible
                className="
                  bg-white/10 backdrop-blur-md
                  text-gray-800 rounded-2xl
                  border border-white/20
                  p-5 shadow-lg
                  hover:border-blue-500/50
                  transition-all duration-300
                "
              >
                <CollapsibleTrigger className="w-full text-left font-semibold text-lg flex justify-between items-center">
                  {blog.title}

                  <span className="ml-6 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold">
                    +
                  </span>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-4 text-gray-700 text-sm leading-relaxed">
                  {blog.content}
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Blogs;

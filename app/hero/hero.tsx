"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


const leftItem: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const RightItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const leftContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

function Hero() {
const router =useRouter();

  return (
    <section className="w-full md:px-20 px-5 ">
      <div className="flex flex-col lg:flex-row justify-between gap-5 mx-auto container">
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col justify-between gap-10 max-w-3xl py-10"
        >
          <div className="flex flex-col gap-6">
            <motion.span
              variants={leftItem}
              className={`
                ${montserrat.className}
                text-4xl md:text-6xl
                font-medium
                leading-[1.2] 
                tracking-tight
                block
              `}
            >
              Turning Ideas Into Powerful Digital Brands
            </motion.span>

            <motion.p variants={leftItem} className="text-gray-600 max-w-xl">
              A creative agency crafting impactful design, strategic marketing,
              and scalable digital solutions for modern businesses.
            </motion.p>

            <motion.button
  variants={leftItem}
  onClick={() => router.push("/contact")}
  className="
    group inline-flex items-center gap-2
    rounded-xl border border-black
    bg-black text-white
    hover:bg-white hover:text-black
    px-5 py-2.5
    transition-colors duration-300
    shadow-sm
    w-fit
  "
>
  <span className="font-normal">Let’s Build Your Brand</span>
  <MoveRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
</motion.button>
          </div>

          <motion.div variants={leftItem} className="max-w-xl">
            <span className="text-sm text-gray-600 font-medium">
              Delivering Creative Excellence for 8 Years
            </span>
            <p className="mt-2">
              Backed by 8 years of experience, we help businesses thrive through
              thoughtful brand strategy, creative storytelling, and
              performance-driven digital marketing.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={leftContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-xl py-8"
        >
          <motion.div
            variants={RightItem}
            className="rounded-xl overflow-hidden h-55 sm:h-65 md:h-80 lg:h-145"
          >
            <img
              src="/hero1.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftContainer}
            className="grid grid-rows-2 gap-4 lg:h-145"
          >
            <motion.div
              variants={RightItem}
              className="bg-black text-white rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed text-gray-300">
                “Their strategic thinking and creative execution helped us build
                a brand that truly connects with our audience.”
              </p>

              <div className="mt-4">
                <span className="block text-sm font-medium">Rishvan Vk</span>
                <span className="block text-xs text-gray-400">
                  Founder, brandmatrix
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={RightItem}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="/videomarketting.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

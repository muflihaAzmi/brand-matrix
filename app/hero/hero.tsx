"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const leftItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const RightItem: Variants = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

function Hero() {
  const router = useRouter();

  return (
<section className="w-full md:py-30 py-10 relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between md:gap-10 mx-auto container px-4 sm:px-6">
        
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-between gap-10 md:max-w-3xl py-10"
        >
          <div className="flex flex-col gap-6">
            
            {/* Heading */}
            <motion.span
              variants={leftItem}
              className={`
                ${montserrat.className}
                text-4xl md:text-6xl
                font-semibold
                leading-[1.15]
                tracking-tight
                text-gray-900
              `}
            >
              Turning{" "}
              <span className="text-blue-600">Ideas</span> Into {" "}
              <span className="text-red-600">Powerful</span> Digital Brands
            </motion.span>

            <motion.p
              variants={leftItem}
              className="text-gray-700 max-w-xl text-base md:text-lg"
            >
              A creative agency crafting impactful design, strategic marketing,
              and scalable digital solutions for modern businesses.
            </motion.p>

            {/* Button */}
            <motion.button
              variants={leftItem}
              onClick={() => router.push("/contact")}
              className="
                group inline-flex items-center gap-2
                rounded-xl 
                bg-gradient-to-r from-blue-600 to-red-600
                text-white
                hover:from-red-600 hover:to-blue-600
                px-6 py-3
                transition-all duration-300
                shadow-md hover:shadow-xl
                w-fit
              "
            >
              <span className="font-medium">Let’s Build Your Brand</span>
              <MoveRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Experience Box */}
          <motion.div
            variants={leftItem}
            className="max-w-xl border-l-4 border-red-500 pl-4"
          >
            <span className="text-sm text-blue-700 font-semibold uppercase tracking-wide">
              Delivering Creative Excellence for 8 Years
            </span>

            <p className="mt-2 text-gray-700 leading-relaxed">
              Backed by 8 years of experience, we help businesses thrive through
              thoughtful brand strategy, creative storytelling, and
              performance-driven digital marketing.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl py-8"
        >
          <motion.div
            variants={RightItem}
            className="rounded-xl overflow-hidden h-55 sm:h-65 md:h-80 lg:h-145 relative"
          >
            <img
              src="/hero1.jpg"
              className="h-full w-full object-cover"
              alt="hero"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-red-600/20" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftContainer}
            className="grid grid-rows-2 gap-4  "
          >
            <motion.div
              variants={RightItem}
              className="
                bg-gradient-to-br from-blue-700 to-red-700
                text-white rounded-xl p-6
                flex flex-col justify-between
                shadow-lg
              "
            >
              <p className="text-sm leading-relaxed text-white/90">
                “Their strategic thinking and creative execution helped us build
                a brand that truly connects with our audience.”
              </p>

              <div className="mt-4">
                <span className="block text-sm font-semibold">Rishvan Vk</span>
                <span className="block text-xs text-white/70">
                  Founder, brandmatrix
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={RightItem}
              className="rounded-xl overflow-hidden relative"
            >
              <img
                src="/logo.png"
                className="h-full w-full object-cover"
                alt="video"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-blue-600/20" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

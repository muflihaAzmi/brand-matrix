"use client"
import React from "react";
import { Montserrat } from "next/font/google";
import Clients from "../hero/clients";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const containerVariants : Variants= {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function page() {
  return (
    <section className=" mx-auto md:px-20 px-5 py-20">
      <h1
        className={`text-4xl md:text-5xl font-semibold mb-6 ${montserrat.className}`}
      >
        Our Services
      </h1>

      <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Digital Marketing, Branding, Advertising & Creative Production —
        everything your brand needs to grow and stand out.
      </p>

      <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300"
>
  {[
    {
      title: "Digital Marketing",
      desc: "Result-driven strategies to grow visibility, traffic, and conversions.",
    },
    {
      title: "Social Media Marketing",
      desc: "Build engagement and community across all social platforms.",
    },
    {
      title: "Personal Branding",
      desc: "Craft a strong and authentic digital identity.",
    },
    {
      title: "Meta Ads",
      desc: "High-performing Facebook & Instagram ad campaigns.",
    },
    {
      title: "Video Production",
      desc: "Professional videos that tell your brand story.",
    },
    {
      title: "Video Editing",
      desc: "Clean, modern edits that capture attention.",
    },
    {
      title: "Poster Design",
      desc: "Eye-catching creatives for online & offline campaigns.",
    },
    {
      title: "Logo Creation",
      desc: "Timeless logos that define your brand identity.",
    },
    {
      title: "Railway Ads",
      desc: "High-impact outdoor advertising solutions.",
    },
    {
      title: "Theatre Ads",
      desc: "On-screen promotions before the spotlight hits.",
    },
    {
      title: "Radio Ads",
      desc: "Voice-driven brand recall through audio ads.",
    },
    {
      title: "Consultation",
      desc: "Strategic guidance to scale your business.",
    },
  ].map((service, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      className="
        group bg-[#0f0f0f]
        border border-gray-800
        rounded-xl p-5
        hover:border-gray-600
        transition
      "
    >
      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">
        {service.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  ))}
</motion.div>

      <Clients />
      <section className="px-6 py-15">
        <h2 className="text-3xl font-semibold mb-6 text-center">Find Us</h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-gray-800">
          <iframe
            src="https://www.google.com/maps?q=Manjeri%20Kerala&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="grayscale invert"
          />
        </div>
      </section>
    </section>
  );
}

export default page;

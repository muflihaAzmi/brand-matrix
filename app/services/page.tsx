"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Clients from "../hero/clients";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const containerVariants: Variants = {
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



const services = [
  {
  title: "Digital Marketing",
  desc: "We build performance-driven digital ecosystems that combine strategy, data, and creativity to attract the right audience, nurture leads, and consistently convert them into loyal customers across search, social, and paid channels.",
  image: "/marketing.jpg",
},
{
  title: "Social Media Marketing",
  desc: "We create and manage social media experiences that don’t just get likes — they build relationships, increase brand trust, and drive measurable engagement that turns followers into real business growth.",
  image: "/socialmedia.webp",
},
{
  title: "Personal Branding",
  desc: "We shape authentic, powerful personal brands for founders, executives, and creators by crafting their online presence, visual identity, and storytelling to position them as trusted leaders in their industry.",
  image: "/brand.webp",
},
{
  title: "Meta Ads",
  desc: "We design and manage conversion-focused Facebook and Instagram ad systems using advanced audience targeting, creative testing, and funnel optimization to maximize ROI and scale your sales profitably.",
  image: "/ad.webp",
},
{
  title: "Video Production",
  desc: "From storyboarding to final cut, we produce cinematic, high-impact videos that communicate your brand’s message clearly, emotionally, and persuasively across ads, websites, and social platforms.",
  image: "/videospro.webp",
},
{
  title: "Poster Design & Logo Design",
  desc: "We create bold, visually striking posters and timeless brand identities that communicate your message instantly, build strong recall, and give your business a distinctive, premium presence everywhere it appears.",
  image: "/logobrand.avif",
},
{
  title: "Consultation",
  desc: "Through deep-dive strategy sessions, we evaluate your brand, marketing, and growth challenges, then provide you with clear, actionable insights and a roadmap to scale your business with confidence.",
  image: "/consultation.webp",
},

];

export default function Page() {
  return (
    <section className="mx-auto container md:px-20 px-5 py-20">
      <h1
        className={`text-4xl md:text-5xl  text-center font-medium mb-6 ${montserrat.className}`}
      >
        Our Services
      </h1>

      <p className="text-gray-400  text-center  mb-20 leading-relaxed">
        Digital Marketing, Branding, Advertising & Creative Production —
        everything your brand needs to grow and stand out.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-24"
      >
        {services.map((service, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center gap-14`}
            >
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-medium mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>

              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-90 object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <Clients />

      <section className="px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Find Us
        </h2>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800">
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

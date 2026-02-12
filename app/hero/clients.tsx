"use client";

import React, { useEffect, useRef, useState } from "react";
import { Manrope } from "next/font/google";
import { motion, useInView } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const client = [
  {
    title: "Growth Rate",
    value: 98,
    suffix: "%",
    desc: "Client satisfaction and campaign success rate.",
  },
  {
    title: "Projects Completed",
    value: 150,
    suffix: "+",
    desc: "Delivering high-quality digital solutions.",
  },
  {
    title: "Business Revenue",
    value: 3,
    suffix: "Cr+",
    desc: "Trusted by brands across industries.",
  },
];

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startValue = Math.floor(target * 0.75);
    const steps = 6;
    const duration = 900;
    const increment = (target - startValue) / steps;
    const intervalTime = duration / steps;

    let current = startValue;
    setCount(current);

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.round(current));
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [start, target]);

  return count;
}



function Clients() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-120px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-gray-200"
    >
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-180px] left-[-180px] w-[450px] h-[450px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 md:py-40 px-4 sm:px-6 md:mx-auto md:container">
        {client.map((item, index) => {
          const count = useCountUp(item.value, isInView);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                p-8 text-center rounded-2xl
                bg-white/70 backdrop-blur-md
                border border-blue-100
                shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Title Badge */}
              <span className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                {item.title}
              </span>

              {/* Number */}
              <h2
                className={`text-6xl font-extrabold mt-6 ${manrope.className}`}
              >
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  {count !== null ? count : ""}
                  {item.suffix}
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-[3px] w-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;

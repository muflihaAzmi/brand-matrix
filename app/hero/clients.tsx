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
    value: 2,
    suffix: "Cr+",
    desc: "Trusted by brands across industries.",
  },
];



function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startValue = Math.floor(target * 0.75); // 👈 start from middle
    const steps = 6;                               // 👈 few numbers only
    const duration = 900;                         // ms
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

/* =======================
   COMPONENT
======================= */

function Clients() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: false,          // change to true if you want only once ever
    margin: "-120px",
  });

  return (
    <section ref={sectionRef} className="px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:py-20 py-5 border-b border-gray-200 mx-auto container">
        {client.map((item, index) => {
          const count = useCountUp(item.value, isInView);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 text-center rounded-sm shadow-sm "
            >
              <span className="inline-block bg-gray-100 px-4 py-1 rounded text-sm text-gray-600">
                {item.title}
              </span>

              <h2 className={`text-6xl font-bold mt-4 ${manrope.className}`}>
                {count !== null ? count : ""}
                {item.suffix}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;

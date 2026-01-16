"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Page() {
  const works = [
    {
      type: "image",
      image: "/milan.jpeg",
      title: "Diploma & Design Career Program",
      link: "https://example.com/milan",
    },
    {
      type: "image",
      image: "/skyblue.jpeg",
      title: "Premium Teak Wood Chairs Offer",
      link: "https://example.com/skyblue",
    },
    {
      type: "image",
      image: "/milan2.jpeg",
      title: "Vijaya Offer – Skill Development Discount",
      link: "https://example.com/vijaya-offer",
    },
    {
      type: "image",
      image: "/gazpacho.jpeg",
      title: "Site Supervisor Job Vacancy",
      link: "https://example.com/gazpacho",
    },
    {
      type: "image",
      image: "/shamla.jpeg",
      title: "Happy New Year 2026 – Advanced Scan Centre",
      link: "https://example.com/shamla",
    },
    {
      type: "video",
      image: "/proffesional.mp4",
      title: "Brand Matrix – Creative Showreel Video",
      link: "https://example.com/brand-matrix",
    },
  ];

  return (
    <main className="text-[#111]">
      <section className="mx-auto px-5 md:px-20 pb-20 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-black">Our Works</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-[#111] text-white rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                {work.type === "video" ? (
                  <video
                    src={work.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-4">{work.title}</h3>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                  >
                    View Work →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

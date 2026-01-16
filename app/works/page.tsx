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
      description:
        "Internationally valued diploma programs with project-oriented training, AI-integrated software classes, and 100% placement assistance at Milaan School of Design, Manjeri.",
    },
    {
      type: "image",
      image: "/skyblue.jpeg",
      title: "Premium Teak Wood Chairs Offer",
      description:
        "Designed to last generations. Premium teak wood chairs available from ₹13,899 at SkyBlu International Furniture, Empuraan.",
    },
    {
      type: "image",
      image: "/milan2.jpeg",
      title: "Vijaya Offer – Skill Development Discount",
      description:
        "Special festive offer with up to 10% discount on diploma courses including BIM, Architectural Visualization, and Interior Designing at Milaan School of Design.",
    },
    {
      type: "image",
      image: "/gazpacho.jpeg",
      title: "Site Supervisor Job Vacancy",
      description:
        "Gazpacho Kitchens is hiring Site Supervisors. 1–2 years experience preferred. Freshers are welcome. Apply now in Calicut.",
    },
    {
      type: "image",
      image: "/shamla.jpeg",
      title: "Happy New Year 2026 – Advanced Scan Centre",
      description:
        "Wishing a healthy and confident 2026 from Dr. Shamla’s Advanced Scan Centre.",
    },
    {
      type: "image",
      image: "/succesway.jpeg",
      title: "21 Days Habit Building Challenge",
      description:
        "Create powerful habits in just 21 days. Daily actions that lead to extraordinary results, powered by Success Way.",
    },
    {
      type: "image",
      image: "/happyhome.jpeg",
      title: "Independence Day – Nation Building Campaign",
      description:
        "A patriotic brand campaign blending Indian heritage with modern architecture, featuring India Gate blueprints to symbolize precision, planning, and the future of construction by Happy Homes Build & Design Academy.",
    },
    {
      type: "image",
      image: "/express.jpeg",
      title: "Merry Christmas – 5G Festive Campaign",
      description:
        "A vibrant Christmas campaign for Express Network highlighting ultra-fast 5G connectivity, gaming, and entertainment, designed to promote high-speed internet during the festive season.",
    },
    {
      type: "image",
      image: "/invoteom.jpeg",
      title: "Smart Home Christmas – Luxury Living Campaign",
      description:
        "A premium festive campaign showcasing smart home automation, where Santa controls a luxury villa through a mobile app, representing effortless, modern, and connected living.",
    },
    {
      type: "image",
      image: "/mayamol.jpeg",
      title: "Knowledge to Success – Educational Brand Campaign",
      description:
        "A motivational educational creative designed for Success Way Consulting, highlighting the importance of learning, discipline, and strategic guidance in shaping a successful academic and professional future.",
    },
    {
      type: "video",
      image: "/proffesional.mp4",
      title: "Brand Matrix – Creative Showreel Video",
      description:
        "A dynamic promotional video showcasing Brand Matrix’s expertise in digital marketing, branding, ad creatives, and visual storytelling, designed to present the agency’s impact across multiple industries and campaigns.",
    },
    {
      type: "video",
      image: "/brandmatrix.mp4",
      title: "Brand Matrix – Creative Showreel Video",
      description:
        "A dynamic promotional video showcasing Brand Matrix’s expertise in digital marketing, branding, ad creatives, and visual storytelling, designed to present the agency’s impact across multiple industries and campaigns.",
    },

  ];

  return (
    <main className="text-[#111] ">
      <section className="bg-black container mx-auto px-5 md:px-20 py-20">
        <h1
          className={`text-4xl md:text-5xl tracking-tight text-center font-medium mb-6 text-white ${montserrat.className}`}
        >
         Our Featured Works
        </h1>

        <p className="text-gray-400 text-center mb-10 leading-relaxed">
          Digital Marketing, Branding, Advertising & Creative Production —
          everything your brand needs to grow and stand out.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-10 " >
          {[
            "Digital Marketing",
            "Social Media Marketing",
            "Personal Branding",
            "Meta Ads (Facebook & Instagram)",
            "Video Production",
            "Video Editing",
            "Poster Design",
            "Logo Creation",
            "Railway Ads",
            "Theatre Ads",
            "Radio Ads",
            "Consultation",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#111] text-gray-300 border border-gray-800 rounded-lg px-4 py-3 hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto px-5 md:px-20 pb-20 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-black">
          Our Works
        </h2>

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
                <h3 className="text-lg font-semibold mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

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
      image: "/milan.jpeg",
      title: "Diploma & Design Career Program",
      description:
        "Internationally valued diploma programs with project-oriented training, AI-integrated software classes, and 100% placement assistance at Milaan School of Design, Manjeri.",
    },
    {
      image: "/skyblue.jpeg",
      title: "Premium Teak Wood Chairs Offer",
      description:
        "Designed to last generations. Premium teak wood chairs available from ₹13,899 at SkyBlu International Furniture, Empuraan.",
    },
    {
      image: "/milan2.jpeg",
      title: "Vijaya Offer – Skill Development Discount",
      description:
        "Special festive offer with up to 10% discount on diploma courses including BIM, Architectural Visualization, and Interior Designing at Milaan School of Design.",
    },
    {
      image: "/gazpacho.jpeg",
      title: "Site Supervisor Job Vacancy",
      description:
        "Gazpacho Kitchens is hiring Site Supervisors. 1–2 years experience preferred. Freshers are welcome. Apply now in Calicut.",
    },
    {
      image: "/shamla.jpeg",
      title: "Happy New Year 2026 – Advanced Scan Centre",
      description:
        "Wishing a healthy and confident 2026 from Dr. Shamla’s Advanced Scan Centre.",
    },
    {
      image: "/succesway.jpeg",
      title: "21 Days Habit Building Challenge",
      description:
        "Create powerful habits in just 21 days. Daily actions that lead to extraordinary results, powered by Success Way.",
    },
  ];

  return (
    <main className=" text-[#111]">
      {/* HERO / SERVICES */}
      <section className="bg-black mx-auto px-5 md:px-20 py-20">
  <h1
    className={`text-4xl md:text-5xl font-semibold mb-6 text-white ${montserrat.className}`}
  >
    Our Remarkable Works
  </h1>

  <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed">
    Digital Marketing, Branding, Advertising & Creative Production —
    everything your brand needs to grow and stand out.
  </p>

  {/* SERVICES GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        className="
          bg-[#111]
          text-gray-300
          border border-gray-800
          rounded-lg px-4 py-3
          hover:border-gray-500
          hover:text-white
          transition-all duration-300
        "
      >
        {item}
      </div>
    ))}
  </div>
</section>


      {/* WORKS */}
      <section className="mx-auto px-5 md:px-20 pb-20 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-black">
          Our Works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#111]
                text-white
                rounded-xl overflow-hidden
                hover:scale-[1.02]
                transition-transform duration-300
              "
            >
              <div className="relative h-52">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
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

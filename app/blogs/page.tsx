"use client";

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const blogs = [
    {
      title: "Digital Marketing",
      description:
        "Digital marketing refers to promoting products or services using digital channels such as Google search, social media platforms, websites, and email marketing.",
      link: "https://www.google.com/search?q=Digital+Marketing",
      tag: "Marketing Basics",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "SEO is the process of improving a website’s visibility on Google search results by optimizing content, keywords, and site performance.",
      link: "https://www.google.com/search?q=Search+Engine+Optimization",
      tag: "SEO",
    },
    {
      title: "Social Media Marketing",
      description:
        "Social media marketing uses platforms like Instagram, Facebook, and LinkedIn to connect with audiences and build brand awareness.",
      link: "https://www.google.com/search?q=Social+Media+Marketing",
      tag: "Social Media",
    },
    {
      title: "Content Marketing",
      description:
        "Content marketing focuses on creating valuable blogs, videos, and posts to attract, engage, and retain customers.",
      link: "https://www.google.com/search?q=Content+Marketing",
      tag: "Content",
    },
    {
      title: "Email Marketing",
      description:
        "Email marketing involves sending targeted emails to customers for promotions, updates, and relationship building.",
      link: "https://www.google.com/search?q=Email+Marketing",
      tag: "Email",
    },
    {
      title: "Pay Per Click Advertising (PPC)",
      description:
        "PPC advertising allows businesses to display ads on Google and pay only when users click on their ads.",
      link: "https://www.google.com/search?q=Pay+Per+Click+Advertising",
      tag: "Advertising",
    },
  ];

  return (
    <main className={`${montserrat.className}  min-h-screen relative`}>
       <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/25 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>
      <section className=" mx-auto  px-4 sm:px-6 py-16 container">
        {/* Header */}
        <div className="mb-14 pl-5">
          <h1 className="text-4xl font-semibold text-[#111] mb-4">
            Digital Marketing Blogs
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Explore popular digital marketing topics with easy explanations and
            direct Google search links for deeper learning.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Tag */}
                <span className="inline-block mb-3 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {blog.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#111] mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {blog.description}
                </p>
              </div>

              {/* Link */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                Learn more on Google →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

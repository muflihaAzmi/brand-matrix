"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w8wzmk6",
        "template_alw6yv6",
        formRef.current!,
        "J07hCOO_h0Ur7gPDl"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen w-full">
      {/* ========== TOP SECTION (UNCHANGED) ========== */}
      <div className="bg-black w-full">
        <div className="px-6 py-16 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let’s Connect
            </h1>
            <p className="text-gray-200 max-w-xl mx-auto">
              We’d love to hear from you. Reach out for questions or
              collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Company Info */}
            <div className="bg-white text-black rounded p-5 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Company Logo"
                  className="w-30 h-30 object-contain"
                />
                <h2 className="text-2xl font-bold tracking-wide">
                  Brand Matrix Agency
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">Manjeri, Kerala, India</p>
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">92071 28680</p>
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">BrandMatrix.agency@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full h-80 rounded overflow-hidden bg-white">
              <img
                src="/about.jpg"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== FORM SECTION (UNCHANGED DESIGN) ========== */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-black mb-3">Contact Us</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Fill out the form and we’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 bg-white p-8 rounded shadow"
            >
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Message"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-700 "
              >
                Send Message
              </button>
            </form>

            {/* Map */}
            <div className="bg-[#e5e7eb] w-full rounded overflow-hidden relative min-h-[630px] mb-4">
              <iframe
                src="https://www.google.com/maps?q=11.121481,76.119691&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

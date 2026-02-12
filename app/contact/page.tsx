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
        alert("Message sent successfully ");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message ");
      });
  };

  return (
    <div className="min-h-screen w-full">
      {/* FORM SECTION */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 bg-white p-8 rounded shadow"
            >
              {/* ✅ REQUIRED: receiver email */}
              <input
                type="hidden"
                name="to_email"
                value="muflihaazmi2003@gmail.com"
              />

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
                className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-700"
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

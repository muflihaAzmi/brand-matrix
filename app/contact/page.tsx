"use client";

import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Get form data
    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    // Zod Validation
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
          if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // EmailJS send
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 bg-white p-8 rounded shadow"
            >
              <input
                type="hidden"
                name="to_email"
                value="muflihaazmi2003@gmail.com"
              />

              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Message"
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-700">
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
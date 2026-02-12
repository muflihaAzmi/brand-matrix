"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Menu, X } from "lucide-react";
import { Urbanist } from "next/font/google";
import { useRouter } from "next/navigation";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={`relative z-50 bg-white w-full h-20 ${urbanist.className} shadow-sm`}>
      
      {/* SAME LIKE SECOND NAV */}
      <div className="container mx-auto px-4 sm:pl-2 pr-4 flex items-center justify-between h-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={60}
            className="hidden md:block object-contain"
            priority
          />

          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={60}
            className="block md:hidden object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-black text-[18px] font-medium tracking-wide">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/services" className="hover:opacity-70 transition">
            Services
          </Link>

          <Link href="/works" className="hover:opacity-70 transition">
            Works
          </Link>

          <Link href="/blogs" className="hover:opacity-70 transition">
            Blogs
          </Link>

          <button
            onClick={() => router.push("/contact")}
            className="group inline-flex items-center gap-2 rounded-xl  bg-gradient-to-r from-blue-600 to-red-600 text-white hover:bg-white border px-5 py-2.5 transition-all duration-300 shadow-sm"
          >
            <span className="font-medium">Contact Us</span>
            <MoveRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute left-0 w-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          ${open ? "top-20 opacity-100" : "top-16 opacity-0 pointer-events-none "}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-8 text-black font-medium">
          <Link href="/" onClick={() => setOpen(false)}>
            HOME
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            SERVICES
          </Link>

          <Link href="/works" onClick={() => setOpen(false)}>
            WORKS
          </Link>

          <Link href="/blogs" onClick={() => setOpen(false)}>
            BLOGS
          </Link>

          <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-2 rounded-xl  bg-gradient-to-r from-blue-600 to-red-600 text-white hover:bg-white border px-5 py-2.5 transition-all duration-300 shadow-sm"
          >
            <span className="font-medium">Contact Us</span>
            <MoveRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Menu, X } from "lucide-react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`bg-white h-20 w-full ${urbanist.className} px-2 md:pr-10 shadow-sm`}
    >
      {/* Top Bar */}
      <div className="flex items-center h-full justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={100}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-14 text-black text-[16px] font-medium">
  <Link
    href="/"
    className="border-b-2 border-transparent hover:border-black transition-all duration-200"
  >
    Home
  </Link>

  <Link
    href="/services"
    className="border-b-2 border-transparent hover:border-black transition-all duration-200"
  >
    Services
  </Link>

  <Link
    href="/works"
    className="border-b-2 border-transparent hover:border-black transition-all duration-200"
  >
    Works
  </Link>

  <Link
  href="/blogs"
  className="border-b-2 border-transparent hover:border-black transition-all duration-300 ease-in-out"
>
  Blogs
</Link>


  <button
    className="
      group inline-flex items-center gap-2
      rounded-xl border border-black
      bg-black text-white
      hover:bg-white hover:text-black
      px-5 py-2.5
      transition-all duration-300
      shadow-sm
    "
  >
    <span className="font-medium">Contact us</span>
    <MoveRight
      className="
        w-4 h-4
        opacity-0 -translate-x-1
        group-hover:opacity-100 group-hover:translate-x-1
        transition-all duration-300
      "
    />
  </button>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute left-0 w-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          ${open ? "top-20 opacity-100" : "top-16 opacity-0 pointer-events-none"}
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
            className="
              mt-4 inline-flex items-center justify-center gap-2
              rounded-xl border border-black
              bg-black text-white
              hover:bg-white hover:text-black
              px-5 py-3
              transition-colors duration-300
            "
          >
            CONTACT US
            <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

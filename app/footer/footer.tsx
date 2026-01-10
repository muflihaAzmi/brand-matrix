import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const socials = [
    {
      href: "https://www.instagram.com/brandmatrix_agency?igsh=MTdqOWdicnl6aWl1eQ%3D%3D&utm_source=qr",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/share/1C2itDNbe9/?mibextid=wwXIfr",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://youtube.com/@brandmatrix-agency?si=7BUY8q-R9cG1YF9X",
      icon: Youtube,
      label: "YouTube",
    },
  ];
  return (
    <footer className="w-full bg-black text-white border-t">
      <div className=" mx-auto max-w-7xl px-5 py-16">
        {/* Main Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <span className="text-2xl font-semibold">Brand Matrix Agency</span>
            <p className="text-gray-400 leading-relaxed">
              Crafting impactful brands through strategy, creativity, and
              digital innovation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="
        w-10 h-10 flex items-center justify-center
        rounded-full border border-gray-600
        text-gray-300
        hover:bg-gray-400 hover:border-gray-800 hover:text-white
        transition-all duration-300
      "
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Links */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-400  transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <span>Manjeri, Calicut</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-400  transition-all duration-300">
                  <Mail size={16} />
                </div>
                <span>BrandMatrix.agency@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-400  transition-all duration-300">
                  <Phone size={16} />
                </div>
                <span>92071 28680</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <span className="text-lg font-semibold text-white">
                Quick Links
              </span>

              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Works", href: "/works" },
                { name: "Blogs", href: "/blogs" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    text-gray-400
                    hover:text-gray-700
                    transition-colors duration-300
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Brand Matrix Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

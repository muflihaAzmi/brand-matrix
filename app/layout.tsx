import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./navbar/navbar";




export const metadata: Metadata = {
  title: {
    default: "Brand Matrix Agency | Corporate Branding & Marketing",
    template: "%s | Brand Matrix Agency",
  },
  description:
    "Brand Matrix Agency is a corporate branding and creative marketing agency delivering strategic design and marketing solutions.",

  icons: {
    icon: "/icon-v2.jpg",        // 👈 favicon
    apple: "/apple-v2.jpg",    // 👈 optional (iOS)
  },

  openGraph: {
    title: "Brand Matrix Agency",
    description:
      "Corporate branding and creative marketing agency delivering impactful brand growth.",
    url: "https://brand-matrix-psi.vercel.app/",
    siteName: "Brand Matrix Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brand Matrix Agency – Corporate Branding & Marketing",
      },
    ],
    type: "website",
  },
};


import { Inter } from "next/font/google";
import Footer from "./footer/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  md:text-[16px] text-[14px] font-medium`}
      >
        <Navbar/>{children}<Footer/>
      </body>
    </html>
  );
}

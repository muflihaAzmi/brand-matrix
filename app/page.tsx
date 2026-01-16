import Image from "next/image";
import Hero from "./hero/hero";
import Offer from "./hero/offer";
import Clients from "./hero/clients";
import About from "./hero/about";
import Works from "./hero/works";
import  VideoTestimonials  from "./hero/testimonial";
import Blogs from "./hero/blogs";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Offer/>
      <Clients/>
      <About/>
      <Works/>
      <VideoTestimonials/>
      <Blogs/>
    </div>
  );
}

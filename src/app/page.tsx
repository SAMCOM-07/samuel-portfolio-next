"use client";

import About from "@/components/About";
import Faqs from "@/components/Faq";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";


export default function HomePage() {

  return (
    <div className="pb-16">
      <Home />
      <About showMore='See More' />
      <Technologies />
      <Projects />
      <Faqs />
    </div>
  );
}

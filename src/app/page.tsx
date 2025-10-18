"use client";

import About from "@/components/About";
import Faqs from "@/components/Faq";
import Home from "@/components/Home";
import { Projects } from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";


export default function HomePage() {

  return (
    <div className="pb-16">
      <Home />
      <About showMore='See More' />
      <Services />
      <Technologies />
      <Projects />
      <Faqs />
    </div>
  );
}

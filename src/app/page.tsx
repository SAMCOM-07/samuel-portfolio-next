"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { useEffect, useRef } from "react";

export default function HomePage() {
  
  return (
    <div>
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

import { About } from "@/components/About";
import Faqs from "@/components/Faq";
import Home from "@/components/Home";
import { Projects } from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Connect from "@/components/Connect";
import Chatbot from "@/components/Chatbot";
import Education from "@/components/Education";

export default function HomePage() {

  return (
    <div className="pb-16">
      <Home />
      <Projects />
      <About showMore="See more" />
      <Education />
      <Services />
      <Technologies />
      <div className="flex max-w-6xl mx-auto flex-col lg:flex-row items-center justify-center gap-4 slide-up-animation px-6 mt-12">
        <Faqs />
        <Connect />
      </div>
        <Chatbot />
    </div>
  );
}

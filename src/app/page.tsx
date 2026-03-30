import { About } from "@/components/About";
import Faqs from "@/components/Faq";
import Home from "@/components/Home";
import { ProjectComponent } from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Connect from "@/components/Connect";
import Chatbot from "@/components/Chatbot";
import Education from "@/components/Education";
import { projectsData } from "@/lib/data/data";
import ShowMoreButton from "@/components/ShowMoreButton";

export default function HomePage() {

  const projectsDataSlice = projectsData.slice(0, 6);

  return (
    <div className="pb-16">
      <Home />
      <section>
        <h1 className="text-center mt-18">Featured Projects</h1>
        <p className="text-center mx-auto text-muted-foreground mt-4 max-w-lg">
          A collection of projects that showcase my skills and passion for creating innovative digital solutions.
        </p>
        <ProjectComponent data={projectsDataSlice} />
        <ShowMoreButton href="/projects" text="See all projects" />
      </section>
      <section className="mt-26">
        <About showMore="See more" />
      </section>
      <Education />
      <section className="mx-auto conpad mt-22">
        <Technologies />
      </section>
      <Services />
      <section className="flex max-w-6xl mx-auto flex-col lg:flex-row items-center justify-center gap-4 slide-up-animation px-6 mt-12" aria-label="FAQ and contact section">
        <Faqs />
        <Connect />
      </section>
      <Chatbot />
    </div>
  );
}

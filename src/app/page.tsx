import { About } from "@/components/About";
import Faqs from "@/components/Faq";
import Home from "@/components/Home";
import { ProjectComponent } from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Connect from "@/components/Connect";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import StatsCounter from "@/components/StatsCounter";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import { projectsData } from "@/lib/data/data";
import ShowMoreButton from "@/components/ShowMoreButton";
import { FolderGit2 } from "lucide-react";

export default function HomePage() {
  // Top featured production projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="pb-20 space-y-12 md:space-y-16">
      {/* Hero Section with Interactive Developer Console */}
      <Home />

      {/* Engineering Stats & Impact Metrics */}
      <StatsCounter />

      {/* Engineering Principles & Architecture Bento */}
      <EngineeringPrinciples />

      {/* Featured Projects Section */}
      <section className="conpad pt-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
            <FolderGit2 size={13} />
            <span>Curated Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Systems & Applications
          </h2>
          <p className="text-center mx-auto text-muted-foreground mt-3 max-w-lg text-sm sm:text-base">
            Production-grade web platforms, scalable SaaS architectures, and interactive digital experiences.
          </p>
        </div>

        <ProjectComponent data={featuredProjects} showFilters={false} />
        <ShowMoreButton href="/projects" text="Explore all 12 projects in archive" className="mt-8" />
      </section>

      {/* Work History & Professional Experience */}
      <Experience />

      {/* Core Technologies & Toolchain */}
      <Technologies />

      {/* About Section Summary */}
      <section className="conpad pt-4">
        <About showMore="Read full bio & journey" />
      </section>

      {/* Academic Credentials */}
      <Education />

      {/* What I Offer / Services */}
      <Services />

      {/* FAQ & Quick Reachout Section */}
      <section
        className="conpad pt-8 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12"
        aria-label="FAQ and contact section"
      >
        <div className="w-full lg:w-1/2">
          <Faqs />
        </div>
        <div className="w-full lg:w-1/2">
          <Connect />
        </div>
      </section>
    </div>
  );
}

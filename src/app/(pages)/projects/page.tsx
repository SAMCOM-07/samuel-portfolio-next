import { ProjectComponent } from '@/components/Projects'
import { Metadata } from 'next';
import { projectsData } from '@/lib/data/data';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured projects by Samuel Shonde — from modern landing pages to full-stack web applications built with React, Next.js, and Tailwind CSS.",
};


const MyProjects = () => {
  return (
    <section>
        <h1 className="text-center mt-18">Featured Projects</h1>
        <p className="text-center mx-auto text-muted-foreground mt-4 max-w-lg">
          A collection of projects that showcase my skills and passion for creating innovative digital solutions.
        </p>
        <ProjectComponent data={projectsData} />
      </section>
  )
}

export default MyProjects

import React from "react";
import { projectsData } from './../lib/data/data';
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const { theme, systemTheme } = useTheme();
  console.log(theme);

  const current = theme === "system" ? systemTheme : theme
  const projectsDataSlice = projectsData.slice(0, 2)

  return (
    <div className="projectbg w-full relative mt-22 pt-16 pb-6 conpad">
      {/* background */}
      <div className="projectbg w-full -z-20 absolute inset-0"></div>
      <h1 className="text-center">Featured Projects</h1>
      <p className='text-center mx-auto text-muted-foreground mt-4 max-w-lg'>A collection of projects that showcase my skills and passion for creating innovative digital solutions.</p>

      {/* projects */}

      <div className='flex flex-col gap-16 container mx-auto mt-16'>
        {
          projectsDataSlice && projectsDataSlice.map((project) =>
            < div key={project.id} className={`flex flex-col ${project.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12`}>
              {/* image */}
              <div className="relative w-full h-[300px] aspect-square">
                <Image
                  src={
                    current === 'light' ? project.img[0] : current === 'dark' && project.img.length > 1 ? project.img[1] : project.img[0]
                  }
                  alt={project.name}
                  fill
                  className="object-cover object-center rounded-lg"
                />
              </div>

              {/* details */}
              <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            </div >
          )
        }
      </div>
      <Link
        href="/projects"
        className="mt-12 text-primary text-center hover:underline flex items-center justify-center gap-1 font-medium group bg-secondary py-1 px-3 rounded-lg w-fit mx-auto"
      >
        See more project
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </Link>
    </div >
  );
};

export default Projects;

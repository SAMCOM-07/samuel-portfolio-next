'use client';

import React from "react";
import { projectsData } from './../../../lib/data/data';
import Image from "next/image";
import { useTheme } from "next-themes";

const ProjectsPage = () => {
  const { theme, systemTheme } = useTheme();
  console.log(theme);

  const current = theme === "system" ? systemTheme : theme

  return (
    <div className="projectbg w-full relative mt-22 pt-16 conpad">
      {/* background */}
      <div className="projectbg w-full -z-20 absolute inset-0"></div>
      <h1 className="text-center">Featured Projects</h1>
      <p className='text-center mx-auto text-muted-foreground mt-4 max-w-lg'>A collection of projects that showcase my skills and passion for creating innovative digital solutions.</p>

      {/* projects */}

      <div className='flex flex-col gap-16 container mx-auto mt-16'>

        {
          projectsData && projectsData.map((project) =>
            < div key={project.id} className={`flex flex-col ${project.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12`}>
              {/* image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={
                    current === 'light' ? project.img[0] : current === 'dark' && project.img.length > 1 ? project.img[1] : project.img[0]
                  }
                  alt={project.name}
                  fill
                  className="object-cover object-center rounded-lg aspect-square"
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
    </div >
  );
};

export default ProjectsPage;

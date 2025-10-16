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
    <div className="projectbg w-full relative pt-16 conpad">
      {/* background */}
      <div className="projectbg w-full -z-20 absolute inset-0"></div>
      <h1 className="text-center">Featured Projects</h1>
      <p className='text-center mx-auto text-muted-foreground mt-4 max-w-lg'>A collection of projects that showcase my skills and passion for creating innovative digital solutions.</p>

      {/* projects */}

      <div className='flex flex-col gap-20 lg:gap-40 container mx-auto mt-16'>

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
                  className="object-cover object-center rounded-lg aspect-square hover:scale-105 transition-transform duration-300 "
                />
              </div>

              {/* details */}
              <div>
                <div className="flex justify-between items-center">
                  <h1 className=''>{project.name}</h1>
                  <span className={`text-white font-semibold text-sm ${project.status.includes('Progress') ? 'bg-blue-900 ' : 'bg-green-900'} py-1 px-3 rounded-sm`}>{project.status}</span>
                </div>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </div>
            </div >
          )
        }
      </div>
    </div >
  );
};

export default ProjectsPage;

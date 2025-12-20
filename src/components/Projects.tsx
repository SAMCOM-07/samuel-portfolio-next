'use client';

import { projectsData } from "./../lib/data/data";
import Image from "next/image";
import { useTheme } from "next-themes";
import ShowMoreButton from "./ShowMoreButton";
import Link from "next/link";
import { LinkIcon, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stackVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export const Projects = () => {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;
  const projectsDataSlice = projectsData.slice(0, 2);

  return (
    <div className="w-full relative mt-22 pt-16 pb-6 conpad slide-up-animation">
      <h1 className="text-center">Featured Projects</h1>
      <p className="text-center mx-auto text-muted-foreground mt-4 max-w-lg">
        A collection of projects that showcase my skills and passion for creating innovative digital solutions.
      </p>

      <div className="flex flex-col gap-32 container mx-auto mt-16 pb-6">
        {projectsDataSlice.map((project) => (
          <motion.div
            key={project.id}
            className={`flex flex-col ${project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-6 lg:gap-12 border-2 border-border rounded-xl p-6`}
            variants={projectVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* image */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
              <Image
                src={
                  current === "light"
                    ? project.img[0]
                    : current === "dark" && project.img.length > 1
                      ? project.img[1]
                      : project.img[0]
                }
                alt={project.name}
                fill
                className="object-cover object-center rounded-lg aspect-square focus:scale-105 hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* details */}
            <div>
              <div className="flex justify-between gap-2 items-center">
                <h1 className="">{project.name}</h1>
                <span
                  className={`text-white font-semibold text-sm ${project.status.includes("Progress")
                    ? "bg-blue-900"
                    : "bg-green-900"
                    } py-1 px-2 rounded-sm`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mt-4 text-sm lg:text-base">
                {project.description}
              </p>

              {/* technologies used */}
              <motion.div
                className="flex items-center flex-wrap gap-2 mt-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
              >
                {project.stacks?.map((stack, index) => (
                  <motion.div
                    key={stack.name}
                    variants={stackVariants}
                    custom={index}
                    className="w-fit h-[35px] overflow-hidden bg-muted py-1 px-2 flex items-center gap-2 rounded-md"
                  >
                    <Image
                      src={stack.img}
                      alt={stack.name}
                      width={25}
                      height={25}
                      className="object-contain object-center"
                    />
                    <span className="text-sm">{stack.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* links button */}
              <div className="flex items-center gap-4 mt-6 text-sm">
                <Link
                  target="_blank"
                  href={project.liveUrl}
                  className="px-3 py-2 rounded-full bg-purpple text-white flex items-center gap-2 hover:opacity-70 transition-all duration-300"
                >
                  <LinkIcon size={18} />
                  <span>Preview</span>
                </Link>
                <Link
                  target="_blank"
                  href={project.githubUrl}
                  className="px-3 py-2 rounded-full bg-muted flex items-center gap-2 hover:opacity-70 transition-all duration-300"
                >
                  <Github size={18} />
                  <span>Repository</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ShowMoreButton href="/projects" text="See all projects" />
    </div>
  );
};

export const ProjectsPage = () => {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  return (
    <section className="w-full relative py-16 conpad">
      <div className="projectbg w-full -z-20 absolute inset-0"></div>
      <div className="slide-up-animation">
        <h1 className="text-center">Featured Projects</h1>
        <p className="text-center mx-auto text-muted-foreground mt-4 max-w-lg">
          A collection of projects that showcase my skills and passion for creating innovative digital solutions.
        </p>

        <div className="flex flex-col gap-32 container mx-auto mt-16">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-6 lg:gap-12`}
              variants={projectVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* image */}
              <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={
                    current === "light"
                      ? project.img[0]
                      : current === "dark" && project.img.length > 1
                        ? project.img[1]
                        : project.img[0]
                  }
                  alt={project.name}
                  fill
                  className="object-cover object-center rounded-lg aspect-square hover:scale-105 focus:scale-105 transition-all duration-300"
                />
              </div>

              {/* details */}
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="">{project.name}</h1>
                  <span
                    className={`text-white font-semibold text-sm ${project.status.includes("Progress")
                      ? "bg-blue-900"
                      : "bg-green-900"
                      } py-1 px-2 rounded-sm`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mt-4 text-sm lg:text-base">
                  {project.description}
                </p>

                {/* technologies used */}
                <motion.div
                  className="flex items-center flex-wrap gap-2 mt-6"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {project.stacks?.map((stack, index) => (
                    <motion.div
                      key={stack.name}
                      variants={stackVariants}
                      custom={index}
                      className="w-fit h-[35px] overflow-hidden bg-muted py-1 px-2 flex items-center gap-2 rounded-md"
                    >
                      <Image
                        src={stack.img}
                        alt={stack.name}
                        width={25}
                        height={25}
                        className="object-contain object-center"
                      />
                      <span className="text-sm">{stack.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* links button */}
                <div className="flex items-center gap-4 mt-6 text-sm">
                  <Link
                    target="_blank"
                    href={project.liveUrl}
                    className="px-3 py-2 rounded-full bg-purpple text-white flex items-center gap-2 hover:opacity-70 focus:hover:scale-105 active:hover:scale-105 transition-all duration-300"
                  >
                    <LinkIcon size={18} />
                    <span>Preview</span>
                  </Link>
                  <Link
                    target="_blank"
                    href={project.githubUrl}
                    className="px-3 py-2 rounded-full bg-muted flex items-center gap-2 hover:opacity-70 focus:hover:scale-105 active:hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Repository</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
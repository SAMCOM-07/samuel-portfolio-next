'use client';

import { type Project, projectsData } from "./../lib/data/data";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LinkIcon, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

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


// project display component for homepage
export const ProjectComponent = ({ data }: { data: Project[] }) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-full relative mt-18 pb-6 conpad slide-up-animation">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-16 2xl:gap-8 container mx-auto mt-16 pb-6">
        {data.map((project) => (
          <motion.div
            key={project.id}
            className={`flex flex-col items-start gap-6 lg:gap-12 shadow-md shadow-border rounded-xl p-6`}
            variants={projectVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* image */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
              <Image
                src={
                  mounted && current === "light"
                    ? project.img[0]
                    : mounted && current === "dark" && project.img.length > 1
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
                <h1 className="line-clamp-1">{project.name}</h1>
                <span
                  className={`text-white font-semibold text-sm text-nowrap ${project.status.includes("Progress")
                    ? "bg-blue-900"
                    : "bg-green-900"
                    } py-1 px-2 rounded-sm`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mt-4 text-sm line-clamp-3">
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
                    className="overflow-hidden bg-muted py-1 px-1.5 flex items-center gap-1 rounded-md"
                  >
                    <div className="h-4 w-fit rounded-sm">
                      <Image
                        src={stack.img}
                        alt={stack.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-center"
                      />
                    </div>
                    <span className="text-xs">{stack.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* links button */}
              <div className="flex items-center gap-4 mt-6 text-xs flex-wrap">
                <Link
                  target="_blank"
                  href={project.liveUrl}
                  className="px-3 py-1.5 rounded-full bg-purpple text-white flex items-center gap-2 hover:opacity-70 transition-all duration-300"
                >
                  <LinkIcon size={14} />
                  <span>Preview</span>
                </Link>
                <Link
                  target="_blank"
                  href={project.githubUrl}
                  className="px-3 py-1.5 rounded-full bg-muted flex items-center gap-2 hover:opacity-70 transition-all duration-300"
                >
                  <Github size={14} />
                  <span>Repository</span>
                </Link>
                <Link
                  href={`/projects/${project.id}`}
                  className="px-3 py-1 rounded-full border border-primary text-primary justify-self-end gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span>Read More →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
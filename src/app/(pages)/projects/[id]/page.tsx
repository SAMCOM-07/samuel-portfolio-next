'use client';

import { projectsData, stackData } from "@/lib/data/data";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import ProjectDetailsTechStack from "@/components/ProjectDetailsTechStack";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectDetailsPage(props: ProjectDetailsPageProps) {
  const [projectId, setProjectId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    props.params.then((params) => {
      setProjectId(parseInt(params.id));
      setMounted(true);
    });
  }, [props.params]);

  if (!mounted || projectId === null) {
    return null;
  }

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Get the full stack info with documentation
  const projectStacksWithDocs = project.stacks?.map((stack) => {
    const stackInfo = stackData.find(
      (s) => s.name.toLowerCase() === stack.name.toLowerCase()
    );
    return {
      ...stack,
      documentation: stackInfo?.documentation,
    };
  });

  return (
    <div className="min-h-screen bg-background pb-20 conpad relative">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-16 bg-background py-6"
      >
        <Link
          href="/projects"
          className="text-primary text-sm hover:underline"
        >
          ← Back to Projects
        </Link>
      </motion.div>

      {/* Project Header - Centered */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={fadeUp} className="text-4xl font-bold mb-8">
          {project.name}
        </motion.h1>

        {/* Action Buttons - Centered Below Title */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 flex-wrap"
        >
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:shadow-primary/50 hover:scale-105 active:scale-95"
          >
            <Github size={20} className="group-hover:rotate-6 transition-transform duration-300" />
            Repository
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-primary-foreground px-4 py-1 rounded-lg font-medium transition-all duration-300 bg-primary text-primary-foreground shadow-md shadow-primary/50 hover:scale-105 active:scale-95 "
            >
              <ExternalLink size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Live Demo
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* Project Details Content */}
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-12">
          {/* Introduction */}
          {project.details?.introduction && (
            <motion.section variants={fadeUp}>
              <h2 className="text-3xl font-bold pb-2 mb-6 border-b border-border">
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{project.details.introduction}</ReactMarkdown>
              </div>
            </motion.section>
          )}

          {/* Purpose */}
          {project.details?.purpose && (
            <motion.section variants={fadeUp}>
              <h2 className="text-3xl font-bold pb-2 mb-6 border-b border-border">
                Purpose
              </h2>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{project.details.purpose}</ReactMarkdown>
              </div>
            </motion.section>
          )}

          {/* Features */}
          {project.details?.features && project.details.features.length > 0 && (
            <motion.section variants={fadeUp}>
              <h2 className="text-3xl font-bold pb-2 mb-6 border-b border-border">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.details.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Motivation */}
          {project.details?.motivation && (
            <motion.section variants={fadeUp}>
              <h2 className="text-3xl font-bold pb-2 mb-6 border-b border-border">
                Motivation
              </h2>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{project.details.motivation}</ReactMarkdown>
              </div>
            </motion.section>
          )}

          {/* How to Contribute */}
          {project.details?.howToContribute && (
            <motion.section variants={fadeUp}>
              <h2 className="text-3xl font-bold pb-2 mb-6 border-b border-border">
                How to Contribute
              </h2>
              <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Fork this repository.</li>
                  <li>
                    Create a branch:{" "}
                    <code className="bg-muted px-2 py-1 rounded text-sm inline-block">
                      git checkout -b &lt;branch_name&gt;
                    </code>
                  </li>
                  <li>
                    Make your changes and commit them:{" "}
                    <code className="bg-muted px-2 py-1 rounded text-sm inline-block">
                      git commit -m '&lt;commit_message&gt;'
                    </code>
                  </li>
                  <li>
                    Push to original branch:{" "}
                    <code className="bg-muted px-2 py-1 rounded text-sm inline-block">
                      git push origin &lt;project_name&gt; / &lt;local&gt;
                    </code>
                  </li>
                  <li>Create the pull request.</li>
                </ol>
                <p className="pt-4">
                  Or, see the GitHub documentation on{" "}
                  <Link
                    href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purpple underline hover:text-primary transition-colors duration-300"
                  >
                    how to create a pull request
                  </Link>
                  .
                </p>
              </div>
            </motion.section>
          )}

          {/* Tech Stack */}
          {projectStacksWithDocs && projectStacksWithDocs.length > 0 && (
            <motion.div variants={fadeUp}>
              <ProjectDetailsTechStack stacks={projectStacksWithDocs} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

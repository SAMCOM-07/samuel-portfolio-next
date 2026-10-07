'use client';

import React, { useEffect, useState } from 'react';
import { projectsData, stackData } from '@/lib/data/data';
import Link from 'next/link';
import Image from 'next/image';
import {
  Github,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Layers,
  Cpu,
  Sparkles,
  GitBranch,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { notFound, useRouter } from 'next/navigation';
import ProjectDetailsTechStack from '@/components/TechStack';
import { motion, type Variants } from 'framer-motion';
import Card from '@/components/Card';
import { useTheme } from 'next-themes';

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectDetailsPage(props: ProjectDetailsPageProps) {
  const router = useRouter();
  const [projectId, setProjectId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

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

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const projectStacksWithDocs = project.stacks?.map((stack) => {
    const stackInfo = stackData.find(
      (s) => s.name.toLowerCase() === stack.name.toLowerCase()
    );
    return {
      ...stack,
      documentation: stackInfo?.documentation as string,
    };
  });

  // Next & Previous projects
  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background pb-24 conpad pt-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          type="button"
          onClick={() => router.push('/projects')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group px-3.5 py-1.5 rounded-full bg-secondary/70 hover:bg-secondary border border-border/60 shadow-xs"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </button>

        <span className="font-mono text-xs text-muted-foreground hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 border border-border/40">
          <span>Project {currentIndex + 1} of {projectsData.length}</span>
        </span>
      </div>

      {/* Project Hero Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-brand/10 text-brand border border-brand/20">
            <BookOpen size={12} />
            <span>Architecture & Case Study</span>
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
        >
          {project.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 sm:gap-4 mt-8 flex-wrap"
        >
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              <ExternalLink size={15} />
              <span>Live Application</span>
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-card hover:bg-secondary text-foreground font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-xs"
            >
              <Github size={15} />
              <span>GitHub Repository</span>
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* Main Grid: Content + Sticky Metadata Sidebar */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Deep Dive Narrative (2 Cols) */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Visual Showcase Frame */}
          <motion.div variants={fadeUp}>
            <div className="rounded-2xl border border-border/80 bg-secondary/30 overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/80 border-b border-border/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{project.liveUrl}</span>
                <div className="w-8" />
              </div>
              <div className="relative w-full h-64 sm:h-96">
                <Image
                  src={
                    mounted && currentTheme === 'light'
                      ? project.img[0]
                      : mounted && currentTheme === 'dark' && project.img.length > 1
                      ? project.img[1]
                      : project.img[0]
                  }
                  alt={project.name}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          {project.details?.introduction && (
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                  <Sparkles size={16} className="text-brand" />
                  <h2 className="text-lg font-bold text-foreground">Project Overview</h2>
                </div>
                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <ReactMarkdown>{project.details.introduction}</ReactMarkdown>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Purpose & Scope */}
          {project.details?.purpose && (
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                  <Layers size={16} className="text-brand" />
                  <h2 className="text-lg font-bold text-foreground">Purpose & Problem Statement</h2>
                </div>
                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <ReactMarkdown>{project.details.purpose}</ReactMarkdown>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Key Features */}
          {project.details?.features && project.details.features.length > 0 && (
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/50">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <h2 className="text-lg font-bold text-foreground">Key Features & Architecture</h2>
                </div>
                <ul className="space-y-3">
                  {project.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="text-brand shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}

          {/* Motivation & Engineering Takeaways */}
          {project.details?.motivation && (
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                  <Cpu size={16} className="text-purple-400" />
                  <h2 className="text-lg font-bold text-foreground">Engineering Takeaways & Motivation</h2>
                </div>
                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <ReactMarkdown>{project.details.motivation}</ReactMarkdown>
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Metadata Sidebar (1 Col) */}
        <motion.div
          className="space-y-6 lg:sticky lg:top-24 h-fit"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Metadata Card */}
          <Card>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4 pb-2 border-b border-border/50">
              Project Metadata
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-muted-foreground block text-[11px]">Deployment Status</span>
                <span className="font-semibold text-foreground flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              <div>
                <span className="text-muted-foreground block text-[11px]">Primary Role</span>
                <span className="font-semibold text-foreground mt-0.5 block">
                  Lead Software Engineer
                </span>
              </div>

              <div>
                <span className="text-muted-foreground block text-[11px]">Live URL</span>
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-brand font-medium hover:underline flex items-center gap-1 mt-0.5 break-all"
                  >
                    <span>{project.liveUrl}</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </Link>
                ) : (
                  <span className="text-muted-foreground">Internal repository</span>
                )}
              </div>

              <div>
                <span className="text-muted-foreground block text-[11px]">Source Code</span>
                {project.githubUrl ? (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-brand font-medium hover:underline flex items-center gap-1 mt-0.5 break-all"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </Link>
                ) : (
                  <span className="text-muted-foreground">Proprietary</span>
                )}
              </div>
            </div>
          </Card>

          {/* Tech Stack Breakdown */}
          {projectStacksWithDocs && projectStacksWithDocs.length > 0 && (
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4 pb-2 border-b border-border/50">
                Technologies Utilized
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {projectStacksWithDocs.map((s) => (
                  <div
                    key={s.name}
                    className="p-2.5 rounded-xl bg-secondary/60 border border-border/50 flex items-center gap-2"
                  >
                    <div className="w-5 h-5 relative shrink-0">
                      <Image
                        src={s.img}
                        alt={s.name}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-foreground truncate">{s.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </motion.div>
      </div>

      {/* Bottom Pagination: Next & Prev Projects */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-border/50 flex items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground group p-3 rounded-xl hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">Previous</span>
              <span className="line-clamp-1">{prevProject.name}</span>
            </div>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground group p-3 rounded-xl hover:bg-secondary transition-colors text-right"
          >
            <div>
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">Next Project</span>
              <span className="line-clamp-1">{nextProject.name}</span>
            </div>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

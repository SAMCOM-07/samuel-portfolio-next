'use client';

import React, { useState, useMemo } from 'react';
import { type Project } from './../lib/data/data';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Search,
  Layers,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useEffect } from 'react';
import Card from './Card';

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.25 },
  },
};

type Category = 'All' | 'Full-Stack' | 'Frontend & SaaS' | 'Tools & Utilities';

export const ProjectComponent = ({
  data,
  showFilters = true,
}: {
  data: Project[];
  showFilters?: boolean;
}) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Classify projects
  const getProjectCategory = (project: Project): Category => {
    const name = project.name.toLowerCase();
    const stackNames = project.stacks.map((s) => s.name.toLowerCase());

    if (
      name.includes('omnishop') ||
      name.includes('task manager') ||
      name.includes('user record') ||
      stackNames.includes('express') ||
      stackNames.includes('postgresql') ||
      stackNames.includes('firebase')
    ) {
      return 'Full-Stack';
    }

    if (
      name.includes('dashboard') ||
      name.includes('savora') ||
      name.includes('anon') ||
      name.includes('fylo')
    ) {
      return 'Frontend & SaaS';
    }

    return 'Tools & Utilities';
  };

  const categories: Category[] = ['All', 'Full-Stack', 'Frontend & SaaS', 'Tools & Utilities'];

  const filteredProjects = useMemo(() => {
    return data.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || getProjectCategory(project) === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.stacks.some((s) => s.name.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [data, activeCategory, searchQuery]);

  return (
    <div className="w-full relative">
      {/* Category Tabs & Search Bar */}
      {showFilters && (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-2xl bg-secondary/60 border border-border/80 scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-foreground text-background shadow-xs'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name or tech stack (e.g. Next.js)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-secondary/50 border border-border/70 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
            />
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isCompleted = project.status.toLowerCase().includes('completed');

            return (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between group !p-0 overflow-hidden hover:border-brand/50 hover:shadow-xl transition-all duration-300">
                  <div>
                    {/* Browser Window Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/70 border-b border-border/60">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>

                      <span className="font-mono text-[10px] text-muted-foreground/80 truncate max-w-[140px] sm:max-w-[180px]">
                        {project.liveUrl.replace('https://', '')}
                      </span>

                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted ? 'bg-emerald-400' : 'bg-purple-400 animate-pulse'
                          }`}
                        />
                        <span>{isCompleted ? 'Production' : 'Active'}</span>
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative w-full h-48 sm:h-52 bg-secondary/30 overflow-hidden">
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
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-brand transition-colors line-clamp-1">
                          {project.name}
                        </h3>
                        <span className="font-mono text-[10px] text-muted-foreground px-2 py-0.5 rounded bg-secondary/80 border border-border/40 shrink-0">
                          {getProjectCategory(project)}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                        {project.description}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/50">
                        {project.stacks?.slice(0, 4).map((stack) => (
                          <div
                            key={stack.name}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary/80 text-[11px] font-medium text-foreground/90 border border-border/40"
                          >
                            <div className="w-3.5 h-3.5 relative shrink-0">
                              <Image
                                src={stack.img}
                                alt={stack.name}
                                width={14}
                                height={14}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span>{stack.name}</span>
                          </div>
                        ))}
                        {project.stacks.length > 4 && (
                          <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-secondary/50">
                            +{project.stacks.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-border/40 mt-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <Link
                          target="_blank"
                          href={project.liveUrl}
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-foreground text-background hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-xs"
                        >
                          <ExternalLink size={13} />
                          <span>Live Demo</span>
                        </Link>
                      )}

                      {project.githubUrl && (
                        <Link
                          target="_blank"
                          href={project.githubUrl}
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50 transition-colors"
                          title="View Source Code"
                        >
                          <Github size={14} />
                        </Link>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-purple-300 transition-colors group/link"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Zero Results State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4 rounded-2xl bg-secondary/30 border border-border/50 max-w-md mx-auto">
          <SlidersHorizontal size={28} className="mx-auto text-muted-foreground mb-3" />
          <h4 className="font-bold text-foreground text-base">No matching projects found</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Try adjusting your search query or reset the category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-1.5 rounded-lg bg-secondary text-xs font-medium text-foreground hover:bg-card border border-border transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
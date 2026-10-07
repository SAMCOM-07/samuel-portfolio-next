import { ProjectComponent } from '@/components/Projects';
import { Metadata } from 'next';
import { projectsData } from '@/lib/data/data';
import { FolderGit2, Sparkles, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Projects & Engineering Archive",
  description:
    "Explore the complete portfolio archive by Samuel Shonde — featuring 12+ production platforms, PERN stack applications, and modern frontend systems built with Next.js, React, and TypeScript.",
};

const MyProjects = () => {
  return (
    <div className="conpad pt-12 md:pt-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <FolderGit2 size={13} />
          <span>Engineering Archive</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Projects & Explorations
        </h1>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          A showcase of full-stack web applications, enterprise dashboard interfaces, client solutions, and open-source developer utilities.
        </p>
      </div>

      {/* Filterable Projects Grid */}
      <ProjectComponent data={projectsData} showFilters={true} />
    </div>
  );
};

export default MyProjects;

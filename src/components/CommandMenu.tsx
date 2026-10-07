'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Search,
  FolderGit2,
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Laptop,
  Download,
  Github,
  Linkedin,
  X,
  ExternalLink,
  Command,
} from 'lucide-react';
import { projectsData } from '@/lib/data/data';

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleNavigate = (path: string) => {
    setOpen(false);
    setQuery('');
    router.push(path);
  };

  const handleExternal = (url: string) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredProjects = projectsData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.stacks.some((s) => s.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      {/* Floating Trigger Button on bottom corner */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Command Menu"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border/80 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-brand/40 shadow-lg transition-all active:scale-95 group"
      >
        <span className="flex items-center gap-1 font-bold text-foreground">
          <Command size={12} className="text-brand group-hover:rotate-12 transition-transform" />
          <span>Quick Menu</span>
        </span>
        <span className="px-1.5 py-0.5 rounded bg-secondary text-[10px] border border-border/50">
          ⌘K
        </span>
      </button>

      {/* Modal Dialog Backdrop */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search size={16} className="text-muted-foreground shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, stack, pages, actions..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <X size={15} />
              </button>
            </div>

            {/* Content List */}
            <div className="p-3 max-h-[380px] overflow-y-auto space-y-4 scrollbar text-xs">
              {/* Navigation Links */}
              <div>
                <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Navigation
                </span>
                <div className="mt-1 space-y-0.5">
                  <button
                    type="button"
                    onClick={() => handleNavigate('/')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <User size={14} className="text-brand" />
                      <span>Home / Overview</span>
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Jump</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('/projects')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <FolderGit2 size={14} className="text-brand" />
                      <span>All Projects Archive</span>
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Jump</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('/about')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Briefcase size={14} className="text-brand" />
                      <span>About & Experience</span>
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Jump</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('/contact')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail size={14} className="text-brand" />
                      <span>Contact & Inquiries</span>
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Jump</span>
                  </button>
                </div>
              </div>

              {/* Projects Search Results */}
              <div>
                <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Projects ({filteredProjects.length})
                </span>
                <div className="mt-1 space-y-0.5">
                  {filteredProjects.slice(0, 5).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleNavigate(`/projects/${p.id}`)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground group-hover:text-brand transition-colors">
                          {p.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary/80 text-muted-foreground">
                          {p.stacks[0]?.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">Case Study →</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions & Themes */}
              <div>
                <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Quick Actions & Social
                </span>
                <div className="mt-1 grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setTheme('dark');
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <Moon size={14} className="text-purple-400" />
                    <span>Dark Theme</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTheme('light');
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <Sun size={14} className="text-amber-400" />
                    <span>Light Theme</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleExternal('https://github.com/SAMCOM-07')}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub Profile</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleExternal('https://www.linkedin.com/in/samuelshonde')}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary text-foreground text-left transition-colors"
                  >
                    <Linkedin size={14} className="text-blue-400" />
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Tip */}
            <div className="px-4 py-2.5 bg-secondary/40 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Use <kbd className="px-1 py-0.5 rounded bg-secondary border border-border/60">ESC</kbd> to exit</span>
              <span className="font-mono">Samuel Shonde · Software Engineer</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandMenu;

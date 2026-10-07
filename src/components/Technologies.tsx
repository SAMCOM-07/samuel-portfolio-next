'use client';

import React from 'react';
import { stackData } from '@/lib/data/data';
import TechStack from './TechStack';
import { Layers, Layout, Server, Wrench, Terminal, Cpu } from 'lucide-react';
import Card from './Card';

const Technologies = () => {
  const categories = [
    {
      title: 'Frontend Architecture & UI Systems',
      description: 'Component architecture, state flow, responsive layouts, and 60fps animations.',
      icon: Layout,
      items: stackData.filter((item) => item.category === 'frontend'),
    },
    {
      title: 'Backend, APIs & Database Systems',
      description: 'RESTful API routing, relational schemas, caching, authentication, and cloud storage.',
      icon: Server,
      items: stackData.filter((item) => item.category === 'backend'),
    },
    {
      title: 'DevOps, Build Tooling & Workflow',
      description: 'Git workflows, validation schemas, CI/CD, edge deployments, and developer tooling.',
      icon: Wrench,
      items: stackData.filter((item) => item.category === 'tools'),
    },
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <Cpu size={13} />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Core Technologies & Toolchain
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
          A battle-tested ecosystem of modern frameworks, databases, and engineering tools I leverage to build production-grade web systems.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="!p-6 sm:!p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-brand/10 text-brand border border-brand/20">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-muted-foreground px-2.5 py-1 rounded-full bg-secondary/80 border border-border/40 w-fit shrink-0">
                  {category.items.length} tools
                </span>
              </div>

              <TechStack stacks={category.items} />
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
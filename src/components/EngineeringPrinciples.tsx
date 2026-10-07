'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Cpu, Gauge, ShieldCheck, Layers, GitBranch, TerminalSquare, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Card from './Card';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const EngineeringPrinciples = () => {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <Layers size={13} />
          <span>Engineering Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          How I Architect & Ship Software
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Pragmatic software engineering principles focused on real-world reliability, fast user interactions, and clean maintainable codebases.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Bento 1: Scalable Architecture (Spans 2 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Card className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Cpu size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary/80 border border-border/50">
                  ARCH-01
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                Scalable Full-Stack Architecture
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                Designing systems with strict separation of concerns — utilizing Next.js Server Components for lightning-fast initial render, coupled with modular API layers, resilient PostgreSQL relational schemas, and asynchronous background tasks.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-border/50 font-mono text-xs">
                <div className="p-2 rounded-lg bg-secondary/50 border border-border/40">
                  <span className="text-purple-400 block font-semibold text-[11px]">Server Actions</span>
                  <span className="text-muted-foreground text-[10px]">Zero-API bloat</span>
                </div>
                <div className="p-2 rounded-lg bg-secondary/50 border border-border/40">
                  <span className="text-emerald-400 block font-semibold text-[11px]">Type Invariance</span>
                  <span className="text-muted-foreground text-[10px]">End-to-End Safety</span>
                </div>
                <div className="p-2 rounded-lg bg-secondary/50 border border-border/40 col-span-2 sm:col-span-1">
                  <span className="text-indigo-400 block font-semibold text-[11px]">PostgreSQL & SQL</span>
                  <span className="text-muted-foreground text-[10px]">Indexed Relational DB</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bento 2: Core Web Vitals & Speed */}
        <motion.div variants={itemVariants}>
          <Card className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Gauge size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary/80 border border-border/50">
                  PERF-02
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                Performance & Low Latency
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                Targeting sub-100ms interaction responses through intelligent route prefetching, asset compression, dynamic code splitting, and edge caching strategies.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between font-mono text-xs">
              <span className="text-muted-foreground">Target TTFB</span>
              <span className="text-emerald-400 font-bold">&lt; 150ms</span>
            </div>
          </Card>
        </motion.div>

        {/* Bento 3: Type Safety & Resilient APIs */}
        <motion.div variants={itemVariants}>
          <Card className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <ShieldCheck size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary/80 border border-border/50">
                  SEC-03
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                Strict Type-Safety & Validation
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                Eliminating runtime exceptions before production with strict TypeScript compilation, Zod payload schemas, and sanitized database input flows.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 flex items-center justify-between font-mono text-xs">
              <span className="text-muted-foreground">Type Coverage</span>
              <span className="text-purple-400 font-bold">100% Strict</span>
            </div>
          </Card>
        </motion.div>

        {/* Bento 4: UI Fidelity & Design Systems (Spans 2 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Card className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <TerminalSquare size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary/80 border border-border/50">
                  UX-04
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                Pixel-Precision & Design Systems
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                Translating Figma prototypes into responsive, accessible, and tactile web interfaces with Tailwind CSS and Framer Motion spring physics — making every interaction feel responsive and fluid.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/50 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Accessible (WCAG AA)
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Fluid Responsive Grids
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-400" /> 60fps Physics-Based Animations
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EngineeringPrinciples;

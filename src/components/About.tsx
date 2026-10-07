'use client';

import React from 'react';
import Card from './Card';
import Faqs from './Faq';
import ShowMoreButton from './ShowMoreButton';
import { motion, type Variants } from 'framer-motion';
import Technologies from './Technologies';
import Experience from './Experience';
import Education from './Education';
import EngineeringPrinciples from './EngineeringPrinciples';
import {
  User,
  Compass,
  Target,
  Code2,
  Cpu,
  ShieldCheck,
  Terminal,
  Sparkles,
  GitBranch,
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// About Summary Component (used on Home and top of About page)
export const About = ({ showMore }: { showMore?: string }) => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <User size={13} />
          <span>About Samuel</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Engineering scalable web systems with precision
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Merging thoughtful product architecture with robust frontend and backend engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Narrative Card */}
        <div className="md:col-span-2">
          <Card className="h-full flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Hello! I&#39;m <strong className="text-foreground font-semibold">Samuel Shonde</strong>, a Full-Stack Software Engineer based in Nigeria. I specialize in building resilient, high-performance web applications using <strong className="text-foreground font-semibold">Next.js (App Router), React 19, TypeScript, Node.js, Express, and PostgreSQL</strong>.
              </p>
              <p>
                My approach to software engineering centers on maintainability and speed: writing modular type-safe code, optimizing Core Web Vitals, and designing intuitive user experiences that simplify complex operational workflows.
              </p>
              <p>
                Currently developing production admin dashboards and enterprise interfaces at <strong className="text-foreground font-semibold">Hoste</strong>, I collaborate across cross-functional engineering and design teams to take features from whiteboard concepts to production deployments.
              </p>
            </div>

            {showMore && (
              <div className="mt-6 pt-4 border-t border-border/50">
                <ShowMoreButton text={showMore} href="/about" className="!my-0 !text-left" />
              </div>
            )}
          </Card>
        </div>

        {/* Core Pillars */}
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-xs hover:border-brand/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Code2 size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Type-Safe Architecture</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Modular, strictly typed Next.js and TypeScript ecosystems with zero implicit types.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-xs hover:border-brand/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Cpu size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Speed & Core Vitals</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Sub-100ms TTFB, optimized bundle splitting, server-side caching, and SEO excellence.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-xs hover:border-brand/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Production Resilience</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Robust RESTful API design, database schemas, and structured error handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Full About Page Component
export const AboutMe = () => {
  return (
    <div className="pb-20 conpad">
      {/* Intro Hero Section */}
      <section className="pt-10 md:pt-14">
        <About />
      </section>

      {/* Engineering Principles Bento */}
      <div className="mt-8">
        <EngineeringPrinciples />
      </div>

      {/* Experience Section */}
      <div className="mt-8">
        <Experience />
      </div>

      {/* Tech Journey Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-5xl mx-auto mt-16 px-4 sm:px-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-brand/10 text-brand border border-brand/20">
            <Compass size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">My Engineering Journey</h3>
            <p className="text-xs text-muted-foreground">From self-taught experimentation to engineering enterprise systems</p>
          </div>
        </div>

        <Card>
          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              My journey into software engineering was sparked by an obsession with how digital products function beneath the surface. Starting with web fundamentals and WordPress customization for local businesses, I quickly recognized the transformative power of modern JavaScript and typed engineering architectures.
            </p>
            <p>
              Pursuing a <strong className="text-foreground font-semibold">Bachelor of Engineering in Computer Engineering at Ekiti State University</strong> provided a rigorous foundation in computational theory, data structures, algorithms, and system architecture.
            </p>
            <p>
              Over the past 3+ years, I&#39;ve sharpened my engineering craft across freelance client deliveries and production startup environments like <strong className="text-foreground font-semibold">Hoste</strong> — shipping over a dozen full-stack platforms, enterprise dashboards, and developer utilities.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Academic Credentials */}
      <div className="mt-8">
        <Education />
      </div>

      {/* Skills & Stack */}
      <div className="mt-8">
        <Technologies />
      </div>

      {/* FAQs */}
      <div className="mt-8">
        <Faqs />
      </div>
    </div>
  );
};
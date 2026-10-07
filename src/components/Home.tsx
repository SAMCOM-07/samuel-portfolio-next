'use client';

import React from 'react';
import { Download, FolderGit2, ArrowRight, Terminal, MapPin, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import HeroConsole from "./HeroConsole";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center pt-8 pb-16 conpad overflow-hidden">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand/10 dark:bg-brand/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Main Animated Content */}
      <motion.div
        className="flex flex-col items-center max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Availability & Location Pill */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border/80 text-xs font-mono text-foreground backdrop-blur-md shadow-xs mb-6 hover:border-brand/40 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-foreground">Available for Engineering Roles</span>
          <span className="text-border">|</span>
          <span className="text-muted-foreground flex items-center gap-1 sm:inline-flex">
            <MapPin size={11} className="text-brand" /> Lagos (UTC+1)
          </span>
        </motion.div>

        {/* Primary Headline & Identity */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]"
        >
          Engineering scalable web apps &{' '}
          <span className="brand-gradient-text">distributed systems.</span>
        </motion.h1>

        {/* Narrative & Value Proposition */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed mt-5"
        >
          I&#39;m <strong className="text-foreground font-semibold">Samuel Shonde</strong> — a Full-Stack Software Engineer specializing in <span className="text-foreground font-medium">Next.js, TypeScript, React, Node.js, and PostgreSQL</span>. Focused on architectural precision, clean design systems, and sub-100ms user interfaces.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 mb-12"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2 group"
          >
            <span>Explore Featured Work</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/Shonde-Samuel-Ifeoluwa-Resume.pdf"
            target="_blank"
            download
            className="px-5 py-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground font-semibold text-xs sm:text-sm border border-border/80 active:scale-95 transition-all flex items-center gap-2 shadow-xs"
          >
            <Download size={15} className="text-brand" />
            <span>Download Resume</span>
          </Link>

          <Link
            href="/contact"
            className="px-5 py-3 rounded-full bg-card hover:bg-secondary/60 text-muted-foreground hover:text-foreground font-semibold text-xs sm:text-sm border border-border/60 active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles size={15} className="text-purple-400" />
            <span>Get in Touch</span>
          </Link>
        </motion.div>

        {/* Interactive Developer Terminal */}
        <motion.div variants={fadeUp} className="w-full">
          <HeroConsole />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
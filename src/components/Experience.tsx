'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { experiences } from '@/lib/data/data';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ArrowUpRight, Terminal } from 'lucide-react';
import Card from './Card';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Experience = () => {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <Briefcase size={13} />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Professional Experience
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Demonstrated engineering history of architecting scalable applications, high-throughput interfaces, and production systems.
        </p>
      </div>

      {/* Experience Timeline */}
      <motion.div
        className="space-y-6 relative before:absolute before:inset-0 before:left-3 md:before:left-8 before:w-0.5 before:bg-border/60 before:pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div key={exp.id} variants={itemVariants} className="relative pl-8 md:pl-16">
            {/* Glowing Timeline Node */}
            <div className="absolute left-1 md:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-brand shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
            </div>

            <Card className="hover:border-brand/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-border/50 pb-5 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Present
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Building2 size={15} className="text-brand" />
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-muted-foreground" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-xl bg-secondary/80 text-muted-foreground w-fit border border-border/50 shrink-0">
                  <Calendar size={13} className="text-brand" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements / Responsibilities */}
              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Used */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/40">
                <span className="text-[11px] font-mono font-semibold text-muted-foreground mr-1">
                  Stack:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md bg-secondary/70 text-[11px] font-mono font-medium text-foreground/90 border border-border/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FolderCheck, Sparkles, Terminal, Activity } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    icon: <FolderCheck size={18} className="text-purple-400" />,
    value: '12+',
    label: 'Production Applications',
    sublabel: 'Shipped & deployed live',
  },
  {
    icon: <Code2 size={18} className="text-emerald-400" />,
    value: '3+ Years',
    label: 'Software Engineering',
    sublabel: 'Frontend & PERN stack',
  },
  {
    icon: <Terminal size={18} className="text-indigo-400" />,
    value: '100%',
    label: 'TypeScript Safety',
    sublabel: 'Zero implicit any',
  },
  {
    icon: <Activity size={18} className="text-amber-400" />,
    value: '99+',
    label: 'Lighthouse Performance',
    sublabel: 'Core Web Vitals optimized',
  },
];

export const StatsCounter = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-xs">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-start gap-1 p-3 rounded-xl bg-secondary/30 border border-border/30 hover:border-brand/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-secondary/80 border border-border/40">
                {stat.icon}
              </div>
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
            </div>
            <span className="text-xs font-semibold text-foreground tracking-tight">
              {stat.label}
            </span>
            <span className="text-[11px] text-muted-foreground leading-tight">
              {stat.sublabel}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;

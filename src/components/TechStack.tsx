'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Sparkles } from 'lucide-react';
import Card from './Card';

interface StackItem {
  name: string;
  img: string;
  documentation?: string;
}

interface TechStackProps {
  stacks: StackItem[];
  style?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function TechStack({ stacks, style = '' }: TechStackProps) {
  return (
    <motion.div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 ${style}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {stacks.map((stack) => {
        const Content = (
          <div className="group/tech h-full p-4 rounded-xl bg-card/80 border border-border/70 hover:border-brand/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between gap-3 relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none" />

            <div className="w-12 h-12 rounded-xl bg-secondary/70 p-2.5 flex items-center justify-center group-hover/tech:scale-110 group-hover/tech:bg-brand/10 transition-all duration-300 shrink-0 border border-border/40">
              <Image
                src={stack.img}
                alt={stack.name}
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-foreground tracking-tight line-clamp-1 group-hover/tech:text-brand transition-colors">
                {stack.name}
              </span>
              {stack.documentation && (
                <ExternalLink
                  size={10}
                  className="text-muted-foreground opacity-0 group-hover/tech:opacity-100 transition-opacity"
                />
              )}
            </div>
          </div>
        );

        return (
          <motion.div
            key={stack.name}
            variants={itemVariants}
            className="h-full"
            whileHover={{ y: -4 }}
          >
            {stack.documentation ? (
              <Link
                href={stack.documentation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${stack.name} documentation`}
                className="block h-full focus:outline-none"
              >
                {Content}
              </Link>
            ) : (
              Content
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

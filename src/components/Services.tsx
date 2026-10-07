'use client';

import { motion, type Variants } from 'framer-motion';
import { services } from '@/lib/data/data';
import { Sparkles, Code2, Palette, Zap, Rocket } from 'lucide-react';
import Card from './Card';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const serviceIcons: Record<number, React.ReactNode> = {
  1: <Code2 size={24} className="text-brand" />,
  2: <Palette size={24} className="text-pink-500" />,
  3: <Zap size={24} className="text-amber-500" />,
  4: <Rocket size={24} className="text-emerald-500" />,
};

const Services = () => {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <Sparkles size={13} />
          <span>Services & Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          What I Bring to the Table
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
          From concept and design translation to production deployment and performance tuning.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <Card className="h-full flex flex-col justify-between hover:border-brand/40 group transition-all duration-300">
              <div>
                <div className="p-3 rounded-xl bg-secondary/80 w-fit mb-4 group-hover:scale-105 transition-transform">
                  {serviceIcons[service.id] || <span className="text-2xl">{service.icon}</span>}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 tracking-tight group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
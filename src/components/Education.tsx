'use client';

import Card from './Card';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <GraduationCap size={13} />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Education & Credentials
        </h2>
      </div>

      <Card className="hover:border-brand/40 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-4 mb-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-brand/10 text-brand shrink-0 mt-0.5">
              <Award size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Bachelor of Engineering (B.Eng)
              </h3>
              <p className="text-sm font-semibold text-brand">Computer Engineering</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary/80 text-muted-foreground w-fit border border-border/50">
            <Calendar size={13} className="text-brand" />
            <span>2021 — 2026 (500 Level)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <MapPin size={15} className="text-brand shrink-0" />
          <span>Ekiti State University, Ado-Ekiti, Ekiti State, Nigeria</span>
        </div>
      </Card>
    </motion.section>
  );
};

export default Education;

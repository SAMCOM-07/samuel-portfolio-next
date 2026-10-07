'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ShowMoreButtonProps {
  text: string;
  href: string;
  className?: string;
}

const ShowMoreButton = ({ text, href, className = '' }: ShowMoreButtonProps) => {
  return (
    <div className={`text-center my-6 ${className}`}>
      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-border/80 bg-card hover:bg-secondary text-foreground hover:border-brand/40 transition-all duration-200 group shadow-xs hover:shadow-sm"
      >
        <span>{text}</span>
        <ArrowRight
          size={15}
          className="text-brand group-hover:translate-x-1 transition-transform duration-200"
        />
      </Link>
    </div>
  );
};

export default ShowMoreButton;

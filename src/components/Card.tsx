'use client';

import React from 'react';
import SpotlightCard from './SpotlightCard';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
}

const Card = ({ children, className = '', enableSpotlight = true, ...props }: CardProps) => {
  if (enableSpotlight) {
    return (
      <SpotlightCard className={className} {...props}>
        {children}
      </SpotlightCard>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-card border border-border/70 p-5 sm:p-6 shadow-xs hover:border-border transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export function GlitchText({ text, className, children }: GlitchTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">
        {children || text}
      </span>
      <span 
        className="absolute inset-0 text-cyber-pink opacity-70 animate-glitch"
        style={{ animationDelay: '0.1s' }}
        aria-hidden="true"
      >
        {children || text}
      </span>
      <span 
        className="absolute inset-0 text-cyber-blue opacity-70 animate-glitch"
        style={{ animationDelay: '0.2s' }}
        aria-hidden="true"
      >
        {children || text}
      </span>
    </span>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  borderEffect?: boolean;
  hoverEffect?: boolean;
}

export function CyberCard({ 
  children, 
  className,
  glassEffect = true,
  borderEffect = false,
  hoverEffect = false,
}: CyberCardProps) {
  return (
    <div className={cn(
      "rounded-lg overflow-hidden",
      glassEffect && "glass-card",
      borderEffect && "neo-border",
      hoverEffect && "hover:shadow-lg hover:shadow-cyber-blue/10 transition-shadow",
      className
    )}>
      {children}
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface HologramContainerProps {
  children: React.ReactNode;
  className?: string;
  scanEffect?: boolean;
  glowEffect?: boolean;
}

export function HologramContainer({ 
  children, 
  className, 
  scanEffect = true,
  glowEffect = true
}: HologramContainerProps) {
  return (
    <div className={cn(
      "relative overflow-hidden hologram-effect",
      glowEffect && "animate-glow",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 z-0"></div>
      
      {scanEffect && (
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent opacity-30 animate-scan"></div>
        </div>
      )}
      
      <div className="relative z-20">
        {children}
      </div>
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-cyber-blue/5 pointer-events-none z-30"></div>
    </div>
  );
}

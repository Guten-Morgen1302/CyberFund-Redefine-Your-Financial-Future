import React from 'react';
import { cn } from '@/lib/utils';

interface TickerItem {
  id: string | number;
  text: string;
  color: 'green' | 'yellow' | 'blue' | 'pink' | 'purple';
  icon?: string;
}

interface CyberTickerProps {
  items: TickerItem[];
  className?: string;
}

export function CyberTicker({ items, className }: CyberTickerProps) {
  return (
    <div className={cn("cyber-ticker bg-cyber-dark border border-cyber-blue/20 rounded-lg", className)}>
      <div className="cyber-ticker-item font-exo text-cyber-text-dim">
        {items.map((item) => (
          <span 
            key={item.id}
            className={cn(
              "mr-6",
              item.color === 'green' && "text-cyber-green",
              item.color === 'yellow' && "text-cyber-yellow",
              item.color === 'blue' && "text-cyber-blue",
              item.color === 'pink' && "text-cyber-pink",
              item.color === 'purple' && "text-cyber-purple",
            )}
          >
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

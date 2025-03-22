import React from 'react';
import { cn, getCreditScoreRating } from '@/lib/utils';

interface CreditMeterProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function CreditMeter({ 
  score, 
  size = 'md', 
  showLabel = true,
  className 
}: CreditMeterProps) {
  const rating = getCreditScoreRating(score);
  
  // Calculate rotation based on score (300-850 range)
  const normalizedScore = Math.max(300, Math.min(850, score));
  const rotationDegree = 180 * ((normalizedScore - 300) / 550);
  
  // Determine size classes
  const sizeClasses = {
    sm: 'w-28 h-28 text-3xl',
    md: 'w-40 h-40 text-4xl',
    lg: 'w-48 h-48 text-5xl',
  };
  
  const containerClass = sizeClasses[size];
  
  return (
    <div className={cn("relative", containerClass, className)}>
      {/* Credit Meter Background */}
      <div className="absolute inset-0 rounded-full credit-meter"></div>
      <div className="absolute inset-2 rounded-full bg-cyber-dark"></div>
      
      {/* Score Display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className={cn("font-exo font-bold", {
            'text-cyber-green': rating.color === 'text-cyber-green',
            'text-cyber-yellow': rating.color === 'text-cyber-yellow',
            'text-cyber-pink': rating.color === 'text-cyber-pink',
          })}>
            {score}
          </span>
          {showLabel && (
            <p className="text-xs text-cyber-text-dim">{rating.text}</p>
          )}
        </div>
      </div>
      
      {/* Score Indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={cn("w-[90%] h-[90%] rounded-full border-4 border-transparent", {
            'border-t-cyber-green': rating.color === 'text-cyber-green',
            'border-t-cyber-yellow': rating.color === 'text-cyber-yellow',
            'border-t-cyber-pink': rating.color === 'text-cyber-pink',
          })}
          style={{ transform: `rotate(${rotationDegree}deg)` }}
        ></div>
      </div>
    </div>
  );
}

export default CreditMeter;

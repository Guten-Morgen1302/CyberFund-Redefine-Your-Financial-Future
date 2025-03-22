import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'pink' | 'purple' | 'green';
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

export function NeonButton({ 
  variant = 'primary', 
  size = 'md', 
  color = 'blue',
  children, 
  className,
  glowEffect = true,
  ...props 
}: NeonButtonProps) {
  // Map color to actual color classes
  const colorMap = {
    blue: {
      bg: 'bg-cyber-blue',
      text: 'text-black',
      border: 'border-cyber-blue',
      shadow: 'shadow-cyber-blue',
      hover: 'hover:bg-cyber-blue/10 hover:text-cyber-blue',
    },
    pink: {
      bg: 'bg-cyber-pink',
      text: 'text-black',
      border: 'border-cyber-pink',
      shadow: 'shadow-cyber-pink',
      hover: 'hover:bg-cyber-pink/10 hover:text-cyber-pink',
    },
    purple: {
      bg: 'bg-cyber-purple',
      text: 'text-black',
      border: 'border-cyber-purple',
      shadow: 'shadow-cyber-purple',
      hover: 'hover:bg-cyber-purple/10 hover:text-cyber-purple',
    },
    green: {
      bg: 'bg-cyber-green',
      text: 'text-black',
      border: 'border-cyber-green',
      shadow: 'shadow-cyber-green',
      hover: 'hover:bg-cyber-green/10 hover:text-cyber-green',
    }
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'py-1.5 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: `${colorMap[color].bg} ${colorMap[color].text} ${glowEffect ? `shadow-lg ${colorMap[color].shadow}/20 hover:${colorMap[color].shadow}/40` : ''}`,
    secondary: `bg-transparent ${colorMap[color].border} ${colorMap[color].text === 'text-black' ? `text-${color === 'blue' ? 'cyber-blue' : color === 'pink' ? 'cyber-pink' : color === 'purple' ? 'cyber-purple' : 'cyber-green'}` : colorMap[color].text} ${colorMap[color].hover}`,
    outline: `bg-transparent border ${colorMap[color].border}/50 ${colorMap[color].text === 'text-black' ? `text-${color === 'blue' ? 'cyber-blue' : color === 'pink' ? 'cyber-pink' : color === 'purple' ? 'cyber-purple' : 'cyber-green'}` : colorMap[color].text} ${colorMap[color].hover}`,
  };
  
  return (
    <button
      className={cn(
        "rounded-md font-orbitron transition-all",
        sizeClasses[size],
        variantClasses[variant],
        glowEffect && variant === 'primary' && "animate-glow",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

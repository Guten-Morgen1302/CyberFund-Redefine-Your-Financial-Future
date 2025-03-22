import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  src?: string | null;
  fallback?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  glowColor?: 'blue' | 'pink' | 'purple';
}

export function UserAvatar({ 
  src, 
  fallback, 
  className,
  size = 'md', 
  glowEffect = false,
  glowColor = 'pink'
}: UserAvatarProps) {
  // Generate fallback from first letter if not provided
  const defaultFallback = fallback || 'U';
  
  // Size classes
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };
  
  // Glow color classes
  const glowColorClasses = {
    blue: 'border-cyber-blue animate-glow',
    pink: 'border-cyber-pink animate-glow',
    purple: 'border-cyber-purple animate-glow',
  };
  
  return (
    <Avatar className={cn(
      "relative overflow-hidden", 
      sizeClasses[size],
      glowEffect && "border", 
      glowEffect && glowColorClasses[glowColor],
      className
    )}>
      <AvatarImage src={src || undefined} alt="User avatar" className="object-cover h-full w-full" />
      <AvatarFallback className="bg-cyber-dark text-cyber-text font-orbitron">
        {defaultFallback.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

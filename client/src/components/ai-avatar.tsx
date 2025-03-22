import React from 'react';
import { HologramContainer } from './ui/hologram-container';

interface AIAvatarProps {
  chatBubbleText?: string;
  size?: 'small' | 'medium' | 'large';
}

export function AIAvatar({ 
  chatBubbleText, 
  size = 'medium' 
}: AIAvatarProps) {
  // Size mapping
  const sizeClasses = {
    small: 'w-40 h-40',
    medium: 'w-64 h-64',
    large: 'w-80 h-80'
  };

  return (
    <div className="relative flex justify-center">
      {/* AI Avatar Hologram */}
      <div className={`relative ${sizeClasses[size]} rounded-full bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 animate-float`}>
        <div className="absolute inset-2 rounded-full border border-cyber-pink/20 overflow-hidden hologram-effect">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-cyber-purple/5"></div>
        </div>
        
        {/* Using inline SVG instead of external image for reliability */}
        <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/30 via-cyber-blue/20 to-cyber-pink/30"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-1/2 h-1/2 text-white opacity-80 z-10"
            strokeWidth="1"
          >
            <circle cx="12" cy="8" r="5" fill="#9d4bff" stroke="#00b2ff" />
            <path 
              d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" 
              stroke="#00b2ff" 
              strokeWidth="1.5"
              fill="#9d4bff"
              opacity="0.5"
            />
            <circle cx="8" cy="8" r="1" fill="#00b2ff" />
            <circle cx="16" cy="8" r="1" fill="#00b2ff" />
            <path d="M10 11h4" stroke="#00b2ff" strokeWidth="1" />
            <path
              d="M12 21v-4m0 0l-2-2m2 2l2-2"
              stroke="#ff3e8a"
              strokeWidth="1.5"
              opacity="0.8"
            />
          </svg>
        </div>
        
        <div className="absolute -bottom-6 inset-x-0 flex justify-center">
          <div className="bg-cyber-dark border border-cyber-blue px-4 py-1 rounded-full">
            <p className="font-orbitron text-sm text-cyber-blue">
              <span className="inline-block mr-2 h-2 w-2 bg-cyber-blue rounded-full animate-pulse"></span>
              NOVA Assistant
            </p>
          </div>
        </div>
        
        {/* Scanning Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent opacity-30 animate-scan"></div>
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
          <div className="absolute top-2 left-1/2 h-1 w-1 rounded-full bg-cyber-pink shadow-lg shadow-cyber-pink/50"></div>
          <div className="absolute bottom-10 right-2 h-1.5 w-1.5 rounded-full bg-cyber-blue shadow-lg shadow-cyber-blue/50"></div>
          <div className="absolute top-10 left-4 h-2 w-2 rounded-full bg-cyber-purple shadow-lg shadow-cyber-purple/50"></div>
        </div>
      </div>
      
      {/* Chat Bubble - Only render if text is provided */}
      {chatBubbleText && (
        <div className="absolute top-0 right-0 max-w-[240px] bg-cyber-dark p-4 rounded-lg border border-cyber-blue/30 shadow-lg shadow-cyber-blue/10">
          <p className="text-sm">
            <span className="text-cyber-pink font-orbitron">NOVA:</span> 
            <span className="text-cyber-text-dim">{chatBubbleText}</span>
          </p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-cyber-dark rotate-45 border-r border-b border-cyber-blue/30"></div>
        </div>
      )}
    </div>
  );
}

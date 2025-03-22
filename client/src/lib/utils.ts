import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency with dollar sign and commas
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Format percentage with % sign
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

// Format date to readable format
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateObj);
}

// Calculate relative time (e.g., "2 days ago")
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const secondsDiff = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (secondsDiff < 60) return `${secondsDiff} seconds ago`;
  
  const minutesDiff = Math.floor(secondsDiff / 60);
  if (minutesDiff < 60) return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
  
  const hoursDiff = Math.floor(minutesDiff / 60);
  if (hoursDiff < 24) return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
  
  const daysDiff = Math.floor(hoursDiff / 24);
  if (daysDiff < 30) return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
  
  const monthsDiff = Math.floor(daysDiff / 30);
  if (monthsDiff < 12) return `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''} ago`;
  
  const yearsDiff = Math.floor(monthsDiff / 12);
  return `${yearsDiff} year${yearsDiff !== 1 ? 's' : ''} ago`;
}

// Calculate days left until a deadline
export function getDaysLeft(deadline: Date | string): number {
  const deadlineDate = typeof deadline === 'string' ? new Date(deadline) : deadline;
  const now = new Date();
  
  // Normalize dates to start of day for proper counting
  const deadlineTime = new Date(deadlineDate).setHours(0, 0, 0, 0);
  const nowTime = new Date(now).setHours(0, 0, 0, 0);
  
  return Math.ceil((deadlineTime - nowTime) / (1000 * 60 * 60 * 24));
}

// Map funding type to color
export function getFundingTypeColor(type: string): {bg: string, text: string} {
  switch (type) {
    case 'GRANT':
      return { bg: 'bg-cyber-pink/90', text: 'text-black' };
    case 'MICROLOAN':
      return { bg: 'bg-cyber-blue/90', text: 'text-black' };
    case 'VC_FUNDING':
      return { bg: 'bg-cyber-purple/90', text: 'text-black' };
    default:
      return { bg: 'bg-cyber-text-dim/20', text: 'text-cyber-text-dim' };
  }
}

// Map application status to color
export function getApplicationStatusColor(status: string): {bg: string, text: string} {
  switch (status) {
    case 'PENDING':
      return { bg: 'bg-cyber-text-dim/20', text: 'text-cyber-text-dim' };
    case 'UNDER_REVIEW':
      return { bg: 'bg-cyber-yellow/20', text: 'text-cyber-yellow' };
    case 'APPROVED':
      return { bg: 'bg-cyber-green/20', text: 'text-cyber-green' };
    case 'REJECTED':
      return { bg: 'bg-cyber-pink/20', text: 'text-cyber-pink' };
    case 'DOCUMENTS_NEEDED':
      return { bg: 'bg-cyber-pink/20', text: 'text-cyber-pink' };
    default:
      return { bg: 'bg-cyber-text-dim/20', text: 'text-cyber-text-dim' };
  }
}

// Generate rating text from score
export function getCreditScoreRating(score: number): {text: string, color: string} {
  if (score >= 800) return { text: 'EXCELLENT', color: 'text-cyber-green' };
  if (score >= 740) return { text: 'VERY GOOD', color: 'text-cyber-green' };
  if (score >= 670) return { text: 'GOOD', color: 'text-cyber-green' };
  if (score >= 580) return { text: 'FAIR', color: 'text-cyber-yellow' };
  return { text: 'NEEDS WORK', color: 'text-cyber-pink' };
}

// Generate factor rating from score
export function getFactorRating(score: number): {text: string, color: string} {
  if (score >= 0.8) return { text: 'Excellent', color: 'text-cyber-green' };
  if (score >= 0.7) return { text: 'Strong', color: 'text-cyber-green' };
  if (score >= 0.5) return { text: 'Good', color: 'text-cyber-green' };
  if (score >= 0.3) return { text: 'Fair', color: 'text-cyber-yellow' };
  return { text: 'Limited', color: 'text-cyber-pink' };
}

// Calculate compatibility score between user and funding option (simplified)
export function calculateCompatibility(credit_score: number, fundingType: string): number {
  // Basic compatibility algorithm (would be more complex in a real app)
  const baseScore = (credit_score - 500) / 350; // 500-850 range mapped to 0-1
  
  // Different funding types have different credit requirements
  switch (fundingType) {
    case 'GRANT':
      return Math.min(0.95, baseScore * 1.2); // Grants are less credit dependent
    case 'MICROLOAN':
      return Math.min(0.98, baseScore * 1.1); // Microloans are moderately credit dependent
    case 'VC_FUNDING':
      return Math.min(0.9, baseScore * 0.9); // VC is more about growth potential than credit
    default:
      return baseScore;
  }
}

// Creates animation delay utilities
export function getAnimationDelay(index: number): string {
  return `animation-delay: ${index * 0.1}s`;
}

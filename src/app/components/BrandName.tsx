import React from 'react';

interface BrandNameProps {
  className?: string;
  variant?: 'standard' | 'ai';
}

export default function BrandName({ className = '', variant = 'standard' }: BrandNameProps) {
  if (variant === 'ai') {
    return (
      <span className={className}>
        bevl<span className="text-pink-500">Y</span>tics.ai
      </span>
    );
  }
  
  return (
    <span className={className}>
      bevl<span className="text-pink-500">Y</span>tics
    </span>
  );
} 
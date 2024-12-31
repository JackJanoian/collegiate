import React from 'react';
import { Logo } from './Logo';
import { BrandName } from './BrandName';

interface BrandProps {
  short?: boolean;
  className?: string;
}

export function Brand({ short = false, className = "" }: BrandProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Logo className="h-10 w-10" />
      <BrandName 
        className="ml-3 text-xl text-gray-900 dark:text-white" 
        short={short} 
      />
    </div>
  );
}
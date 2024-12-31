import React from 'react';

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/logo.svg" 
      alt="Ivy League Mentoring Logo"
      className={className}
    />
  );
}
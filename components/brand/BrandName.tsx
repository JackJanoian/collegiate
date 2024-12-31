import React from 'react';

interface BrandNameProps {
  className?: string;
  short?: boolean;
}

export function BrandName({ className = "", short = false }: BrandNameProps) {
  return (
    <span className={`font-bold ${className}`}>
      {short ? "ILM" : "Ivy League Mentoring"}
    </span>
  );
}
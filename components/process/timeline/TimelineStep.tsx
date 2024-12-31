import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
  status: 'upcoming' | 'current' | 'completed';
}

export function TimelineStep({ title, description, date, icon: Icon, status }: TimelineStepProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-ilm-600 text-white';
      case 'current':
        return 'bg-ilm-500 text-white animate-pulse';
      default:
        return 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="flex flex-col items-center w-64">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${getStatusStyles()} transition-all duration-300`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center max-w-[200px]">{description}</p>
      <span className="mt-2 text-xs text-ilm-600 dark:text-ilm-400 font-medium">{date}</span>
    </div>
  );
}
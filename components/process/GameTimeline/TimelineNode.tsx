import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineNodeProps {
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
  isCompleted?: boolean;
  isActive?: boolean;
}

export function TimelineNode({ title, description, date, icon: Icon, isCompleted, isActive }: TimelineNodeProps) {
  return (
    <div className="flex flex-col items-center w-64">
      <div 
        className={`
          relative w-20 h-20 rounded-full flex items-center justify-center
          ${isCompleted ? 'bg-green-500' : isActive ? 'bg-indigo-600 animate-pulse' : 'bg-gray-300 dark:bg-gray-700'}
          transition-all duration-300 hover:scale-110 cursor-pointer
          shadow-lg hover:shadow-xl
        `}
      >
        <Icon className={`h-8 w-8 ${isCompleted || isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
        {isCompleted && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center max-w-[200px]">{description}</p>
      <span className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">{date}</span>
    </div>
  );
}
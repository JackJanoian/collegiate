import React from 'react';

interface TimelineConnectorProps {
  isCompleted?: boolean;
  isActive?: boolean;
}

export function TimelineConnector({ isCompleted, isActive }: TimelineConnectorProps) {
  return (
    <div className="flex-shrink-0 w-24 h-2 mx-2">
      <div 
        className={`
          h-full rounded-full
          ${isCompleted ? 'bg-green-500' : isActive ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'}
          transition-all duration-300
        `}
      />
    </div>
  );
}
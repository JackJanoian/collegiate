import React from 'react';

interface TimelineConnectorProps {
  status: 'upcoming' | 'current' | 'completed';
}

export function TimelineConnector({ status }: TimelineConnectorProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-ilm-600';
      case 'current':
        return 'bg-ilm-500';
      default:
        return 'bg-gray-200 dark:bg-gray-700';
    }
  };

  return (
    <div className="flex-shrink-0 w-24 h-2 mx-2">
      <div className={`h-full rounded-full ${getStatusStyles()} transition-all duration-300`} />
    </div>
  );
}
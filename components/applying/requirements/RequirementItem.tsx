import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface RequirementItemProps {
  name: string;
  status: 'completed' | 'in-progress' | 'pending' | 'not-started' | 'scheduled';
  deadline: string;
}

export function RequirementItem({ name, status, deadline }: RequirementItemProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <li className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getStatusIcon()}
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Due: {new Date(deadline).toLocaleDateString()}
          </span>
        </div>
      </div>
    </li>
  );
}
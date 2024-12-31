import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  name: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

export function StatCard({ name, value, icon: Icon, change, changeType }: StatCardProps) {
  return (
    <div className="relative bg-white dark:bg-gray-700 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <div>
        <div className="absolute bg-indigo-500 rounded-md p-3">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
          {name}
        </p>
      </div>
      <div className="ml-16 pb-6 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
        <p
          className={`ml-2 flex items-baseline text-sm font-semibold
            ${changeType === 'positive' ? 'text-green-600 dark:text-green-400' :
            changeType === 'negative' ? 'text-red-600 dark:text-red-400' :
            'text-gray-500 dark:text-gray-400'}`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}
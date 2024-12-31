import React from 'react';
import { School, FileText, CheckSquare, Sparkles } from 'lucide-react';

const stats = [
  {
    name: 'Selected Schools',
    value: '8',
    icon: School,
    change: '+2 this week',
    changeType: 'positive'
  },
  {
    name: 'Essays Completed',
    value: '6/12',
    icon: FileText,
    change: '50% complete',
    changeType: 'neutral'
  },
  {
    name: 'Requirements Met',
    value: '75%',
    icon: CheckSquare,
    change: '+15% this month',
    changeType: 'positive'
  },
  {
    name: 'Application Strength',
    value: '85',
    icon: Sparkles,
    change: '+5 points',
    changeType: 'positive'
  }
];

export function ApplicationDashboard() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Applications</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Track your progress and manage all your college applications in one place
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="relative bg-white dark:bg-gray-700 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <div>
                  <div className="absolute bg-indigo-500 rounded-md p-3">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.name}
                  </p>
                </div>
                <div className="ml-16 pb-6 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold
                      ${stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' :
                      stat.changeType === 'negative' ? 'text-red-600 dark:text-red-400' :
                      'text-gray-500 dark:text-gray-400'}`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
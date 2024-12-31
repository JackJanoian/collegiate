import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const requirements = [
  {
    school: 'Stanford University',
    items: [
      { name: 'Common App Essay', status: 'completed', deadline: '2024-01-05' },
      { name: 'Supplemental Essays (3)', status: 'in-progress', deadline: '2024-01-05' },
      { name: 'Letters of Recommendation', status: 'pending', deadline: '2024-01-05' },
      { name: 'Transcripts', status: 'completed', deadline: '2024-01-05' },
    ]
  },
  {
    school: 'MIT',
    items: [
      { name: 'MIT Application', status: 'completed', deadline: '2024-01-01' },
      { name: 'Essays (2)', status: 'in-progress', deadline: '2024-01-01' },
      { name: 'Maker Portfolio', status: 'not-started', deadline: '2024-01-01' },
      { name: 'Interview', status: 'scheduled', deadline: '2023-12-15' },
    ]
  }
];

export function RequirementsTracker() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Requirements Tracker</h2>
      
      <div className="space-y-8">
        {requirements.map((school) => (
          <div key={school.school}>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{school.school}</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                {school.items.map((item) => (
                  <li key={item.name} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {item.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : item.status === 'in-progress' ? (
                          <Clock className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Due: {new Date(item.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
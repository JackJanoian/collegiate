import React from 'react';
import { Users, Star, Calendar, Award } from 'lucide-react';
import { MentorshipStats } from '../../types/mentorship';

const stats: MentorshipStats[] = [
  {
    icon: Users,
    label: 'Expert Mentors',
    value: '500+',
    description: 'From top universities'
  },
  {
    icon: Star,
    label: 'Success Rate',
    value: '94%',
    description: 'College acceptance rate'
  },
  {
    icon: Calendar,
    label: 'Sessions',
    value: '10,000+',
    description: 'Completed mentoring sessions'
  },
  {
    icon: Award,
    label: 'Experience',
    value: '8+ Years',
    description: 'Average mentor experience'
  }
];

export function MentorshipOverview() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Connect with Expert Mentors
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get personalized guidance from experienced mentors who have helped students get into their dream schools.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {stat.label}
                      </h3>
                      <p className="mt-1 text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
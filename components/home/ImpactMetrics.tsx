import React from 'react';
import { Users, Award, GraduationCap, Globe } from 'lucide-react';

const metrics = [
  {
    id: 1,
    stat: '10,000+',
    emphasis: 'Students Mentored',
    description: 'Across 50+ countries',
    icon: Users,
  },
  {
    id: 2,
    stat: '$25M+',
    emphasis: 'Scholarships Won',
    description: 'By our mentees',
    icon: Award,
  },
  {
    id: 3,
    stat: '95%',
    emphasis: 'Success Rate',
    description: 'College acceptance',
    icon: GraduationCap,
  },
  {
    id: 4,
    stat: '500+',
    emphasis: 'Global Mentors',
    description: 'From top universities',
    icon: Globe,
  },
];

export function ImpactMetrics() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Global Impact
          </h2>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Transforming lives through mentorship and guidance
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:max-w-none lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className="flex flex-col items-center p-6">
                <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <dt className="mt-5 text-5xl font-extrabold text-gray-900 dark:text-white">
                  {metric.stat}
                </dt>
                <dd className="mt-2">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {metric.emphasis}
                  </span>
                  <p className="mt-1 text-base text-gray-500 dark:text-gray-400">
                    {metric.description}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
import React from 'react';
import { DollarSign, GraduationCap, Calendar, Users } from 'lucide-react';

const stats = [
  {
    title: 'Available Scholarships',
    value: '1,000+',
    icon: DollarSign,
    description: 'Active opportunities',
  },
  {
    title: 'Total Funding',
    value: '$2.5M+',
    icon: GraduationCap,
    description: 'In available awards',
  },
  {
    title: 'Average Award',
    value: '$7,500',
    icon: Calendar,
    description: 'Per scholarship',
  },
  {
    title: 'Success Rate',
    value: '65%',
    icon: Users,
    description: 'Of applicants receive aid',
  },
];

export function ScholarshipOverview() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Find Your Perfect Scholarship
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Browse and filter through thousands of scholarships tailored to your profile and aspirations.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
                      <p className="mt-1 text-2xl font-semibold text-indigo-600">{stat.value}</p>
                      <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
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
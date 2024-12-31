import React from 'react';
import { BarChart3, Users, Star, TrendingUp } from 'lucide-react';

const impacts = [
  {
    title: 'College Applications',
    description: 'Learn how each activity strengthens your college applications',
    icon: BarChart3,
    stats: '85% of admitted students had leadership roles',
  },
  {
    title: 'Personal Development',
    description: 'Develop crucial life skills through hands-on experience',
    icon: TrendingUp,
    stats: '92% report improved time management skills',
  },
  {
    title: 'Career Preparation',
    description: 'Build relevant experience for your future career',
    icon: Star,
    stats: '78% say activities influenced career choice',
  },
  {
    title: 'Community Impact',
    description: 'Make a difference while building your profile',
    icon: Users,
    stats: '500K+ community service hours logged',
  },
];

export function ImpactSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Make Your Activities Count
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Understand how extracurricular activities impact your future
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => {
            const Icon = impact.icon;
            return (
              <div
                key={impact.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {impact.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {impact.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-indigo-600 text-center">
                  {impact.stats}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
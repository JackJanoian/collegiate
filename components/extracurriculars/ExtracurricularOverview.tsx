import React from 'react';
import { Trophy, Clock, Star, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: 'College Applications',
    description: 'Stand out with meaningful experiences',
    icon: Trophy,
  },
  {
    title: 'Skill Development',
    description: 'Build practical and soft skills',
    icon: Star,
  },
  {
    title: 'Time Management',
    description: 'Balance activities and academics',
    icon: Clock,
  },
  {
    title: 'Personal Growth',
    description: 'Discover passions and interests',
    icon: TrendingUp,
  },
];

export function ExtracurricularOverview() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Discover Your Passions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore activities that enhance your college applications while developing valuable skills
            and making a difference.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
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
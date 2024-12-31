import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const highlights = [
  {
    title: 'Guided Journey',
    description: 'Step-by-step guidance through every phase of your college application',
    icon: GraduationCap,
  },
  {
    title: 'Expert Resources',
    description: 'Access to comprehensive guides, templates, and checklists',
    icon: BookOpen,
  },
  {
    title: 'Mentor Support',
    description: 'Connect with experienced mentors who can guide you personally',
    icon: Users,
  },
  {
    title: 'Track Progress',
    description: 'Monitor your progress and stay on top of deadlines',
    icon: Award,
  },
];

export function ProcessOverview() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Your College Application Journey
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We'll guide you through every step of the college application process, from building your academic profile to submitting your applications.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {highlight.description}
                    </p>
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
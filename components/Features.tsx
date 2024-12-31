import React from 'react';
import { GraduationCap, BookOpen, Users, Database } from 'lucide-react';

const features = [
  {
    name: 'Ivy League Mentorship',
    description: 'Mentorship from Ivy League students who have successfully matriculated into the top universities in the world.',
    icon: Users,
  },
  {
    name: 'Comprehensive Support',
    description: 'College application assistance, homework assistance, exam prep, SAT/ACT Prep, financial aid application assistance, interview prep.',
    icon: BookOpen,
  },
  {
    name: 'Success Stories',
    description: 'Hear exactly how Harvard, Yale, Columbia, Princeton, Brown, Cornell, Dartmouth, Penn students got into their dream college.',
    icon: GraduationCap,
  },
  {
    name: 'Resource Database',
    description: 'Comprehensive database comprised of resources our mentors used to help them get into college.',
    icon: Database,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ilm-600 dark:text-ilm-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Get personalized guidance from successful Ivy League students who know exactly what it takes to get in.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ilm-500 dark:bg-ilm-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Book, Award, Users, Star } from 'lucide-react';

const sections = [
  {
    title: 'Academic Profile',
    icon: Book,
    items: [
      { label: 'GPA', value: '3.95' },
      { label: 'Class Rank', value: 'Top 5%' },
      { label: 'SAT Score', value: '1540' },
      { label: 'ACT Score', value: '35' }
    ]
  },
  {
    title: 'Extracurricular Activities',
    icon: Users,
    items: [
      { label: 'Leadership Positions', value: '3' },
      { label: 'Volunteer Hours', value: '200+' },
      { label: 'Club Memberships', value: '4' }
    ]
  },
  {
    title: 'Achievements',
    icon: Award,
    items: [
      { label: 'Academic Awards', value: '5' },
      { label: 'Competition Wins', value: '3' },
      { label: 'Special Recognition', value: '2' }
    ]
  },
  {
    title: 'Skills & Interests',
    icon: Star,
    items: [
      { label: 'Technical Skills', value: '8' },
      { label: 'Languages', value: '2' },
      { label: 'Research Projects', value: '2' }
    ]
  }
];

export function KnowledgeBase() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Knowledge Base</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.label}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
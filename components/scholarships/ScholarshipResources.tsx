import React from 'react';
import { resourceLinks } from '../../data/scholarships';

export function ScholarshipResources() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Helpful Resources</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tools and guides to help you create winning scholarship applications
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resourceLinks.map((resource) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.url}
                className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
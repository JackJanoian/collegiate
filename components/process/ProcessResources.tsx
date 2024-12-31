import React from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';

const resources = [
  {
    title: 'Application Checklist',
    description: 'Complete checklist of everything you need for your applications',
    icon: FileText,
    type: 'PDF',
  },
  {
    title: 'Essay Writing Guide',
    description: 'Tips and templates for crafting compelling college essays',
    icon: BookOpen,
    type: 'Guide',
  },
  {
    title: 'Timeline Template',
    description: 'Customizable timeline to plan your application journey',
    icon: Download,
    type: 'Template',
  },
];

export function ProcessResources() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Helpful Resources</h2>
          <p className="mt-4 text-lg text-gray-600">
            Download guides, templates, and checklists to support your journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
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
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {resource.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
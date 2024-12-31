import React from 'react';
import { TimelineStep } from '../../types/process';

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
      <div className="space-y-8 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="relative pl-12">
              <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white">
                <Icon className="h-4 w-4" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-indigo-600 mt-1">{step.date}</p>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
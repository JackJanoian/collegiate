import React, { useState } from 'react';
import { GameTimeline } from './GameTimeline';
import { timelineSteps } from '../../data/processSteps';
import { CheckCircle, Clock } from 'lucide-react';

export function ProcessTimeline() {
  const [currentStep] = useState(2); // This would normally be controlled by app state

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Your College Journey</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Track your progress through each milestone of the application process
          </p>
        </div>

        <div className="mt-12">
          <GameTimeline steps={timelineSteps} currentStep={currentStep} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Track Progress</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Complete milestones to unlock new achievements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Stay on Schedule</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Follow the recommended timeline for best results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
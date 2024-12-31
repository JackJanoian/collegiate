import React from 'react';
import { TimelineStep as TimelineStepComponent } from './TimelineStep';
import { TimelineConnector } from './TimelineConnector';
import { TimelineStep } from '../../../types/process';

interface TimelineProps {
  steps: TimelineStep[];
  currentStep: number;
}

export function Timeline({ steps, currentStep }: TimelineProps) {
  const getStepStatus = (index: number) => {
    if (index + 1 < currentStep) return 'completed';
    if (index + 1 === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center py-16 px-8 overflow-x-auto hide-scrollbar">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <TimelineStepComponent
              title={step.title}
              description={step.description}
              date={step.date}
              icon={step.icon}
              status={getStepStatus(index)}
            />
            {index < steps.length - 1 && (
              <TimelineConnector status={getStepStatus(index)} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
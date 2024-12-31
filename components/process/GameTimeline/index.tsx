import React, { useRef } from 'react';
import { TimelineNode } from './TimelineNode';
import { TimelineConnector } from './TimelineConnector';
import { TimelineStep } from '../../../types/process';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GameTimelineProps {
  steps: TimelineStep[];
  currentStep?: number;
}

export function GameTimeline({ steps, currentStep = 1 }: GameTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
      </button>

      {/* Timeline Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-center py-16 px-8 min-w-max">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <TimelineNode
                title={step.title}
                description={step.description}
                date={step.date}
                icon={step.icon}
                isCompleted={index + 1 < currentStep}
                isActive={index + 1 === currentStep}
              />
              {index < steps.length - 1 && (
                <TimelineConnector
                  isCompleted={index + 1 < currentStep}
                  isActive={index + 1 === currentStep}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
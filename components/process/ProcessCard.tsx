import React from 'react';
import { ProcessCard as ProcessCardType } from '../../types/process';

interface ProcessCardProps {
  card: ProcessCardType;
}

export function ProcessCard({ card }: ProcessCardProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[card.priority]}`}>
          {card.priority}
        </span>
      </div>
      <p className="mt-2 text-gray-600">{card.description}</p>
      <div className="mt-4">
        <span className="text-sm font-medium text-gray-500">Timeline: {card.timeline}</span>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900">Key Tips:</h4>
        <ul className="mt-2 space-y-2">
          {card.tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-1.5 mr-2"></span>
              <span className="text-sm text-gray-600">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
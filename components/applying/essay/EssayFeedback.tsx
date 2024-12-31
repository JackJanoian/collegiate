import React from 'react';
import { MessageCircle, ThumbsUp, AlertCircle } from 'lucide-react';

const feedback = [
  {
    type: 'strength',
    message: 'Strong opening paragraph that captures attention',
    icon: ThumbsUp,
  },
  {
    type: 'suggestion',
    message: 'Consider adding more specific examples in the second paragraph',
    icon: MessageCircle,
  },
  {
    type: 'warning',
    message: 'Watch word count - currently over limit by 50 words',
    icon: AlertCircle,
  },
];

export function EssayFeedback() {
  return (
    <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">AI Feedback</h3>
      <div className="space-y-3">
        {feedback.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-md"
            >
              <Icon
                className={`h-5 w-5 mt-0.5 ${
                  item.type === 'strength'
                    ? 'text-green-500'
                    : item.type === 'suggestion'
                    ? 'text-blue-500'
                    : 'text-yellow-500'
                }`}
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
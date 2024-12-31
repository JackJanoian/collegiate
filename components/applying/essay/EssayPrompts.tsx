import React from 'react';
import { FileText } from 'lucide-react';

const prompts = [
  {
    school: 'Common App',
    prompt: 'Some students have a background, identity, interest, or talent that is so meaningful...',
    wordLimit: 650,
  },
  {
    school: 'Stanford',
    prompt: 'What matters to you, and why?',
    wordLimit: 250,
  },
  {
    school: 'MIT',
    prompt: 'Describe the world you come from...',
    wordLimit: 500,
  },
];

export function EssayPrompts() {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Essay Prompts</h3>
      <div className="space-y-4">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {prompt.school}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {prompt.wordLimit} words
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{prompt.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
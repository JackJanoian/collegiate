import React from 'react';
import { Save, RefreshCw } from 'lucide-react';

export function EssayEditor() {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Editor</h3>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Save className="h-4 w-4 mr-1" />
            Save
          </button>
          <button className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
            <RefreshCw className="h-4 w-4 mr-1" />
            AI Suggestions
          </button>
        </div>
      </div>
      <textarea
        className="w-full h-64 p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Start writing your essay here..."
      />
    </div>
  );
}
import React from 'react';
import { PenTool, FileText, MessageCircle, CheckCircle } from 'lucide-react';
import { EssayEditor } from './essay/EssayEditor';
import { EssayPrompts } from './essay/EssayPrompts';
import { EssayFeedback } from './essay/EssayFeedback';

export function EssayWorkspace() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Essay Workspace</h2>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <PenTool className="h-4 w-4 mr-2" />
            New Draft
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EssayPrompts />
        <div className="lg:col-span-2">
          <EssayEditor />
          <EssayFeedback />
        </div>
      </div>
    </div>
  );
}
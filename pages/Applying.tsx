import React from 'react';
import { ApplicationDashboard } from '../components/applying/ApplicationDashboard';
import { KnowledgeBase } from '../components/applying/KnowledgeBase';
import { EssayWorkspace } from '../components/applying/EssayWorkspace';
import { RequirementsTracker } from '../components/applying/RequirementsTracker';

export function Applying() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ApplicationDashboard />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <RequirementsTracker />
        <KnowledgeBase />
        <EssayWorkspace />
      </div>
    </div>
  );
}
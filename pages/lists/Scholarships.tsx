import React from 'react';
import { ScholarshipOverview } from '../../components/scholarships/ScholarshipOverview';
import { ScholarshipList } from '../../components/scholarships/ScholarshipList';
import { ScholarshipResources } from '../../components/scholarships/ScholarshipResources';

export function Scholarships() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScholarshipOverview />
      <ScholarshipList />
      <ScholarshipResources />
    </div>
  );
}
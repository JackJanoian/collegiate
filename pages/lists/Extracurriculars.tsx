import React from 'react';
import { ExtracurricularOverview } from '../../components/extracurriculars/ExtracurricularOverview';
import { ActivityExplorer } from '../../components/extracurriculars/ActivityExplorer';
import { ImpactSection } from '../../components/extracurriculars/ImpactSection';

export function Extracurriculars() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ExtracurricularOverview />
      <ActivityExplorer />
      <ImpactSection />
    </div>
  );
}
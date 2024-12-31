import React from 'react';
import { ResourceList } from '../../components/resources/ResourceList';
import { ResourceFilters } from '../../components/resources/ResourceFilters';
import { ResourceOverview } from '../../components/resources/ResourceOverview';

export function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResourceOverview />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ResourceFilters />
          </div>
          <div className="lg:col-span-3">
            <ResourceList />
          </div>
        </div>
      </div>
    </div>
  );
}
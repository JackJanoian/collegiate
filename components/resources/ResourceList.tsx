import React from 'react';
import { ResourceCard } from './ResourceCard';
import { useResources } from '../../hooks/useResources';

export function ResourceList() {
  const { resources, loading } = useResources();

  if (loading) {
    return <div>Loading resources...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
import React, { useState } from 'react';
import { ActivityCard } from './ActivityCard';
import { ActivityFilters } from './ActivityFilters';
import { activities } from '../../data/extracurriculars';
import { ActivityFilters as FilterTypes } from '../../types/extracurriculars';

export function ActivityExplorer() {
  const [filters, setFilters] = useState<FilterTypes>({});

  const filteredActivities = activities.filter(activity => {
    if (filters.category && activity.category !== filters.category) {
      return false;
    }
    if (filters.timeCommitment && activity.timeCommitment.hoursPerWeek > filters.timeCommitment) {
      return false;
    }
    if (filters.hasAwards && !activity.recognitions?.length) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ActivityFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredActivities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
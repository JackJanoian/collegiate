import React from 'react';
import { Filter } from 'lucide-react';

const EXPERTISE_AREAS = [
  'College Essays',
  'STEM Applications',
  'Interview Prep',
  'SAT/ACT Prep',
  'Math',
  'Biology',
  'Research',
  'Engineering',
  'Computer Science',
  'Business Applications',
  'Arts Applications'
];

interface MentorFiltersProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export function MentorFilters({ activeFilters, onFilterChange }: MentorFiltersProps) {
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      onFilterChange(activeFilters.filter(f => f !== filter));
    } else {
      onFilterChange([...activeFilters, filter]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-ilm-600" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Expertise
          </h4>
          <div className="space-y-2">
            {EXPERTISE_AREAS.map((area) => (
              <label key={area} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-ilm-600 focus:ring-ilm-500"
                  checked={activeFilters.includes(area)}
                  onChange={() => toggleFilter(area)}
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {area}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => onFilterChange([])}
          className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
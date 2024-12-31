import React from 'react';
import { Filter } from 'lucide-react';
import { ActivityFilters as FilterTypes } from '../../types/extracurriculars';
import { ACTIVITY_CATEGORIES, TIME_COMMITMENTS } from '../../constants/activities';

interface ActivityFiltersProps {
  filters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}

export function ActivityFilters({ filters, onFilterChange }: ActivityFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.category || 'all'}
            onChange={(e) => onFilterChange({
              ...filters,
              category: e.target.value === 'all' ? undefined : e.target.value
            })}
          >
            {ACTIVITY_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time Commitment</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.timeCommitment || 0}
            onChange={(e) => onFilterChange({
              ...filters,
              timeCommitment: parseInt(e.target.value)
            })}
          >
            {TIME_COMMITMENTS.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={filters.hasAwards || false}
              onChange={(e) => onFilterChange({
                ...filters,
                hasAwards: e.target.checked
              })}
            />
            <span className="ml-2 text-sm text-gray-600">Show only activities with awards</span>
          </label>
        </div>

        <button
          onClick={() => onFilterChange({})}
          className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { Filter } from 'lucide-react';
import { ApplicationFilters as FilterTypes } from '../../types/applications';
import { SAMPLE_TAGS, MAJORS, TOP_SCHOOLS } from '../../constants/applications';

interface ApplicationFiltersProps {
  filters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}

export function ApplicationFilters({ filters, onFilterChange }: ApplicationFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Major</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.major || 'All'}
            onChange={(e) => onFilterChange({
              ...filters,
              major: e.target.value === 'All' ? undefined : e.target.value
            })}
          >
            {MAJORS.map((major) => (
              <option key={major} value={major}>{major}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">School</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.schoolName || 'All'}
            onChange={(e) => onFilterChange({
              ...filters,
              schoolName: e.target.value === 'All' ? undefined : e.target.value
            })}
          >
            {TOP_SCHOOLS.map((school) => (
              <option key={school} value={school}>{school}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">GPA Range</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              step="0.1"
              min="0"
              max="4.0"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={filters.gpaRange?.[0] || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                gpaRange: [Number(e.target.value), filters.gpaRange?.[1] || 4.0]
              })}
            />
            <input
              type="number"
              placeholder="Max"
              step="0.1"
              min="0"
              max="4.0"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={filters.gpaRange?.[1] || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                gpaRange: [filters.gpaRange?.[0] || 0, Number(e.target.value)]
              })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="space-y-2">
            {SAMPLE_TAGS.map((tag) => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={filters.tags?.includes(tag) || false}
                  onChange={(e) => {
                    const tags = filters.tags || [];
                    onFilterChange({
                      ...filters,
                      tags: e.target.checked
                        ? [...tags, tag]
                        : tags.filter((t) => t !== tag)
                    });
                  }}
                />
                <span className="ml-2 text-sm text-gray-600">{tag}</span>
              </label>
            ))}
          </div>
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
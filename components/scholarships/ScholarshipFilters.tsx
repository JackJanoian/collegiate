import React from 'react';
import { Filter } from 'lucide-react';
import { ScholarshipFilters as FilterTypes } from '../../types/scholarships';

interface ScholarshipFiltersProps {
  filters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}

export function ScholarshipFilters({ filters, onFilterChange }: ScholarshipFiltersProps) {
  const majors = [
    'All',
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Mathematics',
    'Biology',
    'Economics',
  ];

  const yearLevels = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum GPA</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="4.0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.gpa || ''}
            onChange={(e) => onFilterChange({ ...filters, gpa: parseFloat(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Field of Study</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.major || 'All'}
            onChange={(e) => onFilterChange({ ...filters, major: e.target.value })}
          >
            {majors.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year in School</label>
          <div className="mt-2 space-y-2">
            {yearLevels.map((year) => (
              <label key={year} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={filters.yearInSchool?.includes(year) || false}
                  onChange={(e) => {
                    const yearInSchool = filters.yearInSchool || [];
                    onFilterChange({
                      ...filters,
                      yearInSchool: e.target.checked
                        ? [...yearInSchool, year]
                        : yearInSchool.filter((y) => y !== year),
                    });
                  }}
                />
                <span className="ml-2 text-sm text-gray-600">{year}</span>
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
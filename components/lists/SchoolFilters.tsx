import React, { useState } from 'react';
import { SchoolFilters as FilterTypes } from '../../types/lists';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
  return (
    <div className="border-b border-gray-200 py-3">
      <button
        className="flex w-full items-center justify-between text-sm font-medium text-gray-900"
        onClick={onToggle}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

export function SchoolFilters({ filters, onFilterChange }: {
  filters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}) {
  const [openSections, setOpenSections] = useState({
    ranking: true,
    academics: false,
    financial: false,
    campus: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const majors = [
    "All",
    "Computer Science",
    "Engineering",
    "Mathematics",
    "Biology",
    "Economics",
    "Psychology"
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-indigo-600" />
          <h3 className="font-medium text-gray-900">Filters</h3>
        </div>
      </div>

      <div className="p-4">
        <FilterSection
          title="Rankings & Scores"
          isOpen={openSections.ranking}
          onToggle={() => toggleSection('ranking')}
        >
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-700">Overall Ranking</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.ranking?.overall?.[0] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    ranking: {
                      ...filters.ranking,
                      overall: [Number(e.target.value), filters.ranking?.overall?.[1] || 400]
                    }
                  })}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.ranking?.overall?.[1] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    ranking: {
                      ...filters.ranking,
                      overall: [filters.ranking?.overall?.[0] || 1, Number(e.target.value)]
                    }
                  })}
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-700">Acceptance Rate (%)</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.acceptanceRate?.[0] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    acceptanceRate: [Number(e.target.value), filters.acceptanceRate?.[1] || 100]
                  })}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.acceptanceRate?.[1] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    acceptanceRate: [filters.acceptanceRate?.[0] || 0, Number(e.target.value)]
                  })}
                />
              </div>
            </div>
          </div>
        </FilterSection>

        <FilterSection
          title="Academics"
          isOpen={openSections.academics}
          onToggle={() => toggleSection('academics')}
        >
          <div>
            <label className="text-xs text-gray-700">Major</label>
            <select
              className="mt-1 block w-full px-2 py-1 text-sm border rounded"
              value={filters.major || 'All'}
              onChange={(e) => onFilterChange({ ...filters, major: e.target.value })}
            >
              {majors.map((major) => (
                <option key={major} value={major}>{major}</option>
              ))}
            </select>
          </div>
        </FilterSection>

        <FilterSection
          title="Financial"
          isOpen={openSections.financial}
          onToggle={() => toggleSection('financial')}
        >
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-700">Annual Tuition ($)</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.tuitionRange?.[0] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    tuitionRange: [Number(e.target.value), filters.tuitionRange?.[1] || 100000]
                  })}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-2 py-1 text-sm border rounded"
                  value={filters.tuitionRange?.[1] || ''}
                  onChange={(e) => onFilterChange({
                    ...filters,
                    tuitionRange: [filters.tuitionRange?.[0] || 0, Number(e.target.value)]
                  })}
                />
              </div>
            </div>
          </div>
        </FilterSection>

        <FilterSection
          title="Campus Life"
          isOpen={openSections.campus}
          onToggle={() => toggleSection('campus')}
        >
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600"
                checked={filters.campusLife?.researchOpportunities || false}
                onChange={(e) => onFilterChange({
                  ...filters,
                  campusLife: {
                    ...filters.campusLife,
                    researchOpportunities: e.target.checked
                  }
                })}
              />
              <label className="ml-2 text-sm text-gray-700">Research Opportunities</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600"
                checked={filters.campusLife?.internshipPrograms || false}
                onChange={(e) => onFilterChange({
                  ...filters,
                  campusLife: {
                    ...filters.campusLife,
                    internshipPrograms: e.target.checked
                  }
                })}
              />
              <label className="ml-2 text-sm text-gray-700">Internship Programs</label>
            </div>
          </div>
        </FilterSection>
      </div>

      <div className="p-4 border-t border-gray-200">
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
import React, { useState } from 'react';
import { ScholarshipCard } from './ScholarshipCard';
import { ScholarshipFilters } from './ScholarshipFilters';
import { scholarships } from '../../data/scholarships';
import { ScholarshipFilters as FilterTypes } from '../../types/scholarships';

export function ScholarshipList() {
  const [filters, setFilters] = useState<FilterTypes>({});

  const filteredScholarships = scholarships.filter(scholarship => {
    if (filters.gpa && scholarship.eligibility.gpa > filters.gpa) {
      return false;
    }
    if (filters.major && !scholarship.eligibility.majors.includes(filters.major)) {
      return false;
    }
    if (filters.yearInSchool && !scholarship.eligibility.yearInSchool.some(year => 
      filters.yearInSchool?.includes(year))) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ScholarshipFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredScholarships.map(scholarship => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
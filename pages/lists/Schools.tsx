import React, { useState } from 'react';
import { School, SchoolFilters as FilterTypes } from '../../types/lists';
import { SchoolCard } from '../../components/lists/SchoolCard';
import { SchoolFilters } from '../../components/lists/SchoolFilters';
import { schools } from '../../data/schools';

export function Schools() {
  const [filters, setFilters] = useState<FilterTypes>({});

  const filterSchools = (schools: School[]) => {
    return schools.filter(school => {
      if (filters.state && filters.state !== 'All' && school.location.state !== filters.state) {
        return false;
      }
      if (filters.major && filters.major !== 'All' && !school.topMajors.includes(filters.major)) {
        return false;
      }
      if (filters.acceptanceRate) {
        const [min, max] = filters.acceptanceRate;
        if (school.acceptanceRate < min || school.acceptanceRate > max) {
          return false;
        }
      }
      return true;
    });
  };

  const filteredSchools = filterSchools(schools);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Universities & Colleges
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore and filter through top universities to find your perfect match
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SchoolFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
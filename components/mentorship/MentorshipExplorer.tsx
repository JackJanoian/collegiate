import React, { useState } from 'react';
import { MentorCard } from './MentorCard';
import { MentorFilters } from './MentorFilters';
import { MentorDetail } from './MentorDetail';
import { mentors } from '../../data/mentorship';
import { Mentor, MentorFilters as FilterTypes } from '../../types/mentorship';

export function MentorshipExplorer() {
  const [filters, setFilters] = useState<FilterTypes>({});
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const filteredMentors = mentors.filter(mentor => {
    if (filters.expertise?.length && !filters.expertise.some(exp => 
      mentor.expertise.includes(exp))) {
      return false;
    }
    if (filters.specializations?.length && !filters.specializations.some(spec => 
      mentor.specializations.includes(spec))) {
      return false;
    }
    if (filters.rating && mentor.rating < filters.rating) {
      return false;
    }
    if (filters.availability && mentor.availability.hours !== filters.availability) {
      return false;
    }
    return true;
  });

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <MentorFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  onSelect={() => setSelectedMentor(mentor)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedMentor && (
        <MentorDetail
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      )}
    </div>
  );
}
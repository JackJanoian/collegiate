import React from 'react';
import { MentorCard } from './MentorCard';
import { Mentor } from '../../types/mentorship';

interface MentorGridProps {
  mentors: Mentor[];
}

export function MentorGrid({ mentors }: MentorGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
}
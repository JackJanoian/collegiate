import React from 'react';
import { Star, GraduationCap, Calendar } from 'lucide-react';
import { Mentor } from '../../types/mentorship';

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {mentor.name}
            </h3>
            <div className="flex items-center mt-1">
              <GraduationCap className="h-4 w-4 text-ilm-600" />
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {mentor.university} '{mentor.graduationYear.toString().slice(-2)}
              </span>
            </div>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {mentor.rating} ({mentor.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">{mentor.bio}</p>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ilm-100 text-ilm-800 dark:bg-ilm-900 dark:text-ilm-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <a
            href={`https://calendly.com/${mentor.calendlyUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-ilm-600 hover:bg-ilm-700 dark:bg-ilm-500 dark:hover:bg-ilm-600"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Session
          </a>
        </div>
      </div>
    </div>
  );
}
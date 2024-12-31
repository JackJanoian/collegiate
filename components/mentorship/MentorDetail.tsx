import React from 'react';
import { Star, Clock, GraduationCap, Award, Calendar } from 'lucide-react';
import { Mentor } from '../../types/mentorship';

interface MentorDetailProps {
  mentor: Mentor;
  onClose: () => void;
}

export function MentorDetail({ mentor, onClose }: MentorDetailProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-4">
              <img
                src={mentor.imageUrl}
                alt={mentor.name}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{mentor.name}</h2>
                <p className="text-lg text-gray-600">{mentor.title}</p>
                <p className="text-sm text-gray-500">{mentor.institution}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">About</h3>
            <p className="mt-2 text-gray-600">{mentor.bio}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Education</h3>
            <div className="mt-2 space-y-2">
              {mentor.education.map((edu, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <GraduationCap className="h-5 w-5 text-indigo-500 mr-2" />
                  {edu.degree} - {edu.school} ({edu.year})
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {mentor.expertise.map((exp) => (
                <span
                  key={exp}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Availability</h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 text-indigo-500 mr-2" />
                {mentor.availability.hours} ({mentor.availability.timeZone})
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                Next Available: {mentor.availability.nextAvailable}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
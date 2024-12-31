import React from 'react';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { ApplicationSample } from '../../types/applications';

interface ApplicationCardProps {
  application: ApplicationSample;
  onView: (id: string) => void;
}

export function ApplicationCard({ application, onView }: ApplicationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{application.studentName}</h3>
            <p className="mt-1 text-sm text-gray-600">{application.intendedMajor}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {application.gpa} GPA
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-500">
            <GraduationCap className="h-4 w-4 mr-2" />
            {application.acceptedSchools[0]}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2" />
            {application.essays.length} Essays
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key Highlights:</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Award className="h-4 w-4 mr-2 text-indigo-500" />
              {application.extracurriculars[0].activity}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-indigo-500" />
              {application.recommendations.length} Letters of Recommendation
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {application.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => onView(application.id)}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Full Application
          </button>
        </div>
      </div>
    </div>
  );
}
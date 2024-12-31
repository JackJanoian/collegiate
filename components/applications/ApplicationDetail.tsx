import React from 'react';
import { ApplicationSample } from '../../types/applications';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

interface ApplicationDetailProps {
  application: ApplicationSample;
  onClose: () => void;
}

export function ApplicationDetail({ application, onClose }: ApplicationDetailProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{application.studentName}</h2>
              <p className="mt-1 text-lg text-gray-600">{application.intendedMajor}</p>
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

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Profile</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-indigo-500 mr-2" />
                  <span className="text-gray-600">GPA: {application.gpa}</span>
                </div>
                {application.testScores.sat && (
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-600">
                      SAT: {application.testScores.sat.math + application.testScores.sat.verbal} 
                      (M: {application.testScores.sat.math}, V: {application.testScores.sat.verbal})
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Accepted Schools</h3>
              <div className="space-y-2">
                {application.acceptedSchools.map((school) => (
                  <div key={school} className="flex items-center">
                    <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-600">{school}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Essays</h3>
            <div className="space-y-6">
              {application.essays.map((essay) => (
                <div key={essay.id} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">{essay.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{essay.prompt}</p>
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-900">Analysis:</h5>
                    <p className="mt-1 text-sm text-gray-600">{essay.analysis}</p>
                  </div>
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-900">Key Strengths:</h5>
                    <ul className="mt-1 list-disc list-inside space-y-1">
                      {essay.strengths.map((strength, index) => (
                        <li key={index} className="text-sm text-gray-600">{strength}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Extracurricular Activities</h3>
            <div className="space-y-4">
              {application.extracurriculars.map((activity, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">{activity.activity}</h4>
                  <p className="mt-1 text-sm text-gray-600">{activity.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{activity.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
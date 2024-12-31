import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Award, BookOpen } from 'lucide-react';
import { ApplicationSample } from '../../types/applications';

interface ProfileCardProps {
  profile: ApplicationSample;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Header with Tags */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{profile.studentName}</h2>
            <div className="flex items-center text-indigo-600 mt-1">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>{profile.intendedMajor}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Accepted Schools */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Accepted Schools:</h3>
          <div className="flex flex-wrap gap-2">
            {profile.acceptedSchools.map((school) => (
              <span
                key={school}
                className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
              >
                {school}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatBox
            label="GPA"
            value={profile.gpa.toFixed(2)}
            icon={BookOpen}
          />
          <StatBox
            label="SAT"
            value={profile.testScores.sat ? 
              `${profile.testScores.sat.math + profile.testScores.sat.verbal}` : 
              'N/A'}
            icon={Award}
          />
          <StatBox
            label="Essays"
            value={profile.essays.length.toString()}
            icon={BookOpen}
          />
          <StatBox
            label="Activities"
            value={profile.extracurriculars.length.toString()}
            icon={GraduationCap}
          />
        </div>

        {/* Expandable Content */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-700"
        >
          <span className="mr-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6">
            {/* Extracurriculars */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extracurriculars</h3>
              <div className="grid gap-3">
                {profile.extracurriculars.map((activity, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">{activity.activity}</h4>
                    <p className="text-sm text-gray-600 mt-1">{activity.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{activity.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Essays */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Essays</h3>
              <div className="grid gap-3">
                {profile.essays.map((essay) => (
                  <div key={essay.id} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">{essay.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{essay.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface StatBoxProps {
  label: string;
  value: string;
  icon: React.ElementType;
}

function StatBox({ label, value, icon: Icon }: StatBoxProps) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg text-center">
      <Icon className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
      <div className="text-xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}
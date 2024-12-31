import React from 'react';
import { Clock, Award, Briefcase } from 'lucide-react';
import { Activity } from '../../types/extracurriculars';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const Icon = activity.icon;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Icon className="h-6 w-6 text-indigo-600" />
            <h3 className="ml-2 text-xl font-semibold text-gray-900">{activity.title}</h3>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {activity.category}
          </span>
        </div>

        <p className="mt-4 text-gray-600">{activity.description}</p>

        <div className="mt-6 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          {activity.timeCommitment.hoursPerWeek} hours/week • {activity.timeCommitment.duration}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Key Benefits:</h4>
          <ul className="mt-2 space-y-1">
            {activity.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {activity.recognitions && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900 flex items-center">
              <Award className="h-4 w-4 mr-2 text-indigo-600" />
              Recognition Opportunities:
            </h4>
            <ul className="mt-2 space-y-1">
              {activity.recognitions.map((recognition, index) => (
                <li key={index} className="text-sm text-gray-600 ml-6">• {recognition}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-indigo-600" />
            Career Relevance:
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {activity.careerRelevance.map((career, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {career}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
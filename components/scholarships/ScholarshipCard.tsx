import React from 'react';
import { Calendar, DollarSign, GraduationCap, FileText } from 'lucide-react';
import { Scholarship } from '../../types/scholarships';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{scholarship.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{scholarship.provider}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <DollarSign className="h-4 w-4 mr-1" />
            {formatCurrency(scholarship.amount)}
          </span>
        </div>

        <p className="mt-4 text-gray-600">{scholarship.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            Deadline: {formatDate(scholarship.deadline)}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <GraduationCap className="h-4 w-4 mr-2" />
            Min. GPA: {scholarship.eligibility.gpa}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
          <ul className="mt-2 space-y-1">
            {scholarship.requirements.map((req, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <FileText className="h-4 w-4 mr-2 text-indigo-500" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-2">
          {scholarship.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
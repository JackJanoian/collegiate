import React from 'react';
import { School } from '../../types/lists';
import { GraduationCap, MapPin, Calculator, Users, Trophy } from 'lucide-react';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(amount);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{school.name}</h3>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
            Rank #{school.ranking}
          </span>
        </div>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{school.location.city}, {school.location.state}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calculator className="h-4 w-4 mr-2" />
            <span>Acceptance Rate: {school.acceptanceRate}%</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>Enrollment: {school.enrollment.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Trophy className="h-4 w-4 mr-2" />
            <span>SAT: {school.satRange.math[0]}-{school.satRange.math[1]} (Math), 
                  {school.satRange.verbal[0]}-{school.satRange.verbal[1]} (Verbal)</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Top Majors:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {school.topMajors.map((major, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {major}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Tuition (Out of State)</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(school.tuition.outOfState)}
              </p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
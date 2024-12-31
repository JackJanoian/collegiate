import React from 'react';
import { Search } from 'lucide-react';

interface MentorSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function MentorSearch({ value, onChange }: MentorSearchProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-ilm-500 focus:border-ilm-500 sm:text-sm"
        placeholder="Search mentors by name, expertise, or keywords..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
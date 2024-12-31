import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DisclosureProps {
  title: string;
  content: string;
}

export function Disclosure({ title, content }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-medium">{title}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-200">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
}
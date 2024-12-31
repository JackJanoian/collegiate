import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-indigo-700 dark:bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to make a difference?</span>
          <span className="block text-indigo-200">Join our global mentorship community today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <Link
            to="/become-mentor"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Become a Mentor
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
          >
            <Heart className="mr-2 h-5 w-5" />
            Support Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
}
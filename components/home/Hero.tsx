import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                Global Mentorship Platform
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl xl:text-6xl">
              <span className="block">Mentoring the</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Next Generation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
              Connecting ambitious middle and high school students globally with mentors from Ivy League
              and top-tier universities for personalized guidance and support.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-4">
              <Link
                to="/find-mentor"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Find a Mentor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/become-mentor"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students collaborating"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
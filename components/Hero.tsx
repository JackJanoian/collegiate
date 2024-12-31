import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Your Journey to</span>{' '}
                <span className="block text-ilm-500 dark:text-ilm-400 xl:inline">College Success</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Get personalized guidance from successful Ivy League students who know exactly what it takes to get in. From application strategy to test prep, we'll help you achieve your college dreams.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <div className="rounded-md shadow">
                  <a
                    href="/mentorship"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ilm-500 hover:bg-ilm-600 dark:bg-ilm-500 dark:hover:bg-ilm-600 md:py-4 md:text-lg md:px-10"
                  >
                    Find a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="rounded-md shadow">
                  <a
                    href="/join-team"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-ilm-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-ilm-400 dark:border-gray-600 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    Become a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Diverse group of graduates celebrating"
        />
      </div>
    </div>
  );
}
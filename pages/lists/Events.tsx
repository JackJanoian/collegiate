import React from 'react';
import { EventList } from '../../components/events/EventList';
import { EventFilters } from '../../components/events/EventFilters';
import { EventOverview } from '../../components/events/EventOverview';

export function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventOverview />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <EventFilters />
          </div>
          <div className="lg:col-span-3">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
}
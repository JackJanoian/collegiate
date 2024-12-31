import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Event } from '../../types/events';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            event.type === 'virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {event.type}
          </span>
        </div>

        <p className="mt-2 text-gray-600">{event.description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees} attendees
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-ilm-600 hover:bg-ilm-700">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
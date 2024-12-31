import React from 'react';
import { EventCard } from './EventCard';
import { useEvents } from '../../hooks/useEvents';

export function EventList() {
  const { events, loading } = useEvents();

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
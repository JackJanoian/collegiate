import React from 'react';
import { ProfileCard } from './ProfileCard';
import { ApplicationSample } from '../../types/applications';

interface ProfileGridProps {
  profiles: ApplicationSample[];
}

export function ProfileGrid({ profiles }: ProfileGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
import React from 'react';

const partners = [
  {
    name: 'Harvard University',
    logo: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Yale University',
    logo: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Stanford University',
    logo: 'https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'MIT',
    logo: 'https://images.unsplash.com/photo-1581362140999-7225f289c811?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
  },
];

export function Partners() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Trusted By Leading Institutions
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
            Our University Partners
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="col-span-1 flex justify-center items-center"
            >
              <img
                className="h-20 object-contain filter dark:brightness-0 dark:invert"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
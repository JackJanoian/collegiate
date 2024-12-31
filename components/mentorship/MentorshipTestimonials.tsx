import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "My mentor helped me craft the perfect college essay and guided me through every step of the application process. I got into my dream school!",
    author: "Emily Chen",
    school: "Accepted to Stanford University",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The SAT prep sessions were incredible. My mentor taught me strategies I hadn't learned anywhere else, and my score improved by 200 points!",
    author: "Michael Rodriguez",
    school: "Accepted to Harvard University",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Having a mentor who recently went through the same process was invaluable. They understood exactly what I was going through and knew how to help.",
    author: "Sarah Kim",
    school: "Accepted to Yale University",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function MentorshipTestimonials() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear from students who achieved their dreams with our mentors
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-ilm-600 dark:text-ilm-400">
                    {testimonial.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
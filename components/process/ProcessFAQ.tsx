import React from 'react';
import { Disclosure } from './Disclosure';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'When should I start preparing for college applications?',
    answer: 'It\'s best to start early! Begin thinking about college during your freshman year and start actively preparing by sophomore year. This gives you time to build a strong academic record, participate in meaningful activities, and research schools thoroughly.',
  },
  {
    question: 'How many colleges should I apply to?',
    answer: 'Most counselors recommend applying to 8-12 schools with a mix of reach, target, and safety schools. This gives you the best chance of acceptance while keeping the application process manageable.',
  },
  {
    question: 'What are the most important factors in college applications?',
    answer: 'The most important factors typically include academic performance (GPA and course rigor), standardized test scores (SAT/ACT), extracurricular activities, essays, and letters of recommendation.',
  },
];

export function ProcessFAQ() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about the college application process
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                title={faq.question}
                content={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
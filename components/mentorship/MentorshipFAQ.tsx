import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do mentoring sessions work?",
    answer: "Sessions are conducted via video call and typically last 60 minutes. You'll connect with your mentor through our secure platform to discuss your goals, review materials, and get personalized guidance."
  },
  {
    question: "What qualifications do your mentors have?",
    answer: "All our mentors are current students or recent graduates from Ivy League universities with strong academic records and extensive experience in their areas of expertise."
  },
  {
    question: "How much do sessions cost?",
    answer: "Session rates range from $30-40 per hour, depending on the mentor's experience and specialization. Package discounts are available for multiple sessions."
  },
  {
    question: "Can I switch mentors if needed?",
    answer: "Yes, you can try different mentors until you find the perfect match. We want to ensure you have the best possible mentoring experience."
  },
  {
    question: "How often should I meet with my mentor?",
    answer: "Meeting frequency varies based on your needs and goals. Most students meet weekly or bi-weekly, with increased frequency during critical periods like application deadlines."
  }
];

export function MentorshipFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-ilm-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-ilm-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
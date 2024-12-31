import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export function ProcessSupport() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Need Help?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is here to support you every step of the way
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <MessageCircle className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Live Chat</h3>
            <p className="mt-2 text-base text-gray-500">
              Chat with our support team in real-time
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Start Chat
            </button>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Mail className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email Support</h3>
            <p className="mt-2 text-base text-gray-500">
              Get answers within 24 hours
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Send Email
            </button>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Phone className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone Support</h3>
            <p className="mt-2 text-base text-gray-500">
              Speak with an advisor directly
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
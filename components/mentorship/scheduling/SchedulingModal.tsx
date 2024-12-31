import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PaymentForm } from './PaymentForm';
import { Mentor } from '../../../types/mentorship';

interface SchedulingModalProps {
  mentor: Mentor;
  onClose: () => void;
}

export function SchedulingModal({ mentor, onClose }: SchedulingModalProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelected = (time: string) => {
    setSelectedTime(time);
    setShowPayment(true);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Schedule with {mentor.name}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          {!showPayment ? (
            <div className="calendly-inline-widget" 
              data-url={`https://calendly.com/${mentor.calendlyUsername}`} 
              style={{ minWidth: '320px', height: '600px' }} />
          ) : (
            <PaymentForm 
              mentor={mentor}
              selectedTime={selectedTime}
              onBack={() => setShowPayment(false)}
              onSuccess={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
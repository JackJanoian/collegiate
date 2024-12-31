import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import { Mentor } from '../../../types/mentorship';
import { processPayment } from '../../../utils/payment';

interface PaymentFormProps {
  mentor: Mentor;
  selectedTime: string;
  onBack: () => void;
  onSuccess: () => void;
}

export function PaymentForm({ mentor, selectedTime, onBack, onSuccess }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError('');

    try {
      await processPayment({
        cardNumber,
        expiry,
        cvc,
        amount: mentor.sessionRate,
        mentorId: mentor.id,
        sessionTime: selectedTime
      });
      onSuccess();
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-ilm-600 dark:text-ilm-400 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to scheduling
      </button>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Session Details
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {new Date(selectedTime).toLocaleString()}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          ${mentor.sessionRate} - 60 minute session
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="4242 4242 4242 4242"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Expiry
            </label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              CVC
            </label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="123"
              required
            />
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={processing}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ilm-600 hover:bg-ilm-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ilm-500 disabled:opacity-50"
        >
          <Lock className="h-4 w-4 mr-2" />
          {processing ? 'Processing...' : 'Pay Securely'}
        </button>
      </form>
    </div>
  );
}
"use client";

export default function ThankYouModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md text-center p-8 text-black">
        <div className="mb-4 flex justify-center">
          <svg
            className="h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-xl font-bold mb-3">Demo Request Received</h2>

        <p className="text-gray-800 mb-6">
          Thank you. A member of our team will be in touch shortly to confirm
          your demo.
        </p>

        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#1f3a60] text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

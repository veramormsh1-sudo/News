import React from 'react';

const PodcastBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">

              <span className="text-sm font-medium text-gray-700">Podcast - Reuters World News</span>
            </div>
            <span className="text-sm text-gray-600">Syrian mass grave, US data darkness and French pensions</span>
          </div>
          <button className="ml-auto p-1 text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastBanner;
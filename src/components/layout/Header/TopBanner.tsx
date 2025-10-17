import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-white">
              Exclusive news, data and analytics for financial market professionals
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white bg-blue-600 px-2 py-1 text-xs rounded">
              LSEG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
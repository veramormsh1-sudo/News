import React from 'react';
import { AnimatedLogo } from '../ui/common';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <AnimatedLogo />
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reuters</h1>
        <p className="text-gray-600 text-center">Breaking International News & Views</p>
      </div>
      <div className="mt-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
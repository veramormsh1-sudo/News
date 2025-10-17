import React, { useState } from 'react';

const FeedbackTab: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <button
        className="transform -rotate-90 origin-center
                   bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white 
                   px-6 py-3 rounded-t-lg shadow-lg
                   hover:from-[#E65A00] hover:to-[#FF6600] 
                   transition-all duration-300 ease-in-out
                   font-medium text-sm tracking-wide
                   border border-transparent hover:border-white/20
                   hover:shadow-xl hover:scale-105"
        style={{ 
          transformOrigin: 'center',
          marginRight: '-20px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-2">
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" 
            />
          </svg>
          <span>Feedback</span>
        </div>
      </button>
    </div>
  );
};

export default FeedbackTab;